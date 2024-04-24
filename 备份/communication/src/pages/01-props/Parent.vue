<template>
    <div class="parent">
        <h3>parent</h3>
		<h3>car: {{ car }}</h3>
		<h3 v-show="toy">{{ toy }}</h3>
		<Child :car="car" :sendToy="getToy"/>
    </div>
</template>

<script setup lang="ts">
	import Child from './Child.vue';
	import { ref } from 'vue';

	let car = ref('a car')
	let toy = ref('')
	function getToy(val) {
		toy.value = val
	}
</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
