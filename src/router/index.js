import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";
import AddEditAnimalComponent from "../animals/pages/add-edit-animal.component.vue";
import Notifications from '../components/Notifications.vue'; // Asegúrate de que la ruta sea correcta
import UserProfile from '../components/UserProfile.vue'; // Asegúrate de que la ruta sea correcta
import AddAnimal from "../animals/pages/add-animal.component.vue";
import ViewVaccinesComponent from "../vaccines/pages/view-vaccines.component.vue";
import AddVaccineAnimalComponent from "../vaccines/pages/Add-Vaccine-Animal.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/animals`,component: MyAnimalsComponent,meta:{title:`MyAnimal`}},
        {path: '/add-animal', component: AddAnimal },
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
        },
        {
            path: `/:id/vaccines`,
            component:ViewVaccinesComponent,
            name:'ViewVaccines',
            meta:{title:`ViewVaccines`}
        },
        {
            path: `/:id/add-vaccines`,
            component: AddVaccineAnimalComponent,
            name:'AddVaccines',
            meta:{title:`AddVaccines`}
        }

    ]

});

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
