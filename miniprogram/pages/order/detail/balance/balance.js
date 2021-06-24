// miniprogram/pages/order/detail/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showActionsheet: false,
    groups: [
      {"value": 1,"text":"现金支付"}, {"value": 2,"text":"支付宝支付"}, {"value": 3,"text":"微信支付"},{"value": 4,"text":"POS机刷卡支付"},{"value": 5,"text":"会员卡余额支付"}]
  },

  showActionsheet: function (options) {
    this.setData({
      showActionsheet: !this.data.showActionsheet,
    });
  },

  btnClick: function (options) {
    console.log(options);
    this.setData({
      showActionsheet: false,
    });
  },

  /**
   * 确认尾款结清
   * @param {} options 
   */
  balanceMoney:function (options) {
    
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