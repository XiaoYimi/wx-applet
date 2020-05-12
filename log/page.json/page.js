// page.json

const json = {
  navigationBarBackgroundColor: '页面标题栏背景色',
  navigationBarTextStyle: 'black' | 'white',
  navigationBarTitleText: '页面标题文本',
  navigationStyle: 'default' | 'custom', // 是否自定义标题栏样式
  
  enablePullDownRefresh: false | true, // 是否开启下拉刷新
  backgroundTextStyle: '下拉 loading 的文本颜色',

  onReachBottomDistance: 50, // 页面上拉触底事件触发时距页面底部距离, 单位 px

  backgroundColor: '下/上拉后的窗体背景颜色', // 上/下拉多出的窗体背景色
  backgroundColorTop: '下/上拉后的顶部窗口的背景色(IOS > 6.5)',
  backgroundColorBottom: '下/上拉后的底部窗口的背景色(IOS > 6.5)',

  pageOrientation: 'portrait' | 'auto' | 'landscape', // 屏幕旋转设置

  disableScroll: false | true, // 页面整体无法滚动

  usingComponents: {}, // 页面自定义组件配置

  style: 'default', // 启用新版组件样式

}