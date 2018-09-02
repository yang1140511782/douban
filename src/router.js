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
      path: "/home",  //主页
      name: "home",
      component: Home,
    },
    {
      path: "/homeListDetail/:id",  //主页详情
      name: "listDetail",
      component: ListDetail,
    },
    {
      path: "/film",  //电影
      name: "film",
      component: () => import( "./views/film/film.vue")
    },
    {
      path: "/book",  //图书
      name: "book",
      component: () => import( "./views/book/book.vue")
    },
    {
      path: "/radio", //广播
      name: "radio",
      component: () => import( "./views/radio/radio.vue")
    },
    {
      path: "/group", //小组
      name: "group",
      component: () => import( "./views/group/group.vue")
    },
    {
      path:'/film/hotMovie', //影院热映
      name: 'hotMovie',
      component: () => import('./views/film/hotMovie.vue')
    },
    /**
     * 404页面必须置于路由最底部
     */
    {
      path: '*',
      component: () => import( './views/home/notFound.vue')
    }
  ]
});
