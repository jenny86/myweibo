

import Vue  from 'vue';
import Vuex from 'vuex';
import api from  '../base/api';
import cache from '../base/cache';
import Alert from '../base/mask'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artList:[],
    userInfo:{
      userid:null
    }
  },
  mutations: {
    GET_ArticalList(state, artList) {
      //console.log(state.userInfo.userid)
      state.artList= artList;
    },
    GET_userInfo(state){
      let cacheData = cache.getCache('MY_WEIBO'),userInfo;
      if (cacheData){
        state.userInfo = cacheData;
      } else {
        state.userInfo = {
          userid:null
        }
      }
      // state.userInfo = userInfo;
    },
    LOGIN(state,userInfo){
      state.userInfo = userInfo;
    },
    QUIT_LOGIN(state){
      state.userInfo={
        userid:null
      }
      localStorage.clear();
    },
    GET_myArt(state,myArt){
      state.myArt = myArt
    }
  },
  actions: {
    artList(context, suid) {
      console.log(api.ArticalList())
      let promise = $.ajax({
        // url:'http://local.pengpengla.cn:3000/hotlist',
        url: api.ArticalList(),
        type:'post',
        dataType:'json',
        data: {
          page:1,
          suid
        }
      });
      promise.done(function(res){
        if (res.code == '000') {
          context.commit('GET_ArticalList',res.data.artList);
        }else{
          let alert = new Alert({
            content:res.msg
          }).create()
        };

      })
      promise.fail(function(res){
        let alert = new Alert({
          content:'你家没网了'
        }).create()
      })

    },
    login({commit},userInfo){
      commit('LOGIN',userInfo)
    },
    getUserInfo({commit}){
      commit('GET_userInfo')
    },
    quitLogin({commit}){
      commit('QUIT_LOGIN')
    },
    getMyArt({commit},data){
      let promise = $.ajax({
        url:api.MyArtical(),
        type:'post',
        dataType:'json',
        headers: {
          Accept: "application/json; charset=utf-8",
          Authentication:data.token
        },
        data: {
          page:1,
          suid:data.suid
        }
      });
      promise.done(function(res){
        if (res.code == '000') {
          commit('GET_myArt',res.data.artList);
        }else{
          let alert = new Alert({
            content:res.msg
          }).create()
        }

      })
      promise.fail(function(res){
        let alert = new Alert({
          content:'你家没网了'
        }).create()
      })
    }
  },
  getters: {
    getApp: (state) => state,
  }
})
