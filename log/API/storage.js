// 数据缓存 API 

// Storage 单 key <= 1Mb, 总数据 <= 10Mb

// Storage 存储数据
wx.setStorage({
  key: '',
  data: '',
})

// Storage 获取数据
wx.getStorage({
  key: '',
  success: res => {
    res.data
  }
})

// Storage 移除数据
wx.removeStorage({
  key: '',
  success: res => {
    res
  }
})

// 清除所有 Storage
wx.clearStorage()