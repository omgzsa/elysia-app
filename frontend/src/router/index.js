import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      path: "/szolgaltatasok",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/szolgaltatasok/borgyogyaszat",
      name: "services.borgyogyaszat",
      component: () => import("../views/services/Borgyogyaszat.vue"),
    },
    {
      path: "/szolgaltatasok/tudogyogyaszati-szakrendeles",
      name: "services.tudogyogyaszat",
      component: () => import("../views/services/Tudogyogyaszat.vue"),
    },
    {
      path: "/szolgaltatasok/idegsebeszeti-vizsgalatok",
      name: "services.idegsebeszet",
      component: () => import("../views/services/Idegsebeszet.vue"),
    },
    {
      path: "/szolgaltatasok/lezerkezelesek",
      name: "services.lezerkezeles",
      component: () => import("../views/services/Lezerkezeles.vue"),
    },
    {
      path: "/szolgaltatasok/orvos-esztetika",
      name: "services.esztetika",
      component: () => import("../views/services/OrvosEsztetika.vue"),
    },
    {
      path: "/szolgaltatasok/plasztikai-sebeszet",
      name: "services.plasztika",
      component: () => import("../views/services/Plasztika.vue"),
    },
    {
      path: "/szolgaltatasok/diagnosztikai-vizsgalatok",
      name: "services.diagnosztika",
      component: () => import("../views/services/Diagnosztika.vue"),
    },
    {
      path: "/szolgaltatasok/orvosi-termekek",
      name: "services.termekek",
      component: () => import("../views/services/Termekek.vue"),
    },
  ],
});

export default router;
