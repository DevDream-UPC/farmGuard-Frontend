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

  <pv-card class="mb-4">
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