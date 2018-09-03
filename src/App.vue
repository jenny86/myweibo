<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>



<style lang='less'>
@import './less/reset';
@base: #f938ab;
.demo{
    width:750px;
    height: 100px;
    background: @base;
}
</style>



