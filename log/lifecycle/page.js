// Page 的生命周期
// page.js

const lifecycle = {
  onLoad: '页面加载初始化',
  onShow: 'Page 继 onLoad 后执行,或从后台中切换到当前页面',
  onReady: '页面初次渲染完毕,且一个页面只调用一次',
  onHide: 'Page 从当前页面隐藏到后台中',
  onUnload: '页面卸载'
}

const ctrl = {
  onPullDownRefresh: '页面下拉触底事件',
  onReachBottom: '页面上拉触底事件',
  onPageScroll: '页面滑动事件'
}