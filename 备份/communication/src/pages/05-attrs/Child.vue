<template>
    <div class="child">
        <h3>child</h3>
		<Grandchild v-bind="$attrs"/>
    </div>
</template>

<script setup name="Child">
	import Grandchild from './Grandchild.vue';
	defineProps([''])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
