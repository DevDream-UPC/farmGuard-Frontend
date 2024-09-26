<template>
  <div id="app">
    <nav>
      <router-link to="/notifications">Notificaciones</router-link>
      <router-link to="/user-profile">Perfil de Usuario</router-link>
    </nav>
    <router-view></router-view> <!-- Aquí se renderizarán los componentes según la ruta -->
  </div>
</template>

<script>
export default {
  name: 'App',
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