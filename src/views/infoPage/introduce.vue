<template>
	<div class="introduce">
		<div class="introduce_box">
			<div style="border-bottom: 1px solid #f5f5f5;padding-bottom: 2rem;">公司介绍</div>
			<div style="padding-top: 2rem;">
				2003 年，日本上市株式会社 VOYAGE GROUP，在日本成立了日本调查样本株式会社，这就是dataSpring,
				Inc. (日本) 的最初起源；2005 年，改组并命名为亚洲市场调研公司 Research Panel Asia，简称 RPA；
				2015 年， VOYAGE GROUP作为战略投资 与 MApps 日本株式会社与合资合作 RPA。RPA 以其高质量的
				亚洲样本库和高品质的服务而闻名。直属于MApps旗下データスプリング会社；
				至今，MApps旗下データスプリング会社“道道永泉”是データスプリング会社的全球业务中极其重要一支
				机构；道道-----寓意为信息网路般四通八达！ 永泉-----寓意为泉涌般长盛不衰！
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "helpCenter",
		data() {
			return {

			};
		},

		mounted() {

		},


		methods: {

		}
	};
</script>

<style lang="scss">
	.introduce {
		width: 100%;
		height: 100%;
		padding: 0 7rem;
		padding-top: 1rem;
		overflow: auto;

	}

	.introduce_box {
		width: 80%;
		height: 95%;
		padding: 2rem;
		margin: 0 auto;
		background-color: white;
		border-radius: 0.31rem;
		scrollbar-width: none;
		/* firefox */
		-ms-overflow-style: none;
		/* IE 10+ */
		overflow-x: hidden;
		overflow-y: auto;

	}

	.introduce_box::-webkit-scrollbar {
		display: none;
	}
</style>
