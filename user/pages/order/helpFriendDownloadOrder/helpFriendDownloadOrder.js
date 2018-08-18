// pages/order/helpFriendDownloadOrder/helpFriendDownloadOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    phone:null,
    isReplacePay:false,
    order:wx.getStorageSync("order")
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  // getNameHandler 获取用户的姓名
  getNameHandler: function (e) {
    console.log(e.detail.value);
    this.setData({ name: e.detail.value});
  },
  
  // getPhoneHandler获取用户的电话号码
  getPhoneHandler: function (e) {
    this.setData({ phone: e.detail.value });
   },
  //  isReplacePayHandler 是否开启代付
  isReplacePayHandler:function(e){
    console.log(e.detail.value);
    this.setData({ isReplacePay: e.detail.value});
  },
  // 验证乘车人姓名
  testNameHandler:function(params,errMessage){
    if (params === null || params === ""){
      wx.showToast({
        title: '请输入乘车人姓名',
        icon: 'none',
        duration: 2000
      })
    }else{
      return true;
    }
  },
  // 验证电话号码
  testPhoneHandler: function (params){
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(params===null){
      wx.showToast({
        title: '请输入电话号码',
        icon: 'none',
        duration: 2000
      })
    }else if (myreg.test(params)){
      return true;
    }else{
      wx.showToast({ 
        title: '手机号码格式错误',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 提交订单
  submitOrderHandler:function(){
    const phone = this.testPhoneHandler(this.data.phone);
    const name = this.testNameHandler(this.data.name);
    if (phone && name){
    wx.setStorageSync("relative_people", { name:this.data.name , phone: this.data.phone, replace_pay: this.data.isReplacePay});
    wx.navigateTo({
      url: '../../map/driverServer/driverServer',
    })
    }
  },
  // deleteHistoryHandler 删除历史记录功能
  deleteHistoryHandler:function(){
    const that=this;
    wx.showModal({
      title: '历史记录',
      content: '确认删除历史记录',
      success:function(res){
        console.log(res.confirm);
        if (res.confirm){
          that.setData({order:[]});
        }
        wx.showToast({
          title: '删除成功',
        })
      },
      fail:function(){
        wx.showToast({
          title: '删除失败',
        })
      }
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
    this.setData({order:wx.getStorageSync("order")});
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