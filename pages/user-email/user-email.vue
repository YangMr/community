<template>
	<view>
		<input v-model="emailForm.email" class="uni-input" type="text" placeholder="请输入您要绑定的邮箱" />
		<input v-model="emailForm.password" class="uni-input" type="password" placeholder="请输入密码" />
		
		<view class="py-2 px-3">
			<button :loading="loading" @click="handleSubmit" :disabled="disabled" :class="disabled ? 'bg-main-disabled' : ''" class="rounded-circle " type="primary">绑定</button>
		</view>
	</view>
</template>

<script>
	import {changeEmail} from "@/api/login.js"
	export default {
		data() {
			return {
				loading : false,
				emailForm : {
					email : '',
					password : ''
				}
			}
		},
		computed: {
			disabled(){
				return this.emailForm.email === "" || this.emailForm.password === ""
			}
		},
		methods: {
			checkEmail(){
				const rule = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
				
				if(!rule.test(this.emailForm.email)){
					uni.showToast({
						title : '邮箱格式不正确',
						icon: 'none'
					})
					return false
				}
				return true
				
				
			},
			async handleSubmit(){
				if(!this.checkEmail()) return
				
				this.loading = true
				console.log(this.emailForm)
				
				try{
					const result = await changeEmail(this.emailForm)
					console.log("email=>", result)
					
					uni.navigateBack({
						delta:1
					})
					
					uni.showToast({
						title : '绑定邮箱成功',
						icon : 'none'
					})
					
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

