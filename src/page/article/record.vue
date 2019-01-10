<template>
  <div>
    <div class="quillEditor">
      <div class="group">
        <select>
          <option>1</option>
          <option>2</option>
        </select>
        <input type="text" placeholder="标题：" v-model="title" @input="inputChange"/>
      </div>
      <quill-editor
        v-model="content"
        ref="QuillEditor"
        @change="onEditorChange($event)"
        :options="editorOption">
      </quill-editor>
    </div>
    <button @click="submit" :class="buttonClass">提交</button>
  </div>
</template>

<script>
  import Router from 'vue-router';
  import api from '../../base/api';
  import Alert from '../../base/mask.js';
  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "record",
    data() {
      return {
        title: '',
        content: '',
        buttonClass: 'dis',
        editorOption: {
          modules:{
            toolbar:[
              ['bold', 'italic', 'underline'],        // toggled buttons
              ['blockquote', 'code-block','image'],
              [{ 'indent': '-1'}, { 'indent': '+1' }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }]
            ]
          }
        }
      }
    },
    components: {
      quillEditor
    },
    mounted() {
      this.inputChange();
      console.log(this.content)
      // var editor = new E('#wangeditor')
      // editor.create()
    },
    methods: {
      postPubArtical: function () {
        let self = this;
        let title = this.title;
        let content = this.content;

        let promise = $.ajax({
          url: api.pubArtical(),
          type: 'post',
          dataType: 'json',
          headers: {
            Accept: "application/json; charset=utf-8",
            Authentication: self.$store.state.userInfo.token
          },
          data: {
            title,
            content,
            uid: self.$store.state.userInfo.uid
          }
        });
        promise.done(function (res) {
          if (res.code == '000') {
            new Alert({
              content: '提交成功'
            }).create()

          } else {
            new Alert({
              content: res.msg
            }).create()
          }
          ;
        })
        promise.fail(function (res) {
          new Alert({
            content: '你家没网了'
          }).create()

        })
      },
      onEditorChange(event){
        console.log(event)
      },
      submit: function () {
        if (this.title && this.content) {
          this.postPubArtical()
        } else {
          new Alert({
            content: '题目和内容不能为空'
          }).create()
        }
      },
      inputChange: function () {

        if (this.title && this.content) {
          this.buttonClass = 'on'
        } else {
          this.buttonClass = 'dis'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../less/global.less";

  button{
    width: 200px;
    height: 100px;
    display: block;
    background:@color-green-bg;
  }
  .group{
    height:92px;
    font-size:36px;
  }
  .group input{
    height:92px;
    font-size:36px;
  }
  .quillEditor{
    height: 700px;
  }
  .quill-editor{
    height: 500px
  }
</style>
