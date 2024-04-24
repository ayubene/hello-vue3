<template>
    <div class="parent">
        <h3>parent</h3>
		<Child1/>
		<Child2/>
    </div>
</template>

<script setup lang="ts">
	import Child1 from './Child1.vue';
	import Child2 from './Child2.vue';
	import { ref } from 'vue';
</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
