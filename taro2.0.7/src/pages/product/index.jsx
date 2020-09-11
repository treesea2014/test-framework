import Taro, {Component} from "@tarojs/taro";
import {View, Image, Button} from "@tarojs/components";
import {data100} from "./data/data100.js";
import {getAverage, init} from "./../../utils/timeStore"
import Product from "./components/product"

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
    }

    setPage(pageSize = 100) {
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
                let {dataList} = this.state
                dataList.push(showList[i])
                this.setState({
                    dataList: dataList
                })
                clearTimeout(timeout)
            }, i * 1000);
        }
    }



    render() {
        let {dataList} = this.state;
        return (
            <View>
                <Button onClick={this.getResult.bind(this)}>获取结果</Button>
                <Button onClick={this.start.bind(this)}>start</Button>
                {dataList.map((item, index) => {
                    return <Product dataList={item} key={index}/>
                })}
            </View>
        );
    }

    getResult() {
        wx.showModal({
            content: getAverage().toString(),
        });
    }
    start(){
        init()
        this.setPage(10)
    }

}
