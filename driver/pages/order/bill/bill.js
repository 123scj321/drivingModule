// pages/order/bill/bill.js
const handler=require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    driver:{},
    order:{},
    feeDetail:{
      speedFee:0,
      roadToll:2,
      otherFee:3
    }
  },
  intoPageHandler: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  callPhoneHandler:function(){
    handler.callPhoneHandler(wx.getStorageSync("server_phone"));
  },
  // addHandler 加 事件
  addAdnReduceHandler:function(e){
    const types= e.currentTarget.dataset.types;
    const params = e.currentTarget.dataset.params;
   const feeDetail = this.data.feeDetail;
   console.log("this is",types, params, feeDetail);
   if (types==="add"){
     feeDetail[params]++;
     this.setData({ feeDetail });
   }else{
     if (feeDetail[params]>0){
       feeDetail[params]--;
       this.setData({ feeDetail });
     }
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
    this.setData({
      driver: wx.getStorageSync("driver"),
      order: wx.getStorageSync("current_order"),});
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