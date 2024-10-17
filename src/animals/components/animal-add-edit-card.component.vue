<script>

  import {Animal} from "../model/animal.entity.js";
  import {AnimalApiService} from "../services/animal-api.service.js";
  import router from "../../router/index.js";
  import {SpecieApiService} from "../services/specie-api.service.js";
  import { useToast } from "primevue/usetoast";
  import ToastService from "primevue/toastservice";




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
      this.getSpecies()
    },
    methods:{

      putAnimalById(animal){
        this.animalsApi.putAnimal(animal).then(response => {
          console.log(response)
          /*Inicia mensaje de confirmacion*/
          this.toast.add({ severity:"success",
            summary:"Mensaje de Confirmacion",
            detail:`Actualizacion de ${animal.name} correctamente`,
            life:3000})
        })
      },
      buildSpecies(species){
        return species.map(x =>{
          return x.name
        })

      },
      getSpecies(){
        this.specieApi.getSpecies().then(response => {
          console.log(response)
          this.species = this.buildSpecies(response.data)
          console.log("Arreglo de especies",this.species)
        })
      }

    }
  }
</script>

<template>
  <!--xl:col-3 md:col-4 sm:col-12-->

  <div class="flex justify-content-center align-content-center mt-4 p-4 " >
    <pv-card class="h-auto">
      <template #title>
        <h1>{{animal.name}}</h1>

      </template >

      <template #content>
        <div class="grid " >

          <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">

            <div class="flex flex-column">
              <label for="name">Nombre</label>
              <pv-input-tex v-model="animal.name"  />
            </div>

            <div class="flex flex-column">
              <label for="year">Edad</label>
              <pv-input-num v-model="animal.years"  />
            </div>

            <div class="flex flex-column">
              <label for="specie">Especie</label>
              <pv-select v-model="animal.species" :options="species"  placeholder="Selecciona la especie"></pv-select>

            </div>

            <div class="flex flex-column">
              <label for="hear_rate">Ritmo Cardiaco</label>
              <pv-input-num v-model="animal.hear_rate"  />
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
              <pv-input-tex v-model.trim="animal.url_iot"  />
            </div>

          </div>
          <div class=" flex flex-column gap-2 xl:col-6 sm:col-6 col-12">
            <div class="flex flex-column sm:mt-2">
              <label for="id_animal">Id Animal</label>
              <pv-input-tex v-model.trim="animal.id_animal" disabled />
            </div>
            <div class="flex justify-content-center p-2">
              <img :src="animal.url_photo" class="w-8 border-round-xl">
            </div>

            
            <router-link to="VaccineList">
              <pv-button label="Vacunas" severity="primary" text raised />
            </router-link>


            <div class="flex flex-column">
              <label for="url_photo">Url de Imagen</label>
              <pv-input-tex v-model.trim="animal.url_photo" />
            </div>


          </div>

        </div>

        <div class="flex gap-3 justify-content-end p-2">
          <router-link to="/animals">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>

          <pv-button severity="success" @click="putAnimalById(animal)" >Actualizar</pv-button>
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