// pages/driver/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluateList: [
      { title: "技术棒", count: 5 },
      { title: "人超好", count: 5 },
      { title: "服务好", count: 5 },
      { title: "驾驶平稳", count: 5 },
      { title: "有礼貌", count: 5 },
      { title: "专业", count: 5 },
      { title: "神准时", count: 5 },
      { title: "接驾太慢", count: 5 },
       ],
    evaluate:[]
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
    this.setData({ evaluate: wx.getStorageSync("evaluate")});
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