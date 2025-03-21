<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import DataManagementPlatform from '../../assets/products/DataManagementPlatform.png';
import dmp2342343 from '../../assets/products/dmp2342343.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="DataManagementPlatform" />
        <p>
            Data Management Platform
        </p>
    </div>
    <div class="intro-text">
        <p>
            Data Management Platform is a comprehensive solution designed to organize, store, manage, analyze, and
            protect data from both internal and external sources. These platforms are designed to provide a centralized
            way to manage data assets, ensuring data accuracy, consistency, and availability, while offering powerful
            analytics and insights.
        </p>
        <p>
            The data management platform is a critical component of an enterprise's data strategy, helping organizations
            better understand, utilize, and protect their data assets.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="dmp2342343" alt="dmp2342343" />
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

.pbi-portal {
    width: 938px;
    height: auto;
    margin: 10px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>