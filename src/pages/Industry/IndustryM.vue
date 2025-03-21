<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import industry48715206 from '../../assets/industry/industry48715206.png';
import industry50415308 from '../../assets/industry/industry50415308.jpg';
import services55453372 from '../../assets/services/services55453372.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="industry48715206" />
        <p>
            Manufacturing Industry
        </p>
    </div>
    <div class="intro-text">
        <p>
            The digital transformation of the manufacturing industry is a key trend in global industrial development,
            with big data technology and data analysis playing a crucial role in this process.
        </p>
        <p>
            By utilizing advanced big data technologies, we assist enterprises in building comprehensive data analysis
            platforms and data governance systems, achieving intelligent upgrades in production monitoring, quality
            control, resource scheduling, and cost-effectiveness analysis, effectively reducing costs and improving
            operational efficiency.
        </p>
        <p>
            Here are some of the main application scenarios:
        </p>
    </div>
    <div class="scenarios-box">
        <div class="img-list">
            <img :src="industry50415308" alt="industry50415308" />
        </div>
        <div class="content-list">
            <div class="content-item">
                <span class="title">Data-Driven Value Chain Optimization:</span>
                <span class="content">
                    By deploying sensors, RFID, and other devices to collect big data across the entire process, the
                    data is processed and analyzed to enhance production efficiency, reduce energy consumption, and
                    predict maintenance needs.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Predictive Maintenance:</span>
                <span class="content">
                    Real-time monitoring of equipment data to prevent failures, reduce downtime and costs, and leverage
                    machine learning to accurately predict maintenance cycles and asset lifecycles, effectively
                    improving asset utilization.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Personalized Product Design and Upgrades:</span>
                <span class="content">
                    By combining market demand, maintenance data, and user behavior analysis, customized production of
                    products is achieved, while continuously improving designs to respond to market changes and consumer
                    needs.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Intelligent Decision Support:</span>
                <span class="content">
                    Based on big data analysis and visualized reports, management can make scientifically informed and
                    efficient decisions, covering everything from supply chain to market strategy.
                </span>
            </div>
        </div>
    </div>
    <div class="intro-text">
        <p>
            Specific measures include integrating cross-departmental data silos, building a unified data architecture,
            implementing real-time quality monitoring, supplier risk management, and utilizing visualization tools. The
            PBI Portal platform enables seamless access to core data across devices, promoting efficient decision-making
            and management.
        </p>
        <p>
            These initiatives have effectively driven the digital transformation of the enterprise, breaking down
            information barriers, strengthening risk management, building a diversified supply chain, and ensuring
            production and global competitiveness.
        </p>
    </div>
    <!-- <div class="pbi-portal">
        <img :src="services55459407" alt="services55459407" />
    </div> -->
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
    align-items: start;

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
    width: 950px;
    height: auto;
    margin: 0px auto;
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

.scenarios-box {
    width: 1000px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;

    .img-list {
        width: 550px;

        img {
            width: 100%;
        }
    }

    .content-list {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .content-item {
            width: 100%;
            text-align: left;

            .title {
                font-weight: bold;
                font-size: 14px;
            }

            .content {
                font-size: 14px;
                color: #666666;
            }
        }
    }
}
</style>