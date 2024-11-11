<script>
import NavBar from "../../components/NavBar.vue";

export default {
  name: "layout" ,
  components: {NavBar}
}
</script>

<template>
  <NavBar class=""></NavBar>
  <router-view></router-view>
  <pv-toast/>


</template>

<style scoped>

</style>