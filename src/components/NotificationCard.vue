<template>
  <div :class="['notification-card', notification.state.toLowerCase()]">
    <h4>ID: {{ notification.id }}</h4>
    <p>{{ notification.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: Object
  }
};
</script>

<style scoped>
.notification-card {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}
.notification-card.high {
  background-color: #e89593;
  border: 1px solid #ED2626;
}
.notification-card.medium {
  background-color: #fae39e;
  border: 1px solid #FFC72D;
}
.notification-card.low {
  background-color: #8ebe9d;
  border: 1px solid #058339;
}
</style>