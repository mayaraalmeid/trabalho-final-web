import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../views/home.vue')
    }
    ,
    {
        path:'/login',
        name:"login",
        component:()=>import('../views/login.vue')
    }
    ,
    {
        path:'/cadastro',
        name:"cadastro",
        component:()=>import('../views/cadastro.vue')
    }
    ,
    {
        path:'/agendar',
        name:"agenda",
        component:()=>import('../views/agenda.vue')
    } ,
    {
        path:'/err',
        name:"erro",
        component:()=>import('../views/err.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router