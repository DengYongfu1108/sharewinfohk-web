<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import DataManagementPlatform from '../../assets/products/DataManagementPlatform.png';
import dmp2342343 from '../../assets/products/dmp2342343.png';
import products2342567 from '../../assets/products/products2342567.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="DataManagementPlatform" />
        <p>
            Data Directory Management
        </p>
    </div>
    <div class="intro-text">
        <p>
            Data directory management refers to the process of categorizing, organizing, describing, and managing data
            resources within an organization. A data directory is a centralized repository for storing and managing data
            asset information, including key information such as data definition, source, purpose, and quality
            assessment. Through effective data directory management, organizations can better manage their data assets,
            improve data discoverability, reduce barriers to data usage, increase data credibility, and ensure
            compliance with data governance and compliance requirements.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="products2342567" alt="dmp2342343" />
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
    width: 1020px;
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
        text-justify: inherit;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 600px;
    height: auto;
    margin: 10px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>