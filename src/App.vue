<template>
    <transition name="fade" mode="out-in"> 
        <router-view></router-view> 
    </transition>
    
</template>

<script>

export default { 
　　name: 'App', 
　　data () { 
　　　　return { 
　　　　　　transitionName:'slide-left' 
　　　　} 
　　}, 
    mounted () { 
        
    },
    methods:{

    },
    beforeRouteUpdate:function(to,from,next){
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
@import "./less/global.less";
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

</style>



