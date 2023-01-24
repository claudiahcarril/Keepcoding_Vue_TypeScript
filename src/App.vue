<template>

  <NavBar></NavBar>

  <SearchBar></SearchBar>

  <router-view/>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    SearchBar,
  },

  setup() {
    
    return {
      
    }
  }
})


</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
