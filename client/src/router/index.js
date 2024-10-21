import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/soopLogin.vue'
import MainView from '../components/mainView.vue'
import SoopJoin from '../components/soopJoin.vue'
import SoopJoinInsert from '../components/soopJoinInsert.vue'
import PersonalChannel from '../components/personalChannel.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/join',
        name: 'join',
        component: SoopJoin,
    },
    {
        path: '/joinInsert',
        name: 'joinInsert',
        component: SoopJoinInsert,
    },
    {
        path: '/ch',
        name: 'ch',
        component: PersonalChannel,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router