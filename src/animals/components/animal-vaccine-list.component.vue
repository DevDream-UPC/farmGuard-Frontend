<script setup>
import {Vaccine} from "src/animals/model/vaccine.entity.js";
import {VaccineApiService} from "src/animals/services/vaccine-api.service.js";
import PvPaginator from "primevue/paginator";


export default {
  name: "animal-vaccine-list",
  title: "VaccineList",
  components: {},
  data() {
    return {
      first:0,
      rowsPerPage:0,
      screenWidth: window.innerWidth,
      vaccine: Vaccine,
      vaccines:Array,
      vaccineApi: new VaccineApiService()
    }
  },
  mounted() {
    this.paginateVaccine();
    this.updateFirstAndRows();
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    paginateVaccine() {
      console.log("First:", this.first, "Rows Per Page:", this.rowsPerPage);
      this.vaccine = this.vaccines.slice(this.first, this.first + this.rowsPerPage);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      this.updateFirstAndRows();
    },
    updateFirstAndRows() {
      if (this.screenWidth <= 760) {
        this.rowsPerPage = 1;
      } else if (this.screenWidth <= 968) {
        this.rowsPerPage = 2;
      } else if (this.screenWidth <= 1200) {
        this.rowsPerPage = 6;
      } else {
        this.rowsPerPage = 4;
      }
      this.paginateVaccine();
    },
    watch: {
      first() {
        this.paginateVaccine();
      },
      vaccines() {
        this.paginateVaccine();
      },
      screenWidth() {
        this.updateFirstAndRows();
      }
    }
  }
}
</script>

<template>

  <div class="flex flex-column">
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">{{Vaccine.name}}</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">{{Vaccine.name}}</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">{{Vaccine.name}}</div>
  </div>

  <pv-paginator v-model:first="first"  :rows="rowsPerPage"  :totalRecords="Vaccine.name" class="mt-3" />
</template>

<style scoped>
.p-paginator{
  background-color: #4ADE80;
}
</style>