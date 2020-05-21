// scroll-view 场景

// 可滑动的单向导航栏
// 局部页面的图文展示

// scroll-view 配置

const json = {
  'scroll-x': true,
  'scroll-y': false,

  'enable-flex': true, // 样式 display: flex

  'scroll-into-view': 'id', // 滑动至指定 ID
  'scroll-with-animation': true, // 滑动至指定 ID 启用动画

  'refresher-enabled': true, // 开启自定义刷新
  'refresher-triggered': false, // 自定义刷新状态
  'refresher-threshold': number, // 自定义刷新阀值
  'refresher-background': color, // 自定义刷新区域的背景色
  
  bindscroll: "scrollView", // scroll-view 滑动事件
  bindscrolltoupper: "scrollUpper", // scroll-view 触左顶
  bindscrolltolower: "scrollLower", // scroll-view 触右底
}