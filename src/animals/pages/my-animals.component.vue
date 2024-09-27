<script>
import {AnimalApiService} from "../services/animal-api.service.js";
import {Animal} from "../model/animal.entity.js";
import AnimalsList from "../components/animals-list.component.vue";



export default {
  name: "my-animals",
  components:{AnimalsList},
  title: "MyAnimal",
  data(){
    return{
      animals: [],
      animalsApi: new AnimalApiService()

    }
  },
  created() {
    this.getAllAnimals();
  },
  methods:{
    buildAnimalFromResponseData(animals){
      return animals.map(animal =>{
        return new Animal(
            animal.id,
            animal.id_animal,
            animal.name,
            animal.species,
            animal.vaccies,
            animal.url_iot,
            animal.url_photo,
            animal.id_inventory,
            animal.location,
            animal.hear_rate,
            animal.temperature,
            animal.years
        )
      })
    },

    getAllAnimals(){
      this.animalsApi.getAll()
          .then(response =>{
            console.log("llamando al api",response.data)
            let arrayAnimals = response.data;
            this.animals = this.buildAnimalFromResponseData(arrayAnimals);
            console.log("Arreglo convertido",this.animals)
          })
          .catch(e=>{
            console.log("Error al llamar al api: ",e);
          })
    }
  }
}
</script>

<template>

  <div class="p-5" style="background-color: #4ADE80; ">
    <div>
      <h1>Mis Animales</h1>
      <hr>
    </div>

    <div class="flex align-items-center justify-content-center p-3">
      <pv-button label="Agregar"></pv-button>
    </div>

    <AnimalsList :animals="animals" ></AnimalsList>
  </div>




</template>

<style scoped>
 h1{
   font-size: 48px;
   font-weight: bold;
   color: black;
   margin: 0;
 }
 hr{
   border: 2px solid black;
 }
 .p-button{
   background-color: black;
   color: white;
   width: 250px;
   font-size: 20px;
   font-weight: 350;

 }



</style>