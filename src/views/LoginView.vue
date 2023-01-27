<template>
  <NavBarLogin />
  <form @submit.prevent="sendForm" class="form">
    <div class="form-title-section">
      <h1 class="form-title">Acceso a la tienda</h1>
      <hr>
    </div>
    <div class="row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input v-model="email" type="email" class="form-control" id="staticEmail" placeholder="Ingresa tu email" required>
      </div>
    </div>
    <div class="row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" required>
      </div>
    </div>
    <button class="btn btn-submit" type="submit">Acceder</button>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBarLogin from '@/components/NavBarLogin.vue';
import useLogin from '@/composable/useLogin'
import router from '@/router';

export default defineComponent({
  components: {
    NavBarLogin,
  },
  setup () {
    const { login } = useLogin()
    const email = ref<string>('');
    const password = ref<string>('');

    return {
      email, 
      password,
      async sendForm() {
        const credentials = { email: email.value, password: password.value }
        await login(credentials)
        router.push({name: 'list-products'})
      }
    }

  }
})
</script>



<style>
.form {
  border: 1px solid #8ed4b5;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 100px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
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


.btn-submit {
    background-color: #8ed4b5;
    border: none;
    color: #35495e;
    padding: 15px 25px 15px 25px;
    margin-bottom: 25px;
}

.btn-submit:hover {
  background-color: #35495e;
  color: #8ed4b5;
}

</style>