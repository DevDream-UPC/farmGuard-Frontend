import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";
import AddEditAnimalComponent from "../animals/pages/add-edit-animal.component.vue";
import Notifications from '../components/Notifications.vue'; // Asegúrate de que la ruta sea correcta
import UserProfile from '../components/UserProfile.vue'; // Asegúrate de que la ruta sea correctaimport AnimalView from '../animals/pages/animal-view.component.vue'; // Asegúrate de que la ruta sea correcta
import AnimalView from "../animals/pages/AnimalView.vue";
import VaccineList from "../animals/components/VaccineList.vue";
import newVaccine from "../animals/pages/AnimalView.vue";
import AddVaccineView from '../animals/pages/AnimalView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/animals`,component: MyAnimalsComponent,meta:{title:`MyAnimal`}},
        {path:`/:id/add-edit-animal`,component: AddEditAnimalComponent,meta:{title:`AddOrEdit`},name:`addOrEdit`},
        { path: '/add-vaccine', name: 'AddVaccineView', component: AddVaccineView },
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
            path: '/animals',
            name: 'Animals',
            component: AnimalView,
            meta: {
                title: 'Animales'
            }
        },
        {
            path:'/vaccines',
            name: 'Vaccines',
            component: VaccineList,
            meta: {
                title: 'Vacunas'
            }
        },
        {
            path: '/add-vaccine',
            name: 'add-vaccine',
            component: newVaccine,
        }

    ]

});

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;