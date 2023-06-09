import service from "@/utils/http.js"

// 获取文章所有分类
const getPostClass = () => {
	console.log("456")
	return service.get('/postclass')
}

// 指定文章分类下的文章列表
const findPostClass  = (id, page) => {
	return service.get(`/postclass/${id}/post/${page}`)
}

// 导出接口
export {
	getPostClass,
	findPostClass
}