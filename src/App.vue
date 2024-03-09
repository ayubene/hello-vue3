<template>
    <Person ref="temp"/>
    <button @click="showLog">test</button>   
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue';
    import {ref} from 'vue'
    // export default {
    //     name:'App',
    //     components:{Person}
    // }

    let temp = ref()

    // 如果components的文件内不使用defineExpose，是无法获取到组件标签内的数据的
    function showLog(){
        console.log(temp.value);
    }
</script>
