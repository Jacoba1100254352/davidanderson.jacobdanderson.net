import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import ECE6254 from "../views/ECE6254.vue";
import ECE6271 from "../views/ECE6271.vue";
import Lab from "../views/Lab.vue";
import Consulting from "../views/Consulting.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/ece6254",
    name: "ECE6254",
    component: ECE6254,
  },
  {
    path: "/ece6271",
    name: "ECE6271",
    component: ECE6271,
  },
  {
    path: "/lab",
    name: "Lab",
    component: Lab,
  },
  {
    path: "/consulting",
    name: "Consulting",
    component: Consulting,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
