<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import industry48715182 from '../../assets/industry/industry48715182.png';
import industry48715184 from '../../assets/industry/industry48715184.png';
import services55453372 from '../../assets/services/services55453372.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="industry48715182" />
        <p>
            Retailing
        </p>
    </div>
    <div class="intro-text">
        <p>
            We provide integrated data analysis services for leading enterprises, supporting refined operations through
            accurate sales forecasting, behavior analysis, and supply chain optimization strategies. This helps increase
            sales and profits while enhancing customer experience.
        </p>
        <p>
            Built on the Azure Databricks and Power BI platform, the solution integrates multi-source data to enable
            preprocessing, modeling, analysis, and visualization report sharing.
        </p>
        <p>
            The solution adopts a lakehouse architecture, creating semantic layer models to support business insights,
            while leveraging RPA automation technology to integrate real-time sales data, ensuring data consistency and
            security.
        </p>
        <p>
            Here are some key application scenarios:
        </p>
    </div>
    <div class="scenarios-box">
        <div class="img-list">
            <img :src="industry48715184" alt="industry48715184" />
        </div>
        <div class="content-list">
            <div class="content-item">
                <span class="title">Sales Data Analysis:</span>
                <span class="content">
                    Analyze historical sales data to identify trends, seasonal impacts, and individual
                    product performance, enabling effective inventory planning and promotional activities while avoiding
                    overstocking or shortages.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Customer Behavior Insights:</span>
                <span class="content">
                    Collect and analyze customer data to build user profiles, predict purchasing
                    behavior, enable targeted marketing, and increase customer retention rates.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Inventory Management Optimization:</span>
                <span class="content">
                    Use data analysis to forecast demand and combine it with safety stock strategies to optimize costs
                    and balance supply and demand.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Membership Management:</span>
                <span class="content">
                    Deeply analyze member data to develop personalized incentive programs, enhancing member engagement
                    and loyalty.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Site Selection and Store Operations:</span>
                <span class="content">
                    Utilize multidimensional data analysis to support new store location decisions and guide existing
                    stores in adjusting layouts and service models to improve sales per square foot.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Cross-Channel Integration Analysis:</span>
                <span class="content">
                    Integrate omnichannel data to comprehensively evaluate business performance and optimize synergy
                    across channels.
                </span>
            </div>
            <div class="content-item">
                <span class="title">Supply Chain Optimization: </span>
                <span class="content">
                    Analyze supplier and logistics data to refine procurement strategies, reduce costs, and enhance
                    supply chain efficiency and responsiveness.
                </span>
            </div>
        </div>
    </div>
    <div class="intro-text">
        <p>
            The widespread application of data analysis in the construction industry plays a crucial role in driving
            digital transformation and enhancing core competitiveness across the sector.
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
        width: 450px;

        img {
            width: 100%;
        }
    }

    .content-list {
        width: 50%;
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