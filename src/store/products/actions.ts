import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from ".";
import { IProductsState, ProductParams } from "./state";

const actions: ActionTree<IProductsState, IState> = {
    async fetchProducts({ commit }, params: ProductParams) {
        commit('setIsLoading', true)
        const perPage = 8
        const offset = (params.page - 1) * perPage
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(`/products?title=${params.title}&limit=${perPage}&offset=${offset}`)
        commit('setProducts', data)
        commit('setIsLoading', false)
    },
    async fetchProductById ({ commit }, productId: number) {
        commit('setIsLoading', true)
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
            `/products/${productId}`
        )
        commit('setSelectedProduct', data)
        commit('setIsLoading', false)

    }
}

export default actions