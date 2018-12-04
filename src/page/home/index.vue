<template>
	<div class="home">
    <div class="banner">
      <img src="../../assets/images/logoin-bg.png" />
    </div>
		<div class="hot">
			<h1>热门推荐</h1>
			<div v-for="item in this.$store.state.artList" class="content" @click="goArticle(item.id,item.uid)">
				<div class="text">
					<dl>
						<dd>
							<h1>{{item.title}}</h1>
							<p>{{item.content}}</p>
						</dd>
						<dt><img :src="item.img"></dt>
					</dl>
				</div>
				<div class="button">
					<p @click="goLike()">
            <img v-if="Number(item.prate) == 1" src="../../assets/images/praise_fill.png"/>
            <img v-else src="../../assets/images/praise.png"/>
            *{{item.comment_num}}
          </p>
					<p>
            <img v-if="Number(item.store) == 1" src="../../assets/images/collection_fill.png"/>
            <img v-else src="../../assets/images/collection.png"/>
            *{{item.read_num}}
          </p>
					<h1>{{item.username}}.{{item.publish_time}}</h1>
				</div>
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import Router from 'vue-router';
import api from  '../../base/api';
import Mask from '../../base/mask.js';


Vue.use(Router);
export default {
	name:"Home",
	data(){
		return {
      html:'<p>选择你想要挑战的明星</p><img src="https://www.baidu.com/link?url=SI0acEAdVnSUIvbUd8DOU-AF-KPHC120Y6NWMufAf2F4RzmMqtTpHu4PvpjaLTqh2czHBFnfE8RHCZtwPU-_0AVQV4TKBwZJN954dUVJVWRpCSjLjfrwr-YSyzj0lMdZz4_0__prur_cshGqXzVIbTiOeMmzt-fCYTrBJA1WNYbANpdu7Vm5OA6uL-OQ3_omAgGmbnqIbrvzGor4nAsVk-LiXN598p67CskC-8_CefFETwgBtd5oBVZ1QdGHFsAlmJvxF8pfADYxFvAGYZRpEfjSBudhoSY6CORNSR6tp4uNiokLLGZfkqnHKSiTwHntcUZskqkMiAJbI4IZBH7FMEKFJc3088bT3vBzZXBarOUyZmpISxGi2mjvO5nJ9GoN-vvUJ-aEyicXDdU7luiRVq_AXVK4LyzZIunlFXeS_Lz_nDQ-YDQSQOjznyHauNttRUa9C4vW5BSNJZWdZzGQtnaDnscw_tTByaRytzrdjnsCFYYSWfrFoqfredmHDnnZPf3jtgp5FHrxEdU8qPzHCqenvjPM4Q7BuXpNr-OtKbPDpM9Ep26PwOZ1OY2CY6zddi9gye96J5ZfBttGN5j0n8APLeF28YvT3fuoYr7QCczWdXwlmgsWmaFlJ1eOHNt3-OXbMSXSHUFIANV63_g6CRhfYyUgUe0ouy8z_S8snCId2kg55nldT1VKNfyv4Z8vOGNhrvzaz3oiqDOwHhTaw_&timg=&click_t=1541746959974&s_info=1367_767&wd=&eqid=f04f62db0008219a000000035be5310d" />',
    }
	},
	mounted:function(){
    this.$store.dispatch('artList',this.$store.state.userInfo.userid);
	},
	methods:{
		goArticle(did,project_id){
			this.$router.push({
        path: '/articleItem/',
        query:{
          did,
          project_id
        }
			})
		}

	}

}
</script>
<style lang="less">
@import "../../less/global.less";

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
  		margin-right: 20px;
      .flex(flex-start,center);
      img{
        display: block;
        width:40px;
        height:40px;
      }
  	}
    h1{
      width: 346px;
      overflow: hidden;/*内容超出后隐藏*/
      text-overflow: ellipsis;/* 超出内容显示为省略号*/
      white-space: nowrap;/*文本不进行换行*/
    }
  }
}
</style>



