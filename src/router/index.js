import { createRouter, createWebHistory } from 'vue-router';
import Notifications from '../components/Notifications.vue'; // Asegúrate de que la ruta sea correcta
import UserProfile from '../components/UserProfile.vue'; // Asegúrate de que la ruta sea correcta

const routes = [
    {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications,
        meta: { title: 'Notificaciones' }
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: { title: 'Perfil de Usuario' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'FarmGuard';
    document.title = `${baseTitle} | ${to.meta.title}`;
    next();
});

export default router;