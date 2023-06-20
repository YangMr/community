<template>
	<view>
		<view class="flex align-center justify-center pt-4 pb-3 flex-column">	
			<image style="width: 300rpx;height: 300rpx;"  class="rounded-circle" src="@/static/common/nothing.png" ></image>
			<text class="font text-muted mt-2">version 1.0.1</text>
		</view>	
		
		<uni-list :border="false">
			<uni-list-item  showArrow :border="false" title="新版本检测" ></uni-list-item>
			<uni-list-item  showArrow :border="false" title="社区用户协议" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.uni-list:after{
	background-color: #fff !important;
}
</style>
