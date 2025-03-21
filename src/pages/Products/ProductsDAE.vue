<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import image48723864 from '../../assets/products/48723864.png';
import image55236233 from '../../assets/products/55236233.png';

import productdae1 from '../../assets/products/productdae2.png';
import productdae2 from '../../assets/products/productdae3.png';
import productdae3 from '../../assets/products/productdae1.png';

import Footer from '../../components/Footer.vue';
</script>

<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image48723864" />
        <p>
            Data Analysis Engine
        </p>
    </div>
    <div class="content-image">
        <img :src="image55236233" />
    </div>
    <div class="bottom-list">
        <div class="item">
            <img :src="productdae1">
            <span>Business Terminology Management</span>
        </div>
        <div class="item">
            <img :src="productdae2">
            <span>Metric Management</span>
        </div>
        <div class="item">
            <img :src="productdae3">
            <span>Data Permission Management</span>
        </div>
    </div>
    <Footer />
</template>

<style scoped lang="less">
.top-container {
    width: 1200px;
    height: 362px;
    margin: 50px auto 0px;
    position: relative;

    img {
        height: 100%;
        width: 100%;
    }

    p {
        position: absolute;
        left: 20px;
        bottom: 80px;
        font-family: Source Han Sans, Geneva, sans-serif;
        font-size: 24px;
        color: #003399;
        font-weight: bold;
    }
}

.content-image {
    width: 900px;
    height: auto;
    margin: 50px auto;

    img {
        width: 100%;
    }
}

.bottom-list {
    width: 1200px;
    height: 200px;
    margin: 0px auto 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;


    .item {
        height: 100%;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        img {
            height: 140px;
            width: 140px;
        }

        span {
            margin-top: 15px;
            font-size: 14px;
            color: #555555;
            font-weight: bold;
        }
    }


}
</style>