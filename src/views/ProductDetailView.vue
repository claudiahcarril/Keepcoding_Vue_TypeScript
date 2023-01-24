<template>
  <div v-if="product" class="product" >
    <div class="product-title">
      <h1>{{ product.title }}</h1>
    </div>
    <div class="product-info">
      <div class="img-product">
        <img :src="product.images" alt="">
      </div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">
        <div>
          <i class="bi bi-tag-fill"></i>
        </div>
        {{ product.price }}€</div>
    </div>
  </div>
  <div v-else>Cargando producto...</div>
</template>
  

<script lang="ts">
import useProducts from '@/composable/useProducts'
import { defineComponent } from 'vue'
  
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
      userRole: String
  },
  setup(props) {
  const { product, fetchProductById } = useProducts()
  fetchProductById(props.id)

   return {
      product, 
    }
  },
})
</script>


<style scoped>
.product {
  border: 1px solid #8ed4b5;
}



</style>