import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserDetail from "../views/UserDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users/:keyword",
      name: "users",
      component: () => Users,
      props: true,
    },
    {
      path: "/user/:username",
      name: "userdetail",
      component: () => UserDetail,
      props: true,
    },
  ],
});

export default router;
