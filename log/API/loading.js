// 关于下拉加载 (loading)
// 版本库 > 2.1.0

// 重设下拉后窗体显示的文本样式
wx.setBackgroundTextStyle({
  textStyle: 'dark' | 'light'
})

// 重设下拉后窗体显示的背景颜色
wx.setBackgroundColor({
  backgroundColor: 'css-color',
  backgroundColorTop: 'css-color',
  backgroundColorBottom: 'css-color'
})


// 开始下拉刷新(与用户操作一致)
wx.startPullDownRefresh()

// 停止下拉刷新
wx.stopPullDownRefresh()