<template>
    <div class="child">
        
		<slot name="s1" :games="games" x="aaa" y="bbb"></slot>
		<slot :games="games"></slot>
    </div>
</template>

<script setup name="Child">
	import { reactive } from 'vue';

	let games = reactive([
		{name:'game1',id:'lll01'},
		{name:'game2',id:'lll02'},
		{name:'game3',id:'lll03'},
		{name:'game4',id:'lll04'},
	])

</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
		width: 200px;
		height: 300px;
	}
</style>
