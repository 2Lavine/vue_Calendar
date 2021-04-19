import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CalendarDay from "@/components/CalendarDay";
import CalendarMonth from "@/components/CalendarMonth";
import CalendarWeek from "@/components/CalendarWeek";
import CalendarYear from "@/components/CalendarYear";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/day",
    children: [
      {
        path: "/day",
        name: "CalendarDay",
        component: CalendarDay,
      },
      {
        path: "/month",
        name: "CalendarMonth",
        component: CalendarMonth,
      },
      {
        path: "/week",
        name: "CalendarWeek",
        component: CalendarWeek,
      },
      {
        path: "/year",
        name: "CalendarYear",
        component: CalendarYear,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
