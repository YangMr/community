<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar statusBar  :border="false" left-icon="left"  >
			<view class="w-100 flex align-center justify-center">
				<text>所有人可见</text>
				<text class="iconfont icon-shezhi font-md ml-1"></text>
			</view>
		</uni-nav-bar>
		
		<!-- 文本域 -->
		<textarea v-model="content"  placeholder="说一句话吧"  class="px-2"/>
		
		<!-- 底部操作栏 -->
		<view class="flex align-center fixed-bottom bg-white" style="height:85rpx;">
			
			<view class="iconfont icon-caidan footer-btn animate__animated" hover-class="animate__jello"></view>
			<view class="iconfont icon-huati footer-btn  animate__animated" hover-class="animate__jello"></view>
			<view class="iconfont icon-tupian footer-btn  animate__animated" hover-class="animate__jello"></view>
			
			<view  hover-class="animate__jello" class="rounded bg-success text-white flex align-center font justify-center ml-auto mr-2 animate__animated"  style="width: 140rpx;height: 60rpx;">发送</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content : ''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.footer-btn {
	width: 85rpx;
	height: 85rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50rpx;
}
</style>
