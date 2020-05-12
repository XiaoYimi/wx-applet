// 关于页面 API

// 页面滚动(滚动到指定元素位置 | 坐标位置)
wx.pageScrollTo({
  scrollTop: 0, // 单位 px
  selector: 'css-selector',
  duration: 300
})

// 页面动画
wx.createAnimation({
  duration: 400,
  timingFunction: 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end', // 动画效果
  delay: 0, // 动画延迟

})


// 监听页面键盘高度(2.7.0)
wx.onKeyboardHeightChange(res => console.log(res.height))

// 手动手气键盘 (2.8.2)
wx.hideKeyboard()

// 获取光标位置(2.7.0, 必须存在 focus)
wx.getSelectedTextRange({
  success: res => {
    res.start // 输入框光标起始位置
    res.end // 输入框光标结束位置
  }
})