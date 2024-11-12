<script>
import {UserSignUp} from "../model/UserSignUp.entity.js";
import {AuthService} from "../services/authService.js";

export default {
  name: "sign-up",
  data(){
    return {
      userSignUp: new UserSignUp(),
      authService: new AuthService()
    }
  },
  methods:{
    postAuthentication(){
      this.authService.register(this.userSignUp).then(response => {
        console.log("register")
      })
  }
  }
}
</script>

<template>
  <h1>{{userSignUp}}</h1>
  <div style="display: flex; height: 100vh; justify-content: center; align-items: center;">

    <div class="col-12 lg:col-6 xl:col-6" style="background-color: #F3F3F3; height: 100%; display: flex; justify-content: center; align-items: center;">

      <div class="flex flex-column align-items-center" style="width: 80%; max-width: 400px;">

        <div class="flex flex-column justify-content-center align-items-center">
          <img src="/./src/assets/farmguard-logo.png" alt="logo" style="width: 80px">
          <h1 class="m-0">Crear Cuenta</h1>
        </div>

        <div class="grid">
          <div class="flex flex-column col-12 lg:col-6 xl:col-6">
            <div class="flex flex-column" style="margin-bottom: 10px;">
              <label for="username">Nombre</label>
              <pv-input-tex v-model="userSignUp.firstName" />
            </div>

            <div class="flex flex-column" style="margin-bottom: 10px;">
              <label for="username">Email</label>
              <pv-input-tex v-model="userSignUp.email" />
            </div>

            <div class="flex flex-column" >
              <label for="password">Password</label>
              <pv-input-tex v-model="userSignUp.password" />
            </div>




          </div>

          <div class=" flex flex-column col-12 lg:col-6 xl:col-6">
            <div class="flex flex-column" style="margin-bottom: 10px;">
              <label for="username">Apellidos</label>
              <pv-input-tex v-model="userSignUp.lastName" />
            </div>

            <div class="flex flex-column" style="margin-bottom: 10px;">
              <label for="username">Nick</label>
              <pv-input-tex v-model="userSignUp.username" />
            </div>
            <div class="flex flex-column" style="margin-bottom: 10px;">
              <label for="username">Url de foto</label>
              <pv-input-tex v-model="userSignUp.urlPhoto" />
            </div>



          </div>


        </div>

        <div class="flex gap-2">
          <router-link to="/auth/sign-in">
            <pv-button severity="success" @click="postAuthentication">Aceptar</pv-button>
          </router-link>

          <router-link to="/auth/sign-in">
            <pv-button severity="danger" >Cancelar</pv-button>
          </router-link>
        </div>




      </div>
    </div>

    <div class="col-12 hide-on-mobile lg:col-6 xl:col-6  " style="height: 100vh;">
      <div class="flex align-items-center justify-content-center" style="height: 100%;">

        <img class="userphoto" :src="userSignUp.urlPhoto">

      </div>
    </div>
  </div>

</template>

<style scoped>
.userphoto{
  border-radius: 50%;
}
h1{
  font-weight: bold;
  font-size: 48px;
}
h1,p,label{
  color: #707070;

}
.p-password {
  width: 100%;

}

@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
}


</style>