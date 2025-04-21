import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/Login.vue';
const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage, // This makes the login page the default
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;