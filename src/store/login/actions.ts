import fakeShopApi from "@/api/fakeShopApi"
import { Credentials } from "@/models/user"
import { ActionTree } from "vuex"
// import { ProfileState } from "."
import { IState } from "../products"
import { IUserState } from "./state"

const actions: ActionTree<IUserState, IState> = {
    async login ({ commit }, credentials: Credentials) {
        const {data} = await fakeShopApi.post('/auth/login', { ...credentials })
        localStorage.setItem('token', data.access_token)
        commit('setToken', data.access_token)
        const response = await fakeShopApi.get('/auth/profile')
        commit('setUser', response.data)
        console.log(response.data)
    },
    
    async deleteToken( {commit}) {
        localStorage.getItem('token')
        const removeToken = 'hola'
        localStorage.removeItem('token')
        commit('removeToken', removeToken)
    }
}

export default actions