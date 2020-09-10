<template>
  <view>
    <button @click="gotoProduct()">商品列表</button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    gotoProduct: function(e) {
      uni.navigateTo({ url: "/pages/product/index" });
    },
  },
};
</script>

<style></style>
