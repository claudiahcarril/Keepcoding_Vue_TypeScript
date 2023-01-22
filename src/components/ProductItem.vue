<template>
    <div class="card product-item">
        <div class="card-title product-title">{{ product.title }}</div>
        <div class="card-img-top product-img">
            <img :src="product.images[0]" :alt="product.title">
        </div>
        <div class="card-text product-info">
            <div class="product-description">{{ product.description }}</div>
            <div class="product-price">{{ product.price }}</div>
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
    width: 300px;

}

</style>
