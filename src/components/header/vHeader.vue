<template>
	<section class="header-container">
		<div class="base-height back">
			<router-link to="home">
				<i class="iconfont">&#xe61d;</i>
				返回
			</router-link>
		</div>
		<div class="base-height username">
			<span>{{username}}</span>
		</div>
		<div class="base-height more" @click="getMore()">
			<i class="iconfont">&#xe652;</i>
		</div>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				username: 'pipi'
			}
		},
		methods: {
			getMore () {
				console.log(1111);
			}
		}
	}
</script>

<style scoped lang="scss">
	.header-container {
		/*height: 93px;*/
		display: flex;
		justify-content: space-between;
		padding: 0px 10px;
		border-bottom: 1px solid #EFF4F4;
		/*.back, .username, .more {
			align-items: center;
		}*/
		a {
			font-size: 18px;
		}
	}
	.base-height {
		height: 2.25rem;
		line-height: 2.25rem;
	}
</style>
