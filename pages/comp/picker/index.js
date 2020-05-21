// pages/comp/picker/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    time: '',
    region: ['', '', ''],

    list: [
      { id: 1, name: 'list1' },
      { id: 2, name: 'list2' },
      { id: 3, name: 'list3' },
      { id: 4, name: 'list4' },
      { id: 5, name: 'list5' },
      { id: 6, name: 'list6' },
    ],
    select: 0,

    multiList: [
      [
        { p: null, name: '广东', code: '516468' },
        { p: null, name: '北京', code: '110000' }
      ],
      [
        { p: '516468', name: '汕尾', code: '51646811' },
        { p: '516468', name: '揭阳', code: '51646812' },
        { p: '516468', name: '北大', code: '11000011' },
        { p: '516468', name: '清华', code: '11000012' }
      ],
      [
        { p: '51646811', name: '海丰', code: '5164681145' },
        { p: '51646811', name: '陆丰', code: '5164681246' },
        { p: '516468', name: '北大', code: '11000011' },
        { p: '516468', name: '清华', code: '11000012' }
      ]
    ],
    multiIndex: [0, 0, 0]
  },

  dateChange (e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  timeChange (e) {
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  regionChange (e) {
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  selectChange (e) {
    console.log(e.detail.value)
    this.setData({
      select: e.detail.value
    })
  },

  multiColumnChange (e) {
    console.log(e)
  },

  multiChange (e) {
    console.log(e)
    console.log(e.detail)
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