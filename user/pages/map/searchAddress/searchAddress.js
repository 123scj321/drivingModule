// pages/map/searchAddress/searchAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteShow:false,
    searchItemShow:false,
    addressList: [
      {
        addressName: "海底捞火锅城", addressText: "陕西省西安市凤城二路60号附近", latitude: 34.28,longitude: 108.93},
      {
        addressName: "人人乐超市", addressText: "陕西省西安市凤城二路72号附近" ,latitude: 34.28,longitude: 108.93},
    ],
    addressType:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.addressType);
    this.setData({ addressType: options.addressType});
  },
// getFocusHandler input输入框获取焦点事件
  getFocusHandler:function(){
    this.setData({ deleteShow: true, searchItemShow:true});
  },
  // setFocusHandler input输入框失去焦点事件
  setFocusHandler:function(){
    this.setData({ deleteShow: false });
  },
  // getAddressHandler 选择地址
  getAddressHandler:function(e){
    console.log(e.currentTarget.dataset.index);
    wx.setStorageSync(this.data.addressType, this.data.addressList[e.currentTarget.dataset.index]);
    wx.navigateTo({
      url: '../driverServer/driverServer',
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