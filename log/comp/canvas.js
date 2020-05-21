
const property = {
  type: '2d (2.9.0)' | 'webgl (2.7.0)',
  'canvas-id': '#id', // 同一页面唯一
  'disable-scroll': false | true, // 地图是否绑定手势事件,移动时禁止下拉刷新或屏幕滚动
  bindtouchstart: '触摸动作开始',
  bindtouchmove: '触摸并移动',
  bindtouchend: '触摸动作结束',
  bindtouchcancel: '触摸动作被打断',
  bindlongtap: '触摸长按',
  binderror: '发生错误'
}


// 页面生命周期
const onReady = () => {
  wx.createSelectorQuery().select('#myCanvasID')
    .fields({ node: true, size: true })
    .exec((res) => {
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')

      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      ctx.scale(dpr, dpr)
      ctx.fillRect(0, 0, 100, 100)
    })
}