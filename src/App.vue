<template>
  <CartList v-show="isCartOpen"></CartList>
  
  <router-view/>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { useCart } from './composable/useCart';
import CartList from './components/CartList.vue';

export default defineComponent({
  name: "AppComponent",
  components: {
    CartList,
  },

  setup() {
    const {isCartOpen} = useCart()
    
    return {
      isCartOpen
    }
  }
})


</script>




<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
