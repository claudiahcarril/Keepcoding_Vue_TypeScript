<template>
  <!-- <SearchBar></SearchBar> -->
  <div>
    <div v-if="isLoading">
      Cargando lista de productos...
    </div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product"
        @goDetail="goDetail">
        <!-- {{ product.title }} -->
      </ProductItem>
    </div>
  </div>
</template>

<script lang="ts">
// import SearchBar from '@/components/SearchBar.vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composable/useProducts';
import { Product } from '@/models/product';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SearchBar',
  components: { 
    // SearchBar, 
    ProductItem,

  },
  setup() {
    const {products, isLoading, fetchProducts} = useProducts()

    const router = useRouter()
    fetchProducts()

    return {
      products,
      isLoading,
      goDetail: (product: Product) => router.push({name: 'detail-product', params: {id: product.id}})
    }      
  },
});
</script>


<style scoped>

.product-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem 1rem
}



</style>