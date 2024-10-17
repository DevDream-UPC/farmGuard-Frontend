<script setup>
import AnimalAddVaccine from "src/animals/components/animal-add-vaccine.component.vue";
import {Vaccine} from "src/animals/model/vaccine.entity.js";
import {VaccineApiService} from "src/animals/services/vaccine-api.service.js";



export default {
  name: "add-vaccine-animal",
  title: "AddVaccine",
  components:{AnimalAddVaccine},
  data(){
    return{
      vaccine: Vaccine,
      vaccineApi: new VaccineApiService()
    }
  },
  created() {
    this.getVaccinesByIdAnimal(this.$route.params.id);
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
    getVaccinesByIdAnimal(id_vaccine){
      this.vaccine.getById(id_vaccine)
          .then(response =>{
            console.log("Datos traidos",response.data)
            const vaccineData = response.data[0];
            this.vaccine = this.buildVaccineFromResource(vaccineData)
            console.log("Dato transformado",this.vaccine)
          })
  }
  }
}
</script>

<template>
<animal-add-vaccine :vaccine="Vaccine"></animal-add-vaccine>
</template>

<style scoped>

</style>