<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import solution48697690 from '../../assets/solution/solution48697690.png';
import solution48695953 from '../../assets/solution/solution48695953.png';
import solution02734530 from '../../assets/solution/solution02734530.png';
import solution02734534 from '../../assets/solution/solution02734534.png';
import solution02734531 from '../../assets/solution/solution02734531.png';
import solution02734539 from '../../assets/solution/solution02734539.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="solution48697690" />
        <p>
            DataOps
        </p>
    </div>
    <div class="intro-text">
        <p>
            DataOps is an integrated strategy for managing and utilizing data. It is an automated process designed to
            improve the quality of data analysis, accelerate analysis cycles, and ensure that data is efficiently,
            securely, and reliably operated throughout its lifecycle, delivering its value to the business as quickly as
            possible.
        </p>
        <p>
            DataOps forms the foundation for data-driven decision-making and innovation. It treats data management as a
            continuous process, ensuring that data delivers maximum benefit within the organization and serves as a
            powerful driver for business decisions and innovation.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="solution48695953" alt="solution48695953" />
    </div>

    <div class="data-type-list">
        <div class="item">
            <span class="sort">01</span>
            <img :src="solution02734530" alt="" />
            <span class="title">Automated Data<br />Processes</span>
        </div>
        <div class="item">
            <span class="sort">02</span>
            <img :src="solution02734534" alt="" />
            <span class="title">Automated Data <br />Processes</span>
        </div>
        <div class="item">
            <span class="sort">03</span>
            <img :src="solution02734531" alt="" />
            <span class="title">Automated Data<br /> Processes</span>
        </div>
        <div class="item">
            <span class="sort">04</span>
            <img :src="solution02734539" alt="" />
            <span class="title">Automated Data<br /> Processes</span>
        </div>
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
    width: 800px;
    height: auto;
    margin: 40px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}

.data-type-list {
    width: 1000px;
    height: 310px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .item {
        height: 310px;
        width: 240px;
        background-color: #DCE9F1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: 0.1s;

        .sort {
            width: 100%;
            display: block;
            font-size: 22px;
            font-weight: bold;
            color: #003399;
            text-align: left;
            padding-left: 30px;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            color: #003399;
        }

    }

    .item:hover {
        box-shadow: 0px 0px 8px 4px rgba(170, 186, 236, 0.5);
        transform: translateY(-5px);
        cursor: pointer;
    }
}
</style>