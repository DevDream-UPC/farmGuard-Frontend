import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Importar router
import router from "./router/index.js";

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import Aura from '@primevue/themes/aura'

//Components PrimeVue Components
import Card from "primevue/card";
import Button from "primevue/button";
import Paginator from 'primevue/paginator';

createApp(App)
    .use(router)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .component(`pv-card`,Card)
    .component('pv-button', Button)
    .component('pv-paginator', Paginator)
    .mount('#app')
