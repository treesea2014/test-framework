const myPage = Page
module.exports = function (e) {
  let {
    onLoad
  } = e
  e.onLoad = (onLoad => {
    return function (res) {
      let { setData } = this
      Object.defineProperty(this.__proto__, 'setData', {
        configurable: false,
        enumerable: false,
        value(...param) {

          return setData.apply(this, param)
        }
      })
      onLoad && onLoad.call(this, res)
    }
  })(onLoad)
  return myPage.call(this, e)
}