import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";
import AddEditAnimalComponent from "../animals/pages/add-edit-animal.component.vue";
import Notifications from '../components/Notifications.vue'; // Asegúrate de que la ruta sea correcta
import UserProfile from '../profile/pages/UserProfile.vue'; // Asegúrate de que la ruta sea correcta
import AddAnimal from "../animals/pages/add-animal.component.vue";
import ViewVaccinesComponent from "../vaccines/pages/view-vaccines.component.vue";
import AddVaccineAnimalComponent from "../vaccines/pages/Add-Vaccine-Animal.component.vue";
import Layout from "../auth/pages/layout.componet.vue";

import LayoutApp from "../animals/pages/layout.component.vue";
import SignInComponent from "../auth/pages/sign-in.component.vue";
import SignUpComponent from "../auth/pages/sign-up.component.vue";
import PageNotFound from "../components/PageNotFound.vue";
import ViewNotificationsComponent from "../notifications/pages/view-notifications.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/auth/sign-in'
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: PageNotFound,
            meta: { title: 'Página No Encontrada' }
        },
        {
            path: `/home`,
            name: `App`,
            component: LayoutApp,
            children:[
                {
                    path: `/`,
                    redirect:`mi-app`
                },
                {
                    path: '/profile',
                    name: 'UserProfile',
                    component: UserProfile,
                    meta: { title: 'Perfil de Usuario' }
                },
                {
                    path:`animals`,
                    component: MyAnimalsComponent,
                    meta:{title:`MyAnimal`}
                },
                {
                    path: 'add-animal',
                    component: AddAnimal
                },
                {
                    path:`:id/add-edit-animal`,
                    component: AddEditAnimalComponent,
                    meta:{title:`AddOrEdit`},
                    name:`addOrEdit`
                },
                {
                    path: `/vaccines/:id`,
                    component:ViewVaccinesComponent,
                    name:'ViewVaccines',
                    meta:{title:`ViewVaccines`}
                },
                {
                    path: `/:id/add-vaccines`,
                    component: AddVaccineAnimalComponent,
                    name:'AddVaccines',
                    meta:{title:`AddVaccines`}
                },
                {
                    path: 'mi-app',
                    name: 'Home',
                    component: Notifications,
                    meta: { title: 'Home' }
                },
                {
                    path: 'notifications',
                    name: 'Notifications',
                    component: ViewNotificationsComponent,
                    meta: { title: 'Notificaciones' }
                },



            ]
        },

        //Rutas hijas
        {
            path: `/auth`,
            name: `Authentication`,
            component: Layout,
            meta: { requiresAuth: true },
            children:[
                {
                    path:``,
                    redirect:`sign-in`
                },
                {
                    path: `sign-in`,
                    name: `SignIn`,
                    component: SignInComponent
                },
                {
                    path: `sign-up`,
                    name: `SignUp`,
                    component: SignUpComponent
                }
            ]
        }


    ]

});

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
