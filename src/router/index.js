import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName:"login" */ "@/views/home/home"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(  "@/views/home/home.vue"),
  },
  {
    path: "/health",
    name: "health",
    component: () =>
      import(  "@/views/health/health.vue"),
  },
  {
    path: "/review",
    name: "review",
    component: () => import("@/views/review/review.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/contact.vue"),
  },
  {
    path: "/disclosure",
    name: "disclosure",
    component: () => import("@/views/disclosure/disclosure.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/privacy/privacy.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("@/views/terms/terms.vue"),
  },
  {
    path: "/MaleEnhancement",
    name: "MaleEnhancement",
    component: () => import("@/views/MaleEnhancement/mhg"),
  },
  {
    path: "/MaleEnhancement/mhg",
    name: "mhg",
    component: () =>
      import(  "@/views/MaleEnhancement/mhg.vue"),
  },
  {
    path: "/MaleEnhancement/mer",
    name: "mer",
    component: () =>
      import(  "@/views/MaleEnhancement/mer.vue"),
  },
  {
    path: "/MaleEnhancement/faq",
    name: "faq",
    component: () =>
      import(  "@/views/MaleEnhancement/faq.vue"),
  },
  {
    path: "/MaleEnhancement/orp",
    name: "orp",
    component: () =>
      import(  "@/views/MaleEnhancement/orp.vue"),
  },
  {
    path: "/MaleEnhancement/cu",
    name: "cu",
    component: () =>
      import(  "@/views/MaleEnhancement/cu.vue"),
  },
  {
    path: "/MaleEnhancement/offer",
    name: "offer",
    component: () =>
      import(  "@/views/MaleEnhancement/offer.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});
//路由导航守卫
router.beforeEach((to, from, next) => {
  // console.log(1111111111111111);
  //获取本地存储的token
  // let user_token = localStorage.getItem("chtoken");
  // if (user_token) {
  //   console.log(22222222222);
  //   //如果用户信息存在则往下执行。
  //   next();
  // } else {
  //   //如果用户token不存在则跳转到login页面
  //   if (to.path === "/home") {
  //     console.log(3333333333333);
  //     next();
  //   } else {
  //     console.log(444444444444);
  //     next("/home");
  //   }
  // }
  // console.log(to);
  // console.log(from);
  next();
});

export default router;
