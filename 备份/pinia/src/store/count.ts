import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    actions:{
        increment(value) {
            this.sum += value
        },
        minus(value) {
            this.sum -= value
        }
    },
    // state是真正存储数据的地方
    state(){
        return {
            sum:6
        }
    },
    getters:{
        // 写法1
        // bigSum(state) {
        //     return state.sum*10
        // }
        // 写法2
        // bigSum():number {
        //     return this.sum*10
        // }
        // 写法3
        bigSum:state => state.sum*10
    }
})