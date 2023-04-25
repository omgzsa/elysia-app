import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import servicesData from "@/assets/services.json";
import treatmentsData from "@/assets/treatments.json";
import employeesData from "@/assets/coworkers.json";
import blogsData from "@/assets/blogs.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/szolgaltatas/orvosi-termekek/z0-skin-health",
      name: "zero.skin",
      component: () => import("../views/ZeroSkin.vue"),
    },
    {
      path: "/szolgaltatas",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/szolgaltatas/tudogyogyaszat",
      name: "service.pulmonology",
      component: () => import("../views/services/Tudogyogyaszat.vue"),
    },
    {
      path: "/szolgaltatas/idegsebeszet",
      name: "service.neurosurgery",
      component: () => import("../views/services/Idegsebeszet.vue"),
    },
    {
      path: "/szolgaltatas/szomnologia",
      name: "service.somnology",
      component: () => import("../views/services/Szomnologia.vue"),
    },
    {
      path: "/szolgaltatas/allergologia",
      name: "service.allergology",
      component: () => import("../views/services/Allergologia.vue"),
    },
    {
      path: "/szolgaltatas/:category",
      name: "services.category",
      component: () => import("../views/ServicesCategoryView.vue"),
      props: true,
      beforeEnter(to) {
        const exists = servicesData.find(
          (item) => item.slug === to.params.category
        );
        if (!exists) {
          return {
            name: "not.found",
            // allows keeping the URL in the browser address bar while rendering the 404 page
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/szolgaltatas/:category/:slug",
      name: "service.single",
      component: () => import("../views/ServiceSingleView.vue"),
      props: true,
      beforeEnter(to) {
        const exists = treatmentsData.find(
          (item) => item.slug === to.params.slug
        );
        if (!exists) {
          return {
            name: "not.found",
            // allows keeping the URL in the browser address bar while rendering the 404 page
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/munkatarsak",
      name: "employees.show",
      component: () => import("../views/EmployeesView.vue"),
    },
    {
      path: "/munkatarsak/:slug",
      name: "employee.single",
      component: () => import("../views/EmployeeSingleView.vue"),
      props: true,
      beforeEnter(to) {
        const exists = employeesData.find(
          (item) => item.slug === to.params.slug
        );
        if (!exists) {
          return {
            name: "not.found",
            // allows keeping the URL in the browser address bar while rendering the 404 page
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/araink",
      name: "prices.show",
      component: () => import("../views/PricesView.vue"),
    },
    {
      path: "/gyik",
      name: "faq.show",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/blog",
      name: "blogs.show",
      component: () => import("../views/BlogsView.vue"),
    },
    {
      path: "/blog/:slug",
      name: "blog.single",
      component: () => import("../views/BlogSingleView.vue"),
      props: true,
      beforeEnter(to) {
        const exists = blogsData.find((item) => item.slug === to.params.slug);
        if (!exists) {
          return {
            name: "not.found",
            // allows keeping the URL in the browser address bar while rendering the 404 page
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not.found",
      component: () => import("../components/TheNotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: "smooth" });
        }, 500);
      });
    }
  },
});

export default router;
