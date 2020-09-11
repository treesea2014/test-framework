export let PAGE_TIME = []
export let COMPONENT_TIME = []
export let RENDERSTART_TIME = null
export let PAGE_SIZE = 10

export function getAverage() {
    let comCost = COMPONENT_TIME[COMPONENT_TIME.length - 1] - RENDERSTART_TIME
    let pageCost = PAGE_TIME[PAGE_TIME.length - 1] - RENDERSTART_TIME
    console.log("RENDERSTART_TIME,COMPONENT_TIME, PAGE_TIME")
    console.log(RENDERSTART_TIME, COMPONENT_TIME, PAGE_TIME, PAGE_SIZE)
    console.log(comCost)
    console.log(pageCost)
    let time = comCost || pageCost,
        pageNum = 200 / PAGE_SIZE
    return `本次渲染数据列表200条，每页显示${PAGE_SIZE}条，总渲染时间${time}ms,平均每页耗时${time / pageNum}`
}

export function init(pagaSize = 10) {
    PAGE_SIZE = pagaSize
    RENDERSTART_TIME = Date.now()
    COMPONENT_TIME = []
    PAGE_TIME = []
    console.log('开始计时，pageSize', PAGE_SIZE, RENDERSTART_TIME, COMPONENT_TIME, PAGE_TIME)
}

