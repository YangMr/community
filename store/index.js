import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
		// 登录的状态 false表示未登录 true表示已登录
		loginStatus : false,
		// 用户信息
		user : {}
	},
	getters : {
		
	},
	mutations : {
		// 将用户信息保存到vuex
		saveUserInfo(state,user){
			state.loginStatus = true
			state.user = user
			uni.setStorageSync("user", JSON.stringify(user))
		},
		// 退出登录
		userLogout(state){
			state.loginStatus = false
			state.user = ''
			uni.removeStorageSync("user")
		},
		// 初始化vuex数据
		initUser(state){
			const user = uni.getStorageSync("user")
			if(user){
				state.loginStatus = true
				state.user = JSON.parse(user)
			}
		}
	},
	actions : {
		
	},
	modules : {
		
	}
})

export default store