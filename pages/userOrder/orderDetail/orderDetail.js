// pages/order/orderDetail/orderDetail.js
const app = getApp();
const data = require("../../../data/mockData.js");
const user = wx.getStorageSync("user");
const order = wx.getStorageSync("order");
const coupon = wx.getStorageSync("coupon");
const driver = wx.getStorageSync("driver");
const evaluate = wx.getStorageSync("evaluate");
const server = wx.getStorageSync("server");
const handler=require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: wx.getStorageSync("orderDetail"),
    driver:{}
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
    this.setData({ order: wx.getStorageSync("orderDetail")});
    console.log(this.data.order.driver_ids);
    for (var i = 0; i < driver.length;i++){
      if (driver[i].id === this.data.order.driver_ids[0]){
        this.setData({ driver: driver[i]});
        wx.setStorageSync("driverDetail", driver[i]);
      }
    }
    for (var i = 0; i < coupon.length; i++) {
      if (coupon[i].id === this.data.order.coupon_ids[0]) {
        console.log(coupon[i]);
        wx.setStorageSync("couponDetail", coupon[i]);
      }
    }
  },
  // 页面跳转
  skipPageHandler:function(e){
    console.log(e.currentTarget.dataset.skip);
    wx.navigateTo({
      url: e.currentTarget.dataset.skip,
    })
  },
  callPhoneHandler:function(){
    handler.callPhoneHandler(wx.getStorageSync("serverPhone"));
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