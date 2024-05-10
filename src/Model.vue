<template>
    <div class="flex">
        <span>省：</span>
        <el-input v-model="state.pname" style="width: 200px;"></el-input>
    </div>
    <div class="flex">
        <span>市：</span>
        <el-input v-model="state.cname" style="width: 200px;"></el-input>
    </div>
    <el-button @click="handleSearch" type="primary">查询</el-button>
    <h5 v-for="item in state.mainDataLiat">{{ item }}</h5>

 </template>
 
 <script setup name="Model" lang="ts">
 import { reactive } from 'vue'
 import axios from 'axios';

 let state = reactive({
    mainDataLiat:[],
    pname:'',
    cname:'',
 })



 const handleSearch = () => {
    axios({
        url:'http://hmajax.itheima.net/api/area',
        params: {
            pname: state.pname || '',
            cname: state.cname || ''
        }
    }).then(res => {
        console.log(res);
        state.mainDataLiat = res.data.list
    })
 }
 
 </script>
 
 
 <style>
 .tanchuang {
        padding: 20px 0;
        border: 1px solid grey;
        border-radius: 5px;
        text-align: center;
        width: 200px;
        position: fixed;
        left: 50%;
        top: 100px;
        margin-left: -100px;
    }
 </style>