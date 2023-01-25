<template>
  <NavBarLogin />
  <div class="form">
    <div class="form-title-section">
      <h1 class="form-title">Acceso a la tienda</h1>
      <hr>
    </div>
    <div class="row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Usuario</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
    </div>
  </div>
  <div class="row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarLogin from '@/components/NavBarLogin.vue';

export default defineComponent({
  components: {
    NavBarLogin,
  },

})
</script>



<style>
.form {
  border: 1px solid #8ed4b5;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 100px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
}

.form-title-section {
  background-color: #f8f9fa;
  width: 100%;
  margin: 0;
  padding: 0;
}

.form-title {
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  color: #35495e;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0;
  padding-top: 15px;
}

.form-title-section > hr {
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