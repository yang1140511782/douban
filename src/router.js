import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home";
import ListDetail from './views/home/listDetail.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/homeListDetail/:id",
      name: "listDetail",
      component: ListDetail,
    },
    {
      path: "/film",
      name: "film",
      component: () => import( "./views/film/film.vue")
    },
    {
      path: "/book",
      name: "book",
      component: () => import( "./views/book/book.vue")
    },
    {
      path: "/radio",
      name: "radio",
      component: () => import( "./views/radio/radio.vue")
    },
    {
      path: "/group",
      name: "group",
      component: () => import( "./views/group/group.vue")
    },
  ]
});
