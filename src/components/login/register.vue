<template>
	<div class="register-wrap login-wrap">
		<h1></h1>
		<div class="progress"></div>
		<div class="from">
			<p class="account"><input type="text" ref="account" placeholder="请输入账号"></p>
			<p class="password"><input type="password" ref="password" placeholder="请输入密码"></p>
			<p class="password"><input type="password" ref="confirm" placeholder="请确认密码"></p>
			<button v-on:click="postLogin">注册</button>
			<div class="buttons">
				已有账号，
				<router-link :to="{path:'/login'}" tag="span">立即登录</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import '../../css/reset.css';
import '../../css/login.css';
export default{
	name:"Register",
	data(){
		return {
			
		}
	},
	methods:{
		postLogin:function(){
			let self = this;
			let account = $(this.$refs.account).val();
			let password = $(this.$refs.password).val();
			let confirm = $(this.$refs.confirm).val();
			let promise = $.ajax({
	            url:'https://external.pengpengla.com/h5/hits/optionList',
	            type:'post',
	            dataType:'json',
	            data: {
	                id: '3',
                    pageSize: 20,
                    page:1,
                    userToken:null
	            }
	        });
	        promise.done(function(res){
	            self.$toast.top("获取数据成功");
	        })
	        promise.fail(function(res){
	            //self.$toast.top('top');
	        })
		}
	}
}

</script>

