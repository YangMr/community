<template>
	<view>
		<input v-model="emailForm.email" class="uni-input" type="text" placeholder="请输入您要绑定的邮箱" />
		<input v-model="emailForm.password" class="uni-input" type="password" placeholder="请输入密码" />
		
		<view class="py-2 px-3">
			<button @click="handleSubmit" :disabled="disabled" :class="disabled ? 'bg-main-disabled' : ''" class="rounded-circle " type="primary">绑定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			handleSubmit(){
				if(!this.checkEmail()) return
				console.log(this.emailForm)
			}
		}
	}
</script>

<style>

</style>

