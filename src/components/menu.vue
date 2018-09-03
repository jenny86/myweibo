<template>
  <div class="wrap">
    	<router-link :to="{path:'/login'}" tag="p" class="login">登录</router-link>
    	<div class="content_wrap">
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

import '../css/home.less';
export default {
  name: 'Menu'
}
</script>
<style lang="less">
@import '../less/reset';

</style>