<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import image48986160 from '../../assets/products/48986160.png';
import image48916783 from '../../assets/products/48916783.png';
import videoUrl from '../../assets/products/1209.mp4';
import productswinbi1 from '../../assets/products/productswinbi1.png';
import productswinbi2 from '../../assets/products/productswinbi2.png';
import productswinbi3 from '../../assets/products/productswinbi3.png';
import productswinbi4 from '../../assets/products/productswinbi4.png';
import advertisement1 from '../../assets/products/advertisement1.png';
import advertisement2 from '../../assets/products/advertisement2.png';
import advertisement3 from '../../assets/products/advertisement3.png';
</script>

<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="image48986160" />
        <div>
            <img :src="image48916783" />
            <p>WinBI</p>
        </div>
    </div>
    <div class="intro-text">
        <p>WinBI is a Power BI privatized deployment platform tailored for Chinese enterprises.</p>
        <p>Win BI is fully compatible with Power BI report formats. It offers a user-friendly experience, enabling
            online report creation, viewing, and editing without requiring a Power BI license. Data and reports are
            managed independently, with support for real-time connections to multiple data sources, various deployment
            methods, and single sign-on (SSO) protocols.</p>
    </div>
    <div class="video-player">
        <video :src="videoUrl" :autoplay="true" muted loop />
    </div>

    <div class="card-list">
        <div class="card-item">
            <img :src="productswinbi1">
            <span>Support for PBIX Report Rendering</span>
        </div>
        <div class="card-item">
            <img :src="productswinbi2">
            <span>Access to Microsoft Component Marketplace</span>
        </div>
        <div class="card-item">
            <img :src="productswinbi3">
            <span>Online Editing Capabilities</span>
        </div>
        <div class="card-item">
            <img :src="productswinbi4">
            <span>Built-in Library of Rich Templates</span>
        </div>
    </div>
    <div class="advertisement">
        <span>Seamless User Integration with Third-Party Login Support</span>
        <img :src="advertisement1" alt="Seamless User Integration with Third-Party Login Support" />
    </div>
    <div class="advertisement">
        <span>Support for DAX Data Analysis Expressions</span>
        <img :src="advertisement2" alt="Support for DAX Data Analysis Expressions" />
    </div>
    <div class="advertisement">
        <span>Support for Various Private Cloud Deployment Options</span>
        <img :src="advertisement3" alt="Support for Various Private Cloud Deployment Options" />
    </div>
    <div style="width: 100%;padding: 30px 0px;"></div>
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

    div {
        position: absolute;
        left: 20px;
        bottom: 80px;
        font-family: Source Han Sans, Geneva, sans-serif;
        font-size: 24px;
        color: #003399;
        font-weight: bold;
        display: flex;
        justify-content: space-around;

        img {
            height: 57px;
            width: 63px;
            margin: 0px 20px;
        }
    }
}

.intro-text {
    width: 1000px;
    height: 200px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    p {
        text-align: left;
        text-indent: 2em;
        margin: 0px;
        font-size: 16px;
        color: #666666;
        font-family: Source Han Sans, Geneva, sans-serif;
    }
}

.video-player {
    width: 100%;
    height: 679px;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card-list {
    width: 1042px;
    height: 791px;
    margin: 50px auto 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .card-item {
        width: 480px;
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

        img {
            width: 100%;
        }

        span {
            font-weight: bold;
        }
    }

    .card-item:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
}

.advertisement {
    width: 1042px;
    height: auto;
    margin: 0px auto;

    span {
        display: block;
        font-size: 20px;
        margin: 40px auto;
        font-weight: bold;
    }

    img {
        width: 100%;
    }
}
</style>