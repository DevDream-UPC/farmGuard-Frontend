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
    vaccineService: new VaccineApiService(),
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
            vaccine.date
        )
      })
    },
    getVaccinesOfAnimalById(id){
      console.log(`id animal ver vacunas:${id}`)

      this.vaccineService.getVaccines(id).then(response =>{
        this.vacciness = this.buildVaccineFromResponseData(response.data)
        console.log(`vacunas:${this.vacciness}`)
      })

      this.animalsApiService.getById(id).then(response =>{
        this.nameAnimal = response.data.name;

        this.idAnimal= response.data.idAnimal;
        console.log(`name animal ver vacunas:${this.nameAnimal}`)
        console.log(`id animal ver vacunas:${this.idAnimal}`)
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