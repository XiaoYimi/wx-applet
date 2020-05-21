const HTTP = require('./Request.js')
const http = new HTTP()

class Sign {
  constructor () {}

  getCode () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: async res => {
          const code = res.code
          if (code) {
            const data =  http.query({
              url: 'http://api.xiaoyimi.com/api/v1/wxapplet/getopenid',
              data: { code: code }
            })
            resolve(data)
          }
        }
      })
    })
  }
}

module.exports = Sign