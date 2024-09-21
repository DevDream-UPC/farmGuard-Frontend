import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Importar router
import router from "./router/index.js";

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import Aura from '@primevue/themes/aura'

createApp(App)
    .use(router)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .mount('#app')
