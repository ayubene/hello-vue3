<template>
    <div class="child">
        <h3>child</h3>
		<h3>car from parent: {{ car }}</h3>
		<button @click="sendToy(toy)">sendToy</button>
    </div>
</template>

<script setup>
	import { ref } from 'vue';
	import { defineProps } from 'vue';
	defineProps(['car','sendToy'])

	let toy = ref('a bear')
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
