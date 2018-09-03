<template>
	<div>
		<div class="user">
			<img src="">
			<p>name</p>
		</div>
		<div v-for="item in list">
			{{item.name}}
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




