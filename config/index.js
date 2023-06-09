const config = {
	// #ifdef H5
	webUrl : '/dev-api'
	// #endif
	
	// 请求的baseUrl
	// #ifndef H5
	webUrl : 'http://sqapi.2yuecloud.com/api/v1'
	// #endif
}
export default config