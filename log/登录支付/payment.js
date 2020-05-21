// 微信小程序支付

wx.requestPayment({
  timeStamp: '当前时间戳',
  nonceStr: '随机字符个数 <= 32',
  package: '统一下单接口返回的 prepay_id',
  signType: '算法签名(MD5)',
  paySign: '',
  success(res) { },
  fail(err) { },
  complete(obj) {}
})

/*
商户系统和微信支付系统主要交互：
https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_4&index=3
1、小程序内调用登录接口，获取到用户的openid, api参见公共api【小程序登录API】
2、商户server调用支付统一下单，api参见公共api【统一下单API】
3、商户server调用再次签名，api参见公共api【再次签名】
4、商户server接收支付通知，api参见公共api【支付结果通知API】
5、商户server查询支付结果，api参见公共api【查询订单API】
*/

// 支付流程
// 1. 先调用统一下单接口在微信支付服务后台生成预支付交易单
// 2. 返回正确的预支付交易回话标识后再按扫码、JSAPI、APP、小程序等不同场景生成交易串调起支付, 具体API接口请查看"API列表"

/*
注意：
appid必须为最后拉起收银台的小程序appid；
mch_id为和appid成对绑定的支付商户号，收款资金会进入该商户号；
trade_type请填写JSAPI；
openid为appid对应的用户标识，即使用wx.login接口获得的openid
*/
