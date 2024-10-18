// src/plugins/directus.js
import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

export const directusPlugin = {
  install: (app, options) => {
    const client = createDirectus(options.url).with(rest());

    const directusService = {
      // Get all blog posts
      async getBlogs(query = {}) {
        return await client.request(
          readItems('Blog', {
            fields: ['id', 'status', 'datum', 'cim', 'slug', 'leiras', 'kep', 'kategoria'],
            ...query
          })
        );
      },

      // Get a single blog post
      async getBlog(id, query = {}) {
        return await client.request(
          readItem('Blog', id, {
            fields: ['id', 'status', 'datum', 'szerzo', 'cim', 'slug', 'szoveg', 'leiras', 'kep', 'link', 'kategoria'],
            ...query
          })
        );
      },
    };

    app.provide('$directus', directusService);
  }
};

export default directusPlugin;
