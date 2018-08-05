// pages/map/driverServer/driverServer.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        top: 240,
        left: 10,
        width: 50,
        height: 50
      },
      clickable: true
    },
    
    ],//人物图片定位
    drivers:[
      {id:"001",title:"1名司机"},
      { id: "002", title: "2名司机" },
      { id: "003", title: "3名司机" },
      { id: "004", title: "4名司机" },
      { id: "005", title: "5名司机" },
      { id: "006", title: "6名司机" },
      { id: "007", title: "7名司机" },
      { id: "008", title: "8名司机" }
    ],//司机数量
    startAddress: null,//开始位置
    endAddress:null,//结束位置
    longitude:null,
    latitude: null,
    orderOrMore:true,//预约和司机数量显示
    driverCount:-1,
    pageRight:0,
    myShow:true,//显示my的页面
    zuoyou: "icon-zuoyou",//my
    avatar: "../../../images/user/icon-07.png",
    buttonText: "登录",
    username: "未登录",
    orderGoing:false,
    homeHandlerShow:true,
    phone:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
     const addresses= handler.getLatLntHandler((res)=>{
      //  console.log("一键定位",res);
      this.setData({
        startAddress: res.startAddress,//开始位置
      })
     });
    }
  },
  // openMyPageHandler 打开我的页面
  openMyPageHandler:function(){
    const { pageRight, myShow}=this.data;
    // console.log("openMyPageHandler",pageRight, myShow);
    if (myShow){
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
        }] });
    }else{
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
            top: 240,
            left: 10,
            width: 50,
            height: 50
          },
          clickable: true
        },

        ],});
    }
  },
  
  // callPhoneHandler 帮朋友叫车功能
  callPhoneHandler:function(){
    wx.navigateTo({ url:"../../order/helpFriendDownloadOrder/helpFriendDownloadOrder"})
  },
  // getMoreDriverHandler 需要更多为司机功能
  getMoreDriverHandler:function(){
    this.setData({ orderOrMore: !this.data.orderOrMore});
  },
  // bindChange 选择司机的数量
  bindChange:function(e){
    console.log(e.detail.value[0]);
    this.setData({ driverCount: e.detail.value[0]+1});
  },
  // getDriverCountHandler 获取司机的数量
  getDriverCountHandler:function(){
    this.setData({ orderOrMore: !this.data.orderOrMore });
  },
  // callServerHandler 一键呼叫事件
  callServerHandler:function(){
    if (this.data.buttonText==="登录"){
      wx.showToast({
        title: '请先登录',
        icon: "none"
      })
      this.openMyPageHandler();
    }else if (this.data.endAddress===null){
      wx.showToast({
        title: '请输入目的地',
        icon:"none"
      })
    }else{
      const order=wx.getStorageSync("order");
      const current_order = {
        id: "00"+(order.length+1),
        time: new Date(),
        startAddress: this.data.startAddress,
        endAddress: this.data.endAddress,
        status: 0,
        driver_count: this.data.driverCount === -1 ? 1 : this.data.driverCount,
        user: wx.getStorageSync("relative_people") === "" ? wx.getStorageSync("user") : wx.getStorageSync("relative_people"),
      };
      wx.setStorageSync("current_order", current_order)
      wx.navigateTo({
        url: '../orderAndDriverGoing/orderAndDriverGoing',
      })
    }
  },
  // orderGoingHandler 订单进行中事件
  orderGoingHandler:function(){
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
    this.setData({ startAddress: wx.getStorageSync("startAddress"), phone:wx.getStorageSync("userPhone")});
    if(wx.getStorageSync("endAddress")!==""){
      this.setData({ endAddress: wx.getStorageSync("endAddress") });
    }
    if (wx.getStorageSync("userMessage") !== ""){
      this.setData({ 
      avatar: wx.getStorageSync("userMessage").avatar, 
      username: wx.getStorageSync("userMessage").username, 
      buttonText: wx.getStorageSync("userMessage").buttonText });
    }
  },
  // 用户信息事件
  /**loginHandler用户登录页面 */
  loginHandler: function (e) {
    if ( this.data.buttonText === "登录") {
    handler.loginHandler((res)=>{
      // console.log("用户信息事件",res);
      this.setData({ res,} );
      const that=this;
      wx.showModal({
        title: '获取手机号码',
        content: '我们需要获取你的电话号码，一边与和你保持实时的联系，防止你的订单丢失',
        success:function(res){
            if(res.confirm){
              handler.intoPageHandler("../../user/getPhone/getPhone");
            }
        },
        fail:function(){
          wx.showToast({
            title: '登录失败',
            icon:"none"
          })
        }
      })
    })
    }else{
      this.setData({ avatar: "../../../images/user/icon-07.png", username: "未登录", buttonText: "登录",phone:"" });
      }
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.skip);
  },
  // relstiveServerHandler 联系客服功能
  relstiveServerHandler:function(){
    handler.callPhoneHandler(wx.getStorageSync("serverPhone"));
  },
  //时间样式开始
  selectTimeShowTimeHandler:function(){
    this.setData({ showTimeContainer: true, homeHandlerShow:false});
    this.selectTimeHandler(0, 0, 0);
  },
  // getTimeHandlerCancle 预约时间取消样式
  getTimeHandlerCancle:function(){
    this.setData({ showTimeContainer: false, homeHandlerShow: true });
  },
  // getTimeHandlerOk 预约时间确定样式
  getTimeHandlerOk:function(){
    wx.getS
    this.setData({ showTimeContainer: false, homeHandlerShow: true });
  },
  // 绑定时间定时器
  bindTimeChange: function (e) {
    console.log(e.detail.value);
    // 今天样式
    if (e.detail.value[0] === 0 && e.detail.value[1] === 0) {
      this.selectTimeHandler(0, 0);
    } else if (e.detail.value[0] === 0 && e.detail.value[1] !== 0) {
      this.selectTimeHandler(0, e.detail.value[1]);
    }
    // 明天和后台样式
    else if (e.detail.value[0] !== 0) {
      this.selectTimeHandler(e.detail.value[0], e.detail.value[1], 0);
    }
  },
  // 选择时间函数
  selectTimeHandler: function (dateParams, hoursParams, minutesParams) {
    const { hours, minute } = this.data;
    console.log(dateParams);
    const data = new Date();
    const hour = data.getHours();
    // 今天样式
    hours.length = 0;
    minute.length = 0;
    console.log(dateParams, hoursParams, minutesParams);
    if (dateParams === 0 && hoursParams === 0) {

      hours.push("现在");
      for (var i = hour + 1; i < 24; i++) {
        hours.push(i + "点");
      }
      this.setData({ hours, minute });
    } else if (dateParams === 0 && hoursParams !== 0) {
      hours.push("现在");
      for (var i = hour + 1; i < 24; i++) {
        hours.push(i+"点");
      }
      for (var i = 0; i < 60; i += 10) {
        minute.push(i);
      }
      this.setData({ hours, minute });
    } else if (dateParams !== 0) {
      for (var i = 0; i < 24; i++) {
        hours.push(i + "点");
      }
      for (var i = 0; i < 60; i += 10) {
        minute.push(i);
      }
      this.setData({ hours, minute });
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