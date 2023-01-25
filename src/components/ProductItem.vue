<template>
    <div class="card product-item">
        <div class="card-title product-title">{{ product.title }}</div>
        <div class="card-img-top product-img">
            <img :src="product.images[0]" :alt="product.title">
        </div>
        <div class="card-text product-info">
            <div class="product-description">{{ product.description }}</div>
            <div class="product-price">{{ product.price }} €</div>
        </div>
        <div class="buttons">
            <button class="btn btn-sm btn-primary" 
            @click="$emit('addCart', product)">Añadir al Carrito</button>
            <button class="btn btn-sm btn-success"
            @click="$emit('goDetail', product)">Más información</button>
        </div>
    </div>
</template>



<script lang="ts">
import { Product } from '@/models/product'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
                required: true
        }
    }
})
</script>


<style scoped>
.product-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 450px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.product-img > img {
    width: 100%;
}

.product-description {
    font-size: 12px;
}


.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
