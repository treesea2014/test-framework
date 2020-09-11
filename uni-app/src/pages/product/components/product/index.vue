<template>
    <view v-for="(item,index) in dataList" :key="index">
        <view>{{index}}{{item.skuName}}</view>
        <image :src="item.imgUrl"/>
    </view>
</template>

<script>
    export default {
        name: "product",
        props: {
            dataList: []
        }
    }
</script>

<style scoped>

</style>