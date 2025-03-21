<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697681 from '../../assets/solution/solution48697681.png';
import solution48695954 from '../../assets/solution/solution48695954.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697681" />
        <p>
            Data Governance
        </p>
    </div>
    <div class="intro-text">
        <p>
            Data governance is a comprehensive approach to organizing and managing data resources, aimed at ensuring
            high-quality, secure, compliant, and trustworthy data. The goal of data governance is to ensure that data is
            properly used, shared, and protected across the organization.
        </p>
        <p>
            Through effective data governance, organizations can better leverage their data resources to support
            decision-making, drive innovation, and achieve business objectives.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution48695954" alt="solution48695954" />
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
    width: 800px;
    height: auto;
    margin: 40px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>