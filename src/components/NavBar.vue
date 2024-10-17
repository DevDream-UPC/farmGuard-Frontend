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
        <button>
          <img src="../assets/move_item.png" class="logout-button" alt="Logout">
        </button>
      </div>

    </template>

  </pv-toolbar>

</template>

<script>
import axios from 'axios';


export default {
  components: {},
  data() {
    return {
      profile: `{this.profile.urlPhoto}`,
      items: [
        {label:"Inicio", url:'/' },
        {label:"Animales", url:'/Animals' },
        {label:"Alertas", url:'/Alerts' },
        {label:"Vacunas", url:'/Vaccines' },
        {label:"Recomendaciones", url:'/recomend' }

      ]
    };
  },
  created() {

    this.getProfile();
  },
  methods: {
    getProfile() {
      axios.get('http://localhost:3000/profiles')
          .then(response => {
            this.profile = response.data;
          })
          .catch(error => console.error(error));
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
