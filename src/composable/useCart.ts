import { Product } from "@/models/product"
import { computed } from "vue"
import { useStore } from "vuex"

export const useCart = () => {
    const store = useStore()
    return {
        // STATE
        cartItems: computed(() => store.getters['cart/getCartElements']),
        isCartOpen: computed(() => store.getters['cart/getIsOpen']),

        // MUTATIONS
        addProductToCart: (product: Product) => store.commit('cart/addProduct', product),
        removeProductFromCart: (product: Product) => store.commit('cart/removeProduct', product),
        toggleCart: () => store.commit('cart/toggleCart')
    }
}