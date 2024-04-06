<template>
    <div class="parent">
        <h3>parent</h3>
		<h3>money {{ money }}</h3>
		<ChildOrGrandchild/>
    </div>
</template>

<script setup lang="ts">
	import ChildOrGrandchild from './ChildOrGrandchild.vue';
	import { provide, ref } from 'vue';

	let money = ref(20000)
	function changeMoney(val){
		money.value -= val
	}

	provide('moneyContext',{money,changeMoney})
</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
