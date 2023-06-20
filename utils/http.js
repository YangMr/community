import config from "@/config/index.js"
import store from "@/store/index.js"
const service = {
	common : {
		method : 'GET',
		header: {
			"content-type":"application/json",
			token : store.state.user.token || ""
		},
		data : {}
	},
	
	async request(options = {}){
		try{
			options.url = config.webUrl + options.url
			
			options.method = options.method || this.common.method
			options.header = options.header || this.common.header
			options.data = options.data || this.common.data
			const res = await uni.request(options)	
			console.log("aaaaa=>", res)
			if(res.statusCode === 200){
				return res.data.data
			}
			
			if(res.statusCode !== 200){
				uni.showToast({
					title : res.data.msg || "未知错误",
					icon : 'none'
				})
				return res.data.data
			}
			
		}catch(e){
			//TODO handle the exception
			console.log('e=>', e)
		}
		
	},
	
	get(url, data = {}, options = {}){
		options.url = url
		options.data = data
		options.method =  'GET'
		return this.request(options)
	},
	post(url, data = {}, options = {}){
		options.url = url
		options.data = data
		options.method =  'POST'
		return this.request(options)
	}
}

export default service