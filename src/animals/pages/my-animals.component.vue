<script>
import {AnimalApiService} from "../services/animal-api.service.js";
import {Animal} from "../model/animal.entity.js";
import AnimalsList from "../components/animals-list.component.vue";
import {Vaccine} from "../../vaccines/model/vaccine.entity.js";


import {User} from "../../auth/model/user.entity.js";
export default {
  name: "my-animals",
  components:{AnimalsList},
  title: "MyAnimal",
  data(){
    return{
      animals: [],
      animalsApi: new AnimalApiService(),
      user: User

    }
  },
  created() {
    this.getAllAnimals();
  },
  methods:{

    buildAnimalFromResponseData(animals){
      return animals.map(animal =>{
        return new Animal(
            animal.id,
            animal.idAnimal,
            animal.name,
            animal.specie,
            animal.urlIot,
            animal.urlPhoto,
            animal.inventoryId,
            animal.location,
            animal.hearRate,
            animal.temperature
        )
      })
    },

    getAllAnimals() {
      let user =JSON.parse(localStorage.getItem(`user`));

      this.animalsApi
        .getAll(user.inventoryId)
        .then((response) => {
          console.log("llamando al api", response.data);
          let arrayAnimals = response.data;
          this.animals = this.buildAnimalFromResponseData(arrayAnimals);
          console.log("Arreglo convertido", this.animals);
        })
        .catch((e) => {
          console.log("Error al llamar al api: ", e);
        });
    },

    goToAddAnimal() {
      this.$router.push("/home/add-animal");
    },
  },
};
</script>

<template>

  <div class="p-5" style="background-color: #4ADE80; ">
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Mis Animales</h1>
      <hr>
    </div>

    <div class="flex align-items-center justify-content-center p-3">
      <pv-button label="Agregar" @click="goToAddAnimal"></pv-button>
    </div>

    <AnimalsList :animals="animals" ></AnimalsList>
  </div>




</template>

<style scoped>
  h1 {
    font-size: 48px;
    font-weight: bold;
    color: black;
    margin: 0;
  }
  hr {
    border: 2px solid black;
  }
  .p-button {
    background-color: black;
    color: white;
    width: 250px;
    font-size: 20px;
    font-weight: 350;
  }
</style>