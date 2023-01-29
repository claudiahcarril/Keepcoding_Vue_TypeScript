<template>
  <NavBar />
  <div v-if="product" class="product" >
    <div class="product-title">
      <h1>{{ product.title }}</h1>
      <hr>
    </div>
    <div class="product-info"> 
      <div class="img-product-active">
        <img
        :src="selectedImage" 
        :alt="product.title">
      </div>
      <div class="product-description">{{ product.description }}</div>
    </div>
    <div class="selected-icon">        
      <i class="bi bi-square-fill"
      v-for="(image2, i) in product.images" 
      :key="image2"
      :class="{ selected: i === imageProduct }"
      @click="showImage(i)">
      </i>
    </div>
    <div class="product-add">
      <div class="product-price">
        {{ product.price }}€
      </div>
      <button class="btn btn-sm btn-primary btn-add" 
        @click="addProductToCart(product)">Añadir al Carrito</button>
    </div>
    </div>
  <div v-else>Cargando producto...</div>
</template>
  

<script lang="ts">
import useProducts from '@/composable/useProducts'
import { computed, defineComponent, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useCart } from '@/composable/useCart'
  
export default defineComponent({
  components: {
    NavBar,
  },

  props: {
    images: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
      // userRole: String
  },

  setup(props) {
    const { addProductToCart } = useCart()
    const { product, fetchProductById } = useProducts()
    fetchProductById(props.id)

    const imageProduct = ref<number>(0)

    const showImage = (i: number) => {
      imageProduct.value = i
    }

    const selectedImage = computed(() => {
      return product.value.images[imageProduct.value]
    })

   return {
      imageProduct,
      product,
      selectedImage,
      addProductToCart,
      showImage
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

.product-title > h1  {
  padding: 0;
  color: #35495e;
  font-size: 2rem;
  font-weight: 700;
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

.img-product-active {
  max-width: 50%;
  margin: 10px;
}

.img-product-active > img {
  max-width: 100%;
}

.product-description {
  text-align: justify;
  margin: 0 20px 0 20px;
}


.btn-add {
  background-color: #8ed4b5;
  color: #35495e;
  border: #8ed4b5;
  font-weight: 700;
  margin-left:15px
}

.btn-add:hover, .btn-add:active {
  background-color: #35495e;
  color: #8ed4b5;
}


.product-add {
  display: flex;
  flex-direction: row nowrap;
  justify-content: end;
  
}

.product-price {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border: none;
  height: 50px;
  max-width: 150px;
  padding: 10px 15px 10px 15px ;
  font-size: xx-large;
  font-weight: 700;
}


.selected{
  color: #8ed4b5;
}

.selected-icon {
  width: 50%;
}

.bi-square-fill {
  margin-left: 5px;
}

</style>