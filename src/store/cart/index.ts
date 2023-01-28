import { Module } from "vuex"
import { IState } from "../products"
import state, { ICartState } from "./state"
import mutations from "./mutations"
import getters from "./getters"

const cartModule: Module<ICartState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
}

export default cartModule