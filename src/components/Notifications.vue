<template>
  <div class="notifications">
    <h1 class="section-title">Inicio</h1>
    <h1>Notificaciones</h1>
    <div class="notification-list">
      <NotificationCard
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
      />
    </div>
    <div class="progress-bar">
      <div
          class="progress"
          :style="{ width: `${(animalCount / totalAnimals) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import NotificationCard from './NotificationCard.vue';
import axios from 'axios';

export default {
  components: { NotificationCard },
  data() {
    return {
      notifications: [],
      animalCount: 10, // Cambia esto según la lógica para obtener el número de animales
      totalAnimals: 0 // Cambia esto según la lógica para contar los animales
    };
  },
  created() {
    axios.get('http://localhost:3000/notifications')
        .then(response => {
          this.notifications = response.data;
        })
        .catch(error => console.error(error));

    axios.get('http://localhost:3000/animals')
        .then(response => {
          this.animalCount = response.data.length; // Contar los animales
          this.totalAnimals = response.data.length; // Total de animales (puedes ajustar según tu lógica)
        })
        .catch(error => console.error(error));
  }
};
</script>

<style scoped>

.section-title {
  margin: 0 50px 50px 50px;
  padding: 20px 0 10px 0;
  border-bottom: 3px solid black;
}

h1 {
  margin-top: 0;
}

.notifications {
  background-color: #77db89;
  padding: 50px ;
}
</style>