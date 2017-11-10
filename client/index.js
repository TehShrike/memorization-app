import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './state'

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

sync(store, router)

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App),
})
