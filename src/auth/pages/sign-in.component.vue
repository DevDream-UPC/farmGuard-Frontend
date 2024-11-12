<script>
import {User} from "../model/user.entity.js";
import {AuthService} from "../services/authService.js";
import {UserSignIn} from "../model/userSignIn.entity.js";



export default {
  name: "sign-in",
  components: {},
  data(){
    return {
      userSignIn: new UserSignIn(),
      authService: new AuthService(),
      signInState: false
    }
  },
  methods: {

    signInUser(){
      this.authService.login(this.userSignIn).then(response => {
        if(response.data.token){
          console.log("user:" + response.data);

          localStorage.setItem('user', JSON.stringify(response.data));

          this.signInState = true;

          console.log(localStorage.getItem('user'));

          this.$router.push(`/home/mi-app`);
        }

      })

    }

  }
}
</script>

<template>
  <div style="display: flex; height: 100vh; justify-content: center; align-items: center;">
    <div class="col-12 hide-on-mobile lg:col-6 xl:col-6  " style="height: 100vh;">
      <div class="flex align-items-center justify-content-center" style="height: 100%;">
        <img src="/./src/assets/istockphoto-1989599837-612x612-removebg-preview%201.png" alt="logo" style="max-width: 100%; height: auto;">
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-6" style="background-color: #F3F3F3; height: 100%; display: flex; justify-content: center; align-items: center;">

      <div class="flex flex-column align-items-center" style="width: 80%; max-width: 400px;">
        <img src="/./src/assets/farmguard-logo.png" alt="logo" style="width: 80px">
        <div class="flex flex-column" style="margin-bottom: 10px;">
          <label for="username">UserName</label>
          <pv-input-tex v-model="userSignIn.username" />
        </div>

        <div class="flex flex-column" style="margin-bottom: 10px;">
          <label for="password">Password</label>
          <pv-password v-model="userSignIn.password" :feedback="false" toggleMask></pv-password>
        </div>

        <pv-button @click="signInUser">Aceptar</pv-button>
        <label>Crear una cuenta <a href="/auth/sign-up">Aqui!</a></label>

      </div>
    </div>
  </div>



</template>

<style scoped>

h1,p,label{
  color: #707070;
}

@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
}

</style>