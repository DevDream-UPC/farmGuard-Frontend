<template>
  <div class="form-container">
    <h2>Formulario de Historia Médica</h2>

    <!-- ID del Animal siempre visible -->
    <div class="form-group">
      <label>ID del Animal</label>
      <input type="text" v-model="form.animalId" @input="validarId" required />
    </div>

    <!-- Opciones de modificación mostradas arriba de la imagen cuando se hace clic -->
    <div v-if="mostrarFormulario" class="form-group select-option">
      <label><br />Selecciona la opción a modificar</label>
      <select v-model="opcionSeleccionada">
        <option value="">Seleccione una opción</option>
        <option value="vacunaciones">Vacunaciones</option>
        <option value="desparacitacion">Desparacitación</option>
        <option value="alergias">Alergias</option>
        <option value="cirugias">Cirugías</option>
        <option value="medicamentos">Medicamentos Recetados</option>
      </select>
    </div>

    <!-- Imagen de Modificar Historia como botón -->
    <div v-if="mostrarImagen" @click="toggleFormulario" class="modify-button">
      <img src="/src/assets/boton-add-history.png" alt="Modificar Historia" />
    </div>

    <!-- Muestra los campos seleccionados para modificación -->
    <div v-if="opcionSeleccionada" class="form-group">
      <label>{{ getLabel(opcionSeleccionada) }}</label>
      <textarea v-model="form[opcionSeleccionada]" rows="4"></textarea><br />

      <!-- Campos adicionales: Diagnóstico Actual y Recomendaciones y Plan de Seguimiento -->
      <label>Diagnóstico Actual</label>
      <textarea v-model="form.diagnostico" rows="4"></textarea><br />

      <label>Recomendaciones y Plan de Seguimiento</label>
      <textarea v-model="form.recomendaciones" rows="4"></textarea><br />
    </div>

    <!-- Botón de guardar -->
    <button type="submit" @click="guardarFormulario">Guardar</button>
  </div>
</template>

<script>
export default {
  name: "FormularioHistoriaMedica",
  data() {
    return {
      mostrarFormulario: false, // Controla la visibilidad del formulario de modificación
      mostrarImagen: false, // Controla la visibilidad de la imagen
      opcionSeleccionada: "", // Guarda la opción seleccionada por el usuario
      form: {
        animalId: "", // ID del animal
        vacunaciones: "",
        desparacitacion: "",
        alergias: "",
        cirugias: "",
        medicamentos: "",
        diagnostico: "", // Campo adicional
        recomendaciones: "", // Campo adicional
      },
    };
  },
  methods: {
    toggleFormulario() {
      this.mostrarFormulario = true; // Muestra el formulario
      this.mostrarImagen = false; // Oculta la imagen
    },
    guardarFormulario() {
      console.log("Formulario guardado:", this.form);
      alert("Historia médica guardada correctamente");
    },
    getLabel(opcion) {
      switch (opcion) {
        case "vacunaciones":
          return "Vacunaciones";
        case "desparacitacion":
          return "Desparacitación";
        case "alergias":
          return "Alergias";
        case "cirugias":
          return "Cirugías";
        case "medicamentos":
          return "Medicamentos Recetados";
        default:
          return "";
      }
    },
    validarId() {
      // Validación básica: La ID debe ser un número mayor que 0 (puedes ajustarlo según el formato deseado)
      if (this.form.animalId && !isNaN(this.form.animalId) && this.form.animalId > 0) {
        this.mostrarImagen = true; // Muestra la imagen si la ID es válida
      } else {
        this.mostrarImagen = false; // Oculta la imagen si la ID no es válida
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #fff;
  color: #000;
}

.form-container {
  max-width: 1700px;
  margin: 120px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-group {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
}

.select-option {
  margin-bottom: 20px; /* Añadir espacio entre el select y la imagen */
}

label {
  color: #000;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select,
textarea {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.modify-button {
  cursor: pointer;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;
  margin: 20px 0; /* Espacio entre imagen y otros elementos */
}

.modify-button img {
  width: 250px; /* Tamaño de la imagen */
  height: auto;
  display: block;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
