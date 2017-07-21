<template>
	<ul class="bar-container">
		<li class="bar-item">		
			<router-link to="first">
				<i class="iconfont">&#xe614;</i>
				<p>首页</p>
		    </router-link>
	    </li>
	    <!--<li class="bar-item">		
			<router-link to="category">
				<i class="iconfont">&#xe7cc;</i>
				<p>分类</p>
			</router-link>
	    </li>-->
	    <li class="bar-item">		
			<router-link to="cart">
				<i class="iconfont">&#xe603;</i>
				<p>购物车</p>
		    </router-link>
	    </li>
	    <li class="bar-item">		
			<router-link to="user">
				<i class="iconfont">&#xe637;</i>
				<p>我的</p>
			</router-link>
	    </li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				menuList: [{
				  id: 1,
				  name: '首页',
				  href: 'home',
				  icon: '&#xe614;'
				}, {
				  id: 2,
				  name: '分类',
				  href: 'category',
				  icon: '&#xe7cc;'
				}, {
				  id: 3,
				  name: '购物车',
				  href: 'cart',
				  icon: '&#xe603;'
				}, {
				  id: 4,
				  name: '我的',
				  href: 'usercenter',
				  icon: '&#xe637;'
				}]
			}
		}
	}
</script>

<style scoped lang="scss">
	.bar-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0px;
		background-color: #FAFAFA;
		.bar-item {
			flex: 1;
			font-size: 12px;
			text-align: center;
			a {
				display: block;
				height: 50px;
				line-height: 30px;
			}
			p {
				height: 14px;
				line-height: 14px;
			}
		}
	}
</style>
