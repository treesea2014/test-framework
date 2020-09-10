import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { data100 } from "./data/data100.js";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "100",
      dataList: []
    };
  }
  componentWillMount() {
    console.log("data100", data100);
    this.setState({
      dataList: data100.slice(0, 20)
    });
  }
  render() {
    let { dataList } = this.state;
    return (
      <View>
        <View>{title}</View>
        {dataList.map((item,index) => {
          return (
            <View key={item.id}>
              <View>
                {index}
                {item.skuName}
              </View>
              <Image src={item.imgUrl}></Image>
            </View>
          );
        })}
      </View>
    );
  }
}
