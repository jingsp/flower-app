<template>
	<section class="search-container">
		<input type="text" class="search-ipt" />
		<i class="iconfont search-icon" @click="search()">&#xe6c0;</i>
	</section>
</template>

<script>
	export default {
		data () {},
		methods: {
			search () {
				console.log(1111)
			}
		}
	}
</script>

<style scoped lang="scss">
.search-container {
	height: 2.5rem;
	width: 100%;
	background-color: #72CCA8;
	text-align: center;
	line-height: 2.5rem;
	/*padding-top: 10px;*/
	position: relative;
	.search-ipt {
		height: 30px;
		width: 80%;
		border-radius: 15px;
		outline: none;
		background-color: transparent;
		border: 0 none;
		border: 1px solid #ccc;
		padding: 0px 0.4rem;
		/*border-bottom: 1px solid #ccc;*/
	}
	.search-icon {
		position: absolute;
		top: 0.15rem;
		right: 1.8rem;
	}
}
</style>
