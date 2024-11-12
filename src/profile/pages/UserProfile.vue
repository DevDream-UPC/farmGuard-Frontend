<template>
  <div class="p-5">
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Perfil</h1>
      <hr>
    </div>

    <div class="grid mt-4 ">
      <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">
        <div class="profile-form">
          <label for="firstName">Nombre</label>
          <input v-model="profile.firstName" type="text" id="firstName" required />

          <label for="lastName">Apellidos</label>
          <input v-model="profile.lastName" type="text" id="lastName" required/>

          <label for="email">Correo</label>
          <input v-model="profile.email" type="email" id="email" required/>

          <div class="flex gap-2">
            <button @click="updateProfile" class="btn-update">Actualizar</button>
            <button @click="deleteProfile" class="btn-delete">Eliminar</button>
          </div>

        </div>

      </div>

      <div class="flex flex-column gap-2  xl:col-6 sm:col-6 col-12  ">

        <div class="flex justify-content-center">
          <img class="userphoto" :src="profile.urlPhoto" alt="User Photo" />
        </div>
        <div class="urlPhoto-info">
          <div class="flex justify-content-center">
            <label for="urlPhoto">Url de imagen</label>
          </div>
          <div class="flex justify-content-center">
            <input v-model="profile.urlPhoto" type="text" id="urlPhoto" />
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import axios from 'axios';
import {ProfileService} from "../services/profile.service.js";
import {useToast} from "primevue/usetoast";

export default {
  data() {
    return {
      profile: null,
      toast: null,
      profileService: new ProfileService()
    };
  },
  created() {
    this.toast = useToast();
    this.getProfile();
  },
  methods: {

    getProfile() {
      let user =JSON.parse(localStorage.getItem(`user`));
      this.profileService.getProfileById(user.profileId).then(response => {
        this.profile = response.data;
      })

    },
    updateProfile() {
      let resource = {
        firstName: this.profile.firstName,
        lastName: this.profile.lastName,
        email: this.profile.email,
        urlPhoto: this.profile.urlPhoto,
        userId: this.profile.userId
      };
      console.log(`Profile: ${JSON.stringify(resource)}`)

      this.profileService.putProfile(JSON.stringify(resource),this.profile.id).then(response => {
        this.toast.add({ severity:"success",
          summary:"Mensaje de Confirmacion",
          detail:`Actualizacion correcta de ${resource.firstName} correctamente`,
          life:3000})
      })
    },
    deleteProfile() {
      this.profileService.deleteProfile(this.profile.id).then(response => {
        console.log(response);
      })
    }
  }
};
</script>

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

label {
  color: #707070;
}

.section-title {
  margin: 0 50px 50px 50px;
  padding: 20px 0 10px 0;
  border-bottom: 3px solid black;
}

.user-profile {
  background-color: #77db89;
}

.buttons-update-delete {
  gap: 20px;
  display: flex;
  justify-content: space-evenly;
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20em;
  padding: 20px 0 20px 0;
}

.profile-form {
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.profile-form input {
  padding: 10px 10px;
  border-radius: 10px;
  border: 2px solid #D7DEE7;
}


.profile-image div img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-image input {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn-update {
  background-color: green;
  color: white;
  padding: 10px 40px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn-delete {
  background-color: red;
  color: white;
  padding: 10px 40px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.urlPhoto-info {
  margin-top: 20px;
}

.urlPhoto-info div input {
  padding: 10px 10px;
  border-radius: 10px;
  border: 2px solid #D7DEE7;
}

.userphoto{
  border-radius: 50%;
}

</style>
