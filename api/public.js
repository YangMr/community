import service from "@/utils/http.js"
import store from "@/store/index.js"

// 发布文章
export const publicPost = (data) => {
	return service.post("/post/create", data)
}

// 上传多图
export const uploadImage = (item) => {
	// return service.post("/image/uploadmore",data)
	return  new Promise((resolve,reject)=>{
		uni.uploadFile({
			// url: 'http://upload.9yuecloud.com:8887/upload_single', //仅为示例，非真实的接口地址
			url: 'https://sqapi.2yuecloud.com/api/v1/image/uploadmore', //仅为示例，非真实的接口地址
			filePath : item,
			name: 'imglist[]',
			header : {
				token : store.state.user.token
			},
			success: (uploadFileRes) => {
				resolve(uploadFileRes.data);
			},
			fail: (e)=>{
				reject(e)
			}
		});
	})
	
}