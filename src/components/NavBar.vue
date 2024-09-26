<template>
  <nav class="navbar">
    <!-- Logotipo -->
    <div class="logo">
      <img src="../assets/farmguard-logo.png" alt="FarmGuard Logo">
      <span>FarmGuard</span>
    </div>

    <!-- Enlaces de navegación -->
    <div class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/Animals">Animales</router-link>
      <router-link to="/Alerts">Alertas</router-link>
      <router-link to="/Vaccines">Vacunas</router-link>
      <router-link to="/Contact">Contáctenos</router-link>
    </div>

    <!-- Foto de perfil y Botón de Logout -->
    <div class="logout">
      <!-- Aquí añadimos el @click para redirigir a UserProfile -->
      <img :src="profile.urlPhoto" class="profile-photo" alt="User Photo" @click="goToProfile" />
      <button>
        <img src="../assets/move_item.png" class="logout-button" alt="Logout">
      </button>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profile: `{this.profile.urlPhoto}`,
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
  },
};
</script>

<style scoped>
/* Estilos igual que antes */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  padding: 10px 20px;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 40px;
  margin-right: 10px;
}

.logo span {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Estilo para los enlaces de navegación */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px;
  transition: background 0.3s;
}

.nav-links a:hover {
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
.logout {
  display: flex;
  align-items: center;
}

.logout button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.logout-button {
  width: 30px;
}
</style>
