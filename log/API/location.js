// 关于位置信息 API

// 获取当前位置，速度,高度 (最好指定 gcj02)
wx.getLocation({
  type: 'gcj02',
  success: res => {
    res.longitude // 经度 [-180 - 180]
    res.latitude // 纬度 [-90 - 90]
    res.speed // 速度
    res.altitude  // 高度
  }
})

// 使用微信内置地图查看位置 (需配合 wx.getLocation() 使用)
wx.getLocation({
  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  success(res) {
    const { longitude, latitude} = res
    wx.openLocation({
      latitude,
      longitude,
      scale: 18
    })
  }
})

// 打开地图选择位置(需用户授权 scope.userLocation)
wx.chooseLocation({
  longitude: 0, // 目标经度
  latitude: 0, // 目标纬度
  success: res => {
    res.name // 位置名称
    res.address // 详细地址
    res.longitude // gcj02 经度 
    res.latitude // gcj02 纬度
  }
})


// 进入前后台都接收位置变化消息 (2.8.0, 需用户授权 scope.userLocationBackground)
wx.startLocationUpdateBackground(() => { /* doSomeThing */ })

// 进入前台页面时接收位置变化信息(2.8.0, 需用户授权 scope.userLocation)
wx.startLocationUpdate(() => { /* doSomeThing */ })

// 关闭监听位置变化,停止消息接收(2.8.0)
wx.stopLocationUpdate(() => { /* doSomeThing */ })

// 监听实时地理位置变化 (2.8.1, 需配合  wx.startLocationUpdateBackground()、wx.startLocationUpdate() 使用)
wx.onLocationChange(() => { /* doSomeThing */ })

// 取消监听实时地理位置变化 (2.8.1)
wx.offLocationChange(() => { /* doSomeThing */ })

