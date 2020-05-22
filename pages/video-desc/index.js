// pages/video-desc/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    video: {},
    videoTip: ''
  },

  videoError (e) {
    console.log(e.detail.errMsg)
    this.setData({
      videoTip: '加载出现错误,视频播放失败'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tid = parseInt(options.tid)
    const vid = parseInt(options.vid)
    
    const typesList = app.globalData.videos.types
    let video_source = {}
    for (let i=0; i<typesList.length; i++) {
      const type_item = typesList[i]
      if (type_item.id === tid) {
        for (let j = 0; j < type_item.list.length; j++) {
          const list_vid = type_item.list[j].vid
          if (list_vid === vid) {
            const date = new Date(type_item.list[j].date)
            type_item.list[j].date = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
            video_source = type_item.list[j]
            break
          }
        }
        break
      }
    }
    this.setData({ video: video_source })
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