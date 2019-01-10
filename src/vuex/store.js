

import Vue  from 'vue'
import Vuex from 'vuex'
import api from  '../base/api'
import cache from '../base/cache'
import Alert from '../base/mask'
import Promise from '../base/promise'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artList:[],
    userInfo:{
      uid:null
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
          uid:null
        }
      }
      // state.userInfo = userInfo;
    },
    LOGIN(state,userInfo){
      cache.setCache('MY_WEIBO',userInfo)
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
    artList(context) {

      Promise({
        url: api.ArticalList(),
        data: {
              page:1
            },
        succeed:(data)=>{
          context.commit('GET_ArticalList',data);
        }
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
      Promise({
        url: api.ArticalList(),
        data: {
          page:1,
          suid:data.suid
        },
        succeed:(data)=>{
          commit('GET_myArt',res.data.artList);

        }
      })
    }
  },
  getters: {
    getApp: (state) => state,
  }
})
