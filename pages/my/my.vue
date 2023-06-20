<template>
	<view>

		<!-- 未登录的状态 -->
		<template v-if="!status">
			<view class="flex align-center justify-center py-2 font">
				登录社区，体验更多功能
			</view>
			<comp-other-login></comp-other-login>
			<view @click="handleOpenLogin" class="flex align-center justify-center py-2 font text-secondary">
				账号/邮箱/手机登录 <text class="ml-1 iconfont icon-jinru"></text>
			</view>
		</template>


		<!-- 已登录的状态 -->
		<template v-else>
			<view class="p-2 flex align-center">
				
				<image class="user-avatar rounded-circle" src="@/static/default.jpg"></image>
				<view class="flex flex-column  flex-1 px-2">
					<text class="font-lg font-weight-bold text-dark">{{user.username}}</text>
					<text class="font text-muted mt-1">总帖子{{userInfo.post_count}} 今日发帖{{userInfo.today_posts_count}}</text>
				</view>
				<text class="iconfont icon-jinru"></text>
			</view>
		</template>
		
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
			<uni-list-item :border="false" title="社区认证" showArrow>
				<template v-slot:header>
					<text class="iconfont icon-huiyuanvip mr-2"></text>
				</template>
			</uni-list-item>
			<uni-list-item :border="false" title="审核帖子" showArrow>
				<template v-slot:header>
					<text class="iconfont icon-keyboard mr-2"></text>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {
		getInfo
	} from "@/api/login.js"

	const demo =  [{
						name: '帖子',
						num: 0
					},
					{
						name: '动态',
						num: 0
					},
					{
						name: '评论',
						num: 0
					},
					{
						name: '粉丝',
						num: 0
					}
				]
				
			

	export default {
		data() {
			return {
				myData: demo,
				userInfo: {}
			}
		},
		// 监听导航栏的点击事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/user-set/user-set'
			})
		},
		computed: {
			status() {
				return this.$store.state.loginStatus
			},
			user() {
				return this.$store.state.user || {}
			}
		},
		onLoad() {

			
		},
		onShow() {
			if (this.$store.state.loginStatus) {
				this.handleGetInfo()
			}
		},
		methods: {
			// 跳转到登录页
			handleOpenLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			async handleGetInfo() {
				try {
					const user_id = this.user.userinfo.user_id
					const result = await getInfo(user_id)
					if (result) {
						this.userInfo = result
						demo[0].num = this.userInfo.post_count
						demo[1].num = this.userInfo.friend_count
						demo[2].num = this.userInfo.comments_count
						demo[3].num = this.userInfo.withfen_count
					}
				} catch (e) {
					//TODO handle the exception
				}
			}
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

	.uni-list:after {
		background-color: #fff;
	}
</style>