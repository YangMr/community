<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar statusBar  :border="false" left-icon="left"  >
			<view class="w-100 flex align-center justify-center">
				<text>所有人可见</text>
				<text class="iconfont icon-shezhi font-md ml-1"></text>
			</view>
		</uni-nav-bar>
		
		<!-- 文本域 -->
		<textarea v-model="content"  placeholder="说一句话吧"  class="px-2"/>
		
		<!-- 请选择分类 -->
		<view style="width: 300rpx;" class=" mx-2 my-3  text-main border-main py-2 flex align-center justify-center border rounded-circle">
			<text class="iconfont icon-huati"></text>
			<text class="ml-1">请选择分类</text>
		</view>
		
		<!-- 请选择话题 -->
		<view style="width:300rpx;" class="m-2 text-main border-main py-2 flex align-center justify-center border rounded-circle">
			<text class="iconfont icon-huati"></text>
			<text class="ml-1">请选择话题</text>
		</view>
		
		<!-- 图片上传 -->
		<view class="px-2">
			<uni-file-picker ref="files" @select="select"   v-model="imageValue" title="点击可预览选好的图片" limit="9" file-mediatype="image"></uni-file-picker>
		</view>
		
		
		<!-- 底部操作栏 -->
		<view class="flex align-center fixed-bottom bg-white" style="height:85rpx;">
			
			<view class="iconfont icon-caidan footer-btn animate__animated" hover-class="animate__jello"></view>
			<view class="iconfont icon-huati footer-btn  animate__animated" hover-class="animate__jello"></view>
			<view class="iconfont icon-tupian footer-btn  animate__animated" hover-class="animate__jello"></view>
			
			<view @click="handleSubmit"  hover-class="animate__jello" class="rounded bg-success text-white flex align-center font justify-center ml-auto mr-2 animate__animated"  style="width: 140rpx;height: 60rpx;">发送</view>
		</view>
		
	</view>
</template>

<script>
	import {publicPost, uploadImage} from "@/api/public.js"
	export default {
		data() {
			return {
				content : '',
				imageValue:[],
				imglist : []
			}
		},
		methods: {
			// 发布按钮
			async handleSubmit(){
				try{
					const data = {
						text : this.content,
						 isopen:1,
						imglist : JSON.stringify(this.imglist)
					}
					const result = await publicPost(data)
					console.log("result====>", result)
				}catch(e){
					//TODO handle the exception
				}
			},
			select(e){
				// 1. 点击上传文件图标或者按钮
				// 2. 拉起选择文件的弹窗
				// 3. 选择要上文的文件
				// 4. 获取到要上传的文件信息
				// 5. 根据需求对文件进行判断 文件大小 文件后缀 ...
			    // 6. 调用上传文件接口,对文件进行上传	 
				console.log("select",e)
				
				try{
					e.tempFiles.forEach(async item=>{
						const result = await uploadImage(item.path)
						console.log("upload", JSON.parse(result))
						this.imglist.push({
							id : JSON.parse(result).data.list[0].id
						})
						
						console.log('list',this.imglist)
					})
					
					
					// e.tempFiles.forEach(async item=>{
						// const result = await uploadImage(item.)
						// console.log("upload", result)
					// })
					// const data = {imglist : e.tempFiles}
					
				}catch(e){
					console.log("eee",e)
					//TODO handle the exception
				}
				// this.$refs.files.upload()
			},
			progress(e){
				console.log("progress",e)
			},
			// 上传成功
			async success(e){
				
				// input tyope -: "value",  
				// 拿到选择的图片
				// 进行上传
				
				console.log("up", e)
				console.log("vakue", this.imageValue)
				// this.imageValue.forEach(item=>{
				// 	e.tempFilePaths = [item.path]
				// })
				console.log("up111", e)
				try{
					this.imageValue.forEach(async item=>{
						const result = await uploadImage(item.path)
						console.log("upload", JSON.parse(result))
					})
					// e.tempFiles.forEach(async item=>{
						// const result = await uploadImage(item.)
						// console.log("upload", result)
					// })
					// const data = {imglist : e.tempFiles}
					
				}catch(e){
					console.log("eee",e)
					//TODO handle the exception
				}
				
			},
			fail(e){
				console.log("fail")
			}
		}
	}
</script>

<style scoped>
.footer-btn {
	width: 85rpx;
	height: 85rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50rpx;
}
</style>
