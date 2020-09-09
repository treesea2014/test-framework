
const oldPage = Page
Page = function (options) {
    const oldOnLoad = options.onLoad
    options.onLoad = function (args) {
        let oldSetData = this.setData
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            let startTime = Date.now()
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                console.error('页面=======>渲染耗时：', startTime, endTime, endTime - startTime)
                callback && callback()
            })
        }
        oldOnLoad && oldOnLoad.call(this, args)
    }
    return oldPage(options)
}

const oldComponent = Component
Component = function (options) {
    const oldCreated = options.created
    // 兼容微信小程序和支付宝
    options.created = options.onInit = function (args) {
        let oldSetData = this.setData
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            let startTime = Date.now()
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                console.error('组件=======>渲染耗时：', startTime, endTime, endTime - startTime)
                callback && callback()
            })
        }
        oldCreated && oldCreated.call(this, args)
    }
    return oldComponent(options)
}
export const PerfPage = Page
export const PerfComponent = Component