import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  config = {
    navigationBarTitleText: "taro2.0.7版",
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"
  };

  render() {
    return (
      <View>
        <Button onClick={this.gotoProduct.bind(this)}>商品列表</Button>
      </View>
    );
  }
  gotoProduct() {
    Taro.navigateTo({
      url: "/pages/product/index"
    });
  }
}
