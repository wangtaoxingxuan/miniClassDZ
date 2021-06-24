// miniprogram/pages/order/sure/sureOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    timeArray: ['无需等待','1小时','2小时','3小时',
    '1天','2天','3天','4天','5天','6天','7天','8天','9天','10天',
    '11天','12天','13天','14天','15天','16天','17天','18天','19天','20天',
    '21天','22天','23天','24天','25天','26天','27天','28天','29天','30天',
    '31天','32天','33天','34天','35天','36天','37天','38天','39天','40天',
    '41天','42天','43天','44天','45天','46天','47天','48天','49天','50天',
    '51天','52天','53天','54天','55天','56天','57天','58天','59天'],

    showActionsheet: false,
    groupIndex: 2,
    groups: [
      {"value": 1,"text":"现金支付"}, {"value": 2,"text":"支付宝支付"}, {"value": 3,"text":"微信支付"},{"value": 4,"text":"POS机刷卡支付"},{"value": 5,"text":"会员卡余额支付"}],

    goods: [{"sname":"万年龟眼镜框","number":"swish","price":66666,"num":1},
    {"sname":"万年龟眼镜框","number":"swish","price":66666,"num":1},
    {"sname":"万年龟眼镜框","number":"swish","price":66666,"num":1}],
  },

  /**
   * 预计时间选择
   * @param {} e 
   */
  bindTimePickerChange: function (options) {
    console.log('picker发送选择改变，携带值为', options.detail.value)
    this.setData({
      index: options.detail.value
    })
  },

  /**
   * 显示支付选择弹窗
   * @param {*} options 
   */
  showPayMethodActionsheet: function (options) {
    this.setData({
      showActionsheet: !this.data.showActionsheet,
    });
  },

  /**
   * 支付方式选择
   * @param {*} options 
   */
  payMethodClick: function (options) {
    console.log(options);
    this.setData({
      showActionsheet: false,
      groupIndex: options.detail.index
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