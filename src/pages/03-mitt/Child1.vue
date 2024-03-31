<template>
    <div class="child">
        <h3>child</h3>
		<h3 v-show="toy">{{ toy }}</h3>
    </div>
</template>

<script setup>
	import { onUnmounted, ref } from 'vue';
	import emitter from '@/utils/emitter';
	let toy = ref('')

	emitter.on('send-toy',(val)=>{
		toy.value = val
	})

	onUnmounted(()=>{
		emitter.off('send-toy')
	})
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
