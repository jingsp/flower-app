<template>
	<div class="user-container">
		<div class="info">
			<i class="iconfont setting-icon">&#xe6bd;</i>
			<div class="avatar">
				<img src="../../assets/images/avatar.jpg" width="72px" alt=" " />
			</div>
			<div class="username">
				<span>{{username}}</span>
			</div>
		</div>
		<div class="my-order base-bg-color base-padding-l">
			<div class="order base-height">
				<!--<i class="order-icon "></i>-->
				<i class="iconfont">&#xe6bf;</i>
			    <span class="order-text">我的订单</span>
			</div>
			<ul class="order-category">
				<li>
					<a href="#">待付款</a>
				</li>
				<li>
					<a href="#">待发货</a>
				</li>
				<li>
					<a href="#">已收货</a>
				</li>
			</ul>		
		</div>
		<div class="my-collection base-height base-bg-color base-padding-l base-padding-r">
			<i class="iconfont">&#xe61a;</i>
			<a href="">我的收藏</a>
			<span class="float-r">4</span>
		</div>
		<div class="my-discount base-height base-bg-color base-padding-l base-padding-r">
			<i class="iconfont">&#xe6dc;</i>
			<a href="">优惠券</a>	
			<span class="float-r">4</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				username: '皮皮'
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-container {
		font-size: 14px;
		height: 100%;
		background-color: #F6F6F6;
		.base-height {
			height: 38px;
			line-height: 38px;
		}
		.base-bg-color {
			background-color: #fff;
		}
		.base-padding-l {
			padding-left: 18px;
		}
		.base-padding-r {
			padding-right: 18px;
		}
		.info {
			width: 100%;
			height: 206px;
			padding-top: 30px;
			/*border-bottom: 1px solid #ccc;*/
			box-sizing: border-box;
			background-color: #AEE6E3;
			position: relative;
			.avatar {
				height: 70px;
				width: 70px;
				margin: 0 auto;
				border: 1px solid #ccc;
				border-radius: 35px;
			}
			.username {
				display: flex;
				justify-content: center;
				    margin-top: 15px;
			}
			.setting-icon {
				position: absolute;
				right: 25px;
				top: 25px;
			}
		}
		.my-order {
			margin-top: 8px;
			margin-bottom: 8px;
			.order {
				position: relative;
				.order-text {
					/*padding-left: 25px;*/
				}			
				/*height: 38px;
				line-height: 38px;*/
			}
			.order-category {
				height: 32px;
				line-height: 32px;
				display: flex;
				justify-content: space-around;
				a {
					font-size: 12px;
					color: #B6B6B6;
				}
			}
		}
	}
	.my-discount {
		margin-top: 4px;
	}
</style>
