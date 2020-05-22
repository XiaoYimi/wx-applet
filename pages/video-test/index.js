// pages/video-test/index.js
const app = getApp()
const Http = require('../../utils/Request.js')
const http = new Http()
const videoConfig = require('../../video_config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [],
    current: 0, // 视频分类列表选中的索引值
  },

  // 请求获取视频分类的热门视频列表
  async toVideoType (e) {
    const id = e ? e.target.dataset.id : videoConfig.defaultID // 初始化 6 (旅行)
    const typesObj = app.globalData.videos.types
    for (let i = 0; i < typesObj.length; i++) {
      if (typesObj[i].id === id && typesObj[i].list.length > 0) {
        break
      } else if (typesObj[i].id === id && typesObj[i].list.length === 0) {
        const hotObj = await this.getVideoTypesHotList(id)
        typesObj[i].list = hotObj.list
        app.globalData.videos.types = typesObj
        break
      }
    }

    this.setData({
      current: this.getCurrentIndex(id),
      types: app.globalData.videos.types
    })
  },

  // 跳转至详情页播放
  toVideoDesc (e) {
    const args = e.target.dataset.args ? e.target.dataset.args : e.currentTarget.dataset.args
    wx.navigateTo({
      url: '../../pages/video-desc/index?tid=' + args.tid + '&vid=' + args.vid
    })
  },

  clearGloablData () {
    app.globalData = {}
  },

  // 获取选择的视频分类列表的索引, 配合 使用
  getCurrentIndex(id = videoConfig.defaultID) {
    const typesList = app.globalData.videos.types
    let index = 0
    for (let i=0; i<typesList.length; i++) {
      if (typesList[i].id === id) {
        index = i
        break
      }
    }
    return index
  },

  // 请求视频分类列表
  async getVideoTypes () {
    const list = []
    const { result } = await http.query({
      url: videoConfig.root + '/videoCategory',
    })
    for (let i = 0; i < result.itemList.length; i++) {
      const id = result.itemList[i].data.id
      const title = result.itemList[i].data.title
      list.push({
        id: result.itemList[i].data.id,
        title: title.indexOf('#') >= 0 ? title.slice(1) : title,
        selected: false,
        list: []
      })
    }
    return list
  },

  // 请求视频分类下的热门视频列表
  async getVideoTypesHotList(id = videoConfig.defaultID) {
    const list = []
    const { result } = await http.query({
      url: videoConfig.root + '/videoCategoryDetails',
      data: { id: id }
    })

    for (let i=0; i<result.length; i++) {
      const vid = result[i].id
      const { date, releaseTime, description, title, playUrl, cover, category } = result[i].data.content.data
      const item = {
        tid: id,
        vid: vid, date: date,
        releaseTime: releaseTime, 
        description: description, 
        title: title,  playUrl: playUrl, 
        cover: cover, category: category
      }
      list.push(item)
    }
    return {
      id: id,
      list: list
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log('page-onLoad')

    // 检测是否请求获取视频分类列表
    if (!app.globalData.videos) {
      // 初始化 videos 值
      app.globalData.videos = {
        types: [],
        timestamp: 0
      }
      // 发送请求-获取视频分类列表
      const result = await this.getVideoTypes()
      app.globalData.videos = {
        types: result,
        timestamp: +new Date() + 3600000 * 6, // 有效期 6 小时
      }
      this.toVideoType()
    } else if (app.globalData.videos.timestamp < timestamp) {
      // 发送请求-获取视频分类列表
      const result = await this.getVideoTypes()
      app.globalData.videos = {
        types: result,
        timestamp: +new Date() + 3600000 * 6, // 有效期 6 小时
      }
      this.toVideoType()
    }

    this.setData({
      types: app.globalData.videos.types
    })

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