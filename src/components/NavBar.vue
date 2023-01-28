<template>
    <nav class="navbar bg-body-tertiary">
        <a class="navbar-brand" href="#">
            <img src="../assets/fakeshoplogo.png" alt="FakeShop" width="130" height="70">
        </a>
        <ul>
            <li class="display-6">
                <router-link :to="{name: 'list-products'}">Productos</router-link>
            </li>
            <li class="display-6">
                <router-link :to="{name: 'profile'}">Perfil</router-link>
            </li>
        </ul>
        <button @click="toggleCart" class="btn btn-secondary btn-cart">Carrito</button>
        <!-- <CustomButton> -->
        <CustomButton @click="removeToken">
            <template v-slot:left-icon>
                <i class="bi bi-box-arrow-right"></i>
            </template>
            <template v-slot:right-text>
                <p>Logout</p>
            </template>
        </CustomButton>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue';
import useLogin from '@/composable/useLogin'
import { useCart } from '@/composable/useCart';
import router from '@/router';

export default defineComponent({
    name: 'NavBar',
    components: {
        CustomButton,
    },

    setup() {
        const { toggleCart } = useCart()
        const { deleteToken } = useLogin()

        return {
            toggleCart,
            removeToken() {
                console.log(deleteToken),
                deleteToken,
                router.push({name: 'login'})
            }
        }
    },
})
</script>


<style scoped>
    .navbar {
        width: 100%;
        padding: 0;
        margin: 0 0 20px 0;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
    li {
        font-weight: 700;
        text-decoration: none;
        padding: 5px;
        padding-left: 20px;
    }
    
    a {
        color: #35495e;
        text-decoration: none;
        font-size: 1.2rem;

    }

    .router-link-active, 
    a:active {
        color: #8ed4b5;
    }


    .navbar-brand > img {
        margin-left: 20px;
    }

.btn-cart {
    background-color: #35495e;
    color: #8ed4b5;
    margin-right: 20px;
} 


</style>