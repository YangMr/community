<template>
	<view>
		<view v-if="shortTime" class="py-2 flex align-center justify-center font-sm text-light-muted">
			{{shortTime}}
		</view>
		
		<view class="flex align-center px-2 my-2" :style="isSelf ? 'flex-direction: row-reverse;' : ''">
			<image class="chat-avatar rounded-circle mx-2" :src="item.avatar" ></image>
			<view class="chat-content mx-2 rounded p-2" style="max-width: 400rpx;">
				{{item.data}}
				<view :class="isSelf ? 'bubble-right' : 'bubble-left'" ></view>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from "@/utils/time.js"
	
	// 模拟当前登录用户的userid
	const userId = 1
	
	export default {
		name:"comp-chat-list",
		props : {
			item : Object,
			index: Number,
			pretime : [Number,String]
		},
		data() {
			return {
				
			};
		},
		computed : {
			// 是否是登录用户本人
			isSelf(){
				return userId === this.item.user_id
			},
			// 转化时间
			shortTime(){
				return $T.getChatTime(this.item.create_time, this.pretime)
			}
		}
	}
</script>

<style scoped>


.chat-avatar{
	width: 100rpx;
	height: 100rpx;
}
.chat-content{
	position: relative;
	background-color: #eee;
}
.bubble-left{
	content: "";
	width: 0;
	height: 0;
	border: 20rpx solid;
	border-color: transparent #eee transparent transparent;
	position: absolute;
	left : -38rpx;
	top : 13rpx;
}
.bubble-right{
	content: "";
	width: 0;
	height: 0;
	border: 20rpx solid;
	border-color: transparent transparent  transparent #eee;
	position: absolute;
	right : -38rpx;
	top : 13rpx;
}
</style>