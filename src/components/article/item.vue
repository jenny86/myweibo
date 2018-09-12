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
		<div class="buttons">
			<button class="like">点赞 {{data.store}}</button>
			<button class="store">收藏 {{data.store}}</button>
		</div>
		<div class="commentList">
			<h1>{{data.store}}条评论</h1>
			<ul>
				<li></li>

			</ul>
		</div>
		<div class="comment">
			<h1>评论</h1>
			<div>
				<textarea placeholder="文明社会，理性评论" rows="3"></textarea>
				<button>发布评论</button>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
import api from  '../../base/api';
export default{
	name:"ArticleItem",
	data(){
		return {
			data:{}
		}
	},
	mounted(){
		this.getData();
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
                    aid:this.$route.params.aid
	            }
	        });
	        promise.done(function(res){
	        	if (res.code == '000') {
	        		self.data = res.data;
	        	};
	            
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
		goArticle(){
			
		}
	}
}

</script>
<style lang="less">
@color-grey-font:#cccccc;
@color-grey-border:#b7b7b9;
@color-green-bg:#22cb9a;
@color-red-bg:#BF7158;
.flex(@justify:center,@align:center){
  justify-content:@justify;
  align-items:@align;
  display: flex;
}
.padding(@num){
	padding:@num;
	box-sizing:border-box;
}
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
			.padding(32px 0)
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