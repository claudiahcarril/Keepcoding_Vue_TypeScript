import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ICartState } from "./state";

const mutations: MutationTree<ICartState> = {
    addProduct(state, product: Product) {
        state.products.push(product)
    },

    removeProduct(state, product: Product) {
        const tmp = state.products.filter(p => p.id !== product.id)
        state.products = tmp
    },

    toggleCart(state) {
        state.isOpen = !state.isOpen
    }
}

export default mutations