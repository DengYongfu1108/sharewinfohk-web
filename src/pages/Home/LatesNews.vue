<script setup>
import latestnews1 from '../../assets/images/latestnews3.jpg'
import latestnews2 from '../../assets/images/latestnews2.png'
import latestnews3 from '../../assets/images/latestnews1.jpg'
import latestnews4 from '../../assets/images/latestnews4.jpg'
</script>

<template>
    <div class="contanier">
        <div class="wall-left">
            <div class="img1">
                <img :src="latestnews1" />
                <div class="masking">
                    <h3>Shanghai International Import Expo</h3>
                    <h5>————— Exploring Technology</h5>
                </div>
            </div>
            <div class="img3">
                <img :src="latestnews3" />
                <div class="masking">
                    <h3>Microsoft Promotion Week</h3>
                    <h5>————————————</h5>
                </div>
            </div>
        </div>

        <div class="wall-right">
            <div class="img2">
                <img :src="latestnews2" />
                <div class="masking">
                    <h3>Project Management</h3>
                    <h5>——————&nbsp;&nbsp;·&nbsp;&nbsp;——————</h5>
                </div>
            </div>
            <div class="img4">
                <img :src="latestnews4" />
                <div class="masking">
                    <h3>AI Popular Science</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.contanier {
    width: 1200px;
    height: 865px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
}

.wall-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img1 {
        width: 739px;
        height: 525px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .masking {
            height: 100%;
            width: 100%;
            transition: 0.2s;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h3,
            h5 {
                color: white;
                padding-right: 50px;
                text-align: right;
                transition: 0.2s;
            }
        }

        .masking:hover {
            cursor: pointer;
            background-color: rgba(15, 3, 43, 0.8);

            h5 {
                margin-bottom: 40px;
            }
        }
    }

    .img3 {
        width: 739px;
        height: 324px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .masking {
            height: 100%;
            width: 100%;
            transition: 0.2s;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h3,
            h5 {
                color: white;
                padding-left: 30px;
                text-align: left;
                transition: 0.2s;
            }

            h3 {
                margin: 0px;
            }
        }

        .masking:hover {
            cursor: pointer;
            background-color: rgba(15, 3, 43, 0.8);

            h5 {
                margin-bottom: 40px;
            }
        }
    }

}

.wall-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img2 {
        width: 445px;
        height: 332px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .masking {
            height: 100%;
            width: 100%;
            transition: 0.2s;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h3,
            h5 {
                color: white;
                padding-right: 50px;
                text-align: right;
                transition: 0.2s;
            }

            h3 {
                margin: 0px;
            }
        }

        .masking:hover {
            cursor: pointer;
            background-color: rgba(15, 3, 43, 0.8);

            h5 {
                margin-bottom: 40px;
            }
        }
    }

    .img4 {
        width: 445px;
        height: 515px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .masking {
            height: 100%;
            width: 100%;
            transition: 0.2s;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h3,
            h5 {
                color: white;
                padding-right: 50px;
                margin-bottom: 50px;
                text-align: right;
                transition: 0.2s;
            }
        }

        .masking:hover {
            cursor: pointer;
            background-color: rgba(15, 3, 43, 0.8);

            h3 {
                margin-bottom: 70px;
            }
        }
    }
}
</style>