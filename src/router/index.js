import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";
import AddEditAnimalComponent from "../animals/pages/add-edit-animal.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/animals`,component: MyAnimalsComponent,meta:{title:`MyAnimal`}},
        {path:`/:id/add-edit-animal`,component: AddEditAnimalComponent,meta:{title:`AddOrEdit`},name:`addOrEdit`}

    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;