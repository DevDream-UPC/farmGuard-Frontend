<script>




import {Vaccine} from "../model/vaccine.entity.js";
import {ResourceVaccine} from "../model/resourceVaccine.entity.js";
import {VaccineApiService} from "../services/vaccine-api.service.js";
import {useToast} from "primevue/usetoast";


export default {
  name: "Add-Vaccine-Animal",
  components: {},
  data(){
    return{
      vaccine: new ResourceVaccine(),
      vaccineService: new VaccineApiService()

    }
  },
  created() {
    //Inicio las notificacione
    this.toast = useToast();
  },
  methods:{
    putVaccine(vaccine){
      /*Convertimos a fecha en iso*/
      this.vaccine.date_expiration = this.converDateToFormatIso(vaccine.date_expiration)
      let idAnimal = this.$route.params.id;
      console.log("Enviando datos:",vaccine)
      console.log("Enviando idAnimal:",idAnimal)

      this.vaccineService.putVaccine(vaccine,idAnimal);

      this.toast.add({ severity:"success",
        summary:"Mensaje de Confirmacion",
        detail:`Vacuna agregada a ${idAnimal} correctamente`,
        life:3000})

    },
    converDateToFormatIso(){
      return this.vaccine.date_expiration.toISOString().split("T")[0];
    }
  }
}
</script>

<template>
  <div class="flex p-5 justify-content-center align-content-center">
    <pv-card  class="w-7">
      <template #title>
        <h1 class="mb-0 mt-0" style="font-size: 32px">Agregar Vacunas</h1>
        <hr>
      </template>

      <template #content>

        <form class="p-8 pt-0 pb-0">
          <div class="flex flex-column">
            <label for="name" >Nombre</label>
            <pv-input-tex v-model="vaccine.name" style="color: white"  />
          </div>

          <div class="flex flex-column">
            <label for="name">Fecha de Administracion</label>
            <pv-input-date v-model=" vaccine.date_expiration" style="color: white"  showIcon fluid :showOnFocus="false" />

          </div>

          <div class="flex flex-column">
            <label for="name">Descripcion</label>
            <pv-input-tex v-model="vaccine.description" style="color: white"  />
          </div>

        </form>

      </template>

      <template #footer>
        <div class="flex gap-3 justify-content-center p-2">

          <router-link to="/home/animals">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>


          <router-link to="/home/animals">
            <pv-button severity="success" @click="putVaccine(vaccine)" >Agregar</pv-button>
          </router-link>



        </div>
      </template>

    </pv-card>

  </div>



</template>

<style scoped>
.p-card{
  background-color: white;
  color: black;
}
hr {
  border: 2px solid black;
}

</style>