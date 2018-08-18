//index.js
//获取应用实例
const app = getApp()
var handler = require("../../utils/function.js");
Page({
  data: {
    addressName:null,
    longitude:null,
    latitude: null,
    avatar:"../../../images/icon/icon-02.png",
    activityList:[],
      orderCount:0,
      currentTime:null,
      income:0.00,
      reminder:"今日周一，无限号通知，多云25-30，事宜短袖。每日6点会更新数据信息。新的一天，不要忘记微笑哦。",
      name: "",
      orderCount: 0,
      income: 0.00,
      evaluate: [],
      myTask: [],
      handler: [],
      serverPhone: "",
      left: 400
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const addresses = handler.getLatLntHandler((res) => {
      this.setData({
        addressName: res.address,//开始位置
        longitude: res.longitude,
        latitude: res.latitude,
      })
      wx.setStorageSync("current_address", {
        addressName: res.address,//开始位置
        longitude: res.longitude,
        latitude: res.latitude});
    });
    setInterval(this.timeTask,1000);
  },
  timeTask:function(){
    const date=new Date();
    this.setData({ currentTime: { h: date.getHours(), m: date.getMinutes()}});
  },
  onShow:function(){
    const order=wx.getStorageSync("order");
    var orderIncome=0;
    for (var orders of order){
      orderIncome+=Number(orders.paid);
    }
    const avatar = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").avatar :"../../../images/icon/icon-02.png";
    const name = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").username : "";
    this.setData({
    activityList: wx.getStorageSync("activity"),
    orderCount: wx.getStorageSync("order").length, 
    income: orderIncome.toFixed(2), 
    avatar, 
    evaluate: wx.getStorageSync("evaluate").length,
    name
    });
    setInterval(this.timeTask,1000);
  },
  timeTask:function(){
    const date=new Date();
    this.setData({ currentTime: { h: date.getHours(), m: date.getMinutes()}});
  },
  onShow:function(){
    const order=wx.getStorageSync("order");
    var orderIncome=0;
    for (var orders of order){
      orderIncome+=Number(orders.paid);
    }
    const avatar = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").avatar :"../../../images/icon/icon-02.png";
    const name = wx.getStorageSync("userMessage") !== "" ? wx.getStorageSync("userMessage").username : "";
    this.setData({
    activityList: wx.getStorageSync("activity"),
    orderCount: wx.getStorageSync("order").length, 
    income: orderIncome.toFixed(2), 
    avatar, 
    evaluate: wx.getStorageSync("evaluate").length,
    name
    });
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    console.log(e.currentTarget.dataset.skip);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  // callPhoneHandler 打电话功能
  callPhoneHandler: function () {
    handler.callPhoneHandler(wx.getStorageSync("server_phone"))
  },
  // intoPersonCenterHandler 个人中心
  intoPersonCenterHandler:function(){
    handler.loginHandler();
    // handler.intoPageHandler('../driver/personalCenter/personalCenter')
    this.setData({left:this.data.left===0?400:0});
  },
  // getOrderHandler 开始抢单
  getOrderHandler:function(){
    const orderStatus=wx.getStorageSync("setup");
    if (orderStatus.listenWay === "抢单模式" && (orderStatus.orderHobby == "全部" || orderStatus.orderHobby == "实时")){
      handler.intoPageHandler('../order/getOrder/getOrder')
    } else if (orderStatus.listenWay === "抢单模式" && orderStatus.orderHobby == "预约" ){
      handler.intoPageHandler('../order/appointmentOrder/appointmentOrder')
    }
  },
})
