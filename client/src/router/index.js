import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/soopLogin.vue'
import MainView from '../components/mainView.vue'
import SoopJoin from '../components/soopJoin.vue'
import SoopJoinInsert from '../components/soopJoinInsert.vue'
import PersonalChannel from '../components/personalChannel.vue'
import LivePlayer from '../components/livePlayer.vue'
import GiftBalloon from '../components/giftBalloon.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
        props: true,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        props: true,
    },
    {
        path: '/join',
        name: 'join',
        component: SoopJoin,
        props: true,
    },
    {
        path: '/joinInsert',
        name: 'joinInsert',
        component: SoopJoinInsert,
        props: true,
    },
    {
        path: '/ch/:user_id',
        name: 'ch',
        component: PersonalChannel,
        props: true,
    },
    {
        path: '/gift_balloon/:user_id',
        name: 'giftBalloon',
        component: GiftBalloon,
        props: true,
    },
    {
        path: '/live_player/:user_id',
        name: 'livePlayer',
        component: LivePlayer,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router