import {createRouter, createWebHistory} from "vue-router"
import MyAnimalsComponent from "../animals/pages/my-animals.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/animals`,component: MyAnimalsComponent,meta:{title:`MyAnimal`}}

    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'FarmGuard';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;