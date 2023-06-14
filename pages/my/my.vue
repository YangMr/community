<template>
	<view>

		<!-- 未登录的状态 -->
		<view class="p-2 flex align-center">
			<image class="user-avatar rounded-circle" src="@/static/default.jpg"></image>
			<view class="flex flex-column  flex-1 px-2">
				<text class="font-lg font-weight-bold text-dark">15910732068</text>
				<text class="font text-muted mt-1">总帖子4 今日发帖0</text>
			</view>
			<text class="iconfont icon-jinru"></text>
		</view>


		<view class="flex align-center  px-3 py-2">
			<block v-for="(item,index) in myData" :key="index">
				<view class="flex flex-1 flex-column align-center justify-center">
					<view class="font-lg font-weight-bold">{{item.num}}</view>
					<view class="font text-muted">{{item.name}}</view>
				</view>
			</block>
		</view>

		<view class="px-3 py-2">
			<image class="rounded user-banner" src="@/static/demo/banner1.jpg" mode="aspectFill"></image>
		</view>


		<uni-list :border="false">
			<uni-list-item :border="false" title="浏览历史" showArrow>
				<template v-slot:header>
					<text class="iconfont icon-liulan mr-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item :border="false"  title="社区认证"showArrow>
				<template v-slot:header>
					<text class="iconfont icon-huiyuanvip mr-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item  :border="false" title="审核帖子"showArrow>
				<template v-slot:header>
					<text class="iconfont icon-keyboard mr-2"></text>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	const demo = [{
			name: '帖子',
			num: 4
		},
		{
			name: '动态',
			num: 0
		},
		{
			name: '评论',
			num: 2
		},
		{
			name: '粉丝',
			num: 1
		}
	]
	export default {
		data() {
			return {
				myData: demo
			}
		},
		// 监听导航栏的点击事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url : '/pages/user-set/user-set'
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	.user-avatar {
		width: 100rpx;
		height: 100rpx;
	}

	.user-banner {
		width: 100%;
		height: 170rpx;
	}
	.uni-list:after{
		background-color: #fff;
	}
</style>