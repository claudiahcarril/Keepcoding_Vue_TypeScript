import { Module } from "vuex";
import { ProfileState } from "..";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state, { IUserState } from "./state";


const loginModule: Module<IUserState, ProfileState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default loginModule