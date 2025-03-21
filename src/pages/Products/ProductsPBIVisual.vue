<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import image48724718 from '../../assets/products/48724718.png';
import image23423432 from '../../assets/products/image23423432.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image48724718" />
        <p>
            PBI Visual
        </p>
    </div>
    <div class="intro-text">
        <p>
            The PBI Visual developed by Sharewinfo is a custom visualization control product for Power BI, designed to
            help enterprise users better display, analyze, and understand their data.
        </p>
        <p>
            The biggest advantage of PBI Visual lies in its customization capabilities. By using this tool, enterprise
            users can create tailored visual components according to their specific needs, including customization of
            colors, sizes, shapes, labels, and more.
        </p>
        <p>
            These components empower users to present data more effectively, leading to better understanding and
            analysis of business information while enhancing internal collaboration and communication within the
            organization.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="image23423432" alt="image23423432" />
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
    width: 854px;
    height: 731px;
    margin: 10px auto 100px;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>