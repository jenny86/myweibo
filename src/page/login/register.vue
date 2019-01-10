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
      <p class="valicode">
        <input type="text" ref="valicode" placeholder="请确认验证码">
        <img :src="'http://api.wangyunchuan.top/m/user_action/getcode?time='+time" @click="changeCode()"/>
      </p>
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
import  alert from '../../base/mask';
import Promise from '../../base/promise';

export default{
	name:"Register",
	data(){
		return {
			imgDat:['image/gif','image/jpeg','image/png','image/jpg'],
			avatar:'',
			files:'',
      time:new Date().getTime()
		}
	},
  mounted(){
	  // this.time = new Date().getTime();
  },

	methods:{
		goRegister(){

			let account = $(this.$refs.account).val();
			let password = $(this.$refs.password).val();
			let confirm = $(this.$refs.confirm).val();
			let valicode = $(this.$refs.valicode).val();

		  if (!account) {
        let alert = new Alert({
          content:'请输入用户名'
        }).create()
			} else if (!password) {
        let alert = new Alert({
          content:'请输入密码'
        }).create()
			} else if (!confirm) {
        let alert = new Alert({
          content:'请输入密码'
        }).create()
			} else if (password !== confirm) {
        let alert = new Alert({
          content:'密码不一致'
        }).create()
			} else if(!valicode){
        let alert = new Alert({
          content:'请输入验证码'
        }).create()
      }else{
				this.postRegister(account,password,valicode);
			};
			
		},
		postRegister(username,password,valicode){
			let self = this;
			let files = this.files;
			let param = new FormData();

			param.append('avatar',files);
			param.append('username',username);
			param.append('password',password);
      param.append('valicode',valicode);
      Promise({
        url: api.register(),
        data: {
          username,
          password,
          valicode
        },
        succeed:(data)=>{
          self.$router.push({ path: '/login' })
        }
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
		    
		},
    changeCode(){
      this.time=new Date().getTime()
    },
	}
}

</script>
<style lang="less">
  @import "../../less/global.less";
</style>
