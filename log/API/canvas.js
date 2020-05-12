// Canvas 绘图 API

// 获取页面 Canvas 实例 (2.9.0)
wx.createSelectorQuery().select('css-selector')
  .fields({ node: true, size: true })
  .exec(res => {
    const canvas = res[0].node // canvas 节点对象
    const dpr = wx.getSystemInfoSync().pixelRatio  // 分辨率
    const ctx = canvas.getContext('2d') // canvas 上下文对象
    canvas.width = res[0].width * dpr
    canvas.height = res[0].height * dpr
    ctx.scale(dpr, dpr) // 保证 canvas 不变形

    ctx.fillRect(0, 0, 100, 100)
  })


// ctx 上下文对象属性 (跟 HTML Canvas API 一致)
