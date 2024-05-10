<template>
   <div class="app">
    <Suspense>
        <template v-slot:default>
            <Model/>
        </template>
        <template v-slot:fallback>
            <h3>loading</h3>
        </template>
    </Suspense>
   </div>
</template>

<script setup name="App" lang="ts">
import { Suspense } from 'vue';
import Model from './Model.vue'

</script>


<style>
    .app {
        padding: 20px 0;
        border: 1px solid grey;
        border-radius: 5px;
        text-align: center;
        background: linear-gradient(to right, skyblue, pink);
        width: 400px;
        height: 400px;
        filter: saturate(200%);
    }

</style>