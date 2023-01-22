<template>
  <div>
    <div v-if="isLoading">
      Cargando...
    </div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product">
        {{ product.title }}
      </ProductItem>
    </div>
  </div>
</template>

<script lang="ts">
// import SearchBar from '@/components/SearchBar.vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composable/useProducts';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  components: { 
    // SearchBar, 
    ProductItem,

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


<style scoped>

.product-list {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 1rem 1rem
}



</style>