import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
        next( { name: "list-products"} )
    } else {
        next({ name: "login"})
    }
}

export default haveRoleGuard
