import { data100 } from "./data/data100"
import { getAverage, init } from "./../../utils/timeStore"
Page({
    data: {
        dataList: []
    },
    onLoad(options) {
    },
    setPage(pageSize = 10) {
        let showList = []; pageSize = pageSize - 0;
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
                this.setData({
                    ['dataList[' + i + ']']: showList[i]
                })
                clearTimeout(timeout)
            }, i * 1000)
        }
    },
    getResult() {
        wx.showModal({
            content: getAverage().toString()
        })
    },
    start(){
        init()
        this.setPage(10)
    },
    onUnload() {
        init()
    }
})