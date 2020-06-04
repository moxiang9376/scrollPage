<template>
	<!-- <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
	<div class="home page_box">

		<div class="header">
			<div class="cursor_pointer" @click="goHome()" style="color:white;font-size: 2.18rem;padding-left:5rem;">logo</div>
			<div style="padding-right:5rem;">
				<div style="display: inline-block;vertical-align: middle;font-size: 1rem;color:white;margin-right: 2rem;">团战申请</div>
				<div @click="goLogin()" class="cursor_pointer" style="border:1px solid white;padding:0.15rem 1rem;border-radius: 0.31rem; display: inline-block;vertical-align: middle;color:white;font-size:1rem;text-shadow: rgba(0, 0, 0, 0.5) 0rem 0.06rem 0.06rem;">登录/注册</div>
			</div>
		</div>


		<swiper ref="mySwiper" class="page_box" :options="swiperOptions">



			<swiper-slide class="page_box">
				<div class="page1">
					<div class="page1_back">
						<div class="page1_content">
							<div style="margin-bottom: 1rem;font-size: 2.5rem;">欢迎登录，开启网赚生活</div>
							<div>文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g文字说明g</div>
							<div style="display:flex;align-items: center;justify-content: space-between;font-size: 1rem;margin-top: 1rem;">
								<div @click="goLogin()" class="cursor_pointer" style="background-color:rgba(57, 151, 255, 1);padding:1rem 4rem;border-radius: 0.31rem;">开启网赚</div>
								<div class="cursor_pointer" style="background-color:rgba(0,0,0,0);border:1px solid white;padding:1rem 4rem;border-radius: 0.31rem;">联系我们</div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>

			<swiper-slide class="page_box">
				<div class="page2">
					<div class="page2_back">
						<div class="page2_content">
							<div style="margin-bottom: 1rem;font-size: 2.5rem;">平台七大优势</div>
							<div>隶属于亚洲调查样本库，拥有180多万会员</div>
							<div>
								<div v-for="(item,index) in page2tab" :key="index" style="display: inline-block;margin-right: 3.63rem;margin-top: 2rem;">
									<img style="width: 1.5rem;height:1.5rem" src="../../static/img/page2Tab.svg" />
									{{item.text}}
								</div>
							</div>

						</div>
					</div>
				</div>
			</swiper-slide>

			<swiper-slide class="page_box">
				<div class="page3">
					<div class="page3_back">
						<div class="page3_content">
							<div>
								<input placeholder="留下你的联系方式" style="display: inline-block; padding:1rem 0;padding-left: 1rem;width:70%;font-size: 1rem;" />
								<div class="cursor_pointer" style="display: inline-block;width:30%;padding:1rem 0;border-radius: 0.31rem;text-align: center;color:white;background-color: rgba(57, 151, 255, 1);padding-left: -1rem;">怎样赚积分？</div>
							</div>
							<div style="display: flex;justify-content: space-between;align-items: center;">
								<div>免费注册会员</div>
								<div>回答问卷赚积分</div>
								<div>兑换奖品</div>
							</div>

						</div>
					</div>
				</div>
			</swiper-slide>

			<swiper-slide class="page_box">
				<div class="page4">
					<div class="page4_back">
						<div class="page4_content">
							<div style="font-size: 2.49rem;color:white;text-align: center;">看看他们都说了些什么？</div>
							<div style="display: flex;justify-content: space-between;align-content: center;margin-top: 4rem;">
								<div style="text-align: center;">
									<img src="../../static/img/head1.jpg" style="width:4.87rem;height:4.87rem;border-radius: 10em;border:2px solid white;" />
									<div style="font-size: 1.2rem;margin:1rem 0;">用户名称</div>
									<div style="width:6rem;">这是一个放心的网站，推荐大家使用，保证真实可靠！</div>
								</div>
								<div style="text-align: center;">
									<img src="../../static/img/head1.jpg" style="width:4.87rem;height:4.87rem;border-radius: 10em;border:2px solid white;" />
									<div style="font-size: 1.2rem;margin:1rem 0;">用户名称</div>
									<div style="width:6rem;">这是一个放心的网站，推荐大家使用，保证真实可靠！</div>
								</div>
								<div style="text-align: center;">
									<img src="../../static/img/head1.jpg" style="width:4.87rem;height:4.87rem;border-radius: 10em;border:2px solid white;" />
									<div style="font-size: 1.2rem;margin:1rem 0;">用户名称</div>
									<div style="width:6rem;">这是一个放心的网站，推荐大家使用，保证真实可靠！</div>
								</div>
								<div style="text-align: center;">
									<img src="../../static/img/head1.jpg" style="width:4.87rem;height:4.87rem;border-radius: 10em;border:2px solid white;" />
									<div style="font-size: 1.2rem;margin:1rem 0;">用户名称</div>
									<div style="width:6rem;">这是一个放心的网站，推荐大家使用，保证真实可靠！</div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</swiper-slide>

			<swiper-slide class="page_box">
				<div class="page5">
					<div class="page5_back">
						<div class="page5_content">
							<div style="text-align: center;">一分钟注册，您就可以回答问卷，做任务，开始赚钱吧~</div>
							<div style="width:30rem;background-color: white;border-radius: 0.31rem;margin:0 auto;padding:2rem;margin-top: 1rem;">
								<h3 style="color:black;font-weight: bold;">赶快加入我们吧~</h3>
								<div style="display: flex;justify-content: space-between;align-items: center;width:100%;margin-top: 1.8rem;">
									<input class="ipt_style" placeholder="邮箱或手机号码" />
									<input class="ipt_style" placeholder="密码" />
								</div>
								<div class="cursor_pointer"  style="padding:1rem 4rem;background-color:rgba(57, 151, 255, 1) ;border-radius: 0.31rem;width:50%;margin: 0 auto;text-align: center;margin-top: 2.8rem;">登录</div>
								<div style="width:50%;margin:0 auto;display: flex;justify-content: space-between;align-items: center;margin-top: 1.8rem;">
									<div class="cursor_pointer" style="color:rgba(57, 151, 255, 1);">注册账号</div>
									<div class="cursor_pointer" style="color:#333333">忘记密码</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>

		</swiper>
		<!-- 分页器 -->

		<div class="swiper-pagination swiper_btn_box"></div>


	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: "Home",
		// components: {
		//   HelloWorld
		// }
		data() {
			return {
				swiperOptions: {
					direction: "vertical", //竖向切换
					mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
					mousewheelControl: true, //同上
					//分页器
					pagination: {
						el: ".swiper-pagination",
						clickable: true, //分页器点击事件
						bulletClass: 'swiper_btn_style',
						bulletActiveClass: "swiper_choose",

					},
					loop: true,

				},
				page2tab: [{
						text: "问卷多"
					},
					{
						text: "界面美"
					},
					{
						text: "操作易"
					},
					{
						text: "运营稳"
					},
					{
						text: "佣金高"
					},
					{
						text: "数据准"
					},
					{
						text: "变现快"
					}
				]
			};
		},
		methods: {
			goLogin() {
				this.$router.push('/login')
			},
			goHome(){
				this.$router.push("/")
			}
		}
	};
</script>
<style lang="scss">
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

	.swiper_btn_box {
		position: fixed;
		top: 50%;
		right: 2rem;
		width: 1.5rem;
	}

	.swiper_btn_style {
		cursor: pointer;
		opacity: 1;
		width: 1rem;
		height: 1rem;
		border-radius: 100%;
		border: 2px solid white;
		display: inline-block;
	}

	.swiper_choose {
		cursor: pointer;
		opacity: 1;
		width: 1rem;
		height: 1rem;
		border-radius: 100%;
		display: inline-block;
		background-color: rgba(255, 255, 255, 1);
	}


	.page1 {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: url("../../static/img/1.png");

		.page1_back {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.page1_content {
			width: 27.5rem;
			margin-left: 7rem;
			padding-top: 15.62rem;
			color: white;
		}
	}

	.page2 {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: url("../../static/img/2.png");

		.page2_back {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.page2_content {
			width: 40rem;
			margin-left: 10rem;
			padding-top: 15.62rem;
			color: white;
		}
	}

	.page3 {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: url("../../static/img/3.png");

		.page3_back {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.page3_content {
			width: 40rem;
			margin: 0 auto;
			padding-top: 15.62rem;
			color: white;
		}
	}

	.page4 {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: url("../../static/img/4.png");

		.page4_back {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.page4_content {
			width: 60rem;
			margin: 0 auto;
			padding-top: 15rem;
			color: white;
		}
	}

	.page5 {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-image: url("../../static/img/5.png");

		.page5_back {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.page5_content {
			width: 100%;
			margin: 0 auto;
			padding-top: 12rem;
			color: white;
		}
	}

	.ipt_style {
		width: 40%;
		padding: 1rem;
		border: 1px solid rgba(238, 238, 238, 1);
		border-radius: 0.19rem;
	}
</style>
