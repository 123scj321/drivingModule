// pages/map/getOrderNotGoing/getOrderNotGoing.js
const handler = require("../../../utils/function.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
      
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
          top: 240,
          left: 10,
          width: 50,
          height: 50
        },
        clickable: true
      },

      ],//人物图片定位
      driver:wx.getStorageSync("serverDriver"),
      not_going_m: 0,
      not_going_s: 0,
      longitude: null,
      latitude: null,
      myShow: true,//显示my的页面
      zuoyou: "icon-zuoyou",//my
      avatar: "../../../images/icon/icon-07.png",
      buttonText: "登录",
      username: "未登录",
      orderGoing: false
    },
    regionchange(e) {
      console.log(e.type)
    },
    markertap(e) {
      console.log(e.markerId)
    },
    controltap(e) {
      console.log("map controltap", e.controlId)
      if (e.controlId === 1) {
        this.openMyPageHandler();
      } else {
        const addresses = handler.getLatLntHandler((res) => {
          this.setData({
            startAddress: res.address,//开始位置
            longitude: res.longitude,
            latitude: res.latitude,
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
            iconPath: '../../../images/icon/icon-33.png',
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
              top: 240,
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      if (this.data.not_going_s === 5 && not_going_m!==0){
        clearInterval(this.timeTask);
      }else{
        setInterval(this.timeTask, 1000); 
      }
         
    },
    // callPhoneHandler  打电话功能
    callDriverPhoneHandler:function(){
      handler.callPhoneHandler(this.data.driver.phone)
    },
    // callServerPhoneHandler 打客服电话号码
    callServerPhoneHandler:function(){
      handler.callPhoneHandler(wx.getStorageSync("serverPhone"))
    },
    // deleteOrderHandler 删除订单功能
    deleteOrderHandler:function(){
      wx.showToast({
        title: '订单取消已成功',
      })
      wx.removeStorageSync("current_order");
      wx.removeStorageSync("driverServer");
      clearInterval(this.timeTask)
      wx.redirectTo({
        url: '../driverServer/driverServer',
      })
    },
    // timeTask 时间业务
    timeTask: function () {
      var not_going_s = this.data.not_going_s;
      var not_going_m = this.data.not_going_m;
      not_going_s++;
      if (not_going_s > 59) {
        not_going_s = 0;
        not_going_m++;
      }
      this.setData({ not_going_s,not_going_m});
      console.log("order not_going_s m", not_going_m, "not_going_s s",not_going_s);
      
      if (not_going_s === 5 && not_going_m===0) {
        clearInterval(this.timeTask) 
       wx.redirectTo({
          url: '../orderGoing/orderGoing',
        })
      }
    },
    // orderGoingHandler 订单进行中事件
    orderGoingHandler: function () {
      
        wx.showToast({
          title: '目前还没有正在进行中的订单',
          icon: "none"
        })
        this.setData({ orderGoing: false })
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
      if (wx.getStorageSync("endAddress") !== "") {
        this.setData({ endAddress: wx.getStorageSync("endAddress").addressName });
      }

      if (wx.getStorageSync("startAddress") !== "") {
        this.setData({ startAddress: wx.getStorageSync("startAddress").addressName });
      } else {
        this.setData({ startAddress: wx.getStorageSync("startAddress").addressName });
      }
    },
    // 用户信息事件
    /**loginHandler用户登录页面 */
    loginHandler: function (e) {
      if (this.data.buttonText === "登录") {
        handler.loginHandler((res) => {
          console.log(res);
          this.setData(res);
        })
      } else {
        this.setData({ avatar: "../../../images/icon/icon-07.png", username: "未登录", buttonText: "登录" });
      }
    },
    // intoPageHandler 页面跳转
    intoPageHandler: function (e) {
      console.log(e.currentTarget.dataset.skip);
      handler.intoPageHandler(e.currentTarget.dataset.skip)
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
        driver: wx.getStorageSync("serverDriver"),
        longitude: wx.getStorageSync("startAddress").longitude,
        latitude: wx.getStorageSync("startAddress").latitude});
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