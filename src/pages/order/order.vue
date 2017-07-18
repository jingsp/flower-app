<template>
    <section class="order-container">
    	<div class="user-info">
    		<a href="#">
    			<img src="../../assets/images/avatar.jpg" alt="" />
    			<span>{{username}}</span>
    		</a>    		
    	</div>
    	<div class="order-info">
    		<p>订单状态: {{ordreStatus}}</p>
    		<p >
    			订单金额: <span class="money-col">{{orderMoney}}</span>
    		</p>
    		<p>订单编号: {{orderNum}}</p>
    	</div>
    	<div class="order-detail clearfix">
    		<div class="flower-img float-l">
    			<img src="../../assets/images/first/order.png" alt="" />
    		</div>
    		<div class="flower-info float-l">
    			<p class="title f-size-12">
    			  <span>{{title}}</span>
    			  <span class="f-size-8">鲜花花束</span>
    		    </p>
    		    <p class="size f-size-12">
    			  <span class="">花束尺寸:</span>
    			  <span>{{size}}</span>
    		    </p>
    		    <p class="desc f-size-8">[此商品不退不换]</p>
    		    <p class="price f-size-12">
    			  <span class="money-col">￥{{price}}</span>
    			  <span>x{{num}}</span>
    		    </p>
    		    <p class="date f-size-8">{{orderDate}}</p>
    		</div>
    		
    	</div>
    	<div class="user-address">
    		<p>收货人：{{receiver}}</p>
    		<p >
    			电话： 13333333333
    		</p>
    		<p>地址：{{address}}</p>
    	</div>
    	<div class="pay">
    		<button class="pay-btn">立即支付</button>
    	</div>
    </section>
</template>

<script>
	export default {
		data () {
			return {
				username: 'pipi',
				ordreStatus: '未支付',
				orderMoney: 200.00,
				orderNum: 1111111111,
				title: '百合花',		
				price: '9.00',
				size: '直径*高:35*45cm',
				num: 1,
				orderDate: '2017-07-18 13:48',
				receiver: 'pipi',
				address: '智慧e谷'
			}
		}
	}
</script>

<style scoped lang="scss">
 .order-container {
 	padding: 0px 15px;
 	/*.padding-left{
 		padding-left: 10px;
 	}*/
	.user-info {
   	   margin-top: 15px;
   	   margin-bottom: 15px;
   	   img {
   	   	vertical-align: middle;
   	   }
    }
    .order-info {
    	font-size: 12px;
    	line-height: 18px;
    }
    .order-detail {
    	height: 120px;
    	/*padding: 10px 0px 15px;*/
    	position: relative;
    	.flower-img {
    		margin-right: 25px;;
    		position: absolute;
    		left: 0;
    		top: 50%;
    		margin-top: -35px;
    	}
    	.flower-info {
    		padding: 10px 0px;
    		position: absolute;
    		left: 140px;
    		top: 10px;
    		line-height: 16px;
    	  .title {
    		/*font-size: 14px;*/
    	  }
    	  .size {
    		/*font-size: 14px;*/
    	  }
    	  .desc {
    		font-size: 8px;
    	  }
    	  .price {
    		/*font-size: 14px;*/
    	  }
    	  .date {
    	  	font-size: 8px;
    	  }
    	}    	
    }
    .user-address {
    	height: 55px;
    	font-size: 12px;
    	line-height: 18px;
    	padding: 6px 0px;
    	border: 1px solid #EEEBEE;
    	border-left: 0 none;
    	border-right: 0 none;
    }
    .pay {
    	display: flex;
        justify-content: center;
        padding-top: 15px;
    	.pay-btn {
    		width: 150px;
    		height: 30px;
    		border: 0 none;
    		background-color: #F05484;
    		color: #fff;
    		border-radius: 15px;
    		font-weight: 700;;
    		
    	}
    }
 }  
</style>
