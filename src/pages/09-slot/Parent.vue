<template>
    <div class="parent">
        <h3>parent</h3>
		
		<div class="d-flex justify-content-around">
			<Child v-slot:s2>
				<h5 class="bg-primary text-light">标题1</h5>
				<ul>
					<li v-for="item in list" :id="item.id">{{ item.name }}</li>
				</ul>
			</Child>
			<Child>
				<template v-slot:s1>
					<h5 class="bg-primary text-light">标题2</h5>
				</template>
				<template v-slot:s2>
					<img :src="imgUrl" alt="">
				</template>
			</Child>
			<Child v-slot:s1 title="标题3">
				<video :src="videoUrl" controls></video>
			</Child>
		</div>
    </div>
</template>

<script setup lang="ts">
	import Child from './Child.vue';
	import { ref,reactive } from 'vue';

	let list = reactive([
		{name:'nameeee',id:'q01'},
		{name:'qqqqq',id:'q02'},
		{name:'rrrrr',id:'q03'},
	])
	let imgUrl = 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
	let videoUrl = 'https://www.bilibili.com/video/BV1Za4y1r7KE?p=61&vd_source=1c47a343db884fd05d34bc9992e2e6fa'
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
