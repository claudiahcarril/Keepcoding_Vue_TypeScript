<template>
    <nav class="navbar bg-body-tertiary">
        <a class="navbar-brand" href="#">
            <img src="" alt="FakeSkop" width="30" height="24">
        </a>
        <ul>
            <li class="display-6">
                <router-link :to="{name: 'list-products'}">Productos</router-link>
            </li>
            <li class="display-6">
                <router-link :to="{name: 'profile'}">Perfil</router-link>
            </li>
        </ul>
        <CustomButton>
            <template v-slot:left-icon>
                <i class="bi bi-box-arrow-right"></i>
            </template>
            <template v-slot:right-icon>
                <p>Cerrar sesión</p>
            </template>
        </CustomButton>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'NavBar',
    components: {
        CustomButton,

    },

    setup() {
        return {}
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
        font-weight: bold;
        text-decoration: none;
        padding: 5px;
    }
    
    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;

    }


</style>