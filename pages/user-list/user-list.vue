<template>
	<view>
		<view class="flex align-center py-2" >
			<view @click="changeTab(index)"
				:class="tabIndex === index ? 'font-lg font-weight-bold text-main' : 'font-md'"
				class="flex-1 flex align-center justify-center" v-for="(item,index) in tabBars" :key="index">
				{{item.name}} <text v-if="item.num > 0" class="ml-2">{{item.num}}</text>
			</view>
		</view>

		<swiper @change="handleChangeSwiper" :current="tabIndex" :style="{height : scrollH + 'px'}" :duration="150">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<template v-if="item.list.length > 0">
					<view class="swiper-item">
						<scroll-view @scrolltolower="handleLoadMore(index)" scroll-y="true"
							:style="{height : scrollH + 'px'}">
							<block v-for="(post,i) in item.list" :key="i">

								<comp-user-list :item="post" :index="i"></comp-user-list>

							</block>
							<!-- 上拉加载更多 -->
							<comp-load-more  :loadMore="item.loadMore"></comp-load-more>
							
						</scroll-view>
					</view>
				</template>
				<!-- 加载中 -->
				<template v-if="!item.firstLoad">
					<view class="text-light-muted flex align-center justify-center font-md" style="height: 200rpx;">
						加载中.....</view>
				</template>
				<!-- 无数据 -->
				<template v-else>
					<comp-no-thing></comp-no-thing>
				</template>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	const demo = [{
		avatar:"/static/default.jpg",
		username:"昵称1",
		sex:1, // 0未知，1女性，2男性
		age:24,
		isFollow:true
	},{
		avatar:"/static/default.jpg",
		username:"昵称2",
		sex:2, // 0未知，1女性，2男性
		age:24,
		isFollow:false
	},
	{
		avatar:"/static/default.jpg",
		username:"昵称2",
		sex:0, // 0未知，1女性，2男性
		age:24,
		isFollow:false
	}];
	export default {
		data() {
			return {
				scrollH: 0,
				tabIndex: 0,
				tabBars: [{
					name: "互关",
					num: 0
				}, {
					name: "关注",
					num: 2
				}, {
					name: "粉丝",
					num: 30
				}],
				newsList: []
			}
		},
		// 监听导航栏取消按钮
		onNavigationBarButtonTap(e) {
			uni.navigateBack({
				delta: 1
			})
		},
		// 监听点击搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		onLoad() {
			this.getHeight()
			this.getData()
		},
		methods: {
			// 点击tab触发的方法
			changeTab(index) {
				this.tabIndex = index
				this.getData()
			},
			// 获取数据
			async getData() {
				
				const arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					// 1.上拉加载更多  2.加载中... 3.没有更多了
					let obj = {
						loadMore: '上拉加载更多',
						list: [],
						page: 1,
						// 当firstLoad为false,则表示是第一次加载数据
						firstLoad: false,
					}

					if (i < 2) {
						obj.list = demo
					}

					arr.push(obj)
				}



				this.newsList = arr

				this.newsList[this.tabIndex].loadMore = this.newsList[this.tabIndex].list.length < 10 ? '没有更多了' : '上拉加载更多'

			},
			// 获取可使用窗口高度
			getHeight() {
				uni.getSystemInfo({
					success: res => {
						this.scrollH = res.windowHeight - uni.upx2px(100)
					}
				})
			},
			// swiper切换触发的方法
			handleChangeSwiper(e) {
				this.changeTab(e.detail.current)
			},
			// 上拉加载
			handleLoadMore(index) {
				// 获取当前滚动到底部的数据
				const item = this.newsList[index]
			
				// 判断是否处于可加载状态（上拉加载更多）
				if (item.loadMore !== "上拉加载更多") return
			
				// 修改当前列表加载状态
				item.loadMore = '加载中...'
				
				item.page++
			
			},
		}
	}
</script>

<style scoped>
	
</style>