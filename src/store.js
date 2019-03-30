import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		room_cats: [
			{
				value: '',
				label: 'Без проживания'
			}
		],
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	}
})
