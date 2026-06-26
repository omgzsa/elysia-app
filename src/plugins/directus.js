// src/plugins/directus.js
import {
    createDirectus,
    rest,
    readItems,
    readItem,
    readSingleton,
} from '@directus/sdk';

export const directusPlugin = {
    install: (app, options) => {
        const client = createDirectus(options.url).with(rest());

        const directusService = {
            // get homepage testimonials
            async getTestimonials(query = {}) {
                return await client.request(
                    readItems('Velemenyek', {
                        fields: ['id', 'nev', 'tartalom'],
                        ...query,
                    }),
                );
            },

            // get homepage gallery
            async getHomeGallery(query = {}) {
                return await client.request(
                    readItems('Galeria', {
                        fields: ['kepek.directus_files_id'],
                        ...query,
                    }),
                );
            },

            // Get all blog posts
            async getBlogs(query = {}) {
                return await client.request(
                    readItems('Blog', {
                        fields: [
                            'id',
                            'status',
                            'datum',
                            'cim',
                            'slug',
                            'leiras',
                            'kep',
                            'kategoria',
                        ],
                        ...query,
                    }),
                );
            },

            // Get a single blog post
            async getBlog(id, query = {}) {
                return await client.request(
                    readItem('Blog', id, {
                        fields: [
                            'id',
                            'status',
                            'datum',
                            'szerzo',
                            'cim',
                            'slug',
                            'szoveg',
                            'leiras',
                            'kep',
                            'link',
                            'kategoria',
                        ],
                        ...query,
                    }),
                );
            },

            // Get all employees
            async getEmployees(query = {}) {
                return await client.request(
                    readItems('Munkatarsak', {
                        fields: [
                            'id',
                            'nev',
                            'slug',
                            'titulus',
                            'kep',
                            // "szakterulet",
                            'bio',
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
                    readItems('Munkatarsak', {
                        fields: [
                            'id',
                            'nev',
                            'slug',
                            'titulus',
                            'kep',
                            'szakterulet',
                            'bio',
                            'foglalas',
                            'foglalas_link',
                            'konzultacios_ido',
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

            // Get all treatment categories
            async getKategoriak(query = {}) {
                return await client.request(
                    readItems('kategoria', {
                        fields: ['id', 'nev', 'slug', 'kep', 'kiemelt', 'sort'],
                        sort: ['sort', 'id'],
                        ...query,
                    }),
                );
            },

            // Get the services navigation: every published category with its
            // published treatments nested (single request, used by the navbars).
            async getMenu(query = {}) {
                return await client.request(
                    readItems('kategoria', {
                        fields: [
                            'id',
                            'nev',
                            'slug',
                            { Kezeles: ['id', 'nev', 'slug'] },
                        ],
                        filter: { status: { _eq: 'published' } },
                        sort: ['sort', 'id'],
                        deep: {
                            Kezeles: {
                                _filter: { status: { _eq: 'published' } },
                                _sort: ['sort', 'id'],
                            },
                        },
                        ...query,
                    }),
                );
            },

            // Get a single category by slug
            async getKategoria(slug, query = {}) {
                return await client.request(
                    readItems('kategoria', {
                        fields: ['id', 'nev', 'slug', 'kep'],
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

            // Get treatments belonging to a category (by category slug)
            async getKezelesek(categorySlug, query = {}) {
                // Merge the caller's filter (e.g. status) with the category
                // filter instead of letting the spread overwrite it.
                const { filter, ...rest } = query;
                return await client.request(
                    readItems('Kezeles', {
                        fields: ['id', 'nev', 'slug', 'kep'],
                        sort: ['sort', 'id'],
                        filter: {
                            _and: [
                                { kategoria: { slug: { _eq: categorySlug } } },
                                ...(filter ? [filter] : []),
                            ],
                        },
                        ...rest,
                    }),
                );
            },

            // Get a single treatment by slug (with category + related doctors)
            async getKezeles(slug, query = {}) {
                return await client.request(
                    readItems('Kezeles', {
                        fields: [
                            'id',
                            'nev',
                            'slug',
                            'tartalom',
                            'kezelesi_ido',
                            'gyakorisaga',
                            'kep',
                            { kategoria: ['id', 'nev', 'slug'] },
                            {
                                kapcsolodo_orvosok: [
                                    {
                                        Munkatarsak_id: [
                                            'id',
                                            'nev',
                                            'slug',
                                            'titulus',
                                            'kep',
                                            'bio',
                                        ],
                                    },
                                ],
                            },
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
                    readItems('Arlista', {
                        fields: ['id', 'nev', 'szolgaltatasok'],
                        ...query,
                    }),
                );
            },

            // a singleton query
            async getHomepageSlider(query = {}) {
                return await client.request(
                    readSingleton('Slider', {
                        filter: {
                            status: {
                                _eq: 'published',
                            },
                        },
                        ...query,
                    }),
                );
            },

            // Get pages
            async getPages() {
                return await client.request(
                    readItems('Oldalak', {
                        fields: ['nev', 'uzenet'],
                    }),
                );
            },
        };

        app.provide('$directus', {
            directusService,
            apiUrl: client.url,
        });
    },
};

export default directusPlugin;
