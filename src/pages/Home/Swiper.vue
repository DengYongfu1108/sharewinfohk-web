<script setup>
import swiper1 from '../../assets/images/swiper1.png'
import swiper2 from '../../assets/images/swiper2.png'
</script>

<template>
    <div class="block text-center" style="height: auto">
        <el-carousel height="auto" autoplay>
            <el-carousel-item class="swiper-item">
                <img :src="swiper1" style="width: 100%;">
            </el-carousel-item>
            <el-carousel-item class="swiper-item">
                <img :src="swiper2" style="width: 100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<style scoped lang="less">
.carousel-item {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    display: flex;
    align-items: center;
    margin: 0;
    text-align: center;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.swiper-item {
    height: 660px;
    min-width: 1260px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>