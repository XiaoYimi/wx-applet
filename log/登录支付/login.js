// 小程序登录 app.js

// 1. 获取临时登录凭证(5 分钟内有效,且只能使用 1 次)
// 2. 通过 code, appid, appsecret 作为参数访问网址获取 openid, session_key.(由于 appid, appsecret 是属于敏感信息,不应该在小程序出现所以获取 openid, session_key 是必须在后台请求的)
// 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code'
// 3. 小程序获取 unionid 必须要有开发者资质认证,即认证收费(300/year)


// 2. 通过 wx.getUserInfo() 获取 encryptedData 和 iv
// 3. 将 code, encryptedData, iv 传给开发者服务器
// 4. 开发者服务器获取到传递来的参数(code, encryptedData, iv),用 get 方法请求微信接口


// 获取 openid,session_key, unionid
const json = {
  type: 'GET',
  api: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code'
}


// demo  登录案例
wx.login({
  success: res => {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId (UnionID 必须为认证资质)
    const code = res.code
    if (code) {
      console.log(code)
      // 由于没有授权,直接返回 fail,不能只用 wx.getUserInfo()
      wx.request({
        url: 'server-url',
        data: {
          code: code
        },
        success: res1 => {
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


// 小程序授权 
// 查看授权设置 
wx.getSetting({
  
})