<template>
  <NavBar />
  <SearchBar @filter="filterProducts" />
  <div>
    <div v-if="isLoading">
      Cargando lista de productos...
    </div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product"
      @goDetail="goDetail">
      </ProductItem>
    </div>
  </div>
  <PaginationComp :page="page" @prev="setPage(page - 1)" @next="setPage(page + 1)" />
</template>

<script lang="ts">
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composable/useProducts';
import { Product } from '@/models/product';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchBar from '@/components/SearchBar.vue';
import NavBar from '@/components/NavBar.vue';
import PaginationComp from '@/components/PaginationComp.vue';

export default defineComponent({
  name: 'ListProduct',
  components: { 
    ProductItem,
    SearchBar,
    NavBar,
    PaginationComp,

  },
  setup() {
    const {products, isLoading, fetchProducts} = useProducts()
    const router = useRouter()
    let title = ''
    const page = ref<number>(1);

    fetchProducts({ page: page.value, title})

    return {
      page,
      products,
      isLoading,
      goDetail: (product: Product) => router.push({name: 'detail-product', params: {id: product.id}}),
      filterProducts (filter: string) {
        page.value = 1
        title = filter
        fetchProducts({ page: page.value, title})
      },
      setPage (page2: number) {
        console.log(page2)
        page.value = page2
        fetchProducts({ page: page2, title})
      }
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
    gap: 1.5rem 1.5rem
}



</style>