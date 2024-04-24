<template>
    <input type="text" :value="uName" @input="emit('update:uName',(<HTMLInputElement>$event.target).value)">
    <input type="text" :value="pwd" @input="emit('update:pwd',(<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts" name="TestUIInput">
	import { ref } from 'vue';
    const props = defineProps(['uName','pwd'])
    const emit = defineEmits(['update:uName','update:pwd'])
</script>

<style scoped>
	input{
		/* background-color:rgb(165, 164, 164); */
		/* padding: 20px; */
		border-radius: 10px;
        border: 2px solid black;
        background-image: linear-gradient(60deg,pink,skyblue,orange);
	}
</style>
