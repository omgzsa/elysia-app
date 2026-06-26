import { ref, computed } from "vue";

// Module-level cache so the navbar + mobile navbar share a single fetch.
const raw = ref([]);
let started = false;

export function useNavigation(directusService) {
  async function load() {
    if (started) return;
    started = true;
    try {
      raw.value = await directusService.getMenu();
    } catch (err) {
      console.error("Error fetching navigation:", err);
      started = false; // allow a retry on the next mount
    }
  }

  // Categories with at least one treatment, shaped for TheDropdown.
  // (The static special pages have no treatments, so they drop out here and
  // stay hardcoded as their own links.)
  const menu = computed(() =>
    raw.value
      .filter((c) => c.Kezeles?.length)
      .map((c) => ({
        id: c.id,
        title: c.nev,
        submenu: c.Kezeles.map((t) => ({
          name: t.nev,
          slug: t.slug,
          category: c.slug,
        })),
      })),
  );

  return { menu, load };
}
