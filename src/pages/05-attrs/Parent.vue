<template>
    <div class="parent">
        <h3>parent</h3>
		<Child :a="a" :b="b" :c="c" v-bind="{x:100,y:300}" :changeA="changeA"/>
    </div>
</template>

<script setup lang="ts">
	import Child from './Child.vue';
	import { ref } from 'vue';

	let a = ref(1)
	let b = ref(3)
	let c = ref(5)

	function changeA(val:number) {
		a.value += val
	}
</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
