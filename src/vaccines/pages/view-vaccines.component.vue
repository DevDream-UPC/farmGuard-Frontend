<script>
import VaccineListAnimal from "../components/vaccine-list-animal.component.vue";
import {VaccineApiService} from "../services/vaccine-api.service.js";
import {Vaccine} from "../model/vaccine.entity.js";
import {AnimalApiService} from "../../animals/services/animal-api.service.js";

export default {
name: "view-vaccines",
  components: {VaccineListAnimal},
  data(){
  return {
    vacciness:[],
    animalsApiService: new AnimalApiService(),
    nameAnimal:'',
    idAnimal:'',


  }},
  created() {
  this.getVaccinesOfAnimalById(this.$route.params.id);
  },
  methods:{
    buildVaccineFromResponseData(vaccines){
      return vaccines.map(vaccine =>{
        return new Vaccine(
            vaccine.id,
            vaccine.name,
            vaccine.description,
            vaccine.date_expiration
        )
      })
    },
    getVaccinesOfAnimalById(id){
      this.animalsApiService.getById(id).then(response =>{
        const vaccinesData = response.data[0].vaccines;
        this.nameAnimal = response.data[0].name;
        this.idAnimal = response.data[0].id_animal;
        console.log("Arreglo obtenido",vaccinesData)
        this.vacciness = this.buildVaccineFromResponseData(vaccinesData);
        console.log("Arreglo procesado",this.vacciness)
      })
    }

  }
}
</script>

<template>

  <vaccine-list-animal  :vaccines="vacciness" :name="nameAnimal" :id_animal="idAnimal"></vaccine-list-animal>
  
</template>

<style scoped>

</style>