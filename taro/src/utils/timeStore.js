export let PAGE_TIME = []
export let COMPONENT_TIME = []
export function getAverage() {
    console.log(COMPONENT_TIME, PAGE_TIME)
    let pageAverage = 0
    if (PAGE_TIME.length === 0) {
        pageAverage = 0
    } else {
        let pageSum = 0
        PAGE_TIME.forEach(item => {
            pageSum += item
        })
        pageAverage = pageSum / PAGE_TIME.length
    }

    //////////////////

    let componentAverage = 0
    if (COMPONENT_TIME.length === 0) {
        componentAverage = 0
    } else {
        let componentSum = 0
        COMPONENT_TIME.forEach(item => {
            componentSum += item
        })
        componentAverage = componentSum / COMPONENT_TIME.length
    }


    return [pageAverage.toFixed(4), componentAverage.toFixed(4)]

}

export function init() {
    COMPONENT_TIME = []
    PAGE_TIME = []
}
