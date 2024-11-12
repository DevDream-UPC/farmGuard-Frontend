<script>
import {NotificationService} from "../services/notificationService.js";
import {Notification} from "../model/notification.entity.js";

import NotificationCard from "../components/NotificationCard.vue";

export default {
  name: "view-notifications",
  components: {NotificationCard},
  data(){
    return {
      notifications: [],
      first: 0,
      rowsPerPage:6,
      arraysss:[],
      notificationService: new NotificationService()

    }
  },
  created() {
    this.getAllNotifications();
    if (this.notifications.length > 0) {
      this.paginatedNotifications();
    }

  },
  watch:{
    notifications(){
      this.paginatedNotifications();

    },
    first(){
      this.paginatedNotifications();

    }
  },
  methods:{
    paginatedNotifications() {
      console.log("First:", this.first, "Rows Per Page:", this.rowsPerPage);
      this.arraysss = this.notifications.slice(this.first, this.first + this.rowsPerPage);
    },
    buildNotificationToDataResponse(data){
      return data.map(notification => {
        return new Notification(
            notification.id,
            notification.title,
            notification.description,
            notification.state
        );
      })

    },
    getAllNotifications(){
      let user =JSON.parse(localStorage.getItem(`user`));

      this.notificationService.getByIdInventory(user.inventoryId).then(response => {
        console.log(`Data de notificaciones: ${response.data}`)
        this.notifications = this.buildNotificationToDataResponse(response.data);
        console.log(`Data de transformado notificaciones: ${this.notifications}`)
      })
    }

  }
}
</script>

<template>
  <div class="p-5">
    <div >
      <h1 class="font-bold text-black-alpha-90 m-0  xl:text-6xl lg:text-6xl  md:text-6xl  sm:text-3xl ">Notificaciones</h1>
      <hr>
    </div>
    <div class=" grid p-5 mt-4"  style="background-color: white; border-radius: 16px " >
      <NotificationCard v-for="notification in arraysss" class="col-6"   :notification="notification"></NotificationCard>
    </div>

    <pv-paginator v-model:first="first"  :rows="rowsPerPage"  :totalRecords="notifications.length" class="mt-3" />

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

</style>