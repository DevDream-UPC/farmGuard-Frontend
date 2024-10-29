<script>
import VaccineListAnimal from "../components/vaccine-list-animal.component.vue";
import {VaccineApiService} from "../services/vaccine-api.service.js";

export default {
name: "view-vaccines",
  components: {VaccineListAnimal},
  data(){
  return {
    vaccines:[],
    vacccineApiService: new VaccineApiService()

  }},
  created() {
  this.getVaccineTest();
  },
  methods:{
  getVaccineTest(){
    this.vacccineApiService.getVaccines().then(response =>{
      this.vaccines = response.data;
    })
  }

  }
}
</script>

<template>
  <vaccine-list-animal :vaccines="vaccines" class=""></vaccine-list-animal>
  
</template>

<style scoped>

</style>