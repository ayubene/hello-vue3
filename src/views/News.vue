<template>
    <div class="news">
        <!-- 导航 -->
        <ul class="news-nav">
            <li v-for="news in newsList">
                <button @click="changePage(news)">查看</button>
                <RouterLink :to="{
                    name:'detail',
                    // path:'news/detail',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content,
                    }
                }">{{ news.id }}</RouterLink>
            </li>
        </ul>
        <!-- 展示 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { RouterLink,useRouter } from 'vue-router';

    const router = useRouter()

    let newsList = reactive([
        {id:'news01',title:'news 01',content:'this is a crazy01 world'},
        {id:'news02',title:'news 02',content:'this is a crazy02 world'},
        {id:'news03',title:'news 03',content:'this is a crazy03 world'},
        {id:'news04',title:'news 04',content:'this is a crazy04 world'},
    ])

    interface NewsInter {
        id:string,
        title:string,
        content:string,
    }
    function changePage(news:NewsInter) {
        router.push({
            name:'detail',
            // path:'news/detail',
            query:{
                id:news.id,
                title:news.title,
                content:news.content,
            }
        })
    }

</script>

<style>
    .news {
        height: 100%;
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    .news>.news-content {
        height: 260px;
        /* width: 1150px; */
        width: 85%;
        border: 1px solid rgb(142, 139, 139);
        margin-left: 30px;
        margin-right: 30px;
        border-radius: 5px;
    }
    .news>.news-nav>li::marker {
        color: rgb(66, 104, 66);
    }
</style>