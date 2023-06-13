<template>
	<view @click="handleOpenChat" hover-class="bg-light" class="flex align-center p-2 border-bottom border-light-secondary">
		<image class="msg-avatar rounded-circle mr-2" :src="item.avatar"></image>
		<view class="flex flex-column flex-1">
			<view class="flex justify-between align-center">
				<text class="font-md">{{item.username}}</text>
				<text class="font text-secondary">{{item.update_time|formatTime}}</text>
			</view>
			<view class="flex justify-between align-center">
				<text class="text-secondary msg-data font text-ellipsis">{{item.data}}</text>
				<uni-badge :text="item.noread"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from "@/utils/time.js"
	export default {
		name: "comp-msg-list",
		props: {
			item: {
				type: Object,
				default: () => {}
			},
			index: Number
		},
		data() {
			return {

			};
		},
		filters : {
			formatTime(value){
				return $T.gettime(value)
			}
		},
		methods : {
			handleOpenChat(){
				uni.navigateTo({
					url : '/pages/user-chat/user-chat'
				})
			}
		}
	}
</script>

<style scoped>
	.msg-avatar {
		width: 80rpx;
		height: 80rpx;
	}

	.msg-data {
		max-width: 500rpx;
	}
</style>