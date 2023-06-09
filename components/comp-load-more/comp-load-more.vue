<template>
	<view class="flex justify-center align-center py-3">
		<text class="font text-light-muted">{{loadMore}}</text>
	</view>
</template>

<script>
	export default {
		name:"comp-load-more",
		props : {
			loadMore : {
				type : String,
				default : ''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>