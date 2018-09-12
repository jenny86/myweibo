<template>
	<div class="article">
		<p @click="showSlide" class="slideMenu">三</p>
		<div class="hot">
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
					<p>*{{item.prate}}.赞</p>
					<p>*{{item.comments}}.收藏</p>
					<h1>{{item.username}}.{{item.time}}</h1>
				</div>
			</div>
		</div>	
		<transition name="slide-fade">
			<div class="menu-mask" v-if="isShowSlide">
				
				<ul class="slideBar">
					<li>全部分类</li>
					<li>分类一</li>
					<li>分类二</li>
					<li>添加分类</li>
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
			isShowSlide:false
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
			router.push({ path: '/articleItem/'+aid}) // 
		}
	}
}

</script>
<style lang="less">
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
.slideMenu{
	width: 50px;
	height: 50px;
	background: green;
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
	}
	.close{
		width: 100px;
		height: 100px;
		background: red;
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