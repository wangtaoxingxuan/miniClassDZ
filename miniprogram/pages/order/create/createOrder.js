// miniprogram/pages/order/create/createOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSource: false,
    sourceIndex: 0,
    soruceArr: [{
        text: '线下',
        value: 20
      },
      {
        text: '微信',
        value: 21
      },
      {
        text: '淘宝',
        value: 22
      },
      {
        text: '美团点评',
        value: 23
      },
      {
        text: '闲鱼',
        value: 24
      }
    ],
  },

  showSourceActionsheet: function (options) {
    this.setData({
      showSource: !this.data.showSource,
    });
  },

  sourceItemClick: function (options) {
    console.log(options);
    let _this = this
    var index = options.detail.index;
    this.setData({
      sourceIndex: index,
      showSource: !this.data.showSource,
    });
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