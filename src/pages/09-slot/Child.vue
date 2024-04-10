<template>
    <div class="child">
        
		<slot name="s1">default1</slot>
		<slot name="s2">default2</slot>
    </div>
</template>

<script setup name="Child">
	defineProps(['title'])
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
