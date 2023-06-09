<template>
	<view>
		<!-- tab切换 -->
		<scroll-view scroll-with-animation scroll-x :scroll-into-view="scrollInto" class="tabbar scroll-row">
			<view @click="handleChangeTab(index)" :id="'tab' + index"
				:class="index == activeTab ? 'text-main font-lg font-weight-bold' : ''"
				class=" px-3 py-2 font-md scroll-row-item" v-for="(item,index) in tabBars" :key="index">
				{{item.classname}}
			</view>
		</scroll-view>

		<swiper @change="handleChangeSwiper" :current="activeTab" :style="{height : scrollH + 'px'}" :duration="150">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<template v-if="item.list.length > 0">
					<view class="swiper-item">
						<scroll-view @scrolltolower="handleLoadMore(index)" scroll-y="true"
							:style="{height : scrollH + 'px'}">
							<block v-for="(post,i) in item.list" :key="i">
								<!-- 帖子列表 -->
								<comp-post :item="post" :index="i" @support="handleSupport"
									@follow="handleIsFollow"></comp-post>
								<!-- 分割线 -->
								<comp-divider></comp-divider>
							</block>
							<!-- 上拉加载更多 -->
							<comp-load-more :loadMore="item.loadMore"></comp-load-more>
						</scroll-view>
					</view>
				</template>
				<template v-else>
					<comp-no-thing></comp-no-thing>
				</template>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	const demo = [{
			username: "昵称",
			userpic: "/static/default.jpg",
			newstime: "2019-10-20 下午04:30",
			isFollow: false,
			title: "我是标题",
			titlepic: "/static/demo/datapic/11.jpg",
			support: {
				type: "support", // 顶
				support_count: 1,
				unsupport_count: 2
			},
			comment_count: 2,
			share_num: 2
		},
		{
			username: "昵称",
			userpic: "/static/default.jpg",
			newstime: "2019-10-20 下午04:30",
			isFollow: false,
			title: "我是标题",
			titlepic: "/static/demo/datapic/11.jpg",
			support: {
				type: "support", // 顶
				support_count: 1,
				unsupport_count: 2
			},
			comment_count: 2,
			share_num: 2
		},
		{
			username: "昵称",
			userpic: "/static/default.jpg",
			newstime: "2019-10-20 下午04:30",
			isFollow: false,
			title: "我是标题",
			titlepic: "/static/demo/datapic/11.jpg",
			support: {
				type: "support", // 顶
				support_count: 1,
				unsupport_count: 2
			},
			comment_count: 2,
			share_num: 2
		},
		{
			username: "昵称",
			userpic: "/static/default.jpg",
			newstime: "2019-10-20 下午04:30",
			isFollow: false,
			title: "我是标题",
			titlepic: "",
			support: {
				type: "unsupport", // 踩
				support_count: 1,
				unsupport_count: 2
			},
			comment_count: 2,
			share_num: 2
		},
	]
	import { getPostClass } from "@/api/index.js"
	export default {
		data() {
			return {
				scrollH: 0,
				scrollInto: 0,
				activeTab: 0,
				// tabbar数据
				tabBars: [],
				// 帖子列表数据
				newsList: []
			}
		},
		onLoad() {
			this.getHeight()
			this.getData()
		},
		methods: {
			// 获取数据
			async getData() {
				const result = await getPostClass()
				console.log("result=>", result)
				this.tabBars = result.list
				const arr = []

				for (let i = 0; i < this.tabBars.length; i++) {
					// 1.上拉加载更多  2.加载中... 3.没有更多了
					let obj = {
						loadMore: '上拉加载更多',
						list: []
					}

					if(i < 2){
						obj.list = demo
					}

					arr.push(obj)
				}
				this.newsList = arr
			},
			// 上拉加载
			handleLoadMore(index) {
				// 获取当前滚动到底部的数据
				const item = this.newsList[index]

				// 判断是否处于可加载状态（上拉加载更多）
				if (item.loadMore !== "上拉加载更多") return

				// 修改当前列表加载状态
				item.loadMore = '加载中...'

				// 模拟数据请求
				setTimeout(() => {
					item.list = [...item.list, ...item.list]

					item.loadMore = '上拉加载更多'
				}, 1000)

				// 当拿到所有的数据之后, 我们的状态九修改为没有更多了

			},
			// 获取可使用窗口高度
			getHeight() {
				uni.getSystemInfo({
					success: res => {
						this.scrollH = res.windowHeight - uni.upx2px(100)
					}
				})
			},
			// tab切换
			handleChangeTab(index) {
				this.activeTab = index
				this.scrollInto = 'tab' + index
			},
			// swiper切换触发的方法
			handleChangeSwiper(e) {
				this.handleChangeTab(e.detail.current)
			},
			// 关注操作
			handleIsFollow(index) {
				// this.newsList[index].isFollow = !this.list[index].isFollow
				// uni.showToast({
				// 	title: '关注成功',
				// 	icon: 'none'
				// })
			},
			// 顶/踩操作
			handleSupport(e) {
				// 获取当前操作的数据(点击按钮对应的数据)
				// const item = this.list[e.index]
				// const msg = e.type === 'support' ? '支持' : '反对'
				// // 当前所点击的帖子是否被顶/踩过, 如果没有被顶/踩,我们在第一次点击的时候, 就应该让对应的类型数字++
				// if (item.support.type === "") {
				// 	item.support[e.type + '_count']++
				// } else if (item.support.type === 'support' && e.type === 'unsupport') {
				// 	// 顶 -1
				// 	item.support.support_count--
				// 	// 踩 +1
				// 	item.support.unsupport_count++
				// } else if (item.support.type === 'unsupport' && e.type === 'support') {
				// 	// 顶 +1
				// 	item.support.support_count++
				// 	// 踩 -1
				// 	item.support.unsupport_count--
				// }
				// item.support.type = e.type
				// uni.showToast({
				// 	title: msg,
				// 	icon: 'none'
				// })
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		height: 100rpx;
	}
</style>