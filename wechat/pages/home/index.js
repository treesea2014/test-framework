Page({
    data: {

    },
    onLoad() {
    },
    gotoProduct(e) {
        let { size } = e.currentTarget.dataset
        wx.navigateTo({
            url: '/pages/product/index?pageSize=' + size
        })
    }
})