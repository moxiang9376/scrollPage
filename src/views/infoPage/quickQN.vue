<template>
	<div class="quickQN">
		<div class="quickQN_left">
			<div class="quickQN_list">
				<div class="list_left">
					<div v-for="(item,index) in infoList" :key="index">
						<div style="display: flex;justify-content: space-between;align-items: center;width:100%;">
							<div style="display: inline-block;vertical-align: middle;">
								<div style="font-size:1.13rem;font-weight:bold;">【生活】出去吃饭口罩怎么放？</div>
								<div style="max-width:20rem;font-size:0.81rem;margin-top:0.75rem;">
									[该题由热心用户：胖老鼠 提供，恭喜他获得了200
									积分！]口罩还是生活中必不可少的，但是出去吃饭
									口罩怎么放？（图片源自网络）
								</div>
								<div style="margin-top:1rem;max-width:23rem;display:flex;justify-content: space-between;align-items: center;color:rgba(164, 164, 164, 1)">
									<div>参与人数：5813</div>
									<div>截止日期：2020-06-06</div>
								</div>
							</div>
							<div style="background-color:rgba(57, 151, 255, 1);color:white;display:inline-block;vertical-align: middle;margin-left: 3rem;font-size: 1rem;padding:0.5rem 1rem;border-radius: 0.31rem;">参与问答</div>
						</div>

						<div style="width: 100%;background-color: #f5f5f5;height:1px;margin: 1rem 0;"></div>
					</div>
					<div style="position: absolute;bottom:0;right:0;">
						<a-pagination v-model="current" :total="1" size="small" show-less-items />
					</div>
				</div>
			</div>
		</div>

		<div class="quickQN_right">
			<div style="font-size: 1.38rem;font-weight: bold;margin-bottom: 1rem;color:rgba(80, 80, 80, 1)">最新动态</div>
			<div>
				<div v-for="(item,index) in publicList" :key="index" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;margin-bottom: 2rem;color:rgba(80, 80, 80, 1)">
					2020-06-02 YS**********用户参与了dsklafjlkasdjflkasdjflkasdjfasdfkjasdl;ksjdf
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "quickQN",
		data() {
			return {
				infoList: [
					1, 2
				],
				publicList: [
					1, 2, 3, 4, 5
				],
				current: 1
			};
		}
	};
</script>

<style lang="scss">
	.quickQN {
		width: 100%;
		height: 100%;
		padding: 0 7rem;
		padding-top: 1rem;
		overflow: auto;
	}

	.quickQN_left {
		display: inline-block;
		position: relative;
		padding: 0 2.5rem;
		padding-top: 2rem;
		width: 60%;
		height: 100%;
		background-color: white;
		border-radius: 0.31rem;
		color: black;
		scrollbar-width: none;
		/* firefox */
		-ms-overflow-style: none;
		/* IE 10+ */
		overflow-x: hidden;
		overflow-y: auto;
	}

	.quickQN_left::-webkit-scrollbar {
		display: none;
	}

	.quickQN_right {
		display: inline-block;
		vertical-align: top;
		margin-left: 1rem;
		padding: 1rem;
		width: 30%;
		height: 100%;
		background-color: white;
		border-radius: 0.31rem;
		scrollbar-width: none;
		/* firefox */
		-ms-overflow-style: none;
		/* IE 10+ */
		overflow-x: hidden;
		overflow-y: auto;
	}
	
	.quickQN_right::-webkit-scrollbar {
		display: none;
	}
</style>
