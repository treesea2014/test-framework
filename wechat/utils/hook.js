import {PAGE_TIME, COMPONENT_TIME} from './timeStore'

const oldPage = Page
Page = function (options) {
    const oldOnLoad = options.onLoad
    options.onLoad = function (args) {
        let oldSetData = this.setData
        console.log('Page oldSetData', oldSetData)
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            console.log('data======>', data)
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                PAGE_TIME.push(endTime)
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
    // 兼容微信小程序
    options.created = options.onInit = function (args) {
        console.log('this.is', this.is)
        let oldSetData = this.setData
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            console.log('data========>', data)
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                COMPONENT_TIME.push(endTime)
                callback && callback()
            })
        }
        oldCreated && oldCreated.call(this, args)
    }
    return oldComponent(options)
}
export const PerfPage = Page
export const PerfComponent = Component