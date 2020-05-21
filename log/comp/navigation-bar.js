
// navigation-bar 标签属性 
const navigation_bar_property = {
  title: nbTitle, // 标题栏标题, nbTitle 可定义在 data
  loading: false | true, // 是否在标题栏显示加载
  'front-color': nbFrontColor, // 标题栏前景色
  'background-color': nbBackgroundColor, // 标题栏背景色
  'color-animation-duration': 0, // 动画时长
  'color-animation-timing-func': 'linear' | 'easeIn' | 'easeOut' | 'easeInOut', // 动画效果
}

/* <navigation-bar> 注意点
  必须与 <page-meta> 搭配使用(即嵌套外层标签 <page-meta>)
*/


// page-meta 标签属性
const page_meta_property = {
  'background-text-style': 'dark' | 'light', // 下拉加载、字体样式
  'background-color': bgColor,
  'background-color-top': bgColorTop, // (仅 IOS 支持, 2.9.0)
  'background-color-bottom': bgColorBottom, // (仅 IOS 支持, 2.9.0)
  'scroll-top': scrollTop, // 页面滚动位置
  'scroll-duration': 300, // 页面滚动时长
  'page-style': '', // 相当于节点 body 的样式
  'page-style-color': 'green',
  'root-font-size': '16px',
  'bindresize': '页面大小改变后回调',
  'bindscroll': 'scroll-top 页面滚动时回调',
  'bindscrolldone': 'scroll-top 页面滚动后回调'
}


// 页面生命周期设置标题栏效果
const onLoad = () => {
  this.setData({
    property: value
  })
}