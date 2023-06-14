<template>
	<view>
		<input v-model="changePassForm.oldPassword" class="uni-input" type="password" placeholder="输入旧密码" />
		<input v-model="changePassForm.newPassword" class="uni-input" type="password" placeholder="输入新密码" />
		<input v-model="changePassForm.reNewPassword" class="uni-input" type="password" placeholder="输入确认密码" />
		
		<view class="py-2 px-3">
			<button :disabled="disabled" :class="disabled ? 'bg-main-disabled' : ''" class="text-white rounded-circle" type="primary" @click="handleSubmit">设置</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changePassForm : {
					oldPassword : '',
					newPassword : '',
					reNewPassword : ''
				}
			}
		},
		computed : {
			disabled(){
				return this.changePassForm.oldPassword === "" || this.changePassForm.newPassword === "" || this.changePassForm.reNewPassword === ""
			}
		},
		methods: {
			checkPass(){
				// 输入框不能为空
				if(this.changePassForm.oldPassword === "" || this.changePassForm.newPassword === "" || this.changePassForm.reNewPassword === ""){
					uni.showToast({
						title : '密码不能为空',
						icon : 'none'
					})
					return false
				}
				
				// 新密码与确认密码必须一致
				if(this.changePassForm.newPassword !== this.changePassForm.reNewPassword){
					uni.showToast({
						title : '两次密码不一致',
						icon : 'none'
					})
					return false
				}
				return true
			},
			handleSubmit(){
				if(!this.checkPass()) return
				console.log(this.changePassForm)
			}
		}
	}
</script>

<style>

</style>
