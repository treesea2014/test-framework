export let PAGE_TIME = []
export let COMPONENT_TIME = []
export let RENDERSTART_TIME = null

export function getAverage() {
    let comCost = COMPONENT_TIME[COMPONENT_TIME.length - 1] - RENDERSTART_TIME
    let pageCost = PAGE_TIME[PAGE_TIME.length - 1] - RENDERSTART_TIME
    console.log("RENDERSTART_TIME,COMPONENT_TIME, PAGE_TIME")
    console.log(RENDERSTART_TIME, COMPONENT_TIME, PAGE_TIME)
    console.log(comCost)
    console.log(pageCost)


    // let pageAverage = 0
    // if (PAGE_TIME.length === 0) {
    //     pageAverage = 0
    // } else {
    //     let pageSum = 0
    //     PAGE_TIME.forEach(item => {
    //         pageSum += item
    //     })
    //     pageAverage = pageSum / PAGE_TIME.length
    // }
    //
    // //////////////////
    //
    // let componentAverage = 0
    // if (COMPONENT_TIME.length === 0) {
    //     componentAverage = 0
    // } else {
    //     let componentSum = 0
    //     COMPONENT_TIME.forEach(item => {
    //         componentSum += item
    //     })
    //     componentAverage = componentSum / COMPONENT_TIME.length
    // }


    // return [pageAverage.toFixed(4), componentAverage.toFixed(4)]
    return comCost || pageCost
}

export function init() {
    RENDERSTART_TIME = Date.now()
    COMPONENT_TIME = []
    PAGE_TIME = []
}
