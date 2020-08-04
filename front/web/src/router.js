import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "index",
      },
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/Index/Index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About/Index.vue"),
    },
    {
      path: "/tags",
      name: "tags",
      component: () =>
        import(/* webpackChunkName: "tags" */ "./views/Tags/Index.vue"),
    },
    {
      path: "/tags/details",
      name: "tagsDetails",
      component: () =>
        import(/* webpackChunkName: "tags" */ "./views/Tags/Details.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () =>
        import(
          /* webpackChunkName: "categories" */ "./views/Categories/Index.vue"
        ),
    },
    {
      path: "/categories/details",
      name: "categoriesDetails",
      component: () =>
        import(
          /* webpackChunkName: "categories" */ "./views/Categories/Details.vue"
        ),
    },
  ],
});