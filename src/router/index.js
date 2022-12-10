import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Users from "../views/Users.vue";
import UserDetail from "../views/UserDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // '/users' page won't be exist coz it's part of home page 
    // {
    //   path: "/users",
    //   name: "users",
    //   component: () => Users,
    // },
    {
      path: "/user/:username",
      name: "userdetail",
      component: () => UserDetail,
      props: true,
    },
  ],
});

export default router;
