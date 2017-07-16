<template>
  <div class="login-container">
  	<div class="logo"></div>
  	<div class="from-container">
  		<form action="" class="login-form">
  		<div class="username">
  			<i class="user-icon"></i>
  			<input type="text" v-model="username" placeholder="手机号/用户名"/>
  		</div>
  		<div class="password">
  			<i class="psw-icon"></i>
  			<input type="text" v-model="password" placeholder="请输入密码"/>
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
  			  width: 19px;
  			  height: 19px;
  			  position: absolute;
  			  /*left: -6px;*/
  			  top: 3px;
  			  /*border: 1px solid #eee;*/
  			  background: url(../../assets/images/icon.png) -0px -46px no-repeat;
  			  background-size: 100%;
  			
  		  }
  		}
  		.password {
  			position: relative;
  			.psw-icon {
  				width: 19px;
  			  height: 19px;
  			  position: absolute;
  			  /*left: -6px;*/
  			  top: 3px;
  			  /*border: 1px solid #eee;*/
  			  background: url(../../assets/images/icon.png) -0px -46px no-repeat;
  			  background-size: 100%;
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
