// pages/driver/addIdCardPhoto/addIdCardPhoto.js
const handler=require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType:null,
    fontImage:null,
    backImage:null,
    idCardPhoto: null,
    idCardPhotoTest: false,
    driverPhoto: null,
    driverPhotoTest: false
  },
  // 图片正面上传
  upFontloadFile:function(){
    const that=this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        that.setData({ fontImage: tempFilePaths });
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  // 图片反面上传
  upBackloadFile: function () {
    const that=this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({ backImage: tempFilePaths });
        console.log(tempFilePaths);
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     var data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    
    const { pageType, fontImage, backImage}=this.data;
    const driver_information = wx.getStorageSync("driver_information");
    
    if (pageType ==="idCardPhoto"){
      driver_information.idCardPhoto = { fontImage, backImage};
      driver_information.idCardPhotoTest = true;
      wx.setStorageSync("driver_information", driver_information);
    }else{
      driver_information.driverPhoto = { fontImage, backImage };
      driver_information.driverPhotoTest = true;
      wx.setStorageSync("driver_information", driver_information);
    }
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ pageType:options.type});
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
    this.setData({ driver:wx.getStorageSync("driver_information")});
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