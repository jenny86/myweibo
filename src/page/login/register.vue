<template>
	<div class="register-wrap login-wrap">
		<h1></h1>
		<div class="progress"></div>
		<div class="form" name="form" id="form">
			<!--<p class="avater">-->
				<!--<img :src="avatar" />-->
				<!--<input class="upload" @change='add_img'  type="file" />-->
			<!--</p>-->
			<p class="account"><input type="text" ref="account" placeholder="请输入账号"></p>
			<p class="password"><input type="password" ref="password" placeholder="请输入密码"></p>
			<p class="password"><input type="password" ref="confirm" placeholder="请确认密码"></p>
			<button v-on:click="goRegister">注册</button>
			<div class="buttons">
				已有账号，
				<router-link :to="{path:'/login'}" tag="span">立即登录</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import '../../less/reset.css';
import '../../less/login.css';

import api from  '../../base/api';
export default{
	name:"Register",
	data(){
		return {
			imgDat:['image/gif','image/jpeg','image/png','image/jpg'],
			avatar:'',
			files:''
		}
	},
	methods:{
		goRegister(){
			let account = $(this.$refs.account).val();
			let password = $(this.$refs.password).val();
			let confirm = $(this.$refs.confirm).val();
			if (!this.avatar) {
				alert('请选择用户头像')
			} else if (!account) {
				alert('请输入用户名')
			} else if (!password) {
				alert('请输入密码')
			} else if (!confirm) {
				alert('请确认密码')
			} else if (password !== confirm) {
				alert('密码不一致')
			}else{
				this.postRegister(account,password);
			};
			
		},
		postRegister(username,password){
			let self = this;
			let files = this.files;
			let param = new FormData(); 

			param.append('avatar',files);
			param.append('username',username);
			param.append('password',password)


			let promise = $.ajax({
	            url:api.register(),
	            type:'post',
	            dataType:'json',
              data:{
                username,
                password
              }
	            // data:param,
	            // processData: false,  // 告诉jQuery不要去处理发送的数据
             	// contentType: false,
	        });
	        promise.done(function(res){
            self.$router.push({ path: '/login' })
	        })
	        promise.fail(function(res){
	            //self.$toast.top('top');
	        })
		},
		add_img(event){
			let self = this;
			let img= this.files = event.target.files[0]; 
			let type=img.type;
			let size=img.size;
			
			if (this.imgDat.indexOf(type) == -1) {
				alert('文件格式不对');
				return
			};
			if (size > 1048576) {
				alert('大于1MM');
				return
			};
			var image = new Image();
		    var reader = new FileReader();
		    
		    reader.readAsDataURL(img);
		    reader.onload = (e) => {
		        self.avatar = e.target.result;
		    };
		    
		}
	}
}

</script>
<style lang="less">
  @import "../../less/global.less";
</style>
