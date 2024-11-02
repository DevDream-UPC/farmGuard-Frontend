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
    this.getAnimalByIdAnimal(this.$route.params.id)
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
    buildAnimalFromResponseData(animal){
      return new Animal (
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
    },

    getAnimalByIdAnimal(id_animal){
      this.animalsApi.getById(id_animal)
          .then(response =>{
            console.log("Datos traidos",response.data)
            const animalData = response.data[0];
            this.animal = this.buildAnimalFromResponseData(animalData)
            console.log("Dato transformado",this.animal)
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