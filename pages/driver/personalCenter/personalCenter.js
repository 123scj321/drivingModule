// pages/driver/personalCenter/personalCenter.js
var handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:"../../../images/icon/icon-12.png",
    name:"",
    orderCount:0,
    income:0.00,
    evaluate:[],
    myTask:[],
    handler:[],
    serverPhone:"",
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
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    console.log(e.currentTarget.dataset.skip);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  // callPhoneHandler 打电话功能
  callPhoneHandler:function(){
    handler.callPhoneHandler(wx.getStorageSync("server_phone"))
  },
  // 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const order = wx.getStorageSync("order");
    var orderIncome = 0;
    for (var orders of order) {
      orderIncome += Number(orders.paid);
    }
    const avatar = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").avatar : "../../../images/icon/icon-02.png";
    const name = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").username : "";
    this.setData({ activityList: wx.getStorageSync("activity"), orderCount: wx.getStorageSync("order").length, income: orderIncome.toFixed(2), avatar, name, evaluate: wx.getStorageSync("evaluate").length });
  },
  // loginoutHandler 退出代驾人员信息
  loginoutHandler:function(){
    wx.showModal({
      title: '代驾人员',
      content: '确定退出代驾人员身份',
      success:function(res){
        if(res.confirm){
          wx.redirectTo({
            url: '../../map/driverServer/driverServer',
          })
        }
      },
      fail:function(){
        wx,wx.showToast({
          title: '退出失败',
          icon: 'none'
        })
      }
    })
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