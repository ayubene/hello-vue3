import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from 'nanoid'

// export const useTalkStore = defineStore('talk',{
//     actions:{
//         async addList() {
//             // 连续解构赋值+重命名
//             let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?fomat=json')
//             let obj = {id:nanoid(),title}
//             // talkStore.talkList.unshift(obj)
//             this.talkList.unshift(obj)
//         }
//     },
//     // state是真正存储数据的地方
//     state(){
//         return {
//             talkList:JSON.parse(localStorage.getItem('talkList')) || []
//         }
//     }
// })
import { reactive } from "vue";
export const useTalkStore = defineStore('talk',()=>{
    let talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
    async function addList() {
        // 连续解构赋值+重命名
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?fomat=json')
        let obj = {id:nanoid(),title}
        // talkStore.talkList.unshift(obj)
        talkList.unshift(obj)
    }
    return {talkList,addList}
})