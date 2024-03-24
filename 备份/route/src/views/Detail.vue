<template>
    <ul class="news-list">
        <!-- <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li> -->
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script setup>
    // import { toRefs } from 'vue'
    // import { useRoute } from 'vue-router'
    // const route = useRoute()
    // const { query } = toRefs(route)

    // import { useRoute } from 'vue-router'
    // const route = useRoute()

    import { defineProps } from 'vue'
    defineProps(['id','title','content'])
</script>

<style>
    .news-list {
        list-style: none;
        padding-left: 30px;
    }
    .news-list>li {
        line-height: 30px;
    }
</style>