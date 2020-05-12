// 关于标题栏(导航条)的 API

// 重设标题栏字体颜色和背景颜色
wx.setNavigationBarColor({
  frontColor: '',
  backgroundColor: '',
})

// 重设标题栏文本内容
wx.setNavigationBarTitle({
  title: '',
})

// 隐藏主页按钮
// > 7.0.7 非首页自动显示主页按钮,可在页面生命周期 onShow 进行隐藏
wx.wx.hideHomeButton()


// 获取胶囊按钮信息 (2.1.0)
const {
  width,
  height,
  top,
  left,
  right,
  bottom
} = wx.getMenuButtonBoundingClientRect()
