<template>
	<div class="personalCenter ">
		<leftNav></leftNav>
		<div>test</div>
	</div>
</template>

<script>
	import leftNav from "../components/leftNav.vue"
	export default {
		name: "personalCenter",
		components: {
			leftNav
		},
		data() {
			return {

			}
		}
	};
</script>
<style lang="scss">
	.personalCenter {
		width: 100%;
		height: 100%;
		padding-left: 12rem;
	}
</style>
