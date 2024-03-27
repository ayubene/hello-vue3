<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkStore.talkList">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup name="LoveTalk" lang="ts">
    import { reactive } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid'
    import { useTalkStore } from '@/store/talk'

    let talkStore = useTalkStore()
    // let talkList = reactive([
    //     {id:'talk01',title:'asdfghjkl'},
    // ])

    talkStore.$subscribe((mutate,state)=>{
        // localStorage.setItem('talkList',state.talkList)
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })
    function getTalk() {
        talkStore.addList()
    }
</script>

<style>
    .talk {
        background-color: pink;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
    }
    select,button {
        margin: 5px;
        height: 25px;
    }
</style>