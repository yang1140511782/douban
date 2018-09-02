<template>
	<div id="app">
		<div id="nav">
			<Header />
		</div>
		<router-view/>
	</div>
</template>

<script>
import Header from '@/components/container/header/header'
export default {
	components: {
		Header
	}
}  
</script>

<style lang="scss">
@import '@/style/common.scss';
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;		
	

	#nav{
    	border-bottom: 0.5px solid #ccc;
		background: white;
	}
}
</style>
