<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import services48706785 from '../../assets/services/services48706785.png';
import services55453937 from '../../assets/services/services55453937.png';
import services55453372 from '../../assets/services/services55453372.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="services48706785" />
        <p>
            CRM Platform
        </p>
    </div>
    <div class="intro-text">
        <p>
            A Customer Relationship Management (CRM) platform is a software system that integrates functions such as
            customer data, sales, marketing, and customer service. It is designed to help businesses build and maintain
            strong relationships with customers, provide personalized services and support, thereby increasing customer
            satisfaction and driving business growth.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="services55453937" alt="services55453937" />
    </div>
    <div class="pbi-portal">
        <img :src="services55453372" alt="services55453372" />
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
        color: #003399;
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
    width: 950px;
    height: auto;
    margin: 0px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}

.data-type-list {
    width: 1000px;
    height: 310px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .item {
        height: 310px;
        width: 240px;
        background-color: #DCE9F1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: 0.1s;

        .sort {
            width: 100%;
            display: block;
            font-size: 22px;
            font-weight: bold;
            color: #003399;
            text-align: left;
            padding-left: 30px;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            color: #003399;
        }

    }

    .item:hover {
        box-shadow: 0px 0px 8px 4px rgba(170, 186, 236, 0.5);
        transform: translateY(-5px);
        cursor: pointer;
    }
}
</style>