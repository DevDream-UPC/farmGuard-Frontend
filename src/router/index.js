import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";
import AddEditAnimalComponent from "../animals/pages/add-edit-animal.component.vue";
import Notifications from '../components/Notifications.vue'; // Asegúrate de que la ruta sea correcta
import UserProfile from '../components/UserProfile.vue'; // Asegúrate de que la ruta sea correcta

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/animals`,component: MyAnimalsComponent,meta:{title:`MyAnimal`}},
        {path:`/:id/add-edit-animal`,component: AddEditAnimalComponent,meta:{title:`AddOrEdit`},name:`addOrEdit`},
        {
            path: '/',
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

    ]

});

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;