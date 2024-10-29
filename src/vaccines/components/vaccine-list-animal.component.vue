<script>




import CardVaccine from "./card-vaccine.component.vue";

export default {
name: "vaccine-list-animal",
  components: {CardVaccine},
  props:{
  vaccines:Array,
  }
}
</script>

<template>
  <div class="p-5 h-auto">
    <pv-card>
      <template #title>
        <div class="flex">
          <h1 class="mb-0">Vacunas de </h1> <h1 style="color: #4ADE80; margin-bottom: 0"> hhhhh{{}}</h1>
        </div>
        <hr>

      </template>
      <template #content>

        <div v-for="vaccine in vaccines">
          <card-vaccine :vaccine="vaccine"></card-vaccine>
        </div>

      </template>
      <template #footer>
        <div class="flex gap-3 justify-content-end p-2">
          <router-link to="/animals">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>

          <pv-button severity="success" >Agregar</pv-button>
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
</style>