import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Importa los componentes de PrimeVue que utilizarás
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';

import 'primeicons/primeicons.css';                     // iconos
import 'primeflex/primeflex.css';                       // utilidades CSS

const app = createApp(App);
app.use(PrimeVue);

// Registra los componentes
app.component('Card', Card);
app.component('ProgressBar', ProgressBar);

app.mount('#app');
