<template>
    <div class="wrap">
        <transition :name="transitionName"> 
            <router-view class="child-view"></router-view> 
        </transition>
	    <ul class="menu">
	      	<router-link :to="{path:'/home'}" tag="li">首页</router-link>
	      	<router-link :to="{path:'/article'}" tag="li">文章</router-link>
	     	<router-link :to="{path:'/my'}" tag="li">我的</router-link>
	    </ul> 
        <router-link :to="{path:'/login'}" tag="p" class="login">登录</router-link>
    </div>
</template>
<script>
export default { 
　　name: 'app', 
　　data () { 
　　　　return { 
　　　　　　transitionName:'slide-left' 
　　　　} 
　　}, 
    mounted () { 
    },
    watch: {  
        '$route' (to, from) {  
            if(to.path == '/'){  
                this.transitionName = 'slide-right';  
            }else{  
                this.transitionName = 'slide-left';  
            }  
        }  
    }

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
  .login{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    color:#22cb9a;
  }
  .menu{
    position: absolute;
    width: 100%;
    height:100px;
    border-top:1px solid @color-grey-border;
    .flex(space-around);
    bottom: 0;
    background: #ffffff;
  }
  .child-view{
    position: absolute;
    width: 100%;
    height: 100%;
    transform:all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: scroll;
  }
  .slide-left-enter,.slide-right-leave-active{
    opacity: 0;
    -webkit-transform:translate(100%,0);
    transform:translate(100%,0);
  }
  .slide-left-leave-active,.slide-right-enter {
    opacity: 0;
    -webkit-transform:translate(-100%,0);
    transform:translate(-100%,0);
  }
}

</style>