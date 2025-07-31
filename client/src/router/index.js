import { createRouter, createWebHistory } from 'vue-router' // createWebHistory чтобы использовать обычные URL

import Main from '../views/main-page.vue'
import ProductPage from '../views/product-page.vue'
import CartPage from'../views/cart-page.vue'

const routes =[
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/product/:id',
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router