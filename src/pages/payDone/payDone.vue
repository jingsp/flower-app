<template>
	<section class="done-container">
		<v-header></v-header>
		<div class="done">
			<img src="../../assets/images/done.png" alt="" />
			<p class="text">订单已完成</p>
		</div>
		<ul >
			<li>
				<ul class="order-item">
					<li class="info-item">
						<router-link to="order" class="goods-info">
					      <span class="dis-block">{{name}}</span>
					      <span class="dis-block option">{{option}}</span>		
				        </router-link>
					</li>
					<li class="info-item">
						<span><i class="iconfont">&#xe600;</i>{{price}}</span>
					</li>
					<li class="info-item">
						<span>{{num}}</span>
					</li>
				</ul>
			</li>
		</ul>
		<!--<div class="footer">
			<router-link to="home">订单详情</router-link>
			<router-link to="home">立即评价</router-link>
		</div>-->
	</section>
</template>

<script>
import VHeader from '../../components/header/vHeader'
 export default {
 	data () {
 		return {
 			name: '百合花',
 			option: '10只装',
 			price: 200.00,
 			num: 1 			
 		}
 	},
 	components: {
 		VHeader
 	}
 }
</script>

<style scoped lang="scss">
.done-container {
	.dis-block {
		display: block;
	}
	.done {
		height: 210px;
		margin: 58px auto;
		text-align: center;
		width: 56.8%;	
		.text {
			margin-top: 10px;
			font-weight: 700;
		}	
	}
	.order-item {
		height: 40px;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
		/*padding: ;*/
		.info-item {
			/*line-height: 40px;*/
			padding: 5px 0;
		}
		.goods-info {
			display: block;
			.option {
				font-size: 8px;
				margin-top: 4px;
			}
		}
	}
}
</style>
