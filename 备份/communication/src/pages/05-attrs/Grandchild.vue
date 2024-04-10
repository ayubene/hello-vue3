<template>
    <div class="child">
        <h3>Grandchild</h3>
		<h4>{{ a }}</h4>
		<h4>{{ b }}</h4>
		<h4>{{ c }}</h4>
		<h4>{{ x }}</h4>
		<h4>{{ y }}</h4>
		<button @click="changeA(b)">changeA</button>
    </div>
</template>

<script setup name="Grandchild">
	defineProps(['a','b','c','x','y','changeA'])
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: pink;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
