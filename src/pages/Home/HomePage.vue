<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import BusinessPartners from './BusinessPartners.vue';
import Certificate from './Certificate.vue';
import History from './History.vue';
import Intro from './Intro.vue';
import LatesNews from './LatesNews.vue';
import NewProduct from './NewProduct.vue';
import Swiper from './Swiper.vue';
import Thanking from './Thanking.vue';
import Footer from '../../components/Footer.vue';
</script>
<template>
    <div class="container">
        <HeaderNav />
        <Swiper />
        <Intro />
        <div class="part-divider">
            <p>DEVELOPMENT HISTORY</p>
        </div>
        <History />
        <div class="part-divider">
            <p>LATEST NEWS</p>
        </div>
        <LatesNews />
        <NewProduct />
        <div class="part-divider">
            <p>CERTIFICATE</p>
        </div>
        <Certificate />
        <div class="part-divider">
            <p>BUSINESS PARTNERS</p>
        </div>
        <BusinessPartners />
        <div class="part-divider">
            <p>THINKING</p>
        </div>
        <Thanking />
        <Footer/>
    </div>
</template>

<style scoped lang="less">
.header-box {
    width: 100%;
}

.part-divider {
    width: 100%;
    height: 40px;
    margin: 50px auto 50px;

    p {
        line-height: 40px;
        margin: 0px;
        color: #162335;
        font-size: 36px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
}
</style>