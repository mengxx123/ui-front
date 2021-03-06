import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Device = resolve => require(['@/views/Device'], resolve)
const Screen = resolve => require(['@/views/Screen'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/device',
        component: Device
    },
    {
        path: '/screen',
        component: Screen
    },
    {
        path: '*',
        component: Error404
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
