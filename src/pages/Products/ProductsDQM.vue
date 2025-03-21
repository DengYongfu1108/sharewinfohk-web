<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import productsdqm48770306 from '../../assets/products/productsdqm48770306.png';
import productdqm48723032 from '../../assets/products/productdqm48723032.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="productsdqm48770306" />
        <p>
            Data Quality Management
        </p>
    </div>
    <div class="intro-text">
        <p>
            Data quality management is a process of organizing and monitoring the accuracy, completeness, consistency,
            reliability, and timeliness of data throughout its lifecycle.
        </p>
        <p>
            Data quality management is an ongoing process that requires the participation of the entire organization,
            including data owners, data administrators, data quality teams, and end users. By establishing an effective
            data quality management framework, organizations can maximize the utilization of their data assets. Good
            data quality management ensures that organizations can trust and effectively use their data, thereby
            improving the accuracy and effectiveness of decision-making.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="productdqm48723032" alt="productdqm48723032" />
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
        text-justify: inherit;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 800px;
    height: auto;
    margin: 10px auto 100px;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}
</style>