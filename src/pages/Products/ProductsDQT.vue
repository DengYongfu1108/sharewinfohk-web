<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import dababricksquerytool from '../../assets/products/dababricksquerytool.png';
import databricksIntro from '../../assets/products/48723027.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="dababricksquerytool" />
        <p>
            Databricks Query Tool
        </p>
    </div>
    <div class="intro-text">
        <p>Databricks Query Tool is a data analysis suite tailored specifically for Databricks, enabling users to query
            and analyze Databricks data directly within enterprise applications.</p>
        <p>
            Databricks supports seamless integration with various front-end applications, while also providing features
            such as syntax suggestions, Notebook saving, and data visualization.
        </p>
    </div>
    <div class="databricks-intro">
        <img :src="databricksIntro" alt="databricksIntro" />
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

.databricks-intro {
    width: 938px;
    height: 949px;
    margin: 10px auto;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>