<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import aboutus48732808 from '../../assets/aboutus/aboutus48732808.jpg';
import aboutus44564356 from '../../assets/aboutus/aboutus44564356.png';
</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="aboutus48732808" />
        <p>
            Contact Us
        </p>
    </div>
    <div class="intro-text">
        <p>
            We are here, ready to explore the possibilities of the future with you
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="aboutus44564356" alt="aboutus44564356" />
    </div>
    <!-- 联系方式 -->
    <div class="contact-way">
        <div class="item">
            <el-icon>
                <PhoneFilled />
            </el-icon>
            <span>&nbsp;TEL: 400-6992010</span>
        </div>
        <div class="item">
            <el-icon>
                <Message />
            </el-icon>
            <span>&nbsp;Email: info@sharewinfo.com</span>
        </div>
    </div>
    <!-- 地址 -->
    <div class="address-box">
        <div class="title">
            <el-icon>
                <Location />
            </el-icon>
            <span>&nbsp;Address:</span>
        </div>
        <div class="content">
            <p>Room 1601, 16th Floor, Building SOHO-T2-B, Wangjing, Chaoyang District, Beijing</p>
            <p>1008-1010, Building 1, Laimeng Metropolis, Second Ring Road, Wuhou District, Chengdu</p>
            <p>Hangzhou Bay Smart Valley 910, Xiaoshan District, Hangzhou </p>
            <p>RM 509, 5/F, THE CLOUD, 111 ,TUNG CHAU STREET, TAI KOK ,TSUI ,HONG KONG </p>
        </div>
    </div>
    <div style="width: 100%;margin-bottom: 100px;"></div>
    <Footer />
</template>

<style scoped lang="less">
.top-container {
    width: 1200px;
    height: 437px;
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
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        line-height: 30px;
        color: #555555;
        margin: 0px;
        font-weight: bold;
        text-align: center;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.pbi-portal {
    width: 1000px;
    height: auto;
    margin: 10px auto;
    pointer-events: none;

    img {
        height: inherit;
        width: inherit;
    }
}

.contact-way {
    width: 800px;
    height: 30px;
    margin: 50px auto 0px;
    display: flex;
    justify-content: left;

    .item {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        margin-right: 200px;
        color: #555555;
    }
}

.address-box {
    width: 800px;
    height: 200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;

    .title {
        min-width: 100px;
        height: 100%;
        text-align: left;
        line-height: 40px;
        color: #555555;
    }

    .content {
        width: 100%;
        height: 100%;

        p {
            color: #555555;
            font-size: 14px;
            margin: 0px;
            line-height: 40px;
            text-align: left;
        }
    }
}
</style>