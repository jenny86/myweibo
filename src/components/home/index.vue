<template>
	<div>
		<div class="user">
			<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2613739308,3768584531&fm=27&gp=0.jpg">
			<p>jenny</p>
			<div class="aboutMe">
				关于我，我的简介，想说啥说啥
			</div>
		</div>
		<div class="hot">
			<h1>热门推荐</h1>
			<div v-for="item in list" class="content">
				<h1>{{item.name}}</h1>
				<div class="button">
					<p>点赞</p>
					<p>收藏</p>
				</div>
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
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
		getData:function(){
			let self = this;
			let promise = $.ajax({
	            url:'https://external.pengpengla.com/h5/hits/optionList',
	            type:'post',
	            dataType:'json',
	            data: {
	                id: '3',
                    pageSize: 20,
                    page:1,
                    userToken:null
	            }
	        });
	        promise.done(function(res){
	            self.list = res.data
	        })
	        promise.fail(function(res){
	            
	        }) 
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
.hot{
  &>h1{
    font-size:30px;
  }
  .content{
  	.padding(0 20px);
  	box-sizing:border-box;
    height:60px;
    line-height:60px;
    font-size:21px;
    border-top:1px solid @color-grey-border;
    .flex(space-between,center);
    flex:1;
  }
  .button{
  	.flex(space-between,center);
  	p{
  		margin-left: 20px;
  	}
  }
}
</style>



