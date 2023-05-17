import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import DetailView from "../views/Detail.vue";
import CreateView from "../views/Create.vue";
import EditView from "../views/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    },
  ],
});

export default router;
