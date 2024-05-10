<template>
    <h3>msg {{ msg }}</h3>
    <input type="text" v-model="msg">
    <h3>customMsg {{ customMsg }}</h3>
    <input type="text" v-model="customMsg">
</template>

<script setup name="App" lang="ts">
import { ref,customRef } from 'vue';
import useMsgRef from './useMsgRef'

let msg = ref('111')
let {customMsg} = useMsgRef('ssssss',2000)

</script>


<style>

</style>