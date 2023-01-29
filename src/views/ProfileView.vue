<template>
  <NavBar />
  <div class="profile">
    <div class="profile-title-section">
      <h1 class="profile-title">Nombre de usuario: {{ user?.name }}</h1>
      <hr>
    </div>
    <div class="profile-info-section">
      <div class="profile-photo">
        <img :src="user?.avatar" alt="user-foto">
      </div>
      <h2 class="user-info">Email: {{ user?.email }}</h2>
      <h2 class="user-info">Rol: {{ user?.role }}</h2>
    </div>
  </div>
</template>
  

<script lang="ts">
  import { defineComponent } from 'vue'
  import NavBar from '@/components/NavBar.vue';
  import useLogin from '@/composable/useLogin';
  
  export default defineComponent({
    components: {
      NavBar,
    },

    setup() {
      const { user, login } = useLogin()

      return {
        user,
        login,
      }
    }

  })
  </script>
  

  <style>
.profile {
  display: flex;
  flex-direction: column;
  border: 1px solid #8ed4b5;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.profile-title-section {
  background-color: #f8f9fa;
  width: 100%;
  margin: 0;
  padding: 15px 30px 0px 10px;
}

.profile-title {
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  color: #35495e;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0;
}

.profile-title-section > hr {
  width: 100%;
  border: 1px solid #8ed4b5;
  margin-top: 8px;
}

.profile-info-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


.profile-photo > img {
  width: 80%;
}

.user-info {
  padding: 10px 0 0 55px;
  color: #35495e;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}

</style>