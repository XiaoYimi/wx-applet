//app.js
const WXBizDataCrypt = require('./lib/cryptojs/decrypt.js')
const { APPID, APPSECRET, RootUrl } = require('./config.js')

App({
  onLaunch: function () {
    console.log('App-onLaunch')
    this.__proto__.RootUrl = RootUrl
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code
        if (code) {
          console.log(code)
          // 由于没有授权,直接返回 fail,不能只用 wx.getUserInfo()
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + APPSECRET + '&js_code=' + code + '&grant_type=authorization_code',
            success: res1 => {
              console.log(res1)
              const { openid, session_key } = res1.data
              this.globalData.openid = openid
              this.globalData.session_key = session_key
              // 在后端服务器中通过 code, appsecrect, appid 校验接口,返回 openid 和 session_key
              // 在后端自定义登录状态(一般是把 openid, unionid) 存储在数据库,返回登录状态和用户信息
              // 通过本地存储能力将用户信息和状态保存在 storage
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('app-getuserinfo')
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow() {
    console.log('App-onshow')
  },
  onHide() {
    console.log('App-onHide')
  },
  globalData: {
    userInfo: null
  }
})