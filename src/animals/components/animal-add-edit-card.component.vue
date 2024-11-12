<script>

  import {Animal} from "../model/animal.entity.js";
  import {AnimalApiService} from "../services/animal-api.service.js";
  import router from "../../router/index.js";
  import {SpecieApiService} from "../services/specie-api.service.js";
  import { useToast } from "primevue/usetoast";
  import ToastService from "primevue/toastservice";
  import {ResourceAnimal} from "../model/resourceAnimal.Entity.js";





  export default {
    name: "animal-add-edit-card",
    components: {},
    props:{
      animal:Animal
    },
    data(){
      return{
        toast: null,
        animalsApi: new AnimalApiService(),
        specieApi: new SpecieApiService(),
        species: [],
      }
    },
    created() {
      this.toast = useToast();
      this.addSpecies()
    },
    methods:{
      buildEntityToResource(animal){
        return new ResourceAnimal(
            animal.name,
            animal.specie,
            animal.urlIot,
            animal.urlPhoto,
            animal.location,
            animal.hearRate,
            animal.temperature
        )
      },
      deleteAnimal(idAnimal){
        this.animalsApi.deleteAnimal(idAnimal).then(response =>{
          console.log(response);

          this.toast.add({ severity:"warn",
            summary:"Mensaje de Eliminacion",
            detail:`Eliminacion de ${this.animal.name} correctamente`,
            life:3000})
        })

      },

      putAnimalById(animal,idSerialAnimal){
        const resourceAnimal = this.buildEntityToResource(animal);
        console.log(`Recurso: ${resourceAnimal}`)
        this.animalsApi.putAnimal(resourceAnimal,idSerialAnimal).then(response => {

          console.log(`Actualizar: ${response}`)


          /*Inicia mensaje de confirmacion*/
          this.toast.add({ severity:"success",
            summary:"Mensaje de Confirmacion",
            detail:`Actualizacion de ${animal.name} correctamente`,
            life:3000})
        })
      },
      addSpecies(){
        this.species.push("Mamíferos");
        this.species.push("Aves");
        this.species.push("Reptiles");
        this.species.push("Anfibios");
        this.species.push("Peces");
        this.species.push("Insectos");
        this.species.push("Arácnidos");
        this.species.push("Moluscos");
        this.species.push("Crustáceos");
        this.species.push("Equinodermos");

      }

    }
  }
</script>

<template>
  <!--xl:col-3 md:col-4 sm:col-12-->

  <div class="flex justify-content-center align-content-center mt-4 p-4 " >
    <pv-card class="h-auto">
      <template #title>
        <div class="flex gap-2">
          <h1>{{animal.name}}</h1>
          <router-link to="/home/animals">
            <pv-button severity="danger" @click="deleteAnimal(animal.idAnimal)" > <i class="pi pi-trash"/></pv-button>
          </router-link>

        </div>


      </template >

      <template #content>
        <div class="grid " >

          <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">

            <div class="flex flex-column">
              <label for="name">Nombre</label>
              <pv-input-tex v-model="animal.name"  />
            </div>


            <div class="flex flex-column">
              <label for="specie">Especie</label>
              <pv-select v-model="animal.specie" :options="species"  placeholder="Selecciona la especie"></pv-select>

            </div>

            <div class="flex flex-column">
              <label for="hear_rate">Ritmo Cardiaco</label>
              <pv-input-num v-model="animal.hearRate"  />
            </div>

            <div class="flex flex-column">
              <label for="location">Ubicacion</label>
              <pv-input-tex v-model.trim="animal.location"  />
            </div>

            <div class="flex flex-column">
              <label for="temperature">Temperatura</label>
              <pv-input-num v-model="animal.temperature"  />
            </div>

            <div class="flex flex-column">
              <label for="url_iot">Url Iot</label>
              <pv-input-tex v-model.trim="animal.urlIot"  />
            </div>

          </div>
          <div class=" flex flex-column gap-2 xl:col-6 sm:col-6 col-12">
            <div class="flex flex-column sm:mt-2">
              <label for="id_animal">Id Animal</label>
              <pv-input-tex v-model.trim="animal.idAnimal" disabled />
            </div>
            <div class="flex justify-content-center p-2">
              <img :src="animal.urlPhoto" class="w-8 border-round-xl">
            </div>

            <div class="flex flex-column">
              <label for="url_photo">Url de Imagen</label>
              <pv-input-tex v-model.trim="animal.urlPhoto" />

            </div>

            <!--Boton a pagina de vacunas -->
            <div class="flex justify-content-center">

              <router-link :to="{name:'ViewVaccines',params:{id:animal.idAnimal}}">
                <pv-button> <i class="pi pi-receipt"/> Vacunas</pv-button>
              </router-link>
            </div>


          </div>

        </div>

        <div class="flex gap-3 justify-content-end p-2">
          <router-link to="/home/animals">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>

          <router-link to="/home/animals">
            <pv-button severity="success" @click="putAnimalById(animal,animal.idAnimal)" >Actualizar</pv-button>
          </router-link>




        </div>

      </template>
    </pv-card>
  </div>


</template>

<style scoped>



.p-inputtext{
  background-color: white;
  border: 2px solid #D7DEE7;
  color: black;
}
.p-inputnumber {
  background-color: white;

}

.p-card{
  background-color: white;
  h1{
    color: #4ADE80;
    margin: 0px;
  }
  h2{
    color: #707070;
    margin: 0px;
  }
  p,h3{
    color: black;
    margin: 5px;
  }
}
label{
  color: #707070;
}
</style>