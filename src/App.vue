<template>
    <div class="container-fluid wrapper">
        <h1 class="title">Vue3组件通信</h1>
        <hr>
        <div class="row">
            <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <!-- 导航区 -->
                <router-link  to="/props">1 props</router-link>
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