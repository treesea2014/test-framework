<template>
    <view>
        <view>
            <button @click="getResult">获取结果</button>
            <button @click="start()">start</button>
        </view>
        <view v-for="(item, index) in dataList" :key="index">
            {{item.length}}
            <product :dataList="item"/>
        </view>
    </view>
</template>

<script>
    import {getAverage, init} from "./../../utils/timeStore"
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
            setPage(pageSize = 10) {
                let showList = [];
                pageSize = pageSize - 0;
                let pageNum = Math.floor(data100.length / pageSize);
                if (data100.length % pageSize > 0) {
                    pageNum = pageNum + 1;
                }
                for (let i = 0; i < pageNum; i++) {
                    let start = i * pageSize;
                    let end = i * pageSize + pageSize;
                    console.log(start, end);
                    showList[i] = data100.slice(start, end);
                    let timeout = setTimeout(() => {
                        this.dataList.push(showList[i])
                        clearTimeout(timeout);
                    }, i * 1000);
                }
            },
            getResult() {
                wx.showModal({
                    content: getAverage().toString(),
                });
            },
            start(){
                init()
                this.setPage(10);
            }
        },
        onUnload() {
            init();
        },
    };
</script>

<style></style>
