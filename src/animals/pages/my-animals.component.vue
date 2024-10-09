<script>
import {AnimalApiService} from "../services/animal-api.service.js";
import {Animal} from "../model/animal.entity.js";
import AnimalsList from "../components/animals-list.component.vue";
import {Vaccine} from "../model/vaccine.entity.js";




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
    buildVaccineFromResource(vaccines){
      if(vaccines){
        return vaccines.map(vaccine =>{
          return new Vaccine(
              vaccine.id,
              vaccine.name,
              vaccine.description,
              vaccine.date_expiration
          )
        })
      }else{
        return new Vaccine();
      }

    },
    buildAnimalFromResponseData(animals){
      return animals.map(animal =>{
        return new Animal(
            animal.id,
            animal.id_animal,
            animal.name,
            animal.species,
            this.buildVaccineFromResource(animal.vaccines),
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
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Mis Animales</h1>
      <hr>
    </div>

    <div class="flex align-items-center justify-content-center p-3">
      <pv-button label="Agregar"></pv-button>
    </div>

    <AnimalsList :animals="animals" ></AnimalsList>
  </div>




</template>

<style scoped>

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