<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import products55453059 from '../../assets/solution/solution48697684.png'
import solutionimg1 from '../../assets/solution/solution54623.png';
import solutionimg2 from '../../assets/solution/solution5674.png';
import solutionimg3 from '../../assets/solution/solution36532.png';
import solutionimg4 from '../../assets/solution/solution12312312.png';

import solution48696232 from '../../assets/solution/solution48696232.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="products55453059" />
        <p>
            Azure BI
        </p>
    </div>
    <div class="intro-text">
        <p>
            Azure BI is a set of business intelligence services provided by Microsoft Azure Cloud, which includes
            various data processing, storage, and analysis reporting tools to help users quickly gain insights and make
            more informed business decisions. Azure BI provides the ability to integrate with Microsoft Office 365 and
            other Azure services, while supporting various data sources including Azure, AWS, Google Cloud, Salesforce,
            Dynamics 365, etc. It also offers multiple data visualization and reporting options, including dashboards,
            charts, tables, cards, and interactive dashboards.
        </p>
    </div>
    <div class="azure-box">
        <div class="item">
            <span>Power BI</span>
            <img :src="solutionimg1" />
        </div>
        <div class="item">
            <span>Azure Analysis<br /> Services</span>
            <img :src="solutionimg2" />
        </div>
        <div class="item">
            <span>Azure Data Factory</span>
            <img :src="solutionimg3" />
        </div>
        <div class="item">
            <span>Azure SQL Data Warehouse</span>
            <img :src="solutionimg4" />
        </div>
    </div>
    <div class="pbi-portal">
        <img :src="solution48696232" alt="solution48696232" />
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
    width: 1020px;
    height: auto;
    margin: 50px auto 0px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;

    p {
        font-size: 16px;
        line-height: 30px;
        color: #003399;
        margin: 0px;
        text-align: left;
        text-justify: inherit;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.azure-box {
    width: 1000px;
    height: 140px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
        background-color: #DFEEF9;
        width: 210px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;

        img {
            height: 70px;
            width: 70px;
        }

        span {
            color: #003399;
            font-weight: bold;
        }
    }

    .item:hover {
        border: 4px solid #2c2cd6;
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