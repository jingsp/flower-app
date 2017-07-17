<template>
  <div class="login-container">
  	<div class="logo"></div>
  	<div class="from-container">
  		<form action="" class="login-form">
  		<div class="username">
  			<i class="iconfont user-icon">&#xe673;</i>
  			<input type="text" v-model="username" placeholder="手机号/用户名"/>
  		</div>
  		<div class="password">
  			<i class="iconfont psw-icon">&#xe6ca;</i>
  			<input type="password" v-model="password" placeholder="请输入密码"/>
  		</div>
  		<div class="other-link">
  			<a href="#">忘记密码</a>
  			<a href="#">立即注册</a>  			
  		</div>
  		<div class="form-btn">
  			<button class="sub-btn" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
  		</div>
  	</form>
  	</div>

  </div>
</template>

<script>
export default {
  data () {
  	return {
  		username: '',
  		password: ''
  	}
  },
  methods: {
  	login () {
  		this.$router.push('/first');
  	}
  }
}
</script>

<style scoped lang='scss'>
  .login-container {
  	.logo {
  		width: 57px;
  		height: 57px;
  		background: url(../../assets/images/log.png) no-repeat;
  		background-size: contain;
  		margin: 4.25333333rem auto 0;
  	}
  	.login-form {
  		width: 12.7rem;
  		margin: 50px auto;
  		.username {
  			position: relative;
  			margin-bottom: 20px;
  			.user-icon {
  			   position: absolute;
  			   top: 2px;
  		  }
  		}
  		.password {
  			position: relative;
  			.psw-icon {
  	       position: absolute;
  	       top: 2px;
  			}
  		}
  		.other-link {
  			font-size: 12px;
  			margin-top: 20px;
  			display: flex;
  			justify-content: space-between;
  			a {
  				text-decoration:none;
  				color: #333;
  			}
  		}
  		.form-btn {
  			margin-top: 30px;
  		  .sub-btn {
  		  	width: 100%;
  		  	height: 40px;
  		  	background-color: #72CCA8;
  		  	border: 0 none;
  		  	color: #fff;
  		  	font-weight: 700;
  		  	font-size: 14px;
  		  }
  		}
  	}
  	input {
  		width: 100%;
  		height: 20px;
  		border:0 none;
  		outline: none;
  		padding-left: 24px;
  		padding-bottom: 5px;
  		border-bottom: 1px solid #E1DED5;
  		box-sizing: border-box;
  	}
  }
</style>
