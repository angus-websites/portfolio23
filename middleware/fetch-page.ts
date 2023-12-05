export default defineNuxtRouteMiddleware((to) => {
    console.log('Middleware', to.name)
    useState('routeSlug', () => to.name)
})