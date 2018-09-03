<template>
	<div>
		{{message}}
		<button><router-link :to="{path:'my/setname'}">设置昵称</router-link></button>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"My",
		data(){
			return {
				message:"我的"
			}
		}
	}

</script>