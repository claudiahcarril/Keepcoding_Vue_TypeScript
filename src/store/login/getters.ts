import { GetterTree } from "vuex"
// import { ProfileState } from "."
import { IState } from "../products"
import { IUserState } from "./state"

const getters: GetterTree<IUserState, IState> = {
    getUser(state) {
        return state.user
    },
    getToken(state) {
        return state.token
    },

}

export default getters