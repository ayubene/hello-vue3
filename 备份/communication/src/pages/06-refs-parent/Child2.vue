<template>
    <div class="child">
        <h3>child2</h3>
		<h3>{{ computer }}</h3>
		<h3>{{ book }}</h3>

    </div>
</template>

<script setup>
	import { ref } from 'vue';
	
	let computer = ref('computer')
	let book = ref(6)

	defineExpose({computer,book})

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
