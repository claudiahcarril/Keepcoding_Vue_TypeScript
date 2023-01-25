<template>
    <nav class="navbar bg-body-tertiary">
        <a class="navbar-brand" href="#">
            <img src="" alt="FakeSkop" width="30" height="24">
        </a>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBarLogin',

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

    a {
        color: #35495e;
        text-decoration: none;
        font-size: 1.2rem;

    }

    a:focus {
        color: #8ed4b5;
    }


</style>