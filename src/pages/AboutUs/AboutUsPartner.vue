<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import aboutus48733445 from '../../assets/aboutus/aboutus48733445.png';
import aboutus48709357 from '../../assets/aboutus/aboutus48709357.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="aboutus48733445" />
        <p>
            Partner
        </p>
    </div>
    <div class="intro-text">
        <p>
            Providing enterprise-level data analysis solutions across multiple industries
        </p>
        <p>
            Trusted by thousands of enterprise clients
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="aboutus48709357" alt="aboutus48709357" />
    </div>
    <div style="width: 100%;margin-bottom: 100px;"></div>
    <Footer />
</template>

<style scoped lang="less">
.top-container {
    width: 1200px;
    height: 437px;
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
    width: 1000px;
    height: auto;
    margin: 50px auto 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        line-height: 30px;
        color: #555555;
        margin: 0px;
        font-weight: bold;
        text-align: center;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 800px;
    height: auto;
    margin: 100px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>