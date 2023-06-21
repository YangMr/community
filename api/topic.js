import service from "@/utils/http.js"

// 获取指定话题分类下的话题列表
export const getTopicList = (postId, page = 1) => {
	return service.get(`/topicclass/${postId}/topic/${page}`)
}