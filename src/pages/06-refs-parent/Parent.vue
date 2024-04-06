<template>
    <div class="parent">
        <h3>parent</h3>
		<h3>house {{ house }}</h3>
		<button @click="changeToy">change toy</button>
		<button @click="changeComputer">change computer</button>
		<button @click="addBook($refs)">add book</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
		
    </div>
</template>

<script setup lang="ts">
	import Child1 from './Child1.vue';
	import Child2 from './Child2.vue';
	import { ref } from 'vue';

	let house = ref(5)
	let c1 = ref()
	let c2 = ref()

	defineExpose({house})

	function changeToy(){
		c1.value.toy = 'another toy'
	}
	function changeComputer(){
		c2.value.computer = 'another computer'
	}
	function addBook(refs){
		for (const key in refs) {
			refs[key].book += 4
		}
	}


</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
	button {
		margin: 5px;
		margin-bottom: 10px;
	}
</style>
