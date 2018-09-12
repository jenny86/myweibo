<template>
    <div class="wrap">
        <div class="login">
            <p class="search">搜索</p>
            <router-link :to="{path:'/login'}" class="loginIcon" tag="p">登录</router-link>
        </div>
        <transition :name="transitionName" mode="out-in"> 
            <router-view class="child-view"></router-view> 
        </transition>
	    <ul class="menu">
	      	<router-link :to="{path:'/home'}" tag="li">首页</router-link>
	      	<router-link :to="{path:'/article'}" tag="li">文章</router-link>
	     	<router-link :to="{path:'/my'}" tag="li">我的</router-link>
	    </ul> 
        
    </div>
</template>
<script>
export default { 
　　name: 'Menu', 
　　data () { 
　　　　return { 
　　　　　　transitionName:'slide-left' 
　　　　} 
　　}, 
    mounted () { 
        
    },
    methods:{
        demo(){
            alert(11)
        }
    },
    beforeRouteUpdate:function(to,from,next){
        console.log(to)
        if( from.meta.transIndex > to.meta.transIndex ) {
            this.transitionName = 'slide-right';
        }else if( from.meta.transIndex < to.meta.transIndex ){
            this.transitionName = 'slide-left';
        }
        next();
    }



} 
</script>

<style lang="less">
html,body{
  height:100%;
}
@color-grey-font:#cccccc;
@color-grey-border:#b7b7b9;
@color-green-bg:#22cb9a;
.padding(@num){
    padding:@num;
    box-sizing:border-box;
}
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
    width:100%;
    height:92px;
    position: absolute;
    top: 0;
    font-size: 20px;
    color:#22cb9a;
    .flex(space-between);
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
    border-top: 3px solid @color-green-bg;
    .padding(0 25px);
    background:#fff;
    z-index:10;

    .search{
      background:url('../assets/search.png') no-repeat;
      background-position: left center;
      background-size: 50px 50px;
    }
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
    flex:1;

   .padding(92px 0 100px);
    /*height: 100%;*/
    transition:all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: scroll;
  }
  .slide-left-enter, .slide-right-leave-active{
    opacity: 0;
    -webkit-transform:translate(50%,0);
    transform:translate(50%,0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform:translate(-50%,0);
    transform:translate(-50%,0);
  }
}

</style>