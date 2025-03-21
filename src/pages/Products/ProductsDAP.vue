<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import image1 from '../../assets/products/48723030.png';
import typeicon1 from '../../assets/products/typeicon1.png';
import typeicon2 from '../../assets/products/typeicon2.png';
import typeicon3 from '../../assets/products/typeicon3.png';
import typeicon4 from '../../assets/products/typeicon4.png';
import productdap from '../../assets/products/productdap.png';
import Footer from '../../components/Footer.vue';
</script>

<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image1" />
        <p>
            Data Analysis Platform
        </p>
    </div>
    <div class="intro-text">
        <p>The data analysis platform provides comprehensive data middleware solutions for enterprises, making data
            integration, processing, and modeling more efficient and standardized, and providing data support for
            business decisions.</p>
    </div>
    <div class="type-list">
        <div class="type-item">
            <img :src="typeicon1" />
            <span>Analysis and Service</span>
        </div>
        <div class="type-item">
            <img :src="typeicon2" />
            <span>Data Operations</span>
        </div>
        <div class="type-item">
            <img :src="typeicon3" />
            <span>Business Data Modeling</span>
        </div>
        <div class="type-item">
            <img :src="typeicon4" />
            <span>Full Lifecycle</span>
        </div>
    </div>
    <div class="product-dap">
        <img :src="productdap" />
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

.intro-text {
    width: 1000px;
    height: 200px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        color: #666666;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.type-list {
    width: 800px;
    height: 150px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;

    .type-item {
        height: 100%;
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            height: 60px;
            width: 60px;
        }

        span {
            margin-top: 15px;
            font-size: 14px;
            color: #555555;
            font-weight: bold;
        }
    }
}

.product-dap {
    width: 983px;
    height: 740px;
    margin: 0px auto;
    padding-bottom: 100px;
}
</style>