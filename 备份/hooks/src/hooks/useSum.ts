import { ref, reactive, computed } from 'vue';

export default function () {
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })
    return {sum,bigSum}

}