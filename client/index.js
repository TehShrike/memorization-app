import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Home from './routes/Home.vue'

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: Home,
	}],
})

new Vue({
	router,
	el: '#app',
	render: h => h(App),
})

