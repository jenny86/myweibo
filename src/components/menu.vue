<template>
  <div class="wrap">
    	
    	<div class="content_wrap">
            <router-link :to="{path:'/login'}" tag="p" class="login">登录</router-link>
    		<router-view></router-view>
    	</div>
	    <ul class="menu">
	      	<router-link :to="{path:'/home'}" tag="li">首页</router-link>
	      	<router-link :to="{path:'/article'}" tag="li">文章</router-link>
	     	<router-link :to="{path:'/my'}" tag="li">我的</router-link>
	    </ul> 
  </div>
</template>

<script>


export default {
  name: 'Menu'
}
</script>
<style lang="less">
html,body{
  height:100%;
}

@color-grey-border:#b7b7b9;
@color-green-bg:#22cb9a;
.flex(@justify:center,@align:center){
  justify-content:@justify;
  align-items:@align;
  display: flex;
}

.wrap{
  height:100%;
  display:flex;
  flex-direction:column;
  position: relative;
  .login{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    color:#22cb9a;
  }
  .content_wrap{
    flex:1;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
  }
  .menu{
    height:100px;
    border-top:1px solid @color-grey-border;
    .flex(space-around);
  }
}
</style>