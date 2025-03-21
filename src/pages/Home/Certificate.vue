<script setup>
import certificate1 from '../../assets/images/certificate1.png';
import certificate2 from '../../assets/images/certificate2.png';
import certificate3 from '../../assets/images/certificate3.png';
import certificate4 from '../../assets/images/certificate4.png';
import certificate5 from '../../assets/images/certificate5.png';
const srcList = [certificate1, certificate2, certificate3, certificate4, certificate5];
</script>
<template>
    <div class="container">
        <div class="certificate-item">
            <el-image :src="certificate1" class="images" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :preview-src-list="srcList" :initial-index="4" fit="cover" />
        </div>
        <div class="certificate-item">
            <el-image :src="certificate2" class="images" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :preview-src-list="srcList" :initial-index="4" fit="cover" />
        </div>
        <div class="certificate-item">
            <el-image :src="certificate3" class="images" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :preview-src-list="srcList" :initial-index="4" fit="cover" />
        </div>
        <div class="certificate-item">
            <el-image :src="certificate4" class="images" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :preview-src-list="srcList" :initial-index="4" fit="cover" />
        </div>
        <div class="certificate-item">
            <el-image :src="certificate5" class="images" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :preview-src-list="srcList" :initial-index="4" fit="cover" />
        </div>
    </div>
</template>

<style scoped lang="less">
.container {
    width: 1200px;
    height: 370px;
    box-sizing: border-box;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.certificate-item {
    width: 200px;
    height: 280px;
    border: 1px solid blue;

    .images {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>