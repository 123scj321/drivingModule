// pages/pay/paidOrder/paidOrder.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:null,
    driver:wx.getStorageSync("serverDriver"),
    reduce:null,
    total: null,
    checkOrder:true,
    checkCoupon:true,
    wechatOrZhifubao:true
  },
// checkOrderHandler 查看详情事件
  checkOrderHandler:function(){
    this.setData({ checkOrder: !this.data.checkOrder});
  },
  // checkCouponHandler 查看优惠券事件
  checkCouponHandler:function(){
    this.setData({ checkCoupon: !this.data.checkCoupon });
  },
  // callPhoneHandler 打电话事件
  callPhoneHandler:function(){
    wx.makePhoneCall({
      phoneNumber: wx.getStorageSync("serverPhone"),
    })
  },
  // choosePayWayHandler 支付方式事件
  choosePayWayHandler:function(){
    this.setData({ wechatOrZhifubao: !this.data .wechatOrZhifubao});
  },
  // payHandler 支付事件
  payHandler:function(){
    const that=this;
    wx.showModal({
      title: '确认支付',
      content: "实付现在支付",
      success:function(res){
        if(res.confirm){
          const current_order=wx.getStorageSync("current_order");
          current_order.payWay = that.data.wechatOrZhifubao?0:1;
          current_order.status=1;
          console.log(current_order);
          wx.setStorageSync( "current_order", current_order);
          const order=wx.getStorageSync("order");
          order[order.length] = current_order;
          wx.setStorageSync("order", order);
          wx.showToast({
            title: '支付成功',
            icon: "success"
          });
          wx.redirectTo({
            url:"../paidDetail/paidDetail"
          });
        }
      },
      fail:function(){
        wx.showToast({
          title: '支付失败',
          icon:"none"
        })
      }
    })
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
    const order = wx.getStorageSync("current_order");
    const reduce = (order.due * (1 - order.coupon_ids.reduce * 0.1)).toFixed(2);
    const total = (order.due - reduce).toFixed(2);
    this.setData({ order: order, reduce: reduce, total: total, driver: wx.getStorageSync("serverDriver")});
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