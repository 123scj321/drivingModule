// pages/setup/setup.js
var handler = require("../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listenWay: ["抢单模式", "指派模式"],
    listenWayDefault:0,
    orderHobby: ["全部","实时", "预约"],
    orderHobbyDefault:0,
    mileageList:[0,1,2,3,5],
    progress:[0,1,2,3],
    progressDefault:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    // console.log(e.currentTarget.dataset.skip);
    
    const { listenWay, listenWayDefault, orderHobby, orderHobbyDefault, mileageList, progress, progressDefault } = this.data;
    wx.setStorageSync("setup", { listenWay: listenWay[listenWayDefault], orderHobby: orderHobby[orderHobbyDefault], orderDistance: mileageList[progressDefault+1]});          
     handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  checklistenWayHnadler:function(e){
    console.log(e.currentTarget.dataset.check);
    this.setData({ listenWayDefault: e.currentTarget.dataset.check});
  },
  checkOrderHobbyHnadler:function(e){
    this.setData({ orderHobbyDefault: e.currentTarget.dataset.check });
  },
  checkProgressHandler:function(e){
    this.setData({ progressDefault: e.currentTarget.dataset.check });
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
    console.log(this.data.listenWay.indexOf(wx.getStorageSync("setup").listenWay));
    this.setData({ 
      listenWayDefault: this.data.listenWay.indexOf(wx.getStorageSync("setup").listenWay),
     orderHobbyDefault: this.data.orderHobby.indexOf(wx.getStorageSync("setup").orderHobby),
     progressDefault: this.data.mileageList.indexOf(wx.getStorageSync("setup").orderDistance)-1,
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