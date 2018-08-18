// pages/map/my/my.js
const app = getApp();
const data = require("../../../data/mockData.js");
const user = wx.getStorageSync("user");
const order = wx.getStorageSync("order");
const coupon = wx.getStorageSync("coupon");
const driver = wx.getStorageSync("driver");
const evaluate = wx.getStorageSync("evaluate");
const server = wx.getStorageSync("server");
const openId = wx.getStorageSync("openId");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 108.93,
    latitude: 32.28,
    mapWidth:100,
    markers: [{
      iconPath: "../../../images/icon/icon-20.png",
      id: 0,
      latitude: 32.27,
      longitude: 108.93,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 108.93,
        latitude: 32.28
      }, {
        longitude: 108.94,
        latitude: 32.27
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../../images/icon/icon-22.png',
      position: {
        left: 34,
        top: 33,
        width: 50,
        height: 50
      },
      clickable: true
    }
    ],
   scrollLeft:0,
   zuoyou:"icon-zuoyou",
   avatar:"../../../images/icon/icon-07.png",
   buttonText:"登录",
   username:"未登录",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取当前位置
    this.getlocation();
  },
/**
 * scrollLeftHandler页面轮动
 * 
 */
  scrollLeftHandler:function(){
    if (this.data.scrollLeft===0){
      this.setData({ scrollLeft: -650, zuoyou: "icon-zuoyou1", mapWidth:750});
    }else{
      this.setData({ scrollLeft: 0, zuoyou: "icon-zuoyou", mapWidth:100});
    }
  },
  /**loginHandler用户登录页面 */
  loginHandler:function(e){
    //  this.getOpenIdHandler();
    // app.loginHandler();
    if (openId && this.data.buttonText ==="登录") {
      const that=this;
      wx.login({
        success:res=>{
          console.log(res);
          if (res.code) {
            wx.getUserInfo({
              success: res => {
                console.log(res);
                that.setData({ avatar: res.userInfo.avatarUrl, username: res.userInfo.nickName, buttonText: "退出"});
              }
            })
          }
        }
      })
    }else{
      this.setData({ avatar: "../../../images/icon/icon-07.png", username: "未登录", buttonText: "登录"});
    }
  },
  // intoPageHandler 页面跳转
  intoPageHandler:function(e){
    console.log(e.currentTarget.dataset.skip);
    wx.navigateTo({
      url: e.currentTarget.dataset.skip,
    })
  },
  // callPhoneHandler 联系客服
  callPhoneHandler:function(){
    wx.makePhoneCall({
      phoneNumber: wx.getStorageSync("serverPhone"),
    })
  },
  // 获取地理位置
  getlocation: function () {
    const that=this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log("latitude:" + latitude)
        console.log("longitude:" + longitude)
        console.log("speed:" + speed)
        console.log("accuracy:" + accuracy)
        that.setData({ latitude, longitude});
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // })
      }
    })
  } ,
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
  scrollLeft:function(e){
    console.log("scrollLeft is ",e);
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