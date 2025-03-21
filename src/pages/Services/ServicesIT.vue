<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import services48709515 from '../../assets/services/services48709515.png';
import services45674329 from '../../assets/services/services45674329.png';
import services45674325 from '../../assets/services/services45674325.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="services48709515" />
        <p>
            Implementation Team
        </p>
    </div>
    <div class="intro-text">
        <p>
            Our implementation team is composed of a group of experienced and highly skilled professionals with
            extensive industry knowledge and expertise. They can quickly understand client requirements and deliver
            tailored solutions.
        </p>
        <p>
            Team members bring rich experience and specialized knowledge in their respective fields, enabling them to
            tackle complex issues and address various challenges. Providing professional and efficient services to
            ensure the smooth implementation and successful delivery of projects is our consistent commitment to
            collaboration.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="services45674325" alt="services45674325" />
    </div>
    <div class="pbi-portal">
        <img :src="services45674329" alt="services45674329" />
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
    margin: 40px auto;
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