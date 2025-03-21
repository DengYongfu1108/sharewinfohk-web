<script setup>
import business1 from '../../assets/images/29847974.png';
import business2 from '../../assets/images/29847890.png';
</script>
<template>
    <div class="container">
        <el-carousel :interval="2000" arrow="never" autoplay indicator-position="none">
            <el-carousel-item key="1">
                <img :src="business1" />
            </el-carousel-item>
            <el-carousel-item key="2">
                <img :src="business2" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<style scoped lang="less">
.container {
    width: 748px;
    height: 425px;
    margin: 0px auto;
}


.el-carousel {
    width: 748px;
    height: 425px;
}

.el-carousel__item {
    width: 748px;
    height: 425px;
}

.el-carousel__item img {
    width: 748px;
    height: 425px;
    object-fit: cover;
}
</style>