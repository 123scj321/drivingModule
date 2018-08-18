// pages/order/order/order.js
var handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  order:[],
  left:0,
  isPaid:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // scrollHandler 滚动事件
  scrollHandler:function(){
    if(this.data.left===0){
      this.setData({ left: 750, isPaid: true});
    }else{
      this.setData({ left: 0, isPaid: false});
    }
  },
  upper: function (e) {
    console.log("upper",e)
    this.setData({ left: 0, isPaid: false });
  },
  lower: function (e) {
    console.log("lower",e)
    this.setData({ left: 750, isPaid: true });
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.skip);
    console.log(e.currentTarget.dataset.id);
    wx.setStorageSync("order_detail", this.data.order[parseInt(e.currentTarget.dataset.id)]);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
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
    this.setData({  order: wx.getStorageSync("order") });
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