import { Credentials } from "@/models/user"
import { computed } from "vue"
import { useStore } from "vuex"

const useLogin = () => {
    const store = useStore()
    return {
        // GETTERS
        user: computed(() => store.getters['login/getUser']),
        token: computed(() => store.getters['login/getToken']),

        // ACTIONS
        login: (credentials: Credentials) => store.dispatch('login/login', credentials),
    }
}

export default useLogin