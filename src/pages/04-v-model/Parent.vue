<template>
    <div class="parent">
        <h3>parent</h3>
		<h4>{{ username }}</h4>
		<h4>{{ password }}</h4>
		<!-- <input type="text" v-model="username">
		<input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

		<TestUIInput v-model:uName="username" v-model:pwd="password"/>
		<!-- <TestUIInput :modelValue="username" @update:modelValue="username = $event"/> -->

    </div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import TestUIInput from './TestUIInput.vue'
	let username = ref('uuuname')
	let password = ref('123456')
</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
