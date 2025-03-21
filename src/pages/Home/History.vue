<script setup>
import historyStep from '../../assets/images/history-step.png'
</script>

<template>
    <div class="container">
        <img :src="historyStep">
    </div>
</template>

<style scoped lang="less">
.container {
    width: 1200px;
    height: 350px;
    margin: 50px auto 0px;
    border: 1px solid red;

    img {
        height: 100%;
        width: 100%;
        pointer-events: none;
    }
}
</style>