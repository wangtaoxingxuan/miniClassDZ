// miniprogram/pages/order/remark/orderRemark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showActionsheet: false,
    groups: [{
        text: '拍一张',
        value: 1
      },
      {
        text: '从相册选择',
        value: 2
      },
      {
        text: '删除图片',
        type: 'warn',
        value: 3
      }
    ],

    pictureSrc: ''
  },

  showActionsheet: function (options) {
    this.setData({
      showActionsheet: !this.data.showActionsheet,
    });
  },

  btnClick: function (options) {
    console.log(options);
    let _this = this
    var index = options.detail.index;
    switch (index) {
      case 0:
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
            console.log(res.tempFilePaths)
            _this.setData({
              pictureSrc: res.tempFilePaths[0]
            })
          }
        });
        break
      case 1:
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success(res) {
            _this.setData({
              pictureSrc: res.tempFilePaths[0]
            })
          }
        })
        break;
      case 2:
        break;

    }
    this.setData({
      showActionsheet: false,
    });
  },

  /**
   * 预览图片
   * @param {*} options 
   */
  photoPreview: function (options) {
    let _this = this;
    let imgs = [];
    imgs.push(_this.data.pictureSrc);
    wx.previewImage({
      urls: imgs
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