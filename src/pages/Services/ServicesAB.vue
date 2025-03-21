<script setup>
import HeaderNav from '../../components/HeaderNav.vue';
import Footer from '../../components/Footer.vue';
import services48709514 from '../../assets/services/services48709514.png';
import services55453333 from '../../assets/services/services55453333.png';

</script>


<template>
    <HeaderNav />
    <div class="top-container">
        <img :src="services48709514" />
        <p>
            Agile BI
        </p>
    </div>
    <div class="intro-text">
        <p>
            Our project management follows a well-established management process and system. Unlike traditional
            waterfall project management, the agile methodology emphasizes the flexible response to changes throughout
            the project cycle, continuous collaboration, delivery of usable software, and close cooperation with
            clients.
        </p>
        <p>
            In agile BI project management, the team is usually divided into several cross-functional roles, including
            Product Owner, Scrum Master, and development team members. Efficient project management is achieved through
            agile ceremonies such as sprint planning meetings, daily stand-ups, sprint reviews, and sprint
            retrospectives, as well as tools like product backlog, sprint backlog, and burn-down charts.
        </p>
    </div>
    <div class="pbi-portal">
        <img :src="services55453333" alt="solution48695953" />
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