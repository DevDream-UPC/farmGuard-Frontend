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
      rowsPerPage:0,
      animalsCard4:[],
      screenWidth: window.innerWidth
    }
  },
  mounted() {
    this.paginatedAnimals();
    this.updateFirstAndRows();
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods:{
    paginatedAnimals() {
      //Funcion que permite obtener un nuevo arreglo con los indices
      console.log("First:", this.first, "Rows Per Page:", this.rowsPerPage);
      this.animalsCard4 = this.animals.slice(this.first, this.first + this.rowsPerPage);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      this.updateFirstAndRows();
    },
    updateFirstAndRows(){
      if(this.screenWidth <=760){
        this.rowsPerPage = 1;
      }else if(this.screenWidth<=1200){
        this.rowsPerPage = 6;
      }else {
        this.rowsPerPage =4;
      }
      this.paginatedAnimals();
    }

  },
  watch: {
    //Observa si el valor cambia para volver a llmar a la funcion
    first() {
      this.paginatedAnimals();
    },
    animals() {
      this.paginatedAnimals(); // Observa cambios en 'animals' para actualizar
    },
    screenWidth(){
      this.updateFirstAndRows();
    }
  }
}

</script>

<template>
  <div class="grid"  >
    <div v-for="animal in animalsCard4" class="xl:col-3 md:col-4 sm:col-12" >
      <animals-card :animal="animal"></animals-card>
    </div>
  </div>

  <pv-paginator v-model:first="first"  :rows="rowsPerPage"  :totalRecords="animals.length" class="mt-3" />

</template>

<style scoped>
.p-paginator{
  background-color: #4ADE80;
}

</style>