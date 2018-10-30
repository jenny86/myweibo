<template>
	<div class="articleItem">
		<dl class="authorInfo">
			<dt><img :src="data.avatar"></dt>
			<dd>
				<h1><span>{{data.username}}</span> 发布于 {{data.time}}</h1>
				<p>*收藏{{data.store}}</p>
			</dd>
		</dl>
		<h1 class='title'>{{data.title}}</h1>
		<div class="content">{{data.content}}</div>
		<div class="buttons" v-if="!isSelf">
			<button class="like">点赞 {{data.prate}}</button>
			<button class="store">收藏 {{data.store}}</button>
		</div>
		<div class="commentList">
			<h1>{{data.comments}}条评论</h1>
			<ul>
				<li v-for="(list,i) in commentList" :key="i">
          <div class="userinfo">
            <img :src="list.avatar"/>
            <p>{{list.username}}</p>
            <span> · {{list.time}}</span>
          </div>
          <div class="content">
            <p>{{list.content}}</p>
            <ol>
              <li v-for="(item,k) in list.relist">
                <p>{{item.replycontent}}</p>
                <div>
                  —— <span>{{item.replyname}}</span> · {{item.replytime}}
                </div>
              </li>
              <li class="addcomment">
                <!--<span>添加回复</span>-->
                <div>
                  <textarea type="text" placeholder="文明社会，理性评论" ></textarea>
                  <button>添加回复</button>
                </div>

              </li>
            </ol>
          </div>
        </li>

			</ul>
		</div>
		<div class="comment" v-if="!isSelf">
			<h1>评论</h1>
			<div>
				<textarea placeholder="文明社会，理性评论" rows="3"></textarea>
				<button>发布评论</button>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
import Router from 'vue-router';
import api from  '../../base/api';
import Alert from '../../base/mask.js'

export default{
	name:"ArticleItem",
	data(){
		return {
			data:{},
      commentList:[],
      isSelf:false
		}
	},
	mounted(){
		this.getData();
    if (this.$route.query.uid == this.$store.state.userInfo.userid){
      this.isSelf = true
    }
	},
	methods:{
		getData(){
			let self = this;
			let promise = $.ajax({
	            url:api.Articaldetail(),
	            type:'post',
	            dataType:'json',
	            data: {
                    page:1,
                    aid:this.$route.query.aid
	            }
	        });
	        promise.done(function(res){
	        	if (res.code == '000') {
	        		self.data = res.data;
	        		self.getComment()
	        	}else{
	        	  new Alert({
                content:res.msg
              })
            }
	        })
	        promise.fail(function(res){
            new Alert({
              content:"你家没网"
            })
	        }) 
		},
    getComment:function(){
      let self = this;
      let promise = $.ajax({
        url:api.commentList(),
        type:'post',
        dataType:'json',
        data: {
          page:1,
          aid:this.$route.query.aid
        }
      });
      promise.done(function(res){
        if (res.code == '000') {
          self.commentList = res.data.replyList;
        } else {
          new Alert({
            content:res.msg
          })
        };

      })
      promise.fail(function(res){
        new Alert({
          content:"你家没网"
        })
      })
    },

		showSlide(){
			this.isShowSlide = true;
		},
		closeSlide(){
			this.isShowSlide = false;
		},
		goArticle(){
			
		}
	}
}

</script>
<style lang="less">
@import "../../less/global.less";

.wrap .child-view.articleItem{
	.padding(132px 40px 140px);
	.authorInfo{
		.flex(flex-start,center);
		dt{
			width: 80px;
			height: 80px;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20px;
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		dd{
			font-size:24px;
			span{
				color: @color-green-bg;
				font-size:24px;
				line-height: 32px;
				font-weight: bold;
			}
			p{
				color:@color-red-bg;
			}
		}
	}
	h1.title{
		.padding(40px 0);
		font-size: 50px;
		border-bottom: 1px solid @color-grey-border;
	}
	.content{
		padding: (20px);
		font-size: 20px;
	}
	.buttons{
		.flex(space-between,center);
		width:432px;
		margin:50px auto;
		button{
			display: block;
			width: 206px;
			height:86px;
			border: 1px solid @color-grey-border;
			background:#ffffff;
			border-radius:10px;
		}
		button.like{
			background:@color-green-bg;
			color: #ffffff;
		}
	}
	.commentList,.comment{

		h1{
			font-size: 30px;
			font-weight: bold;
			.padding(20px 0)
		}
	}
	.commentList{
		li{
			border-top:1px solid @color-grey-border;
			.padding(32px 0);
      .userinfo{
        display:flex;
        .flex(flex-start,cetenter);
        font-size: 26px;
        height: 64px;
        line-height: 64px;
        p{
          color: @color-green-bg;
          margin-right: 10px;
        }
        span{
          font-size: 20px;
          color:#999;
        }
        img{
          width: 64px;
          height: 64px;
          display: block;
          margin-right:47px;
        }

      }
      .content{
        margin-left:101px;
        ol{
          .padding(0 20px);
          margin-top:20px;
          font-size: 26px;
          background-color: #FAFAFA;
          color: #666;
          li{
            padding-bottom: 20px;
            padding-top: 20px;
            border: none;
            border-bottom: 1px solid rgba(0,0,0,0.09);
            word-break: break-word;
            line-height: 32px;
            &.addcomment{

              color:@color-green-bg ;
              font-size: 20px;
              &>div{
                margin-left: 0;
                .flex(flex-start,center);
                textarea{
                  display: block;
                  flex: 1;
                  min-height:70px;
                  max-height:264px;
                  overflow: hidden;
                  overflow-wrap: break-word;
                  height:64px;
                  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                  border-radius: 10px;
                  line-height: 64px;
                  text-align: center;
                  margin-right: 20px;

                }
                button{
                  display: block;
                  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                  height: 64px;
                  width: 168px;
                  background-color: #fff;
                  border-color: #ccc;
                  border-radius: 10px;
                  line-height: 64px;
                }
              }

            }

            p,div{
              margin-left: 66px;
              color: #999;
              font-size:26px;
              word-break: break-word;

            }
            div{
              font-size: 24px;
             span{
               color: @color-green-bg;
             }
            }
          }
        }
      }
		}
	}
	.comment{
		&>div{
			background:#FAFAFA;
			.padding(20px);

			textarea{
				margin-top: 20px;
				display: block;
				width: 100%;
				height: 200px;
				border-radius: 8px;
				background:#ffffff;
				border: 1px solid @color-grey-font;
				.padding(10px);
				font-size: 24px;
				line-height: 32px;
			}
			button{
				line-height: 64px;
				display: block;
				width: 100%;
				height: 64px;
				background:@color-green-bg;
				color: #ffffff;
				text-align: center;
				margin: 20px 0;
			}
		}
	}
}

</style>
