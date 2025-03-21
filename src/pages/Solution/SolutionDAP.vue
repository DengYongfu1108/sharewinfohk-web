<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697682 from '../../assets/solution/solution48697682.png';
import solution55236236 from '../../assets/solution/solution55236236.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697682" />
        <p>
            Data Analysis Platform
        </p>
    </div>
    <div class="intro-text">
        <p>
            Sharewinfo provides on-demand customized data analysis platform solutions, helping enterprises make more
            accurate decisions. The data analysis platform is tailored to meet the specific needs of businesses,
            offering personalized data analysis services. The platform effectively manages and processes complex data
            analysis requirements by collecting, processing, and analyzing business data to deliver precise business
            insights and decision-making support. It contributes to various areas, such as enabling refined management,
            improving production efficiency, and reducing costs.
        </p>
        <p>
            The data analysis platform offers diverse data insight methods, catering to users in different roles,
            ensuring that all users can benefit from data analysis.
        </p>
        <p>
            Moreover, the customized data analysis platform provides real-time data analysis and feedback. Enterprises
            can access timely data analysis results through the platform, enabling them to quickly adjust business
            strategies to better adapt to market changes. This real-time capability helps businesses gain a competitive
            edge in highly competitive markets, enhancing their market competitiveness.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution55236236" alt="solution55236236" />
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
    width: 1200px;
    height: auto;
    margin: 40px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>