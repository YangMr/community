<template>
	<view>
		<uni-list :border="false">
			<block v-for="(item,index) in list" :key="index">
				<uni-list-item @click.native="handleOpen(item)" :border="false" :rightText="item.text" :show-arrow="item.arrow"
					:title="item.title" note=""></uni-list-item>
			</block>
		</uni-list>

		<view class="py-2 px-3">
			<button :loading="loading" class="bg-main w-100 text-white rounded-circle" @click="handleLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {logout} from "@/api/login.js"
	export default {
		data() {
			return {
				loading : false,
				list: [{
						title: '账号与安全',
						arrow: true,
						type: 'arrow',
						url: '/pages/user-password/user-password'
					},
					{
							title: '邮箱绑定',
							arrow: true,
							type: 'arrow',
							url: '/pages/user-email/user-email'
						},
					{
						title: '资料编辑',
						arrow: true,
						type: 'arrow'
					},
					{
						title: '清除缓存',
						arrow: false,
						text: '4.00KB'
					},
					{
						title: '意见反馈',
						arrow: true,
						type: 'arrow'
					},
					{
						title: '关于社区',
						arrow: true,
						type: 'arrow',
						url: '/pages/about/about'
					}
				]
			}
		},
		methods: {
			handleOpen(item) {
				if(!item.url) return
			
				uni.navigateTo({
					url: item.url
				})

			},
			// 退出登录
			async handleLogout(){
				this.loading = true
				try{
					const result = await logout()
					console.log("result==>", result)
					if(result){
						this.$store.commit("userLogout")
						
						uni.switchTab({
							url : '/pages/my/my'
						})
					}
				}catch(e){
					//TODO handle the exception
				}finally{
					this.loading = false	
				}
			}
		}
	}
</script>

<style scoped>
	.uni-list:after {
		background-color: #fff;
	}
</style>