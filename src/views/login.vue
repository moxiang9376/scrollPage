<template>
	<!-- <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
	<div class="login page_box">

		<div class="cursor_pointer" @click="goHome()" style="color:black;font-size: 2.18rem;padding-left:5rem;padding-top: 2rem;">LOGO</div>

		<div style="display: flex;justify-content: space-between;">
			<div style="width:22rem;color:rgba(80, 80, 80, 1);display: inline-block;margin-left: 13rem;margin-top: 7rem;">
				<div>
					<span style="font-size: 3rem;">欢迎登录</span>
					<span style="font-size: 1.38rem;margin-left:0.5rem;">开启网赚生活</span>
				</div>
				<div style="font-size: 0.88rem;margin-top: 2rem;">
					攒粒问卷网”成立于2009年10月，经营地位于上海，
					是亚洲领先的在线调研面板提供商dataSpring, Inc.
					(日本)旗下的中国会员网站。旨在收集中国网民的
					商业意见，为政府和企业提供决策的依据。
				</div>
			</div>
			<div style="width:19rem;color:rgba(80, 80, 80, 1);display: inline-block;margin-top: 5rem;margin-right: 15rem;">
				<div style="font-size: 1.38rem;font-weight: bold;">
					快速登录
				</div>
				<div style="font-size: 0.88rem;margin-top: 2rem;">
					<input style="padding:1rem 1rem;border:1px solid #ccc;border-radius: 0.31rem;width:100%;" placeholder="请输入用户名" />
					<input style="padding:1rem 1rem;border:1px solid #ccc;border-radius: 0.31rem;width:100%;margin-top: 1rem;" placeholder="请输入密码" />
				</div>
				<div class="cursor_pointer" style="background-color:rgba(57, 151, 255, 1);width:100%;padding:1rem 0;color:white;text-align: center;margin-top: 2rem;border-radius: 0.31rem;">立即登录</div>
				<div style="display: flex;justify-content: space-between;align-items: center;margin-top: 1.5rem;">
					<div class="cursor_pointer" @click="goRegister()">注册账号</div>
					<div class="cursor_pointer">忘记密码</div>
				</div>
			</div>
		</div>

		<div class="bottom_box">
			<div style="text-align: center;">@版权信息</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: "login",
		// components: {
		//   HelloWorld
		// }
		data() {
			return {}
		},
		methods: {
			goRegister() {
				this.$router.push("/register")
			},
			goHome() {
				this.$router.push('/')
			}
		}
	};
</script>
<style lang="scss">
	.login {
		background-image: url(../../static/img/login_left.png);
		background-repeat: no-repeat;
		background-color: #f5f5f5;
	}

	.page_box {
		width: 100%;
		height: 100%;
	}

	.header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding-top: 2rem;
	}

	.bottom_box {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
