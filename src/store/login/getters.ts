import { GetterTree } from "vuex"
import { ProfileState } from ".."
import { IUserState } from "./state"

const getters: GetterTree<IUserState, ProfileState> = {
    getUser(state) {
        return state.user
    },
    getToken(state) {
        return state.token
    },

}

export default getters