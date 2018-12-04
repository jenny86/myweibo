<template>
	<div class="login-wrap">
    <h1></h1>
    <div class="form">
			<p class="account"><input type="text" ref="account" placeholder="请输入账号"></p>
			<p class="password"><input type="password" ref="password" placeholder="请输入密码"></p>
			<button v-on:click="postLogin">登录</button>
			<div class="buttons">
				<span>忘记密码</span>
				<router-link :to="{path:'/register'}" tag="span">注册</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import '../../less/reset.css';
import '../../less/login.css';
import api from  '../../base/api';
import cache from '../../base/cache';
import Alert from '../../base/mask.js'


export default{
	name:"Login",
	data(){
		return {
			
		}
	},
	methods:{
		postLogin:function(){
			let self = this;
			let account = $(this.$refs.account).val();
			let password = $(this.$refs.password).val();
			let promise = $.ajax({
	            url:api.login(),
	            type:'post',
	            dataType:'json',
	            data: {
	                username:account,
                    password
	            }
	        });
	        promise.done(function(res){
	            if (res.code == '000') {

                cache.setCache('MY_WEIBO',res.data)
                self.$store.dispatch('login',res.data)
	           		self.$router.push({ path: '/home' })
	            } else {
                new Alert({
                  content:res.message
                }).create()
	            };
	        })
	        promise.fail(function(res){
            new Alert({
              content:'你家没网了'
            }).create()

	        })
		}
	}
}

</script>
<style lang="less">
  @import "../../less/global.less";
  .login-wrap .form p input{
    background: none;
  }
</style>
