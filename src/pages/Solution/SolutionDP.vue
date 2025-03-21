<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697678 from '../../assets/solution/solution48697678.png';
import solution55453161 from '../../assets/solution/solution55453161.png';
import solution55453162 from '../../assets/solution/solution55453162.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697678" />
        <p>
            Data Prediction
        </p>
    </div>
    <div class="intro-text">
        <p>
            Data predictive analysis refers to the process of using historical data and statistical models to make
            predictions and analyze potential future events or trends. This analysis typically involves the use of
            techniques from fields such as mathematics, statistics, and computer science to understand and predict the
            underlying patterns and laws in the data. Data predictive analysis has wide applications in many fields,
            including finance, healthcare, retail, and manufacturing. It helps organizations better understand future
            trends and make more informed decisions.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution55453161" alt="solution55453161" />
    </div>
    <div class="pbi-portal">
        <img :src="solution55453162" alt="solution55453162" />
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
    width: 900px;
    height: auto;
    margin: 0px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>