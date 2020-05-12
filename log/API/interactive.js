// 人机交互


// 1. 提示框
// 显示
wx.showToast({
  title: '提示信息',
  icon: 'success' | 'loading' | 'none',
  duration: 2000
})
// 隐藏
wx.hideToast()

// 2. 对话框
wx.showModal({
  title: '对话框标题',
  content: '对话框内容',
  showCancel: true,
  cancelText: '取消',
  cancelColor: '#000000',
  confirmText: '确定',
  confirmColor: '#576B95',
  success: res => {
    res.confirm // 确定
    res.cancel // 取消
  }
})

// 3. 加载(loading)
// 显示
wx.showLoading({
  title: '提示内容',
  mask: false // 蒙层,防止事件穿透
})
// 隐藏
wx.hideLoading()

// 注意: wx.showLoading 与 wx.showToast 同时只能使用一个

// 4. 底部弹窗选择
wx.showActionSheet({
  itemList: ['...options'],
  itemColor: '#000000', // 选项字体颜色
  success: res => {
    res.tapIndex // 选择项的的索引
    // 注意: 点击取消不会输出索引,只是隐藏弹窗
  }
})