<template>
	<div class="home">
    <div class="banner">
      <img src="../../assets/logoin-bg.png" />
    </div>
		<div class="hot">
			<h1>热门推荐</h1>
			<div v-for="item in list" class="content" @click="goArticle(item.aid)">
				<div class="text">
					<dl>
						<dd>
							<h1>{{item.title}}</h1>
							<p>{{item.content}}</p>
						</dd>
						<dt><img :src="item.avatar"></dt>
					</dl>
				</div>
				<div class="button">
					<p>*{{item.prate}}.收藏</p>
					<p>*{{item.comments}}.评论</p>
					<h1>{{item.username}}.{{item.time}}</h1>
				</div>
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import Router from 'vue-router';
import api from  '../../base/api';
Vue.use(Router);
export default {
	name:"Home",
	data(){
		return {
			title:"首页",
			list:[]
		}
	},
	mounted:function(){
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
	        	if (res.code == '000') {
	        		self.list = res.data.artList
	        	};
	            
	        })
	        promise.fail(function(res){
	            
	        }) 
		},
		goArticle(aid){
			this.$router.push({ path: '/articleItem/'+aid}) // 
		}
	}

}
</script>
<style lang="less">
@color-grey-font:#cccccc;
@color-grey-border:#b7b7b9;
@color-green-bg:#22cb9a;
.flex(@justify:center,@align:center){
  justify-content:@justify;
  align-items:@align;
  display: flex;
}
.padding(@num){
	padding:@num;
	box-sizing:border-box;
}
.user{
  flex-direction:column;
  & img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
  }
  .flex();
}
.banner{
  width: 100%;
  height: 440px;
  background: @color-green-bg;
  .flex();
  img{
    width: 611px;
    height: 262px;
  }
}
.hot{
  &>h1{
  	width:100%;
  	color:#212121;
    font-size:30px;
    border-bottom:1px solid @color-grey-border;
    .padding(20px);
    margin: 20px 0;
  }
  .content{
  	.padding(20px 50px 70px 50px);
  	.text{
  		dl{
  			.flex(space-between,flex-start);
  			dt{
  				width:160px;
  				height: 120px;
  				margin-left: 60px;
  				img{
  					display: block;
  					width: 100%;
  					height: 100%;
  				}
  			}
  			dd{
  				h1{
  					color: #212121;
  				}
  				flex:1;
  				font-size:32px;
  				color: #000000;
  				line-height: 60px;
  				p{
  					margin: 20px 0 30px;
		  			font-size: 26px;
		  			line-height: 40px;
		  			color:#888;
		  			display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
		  		}
  			}
  		}
  		
  	}
  	/*box-sizing:border-box;
    height:60px;
    line-height:60px;
    font-size:21px;
    border-top:1px solid @color-grey-border;
    /*.flex(space-between,center);
    flex:1;*/
  }
  .button{
  	.flex(space-between,center);
  	color:#666;
  	p{
  		margin-left: 20px;
  	}
  }
}
</style>



