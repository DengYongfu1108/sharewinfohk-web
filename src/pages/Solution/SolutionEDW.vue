<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697683 from '../../assets/solution/solution48697683.png';
import solution48691509 from '../../assets/solution/solution48691509.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697683" />
        <p>
            Enterprise Data Warehouse
        </p>
    </div>
    <div class="intro-text">
        <p>
            An enterprise modern data warehouse is a comprehensive and integrated data storage and management system
            designed to provide organizations with consistent, integrated, and reliable data to support decision-making,
            business analysis, and strategic planning.
        </p>
        <p>
            Enterprise-level data warehouses typically consolidate data from various departments and business systems
            within an organization, offering a holistic view of the data. Building an enterprise-level data warehouse is
            a complex process that involves technical, business, and organizational aspects. The goal is to provide a
            trustworthy and efficient data platform to support the organization's daily operations and decision-making
            needs.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution48691509" alt="solution48691509" />
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