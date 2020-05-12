// 关于底部 Tabbar
// 版本库 > 1.9.0

// 对底部 Tabbar 显示红点
wx.showTabBarRedDot({
  index: 0,
})
// 对底部 Tabbar 隐藏红点
wx.showTabBarRedDot({
  index: 0,
})

// 对底部 Tabbar 添加文本提示
wx.setTabBarBadge({
  index: 0,
  text: '1'
})
// 对底部 Tabbar 移除文本提示
wx.removeTabBarBadge({
  index: 0,
})



// 显示底部 Tabbar
wx.showTabBar({
  animation: false
})
// 隐藏底部 Tabbar
wx.hideTabBar({
  animation: false
})


// 重设底部 Tabbar 的样式
wx.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})

// 重设底部 Tabbar 选项
wx.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})