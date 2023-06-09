import { history } from './shared/history';
import { routes } from './config/routes';
import { createApp } from 'vue'
import { App } from './App'
import {createRouter} from 'vue-router'
import 'virtual:svg-icons-register'
const router = createRouter({
    routes,
    history
})
createApp(App).use(router).mount('#app')
