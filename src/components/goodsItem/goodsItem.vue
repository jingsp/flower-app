<template>
	<section class="item-container">
		<router-link to="detail">
			<img src="../../assets/images/first/lilies1.png" alt="" />
		    <p class="f-title">百合花</p>
		    <p class="f-price">猜猜我多少钱</p>
		</router-link>		
	</section>
</template>

<script>
</script>

<style scoped lang="scss">
.item-container {
	width: 100%;
	margin-top: 20px;
	height: 126px;
	position: relative;
	.f-title {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 16px;
		color: #fff;
	}
	.f-price {
		position: absolute;
		bottom: 0;
		right: 50px;
		font-size: 15px;
		color: #fff;
	}
}
</style>
