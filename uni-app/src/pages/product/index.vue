<template>
    <view>
        <view>
            <button @click="start(10)">每页渲染10条</button>
            <button @click="start(20)">每页渲染20条</button>
            <button @click="start(30)">每页渲染30条</button>
            <button @click="start(50)">每页渲染50条</button>
            <button @click="start(100)">每页渲染100条</button>
            <button @click="getResult" type="primary">获取结果</button>
        </view>
        <view v-for="(item, index) in dataList" :key="index">
            {{item.length}}
            <product :dataList="item"/>
        </view>
    </view>
</template>

<script>
    import {getAverage, init, PAGE_SIZE} from "./../../utils/timeStore"
    import {data100} from "./data/data100.js";
    import product from "./components/product/index";

    export default {
        components: {
            product
        },
        data() {
            return {
                title: "100",
                dataList: [],
            };
        },
        onLoad(options) {
            console.log("data100", data100);
        },
        methods: {
            setPage() {
                let showList = [];
                let pageSize = PAGE_SIZE;
                let pageNum = Math.floor(data100.length / pageSize);
                if (data100.length % pageSize > 0) {
                    pageNum = pageNum + 1
                }
                for (let i = 0; i < pageNum; i++) {
                    let start = i * pageSize;
                    let end = i * pageSize + pageSize;
                    console.log(start, end)
                    showList[i] = data100.slice(start, end)
                    let timeout = setTimeout(() => {
                        this.dataList.push(showList[i])
                        clearTimeout(timeout)
                    }, i * 1000)
                }
            },
            getResult() {
                wx.showModal({
                    content: getAverage().toString(),
                });
            },
            start(size) {
                init(size)
                this.setPage()
            }
        },
        onUnload() {
            init();
        },
    };
</script>

<style></style>
