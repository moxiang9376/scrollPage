import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from "../views/login.vue"
import register from "../views/register.vue"
import setPwd from "../views/setPwd.vue"
import personalCenter from "../views/personalCenter.vue"

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/register',
		name: 'register',
		component: register
	},
	
	{
		path: '/setPwd',
		name: 'setPwd',
		component: setPwd
	},
	{
		path: '/personalCenter',
		name: 'personalCenter',
		component: personalCenter
	}
]

const router = new VueRouter({
	routes
})

export default router
