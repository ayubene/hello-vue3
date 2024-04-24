<template>
    <div class="child">
        <h3>ChildOrGrandchild</h3>
		<h3>money: {{ money }}</h3>
		<button @click="changeMoney(8)">changeMoney</button>
    </div>
</template>

<script setup name="Child">
	import { inject } from 'vue'
	let {money,changeMoney} = inject('moneyContext','default')
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
