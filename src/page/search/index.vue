<template>
  <div>
    <input property="输入关键字搜索" type="text"/>
    <button>搜索</button>

  </div>

</template>

<script>
  import Router from 'vue-router';
  import api from  '../../base/api';
  import Alert from '../../base/mask.js'
    export default {
        name: "search"
    }
</script>

<style scoped>
  @import "../../less/global.less";
  input{
    height:92px;
    padding: 20px 32px;
    font-size: 36px;
    line-height: 92px;
    border-radius: 12px;
  }
</style>
