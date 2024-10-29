<script>


import {Vaccine} from "../model/vaccine.entity.js";

export default {
  name: "card-vaccine",
  components: {},
  props: {
    vaccine: Vaccine
  }
}
</script>

<template>
  <div class="grid">
    <h5 class="col-3 flex justify-content-center">Icono</h5>
    <h5 class="col-3 flex justify-content-center">Nombre</h5>
    <h5 class="col-3 flex justify-content-center">Descripcion</h5>
    <h5 class="col-3 flex justify-content-center">Fecha de expiracion</h5>
  </div>
  <pv-card>
    <template #content>
      <div class="grid">
        <div class="col-3 flex justify-content-center">
          <i class="pi pi-star" style="font-size: 50px"></i>
        </div>
        <p class="col-3 flex justify-content-center">{{vaccine.name}}</p>
        <p class="col-3 flex justify-content-center">{{vaccine.description}}</p>
        <p class="col-3 flex justify-content-center">{{vaccine.date_expiration}}</p>
      </div>
    </template>

  </pv-card>

</template>

<style scoped>
.p-card{
  background-color: #4ADE80;
}

</style>