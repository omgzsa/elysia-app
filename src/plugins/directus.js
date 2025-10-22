// src/plugins/directus.js
import { createDirectus, rest, readItems, readItem } from "@directus/sdk";

export const directusPlugin = {
  install: (app, options) => {
    const client = createDirectus(options.url).with(rest());

    const directusService = {
      // Get all blog posts
      async getBlogs(query = {}) {
        return await client.request(
          readItems("Blog", {
            fields: [
              "id",
              "status",
              "datum",
              "cim",
              "slug",
              "leiras",
              "kep",
              "kategoria",
            ],
            ...query,
          }),
        );
      },

      // Get a single blog post
      async getBlog(id, query = {}) {
        return await client.request(
          readItem("Blog", id, {
            fields: [
              "id",
              "status",
              "datum",
              "szerzo",
              "cim",
              "slug",
              "szoveg",
              "leiras",
              "kep",
              "link",
              "kategoria",
            ],
            ...query,
          }),
        );
      },

      // Get all employees
      async getEmployees(query = {}) {
        return await client.request(
          readItems("Munkatarsak", {
            fields: [
              "id",
              "nev",
              "slug",
              "titulus",
              "kep",
              // "szakterulet",
              "bio",
              // "foglalas",
              // "foglalas_link",
              // "konzultacios_ido",
              // {
              //   kapcsolodo_kezelesek: {
              //     Kezeles_id: ["nev"],
              //   },
              // },
            ],
            ...query,
          }),
        );
      },

      // Get a single employee
      async getEmployee(slug, query = {}) {
        return await client.request(
          readItems("Munkatarsak", {
            fields: [
              "id",
              "nev",
              "slug",
              "titulus",
              "kep",
              "szakterulet",
              "bio",
              "foglalas",
              "foglalas_link",
              "konzultacios_ido",
              // {
              //   kapcsolodo_kezelesek: {
              //     Kezeles_id: ["nev"],
              //   },
              // },
            ],
            limit: 1,
            filter: {
              slug: {
                _eq: slug,
              },
            },
            ...query,
          }),
        );
      },

      // Get prices
      async getPrices(query = {}) {
        return await client.request(
          readItems("Arlista", {
            fields: ["id", "nev", "szolgaltatasok"],
            ...query,
          }),
        );
      },

      // Get pages
      async getPages() {
        return await client.request(
          readItems("Oldalak", {
            fields: ["uzenet"],
          }),
        );
      },
    };

    app.provide("$directus", {
      directusService,
      apiUrl: client.url,
    });
  },
};

export default directusPlugin;
