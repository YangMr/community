<template>
	<view>
		<input v-model="changePassForm.oldpassword" class="uni-input" type="password" placeholder="输入旧密码" />
		<input v-model="changePassForm.newpassword" class="uni-input" type="password" placeholder="输入新密码" />
		<input v-model="changePassForm.renewpassword" class="uni-input" type="password" placeholder="输入确认密码" />
		
		<view class="py-2 px-3">
			<button hover-class="bg-main-disabled" :loading="loading" :disabled="disabled" :class="disabled ? 'bg-main-disabled' : ''" class="text-white rounded-circle" type="primary" @click="handleSubmit">设置</button>
		</view>
	</view>
</template>

<script>
	import {changePass} from "@/api/login.js"
	export default {
		data() {
			return {
				loading : false,
				changePassForm : {
					oldpassword : '',
					newpassword : '',
					renewpassword : ''
				}
			}
		},
		computed : {
			disabled(){
				return this.changePassForm.oldpassword === "" || this.changePassForm.newpassword === "" || this.changePassForm.renewpassword === ""
			}
		},
		methods: {
			checkPass(){
				// 输入框不能为空
				if(this.changePassForm.oldpassword === "" || this.changePassForm.newpassword === "" || this.changePassForm.renewpassword === ""){
					uni.showToast({
						title : '密码不能为空',
						icon : 'none'
					})
					return false
				}
				
				// 新密码与确认密码必须一致
				if(this.changePassForm.newpassword !== this.changePassForm.renewpassword){
					uni.showToast({
						title : '两次密码不一致',
						icon : 'none'
					})
					return false
				}
				return true
			},
			async handleSubmit(){
				this.loading = true
				if(!this.checkPass()) return
				
				try{
					const result = await changePass(this.changePassForm)
					if(result){
						this.$store.commit("userLogout")
						
						uni.showToast({
							title : '修改成功',
							icon : 'none'
						})
						
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

<style>

</style>
