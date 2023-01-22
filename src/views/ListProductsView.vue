<template>
  <div class="product-list">
    <div v-if="isLoading">
      Cargando...
    </div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        {{ product.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import SearchBar from '@/components/SearchBar.vue';
import useProducts from '@/composable/useProducts';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  components: { 
    // SearchBar, 
  },
  setup() {
    const {products, isLoading, fetchProducts} = useProducts()

    fetchProducts()

    return {
      products,
      isLoading
    }      
  },
});
</script>
