import service from "@/utils/http.js"

// 昵称/邮箱/手机号 密码登录
export const accountLogin = (data) => {
	return service.post('/user/login',data)
}

// 获取用户详细信息
export const getInfo = (userId) => {
	return service.get(`/user/getcounts/${userId}`)
}

// 发送验证码
export const sendCode = () => {
	
}

// 手机验证码登录
export const phoneLogin = () => {
	
}

// 第三方登录
export const otherLogin = () => {
	
}

// 退出登录
export const logout = () => {
	return service.post('/user/logout')
}



