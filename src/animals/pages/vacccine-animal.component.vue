<script >
import {Vaccine} from "src/animals/model/vaccine.entity.js";
import {VaccineApiService} from "src/animals/services/vaccine-api.service.js";
import VaccineList from "add-vaccine-animal.component.vue"
import AnimalsList from "../components/animals-list.component.vue";
import animalVaccineListComponent from "../components/animal-vaccine-list.component.vue";
import {Animal} from "../model/animal.entity.js";
import AnimalVaccineList from "../components/animal-vaccine-list.component.vue";
import vaccines from "primevue/row";
import DatePicker from "primevue/datepicker";

export default {
  name: "vaccine-animal",
  title: "VaccineAnimal",
  components:{VaccineList},
  data(){
    return{
      vaccine:[],
      vaccineApi: new VaccineApiService()
    }
  },
  created() {
    this.getAllVaccine();
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
    getAllVaccine(){
      this.vaccineApi.getAll()
          .then(response =>{
            console.log("llamando al api",response.data)
            let arrayVaccine = response.data;
            this.vaccines = this.buildVaccineFromResource(arrayVaccine);
            console.log("Arreglo convertido",this.vaccines)
          })
          .catch(e=>{
            console.log("Error al llamar al api: ");
          })
    },
  }
}


</script>

<template>
  <div class="p-5" style="background-color: #4ADE80; ">
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Vacuna de {{Animal.name}}</h1>
      <hr>
    </div>

    <div class="flex align-items-center justify-content-center p-3">
      <pv-button label="Agregar"></pv-button>
    </div>

   <animal-vaccine-list-component :vaccines="vaccines"></animal-vaccine-list-component>
  </div>
</template>

<style scoped>
.flex-column{
  display: flex;
  flex-direction: column;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.align-items-center{
  align-items: center;
}
hr{
  border: 2px solid black;
}
.pv-button{
  background-color: black;
  color: white;
  width: 250px;
  font-size: 20px;
  font-weight: 350;

}
</style>