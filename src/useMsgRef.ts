import { ref,customRef } from 'vue';

export default function(initMsg,delay){
    let timer:number
    let customMsg = customRef((track,trigger)=>{
        return {
            // 数据被读取时调用
            get() {
                // 监视数据的变化
                track()
                return initMsg
            },
            // 数据被修改时调用
            set(value) {
                clearInterval(timer)
                timer = setTimeout(()=>{
                    initMsg = value
                    // 通知vue数据已经变化了
                    trigger()
                },delay)
            }
        }
    })
    return {customMsg}
}