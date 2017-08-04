<template>
	<section class="item-container">
		<router-link to="detail" class="content">
			<img src="../../assets/images/first/test.png" alt="" />
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
	/*margin-top: 20px;*/
	/*height: 126px;*/
	position: relative;
	.content {
		text-align: center;
        display: block;
        width: 100%;
        height: 180px;
        padding: 6px 15px;
        box-sizing: border-box;
        img {
        	width: 100%;
        	height: 100%;
        }
	}
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
