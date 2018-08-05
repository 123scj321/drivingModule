// pages/order/orderReward/orderReward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  award:{}
  },
  // getAwardHandler 获取奖励
  getAwardHandler:function(){
    const current_award=this.data.award;
    if (current_award.status){
      current_award.status=false;
      const award=wx.getStorageSync("award");
      for(var i=0;i<award.length;i++){
        award[i].status = award[i].id === current_award.id ? false : award[i].status;
      }
      wx.setStorageSync("award", award);
      this.setData({ award: current_award});
      wx.showToast({
        title: '领取成功',
      })
    }else{
      wx.showToast({
        title: '你已领取奖励',
      })
    }
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
  this.setData({award:wx.getStorageSync("current_award")});
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