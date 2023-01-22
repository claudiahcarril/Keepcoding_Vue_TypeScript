<template>
    <nav class="navbar bg-body-tertiary">
        <a class="navbar-brand" href="#">
            <img src="" alt="FakeSkop" width="30" height="24">
        </a>
        <ul>
            <li>
                <router-link :to="{name: 'list-products'}">Products</router-link>
            </li>
            <li>
                <router-link :to="{name: 'profile'}">Profile</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>


<style scoped>
    .navbar {
        width: 100%;
        /* background-color: coral; */
        padding: 0;
        margin: 0 0 20px 0;
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

    }


</style>