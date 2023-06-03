import { createApp } from 'vue'
import { App } from './App'
import {createRouter, createWebHashHistory} from 'vue-router'
import {Foo} from './views/Foo'
import {Bar} from './views/Bar'
const routes = [
    {path:'/',component:Foo},
    {path:'/bar',component:Bar}
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
createApp(App).use(router).mount('#app')
