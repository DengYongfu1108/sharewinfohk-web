<script setup>
import thanking from '../../assets/images/thanking.png'
</script>
<template>
    <div class="container">
        <div class="content-text">
            <p>We insist on thinking from the customer's perspective and breaking conventions with our leading
                interactive strategy thinking mode. We firmly believe that every successful project is the result of
                good collaboration.</p>
            <p>
                We think and innovate together to help clients find the best interactive solutions that are close to
                their target audience.
            </p>
        </div>
        <div class="thanking-img">
            <img :src="thanking" />
        </div>
    </div>
</template>
<style scoped lang="less">
.container {
    height: 400px;
    width: 800px;
    margin: 0px auto;
}

.content-text {
    width: 100%;

    p {
        color: #999999;
        font-size: 14px;
    }
}

.thanking-img {
    width: 675px;
    height: 249px;
    margin: 0px auto;
    border-radius: 10px;
    animation: scaleAnimation 3s infinite alternate;
    transition: 1s;

    img {
        height: 100%;
        width: 100%;
    }
}

@keyframes scaleAnimation {
    0% {
        /* 初始状态，缩放比例为 1 */
        transform: scale(0.9);
    }

    50% {
        /* 中间状态，放大到原来的 1.5 倍 */
        transform: scale(1);
    }

    100% {
        /* 结束状态，缩小回原来的大小 */
        transform: scale(0.9);
    }
}
</style>