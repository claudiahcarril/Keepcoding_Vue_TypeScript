<template>
  <NavBar />
  <div class="profile">
    <div class="profile-title-section">
      <h1 class="profile-title">Nombre de usuario</h1>
      <h2>{{ user?.email }}</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="email@example.com">
    </div>
  </div>
  <div class="row">
    <div class="col-sm-10">
      <input type="password" class="form-control-plaintext" id="inputPassword">
    </div>
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
  border: 1px solid #8ed4b5;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 100px;
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
  text-align: start;
  text-decoration: none;
  padding: 5px;
  color: #35495e;
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
}

.profile-title-section > hr {
  width: 100%;
  border: 1px solid #8ed4b5;
  margin-top: 8px;
}

.col-form-label {
  font-weight: 700;
}

.row {
  margin: 30px 20px 40px 20px;
}


</style>