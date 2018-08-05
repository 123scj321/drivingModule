// pages/map/getOrderNotGoing/getOrderNotGoing.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      markers: [{
        iconPath: "../../../images/user/icon-29.png",
        id: 0,
        longitude:null,
        latitude: null,
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
        arrowLine:true,
      }
      ],
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
          top: 280,
          left: 10,
          width: 50,
          height: 50
        },
        clickable: true
      },

      ],//人物图片定位
      driver:wx.getStorageSync("serverDriver"),
      order_going_s:0,
      order_going_m:0,
      startAddress:null,
    myShow: true,//显示my的页面
    zuoyou: "icon-zuoyou",//my
    avatar: "../../../images/user/icon-07.png",
    buttonText: "登录",
    username: "未登录",
    orderGoing: false,
    homeHandlerShow: true,
    phone: ""
    },
    regionchange(e) {
      console.log(e.type)
    },
    markertap(e) {
      console.log(e.markerId)
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
    // 获取位置路线
    getPolyline:function(){
      handler.getPolyline((res)=>{
        console.log(res);
        const polyline = this.data.polyline;
        polyline[0].points = res;
        this.setData({ polyline }); 
      })
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
              top: 280,
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
    // deleteOrderHandler 删除订单事件
    deleteOrderHandler:function(){
      wx.showToast({
        title: '订单正在进行中，无法删除订单',
        icon:"none"
      })
    },
    // onlineServerHandler 在线客服功能
    onlineServerHandler:function(){
      handler.callPhoneHandler(wx.getStorageSync("serverPhone"));
    },
    // timeTask 事件任务
    timeTask: function () {
      let order_going_s = this.data.order_going_s;
      let order_going_m = this.data.order_going_m;
      order_going_s++;
      if (order_going_s > 59) {
        order_going_s = 0;
        order_going_m++;
      }
      this.setData({ order_going_s, order_going_m })
      if (order_going_s === 5 && order_going_m===0) {
        clearInterval(this.timeTask)
        this.setData({ order_going_s: -100000, order_going_m })
        const current_order=wx.getStorageSync("current_order");
        // 模拟订单数据
        current_order.spendTime="1小时3分钟60秒";
        current_order.startPrice="20.00";
        current_order.mileageFee="30.50";
        current_order.durationFee="14.80";
        current_order.distance="8.5公里";
        current_order.due="65.00";
        current_order.paid="50",
        // 真实需要添加的数据
        current_order.driver_ids = [wx.getStorageSync("serverDriver").id];
        current_order.coupon_ids=wx.getStorageSync("coupon")[0];
        
        wx.setStorageSync("current_order", current_order);
        wx.navigateTo({
          url: "../../pay/paidOrder/paidOrder"
        })
        // 保存服务的司机
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const time=setInterval(()=>{
        if (this.data.order_going_s === 5 && this.data.order_going_m === 0) {
          clearInterval(time);
        } else {
          this.timeTask()
        }
        
      }, 1000);
     
       this.getPolyline()
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
      const markers = [{
        iconPath: "../../../images/user/icon-29.png",
        id: 0,
        longitude: wx.getStorageSync("endAddress").location.lng,
        latitude: wx.getStorageSync("endAddress").location.lat,
        width: 15,
        height: 27
      }]
      this.setData({ markers})
      const addresses = handler.getLatLntHandler((res) => {
        this.setData({
          driver: wx.getStorageSync("serverDriver"),
          startAddress: wx.getStorageSync("startAddress"),//开始位置
         
        })
      });
      if (wx.getStorageSync("userMessage") !== "") {
        this.setData({
          avatar: wx.getStorageSync("userMessage").avatar,
          username: wx.getStorageSync("userMessage").username,
          buttonText: wx.getStorageSync("userMessage").buttonText
        });
      }
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
      // console.log(e.currentTarget.dataset.skip);
      handler.intoPageHandler(e.currentTarget.dataset.skip);
    },
    // callPhoneHandler 联系客服
    callPhoneHandler: function () {
      handler.callPhoneHandler(wx.getStorageSync("serverPhone"));
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