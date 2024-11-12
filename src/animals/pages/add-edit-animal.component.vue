<script>
import AnimalAddEditCard from "../components/animal-add-edit-card.component.vue";
import {Animal} from "../model/animal.entity.js";
import {AnimalApiService} from "../services/animal-api.service.js";
import {Vaccine} from "../../vaccines/model/vaccine.entity.js";

export default {
  name: "add-edit-animal",
  title:"AddOrEdit",
  components: {AnimalAddEditCard},
  data(){
    return{
      animal: Animal,
      animalsApi: new AnimalApiService()
    }
  },
  created() {
    this.getAnimalByIdAnimal(this.$route.params.id);
  },
  methods:{
    buildAnimalFromResponseData(animal){
      return new Animal(
          animal.id,
          animal.idAnimal,
          animal.name,
          animal.specie,
          animal.urlIot,
          animal.urlPhoto,
          animal.inventoryId,
          animal.location,
          animal.hearRate,
          animal.temperature
      )
    },

    getAnimalByIdAnimal(id_animal){
      this.animalsApi.getById(id_animal)
          .then(response =>{
            console.log(`IdAnimal: ${this.$route.params.id}`);
            console.log("Datos traidos page add-edit",response.data)
            const animalData = response.data;
            this.animal = this.buildAnimalFromResponseData(animalData)
            console.log("Dato transformado page add-edit",this.animal)
          })
    }
  }
}
</script>

<template>

  <animal-add-edit-card :animal="animal"></animal-add-edit-card>

</template>

<style scoped>

</style>