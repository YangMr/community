import config from "@/config/index.js"
const service = {
	common : {
		method : 'GET',
		header: {
			"content-type":"application/json"
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
			return res.data.data
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