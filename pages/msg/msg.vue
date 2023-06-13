<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item,index) in list" :key="index">
				<comp-msg-list :item="item" :index="index"></comp-msg-list>
			</block>
		</template>
		<template v-else>
			<comp-no-thing></comp-no-thing>
		</template>

		<uni-popup ref="popup" type="top">
			<view @click="popupEvent('friend')" hover-class="bg-light" class="bg-white flex justify-center align-center font-md border-bottom py-2">
				<text class="iconfont icon-sousuo mr-2"></text>
				<text>添加好友</text>
			</view>
			<view @click="popupEvent('clear')" hover-class="bg-light" class="bg-white flex justify-center align-center font-md border-bottom py-2">
				<text class="iconfont icon-shanchu mr-2"></text>
				<text>清除列表</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo = [{
		avatar: "/static/default.jpg",
		username: "积云编程",
		update_time: 1570718427,
		data: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
		noread: 20
	}, {
		avatar: "/static/default.jpg",
		username: "积云编程",
		update_time: 1570718427,
		data: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
		noread: 20
	}, {
		avatar: "/static/default.jpg",
		username: "积云编程",
		update_time: 1570718427,
		data: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
		noread: 20
	}, {
		avatar: "/static/default.jpg",
		username: "积云编程",
		update_time: 1570718427,
		data: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
		noread: 20
	}]
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.list = demo
		},
		// 监听是否点击了导航栏
		onNavigationBarButtonTap(e) {
			// 点击了导航栏的右侧按钮
			if(e.index === 1){
				// 打开下拉弹出层
				this.$refs.popup.open()
				return
			}
			// 点击了导航栏的左侧按钮
			if(e.index === 0){
				
			}
		},
		// 监听是否进行下拉刷新
		onPullDownRefresh() {
			this.handleRefresh()
		},
		methods: {
			// 下拉刷新方法
			handleRefresh() {
				setTimeout(() => {
					this.list = demo

					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 1000)
			},
			// 添加好友/清除列表方法
			popupEvent(e){
				switch(e){
					case "friend" :
						console.log("添加好友")
						break;
					case "clear" :
						console.log("清除列表")
						break;	
				}
				// 关闭弹出层
				this.$refs.popup.close()
			}
		}
	}
</script>

<style scoped>

</style>