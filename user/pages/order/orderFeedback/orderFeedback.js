// pages/order/orderFeedback/orderFeedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // bindTextAreaBlur 获取提交的值
  bindTextAreaBlur:function(e){
    console.log(e.detail.value);
    this.setData({ feedback:e.detail.value});
  },
  // orderFeedbackHandler 提交订单反馈意见
  orderFeedbackHandler:function(){
    if (this.data.feedback === null || this.data.feedback===""){
      wx.showToast({
        title: '请输入订单意见',
        icon:"none"
      })
    }else{
      wx.showModal({
        title: '订单反馈',
        content: '是否提交',
        success:function(res){
          if(res.confirm){
            wx.showToast({
              title: '提交成功',
            })
            wx.redirectTo({
              url: '../../map/my/my',
            })
          }
        },
        fail:function(){
          wx.showToast({
            title: '提交失败',
            icon:"none"
          })
        }
      })
    }
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