<script>
import {AnimalApiService} from "../services/animal-api.service.js";
import {Animal} from "../model/animal.entity.js";
import AnimalsList from "../components/animals-list.component.vue";


export default {
  name: "my-animals",
  components:{ AnimalsList},
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



  <AnimalsList :animals="animals" ></AnimalsList>


</template>

<style scoped>




</style>