// pages/order/allOrder/allOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
// 进入订单详情页
  goOrderDetail:function(e){
    console.log(e.currentTarget.dataset.id);
    wx.setStorageSync("orderDetail", this.data.order[e.currentTarget.dataset.id]);
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
    })
  },
  deleteOrderHandler:function(){
    const that=this;
    wx.showModal({
      title: '删除订单',
      content: '确认是否删除所有订单',
      success:function(res){
        if(res.confirm){
          that.setData({ order: []});
        }
      },
      fail:function(){
      },
    })
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
    this.setData({ order: wx.getStorageSync("order")});
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