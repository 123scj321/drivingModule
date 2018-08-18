// pages/pay/paidOrder/paidDetail/paidDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: null,
    reduce:null,
    total: null
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
    const order = wx.getStorageSync("order_detail");
    const reduce = (order.due * (1 - order.coupon_ids.reduce * 0.1)).toFixed(2);
    const total = (order.due - reduce).toFixed(2);
    this.setData({ order: order, reduce: reduce, total: total });
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