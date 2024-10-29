<script>
import CardVaccine from "./card-vaccine.component.vue";

export default {
name: "vaccine-list-animal",
  components: {CardVaccine},
  props:{
    vaccines:Array,
    name: '',
    id_animal:''
  },
  data(){
  return{
    first: 0,
    rowsPaginator: 3,
    arraysss:[]
  }
  },
  mounted() {
    if (this.vaccines.length > 0) {
      this.paginatedVaccines();}

    },
  methods:{
    paginatedVaccines() {
      console.log("First:", this.first, "Rows Per Page:", this.rowsPaginator);
      this.arraysss = this.vaccines.slice(this.first, this.first + this.rowsPaginator);
    }
  },
  watch:{
  first(){
    this.paginatedVaccines();
  },
  vaccines(){
    this.paginatedVaccines();
  }
  }
}
</script>

<template>
  <div class="p-5 h-auto">
    <pv-card style="background-color: white; color: black">
      <template #title>
        <div class="flex">
          <h1 class="mb-0 mt-0">Vacunas de </h1>
          <h1 style="color: #4ADE80; margin-bottom: 0; margin-top: 0"> {{this.name}}</h1>
        </div>
        <hr>

      </template>
      <template #content>
        <div class="grid">
          <h5 class="col-3 flex justify-content-center m-0">Icono</h5>
          <h5 class="col-3 flex justify-content-center m-0">Nombre</h5>
          <h5 class="col-3 flex justify-content-center m-0">Descripcion</h5>
          <h5 class="col-3 flex justify-content-center m-0">Fecha de expiracion</h5>
        </div>

        <div v-for="vaccine in arraysss" >
          <card-vaccine :vaccine="vaccine"></card-vaccine>
        </div>

        <pv-paginator v-model:first="first"  :rows="rowsPaginator"  :totalRecords="vaccines.length" class="mt-3" />

      </template>
      <template #footer>
        <div class="flex gap-3 justify-content-center p-2">
          <router-link to="/animals">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>

          <router-link :to="{name:'AddVaccines',params:{id:id_animal}}">
            <pv-button severity="success" >Agregar</pv-button>
          </router-link>
        </div>
      </template>

    </pv-card>

  </div>
</template>

<style scoped>
hr {
  border: 2px solid black;
}

</style>