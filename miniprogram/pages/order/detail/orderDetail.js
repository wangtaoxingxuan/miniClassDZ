// pages/order/detail/detail.js

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderId: 0,
    orderDetail:{
      // customer: null,
      // address: null,
      // goods: null,
      // eye: null,
      // order: null,
    },
    noData:false,
  },

  /**
  * 根据订单详情
  */
  getOrderDetail: function () {
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: "https://cs.dianzhang.pro/api/v1/getOrderDetailView",
      // url: app.globalData.url + 'getOrderDetailView',
      method: "POST",
      data: {
        id: this.data.orderId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) =>  {
        wx.hideLoading();
        console.log("订单详情", res);
        if(res.data.code == 0){
          this.setData({
            orderDetail: res.data.data,
            noData: false
          })
        }else{
          wx.showToast({
            title: res.data.msg
          })
          this.setData({
            noData: true
          })
        }
      },
      
      fail: (res) => {
        wx.hideLoading();
        wx.showToast({
          title: "网络错误"
        })
        this.setData({
          noData: true
        })
      }
    });
  },

  /**
   * 结清尾款
   * @param {} optinons 
   */
  go2Balance: function (optinons) {
    wx.navigateTo({
      url: './balance/balance',
    })
  },

  /**
   * 进入视力报告
   * @param {} optinons 
   */
  go2Eye: function (optinons){
    // var user = JSON.stringify(this.data.orderDetail.costomer);
    // var eye = JSON.stringify(this.data.orderDetail.eye);
    wx.navigateTo({
      url: './eyes/eyes',
    })
  },

  /**
   * 进入售后服务
   * @param {} optinons 
   */
  go2Service: function (optinons) {
    wx.navigateTo({
      url: './service/service',
    })
  },

  /**
   * 评价服务弹窗
   * @param {*} optinons 
   */
  showCommitServiceDialog: function(optinons){
    wx.showModal({
      content: '您对本次服务感到？',
      cancelText: '不满意',
      cancelColor: '#10354D',
      confirmText: '满意',
      confirmColor: '#1D54FE',
      success: res => {
        if (res.confirm) {
          console.log('用户点击确定')
          this.commitService(1);
        } else if (res.cancel) {
          console.log('用户点击取消')
          this.commitService(2);
        }
      }
    })
  },

  /**
   * 评价服务
   */
  commitService: function (evaluate) {
    console.log("evaluate","evaluate")
    wx.showLoading({
      title: '评价中',
    });
    wx.request({
      url: app.globalData.url + 'updateOrder',
      method: "POST",
      data: {
        id: this.data.orderId,
        unitid: wx.getStorageSync('unitid'),
        evaluate:evaluate
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        wx.hideLoading();
        this.getOrderDetail();
      },
      fail: res => {
        wx.hideLoading();
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      orderId: options.orderId,
    });
    that.getOrderDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "订单详情",
      path: `/pages/order/detail/detail?orderId=` + this.data.orderId
    }
  }
})