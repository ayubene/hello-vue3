<template>
    <div class="parent">
        <h3>parent</h3>
		<Child type="primary" size="small"/>
    </div>
</template>

<script setup lang="ts">
	import Child from './Child.vue';

</script>

<style scoped>
	.parent{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
