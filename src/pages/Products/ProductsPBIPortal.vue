<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import image48724193 from '../../assets/products/48724193.png';
import image55236237 from '../../assets/products/55236237.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image48724193" />
        <p>
            PBI Portal
        </p>
    </div>
    <div class="intro-text">
        <p>
            PBI Portal is a feature rich data analysis portal that is the best partner for Power BI and can be
            integrated with all Power BI products. PBI Portal helps customers overcome the limitation of user numbers
            and achieve private deployment of enterprises. It also has multiple powerful enterprise features, including
            single sign on, permission management, and system integration.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="image55236237" alt="image55236237" />
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
    width: 854px;
    height: 731px;
    margin: 10px auto 100px;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>