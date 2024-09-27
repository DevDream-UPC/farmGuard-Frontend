<template>
  <div class="container">
    <h1 class="syringe-icon">Vacunas de Nombre</h1>
    <div v-for="vaccine in paginatedVaccines" :key="vaccine.id" class="vaccine-item">
      <h2>{{ vaccine.name }}</h2>
      <p>{{ vaccine.description }}</p>
      <p>Fecha de Expiración: {{ vaccine.date_expiration }}</p>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === Math.ceil(vaccines.length / 5)">Siguiente</button>
    </div>
    <button @click="navigateToAddVaccine">Agregar Vacuna</button>
    <div class="action-buttons">
      <button class="cancel" @click="cancel">Cancelar</button>
      <button class="add" @click="addVaccine">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vaccines: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const maxPage = Math.ceil(this.vaccines.length / 5);
      if (this.currentPage < maxPage) {
        this.currentPage++;
      }
    },
    addVaccine() {
      if (confirm('¿Estás seguro de que deseas agregar una vacuna?')) {
        this.$router.push({ name: 'add-vaccine' });
      }
    }
  },

  computed: {
    paginatedVaccines() {
      const itemsPerPage = 3; // Change this value to display more or fewer items per page
      const start = (this.currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return this.vaccines.slice(start, end);
    }
  }

};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
}

h1 {
  font-size: 18px;
  margin-bottom: 20px;
}

.syringe-icon::before {
  content: "💉";
  margin-right: 10px;
}

.vaccine-item {
  background-color: #98FB98;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

.action-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.cancel {
  background-color: #FF4136;
}

.add {
  background-color: #2ECC40;
}
</style>
