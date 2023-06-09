<template>
	<view class="p-2">
		<!-- 头像昵称|关注按钮 -->
		<view class="flex align-center justify-between">
			<!-- 头像|昵称 -->
			<view class="flex align-center">
				<!-- 头像 -->
				<image @click="handleOpenSpace" class="mr-2 rounded-100 avatar" lazy-load :src="item.user.userpic"></image>
				<!-- 昵称 -->
				<view>
					<view class="font nick-name">{{item.user.username}}</view>
					<text class="desc font-sm text-light-muted">{{item.create_time}}</text>
				</view>
			</view>
			<!-- 关注按钮 -->
			<view @click="handleIsFollow(index)" v-if="!item.isFollow"  hover-class="animate__swing" class="follow flex align-center justify-center font-sm bg-main animate__animated">
				关注
			</view>
		</view>

		<!-- 帖子标题 -->
		<view class="my-2 font" @click="handleOpenDetail">
			{{item.title}}
		</view>

		<!-- 帖子图片 -->
		<image @click="handleOpenDetail" v-if="item.titlepic" class="w-100 cover-image" :src="item.titlepic"></image>

		<!-- 图文按钮 -->
		<view class="mt-1 font flex align-center">
			<view  @click="handleDoSupport('support',index)" :class="item.support.type  === 'support' ? 'support-active' : ''" hover-class="animate__jello text-main" class="animate__animated flex-1 flex align-center justify-center">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.support_count > 0 ? item.support.support_count : '支持'}}</text>
			</view>
			<view @click="handleDoSupport('unsupport',index)" :class="item.support.type  === 'unsupport' ? 'support-active' : ''" hover-class="animate__jello text-main" class="animate__animated flex-1 flex align-center justify-center">
				
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count > 0 ? item.support.unsupport_count : '反对'}}</text>
			</view>
			<view @click="handleOpenDetail" hover-class="animate__jello text-main" class="animate__animated flex-1 flex align-center justify-center">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.comment_count > 0 ?item.comment_count : '评论' }}</text>
			</view>
			<view @click="handleOpenDetail" hover-class="animate__jello text-main" class="animate__animated flex-1 flex align-center justify-center">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_num > 0 ? item.share_num : '分享'}}</text>
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
			},
			index : {
				type : Number,
				default : 0
			}
		},
		data() {
			return {

			};
		},
		methods : {
			// 打开个人空间
			handleOpenSpace(){
				console.log('打开个人空间')
			},
			// 跳转到帖子详情页
			handleOpenDetail(){
				console.log("跳转到帖子详情页")
			},
			// 顶/踩操作
			handleDoSupport(type,index){
				this.$emit("support", {
					type,
					index
				})
			},
			// 关注功能
			handleIsFollow(index){
				this.$emit("follow",index)
			}
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
	}

	.follow {
		width: 90rpx;
		height: 50rpx;
		border-radius: 10rpx;
		color: #fff;
	}

	.cover-image {
		height: 350rpx;
		border-radius: 10rpx;
	}
	.support-active{
		color : #ff4a6a;
	}
</style>