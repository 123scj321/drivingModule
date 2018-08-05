// pages/map/searchAddress/searchAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteShow:false,
    searchItemShow:false,
    addressList: [],
    addressType:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.addressType);
    this.setData({ addressType: options.addressType});
  },
  // getKeyWord 获取用户输入的关键字
  getKeyWord:function(e){
    console.log(e.detail.value);
    const that=this;
    wx.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=西安', //根据经纬度转换成具体地址
      data: {
        "key": "YLFBZ-WHAWI-ZXUGH-53Q65-TOJ7E-ADBNQ",
        "keyword":e.detail.value
      },
      method: 'GET',
      // header: {},
      success(res) {
          console.log(res);
        that.setData({ addressList:res.data.data});
      },
      fail: function () {
        wx.showToast({
          title: '请求失败',
        })
      },
      complete: function () {
        wx.showToast({
          title: '请求成功',
        })
      }
    })
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
    if (this.data.addressType==="startAddress"){
      wx.setStorageSync(this.data.addressType, this.data.addressList[e.currentTarget.dataset.index]);
    }else{
      wx.setStorageSync(this.data.addressType, this.data.addressList[e.currentTarget.dataset.index]);
    }
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