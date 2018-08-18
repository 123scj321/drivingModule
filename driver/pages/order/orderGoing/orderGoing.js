// pages/order/orderGoing/orderGoing.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../../images/icon/icon-30.png",
      id: 0,
      longitude: 108.94,
      latitude: 34.28,
      width: 15,
      height: 27
    }],
    polyline: [{
      points: [{
        longitude: wx.getStorageSync("startAddress").longitude,
        latitude: wx.getStorageSync("startAddress").latitude
      },
      {
        longitude: 108.94,
        latitude: wx.getStorageSync("startAddress").latitude
      }],
      color: "#0299de",
      width: 9,
      dottedLine: false,
      arrowLine: true,
    }
    ],
    controls: [{
      id: 1,
      iconPath: '../../../images/icon/icon-22.png',
      position: {
        left: 10,
        top: 10,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '../../../images/icon/icon-30.png',
      position: {
        top: 280,
        left: 10,
        width: 50,
        height: 50
      },
      clickable: true
    },

    ],
    longitude: null,
    latitude: null
  },
  // 获取位置路线
  getPolyline: function () {
    handler.getPolyline((res) => {
      console.log(res);
      const polyline = this.data.polyline;
      polyline[0].points = res;
      this.setData({ polyline });
    })
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    const order=wx.getStorageSync("order");
    // console.log(e.currentTarget.dataset.skip);
   const current_order= wx.getStorageSync("current_order");
   for(var i=0;i<order.length;i++){
     if (order[i].id === current_order.id){
       order[i].status=2
     }else{
       order[i]=order[i];
     }
   }
   wx.setStorageSync("order", order);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPolyline();
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
      order: wx.getStorageSync("current_order"),
      longitude: wx.getStorageSync("current_address").longitude,
      latitude: wx.getStorageSync("current_address").latitude,
    });
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