import service from "@/utils/http.js"

// 搜索接口 - 可搜索 文章 post /用户 user/ 话题 topic
const search = (type,data) => {
	return service.post(`/search/${type}` , data)
}

// 导出接口
export {
	search
}