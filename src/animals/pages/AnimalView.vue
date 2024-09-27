<template>
  <div class="animal-view">
    <h1>Vacunas de nombre</h1>
    <VaccineList :vaccines="vaccines" />
    <div class="container">
      <div class="header">
        <h2>Agregar Vacuna</h2>
      </div>
      <form @submit.prevent="handleFormSubmit" class="form-container">
        <div class="form-group">
          <label for="vacuna">Vacuna</label>
          <select id="vacuna" name="vacuna" class="input-field" ref="vacuna">
            <option value="">Seleccionar Vacuna</option>
            <option value="vacuna1">Vacuna 1</option>
            <option value="vacuna2">Vacuna 2</option>
          </select>
        </div>

        <div class="form-group">
          <label for="fecha">Fecha</label>
          <input type="date" id="fecha" name="fecha" class="input-field" ref="fecha" />
        </div>

        <div class="form-group">
          <label for="encargado">Encargado</label>
          <input type="text" id="encargado" name="encargado" class="input-field" ref="encargado" />
        </div>

        <div class="button-group">
          <button type="button" class="btn btn-danger">Cancelar</button>
          <button type="submit" class="btn btn-success">Agregar</button>
        </div>
      </form>

    </div>
  </div>
</template>


<style scoped>

.container {
  background-color: #2ecc71;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #000;
}

.form-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 40rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input-field:focus {
  border-color: #2ecc71;
}

/* Botones */
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn-danger {
  background-color: #e74c3c;
  color: #fff;
}

.btn-success {
  background-color: #27ae60;
  color: #fff;
}

</style>


<script>
import {AnimalApiService} from "../services/animal-api.service.js";
import VaccineList from '../components/VaccineList.vue';

export default {
  components: { VaccineList },
  data() {
    return {
      vaccines: []
    };
  },
  created() {
    const service = new AnimalApiService();
    service.getAll().then(response => {
      if (response.data.length > 0) {
        const animal = response.data[0]; // O agregar lógica para seleccionar un animal específico
        this.vaccines = animal.vaccines;
      } else {
        console.error('No se encontraron animales.');
      }
    }).catch(error => {
      console.error('Error al obtener los animales:', error);
    });
  },

  methods: {
    handleFormSubmit() {
      const newVaccine = {
        vacuna: this.$refs.vacuna.value,
        fecha: this.$refs.fecha.value,
        encargado: this.$refs.encargado.value
      };

      const service = new AnimalApiService();
      service.newVaccine(newVaccine)
          .then(() => {
            alert('Vacuna agregada con éxito');
            this.vaccines.push(newVaccine);
          })
          .catch((error) => {
            console.error('Error al agregar la vacuna:', error);
            alert('Error al agregar la vacuna');
          });
    },
      navigateToAddVaccine() {
        this.$router.push({ name: 'AddVaccineView' }); // Asegúrate de que el nombre de la ruta sea correcto
      }

  }


};
</script>