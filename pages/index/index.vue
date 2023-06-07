<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<comp-post :item="item"></comp-post>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						username: "昵称",
						userpic: "/static/default.jpg",
						newstime: "2019-10-20 下午04:30",
						isFollow: false,
						title: "我是标题",
						titlepic: "/static/demo/datapic/11.jpg",
						support: {
							type: "support",
							support_count: 1,
							unsupport_count: 2
						},
						comment_count: 2,
						share_num: 2
					},
					{
						username: "昵称1",
						userpic: "/static/default.jpg",
						newstime: "2019-10-20 下午04:30",
						isFollow: false,
						title: "我是标题1",
						titlepic: "/static/demo/datapic/12.jpg",
						support: {
							type: "support",
							support_count: 1,
							unsupport_count: 2
						},
						comment_count: 2,
						share_num: 2
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>

</style>