import Mein from "@/components/pages/Mein";
import createWebHistory from "@/router/router";
import createRouter from "@/router/router";
import UserPage from "@/components/pages/UserPage";
import About from "@/components/pages/About";

const routes = [
    {
        path: '/',
        component: Mein
    },
    {
        path: '/pages',
        component: UserPage
    },
    {
        path: '/About',
        component: About
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default
    router;