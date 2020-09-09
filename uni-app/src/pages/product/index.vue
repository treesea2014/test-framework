<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view v-for="(item,index) in dataList" :key="index">
			<view>
				{{index}}{{item.skuName}}
			</view>
			<image :src="item.imgUrl" mode=""></image>
		</view>

	</view>
</template>

<script>
	import {
		data100
	} from "./data/data100.js"
	export default {
		data() {
			return {
				title: '100',
				dataList:[]
			}
		},
		onLoad() {
			console.log("data100",data100)
			this.dataList = data100
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
