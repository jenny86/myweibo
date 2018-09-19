<template>
	<div class="article">
		<p @click="showSlide" class="slideMenu">
      <span></span>
      {{title}}
    </p>

		<div class="list">
			<div v-for="item in list" class="content" @click="goArticle(item.aid)">
        <h1>{{item.time}} 在 {{item.type}} 发布了文章 </h1>
        <p>{{item.title}}</p>
        <div>
          <span>赞 {{item.store}} </span>
          <span>评论 {{item.comments}}</span>
        </div>
      </div>
		</div>
		<transition name="slide-fade">
			<div class="menu-mask" v-if="isShowSlide">

				<ul class="slideBar">
          <li @click="changeTab('全部分类')">全部分类</li>
          <li v-for="(menu,i) in menuList" @click="changeTab(menu)" :key="i">{{menu}}</li>
          <li class="add">添加分类</li>
          <li>添加文章</li>
				</ul>
				<div class="close" @click="closeSlide"></div>
			</div>
		</transition>
	</div>
</template>

<script type="text/javascript">

import api from  '../../base/api';

export default{
	name:"Article",
	data(){
		return {
			list:[],
			isShowSlide:false,
      menuList:['分类一','分类二'],
      title:'全部分类'
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData(){
			let self = this;
			let promise = $.ajax({
	            url:api.ArticalList(),
	            type:'post',
	            dataType:'json',
	            data: {
                    page:1,
                    suid:null
	            }
	        });
	        promise.done(function(res){
	            self.list = res.data.artList
	        })
	        promise.fail(function(res){
	            
	        }) 
		},
		showSlide(){
			this.isShowSlide = true;
		},
		closeSlide(){
			this.isShowSlide = false;
		},
		goArticle(aid){
      this.$router.push({ path: '/articleItem/'+aid})
		},
    changeTab(title){
		  this.title = title;
      this.isShowSlide = false;
    }
	}
}

</script>
<style lang="less">
@import "../../less/global.less";
.slideMenu{
	height:80px;
  margin:30px;
  .flex(flex-start,center);
  font-size:28px;
  span{
    display: block;
    width: 50px;
    height: 50px;
    background: url("../../assets/images/menu.png") no-repeat center/100%;
    margin-right: 20px;
  }
}
.list{
  margin:0 30px 30px;
  .padding(0 30px);
  border: 1px solid @color-grey-border;
  .content{
    border-bottom:1px solid @color-grey-border ;
    .padding(30px 0);
    h1{
      font-size: 20px;
      color:#999;
      line-height: 28px;
    }
    p{
      font-size: 28px;
      line-height: 34px;
      color: @color-green-bg;
      margin: 6px 0 8px;
    }
    &>div{
      .flex(flex-start,center);
      span{
        display: block;
        margin-right: 10px;
        font-size: 20px;
        color:#999;
        line-height: 28px;
      }
    }
  }
}
.menu-mask{
	position:fixed;
	top:0;
	left:0;
	bottom:0;
	right:0;
	z-index:10;
	.flex(space-between,flex-start);
	background:rgba(0,0,0,0.5);
	.slideBar{
		width:600px;
		background:#ffffff;
		height:100%;
    .padding(20px);
    li{
      font-size:28px;
      padding: 15px 0;
      &.add{
        padding:20px 0 15px;
        border-top: 1px solid @color-grey-border;
      }
    }


	}
	.close{
		width: 100px;
		height: 100px;
		background: url("../../assets/images/menu.png") no-repeat center/100%;
	}
}

.slide-fade-enter-to,.slide-fade-leave-to{
	transition: transform 0.3s;
	transform:translate(0px,0px);
}
.slide-fade-enter,.slide-fade-leave-to{
	opacity: 0;
	-webkit-transform:translate(-286px,0px);
	transform:translate(-286px,0px);
	-webkit-transition:opacity 0.3s ease-in-out 0.3s,-webkit-transform 0.3s ease-in-out;
	transition: opacity 0.3s ease-in-out 0.3s,transform 0.3s ease-in-out;
}
</style>
