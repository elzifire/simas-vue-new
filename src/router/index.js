//import vue router
import { createRouter, createWebHistory } from 'vue-router';

//import axios
import axios from 'axios';

//default base URL / EndPoint API
axios.defaults.baseURL = import.meta.env.VITE_URL_ENDPOINT;

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "Home" */ "../views/home/Index.vue"),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import("../views/profile/Index.vue"),
    },
    
    {
        path: '/post',
        name: 'post',
        component: () => import( /* webpackChunkName: "PostIndex" */ "../views/post/Index.vue"),
    },
    {
        path: '/tag/:slug',
        name: 'detail_tag',
        component: () => import( /* webpackChunkName: "TagShow" */ "../views/tag/Show.vue")
    },
    {
        path: '/category/:slug',
        name: 'detail_category',
        component: () => import( /* webpackChunkName: "CategoryShow" */ "../views/category/Show.vue")
    },
    {
        path: '/event',
        name: 'event',
        component: () => import( /* webpackChunkName: "EventIndex" */ "../views/event/Index.vue")
    },
    {
        path: '/event/:slug',
        name: 'detail_event',
        component: () => import( /* webpackChunkName: "EventShow" */ "../views/event/Show.vue")
    },
    {
        path: '/photo',
        name: 'photo',
        component: () => import( /* webpackChunkName: "PhotoIndex" */ "../views/photo/Index.vue")
    },
    {
        path: '/video',
        name: 'video',
        component: () => import( /* webpackChunkName: "VideoIndex" */ "../views/video/Index.vue")
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import( /* webpackChunkName: "ContactIndex" */ "../views/contact/Index.vue")
    },
    {
        path: '/:slug',
        name: 'detail_post',
        component: () => import( /* webpackChunkName: "PostShow" */ "../views/post/Show.vue")
    },
    {
        path: '/muadzin',
        name: 'muadzin',
        component: () => import( /* webpackChunkName: "MuadzinIndex" */ "../views/muadzin/Index.vue")
    },
    {
        path: '/history',
        name: 'history',
        component: () => import("../views/history/Index.vue"),
    },
    {
        path: '/management',
        name: 'management',
        component: () => import("../views/management/Index.vue"),
    },
    {
        path: '/visi',
        name: 'visi',
        component: () => import("../views/visi/Index.vue"),
    },
    {
        path: '/mualaf',
        name: 'mualaf',
        component: () => import("../views/mualaf/Index.vue"),
    },
    {
        path: '/slider',
        name: 'slider',
        component: () => import("../components/Slider.vue"),
    }


]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})

export default router