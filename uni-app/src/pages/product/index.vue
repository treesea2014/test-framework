<template>
  <view>
    <view>
      <text >{{ title }}</text>
    </view>
    <view v-for="(item, index) in dataList" :key="index">
      <view> {{ index }}{{ item.skuName }} </view>
      <image :src="item.imgUrl" mode=""></image>
    </view>
  </view>
</template>

<script>
import { data100 } from "./data/data100.js";
export default {
  data() {
    return {
      title: "100",
      dataList: [],
    };
  },
  onLoad() {
    console.log("data100", data100);
    this.dataList = data100.slice(0, 20);
  },
  methods: {},
};
</script>

<style></style>
