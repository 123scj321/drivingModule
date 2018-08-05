// pages/map/orderAndDriverGoing/orderAndDriverGoing.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../../images/user/icon-20.png",
      id: 0,
      latitude: 32.27,
      longitude: 108.93,
      width: 20,
      height: 20
    }],//用户当前位置图标
    polyline: [{
      points: [{
        latitude: 34.780254,
        longitude: 113.699559

      }, {
        longitude: 113.701855,
        latitude: 34.779778
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../../images/user/icon-22.png',
      position: {
        left: 10,
        top: 10,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '../../../images/user/icon-30.png',
      position: {
        top: 300,
        left: 10,
        width: 50,
        height: 50
      },
      clickable: true
    },

    ],//人物图片定位
    startAddress:null,
    order_going_m:0,
    order_going_s:0,
    myShow: true,//显示my的页面
    zuoyou: "icon-zuoyou",//my
    avatar: "../../../images/user/icon-07.png",
    buttonText: "登录",
    username: "未登录",
    orderGoing: false,
    homeHandlerShow: true,
    phone: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.time()
  },
  regionchange(e) {
    console.log("regionchange", e.type)
  },
  markertap(e) {
    console.log("markertap", e.markerId)
  },
  // 地图图片点击事件
  controltap(e) {
    console.log("map controltap", e.controlId)
    if (e.controlId === 1) {
      this.openMyPageHandler();
    } else {
      const addresses = handler.getLatLntHandler((res) => {
        //  console.log("一键定位",res);
        this.setData({
          startAddress: res.startAddress,//开始位置
        })
      });
    }
  },
  // openMyPageHandler 打开我的页面
  openMyPageHandler: function () {
    const { pageRight, myShow } = this.data;
    console.log("openMyPageHandler", pageRight, myShow);
    if (myShow) {
      this.setData({
        pageRight: 620,
        myShow: !myShow,
        controls: [{
          id: 1,
          iconPath: '../../../images/user/icon-33.png',
          position: {
            top: 144,
            left: 10,
            width: 41,
            height: 41
          },
          clickable: true
        }]
      });
    } else {
      this.setData({
        pageRight: 0, myShow: !myShow, controls: [{
          id: 1,
          iconPath: '../../../images/user/icon-22.png',
          position: {
            left: 10,
            top: 10,
            width: 50,
            height: 50
          },
          clickable: true
        }, {
          id: 2,
          iconPath: '../../../images/user/icon-30.png',
          position: {
            top: 300,
            left: 10,
            width: 50,
            height: 50
          },
          clickable: true
        },

        ],
      });
    }

  },
  time:function(){
    const time = setInterval(() => {
      if (this.data.order_going_s !== 5) {
        this.timeTask();
      } else {
        clearInterval(time)
      }
    }, 1000);
  },
  // 时间定时器
  timeTask:function(){
    let order_going_s = this.data.order_going_s;
    let order_going_m = this.data.order_going_m;
    order_going_s++;
    if (order_going_s>59){
      order_going_s=0;
      order_going_m++;
    }
    this.setData({ order_going_s,order_going_m}) 
    console.log("orderagoing s", order_going_s, "orderand m",order_going_m);
    if (order_going_s===5) {
      clearInterval(this.timeTask)
      wx.navigateTo({
        url: '../getOrderNotGoing/getOrderNotGoing',
      })
      // 保存服务的司机
      wx.setStorageSync("serverDriver",wx.getStorageSync("driver")[0] );
    }
  },
  // deleteOrderHandler 取消订单事件
  deleteOrderHandler:function(){
    wx.showToast({
      title: '订单取消已成功',
    })
    wx.removeStorageSync("current_order");
    clearInterval(this.timeTask)
    handler.intoPageHandler('../driverServer/driverServer');
  },
  // 用户信息事件
  /**loginHandler用户登录页面 */
  loginHandler: function (e) {
    if (this.data.buttonText === "登录") {
      handler.loginHandler((res) => {
        // console.log("用户信息事件",res);
        this.setData({ res, });
        const that = this;
        wx.showModal({
          title: '获取手机号码',
          content: '我们需要获取你的电话号码，一边与和你保持实时的联系，防止你的订单丢失',
          success: function (res) {
            if (res.confirm) {
              handler.intoPageHandler("../../user/getPhone/getPhone");
            }
          },
          fail: function () {
            wx.showToast({
              title: '登录失败',
              icon: "none"
            })
          }
        })
      })
    } else {
      this.setData({ avatar: "../../../images/user/icon-07.png", username: "未登录", buttonText: "登录", phone: "" });
    }
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    console.log(e.currentTarget.dataset.skip);
    handler.intoPageHandler(e.currentTarget.dataset.skip);
  },
  // callPhoneHandler 联系客服
  callPhoneHandler: function () {
    handler.callPhoneHandler(wx.getStorageSync("serverPhone"));
  },
  // orderGoingHandler 订单进行中事件
  orderGoingHandler: function () {
      wx.showToast({
        title: '您还没有进行中的订单',
        icon: "none"
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
    console.log("请稍后，代驾司机正赶来", wx.getStorageSync("startAddress"));
    this.setData({
      startAddress: wx.getStorageSync("startAddress")
    })
    if (wx.getStorageSync("userMessage") !== "") {
      this.setData({
        avatar: wx.getStorageSync("userMessage").avatar,
        username: wx.getStorageSync("userMessage").username,
        buttonText: wx.getStorageSync("userMessage").buttonText
      });
    }
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