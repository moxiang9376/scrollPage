<template>
	<div class="personalCenter">
		<leftNav></leftNav>
		<div style="position: fixed;width:100%;bottom:0;padding-right:12rem;text-align:center;">@版权信息</div>
		<!-- 顶部导航 -->
		<div class="top_nav">
			<div class="nav_box">
				<img src="../../static/img/icon_public.svg" />
				<div>站内公告</div>
			</div>
			<div style="height:100%;background:rgba(195, 195, 195, 0.5);width:1px;margin-left:2rem;margin-right:1.2rem"></div>
			<div class="nav_box" style="margin-right:2rem">
				<img src="../../static/img/icon_user_head.svg" />
				<div>用户名</div>
				<img style="transform: rotate(270deg);" src="../../static/img/pullDown.svg" />
			</div>
		</div>

		<!-- 顶部导航 -->

		<!-- 右下角区域 -->
		<div style="padding:2rem;">
			<!-- 标题 -->
			<div style="font-size:1rem;font-weight:bold;">
				<span>问卷总计：{{totalQuestion}}</span>
				<span>佣金总计：{{totalYongjin}} 元</span>
			</div>
			<!-- 搜索框 -->
			<div class="search_box">
				<select>
					<option>条件查询</option>
					<option>条件查询</option>
				</select>
				<input placeholder="请输入卷ID,收款账号" />
				<div>搜索</div>
			</div>
			<!-- 详细信息 -->
			<div class="question_list_box">
				<div class="title">
					<span>问卷ID</span>
					<span>收款支付宝</span>
					<span>团队编号</span>
					<span>佣金(元)</span>
					<span>佣金(元)</span>
					<span>结束时间</span>
					<span>IP</span>
					<span>状态</span>
					<span>站长付款</span>
					<span>团长付款</span>
				</div>
				<div class="list">
					<div class="no_info">暂无数据</div>
					<div class="pagination">
						<a-pagination v-model="current" :total="1" size="small" show-less-items />
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import leftNav from "../components/leftNav.vue";
	export default {
		name: "personalCenter",
		components: {
			leftNav
		},
		data() {
			return {
				totalQuestion: 0,
				totalYongjin: "0.00",
				current: 1, //页码
			};
		}
	};
</script>
<style lang="scss">
	.personalCenter {
		width: 100%;
		height: 100%;
		padding-left: 12rem;
		background-color: #f5f5f5;
	}

	.top_nav {
		width: 100%;
		color: rgba(80, 80, 80, 1);
		font-size: 0.88rem;
		box-shadow: 0rem 0.19rem 0.19rem 0rem rgba(195, 195, 195, 0.5);
		height: 4rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: white;

		.nav_box {
			display: inline-block;

			img {
				width: 1.5rem;
				height: 1.5rem;
				display: inline-block;
				margin-left: 0.8rem;
			}

			div {
				display: inline-block;
				margin-left: 0.8rem;
			}
		}
	}

	.search_box {
		margin-top: 1.13rem;
		height: 4rem;
		line-height: 4rem;
		font-size: 1.13rem;
		box-shadow: 0rem 0rem 0.63rem 0rem rgba(217, 217, 217, 0.5);
		background-color: white;

		select {
			border: none;
			font-size: 1.13rem;
			height: 100%;
			padding-left: 2rem;
		}

		input {
			font-size: 1.13rem;
			height: 100%;
			padding-left: 2rem;
		}

		div {
			display: inline-block;
			float: right;
			padding: 0 4rem;
			border-radius: 10em;
			background-color: rgba(57, 151, 255, 1);
			color: white;
		}
	}

	.question_list_box {
		width: 100%;
		margin-top: 2rem;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: rgba(128, 128, 128, 1);
			padding: 0 2rem;
			padding-bottom: 1rem;
		}

		.list {
			width: 100%;
			height: 50vh;
			background-color: white;
			position: relative;

			.no_info {
				padding-top: 25vh;
				text-align: center;
			}

			.pagination {
				position: absolute;
				bottom: 1rem;
				right: 1rem;
			}
		}
	}


	.bottom_box {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
