import Taro, {Component} from "@tarojs/taro";
import {View, Image, Button} from "@tarojs/components";
import {data100} from "./data/data100.js";
import {getAverage, init, PAGE_SIZE} from "./../../utils/timeStore"
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

    setPage() {
        let showList = [];
        let pageSize = PAGE_SIZE;
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
                <Button onClick={this.start.bind(this, 10)}>每页渲染10</Button>
                <Button onClick={this.start.bind(this, 20)}>每页渲染20</Button>
                <Button onClick={this.start.bind(this, 30)}>每页渲染30</Button>
                <Button onClick={this.start.bind(this, 40)}>每页渲染40</Button>
                <Button onClick={this.start.bind(this, 50)}>每页渲染50</Button>
                <Button onClick={this.start.bind(this, 100)}>每页渲染100</Button>
                <Button onClick={this.getResult.bind(this)} type='primary'>获取结果</Button>
                {dataList.map((item, index) => {
                    return <Product dataList={item} key={index}/>
                })}
            </View>
        );
    }

    getResult() {
        Taro.showModal({
            content: getAverage().toString(),
        });
    }

    start(size) {
        init(size)
        this.setPage(10)
    }

}
