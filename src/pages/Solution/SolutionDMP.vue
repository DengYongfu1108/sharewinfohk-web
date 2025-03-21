<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697689 from '../../assets/solution/solution48697689.png';
import solution48677876 from '../../assets/solution/solution48677876.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697689" />
        <p>
            Data Middle Platform
        </p>
    </div>
    <div class="intro-text">
        <p>
            An enterprise data platform refers to a centralized system for data management and analysis, designed to
            integrate, store, manage, and analyze various data resources. This concept emphasizes centralized data
            management, enabling organizations to better leverage data for decision-making, innovation, and business
            optimization.
        </p>
        <p>
            Building an enterprise data platform is a complex task, often involving multiple factors such as technology,
            personnel, processes, and organizational culture. A successful data platform provides organizations with
            more efficient, flexible, and intelligent data management and analytical capabilities.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution48677876" alt="solution48677876" />
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
    width: 1000px;
    height: auto;
    margin: 40px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>