<script >
import AnimalsCard from "./animals-card.component.vue";

export default {
  name:"animals-list",
  components:{AnimalsCard},
  props:{
    animals:Array
  },
  data(){
    return{
      first: 0,
      rowsPerPage:4,
      animalsCard4:[]
    }
  },
  mounted() {
    this.paginatedAnimals();
  },
  methods:{
    paginatedAnimals() {
      //Funcion que permite obtener un nuevo arreglo con los indices
      console.log("First:", this.first, "Rows Per Page:", this.rowsPerPage);
      this.animalsCard4 = this.animals.slice(this.first, this.first + this.rowsPerPage);

    }

  },
  watch: {
    //Observa si el valor cambia para volver a llmar a la funcion
    first() {
      this.paginatedAnimals();
    },
    animals() {
      this.paginatedAnimals(); // Observa cambios en 'animals' para actualizar
    }
  }
}

</script>

<template>
  <div class="grid p-4" >
    <div v-for="animal in animalsCard4" class="col-3">
      <animals-card :animal="animal"></animals-card>
    </div>
  </div>

  <pv-paginator v-model:first="first"  :rows="rowsPerPage"  :totalRecords="animals.length" />

</template>

<style scoped>

</style>