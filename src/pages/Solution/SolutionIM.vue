<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697680 from '../../assets/solution/solution48697680.png';
import solution48696231 from '../../assets/solution/solution48696231.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697680" />
        <p>
            Index Management
        </p>
    </div>
    <div class="intro-text">
        <p>
            A metrics management solution provides organizations with a systematic set of tools and processes to
            effectively define, track, manage, and analyze key performance indicators (KPIs). These solutions can be
            tailored to the specific needs of the organization to ensure alignment with business processes.
            improving production efficiency, and reducing costs.
        </p>
        <p>
            At an organizational level, they offer a structured approach designed to help achieve strategic goals. By
            enabling leadership and decision-makers to continuously monitor and evaluate business performance, these
            solutions provide a more comprehensive understanding of operations and empower them to make smarter,
            data-driven decisions.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution48696231" alt="solution48696231" />
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
    margin: 40px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>