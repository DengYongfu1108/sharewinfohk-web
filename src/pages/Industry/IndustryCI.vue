<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import industry48715183 from '../../assets/industry/industry48715183.png';
import industry48715188 from '../../assets/industry/industry48715188.png';
import industry48715187 from '../../assets/industry/industry48715187.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="industry48715183" />
        <p>
            Construction Industry
        </p>
    </div>
    <div class="intro-text">
        <p>
            Our professional team leverages data analysis to deeply optimize various aspects of construction projects,
            including project management, cost budgeting, material procurement, project progress, and construction
            quality. By performing real-time analysis of extensive project data, we provide risk warnings and decision
            support, significantly enhancing enterprise competitiveness.
        </p>
        <p>
            Here are some key application scenarios:
        </p>
    </div>

    <div class="construction-box">
        <img :src="industry48715188" alt="industry48715188" />
    </div>


    <div class="content-box">
        <div class="content-item">
            <span class="title">
                Cost Estimation and Budget Control:
            </span>
            <span class="content">
                Analyze historical project data to enable more accurate cost predictions and budgeting for new projects.
                Real-time monitoring of material price fluctuations and labor costs ensures effective cost control.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Project Progress Management:
            </span>
            <span class="content">
                Collect progress data during construction to scientifically and effectively monitor and adjust project
                timelines, avoiding delays.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Construction Quality Monitoring:
            </span>
            <span class="content">
                Combine sensor technology and big data analysis to detect quality issues in real time, provide early
                warnings, and take proactive measures to ensure building safety and reliability.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Environmental Impact Assessment:
            </span>
            <span class="content">
                Analyze environmental data surrounding construction sites to evaluate the impact of construction
                activities on the environment and guide adjustments to green construction plans.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Building Design Optimization:
            </span>
            <span class="content">
                Using multidimensional data such as user behavior, energy consumption, and comfort levels, we create
                refined and personalized design solutions to enhance building performance and user experience.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Intelligent Management During Operation and Maintenance (O&M) Stage:
            </span>
            <span class="content">
                Real-time collection of equipment operation status and energy consumption data to enable smart facility
                management, reducing costs and extending the lifespan of facilities.
            </span>
        </div>
        <div class="content-item">
            <span class="title">
                Market Trend Insights:
            </span>
            <span class="content">
                Deeply analyze macro data such as real estate market sales and investments, helping enterprises
                accurately grasp industry trends and strategically plan investment projects and development strategies.
            </span>
        </div>
        <div class="content-item">
            <img :src="industry48715187" alt="industry48715187" />
        </div>
    </div>
    <div class="intro-text">
        <p>
            The widespread application of data analysis in the construction industry plays a crucial role in driving the
            digital transformation of the entire sector and enhancing core competitiveness.
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

.construction-box {
    width: 1036px;
    height: 279px;
    margin: 20px auto;

    img {
        width: 100%;
    }
}

.content-box {
    width: 1036px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .content-item {
        width: 47%;
        height: 120px;
        text-align: left;

        .title {
            font-weight: bold;
            font-size: 14px;
        }

        .content {
            font-size: 14px;
            color: #666666;
        }

        img {
            width: 100%;
        }
    }
}
</style>