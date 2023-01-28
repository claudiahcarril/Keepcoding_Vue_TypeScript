<template>
    <div class="cart">
        <div class="cart-header">
            <h2>Mi carrito: {{ cartItems.length }} productos</h2>
        </div>
        <div class="cart-items">
            <ul>
                <li v-for="item in cartItems" :key="item.id">
                    <div class="element-name">
                        {{ item.title }}
                    </div>
                    <div class="actions">
                        <button @click="removeProductFromCart(item)" class="btn btn-danger">Borrar</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cart-footer">
            <button @click="toggleCart" class="btn btn-primary btn-cart">Comprar</button>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useCart } from '@/composable/useCart'

export default defineComponent({
    setup() {
        const { cartItems, removeProductFromCart, toggleCart } = useCart()
        
        return {
            cartItems,
            removeProductFromCart,
            toggleCart
        }
    },
})
</script>


<style scoped>
.cart {
    height: 100vh;
    position: fixed; z-index: 8;
    top: 0;
    right: 0;
    width: 350px;
    border: 1px solid #8ed4b5;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}

.cart-header, .cart-footer {
    background-color: #35495e;
    height: 50px;
    width: 100%;
}

.cart-header > h2 {
    font-size: 1.2rem;
    margin-top: 17px;
    color: #8ed4b5;
}


.cart-items > ul {
    list-style: none;
}

li {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.btn-cart {
    background-color: #8ed4b5;
    color: #35495e;
    margin-top: 5px;
    border: #8ed4b5;
}

.btn-danger {
    margin-right: 3px;
    margin-bottom: 5px;
}

</style>