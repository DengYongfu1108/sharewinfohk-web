<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import image48724719 from '../../assets/products/48724719.png';
import productsppt from '../../assets/products/productsppt.png';
import image48723025 from '../../assets/products/48723025.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image48724719" />
        <p>
            PBI PPT
        </p>
    </div>
    <div class="intro-text">
        <p>
            PBI PPT allows Power BI reports to be seamlessly embedded into PowerPoint, retaining functionalities such as
            clicking, slicing, and navigation even after embedding.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="productsppt" alt="image48723025" />
    </div>
    <div class="pbi-portal">
        <img :src="image48723025" alt="image48723025" />
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
    width: 938px;
    height: auto;
    margin: 10px auto 100px;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>