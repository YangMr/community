<template>
	<view class="p-2">
		<!-- 头像昵称|关注按钮 -->
		<view class="flex align-center justify-between">
			<!-- 头像|昵称 -->
			<view class="flex align-center">
				<!-- 头像 -->
				<image class="mr-2 rounded-100 avatar" lazy-load :src="item.userpic"></image>
				<!-- 昵称 -->
				<view>
					<view class="font nick-name">{{item.username}}</view>
					<text class="desc font-sm">{{item.newstime}}</text>
				</view>
			</view>
			<!-- 关注按钮 -->
			<view class="follow flex align-center justify-center font-sm">
				关注
			</view>
		</view>

		<!-- 帖子标题 -->
		<view class="my-2 font">
			{{item.title}}
		</view>

		<!-- 帖子图片 -->
		<image class="w-100 cover-image" :src="item.titlepic"></image>

		<!-- 图文按钮 -->
		<view class="mt-1 font flex align-center">
			<view class="flex-1 flex align-center justify-center">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>支持</text>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<text class="iconfont icon-cai mr-2"></text>
				<text>反对</text>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>评论</text>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>分享</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "comp-post",
		props : {
			item : {
				type : Object,
				default : ()=> {}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.avatar {
		width: 65rpx;
		height: 65rpx;
	}

	.nick-name {
		line-height: 1.5;
	}

	.desc {
		line-height: 1.5;
		color: #9d9589;
	}

	.follow {
		width: 90rpx;
		height: 50rpx;
		background-color: #ff4a6a;
		border-radius: 10rpx;
		color: #fff;
	}

	.cover-image {
		height: 350rpx;
		border-radius: 10rpx;
	}
</style>