// HTTP 配置
const HTTP_CONFIG = {
  APIURL: 'http://api.xiaoyimi.com/api/v1/', // 接口 API 路径
  HEADER: {
    'content-type': 'application/json', // 对数据 data 进行 json 序列化
    'Authorization': null, // 用户登录认证信息
  },
  DATATYPE: 'json', // 数据返回格式
}

class HTTP {
  constructor () {
    this.url = HTTP_CONFIG.APIURL
    this.header = HTTP_CONFIG.HEADER
    this.dataType = HTTP_CONFIG.DATATYPE
  }

  // 处理参数 (返回参数 | false, false => )
  dealArguments (obj, type = null) {
    const res = {
      url: this.url,
      data: {},
      method: 'GET',
      header: this.header,
      dataType: this.dataType,
      errType: null, // 参数错误类型,
      errTip: null, // 参数错误提示
    }

    if (typeof obj !== 'object') {
      res.errType = 'obj'
      res.errTip = 'request() 参数必须为 Object 类型'
      return res
    }

    // 设置请求方式(get() => GET, post() => POST, request() => GET|Custome)
    if (type) { obj.method = type }

    // 处理接口路径
    if (!obj.url || obj.url === '') {
      res.errType = 'obj.url'
      res.errTip = '接口路径必须传值,且不能为空'
      return res
    } else {
      res.url = (new RegExp('^http')).test(obj.url) ? obj.url : res.url + obj.url
    }

    // 处理 data
    res.data = obj.data ? Object.assign(res.data, obj.data) : res.data

    // 处理请求方式 method
    res.method = obj.method ? obj.method : res.method

    // 处理 header
    res.header = obj.header ? Object(res.header, obj.header) : res.header

    // 处理 dataType
    res.dataType = obj.dataType === 'json' ? res.dataType : obj.dataType

    return res
  }

  // 显示加载提示
  showLoading () {
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
  }
  // 隐藏加载提示
  hideLoading () {
    wx.hideLoading()
  }

  // 请求方法 - request
  request (obj) {
    return new Promise((resolve, reject) => {
      this.showLoading()
      const { url, data, method, header, dataType, errType, errTip } = this.dealArguments(obj)
      if (errType) {
        wx.showToast({ title: errTip, icon: 'none' })
        reject(errTip)
      }
      wx.request({
        url: url,
        data: data,
        method: method,
        header: header,
        dataType: dataType,
        success: res => {
          this.hideLoading()
          res.statusCode === 200 && res.data ? resolve(res.data) : reject(res)
        },
        fail: err => {
          this.hideLoading()
          reject(err)
        }
      })
    })
  }

  // 请求方法 - get
  query (obj) {
    return new Promise((resolve, reject) => {
      this.showLoading()
      const { url, data, method, header, dataType, errType, errTip } = this.dealArguments(obj, 'GET')
      if (errType) {
        wx.showToast({ title: errTip, icon: 'none' })
        reject(errTip)
      }
      wx.request({
        url: url,
        data: data,
        method: method,
        header: header,
        dataType: dataType,
        success: res => {
          this.hideLoading()
          res.statusCode === 200 && res.data ? resolve(res.data) : reject(res)
        },
        fail: err => {
          this.hideLoading()
          reject(err)
        }
      })
    })
  }

  // 请求方法 - post
  post (obj) {
    return new Promise((resolve, reject) => {
      this.showLoading()
      const { url, data, method, header, dataType, errType, errTip } = this.dealArguments(obj, 'POST')
      if (errType) {
        wx.showToast({ title: errTip, icon: 'none' })
        reject(errTip)
      }
      wx.request({
        url: url,
        data: data,
        method: method,
        header: header,
        dataType: dataType,
        success: res => {
          this.hideLoading()
          res.statusCode === 200 && res.data ? resolve(res.data) : reject(res)
        },
        fail: err => {
          this.hideLoading()
          reject(err)
        }
      })
    })
  }

}

module.exports = HTTP
