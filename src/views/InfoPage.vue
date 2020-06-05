<template>
	<div class="infoPage">
		<!-- 顶部导航 -->
		<topNav></topNav>
		<!-- 顶部导航 -->
		<router-view></router-view>
		<!-- 底部导航 -->
		<bottomNav></bottomNav>
	</div>
</template>

<script>
	import bottomNav from "../components/bottomNav.vue"
	import topNav from "../components/topNav.vue"
	export default {
		name: "infoPage",
		components: {
			bottomNav,
			topNav
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
	.infoPage {
		width: 100%;
		height: 100%;
		padding: 5rem 0 10rem 0;
		background-color: #f5f5f5;
		overflow: hidden;
	}
</style>
