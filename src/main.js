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
                badge: 'Schnell, zuverlässig und sicher',
                headline: 'Ihre Wertgegenstände – in sicheren Händen schnell von A nach B',
                uvp: 'Wertgegenstände sicher von A nach B bringen? Ich erledige das schnell und zuverlässig für Sie – und behüte Ihr Eigentum wie meinen eigenen Besitz',
                cta: 'Jetzt 10 minütige Beratung buchen',
                ctaFooter: '',
                productName: 'Jens Laufer Botendienste',
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

