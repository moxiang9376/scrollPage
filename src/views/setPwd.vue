<template>
	<!-- <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
	<div class="login page_box">

		<div style="color:black;font-size: 2.18rem;padding-left:5rem;padding-top: 2rem;">LOGO</div>

		<div style="display: flex;justify-content: space-between;">
			<div style="width:22rem;color:rgba(80, 80, 80, 1);display: inline-block;margin-left: 13rem;margin-top: 7rem;">
				<div>
					<span style="font-size: 3rem;">欢迎登录</span>
					<span style="font-size: 1.38rem;margin-left:0.5rem;">开启网赚生活</span>
				</div>
				<div style="font-size: 0.88rem;margin-top: 2rem;">
					“讯调查”秉承以服务会员，让会员无需再各个问卷调查网
					站来回切换，化繁为简，提供更多的优质问卷调查网站和增
					值服务作为建设宗旨，专注于有酬问卷调查聚合类平台。
					参与、奖励、分享、收货，让讯调查会员在便捷的同事获得
					价值。
				</div>
			</div>
			<div style="width:19rem;color:rgba(80, 80, 80, 1);display: inline-block;margin-top: 5rem;margin-right: 15rem;">
				<div style="display: inline-block; background-color:rgba(190, 190, 190, 1);border-radius: 10em;">
						<img style="width:1.5rem;height:1.5rem" src="../../static/img/goback.svg"/>
				</div>
				<div style="font-size: 1.38rem;font-weight: bold;margin-top: 2rem;">
					设置密码
				</div>
				<div style="font-size: 0.88rem;margin-top: 2rem;">
					<input style="padding:1rem 1rem;border:1px solid #ccc;border-radius: 0.31rem;width:100%;" placeholder="设置密码(必填项)" />
					<input style="padding:1rem 1rem;border:1px solid #ccc;border-radius: 0.31rem;width:100%;margin-top: 1rem;" placeholder="确认密码(必填项)" />
					<input style="padding:1rem 1rem;border:1px solid #ccc;border-radius: 0.31rem;width:100%;margin-top: 1rem;" placeholder="收款支付宝(必填项)" />
				</div>
				<div style="margin-top: 1rem;">
					我已阅读并同意遵守《XXX平台协议》
				</div>
				<div style="background-color:rgba(57, 151, 255, 1);width:100%;padding:1rem 0;color:white;text-align: center;margin-top: 2rem;border-radius: 0.31rem;">立即注册</div>
				<div style="display: flex;justify-content:center;align-items: center;margin-top: 1.5rem;">
					<div>已有账号</div>
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
