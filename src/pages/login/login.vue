<template>
  <div class="login-container">
  	<div class="bg"></div>
  	<div class="content">
  		<div class="logo"></div>
  		<form action="" class="login-form">
  		  <div class="username">
  			  <i class="iconfont user-icon">&#xe673;</i>
  			  <input type="text" v-model="userInfo.username" placeholder="手机号/用户名"/>
  		  </div>
  		  <div class="password">
  			  <i class="iconfont psw-icon">&#xe6ca;</i>
  			  <input type="password" v-model="userInfo.password" placeholder="请输入密码"/>
  		  </div>
  		  <div class="other-link">
  			  <a href="#">忘记密码</a>
  			  <a href="#">立即注册</a>  			
  		  </div>
  		  <div class="form-btn">
  			  <button class="sub-btn" @click="log()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
  		  </div>
  	  </form>
  	  <div class="other-way">
  	  	<div class="line">第三方登录</div>
  	  	<div class="other-login">
  	  		<i class="iconfont">&#xe621;</i>
  	  		<i class="iconfont">&#xe65f;</i>  	  		
  	  		<i class="iconfont">&#xe64c;</i>
  	  	</div>
  	  </div>
   </div>
  </div>
</template>

<script>
//	import {login} from '../../service/getData.js'
export default {
  data () {
  	return {
  		userInfo: {
  			username: '',
  			password: ''
  		}
  	}
  },
  methods: {
  	log () { 		
//		login(this.userInfo).then((res) => {
//			console.log(res)
//		});	
      this.$router.push('/first');
  	}
  }
 }
</script>

<style scoped lang='scss'>
  .login-container {
  	height: 100%;
  	/*padding-top: 3rem;*/
  	/*box-sizing: border-box;*/	
  	.bg {
  		background: url(../../assets/images/loginbg.jpg) 0px -70px no-repeat;
  	  -webkit-filter: blur(3px);
  	  filter: blur(2px);
  	  height: 100%;
  	  background-size: 100%;
  	}
  	.content {
  		width: 12.7rem;
  		position: absolute;
  		top: 5rem;
  		left: 50%;
  		margin-left: -6.35rem;
  	}
  	.logo {
  		width: 57px;
  		height: 57px;
  		background: url(../../assets/images/log.png) no-repeat;
  		background-size: contain;
  		margin: 0 auto;
  	}
  	.login-form { 		
  		margin: 50px auto 0px;
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
  	.other-way {
  		.line {
  			/*padding: 0 8px 0;*/
        /*margin: 20px 0;*/
        line-height: 1px;
        border-left: 100px solid #E3E7E8;
        border-right: 100px solid #E3E7E8;
        text-align: center;
        font-size: 12px;
        margin-top: 5.5rem;
  		}
  		.other-login {
  			margin-top: 20px;
  			/*position: relative;*/
  			display: flex;
  			justify-content: space-around;
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
  		background: transparent;
  	}
  }
</style>
