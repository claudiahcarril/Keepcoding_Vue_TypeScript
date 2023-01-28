import { Product } from "@/models/product"
import { ProductParams } from "@/store/products/state"
import { computed } from "vue"
import { useStore } from "vuex"

const useProducts = () => {
    const store = useStore()
    return {
        // GETTERS
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(() => store.getters['products/getIsLoading']),
        product: computed(() => store.getters['products/getProduct']),

        // ACTIONS
        fetchProducts: (params: ProductParams) => store.dispatch('products/fetchProducts', params),
        fetchProductById: (productId: number) : Promise<Product> => store.dispatch('products/fetchProductById', productId)
    }
}

export default useProducts