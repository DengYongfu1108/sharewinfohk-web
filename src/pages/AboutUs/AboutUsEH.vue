<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import aboutus48712747 from '../../assets/aboutus/aboutus48712747.png';
import aboutus49044161 from '../../assets/aboutus/aboutus49044161.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="aboutus48712747" />
        <p>
            Enterprise Honor
        </p>
    </div>
    <!-- <div class="intro-text">
        <p>
            Weibull++ is a professional reliability analysis software designed primarily for performing analyses of
            Weibull distributions and other reliability distributions. It is widely applicable across industries
            requiring reliability analysis, including manufacturing, aerospace, automotive, electronics, and more.
        </p>
        <p>
            By using Weibull++, engineers and R&D professionals can gain a deeper understanding of their product's life
            characteristics, enabling them to take appropriate measures to enhance reliability and performance. The
            software facilitates the evaluation of product reliability and life characteristics effectively.
        </p>
    </div> -->
    <div class="pbi-portal">
        <img :src="aboutus49044161" alt="aboutus49044161" />
    </div>
    <div style="width: 100%;margin-bottom: 100px;"></div>
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
    width: 1000px;
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
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 1000px;
    height: auto;
    margin: 100px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>