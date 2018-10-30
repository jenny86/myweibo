<template>
    <div>
      <h1>
        <input type="text" placeholder="笔记描述" v-model="title" @input="inputChange" />
      </h1>
      <p>
        <textarea placeholder="输入文章内容" v-model="content" @input="inputChange"></textarea>
      </p>
      <button @click="submit" :class="buttonClass">提交</button>
    </div>
</template>

<script>
  import Router from 'vue-router';
  import api from  '../../base/api';
  import Alert from '../../base/mask.js'
    export default {
        name: "record",
        data(){
            return {
              title:'',
              content:'',
              buttonClass:'dis'
            }
        },
        mounted(){
          this.inputChange()
        },
        methods:{
          postPubArtical:function(){
            let self = this;
            let title = this.title;
            let content = this.content;

            let promise = $.ajax({
              url:api.pubArtical(),
              type:'post',
              dataType:'json',
              headers: {
                Accept: "application/json; charset=utf-8",
                Authentication:self.$store.state.userInfo.token
              },
              data: {
                title,
                content,
                uid:self.$store.state.userInfo.uid
              }
            });
            promise.done(function(res){
              if (res.code == '000') {
                new Alert({
                  content:'提交成功'
                }).create()

              } else {
                new Alert({
                  content:res.msg
                }).create()
              };
            })
            promise.fail(function(res){
              new Alert({
                content:'你家没网了'
              }).create()

            })
          },
          submit:function(){
            if (this.title && this.content) {
              this.postPubArtical()
            } else{
              new Alert({
                content:'题目和内容不能为空'
              }).create()
            }
          },
          inputChange:function () {

            if (this.title && this.content) {
              this.buttonClass = 'on'
            }else {
              this.buttonClass = 'dis'
            }
          }
        }
    }
</script>

<style scoped>
  @import "../../less/global.less";
  button{
    width: 200px;
    height: 100px;
    background: #cccccc;
  }
.dis{
  background: #cccccc;
}
  .on{
    background: #22cb9a;
  }
</style>
