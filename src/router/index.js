import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: (resolve) => require(['../views/Home.vue'], resolve)
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  base: '/vue/',
  // mode: 'history',
  routes
})

export default router
