<script setup>
import logo1 from '../../assets/images/-47769.png';
import logo2 from '../../assets/images/-47768.png';
import logo3 from '../../assets/images/-47767.png';
</script>

<template>
    <div class="container">
        <div class="part-divider">
            <p>NEW PRODUCTS</p>
        </div>
        <div class="content-box">
            <div>
                <div class="logo">
                    <img :src="logo1" />
                </div>
                <div class="item-name">
                    <p>WinBI</p>
                </div>
                <div class="item-text">
                    <p>
                        Win BI is fully compatible with Power BI reports, supporting private deployment, single sign on,
                        DAX data analysis expressions, built-in rich template libraries, and independent management of
                        data and reports.
                    </p>
                </div>
                <div class="item-btn">
                    <span>Learn More</span>
                </div>
            </div>
            <div>
                <div class="logo">
                    <img :src="logo2" />
                </div>
                <div class="item-name">
                    <p>PBI PORTAL</p>
                </div>
                <div class="item-text">
                    <p>
                        Learn More
                        PBI Portal is a data analysis platform built on Microsoft Power BI, which adds more functions to
                        the powerful data analysis capabilities of Power BI while breaking through the limitations of
                        user numbers, helping enterprises create their own Power BI.
                    </p>
                </div>
                <div class="item-btn">
                    <span>Learn More</span>
                </div>
            </div>
            <div>
                <div class="logo">
                    <img :src="logo3" />
                </div>
                <div class="item-name">
                    <p>PBI PLUS</p>
                </div>
                <div class="item-text">
                    <p>
                        Seamless application of Power BI in enterprises
                        Fine grained permission management
                        Low cost multi platform Power BI report display
                        Get rid of the restrictions of Power BI accounts
                    </p>
                </div>
                <div class="item-btn">
                    <span>Learn More</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.container {
    width: 100%;
    min-width: 1200px;
    height: 800px;
    background-image: url('../../assets/images/47766.png');
    background-size: cover;
    background-position: center;
    margin-top: 40px;
}

.part-divider {
    width: 100%;
    height: 40px;
    margin: 50px auto 50px;
    padding-top: 50px;

    p {
        line-height: 40px;
        margin: 0px;
        color: #162335;
        font-size: 36px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
}

.content-box {
    width: 1200px;
    height: 490px;
    display: flex;
    justify-content: space-around;
    margin: 0px auto;


    div {
        height: 100%;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;

        .logo {
            height: 140px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            background-color: transparent !important;

            img {
                height: 60px;
                width: 60px;
            }
        }

        .item-name {
            height: 70px;
            width: 100%;
            padding: 0px;
            background-color: transparent !important;

            p {
                color: white;
                font-size: 26px;
            }
        }

        .item-text {
            height: 120px;
            width: 100%;
            padding: 0px;
            background-color: transparent !important;

            p {
                color: white;
                font-size: 14px;
                text-align: left;
                text-indent: 2em;
            }
        }

        .item-btn {
            height: 140px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;

            span {
                height: 44px;
                width: 128px;
                display: block;
                border-radius: 22px;
                border: 1px solid white;
                line-height: 44px;
                font-size: 12px;
                font-weight: bold;
                color: white;
                transition: 0.1s;
            }

            span:hover {
                cursor: pointer;
                background-color: white;
                color: #9FC4F2;
            }
        }
    }

    div:nth-of-type(1) {
        background-color: #9FC4F2;
    }

    div:nth-of-type(2) {
        background-color: #80B2EE;
    }

    div:nth-of-type(3) {
        background-color: #609EE9;
    }
}
</style>