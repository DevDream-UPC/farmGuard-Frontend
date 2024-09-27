<script>

  import {Animal} from "../model/animal.entity.js";



  export default {
    name: "animal-add-edit-card",
    components: {},
    props:{
      animal:Animal
    }
  }
</script>

<template>

  <div class="flex justify-content-center align-items-center" style="height: 100vh">
    <pv-card>
      <template #title>
        <h1>{{animal.name}}</h1>
      </template >

      <template #content>
        <div class="grid">

          <div class=" grip-gap-3 xl:col-6 sm:col-12  ">
            <div class="flex flex-column">
              <label for="year">Edad</label>
              <pv-input-num v-model="animal.years"  />
            </div>

            <div class="flex flex-column">
              <label for="specie">Especie</label>
              <pv-input-tex v-model.trim="animal.species"  />
            </div>

            <div class="flex flex-column">
              <label for="hear_rate">Ritmo Cardiaco</label>
              <pv-input-num v-model="animal.hear_rate"  />
            </div>

            <div class="flex flex-column">
              <label for="location">Ubicacion</label>
              <pv-input-tex v-model.trim="animal.location"  />
            </div>

            <div class="flex flex-column">
              <label for="temperature">Temperatura</label>
              <pv-input-num v-model="animal.temperature"  />
            </div>

            <div class="flex flex-column">
              <label for="url_iot">Url Iot</label>
              <pv-input-tex v-model.trim="animal.url_iot"  />
            </div>

          </div>
          <div class="xl:col-6 sm:col-12">
            <div class="flex flex-column">
              <label for="id_animal">Id Animal</label>
              <pv-input-tex v-model.trim="animal.id_animal" disabled />
            </div>
            <div class="flex justify-content-center p-3">
              <img :src="animal.url_photo" class="w-12 border-round-xl">
            </div>

            <div class="flex flex-column">
              <label for="url_photo">Url de Imagen</label>
              <pv-input-tex v-model.trim="animal.url_photo" />
            </div>


          </div>

        </div>

        <div>
          <pv-button>Cancelar</pv-button>
        </div>

      </template>
    </pv-card>
  </div>


</template>

<style scoped>
.p-inputtext{
  background-color: white;
  border: 2px solid #D7DEE7;
  color: black;
}
.p-inputnumber {
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