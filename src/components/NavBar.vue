<template>
  <pv-toolbar class="toolbar">
    <template #start>
      <div class="flex align-items-center gap-2">
        <img src="../assets/farmguard-logo.png" alt="FarmGuard Logo">
        <span class="spam-logo">FarmGuard</span>
      </div>
    </template>
    <template #center>
      <div class="hidden xl:flex gap-2 lg:flex gap-2 md:flex gap-2" >
        <router-link v-for="item in items" class="a-nav" :to="item.url">{{item.label}}</router-link>

      </div>
      <div class="xl:hidden lg:hidden md:hidden sm:flex" style="color: white">
        <pv-button @click="toggle">Menú</pv-button>
        <pv-menu ref="menu" :model="items" :popup="true" ></pv-menu>
      </div>

    </template>
    <template #end>
      <div class="flex align-items-center">
        <!-- Aquí añadimos el @click para redirigir a UserProfile -->
        <img :src="profile.urlPhoto" class="profile-photo" alt="User Photo" @click="goToProfile" />
        <router-link to="/auth/sign-in">
          <button style="background: none; border: none; cursor: pointer;" @click="logOut">
            <i class="pi pi-sign-out" style="font-size:30px"/>
          </button>
        </router-link>


      </div>

    </template>

  </pv-toolbar>

</template>

<script>
import axios from 'axios';
import {Profile} from "../profile/model/profile.js";
import {ProfileService} from "../profile/services/profile.service.js";
import {AuthService} from "../auth/services/authService.js";


export default {
  components: {},
  data() {
    return {

      profile: Profile,
      profileService :new ProfileService(),
      authService: new AuthService(),
      items: [
        {label:"Inicio", url:'/home/mi-app' },
        {label:"Animales", url:'/home/Animals' },
        {label:"Notificaciones", url:'/home/notifications' },
        {label:"Vacunas", url:'/home/Vaccines' },
        {label:"Recomendaciones", url:'/home/recomend' }

      ]
    };
  },
  created() {

    this.getProfile();
  },
  methods: {

    logOut(){

      this.authService.logOut();
      window.location.reload()
    },


    getProfile() {

      let user = JSON.parse(localStorage.getItem(`user`));

      this.profileService.getProfileById(user.profileId).then(response => {
        this.profile = response.data;
      })

    },
    // Metodo para redirigir al componente UserProfile
    goToProfile() {
      this.$router.push({ name: 'UserProfile' }); // Usa el nombre de la ruta
    },
    toggle(event) {
      this.$refs.menu.toggle(event);

    }
  },
};
</script>

<style scoped>


.navbar {
  position: fixed; /* Fija la navbar */
  top: 0; /* Posición superior de la ventana */
  left: 0;
  width: 100%; /* Asegúrate de que la navbar ocupe todo el ancho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  padding: 10px 20px;
  color: white;
  z-index: 1000; /* Asegúrate de que la navbar esté por encima de otros elementos */
}

.toolbar {
  border-radius: 0 !important; /* Ensures border radius is removed */
  border: none;
}


body {
  padding-top: 60px; /* Añade espacio para que el contenido no quede detrás de la navbar */
}


.logo img {
  width: 40px;
  margin-right: 10px;
}

.spam-logo {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Estilo para los enlaces de navegación */


.a-nav {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px;
  transition: background 0.3s;
}

.a-nav:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

/* Estilo para la foto de perfil */
.profile-photo {
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer; /* Añade un cursor de pointer para indicar que es clickeable */
}

/* Estilo para el botón de logout */


.logout-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.logout-button {
  width: 30px;
}


</style>
