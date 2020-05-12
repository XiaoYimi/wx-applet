// 关于网络 API

// 网络请求
wx.request({
  url: '',
  data: {},
  header: {},
  method: 'GET' | 'POST' ,
  dataType: 'josn',
  responseType: 'text', // 响应地数据类型
  timeout: 0, // 请求超时
  enableHttp2: false, // 开启 HTTP (2.10.4)
  enableQuic: false, // 开启 quic (2.10.4)
  enableCache: false, // 开启 cache (2.10.4)
  success: res => {
    res.statusCode // http 状态码
    res.data // 请求返回的数据
    res.header // 服务器返回的 header
    res.cookies // 服务器返回的 cookies
    res.profile // 服务器请求的调试信息
  }
})


// 资源下载 (get, <= 50Mb)
wx.downloadFile({
  url: '资源地址',
  success: res => {
    res.tempFilePath // 临时文件地址
    res.filePath // 本地文件地址
    res.statusCode // http 状态码
    res.profile // 服务器请求的调试信息
  }
})


// 资源上传(post, content-type = multipart/form-data)
wx.uploadFile({
  url: '服务器地址',
  filePath: '资源文件路径',
  name: '服务器获取二进制文件的 key 值', 
  header: {},
  success: res => {
    res.statusCode // http 状态码
    res.data // 请求返回的数据
  }
})


// WebSocket API
connectSocket/* (连接) */ >> onSocketOpen/* (监听连接) */ >> sendSocketMessage/* (发送数据) */ >> onSocketMessage/* (接收数据) */ >> closeSocket/* (关闭) */ >> onSocketClose/* (监听关闭) */

onSocketError /* socket 发生错误 */ 

// Socket 连接
wx.connectSocket({
  url: 'socket 地址',
  header: {},
  protocols: [], // 子协议数组
})

// Socket 监听连接状态
wx.onSocketOpen(res => {
  res.header
})

// Socket 发送数据(预先判断连接是否打开,否则假如离线消息队列)
wx.sendSocketMessage({
  data: [],
})

// Socket 接收来自服务器的数据
wx.onSocketMessage(res => {
  res.data // 接收服务器的数据
})
