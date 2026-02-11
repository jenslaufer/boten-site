import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createHead } from '@unhead/vue/client'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            props: {
                badge: '',
                headline: '',
                uvp: '',
                cta: '',
                ctaFooter: '',
                productName: '',
                url: ''
            },
            component: () => import('./components/Home.vue'),
        }
    ]
})


createApp(App)
    .use(router)
    .use(createHead())
    .mount('#app')

