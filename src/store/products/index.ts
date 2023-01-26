import { Module } from "vuex";
import state, { IProductsState } from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { Product } from "@/models/product";

export interface IState {
    authProduct: Product | null,
  }

const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default productsModule