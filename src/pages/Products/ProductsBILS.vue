<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import productbils123123 from '../../assets/products/productbils123123.png';
import procdutcts55453058 from '../../assets/products/procdutcts55453058.png';
import products55453059 from '../../assets/products/products55453059.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="productbils123123" />
        <p>
            BI Large Screen
        </p>
    </div>
    <div class="intro-text">
        <p>
            The BI large screen management system is a platform that integrates, arranges, and designs various
            resources, and displays and monitors data in real-time in the form of charts, images, text, and other forms
            through large screen devices such as large screens and LED displays.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="procdutcts55453058" alt="procdutcts55453058" />
    </div>
    <div class="pbi-portal">
        <img :src="products55453059" alt="products55453059" />
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
        color: #ffffff;
        font-weight: bold;
    }
}

.intro-text {
    width: 1020px;
    height: auto;
    margin: 50px auto 0px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;

    p {
        font-size: 16px;
        line-height: 30px;
        color: #666666;
        margin: 0px;
        text-align: left;
        text-justify: inherit;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 800px;
    height: auto;
    margin: 10px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>