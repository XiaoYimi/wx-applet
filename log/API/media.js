// 关于媒体(emdia) API

// 1. 地图
// 创建地图上下文对象
const mapCtx = wx.createMapContext(mapid, this)

// 通过地图实例获取坐标(gcj02 坐标系, 可用于 wx.openLocation())
mapCtx.getCenterLocation({
  success: res => {
    res.longitude // 地图经度
    res.latitude // 地图纬度
  }
})

// 获取地图视野范围
mapCtx.getRegion({
  success: res => {
    res.southwest // 地图西南经纬度
    res.northeast // 地图东北经纬度
  }
})

// 获取地图的旋转角
mapCtx.getRotate({
  success: res => {
    res.rotate // 地图旋转角
  }
})

// 获取地图的缩放级别
mapCtx.getScale({
  success: res => {
    res.scale // 地图缩放级别
  }
})

// 获取地图的倾斜角
mapCtx.getSkew({
  success: res => {
    res.skew // 地图倾斜角
  }
})

// 缩放视野内展示所有经纬度坐标列表
mapCtx.includePoints({
  points: [{ longitude: 0, latitude: 0 }], // 经纬度坐标列表
  success () {}
})

// 将地图中心移动到指定坐标位置(地图组件属性 show-location = true)
mapCtx.moveToLocation({
  longitude: 0, // 地图中心经度
  latitude: 0,// 地图中心纬度
  success () {}
})



// 2. 图片
// 将图片报错到系统相册 (需用户授权 scope.writePhotosAlbum)
wx.saveImageToPhotosAlbum({
  filePath: '图片文件存放的路径(建议不使用)',
  success () {}
})

// 在新页面预览图片
wx.previewImage({
  urls: [], // 图片 http 链接列表,字符串数组
  content: '图片 http 链接'
})

// 获取图片信息 (需配置 download 域名才生效)
wx.getImageInfo({
  src: '图片路径',
  success: res => {
    res.width // 图片宽度
    res.height // 图片高度
    res.path // 图片本地路径
    res.type // 图片格式
    res.orientation // 图片拍照方向
  }
})

// 图片压缩
wx.compressImage({
  src: '', // 图片路径
  quality: 80 // 压缩质量
})

// 图片选择
wx.chooseMessageFile({
  count: 10, // 图片选择最大个数(0 - 100)
  type: 'image', // 文件类型
  extension: [],  // 文件扩展名
  success(res) {
    // tempFilePath 可以作为img标签的 src 属性显示图片
    const tempFilePaths = res.tempFiles // 数组对象
  }
}) 

// 从本地选择图片或拍照
wx.chooseImage({
  count: 1, // 图片选择最多个数
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'], // 获取图片方式(相册,相机)
  success: res => {
    res.tempFilePaths // 本地图片临时路径列表
    res.tempFiles  // 本地图片临时文件列表
  }
})


// 3. 视频
// 将视频保存到系统相册 (需用户授权 scope.writePhotosAlbum, mp4格式)
wx.saveVideoToPhotosAlbum({
  filePath: '视频文件路径'
})

// 获取视频信息 (2.11.0)
wx.getVideoInfo({
  src: '视频文件地址',
  success: res => {
    res.orientation // 画面方向
    res.type // 视频格式
    res.duration // 视频长度
    res.size // 视频大小
    res.width // 视频宽度
    res.heihgt // 视频高度
    res.fps // 视频帧率
    res.bitrate // 视频转码率
  }
})

// 压缩视频
wx.compressVideo({
  src: '视频文件路径',
  quality: 80, // 视频质量[0-100]
  resolution: 1, // 视频分辨率比例[0-1]
  success: res => {
    res.tempFilePath // 压缩后的视频地址
    res.size // 压缩后的视频大小 
  }
})

// 拍摄视频或选择视频
wx.chooseVideo({
  sourceType: ['album', 'camera'], // 视频来源
  maxDuration: 60, // 视频最长时间(秒)
  camera: 'back' | 'front', // 后置|前置相机
  compressed: true, // 是否压缩视频
  success: res => {
    res.tempFilePath // 视频临时文件路径
    res.duration // 视频长度
    res.size // 视频大小
    res.width // 视频宽度
    res.heihgt // 视频高度
  }
})


// 从系统相册选择图片或视频
wx.chooseMedia({
  count: 9, // 选择最大个数
  mediaType: ['video', 'image'], // 文件类型
  sourceType: ['album', 'camera'], // 图片或视频的源地址
  maxDuration: 30, // 视频长度(3-30)
  sizeType: ['original', 'compressed'], // 是否压缩所选文件(mediaType = image)
  camera: 'back' | 'front', // 使用后置|前置相机
  success: res => {
    res.tempFiles // 本地临时文件列表
    res.type // 本地临时文件类型(video, image)
  }
})

// 创建视频上下文对象
const videoCtx = wx.createVideoContext(videoid, this)

// 启用全屏
videoCtx.requestFullScreen({
  direction: 0 | 90 | -90, // '0-竖向, 90逆时针90, -90顺时针90'
})

// 退出全屏
videoCtx.exitFullScreen()

// 退出小窗,任意页面使用
videoCtx.exitPictureInPicture()

// 隐藏状态栏(IOS 全屏有效)
videoCtx.hideStatusBar()

// 显示状态栏(IOS 全屏有效)
videoCtx.showStatusBar()

// 暂停视频
videoCtx.pause()

// 停止播放
videoCtx.stop()

// 播放视频
videoCtx.play()

// 倍速播放视频
videoCtx.playbackRate(number)

// 跳转到指定播放位置
videoCtx.seek(number) 

// 发送弹幕
videoCtx.sendDanmu({
  text: '文本内容',
  color: '文本颜色'
})


// 4. 背景音频
// 获取全局唯一背景音频管理器
const bgAudio = wx.getBackgroundAudioManager()

// 播放背景音频
bgAudio.play()
// 暂停背景音频
bgAudio.pause()
// 跳转到指定播放位置
bgAudio.seek(number)
// 停止背景音频
bgAudio.stop()

// 监听播放背景音频事件
bgAudio.onPlay(() => { /* doSomeThing */ })
// 监听暂停背景音频事件
bgAudio.onPause(() => { /* doSomeThing */ })
// 监听开始跳转到指定播放位置
bgAudio.onSeeking(() => { /* doSomeThing */ })
// 监听完成跳转到指定播放位置
bgAudio.onSeeked(() => { /* doSomeThing */ })
// 监听停止背景音频事件
bgAudio.onStop(() => { /* doSomeThing */ })

// 监听背景音频加载(数据不足,加载停止时触发)
bgAudio.onWaiting(() => { /* doSomeThing */ })

// 监听背景音频进度更新事件(前台页面有效)
bgAudio.onTimeUpdate(() => { /* doSomeThing */ })
// 背景音频进入可播放状态,但不保证流畅播放
bgAudio.onCanplay(() => { /* doSomeThing */ })
// 背景音频自动播放结束
bgAudio.onEnded(() => { /* doSomeThing */ })

// 监听系统播放面板上一曲(仅IOS)
bgAudio.onPrev(() => { /* doSomeThing */ })
// 监听系统播放面板下一曲(仅IOS)
bgAudio.onNext(() => { /* doSomeThing */ })

// 监听背景音频播放发生错误
bgAudio.onError(() => { /* doSomeThing */ })

