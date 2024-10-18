<template>
    <div class="add-animal-container">
      <h2 class="title">🐰 Agregar un animal</h2>
      <hr class="separator" />
  
      <div class="form-grid">
        <div class="left-column">
          <div class="field">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="animal.name" class="p-inputtext" />
            <span v-if="!animal.name && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>
  
          <div class="field">
            <label for="age">Edad</label>
            <input type="number" id="age" v-model="animal.age" class="p-inputtext" />
            <span v-if="!animal.age && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>
  
          <div class="field">
            <label for="species">Especie</label>
            <select id="species" v-model="animal.species" class="p-inputtext">
              <option value="" disabled></option>
              <option>Mamífero - Bovino</option>
              <option>Mamífero - Porcino</option>
              <option>Mamífero - Ovino</option>
              <option>Mamífero - Caprino</option>
              <option>Mamífero - Equino</option>
              <option>Mamífero - Felino</option>
              <option>Mamífero - Canino</option>
              <option>Mamífero - Mustélido</option>
              <option>Mamífero - Roedor</option>
              <option>Mamífero - Lepórido</option>
              <option>Aves</option>
              <option>Peces</option>
              <option>Reptiles</option>
              <option>Anfibios</option>
              <option>Insectos</option>
            </select>
            <span v-if="!animal.species && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>
  
          <div class="field">
            <label for="sensorUrl">URL del sensor</label>
            <input type="text" id="sensorUrl" v-model="animal.sensorUrl" class="p-inputtext" />
            <span v-if="!animal.sensorUrl && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>
        </div>
  
        <div class="right-column">
          <div class="field image-field">
            <label for="imageUrl">URL de imagen</label>
            <input type="text" id="imageUrl" v-model="animal.imageUrl" @input="updateImagePreview" class="p-inputtext" />
            <span v-if="!animal.imageUrl && formSubmitted" class="error-message">Este campo es obligatorio.</span>
            <div class="image-preview-container">
              <div class="image-preview">
                <img v-if="animal.imageUrl" :src="animal.imageUrl" alt="Animal Preview" class="animal-image-preview" />
              </div>
            </div>
            <div v-if="animal.imageUrl" class="image-space"></div>
          </div>
        </div>
      </div>
  
      <div class="button-group">
        <button class="p-button-success accept-button" @click="submitAnimal">Aceptar</button>
        <button class="p-button-danger cancel-button" @click="cancel">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        animal: {
          name: '',
          age: '',
          species: '',
          sensorUrl: '',
          imageUrl: '',
        },
        formSubmitted: false,
      };
    },
    methods: {
      updateImagePreview() {},
  
      async submitAnimal() {
        this.formSubmitted = true;
        if (!this.animal.name || !this.animal.age || !this.animal.species || !this.animal.sensorUrl || !this.animal.imageUrl) {
          return;
        }
  
        try {
          const newAnimal = {
            id_animal: crypto.randomUUID(),
            name: this.animal.name,
            species: this.animal.species,
            years: this.animal.age,
            url_iot: this.animal.sensorUrl,
            url_photo: this.animal.imageUrl,
            vaccines: 0,
            id_inventory: 0,
            location: 0,
            hear_rate: 0,
            temperature: 0,
          };
  
          const response = await fetch('http://localhost:3000/animals', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAnimal),
          });
  
          if (!response.ok) {
            throw new Error('Error al agregar el animal');
          }
  
          console.log('Animal agregado exitosamente:', newAnimal);
          this.$router.push({ path: '/Animals' });
        } catch (error) {
          console.error('Error al enviar el formulario:', error);
        }
      },
  
      cancel() {
        this.$router.push({ path: '/Animals' });
      },
    },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }
  
  .add-animal-container {
    max-width: 800px;
    margin: 105px auto;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid #4ADE80;
  }
  
  .title {
    text-align: left;
    margin-bottom: 0.2rem;
    font-size: 25px;
    color: #000000;
  }
  
  .separator {
    width: 100%;
    border: none;
    height: 2px;
    background-color: black;
    margin-bottom: 1.5rem;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .left-column {
    display: flex;
    flex-direction: column;
  }
  
  .right-column {
    display: flex;
    flex-direction: column;
  }
  
  .field {
    display: flex;
    flex-direction: column;
  }
  
  .field label {
    font-weight: regular;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input.p-inputtext {
    padding: 0.5rem;
    border: 2px solid #4b57c26b;
    border-radius: 5px;
    transition: border-color 0.3s;
    background-color: #f9f9f9;
    color: #333;
  }
  
  input.p-inputtext:focus {
    border-color: #4ADE80;
    outline: none;
    background-color: #fff;
  }
  
  select.p-inputtext {
    padding: 0.5rem;
    border: 2px solid #4b57c26b;
    border-radius: 5px;
    transition: border-color 0.3s;
    background-color: #f9f9f9;
    color: #333;
  }
  
  select.p-inputtext:focus {
    border-color: #4ADE80;
    outline: none;
    background-color: #fff;
  }
  
  .image-field {
    display: flex;
    flex-direction: column;
  }
  
  .image-preview-container {
    position: relative;
  }
  
  .image-preview {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
  
  .animal-image-preview {
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
    border-radius: 5px;
  }
  
  .image-space {
    height: 20px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  button {
    width: 48%;
    padding: 0.75rem;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .accept-button {
    background-color: #067930;
    color: white;
  }
  
  .cancel-button {
    background-color: #dc3545;
    color: white;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 0.2rem;
  }
  
  @media (max-width: 768px) {
    .add-animal-container {
      padding: 1rem;
    }
  
    .form-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  
    button {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
  </style>
  
