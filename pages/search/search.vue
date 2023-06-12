<template>
	<view class="search-container">
		<template v-if="searchList.length === 0">
			<view class="px-2 py-2 font-md">搜索历史</view>
			<view class="flex flex-wrap">
				<view @click="clickSearchHistory(item)" class="border rounded font mx-2 my-1 px-2 py-1" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</view>
		</template>
		<template v-else>
			<block v-for="(item,index) in searchList" :key="index">
				<comp-post :item="item" :index="index"></comp-post>
			</block>
			<comp-load-more :loadMore="loadMore"></comp-load-more>
		</template>
		
		
	</view>
</template>

<script>
	import {search} from "@/api/search.js"
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
		},]
	export default {
		data() {
			return {
				searchText : '',
				list : ['uni-app第二季商城类实战开发','uni-app第三季仿微信实战开发','实战教程','系列教程'],
				searchList : [],
				type : '',
				page : 1,
				loadMore : '上拉加载更多'
			}
		},
		onLoad(e) {
			this.type = e.type
		},
		// 监听导航栏输入框输入的内容
		onNavigationBarSearchInputConfirmed(e) {
			this.searchText = e.text
		},
		// 监听是否点击了搜索按钮
		onNavigationBarButtonTap(e) {
			if(e.index ===0){
				this.handleSearchEvent()
			}
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.page = 1
			this.handleSearchEvent()
		},
		// 监听是否上拉加载到底部
		onReachBottom() {

			// 判断是否处于可加载状态（上拉加载更多）
			if (this.loadMore !== "上拉加载更多") return
			
			// 修改当前列表加载状态
			this.loadMore = '加载中...'
			
			this.page++
			this.handleSearchEvent()		
			
		},
		methods: {
			// 点击搜索历史触发的方法
			clickSearchHistory(item){
				this.searchText = item
				this.handleSearchEvent()
			},
			
			// 实现搜索功能方法
			async handleSearchEvent(){
				if(this.searchText === ""){
					return uni.showToast({
						title:"搜索内容不能为空",
						icon : 'none'
					})
				}
				
				// 关闭软键盘
				uni.hideKeyboard()
				
				// 开启loading
				uni.showLoading({
					title : '加载中...',
					mask : false
				})
				
				// // 发送请求
				try{
					const data = {keyword : this.searchText, page : this.page}
					const result = await search(this.type,data)
					console.log("result=>", result)
					const list = result.list.map(item=>{
						return this.$U.formatCommonList(item)
					})
					this.searchList = this.page === 1 ? list : [...this.searchList, ...list],
					this.loadMore = list.length < 10 ? "没有更多了" : '上拉加载更多'
					
				}catch(e){
					//TODO handle the exception
				}finally{
					// 关闭loading
					uni.hideLoading()
					// 结束下拉刷新
					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style>

</style>
