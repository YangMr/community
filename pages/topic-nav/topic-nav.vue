<template>
	<view>
		<!-- tab切换 -->
		<scroll-view scroll-with-animation scroll-x :scroll-into-view="scrollInto" class="tabbar border-bottom scroll-row">
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
								<view class="flex align-center p-2">

									<image style="width: 150rpx; height : 150rpx;" class="rounded" :src="post.titlepic" mode=""></image>
									<view>
										<view>{{post.title}}</view>
										<view class="text-muted font">{{post.desc}}</view>
										<view class="flex align-center text-muted font">
											<view>动态: {{post.news_count}}</view>
											<view>今日: {{post.todaypost_count}}</view>
										</view>
									</view>
								</view>
								<!-- 分割线 -->
								<comp-divider></comp-divider>
							</block>
							<!-- 上拉加载更多 -->
							<comp-load-more :loadMore="item.loadMore"></comp-load-more>
						</scroll-view>
					</view>
				</template>
				<!-- 加载中 -->
				<template v-if="!item.firstLoad">
					<view class="text-light-muted flex align-center justify-center font-md" style="height: 200rpx;">加载中.....</view>
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
	import {getPostClass} from "@/api/index.js"
	import {getTopicList} from "@/api/topic.js"
	export default {
		data() {
			return {
				scrollH: 0,
				scrollInto: "tab0",
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
				// 获取tabbar的数据
				const result = await getPostClass()
				this.tabBars = result.list
			
			
				const arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					// 1.上拉加载更多  2.加载中... 3.没有更多了
					let obj = {
						loadMore: '上拉加载更多',
						list: [],
						page: 1,
						// 当firstLoad为false,则表示是第一次加载数据
						firstLoad : false, 
					}
			
					arr.push(obj)
				}
			
				this.newsList = arr
			
				if (this.tabBars.length > 0) {
					this.getPostList()
				}
			},
			// 获取帖子列表方法
			async getPostList() {
				try {
					// 获取当前点击的tab的下标
					const index = this.activeTab
					// 获取对应的id
					const id = this.tabBars[index].id
					// 获取对应的页页码
					const page = this.newsList[index].page
					// 调用接口, 获取后台返回的数据
					const result = await getTopicList(id, page)
			
					const isRefresh = page === 1
			
					console.log("list==>", result)
			
					const list = result.list.map(item => {
						return {
							id : item.id,
							title : item.title,
							titlepic : item.titlepic,
							desc : item.desc,
							todaypost_count:item.todaypost_count,
							news_count:item.post_count
						}
					})
					
					this.newsList[index].list = isRefresh ? list : [...this.newsList[index].list, ...list]
					
					this.newsList[index].loadMore = list.length < 10 ? '没有更多了' : '上拉加载更多'
					
					if(isRefresh){
						this.newsList[index].firstLoad = true
					}
					
				} catch (e) {
					//TODO handle the exception
				}
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
				this.getPostList()		
			
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
			
				this.getPostList()
			},
			// swiper切换触发的方法
			handleChangeSwiper(e) {
				this.handleChangeTab(e.detail.current)
			}
		}
	}
</script>

<style>

</style>
