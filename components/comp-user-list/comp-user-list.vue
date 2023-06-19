<template>
	<view class="flex m-2 py-2 align-center border-bottom border-light-secondary">
		<image :src="item.avatar" class="avatar rounded-circle mr-2"></image>
	
		<view class="flex-column flex-1">
			<text class="font-md text-dark">{{item.username}}</text>
	
			<view class="bg-main mt-1 rounded-circle flex align-center justify-center" style="min-width: 100rpx !important; width: 100rpx;">
				<text :class="item.sex === 1 ? 'icon-nv' : 'icon-nan'"  class="iconfont text-white font-sm"
					style="margin-right: 5rpx;"></text>
					<text class="ml-1 font-sm text-white " v-if="item.sex !== 0">{{item.age}}</text>
					<text class="ml-1 font-sm text-white " v-else>未知</text>
			</view>
		</view>
		
		<view :class="item.isFollow ? 'text-light-muted' : 'text-main'" class="uni-icon uni-icon-checkbox-filled text-light-muted"></view>
	
	</view>
</template>

<script>
	export default {
		name:"comp-user-list",
		props : {
			item : Object,
			index : Number
		},

		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.avatar {
		width: 100rpx;
		height: 100rpx;
	}
</style>