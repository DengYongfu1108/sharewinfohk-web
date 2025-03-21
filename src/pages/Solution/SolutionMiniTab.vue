<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48706783 from '../../assets/solution/solution48706783.png';
import solution55453231 from '../../assets/solution/solution55453231.png';
import solution48706788 from '../../assets/solution/solution48706788.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48706783" />
        <p>
            Minitab
        </p>
    </div>
    <div class="intro-text">
        <p>
            Minitab is a professional statistical software mainly used for data analysis, quality management, and
            statistical modeling. It offers a wide range of statistical tools that can be used to explore data, identify
            trends, conduct hypothesis testing, build predictive models, and more.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution55453231" alt="solution55453161" />
    </div>
    <div class="pbi-portal">
        <img :src="solution48706788" alt="solution48706788" />
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
    width: 700px;
    height: auto;
    margin: 0px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>