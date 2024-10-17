<script setup>
import {Vaccine} from "src/animals/model/vaccine.entity.js";
import {VaccineApiService} from "src/animals/services/vaccine-api.service.js";
import {useToast} from "primevue/usetoast";
import {Animal} from "../model/animal.entity.js";
import animalVaccineListComponent from "./animal-vaccine-list.component.vue";
import vaccines from "primevue/row";
import DatePicker from "primevue/datepicker";
import {useRouter} from "vue-router";


export default {
  name: "animal-add-vaccine",
  title: "AddVaccine",
  components: {},
  props: {
    vaccine: Vaccine,
  },
  data() {
    return {
      toast: null,
      vaccines: [],
      vaccinesApi: new VaccineApiService(),
    }
  },
  created() {
    this.toast = useToast();
  },
  methods:{
    addVaccine(vaccines){
      this.vaccinesApi.addVaccine(vaccines).then(response => {
        console.log(response)
        /*Inicia mensaje de confirmacion*/
        this.toast.add({ severity:"success",
          summary:"Mensaje de Confirmacion",
          detail:`Registro de ${vaccines.name} correctamente`,
          life:3000})
      })
    },

  }
}
</script>

<template>
  <div class="flex justify-content-center align-content-center mt-4 p-4 " >
    <pv-card class="h-auto">
      <template #title>
        <h1>{{Animal.name}}</h1>
        <h2 >Agregar Vacuna</h2>
      </template>

        <template #content>
          <div class="grid " >

            <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">

              <div class="flex flex-column">
                <label for="name">Vacuna</label>
                <pv-input-tex v-model="vaccines.name"  />
              </div>

              <div class="flex flex-column">
                <label for="year">Fecha</label>
                <DatePicker v-model="vaccines.date_expiration" />
              </div>

              <div class="flex flex-column">
                <label for="name">Encargado</label>
                <pv-input-tex v-model="vaccines.description"  />
              </div>

            <div class=" flex flex-column gap-2 xl:col-6 sm:col-6 col-12">
              <div class="flex flex-column sm:mt-2">
                <label for="id_animal">Id Animal</label>
                <pv-input-tex v-model.trim="vaccines.id" disabled />
              </div>



              <router-link to="VaccineList">
                <pv-button label="Vacunas" severity="primary" text raised />
              </router-link>


          <div class="flex gap-3 justify-content-end p-2">
            <router-link to="/animals">
              <pv-button severity="danger" >Cancelar</pv-button>
            </router-link>

            <pv-button severity="success" @click="putVaccine(vaccines)" >Actualizar</pv-button>
          </div>

      </template>
    </pv-card>
  </div>
</template>

<style scoped>

.p-input text{
  background-color: white;
  border: 2px solid #D7DEE7;
  color: black;
}
.DatePicker {
  background-color: white;

}

.p-card{
  background-color: white;
  h1{
    color: #4ADE80;
    margin: 0px;
  }
  h2{
    color: #707070;
    margin: 0px;
  }
  p,h3{
    color: black;
    margin: 5px;
  }
}
label{
  color: #707070;
}
</style>