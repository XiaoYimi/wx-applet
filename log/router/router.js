// 微信小程序路由 (栈存储的形式)

// 栈: 后进先出的数据结构

// 初始化|打开页面  ----  当前路由入栈 (wx.navigateTo)
// 重定向页面  ----  当前路由出栈,新页面路由入栈 (wx.redirectTo)
// 页面返回  ----  页面不断出栈,找到目标页面栈为止 (wx.navigateBack)
// Tab 页面  ----  全部页面出栈,Tab 页面入栈 (wx.switchTab)
// 重加载页面(重启动)  ----  全部页面出栈, 重加载的页面入栈 (wx.reLaunch)


// 注意: 
// 1. navigateTo, redirectTo 只能打开非 Tab 页面
// 2. switchTab 只能打开 Tab 页面
// 3. reLaunch 打开任何页面

// 路由参数
// 路由参数可以在新页面的 onLoad 事件中(option)获取

// 获取当前页面栈 getCurrentPages()

// 页面返回 n 层: wx.navigateBack({ delta: n })