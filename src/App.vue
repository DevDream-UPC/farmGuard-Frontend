<template>
  <div id="app">
    <NavBar class=""></NavBar>
    <router-view></router-view><!-- Aquí se renderizarán los componentes según la ruta -->
    <pv-toast/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>
