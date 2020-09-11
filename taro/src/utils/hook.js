import { PAGE_TIME, COMPONENT_TIME } from './timeStore'

const oldPage = Page
Page = function (options) {
    const oldOnLoad = options.onLoad
    options.onLoad = function (args) {
        let oldSetData = this.setData
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            console.log('data======>',data)
            let startTime = Date.now()
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                let diff = endTime - startTime
                PAGE_TIME.push(diff)
                console.error('页面=======>渲染耗时：', startTime, endTime, diff)
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
        let oldSetData = this.setData
        this.setData = function setData(data, callback) {
            if (Object.keys(data).length === 0) return // 忽略空数据
            console.log('data======>',data)
            let startTime = Date.now()
            oldSetData.call(this, data, () => {
                let endTime = Date.now()
                let diff = endTime - startTime
                COMPONENT_TIME.push(diff)
                console.error('组件=======>渲染耗时：', startTime, endTime, diff)
                callback && callback()
            })
        }
        oldCreated && oldCreated.call(this, args)
    }
    return oldComponent(options)
}
export const PerfPage = Page
export const PerfComponent = Component