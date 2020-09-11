import Taro, {Component} from "@tarojs/taro";
import {View, Image} from "@tarojs/components";
import {data100} from "./data/data100.js";
import {getAverage, init} from "./../../utils/timeStore"

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dataList} = this.props;
        return (
            <View>
                {dataList.map((item, index) => {
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
