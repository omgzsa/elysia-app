import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from "@/assets/services.json";
import treatmentsData from "@/assets/treatments.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/szolgaltatas",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
      // if visited redirect to first category
      redirect: () => {
        return {
          name: "services.category",
          params: {
            category: sourceData[0].slug,
          },
        };
      },
    },
    {
      path: "/szolgaltatas/:category",
      name: "services.category",
      component: () => import("../views/ServicesCategoryView.vue"),
      props: true,
      beforeEnter(to) {
        const exists = sourceData.find(
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
      props: true,
      // beforeEnter(to) {
      //   const exists = treatmentsData.find(
      //     (item) => item.slug === to.params.slug
      //   );
      //   if (!exists) {
      //     return {
      //       name: "not.found",
      //       params: { pathMatch: to.path.substring(1).split("/") },
      //       query: to.query,
      //       hash: to.hash,
      //     };
      //   }
      // },
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
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
