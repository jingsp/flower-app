<template>
	<section class="first-container">
	  <banner :imgList="bannerList"></banner>
	  <section class="activity">
	  	<router-link to="detail">
			<i class="iconfont new">&#xe631;</i>
			<p>新品上市</p>
		</router-link>
		<router-link to="detail">
			<i class="iconfont group">&#xe6cd;</i>
			<p>团购</p>
		</router-link>
		<router-link to="detail">
			<i class="iconfont hot">&#xe8ef;</i>
			<p>经典爆款</p>
		</router-link>
	  </section>
	  <goods-item></goods-item>
	</section>
</template>

<script>
	import Banner from '../../components/banner/banner'
	import GoodsItem from '../../components/goodsItem/goodsItem'
    import {getBannerList} from '../../service/getData'
	export default {
		data () {
			return {
				bannerList: []
			}
		},
		components: {
			Banner,
			GoodsItem
		},
		methods: {
		},
		created () {
			getBannerList().then((res) => {
				console.log(res);
				this.bannerList = res.data;
			})
		}
	}
</script>

<style scoped lang="scss">
   .first-container {
   	  width: 100%;
   	  .activity {
   	  	margin-top: 10px;
   	  	display: flex;
   	  	justify-content: space-around;
   	  	text-align: center;
   	  	.new {
   	  		color: #6EB2E9;
   	  	}
   	  	.group {
   	  		color: #E89C78;
   	  	}
   	  	.hot {
   	  		color: #FE4A65;
   	  	}
   	  	a {
   	  		font-size: 12px;
   	  	}
   	  	p {
   	  		margin-top: 7px;
   	  	}
   	  }
   }
</style>
