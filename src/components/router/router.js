import Mein from "@/pages/Mein";
import {createRouter, createWebHistory} from "@/router/router";
import UserPage from "@/page/UserPages";
import About from "@/page/About";
import PostIdPage from "@/components/pages/PostIdPage";


const routes = [
    {
        path: '/',
        component: Mein
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
]

const router = createRouter( {
    routes,
        history: createWebHistory(process.env.BASE_URL)
})
export default router;
