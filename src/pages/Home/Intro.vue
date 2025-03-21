<script setup>
import { ref } from 'vue';
import content1 from '../../assets/images/content1.png';
import content2 from '../../assets/images/27305022.jpg';
import content3 from '../../assets/images/content3.png';
const activeNav = ref(0);
const changeNav = (index) => {
    activeNav.value = index;
}
</script>

<template>
    <div class="container">
        <div class="nav-list">
            <div :class="activeNav == 0 ? 'nav-item-bg nav-item' : 'nav-item'" @click="changeNav(0)">
                <span>About Us</span>
            </div>
            <div :class="activeNav == 1 ? 'nav-item-bg nav-item' : 'nav-item'" @click="changeNav(1)">
                <span>Company Philosophy</span>
            </div>
            <div :class="activeNav == 2 ? 'nav-item-bg nav-item' : 'nav-item'" @click="changeNav(2)">
                <span>Company Vision</span>
            </div>
        </div>
        <div class="content-box">
            <div class="content-a" v-if="activeNav == 0">
                <span class="tilte">Beijing Sharewinfo Technology Co., Ltd</span>
                <div class="about-us">
                    <span>ABOUT US</span>
                </div>
                <div class="intro-content">
                    <p>Beijing Sharewinfo was founded in 2010 and is a company focused on enterprise level big data
                        analysis and digital transformation.</p>
                    <p>Headquartered in Beijing, China, it currently includes Beijing headquarters, Chengdu branch,
                        Hangzhou branch, Tianjin branch, and Shenzhen office. The company has multiple proprietary
                        products, including PBI PLUS (PBI mobile), PBI Portal (data analysis platform), PBI Visual (data
                        visualization control), Info Data (data governance platform) and other products.</p>
                    <p>After more than 10 years of effort, Beijing Sharewinfo has gained recognition from a large number
                        of customers and industry experts and has become an innovative and competitive manufacturer in
                        the field of data analysis in China. As a world-class gold partner of Microsoft Data Analytics,
                        we have completed enterprise level data analytics solutions for multiple industries. We also
                        have a large team of practical engineers with expertise in manufacturing, finance, retail, real
                        estate, healthcare, and other industries and fields, making Beijing Sharewinfo a professional,
                        intelligent, dedicated, and pragmatic team in the field of data analysis.</p>
                </div>
                <div class="intro-image">
                    <img :src="content1" />
                    <div class="squre"></div>
                </div>
            </div>
            <div class="content-b" v-if="activeNav == 1">
                <div class="content-image">
                    <div class="img-box">
                        <img :src="content2" />
                        <div class="squre"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="philosophy">
                        <span>OUR PHILOSOPHY</span>
                    </div>
                    <div class="content-text">
                        <p>Our development not only comes from our focus on professional fields, but also from our
                            achievement of others' business philosophy, standardized management mode, and perfect
                            operational system.</p>
                        <p>
                            The company philosophy of Sharewinfo is to simplify and popularize business intelligence and
                            data analysis, using cloud technology, big data technology, BI and other technologies to
                            help enterprise data teams solve the most difficult business problems.
                        </p>
                    </div>
                </div>
            </div>
            <div class="content-c" v-if="activeNav == 2">
                <div class="image-box">
                    <div class="img-content">
                        <img :src="content3" />
                        <div class="squre"></div>
                    </div>
                </div>
                <div class="company-version">
                    <span>COMPANY VISION</span>
                </div>
                <div class="company-version-content">
                    <p>Promote implementation in the professional field and help clients find the best solutions to
                        solve problems; For the future, we will continue to innovate and deeply integrate with advanced
                        productive forces in society, adhering to the corporate spirit of "customer-centric", in order
                        to achieve our common goals!</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="less">
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.container {
    width: 1200px;
    height: 600px;
    min-width: 1200px;
    margin: 25px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .nav-list {
        height: 100%;
        width: 200px;
        min-width: 200px;
        font-size: 14px;
        color: #666666;

        .nav-item {
            height: 200px;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(0, 0, 0, 0.1);
            cursor: pointer;

            span {
                cursor: pointer;
            }
        }

        .nav-item:nth-child(n+2) {
            border-top: none;
        }

        .nav-item-bg {
            color: #FFFFFF;
            background-color: #609ee9;
        }
    }

    .content-box {
        flex: 1;
        height: 100%;

        .content-a {
            height: 100%;
            width: 100%;
            padding: 40px 20px 0px 90px;
            text-align: left;

            .tilte {
                color: #222222;
                font-size: 22px;
                font-family: Arial, Helvetica, sans-serif;
                text-align: left;
            }

            .about-us {
                width: 100%;
                height: 50px;
                margin-top: 8px;
                border-bottom: 1px solid #609EE9;

                span {
                    letter-spacing: 10px;
                    color: #609EE9;
                    font-size: 12px;
                }
            }

            .intro-content {
                padding-top: 20px;

                p {
                    color: #555555;
                    font-size: 14px;
                    font-family: Arial, Helvetica, sans-serif;
                    letter-spacing: 1px;
                    margin: 5px 0px 5px;
                    text-indent: 2em;
                }
            }

            .intro-image {
                width: 660px;
                height: 154px;
                margin: 40px auto;
                background-image: radial-gradient(#213fe9 10%, transparent 11%);
                background-size: 12px 12px;
                /* 设置背景大小，控制点状分布 */
                background-position: 0 0, 5px 5px;
                position: relative;

                /* 设置背景位置，使点错开 */
                img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 40px;
                    left: 80px;
                }

                .squre {
                    height: 15px;
                    width: 15px;
                    background-color: #609EE9;
                    position: absolute;
                    top: 30px;
                    left: 70px;
                }
            }
        }

        .content-b {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .content-image {
                width: 50%;
                height: 100%;
                padding: 100px 60px 40px 40px;
                display: flex;
                justify-content: center;
                align-content: center;

                .img-box {
                    height: 460px;
                    width: 310px;
                    background-image: radial-gradient(#213fe9 10%, transparent 11%);
                    background-size: 12px 12px;
                    /* 设置背景大小，控制点状分布 */
                    background-position: 0 0, 5px 5px;
                    position: relative;

                    img {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        top: -30px;
                        left: -50px;
                    }

                    .squre {
                        height: 15px;
                        width: 15px;
                        background-color: #609EE9;
                        position: absolute;
                        top: -5px;
                        right: -5px;
                    }
                }
            }

            .content {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .philosophy {
                    width: 100%;
                    height: 50px;
                    margin-top: 8px;
                    border-bottom: 1px solid #609EE9;
                    text-align: left;

                    span {
                        letter-spacing: 10px;
                        color: #609EE9;
                        font-size: 12px;
                    }
                }

                .content-text {
                    width: 100%;
                    text-align: left;
                    margin-top: 40px;

                    p {
                        color: #555555;
                        font-size: 14px;
                        line-height: 26px;
                        font-family: Arial, Helvetica, sans-serif;
                        letter-spacing: 1px;
                        margin: 5px 0px 5px;
                        text-indent: 2em;
                    }
                }
            }
        }

        .content-c {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .image-box {
                height: 170px;
                width: 770px;
                padding-left: 40px;

                .img-content {
                    width: 100%;
                    height: 100%;
                    background-image: radial-gradient(#213fe9 10%, transparent 11%);
                    background-size: 12px 12px;
                    /* 设置背景大小，控制点状分布 */
                    background-position: 0 0, 5px 5px;
                    position: relative;

                    img {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        top: -40px;
                        left: -80px;
                    }

                    .squre {
                        height: 15px;
                        width: 15px;
                        background-color: #609EE9;
                        position: absolute;
                        bottom: 30px;
                        right: 70px;
                    }
                }
            }

            .company-version {
                margin-top: 50px;
                width: 850px;
                height: 60px;
                text-align: left;
                border-bottom: 1px solid #609EE9;

                span {
                    letter-spacing: 10px;
                    color: #609EE9;
                    font-size: 12px;
                }
            }

            .company-version-content {
                width: 850px;
                text-align: left;
                margin-top: 20px;

                p {
                    color: #555555;
                    font-size: 14px;
                    line-height: 26px;
                    font-family: Arial, Helvetica, sans-serif;
                    letter-spacing: 1px;
                    margin: 5px 0px 5px;
                    text-indent: 2em;
                }
            }
        }
    }
}
</style>