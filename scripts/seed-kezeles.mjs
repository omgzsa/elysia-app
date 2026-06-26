// scripts/seed-kezeles.mjs
//
// One-off migration: seed the Directus `Kezeles` collection from the static
// src/assets/treatments.json (+ thumbnails from src/assets/services.json).
//
// Usage:
//   node scripts/seed-kezeles.mjs            # dry run (no writes)
//   node scripts/seed-kezeles.mjs --apply    # actually create items + upload images
//
// Idempotent: existing Kezeles items (matched by slug) are skipped, so it is
// safe to re-run. Requires Node 18+ (global fetch / FormData / Blob).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const APPLY = process.argv.includes("--apply");
// Status the new treatments are created with. They were already reviewed as
// static content, so we publish them; flip to "draft" to review in Directus.
const STATUS = "published";

// ---------------------------------------------------------------------------
// env
// ---------------------------------------------------------------------------
const env = Object.fromEntries(
  readFileSync(join(root, ".env"), "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);
const API = env.VITE_ELYSIA_API_URL;
const TOKEN = env.VITE_ELYSIA_ADMIN_TOKEN;
if (!API || !TOKEN) throw new Error("Missing API url / admin token in .env");

// ---------------------------------------------------------------------------
// directus helpers
// ---------------------------------------------------------------------------
async function dx(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(opts.body && typeof opts.body === "string"
        ? { "Content-Type": "application/json" }
        : {}),
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  const json = text ? JSON.parse(text) : {};
  if (!res.ok) {
    throw new Error(
      `${opts.method || "GET"} ${path} -> ${res.status}: ${JSON.stringify(json.errors || json)}`,
    );
  }
  return json.data;
}

// ---------------------------------------------------------------------------
// content (structured) -> HTML for the `tartalom` rich-text field
// ---------------------------------------------------------------------------
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function paragraphs(text) {
  if (!text) return "";
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => `<p>${esc(s)}</p>`)
    .join("\n");
}
function heading(text) {
  return text ? `<h2>${esc(text)}</h2>` : "";
}
function list(title, items) {
  if (!items || !items.length) return "";
  const lis = items.map((i) => `<li>${esc(i.text)}</li>`).join("\n");
  return `${heading(title)}\n<ul>\n${lis}\n</ul>`;
}

// Mirrors the render order of ServiceTreatmentCard.vue.
function buildHtml(c = {}) {
  return [
    heading(c.title),
    paragraphs(c.description),
    heading(c.title2),
    paragraphs(c.description2),
    list(c.benefitsTitle, c.benefits),
    heading(c.title3),
    paragraphs(c.description3),
    list(c.benefitsTitle2, c.benefits2),
    heading(c.title4),
    paragraphs(c.description4),
    heading(c.title5),
    paragraphs(c.description5),
  ]
    .filter(Boolean)
    .join("\n");
}

// ---------------------------------------------------------------------------
// image upload (thumbnail -> directus_files uuid for `kep`)
// ---------------------------------------------------------------------------
const ctype = (f) =>
  f.endsWith(".png")
    ? "image/png"
    : f.endsWith(".jpg") || f.endsWith(".jpeg")
      ? "image/jpeg"
      : "image/webp";

async function uploadThumb(filename) {
  const buf = readFileSync(join(root, "src/assets/images/services", filename));
  const form = new FormData();
  form.append("file", new Blob([buf], { type: ctype(filename) }), filename);
  const res = await fetch(`${API}/files`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  const json = JSON.parse(await res.text());
  if (!res.ok) throw new Error(`upload ${filename}: ${JSON.stringify(json.errors)}`);
  return json.data.id;
}

// ---------------------------------------------------------------------------
// normalisation for matching
// ---------------------------------------------------------------------------
const norm = (s) => (s || "").trim().toLowerCase().replace(/\s+/g, " ");

// Category slug differs from json in one place (typo in Directus).
const categorySlugAlias = {
  "labor-es-diagnosztikai-vizsgalatok": "labor-es-dagnosztikai-vizsgalatok",
};

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
async function main() {
  const treatments = JSON.parse(
    readFileSync(join(root, "src/assets/treatments.json"), "utf8"),
  );
  const services = JSON.parse(
    readFileSync(join(root, "src/assets/services.json"), "utf8"),
  );

  // treatment slug -> thumbnail filename (from category submenus)
  const thumbBySlug = {};
  for (const s of services)
    for (const sm of s.submenu) thumbBySlug[sm.slug] = sm.image;

  // lookup maps from Directus
  const cats = await dx("/items/kategoria?fields=id,slug&limit=-1");
  const catBySlug = Object.fromEntries(cats.map((c) => [c.slug, c.id]));

  const docs = await dx("/items/Munkatarsak?fields=id,nev,slug&limit=-1");
  const docByName = Object.fromEntries(docs.map((d) => [norm(d.nev), d.id]));

  const existing = await dx("/items/Kezeles?fields=slug&limit=-1");
  const existingSlugs = new Set(existing.map((e) => e.slug));

  console.log(
    `Mode: ${APPLY ? "APPLY (writing)" : "DRY RUN"} | status=${STATUS}`,
  );
  console.log(
    `categories=${cats.length} doctors=${docs.length} existingKezeles=${existing.length}\n`,
  );

  let created = 0,
    skipped = 0;
  const warnings = [];

  for (const t of treatments) {
    if (existingSlugs.has(t.slug)) {
      skipped++;
      continue;
    }

    // category
    const jsonCatSlug = t.category?.[0]?.slug;
    const catSlug = categorySlugAlias[jsonCatSlug] || jsonCatSlug;
    const kategoria = catBySlug[catSlug];
    if (!kategoria) warnings.push(`[${t.slug}] no category for "${jsonCatSlug}"`);

    // doctors (match by name)
    const kapcsolodo_orvosok = [];
    for (const rd of t.relatedDoctor || []) {
      const id = docByName[norm(rd.name)];
      if (id) kapcsolodo_orvosok.push(id);
      else warnings.push(`[${t.slug}] doctor not found, skipped: "${rd.name}"`);
    }

    // thumbnail
    const thumb = thumbBySlug[t.slug];
    if (!thumb) warnings.push(`[${t.slug}] no thumbnail in services.json`);

    if (t.treatmentImages?.length)
      warnings.push(
        `[${t.slug}] has ${t.treatmentImages.length} before/after image(s) with no field in Kezeles (skipped)`,
      );

    const payload = {
      status: STATUS,
      nev: t.name,
      slug: t.slug,
      tartalom: buildHtml(t.content),
      kezelesi_ido: t.treatTime || null,
      gyakorisaga: t.frequency || null,
      kategoria: kategoria || null,
      // M2M junction: array of related Munkatarsak ids
      kapcsolodo_orvosok: kapcsolodo_orvosok.map((id) => ({
        Munkatarsak_id: id,
      })),
    };

    if (!APPLY) {
      console.log(
        `WOULD CREATE ${t.slug}  cat=${kategoria ?? "?"} docs=[${kapcsolodo_orvosok}] thumb=${thumb ?? "none"}`,
      );
      created++;
      continue;
    }

    if (thumb) payload.kep = await uploadThumb(thumb);
    await dx("/items/Kezeles", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log(`CREATED ${t.slug}`);
    created++;
  }

  console.log(`\nDone. created/would-create=${created} skipped=${skipped}`);
  if (warnings.length) {
    console.log(`\nWarnings (${warnings.length}):`);
    for (const w of warnings) console.log("  - " + w);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
