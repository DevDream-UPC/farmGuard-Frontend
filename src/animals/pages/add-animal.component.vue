<template>

    <div class="add-animal-container">
      <h2 class="title">🐰 Agregar un animal</h2>
      <hr class="separator" />

      <form class="grid m-4">
        <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">
          <div class="field">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="animal.name" class="p-inputtext" />
            <span v-if="!animal.name && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>


          <div class="field">
            <label for="species">Especie</label>
            <select id="species" v-model="animal.specie" class="p-inputtext">
              <option>Mamíferos</option>
              <option>Aves</option>
              <option>Reptiles</option>
              <option>Anfibios</option>
              <option>Peces</option>
              <option>Insectos</option>
              <option>Arácnidos</option>
              <option>Moluscos</option>
              <option>Crustáceos</option>
              <option>Equinodermos</option>
            </select>
            <span v-if="!animal.specie && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>

          <div class="field">
            <label for="sensorUrl">URL del sensor</label>
            <input type="text" id="sensorUrl" v-model="animal.urlIot" class="p-inputtext" />
            <span v-if="!animal.urlIot && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>

          <div class="field">
            <label for="location">Location</label>
            <input type="text" id="location" v-model="animal.location" class="p-inputtext" />
            <span v-if="!animal.location && formSubmitted" class="error-message">Este campo es obligatorio.</span>
          </div>

        </div>
        <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">

          <div class="field image-field">
            <label for="imageUrl">URL de imagen</label>
            <input type="text" id="imageUrl" v-model="animal.urlPhoto" @input="updateImagePreview" class="p-inputtext" />
            <span v-if="!animal.urlPhoto && formSubmitted" class="error-message">Este campo es obligatorio.</span>

            <div class="flex justify-content-center p-2 mt-4">
              <img v-if="animal.urlPhoto" :src="animal.urlPhoto" alt="Animal Preview" class="w-full border-round-xl " />
            </div>
            <div v-if="animal.urlPhoto" class="image-space"></div>
          </div>

        </div>

        <div class="button-group ">
          <pv-button severity="danger" @click="cancel">Cancelar</pv-button>
          <pv-button severity="success" @click="submitAnimal" >Aceptar</pv-button>
        </div>

      </form>

    </div>
  </template>
  
  <script>
  import {ResourceAnimal} from "../model/resourceAnimal.Entity.js";
  import {AnimalApiService} from "../services/animal-api.service.js";
  import {useToast} from "primevue/usetoast";


  export default {
    components: {},
    data() {
      return {
        animal: new ResourceAnimal(),
        toast: null,
        formSubmitted: false,
        animalService: new AnimalApiService(),
      };
    },
    created() {
      this.toast = useToast();
    },
    methods: {
      updateImagePreview() {},
  
      async submitAnimal() {
        let user = JSON.parse(localStorage.getItem(`user`));

        this.formSubmitted = true;

        if (!this.animal.name  || !this.animal.specie || !this.animal.urlIot || !this.animal.urlPhoto) {
          return;
        }

        this.animalService.postAnimal(this.animal,user.inventoryId).then(response =>{
          this.toast.add({ severity:"success",
            summary:"Mensaje de Confirmacion",
            detail:`Creacion de ${animal.name} correctamente`,
            life:3000})
        })

        this.$router.push({ path: '/home/Animals' });

      },
  
      cancel() {
        this.$router.push({ path: '/home/Animals' });
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
    font-weight: normal;
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
  
