<template>
	<view class="px-5 py-5 flex align-center">
		   <block v-for="(item,index) in authList" :key="index">
			   <view class="flex-1 flex align-center justify-center mr-5">
			   	 <view :class="item.icon + ' ' + item.bgColor" class="iconfont font-lg text-white  rounded-circle icon flex align-center justify-center"></view>
			   </view>
		   </block>
			
			<!-- <view class="flex-1 flex  align-center justify-center">
				<view class="iconfont font-lg text-white bg-primary rounded-circle icon-QQ icon flex align-center justify-center"></view>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<view class="iconfont icon-QQ icon flex align-center justify-center"></view>
			</view> -->
		</view>
</template>

<script>
	export default {
		name:"comp-other-login",
		data() {
			return {
				authList : []
			};
		},
		mounted(){
			this.getAuthList()
		},
		methods : {
			// 获取第三方登录列表
			getAuthList(){
				uni.getProvider({
					service: "oauth",
					success : (res)=>{
						console.log("Res=>", res)
						this.authList = res.provider.map(value=>{
							let providerName = "" // 登录名称
							let icon  = "" // 图标名称
							let bgColor  = "" // 图标背景颜色
							switch(value){
								case 'weixin' :
									providerName = "微信登录"
									icon = "icon-weixin"
									bgColor = "bg-success"
									break;
								case 'qq' :
									providerName = "QQ登录"
									icon = "icon-QQ"
									bgColor = "bg-primary"
									break;
								case 'sinaweibo' :
									providerName = "新浪微信"
									icon = "icon-xinlangweibo"
									bgColor = "bg-warning"
									break;
							}
							
							return {
								name : providerName,
								id : value,
								icon : icon,
								bgColor : bgColor
							}
						})
					},
					fail : (error)=>{
						console.log('获取登录通道失败', error);
					}
				})
			}
		}
	}
</script>

<style scoped>
.icon{
		width: 100rpx;
		height: 100rpx;
	}
</style>