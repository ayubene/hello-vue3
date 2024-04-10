<template>
    <div class="child">
        <h3>child</h3>
		<button @click="emit('send-toy',toy)">send-toy</button>
    </div>
</template>

<script setup>
	import { ref } from 'vue';
	let toy = ref('a kind toy')

	const emit = defineEmits(['send-toy'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
