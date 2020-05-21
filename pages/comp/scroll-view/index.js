// pages/comp/scroll-view/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { id: 0, url: '' },
      { id: 1, url: '' },
      { id: 2, url: '' },
      { id: 3, url: '' },
      { id: 4, url: '' },
      { id: 5, url: '' },
      { id: 6, url: '' },
      { id: 7, url: '' },
      { id: 8, url: '' },
      { id: 9, url: '' },
      { id: 10, url: '' },
      { id: 11, url: '' },
      { id: 12, url: '' },
    ],
    toView: 'menus0'
  },

  scrollView (e) {
    console.log(e)
  },

  scrollUpper () {
    console.log('upper')
  },
  scrollLower () {
    console.log('lower')
  },

  scrollTo (e) {
    console.log(e.target.id)
    this.setData({
      toView: e.target.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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