import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userRole = localStorage.getItem('userRole')
    // if (userRole === 'Admin') {
    //     next()
    // } else {
    //     next({ name: "login"})
    // }
}

export default haveRoleGuard
