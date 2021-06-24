// miniprogram/pages/order/product/produceSelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0, //左边菜单的当前显示值
    toView: 'menu-0', //滚动到某个菜单元素
    foodListHeights: [], //菜单对应右边商品的元素高度列表
    scrollTop: 0, //右边商品滚动条滚动到哪
    goods: [{
      "name": "热销榜",
      "type": -1,
      "foods": [{
        "name": "皮蛋瘦肉粥",
        "price": 10,
        "oldPrice": "",
        "description": "咸粥"
      }]
    }]
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