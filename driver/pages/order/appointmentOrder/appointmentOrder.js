// pages/order/appointmentOrder/appointmentOrder.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  time:10,
  order:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    const time=setInterval(()=>{
      if (this.data.time > 0) {
      this.setData({ time:--this.data.time});
      }else{
        clearTimeout(time)
        this.setData({ time: 10 });
      }
    }, 1000);
  

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
    const order = wx.getStorageSync("order");
    var current_order = null;
    for (var i = 0; i < order.length; i++) {
      console.log(order[i].status);
      if (order[i].status === 7) {
        console.log(order[i]);
        current_order = order[i];
      }
    }
    this.setData({ order: current_order });
  },
  // 页面跳转
  intoPageHandler: function (e) {
    // console.log(e.currentTarget.dataset.skip);
    wx.showToast({
      title: '预约成功',
    })
    wx.setStorageSync("appointment_order", this.data.order);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
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