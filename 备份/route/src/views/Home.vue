<template>
    <img src="../img/537.png" alt="">
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    onMounted(() => {
        setTimeout(() => {
            router.push('/news')
        }, 3000);
    })
</script>

<style>
    img {
        width: 200px;
        margin: 0 auto;
    }

</style>