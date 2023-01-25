<template>
  <NavBar />
    <div class="profile">
      <h1>This is an Profile Page</h1>
    </div>
  </template>
  

  <script lang="ts">
  import { defineComponent } from 'vue'
  import NavBar from '@/components/NavBar.vue';
  
  export default defineComponent({
    components: {
      NavBar,
    },

  })
  </script>
  