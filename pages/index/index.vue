<template>
	<view>
		<!-- tab切换 -->
		<scroll-view scroll-with-animation scroll-x :scroll-into-view="scrollInto" class="tabbar scroll-row">
			<view @click="handleChangeTab(index)" :id="'tab' + index"
				:class="index == activeTab ? 'text-main font-lg font-weight-bold' : ''"
				class=" px-3 py-2 font-md scroll-row-item" v-for="(item,index) in tabBars" :key="index">
				{{item.classname}}
			</view>
		</scroll-view>

		<swiper @change="handleChangeSwiper" :current="currentIndex" :style="{height : scrollH + 'px'}" :duration="150">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<view class="swiper-item">
					<scroll-view scroll-y="true" :style="{height : scrollH + 'px'}">
						<block v-for="(item,index) in list" :key="index">
							<!-- 帖子列表 -->
							<comp-post :item="item" :index="index" @support="handleSupport"
								@follow="handleIsFollow"></comp-post>
							<!-- 分割线 -->
							<comp-divider></comp-divider>
						</block>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				id : 0,
				currentIndex: 0,
				scrollH: 0,
				scrollInto: 0,
				activeTab: 0,
				// tabbar数据
				tabBars: [],
				// 帖子列表数据
				list: []
			}
		},
		onLoad() {
			this.getHeight()
			this.getTabBar()
			
		},
		methods: {
			// 获取tabbar数据
			getTabBar(){
				uni.request({
					url : 'https://sqapi.2yuecloud.com/api/v1/postclass' ,
					method: "GET",
					success : res => {
						this.tabBars = res.data.data.list
						this.id = this.tabBars[0].id
						this.getPostList()
					}
				})
			},
			// 获取帖子列表数据
			getPostList(){
				uni.request({
					url : 'https://sqapi.2yuecloud.com/api/v1/postclass/'+ this.id +'/post/1',
					method : 'GET',
					success : res=> {
						console.log("res=>", res)
						this.list = res.data.data.list
					}
				})
			},
			// 获取可使用窗口高度
			getHeight() {
				uni.getSystemInfo({
					success: res => {
						console.log("res=>", res)
						this.scrollH = res.windowHeight - uni.upx2px(100)
					}
				})
			},
			// tab切换
			handleChangeTab(index) {
				this.activeTab = index
				this.scrollInto = 'tab' + index
				this.currentIndex = index
				this.id = this.tabBars[index].id
				this.getPostList()
			},
			// swiper切换触发的方法
			handleChangeSwiper(e) {
				this.currentIndex = e.detail.current
				this.handleChangeTab(this.currentIndex)
				this.id = this.tabBars[index].id
				this.getPostList()
			},
			// 关注操作
			handleIsFollow(index) {
				this.list[index].isFollow = !this.list[index].isFollow
				uni.showToast({
					title: '关注成功',
					icon: 'none'
				})
			},
			// 顶/踩操作
			handleSupport(e) {
				// 获取当前操作的数据(点击按钮对应的数据)
				const item = this.list[e.index]
				const msg = e.type === 'support' ? '支持' : '反对'
				// 当前所点击的帖子是否被顶/踩过, 如果没有被顶/踩,我们在第一次点击的时候, 就应该让对应的类型数字++
				if (item.support.type === "") {
					item.support[e.type + '_count']++
				} else if (item.support.type === 'support' && e.type === 'unsupport') {
					// 顶 -1
					item.support.support_count--
					// 踩 +1
					item.support.unsupport_count++
				} else if (item.support.type === 'unsupport' && e.type === 'support') {
					// 顶 +1
					item.support.support_count++
					// 踩 -1
					item.support.unsupport_count--
				}
				item.support.type = e.type
				uni.showToast({
					title: msg,
					icon: 'none'
				})
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		height: 100rpx;
	}
</style>