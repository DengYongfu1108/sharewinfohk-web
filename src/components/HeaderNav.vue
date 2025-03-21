<script setup>
import logoUrl from '../assets/images/logo.png'
// list-item
import listitem1 from '../assets/products/48334894.png';
import listitem2 from '../assets/products/48374757.png';
import listitem3 from '../assets/products/48374813.png';

import listitem4 from '../assets/products/48396516.png';
import listitem5 from '../assets/products/48396517.png';
import listitem6 from '../assets/products/48732778.png';

import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
const listItems = ref([ref(null), ref(null), ref(null), ref(null), ref(null), ref(null)]);
const hoverBgRef = ref(null);
const router = useRouter();
const removeAllStyle = () => {
    listItems.value.forEach((itemRef) => {
        const item = itemRef.value;
        if (item) {
            item.style.backgroundColor = 'transparent'
            item.style.color = '#666666'
        }
    });
}

const toPage = (path) => {
    router.push(path)
}
const toLink = (path) => {
    window.open(path, '_blank');
}

onMounted(() => {
    let itemN = 0;
    listItems.value.forEach((itemRef) => {
        const item = itemRef.value;
        if (item && itemN != 0) {
            item.addEventListener('mouseenter', () => {
                removeAllStyle();
                item.style.backgroundColor = '#F5F7F9'
                item.style.color = '#3878FF'
            });
        }
        itemN++;
    });
});
const handleLiMouseEnter = () => {
    removeAllStyle();
};
</script>

<template>
    <div class="header-box">
        <div class="logo-box" style="cursor: pointer;">
            <img :src='logoUrl' @click="toPage('/')" />
        </div>
        <div class="nav-list">
            <ul class="list-box">
                <li :ref="listItems[0]" @click="toPage('/')">
                    Home Page
                </li>
                <li :ref="listItems[1]" class="products-list" @mouseleave="handleLiMouseEnter">
                    Products
                    <div class="products-box">
                        <!-- Data Analysis -->
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem1" />
                                <span>Data Analysis</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/productsDap')">Data Analytics Platform</span>
                                <span @click="toPage('/productsDae')">Data Analysis Engine</span>
                                <span @click="toPage('/productsWinBi')">WinBI</span>
                                <span @click="toPage('/productsDqt')">Databricks Query Tool</span>
                            </div>
                        </div>
                        <!-- Data Visualization -->
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem2" />
                                <span>Data Visualization</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/ProductsPBIPortal')">PBI Portal</span>
                                <span @click="toLink('https://www.pbiplus.com/')">PBI PLUS</span>
                                <span @click="toPage('/ProductsPBIVisual')">PBI Visual</span>
                                <span @click="toPage('/ProductsPPT')">PBI PPT</span>
                            </div>
                        </div>
                        <!-- Solution -->
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem3" />
                                <span>Data Management</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/ProductsDMP')">Data Management Platfomm</span>
                                <span @click="toPage('/ProductsDdm')">Data Directory Management</span>
                                <span @click="toPage('/ProductsDqm')">Data Quality Management</span>
                                <span @click="toPage('/ProductsBLis')">Bl Large Screen</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li :ref="listItems[2]" class="solution-list" @mouseleave="handleLiMouseEnter">
                    Solution
                    <div class="solution-box">
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem4" />
                                <span>Data Analysis</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/SolutionAzureBi')">Azure Bl</span>
                                <span @click="toPage('/SolutionPpf')">Power PlatForm</span>
                                <span @click="toPage('/SolutionDap')">Data Analysis Platform</span>
                                <span @click="toPage('/SolutionIM')">Index Management</span>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem5" />
                                <span>Data Science</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/SolutionDP')">Data Prediction</span>
                                <span @click="toPage('/SolutionMiniTab')">Minitab</span>
                                <span @click="toPage('/SolutionWeBull')">Weibull++</span>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem6" />
                                <span>Solution</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/SolutionDMP')">Data Middle Platform</span>
                                <span @click="toPage('/SolutionEDW')">Enterrise Data Warehouse</span>
                                <span @click="toPage('/SolutionDG')">Data Govemance</span>
                                <span @click="toPage('/SolutionDO')">Data Ops</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li :ref="listItems[3]" class="services-list" @mouseleave="handleLiMouseEnter">
                    Services
                    <div class="services-box">
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem4" />
                                <span>Implementation</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/ServicesDAP')">Data Analysis Project</span>
                                <span @click="toPage('/ServicesAB')">Agile Bl</span>
                                <span @click="toPage('/ServicesIT')">Implementation Team</span>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem5" />
                                <span>Business</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/ServicesCP')">CRM Platform</span>
                                <span @click="toPage('/ServicesEM')">Engineering Management</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li :ref="listItems[4]" class="industry-list" @mouseleave="handleLiMouseEnter">
                    Industry Case
                    <div class="industry-box">
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem4" />
                                <span>Success Stories</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/IndustryRetail')">Retail</span>
                                <span @click="toPage('/IndustryM')">Manufacturing</span>
                                <span @click="toPage('/IndustryCI')">Construction industry</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li :ref="listItems[5]" class="aboutus-list" @mouseleave="handleLiMouseEnter">
                    About Us
                    <div class="aboutus-box">
                        <div class="list-item-box">
                            <div class="list-title">
                                <img :src="listitem4" />
                                <span>Introduction</span>
                            </div>
                            <div class="target-link">
                                <span @click="toPage('/AboutUsEH')">Enterprise Honor</span>
                                <span @click="toPage('/AboutUsPartner')">Partners</span>
                                <span @click="toPage('/AboutUsCantactUs')">Contact Us</span>
                            </div>
                        </div>
                    </div>
                </li>
                <div class="hover-bg" :ref="hoverBgRef" @mouseleave="handleLiMouseEnter"> </div>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
.header-box {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-box {
    height: inherit;
    width: 191px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 112px;
        height: 29px;
    }
}

.nav-list {
    height: 60px;
    width: 900px;
    min-width: 800px;
    position: relative;

    .list-box {
        width: 100%;
        height: 60px;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: space-between;

        li {
            width: 150px;
            height: 60px;
            text-align: center;
            list-style: none;
            font-size: 14px;
            color: #666666;
            cursor: pointer;
            line-height: 60px;
        }

        li:hover {
            color: #3878FF;
            background-color: #F5F7F9;
        }
    }


    .hover-bg {
        display: none;
        width: 1291px;
        height: 270px;
        background: white;
        position: absolute;
        top: 60px;
        left: -270px;
        z-index: 10;
    }
}

/* 使用相邻兄弟选择器 */
// .list-box:hover .hover-bg {
//     display: block;
// }
.products-list:hover~.hover-bg,
.solution-list:hover~.hover-bg,
.services-list:hover~.hover-bg,
.industry-list:hover~.hover-bg,
.aboutus-list:hover~.hover-bg {
    display: block;
}



.list-item-box {
    height: 100%;
    width: auto;
    margin-right: 20px;

    .list-title {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);

        img {
            height: 34px;
            width: 34px;
        }

        span {
            margin-left: 10px;
        }
    }

    .target-link {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 20px;

        span {
            text-wrap: nowrap;
            height: 40px;
            width: auto;
            padding: 0px 10px;
            text-align: left;
            cursor: pointer;
            line-height: 40px;
            color: #666666;
        }

        span:hover {
            color: #3878FF;
            background-color: aliceblue;
        }
    }
}

.products-list {
    position: relative;
}

.products-box {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 100;
    display: none;
}

.products-list:hover .products-box {
    display: flex;
    flex-wrap: nowrap;
}

.solution-list {
    position: relative;
}

.solution-box {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 100;
    display: none;
}

.solution-list:hover .solution-box {
    display: flex;
    flex-wrap: nowrap;
}



.services-list {
    position: relative;
}

.services-box {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 100;
    display: none;
}

.services-list:hover .services-box {
    display: flex;
    flex-wrap: nowrap;
}

.industry-list {
    position: relative;
}

.industry-box {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 100;
    display: none;
}

.industry-list:hover .industry-box {
    display: flex;
    flex-wrap: nowrap;
}

.aboutus-list {
    position: relative;
}

.aboutus-box {
    height: 270px;
    width: 700px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 100;
    display: none;
}

.aboutus-list:hover .aboutus-box {
    display: flex;
    flex-wrap: nowrap;
}
</style>