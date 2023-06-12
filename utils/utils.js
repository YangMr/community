export default {
	// 格式化返回的帖子列表数据
	formatCommonList(item){
		return {
			id: item.user.id,
			username: item.user.username,
			userpic: item.user.userpic,
			newstime: item.create_time,
			isFollow: false,
			title: item.title,
			titlepic: item.titlepic,
			support: {
				type: "support", // 顶
				support_count: 1,
				unsupport_count: 2
			},
			comment_count: item.comment_count,
			share_num: item.sharenum
		}
	}
}