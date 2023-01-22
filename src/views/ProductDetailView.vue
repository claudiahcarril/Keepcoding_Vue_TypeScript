<template>
    <div class="product">
      <h1>This is an Product Detail Page</h1>
    </div>
  </template>
  

  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true
      },
      userRole: String
    }
  })
  </script>
  