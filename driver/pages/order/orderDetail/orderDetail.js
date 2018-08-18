// pages/order/orderDetail/orderDetail.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    driver: {},
    order:{}
  },
  intoPageHandler: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  callPhoneHandler:function(){
    handler.callPhoneHandler(wx.getStorageSync("server_phone"));
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
    this.setData({
      driver: wx.getStorageSync("driver"),
      order: wx.getStorageSync("order_detail"),
    });
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