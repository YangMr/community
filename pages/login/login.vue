<template>
	<view>
		<view>
			<text @click="handleBack"
				class="iconfont icon-guanbi close  font-lg flex align-center justify-center"></text>
		</view>

		<view class="title">
			{{status ? '手机验证码登录' : '账号密码登录'}}

		</view>

		<view class="px-2">
			<!-- 账号密码登录表单 -->
			<template v-if="!status">
				<view class="mb-2">
					<input type="text" v-model="accountForm.username" placeholder="昵称/手机号/邮箱"
						class="border-bottom p-2" />
				</view>
				<view class="flex align-stretch mb-2">
					<input type="password" v-model="accountForm.password" placeholder="请输入密码"
						class="border-bottom p-2 flex-1" />
					<view style="width: 150rpx;" class="border-bottom flex text-muted align-center justify-end font">
						忘记密码?</view>
				</view>
			</template>

			<!-- 手机号/验证码登录表单 -->
			<template v-else>
				<view class="mb-2 flex align-stretch">
					<view class="font px-2 border-bottom flex align-center justify-center">+86</view>
					<input type="text" v-model="phoneForm.phone" placeholder="手机号" class="border-bottom p-2 flex-1" />
				</view>
				<view class="flex align-stretch mb-2">
					<input type="text" v-model="phoneForm.code" placeholder="请输入验证码" class="border-bottom p-2 flex-1" />
					<view style="width: 180rpx;"
						:class="codeTime > 0 ? 'bg-main-disabled' : 'bg-main'"
						class="bg-main text-white border-bottom flex font-sm align-center justify-center "
						@click="handleGetCode">{{codeTime > 0 ? codeTime + 's' : '获取验证码'}}</view>
				</view>
			</template>

		</view>

		<view class="px-2 py-3">
			<button :class="disabled ? 'bg-main-disabled' : 'bg-main'" :disabled="disabled"
				class="bg-main text-white rounded-circle" @click="handleSubmit">登录</button>
		</view>

		<view class="flex align-center justify-center pt-2 pb-4">
			<view class="text-primary font-sm" @click="handleChangeStatus">
				{{status ? '账号密码登录' : '验证码登陆'}}

			</view>
			<text class="text-muted mx-2">|</text>
			<view class="text-primary font-sm">登录遇到问题</view>
		</view>

		<view class="flex align-center justify-center">
			<view class="line"></view>
			<text class="font text-muted mx-2">社交账号登录</text>
			<view class="line"></view>
		</view>

		<comp-other-login></comp-other-login>

		<view class="text-muted font flex align-center justify-center">
			注册即代表同意 <text class="text-primary">《xxx社区协议》</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// status 未false则表示我们在账号密码登录界面
				status: false,
				// 账号密码登录的表单
				accountForm: {
					username: '',
					password: ''
				},
				// 手机号/验证码登录的表单
				phoneForm: {
					phone: '',
					code: ''
				},
				codeTime: 0,
				timer: null
			}
		},
		computed: {
			// 控制按钮是否未禁用状态
			disabled() {
				if ((this.accountForm.username === "" || this.accountForm.password === "") && (this.phoneForm.phone ===
						"" || this.phoneForm.code === "")) {
					return true
				}

				return false
			}
		},
		methods: {
			// 返回上一页
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 切换登录状态
			handleChangeStatus() {
				this.status = !this.status
				this.initForm()
			},
			// 初始化表单方法
			initForm() {
				this.accountForm.username = ""
				this.accountForm.password = ""
				this.phoneForm.phone = ""
				this.phoneForm.code = ""
			},
			// 登录提交
			handleSubmit() {
				if (!this.status) {
					console.log("accountForm", this.accountForm)
					// 调用账号密码登录接口
				} else {
					console.log("phoneForm", this.phoneForm)
					
					if(!this.validate()) return
					
					// 调用验证码登录接口
				}
			},
			// 手机号验证
			validate() {
				// 定义手机号的正则
				var re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
				// 判断输入的手机号是否符合手机号正则
				if (re.test(this.phoneForm.phone)) {
					// 符合返回return true;
					return true
				}
				uni.showToast({
					title: '手机号格式不正确',
					icon: 'none'
				})
				// 不符合正则返回false
				return false
			},
			// 获取验证码
			handleGetCode() {
				// 判断手机号不能为空
				if (this.phoneForm.phone === "") {
					uni.showToast({
						title: '手机号不能为空',
						icon: "none"
					})
					return
				}

				// 判断手机号是否符合
				if (!this.validate()) return

				// 如果定时器已经开启了,则不能在开启定时器

				if (this.codeTime > 0) {
					return
				}

				// 进行倒计时

				this.codeTime = 60
				this.timer = setInterval(() => {
					if (this.codeTime >= 1) {
						this.codeTime--
					} else {
						this.codeTime = 0
						clearInterval(this.timer)
					}
				}, 1000)


			}
		}
	}
</script>

<style scoped>
	.close {
		width: 100rpx;
		height: 100rpx;
	}

	.title {
		font-size: 55rpx;
		padding-top: 130rpx;
		padding-bottom: 70rpx;
		text-align: center;
	}

	.line {
		height: 1rpx;
		background-color: #ccc;
		width: 100rpx;
	}
	
</style>