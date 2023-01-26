import fakeShopApi from "@/api/fakeShopApi"
import { Credentials } from "@/models/user"
import { ActionTree } from "vuex"
import { ProfileState } from ".."
import { IUserState } from "./state"

const actions: ActionTree<IUserState, ProfileState> = {
    async login ({ commit }, credentials: Credentials) {
        const {data} = await fakeShopApi.post('/auth/login', { credentials })
        localStorage.setItem('token', data.access_token)
        commit('setToken', data.access_token)
        const user = await fakeShopApi.get('/auth/profile')
        commit('setUser', user)
    }
}

export default actions