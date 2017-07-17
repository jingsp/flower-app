<template>
	<section class="detail-container">
		<div class="pro-show">
			<img src="../../assets/images/first/lilies1.png" alt="" />
		</div>
		<div class="option"></div>
		<div class="pro-desc">
			<h4 class="title">{{flowerName}}</h4>
			<p class="desc">{{florid}}</p>
		</div>
		<div class="other">
			<a href="">
				<i class="iconfont">&#xe61a;</i>
				<span>收藏</span>
			</a>
			<a href="">
				<i class="iconfont">&#xe6d9;</i>
				<span>分享</span>
			</a>
			<button @click="addCart()" class="btn">加入购物车</button>		  
		</div>
		<div class="detail-info">
			<h4>{{title}}</h4>
		    <h5>{{subTitle}}</h5>   
		    <div class="intro">
		     	<p>肉质根称为“下盘根”，多达几十条，分布在45~50厘米深的土层中，吸收水分能力强，
隔年不枯死。纤维状根称“上盘根”，“不定根”，发生较迟，在地上茎抽生15天左右、苗高10厘米以上时开始发生。</p>
		     	<p>形状纤细，数目多达180条，分布在土壤表层，有固定和支持地上茎的作用，亦有吸收养分的作用。每年与茎干同时枯死。有鳞茎和地上茎之分。</p>
		     	<p>茎直立，圆柱形，常有紫色斑点，无毛，绿色。有的品种（如卷丹、沙紫百合）在地上茎的腋叶间能产生“珠芽”；有的在茎入土部分，茎节上可长出“籽球”。</p>
		     	<p>茎直立，圆柱形，常有紫色斑点，无毛，绿色。有的品种（如卷丹、沙紫百合）在地上茎的腋叶间能产生“珠芽”；有的在茎入土部分，茎节上可长出“籽球”。</p>
		     	<p>茎直立，圆柱形，常有紫色斑点，无毛，绿色。有的品种（如卷丹、沙紫百合）在地上茎的腋叶间能产生“珠芽”；有的在茎入土部分，茎节上可长出“籽球”。</p>
		     	<p>茎直立，圆柱形，常有紫色斑点，无毛，绿色。有的品种（如卷丹、沙紫百合）在地上茎的腋叶间能产生“珠芽”；有的在茎入土部分，茎节上可长出“籽球”。</p>
		     	<p>茎直立，圆柱形，常有紫色斑点，无毛，绿色。有的品种（如卷丹、沙紫百合）在地上茎的腋叶间能产生“珠芽”；有的在茎入土部分，茎节上可长出“籽球”。</p>
		    </div>
	    </div>
	</section>	
</template>

<script>
	export default {
		data () {
		  return {
             flowerName: '小半',
			 florid: `纵容着 喜欢的 讨厌的 宠溺的 厌倦的 一个个慢慢黯淡 纵容着 任性的 随意的 放肆的 轻易的 将所有欢脱倾翻 不应该 太心软 不大胆 太死板 不果断 玩弄着肆无忌惮 不应该 舍弃了 死心了 放手了 断念了 无可奈何不耐烦 不算`,
		     title: '哈哈哈哈',
		     subTitle: 'hhhhh'
		  }
		},
		methods: {
			addCart () {
				console.log('buy buy');
			}
		}
	}
</script>

<style scoped lang="scss">
.detail-container {
	width: 100%;
	.pro-desc {
	    width: 86%;
        margin: 0.5rem auto;
		.title {
			font-size: 20px;
            color: #629F85;
		}
		.desc {
			text-indent: 23px;
            font-size: 12px;
            color: #444;
            line-height: 18px; 
		}
	}
	.other {
		height: 30px;
		padding: 6px;
		line-height: 30px;
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		font-size: 12px;
		border-top: 1px solid #E0E0E0;
		border-bottom: 1px solid #E0E0E0;
	}
	.detail-info {
		width: 14.5rem;
		margin: 15px auto;
		text-align: center;
		.intro {
			width: 12.6rem;
			margin: 10px;
			font-size: 12px;
			line-height: 18px;
			/*height: 200px;*/
			border: 1px solid #333;
			p {
				text-indent: 20px;
			}
		}
	}
}
</style>
