<template>
	<section class="cart-container">
	   <div class="title">
	   	 <i class="iconfont backicon">&#xe61d;</i>
	   	 <h4 class="text">购物车({{num}})</h4>
	   </div>
	   <div class="selectR">
	   	<i class="iconfont" v-show="!isSelectedAll" @click="selectAll()">&#xe668;</i>
	   	<i class="iconfont select-bg" v-show="isSelectedAll" @click="cancel()">&#xe6e8;</i>
	   	<span>全选</span>
	   </div>
	   <ul class="goods-list">
	   	<li class="item">
	   		<router-link to="detail">	
	   			<div class="pic">
	   				<img src="../../assets/images/first/order.png" alt="" />
	   			</div>
	   			<div class="info">
	   				<p>百合花</p>
	   				<p>今天是个好日子呀啦啦啦啦绿绿绿绿</p>
	   				<p>规格：10只装（40cm*80cm） </p>
	   				<p>单价： 99.00</p>
	   				<p>数量： 1 </p>
	   			</div>
	   		</router-link>
	   		<p>金额： 99.00</p>
	   	</li>
	   </ul>
	</section>
</template>

<script>
	export default {
		data () {
			return {
			 num: 5,
			 isSelectedAll: false
			}
		},
		methods: {
			cancel () {
				console.log('cancel');
				this.isSelectedAll = false;
			},
			selectAll () {
				console.log('selectedAll');
				this.isSelectedAll = true;
			}
		}
	}
</script>

<style scoped lang="scss">
 .cart-container {
 	.select-bg {
 		color: #71CBA7;
 	}
 	.title {
 		/*display: flex;
 		justify-content: flex-start;*/
 		text-align: center;
 		height: 35px;
        line-height: 35px;
        background-color: #ccc;
        padding: 0px 10px;
        font-size: 16px;
        position: relative;   
        background-color: #71CBA7;
        color: #fff;     
        .backicon {
        	position: absolute;
        	left: 10px;
        }
        .text {
        	margin-right: 20px;
        }
 	}
 	.selectR {
 		padding: 10px;
 		font-size: 12px;
 		border-bottom: 1px solid #e3e3e3;
 	}
 }
</style>
