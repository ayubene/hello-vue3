<template>
    <div class="app">
        <Header/>
        <div class="nav">
            <RouterLink replace to="/home" active-class="active">首页</RouterLink>
            <RouterLink replace :to="{ name:'/nameAbout' }" active-class="active">关于</RouterLink>
            <RouterLink replace :to="{ path:'/news' }" active-class="active">新闻</RouterLink>
        </div>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import { RouterView,RouterLink } from 'vue-router'
    import Header from './components/Header.vue'
</script>

<style>
    h2{
        padding: 20px 0;
        border: 1px solid grey;
        border-radius: 5px;
        text-align: center;
        background: linear-gradient(to right, skyblue, pink);
    }

    .nav {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
    }

    .nav a {
        /* width: 80px;
        height: 40px; */
        padding: 10px 35px;
        border: 1px solid grey;
        border-radius: 5px;
        text-decoration: none;
        color: black;
    }

    .nav a.active {
        background-color: rgb(207, 239, 252);
    }

    .nav a:hover {
        background-color: rgb(207, 239, 252);
    }

    .content {
        margin: 20px;
        border: 1px solid rgb(160, 159, 159);
        height: 300px;
        display: flex;
        align-items: center;
    }

    .content a {
        text-decoration: none;
        color: rgb(66, 104, 66);
        font-weight: 00;
        font-size: 16px;
    }

    .content a::marker {
        color: rgb(66, 104, 66);
    }
</style>