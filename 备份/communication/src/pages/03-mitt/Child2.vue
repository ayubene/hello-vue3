<template>
    <div class="child">
        <h3>child</h3>
		<h3>child2's toy {{ toy }}</h3>
		<button @click="emitter.emit('send-toy',toy)">send-toy</button>
    </div>
</template>

<script setup>
	import { ref } from 'vue';
	import emitter from '@/utils/emitter';
	
	let toy = ref('a toy')
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
