import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userRole = localStorage.getItem('userRole')
    if (userRole === 'Admin') {
        // Si es admin, queremos que siga navegando
        next()
    } else {
        // Si no es admin, no puede pasar y lo redirigimos con next a otra ruta
        alert('No eres admin! No puedes pasar')
        next({ name: "home"})
    }
}

export default haveRoleGuard
