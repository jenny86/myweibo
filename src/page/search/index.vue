<template>
  <div>
    <div class="search-wrap">
      <input property="输入关键字搜索" type="text"/>
      <button>搜索</button>
    </div>
  </div>

</template>

<script>
  import Router from 'vue-router';
  import api from  '../../base/api';
  import Alert from '../../base/mask.js'
    export default {
        name: "search",
        data(){
          return{}
        },
        mounted:function () {
          
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
  @import "../../less/global.less";
  .search-wrap{
    padding: 50px 20px;
    display: flex;
  }
  input{
    display: block;
    height:50px;
    box-sizing: border-box;
    padding: 20px 32px;
    font-size: 36px;
    line-height: 92px;
    border-radius: 12px;
  }
  button{
    width:100px;
    display: block;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    background:@color-green-bg;
    color: #ffffff;
  }
</style>
