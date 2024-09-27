<template>
  <div class="user-profile" v-if="profile">
    <h1 class="section-title">Perfil</h1>
    <div class="profile-container">
      <!-- Formulario de datos de usuario -->
      <div class="profile-form">
        <label for="firstName">Nombre</label>
        <input v-model="profile.firstName" type="text" id="firstName" required />

        <label for="lastName">Apellidos</label>
        <input v-model="profile.lastName" type="text" id="lastName" required/>

        <label for="email">Correo</label>
        <input v-model="profile.email" type="email" id="email" required/>

        <label for="nick">Nick</label>
        <input v-model="profile.nick" type="text" id="nick" />

        <label for="password">Contraseña</label>
        <input v-model="profile.password" type="password" id="password" required/>

        <label for="membership">Rol</label>
        <input v-model="profile.membership" type="text" id="membership" required/>
      <div class="buttons-update-delete">
        <div>
          <button @click="updateProfile" class="btn-update">Actualizar</button>
        </div>
        <div>
          <button @click="deleteProfile" class="btn-delete">Eliminar</button>
        </div>
      </div>
      </div>

      <!-- Sección de imagen de perfil -->
      <div class="profile-image">
        <div>
          <img :src="profile.urlPhoto" alt="User Photo" />
        </div>
        <div class="urlPhoto-info">
          <div>
            <label for="urlPhoto">Url de imagen</label>
          </div>
          <div>
            <input v-model="profile.urlPhoto" type="text" id="urlPhoto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profile: null
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      axios.get('http://localhost:3000/profiles')
          .then(response => {
            this.profile = response.data;
          })
          .catch(error => console.error(error));
    },
    updateProfile() {
      axios.put(`https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/${this.profile.id}`, this.profile)
          .then(response => {
            alert("Perfil actualizado correctamente");
          })
          .catch(error => console.error(error));
    },
    deleteProfile() {
      axios.delete(`https://my-json-server.typicode.com/Brays83/FarmGuard-Api-Fake/${this.profile.id}`)
          .then(response => {
            alert("Perfil eliminado correctamente");
            this.profile = null; // Limpiar el perfil
          })
          .catch(error => console.error(error));
    }
  }
};
</script>

<style scoped>

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
  width: 30%;
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

</style>
