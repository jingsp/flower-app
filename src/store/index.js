import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutation from './mutation'

Vue.use(Vuex)

const state = {
	cartList: {}
}

export default {
	state,
	action, 
	mutation
}
