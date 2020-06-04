<template>
	<div class="left_nav">
		<div style="font-size: 2.18rem;color:white;padding:2.5rem 0;">LOGO</div>
		<div class="cursor_pointer" style="font-size: 1.5rem;padding:2.5rem 0;text-align: center;color:white;" v-for="(item,index) in navList" :key="index">
			{{item.text}}
		</div>
	</div>
</template>

<script>
	export default {
		name: "leftNav",
		data() {
			return {
				navList: [{
						text: "个人中心"
					},
					{
						text: "问卷调查"
					},
					{
						text: "全网动态"
					}
				]
			}
		},
	};
</script>
<style lang="scss">
	.left_nav {
		position: fixed;
		left:0;
		width: 12rem;
		height: 100vh;
		text-align: center;
		background-color: rgba(57, 151, 255, 1);
	}
</style>
