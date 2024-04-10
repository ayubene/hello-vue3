<template>
    <div class="parent">
        <h3>parent</h3>
		
		<div class="d-flex justify-content-around">
			<Child v-slot:s1="params">
				<h5 class="bg-primary text-light">{{ params }}</h5>
			</Child>
			<Child v-slot="params">
				<ol>
					<li v-for="item in params.games" :id="item.id">{{ item.name }}</li>
				</ol>
			</Child>
			<Child v-slot:s1="params" title="标题3">
				<h2 v-for="item in params.games" :id="item.id">{{ item.name }}</h2>
			</Child>
		</div>
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
	img,video {
		width: 100%;
	}
</style>
