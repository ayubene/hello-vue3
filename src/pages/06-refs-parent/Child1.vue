<template>
    <div class="child">
        <h3>child</h3>
		<h3>{{ toy }}</h3>
		<h3>{{ book }}</h3>
		<button @click="minusHouse($parent)">minusHouse</button>
    </div>
</template>

<script setup>
	import { onUnmounted, ref } from 'vue';
	let toy = ref('toytoy')
	let book = ref(9)

	defineExpose({toy,book})

	function minusHouse(parent){
		parent.house -= 1
	}

</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
