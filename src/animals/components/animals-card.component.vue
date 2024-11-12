<script>
import {Animal} from "../model/animal.entity.js";

export default {
  name: "animals-card",
  components: {},
  props:{
    animal:Animal
  },

  methods:{
    changeToPage(animal){
      this.$router.push(
          { path: `/${animal.idAnimal}/add-edit-animal` ,
            params: {animal}
          });
    }
  }
}
</script>

<template>
  <pv-card class="m-2" >
    <template #title><h1>{{animal.name}}</h1></template>
    <template #subtitle><h2>{{animal.specie}}</h2></template>
    <template #content>
      <div class="flex align-items-center justify-content-center p-2">

        <router-link :to="{name:'addOrEdit',params:{id:animal.idAnimal}}">
          <img :src="animal.urlPhoto" class="w-12 h-12 border-round-xl cursor-pointer" >
        </router-link>


      </div>

      <div class="flex flex-column">
        <div class="flex">
          <h3>Temperatura: </h3> <p>{{animal.temperature}} °C</p>
        </div>

        <div class="flex">
          <h3>Ritmo Cardiaco: </h3> <p>{{animal.hearRate}} rpm</p>
        </div>

        <div class="flex">
          <h3>Ubicacion: </h3> <p>{{animal.location}}</p>
        </div>

      </div>

    </template>
  </pv-card>

</template>

<style scoped>
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

</style>