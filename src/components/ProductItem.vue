<template>
    <div class="card product-item">
        <div class="card-img-top product-img">
            <img :src="product.images[0]" :alt="product.title">
        </div>
        <div class="product-all-info">
            <div class="card-title product-title">{{ product.title }}</div>
            <div class="card-text product-info">
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">{{ product.price }} €</div>
            </div>
            <div class="buttons">
                <button class="btn btn-sm btn-primary btn-add" 
                @click="addProductToCart(product)">Añadir al Carrito</button>
                <button class="btn btn-sm btn-success btn-info"
                @click="$emit('goDetail', product)">Más información</button>
            </div>
        </div>
    </div>
</template>



<script lang="ts">
import { useCart } from '@/composable/useCart';
import { Product } from '@/models/product'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
                required: true
        }
    },

    setup() {
        const { addProductToCart } = useCart()

        return {
            addProductToCart
        }
    }
})
</script>


<style scoped>
.product-item {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 450px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.product-all-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


.product-title {
    color: #35495e;
    font-size: 1.2rem;
    font-weight: 700;
}

.product-img > img {
    width: 100%;
}

.product-description {
    margin: 10px 3px 10px 3px;
    font-size: 12px;
}

.product-price {
    color: #35495e;
    font-size: 1.5rem;
    font-weight: 700;
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px
}

.btn-add {
    background-color: #8ed4b5;
    color: #35495e;
    border: #8ed4b5;
    font-weight: 700;
}

.btn-info {
    background-color: #35495e;
    color: #8ed4b5;
    border: #35495e;
    font-weight: 700;
}

</style>
