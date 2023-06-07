<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* 引入官方样式库 */
	@import url("@/common/uni.css");
	
	/* 引入字体图标库 */
	@import url("@/common/iconfont.css");
	
	/* 引入动画库 */
	@import url("@/common/animate.min.css");
	
	/* 引入公共样式库 */
	@import url("@/common/free.css");
</style>
