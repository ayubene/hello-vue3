<template>
    <div class="container-fluid wrapper">
        <h1 class="title">Vue3组件通信</h1>
        <hr>
        <div class="row">
            <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3 list-group">
                <!-- 导航区 -->
                <router-link active-class="active" class="list-group-item" to="/props">1 props</router-link>
                <router-link active-class="active" class="list-group-item" to="/custom-event">2 custom-event</router-link>
                <router-link active-class="active" class="list-group-item" to="/mitt">3 mitt</router-link>
                <router-link active-class="active" class="list-group-item" to="/v-model">4 v-model</router-link>
                <router-link active-class="active" class="list-group-item" to="/attrs">5 attrs</router-link>
            </div>
            <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
				<div class="panel-body">
					<!-- 占位一个展示区 -->
					<router-view></router-view>
				</div>
			</div>
        </div>
    </div>
</template>

<script setup name="App" lang="ts">
import { RouterLink,RouterView } from 'vue-router';


</script>


<style>
	.wrapper .title {
		padding: 20px;
		text-align: center;
		min-width: 610px;
	}
	.wrapper .small{
		font-size: 15px;
	}
	.wrapper .list-group-item {
		min-width: 230px;
	}
</style>