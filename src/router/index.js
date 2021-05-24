import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Index.vue'; //component的自訂名稱
import ProductDetail from '@/views/product_detail/Index.vue';
import UnStore from '@/views/unstore/Index.vue';
import Customized from '@/views/customized/Index.vue';
import TestSort from '@/views/test_sort/Index.vue';
import TestResult from '@/views/test_result/Index.vue';
import TestQa from '@/views/test_qa/Index.vue';
import Game from '@/views/game/Index.vue';

// 動態載入（延遲）
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// const About = () => import(/* webpackChunkName: "about" */ "../views/About.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/product_detail',
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/unstore',
        name: 'UnStore',
        component: UnStore,
    },
    {
        path: '/customized',
        name: 'Customized',
        component: Customized,
    },
    {
        path: '/test_sort',
        name: 'TestSort',
        component: TestSort,
    },
    {
        path: '/test_result',
        name: 'TestResult',
        component: TestResult,
    },
    {
        path: '/test_qa',
        name: 'TestQa',
        component: TestQa,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //BASE_URL預設 '/'
    routes,
});

export default router;
