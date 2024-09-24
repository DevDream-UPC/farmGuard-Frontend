<template>
  <div id="app">
    <UserProfile />
    <Notifications />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';
import Notifications from './components/Notifications.vue';

export default {
  components: {
    UserProfile,
    Notifications
  }
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