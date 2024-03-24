<template>
    <div class="count">
        <h2>求和：{{ sum }},放大10倍：{{ bigSum }}</h2>
        <select name="num" v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button class="add" @click="add">add</button>
        <button class="sub" @click="sub">sub</button>
    </div>
</template>

<script setup name="Count" lang="ts">
    import { ref } from 'vue';
    import { useCountStore } from '@/store/count'
    import { storeToRefs } from 'pinia'

    let countStore = useCountStore()
    let { sum,bigSum } = storeToRefs(countStore)
    // let sum = ref(0) // 和
    let n = ref(0)  // 用户选择的数字

    function add() {
        // 方式1
        // countStore.sum += n.value
        // 方式2
        // countStore.$patch({
        //     sum:888,
        //     title:'aaa'
        // })
        // 方式3
        countStore.increment(n.value)
        // sum.value += n.value
    }

    function sub() {
        // sum.value -= n.value
        countStore.minus(n.value)
    }
</script>

<style>
    .count {
        background-color: skyblue;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 20px;
        margin: 0 20px;
    }
    select,button {
        margin: 5px;
        height: 20px;
    }
</style>