<script>
import {User} from "../model/user.entity.js";
import {AuthService} from "../services/authService.js";
import {UserSignIn} from "../model/userSignIn.entity.js";

export default {
  name: "sign-in",
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
  <h1>{{this.userSignIn}}</h1>

  <div>
    <div class="flex flex-column">
      <label for="username">UserName</label>
      <pv-input-tex v-model="userSignIn.username"  />
    </div>

    <div class="flex flex-column">
      <label for="password">Password</label>
      <pv-input-tex v-model="userSignIn.password"  />
    </div>

    <button class="p-button-success accept-button" @click="signInUser">Aceptar</button>

  </div>

</template>

<style scoped>

</style>