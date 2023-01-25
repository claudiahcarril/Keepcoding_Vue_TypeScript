<template>
  <NavBar />
  <div v-if="product" class="product" >
    <div class="product-title">
      <h1>{{ product.title }}</h1>
      <hr>
    </div>
    <div class="product-info">
      <div class="img-product">
        <img :src="product.images" alt="">
      </div>
      <div class="product-description">{{ product.description }}</div>
    </div>
    <div class="product-price">
      <div>
        <i class="bi bi-tag-fill"></i>
      </div>
      {{ product.price }}€
    </div>
  </div>
  <div v-else>Cargando producto...</div>
</template>
  

<script lang="ts">
import useProducts from '@/composable/useProducts'
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
  
export default defineComponent({
  components: {
    NavBar,
  },

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
  max-width: 968px;
  align-self: center;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.product-title {
  padding: 0;
}

.product-title > hr {
  width: 100%;
  border: 1px solid #8ed4b5;
}

.product-info {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.img-product {
  max-width: 50%;
  margin: 10px;
}

.img-product > img {
  max-width: 100%;
}

.product-description {
  text-align: justify;
}

</style>