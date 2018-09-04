<template>
	<div class="login-wrap">
		<h1></h1>
		<div class="from">
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
			debugger;
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
	            //this.$toast.top('top');
	        })
		}
	}
}

</script>

