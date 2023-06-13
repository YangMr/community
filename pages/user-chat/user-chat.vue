<template>
	<view>
		<scroll-view scroll-y="true" :scroll-into-view="scrollInto" class="chat-list">
			<block v-for="(item,index) in list" :key="index">
				<view :id="'chat' + index">
					<comp-chat-list  :item="item" :index="index" :pretime="index > 0 ? list[index - 1].create_time : 0"></comp-chat-list>
				</view>
			</block>
		</scroll-view>

		<!-- 底部操作条 -->
		<view class="chat-msg fixed-bottom flex align-center border-top bg-white ">
			<input v-model="content"  type="text" class="flex-1 chat-input rounded ml-2" placeholder="文明发言" />
			<view @click="submit" class="chat-send iconfont icon-fabu font-lg flex align-center justify-center"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollInto : 'chat6',
				content : "",
				list: [
					{
						user_id:2,
						avatar:"/static/default.jpg",
						username:"昵称",
						data:"你好啊",
						type:"text", 
						create_time:1570783530
					},
					{
						user_id:2,
						avatar:"/static/default.jpg",
						username:"昵称",
						data:"你好啊",
						type:"text", 
						create_time:1570783530
					},
					{
						user_id:2,
						avatar:"/static/default.jpg",
						username:"昵称",
						data:"你好啊",
						type:"text", 
						create_time:1570783530
					},{
					user_id:2,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:2,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:2,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:2,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:2,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"你好啊",
					type:"text", 
					create_time:1570783530
				},{
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data:"我想好好学习",
					type:"text", 
					create_time:1570783530
				}]
			}
		},
		onLoad() {
			this.setNavTitie()
			this.pageToBottom()
		},
		methods: {
			// 动态修改导航栏标题
			setNavTitie() {
				uni.setNavigationBarTitle({
					title: "积云编程"
				})
			},
			// 发送消息
			submit(){
				if(this.content === ""){
					return uni.showToast({
						title: '消息不能为空',
						icon: 'none'
					});
				}
				
				const obj = {
					user_id:1,
					avatar:"/static/default.jpg",
					username:"昵称",
					data: this.content,
					type:"text", 
					create_time:(new Date()).getTime()
				}
				
				this.list.push(obj)
				
				// 清空输入框
				this.content = ""
				
				// 滚动到底部
				this.pageToBottom()
			},
			// 滚动到底部
			pageToBottom(){
				const lastIndex = this.list.length - 1
				console.log("len",this.list.length - 1)
				console.log("last", lastIndex)
				if(lastIndex < 0) return
				this.$nextTick(()=>{
					this.scrollInto = 'chat' + lastIndex
				})
				
			}
		}
	}
</script>

<style scoped>
	.chat-list{
		position: absolute;
		left :0; 
		right :0; 
		bottom:100rpx; 
		top : 0;
	}
.chat-msg{
	height: 100rpx;
}
.chat-input{
	padding : 10rpx;
	background-color: #eee;
}
.chat-send{
	width: 100rpx;
}
</style>