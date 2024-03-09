<template>
    <div class="person">
        <h1>this</h1>
        <h2 ref="title">that</h2>
        <button @click="showLog">changeTemp</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,defineExpose} from 'vue'
    
    let title = ref()

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showLog(){
        console.log(title.value); 
    }

    // 将数据a,b暴露给根组件，隐藏c
    defineExpose({a,b})
   
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    
    button {
        margin : 0 5px;
    }

    li {
        font-size : 20px;
    }
</style>