const app = getApp()
const Sign = require('../../utils/Sign.js')
const sign = new Sign()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  toIcon () {
    wx.navigateTo({
      url: '../../pages/icon/index'
    })
  },

  toSwiper () {
    wx.navigateTo({
      url: '../../pages/comp/swiper/index',
    })
  },

  toScrollView () {
    wx.navigateTo({
      url: '../../pages/comp/scroll-view/index',
    })
  },

  toRichText () {
    wx.navigateTo({
      url: '../../pages/comp/rich-text/index',
    })
  },

  toPicker () {
    wx.navigateTo({
      url: '../../pages/comp/picker/index',
    })
  },

  async getUserInfo (res) {
    const data = await sign.getCode()
    console.log(data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    console.log('page-onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('page-onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('page-onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('page-onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('page-onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})