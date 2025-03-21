<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697686 from '../../assets/solution/solution48697686.png';
import solution34452345 from '../../assets/solution/solution34452345.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697686" />
        <p>
            Power Platform
        </p>
    </div>
    <div class="intro-text">
        <p>
            Power Platform is an integrated toolset that enables enterprises to uncover insights from data, optimize
            business processes, and turn decisions into actionable outcomes. It offers powerful visualization and
            analytical capabilities, as well as the ability to automate workflows and business processes, helping
            organizations enhance business intelligence and decision-making.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution34452345" alt="solution34452345" />
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
    width: 1100px;
    height: auto;
    margin: 10px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>