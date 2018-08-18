// pages/driver/activity/activity.js
var handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getAwardButton:true,
    award:[],
    finished:0,
    unfinished:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // getAwardHandler 点击领取奖励事件
  getAwardHandler:function(){
    const { getAwardButton, award}=this.data;
    if (getAwardButton){
      for (var i = 0; i < award.length; i++) {
        award[i].status = false;
      }
      wx.setStorageSync("award", award);
      this.setData({ award, getAwardButton: false }); wx.showToast({
        title: '领取成功',
      })
    } else {
      wx.showToast({
        title: '你已领取奖励',
        icon:"none"
      })
    }
    
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    wx.setStorageSync("current_award", this.data.award[e.currentTarget.dataset.id]);
    console.log(e.currentTarget.dataset.skip);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
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
    const order=wx.getStorageSync("order");
    var finished=0;
    var unfinished=0;
    for(var i=0;i<order.length;i++){
      finished = order[i].status === 3 ? ++finished : finished;
      unfinished = order[i].status === 7 ? ++unfinished : unfinished;
    }
    const award = wx.getStorageSync("award");
    var getAward=-1;
    for (var i = 0; i < award.length;i++){
      (!award[i].status)&& ++getAward;
    }
    console.log(getAward);
    this.setData({ award, unfinished, getAwardButton: getAward === award.length-1?false:true})
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