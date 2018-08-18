// pages/map/driverServer/driverServer.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    avatar: "../../../images/icon/icon-07.png",
    buttonText: "登录",
    username: "未登录",
    orderGoing:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const addresses= handler.getLatLntHandler((res)=>{
      this.setData({
        startAddress: res.address,//开始位置
        longitude: res.longitude,
        latitude: res.latitude,
      })
     });
  },
  regionchange(e) {
    console.log("regionchange", e.type)
  },
  markertap(e) {
    console.log("markertap", e.markerId)
  },
  controltap(e) {
    console.log("map controltap", e.controlId)
    if (e.controlId === 1) {
      this.openMyPageHandler();
    } else {
     const addresses= handler.getLatLntHandler((res)=>{
      this.setData({
        startAddress: res.address,//开始位置
        longitude: res.longitude,
        latitude: res.latitude,
      })
     });
    }
  },
  // openMyPageHandler 打开我的页面
  openMyPageHandler:function(){
    const { pageRight, myShow}=this.data;
    console.log("openMyPageHandler",pageRight, myShow);
    if (myShow){
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
        }] });
    }else{
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
    if (this.data.endAddress===null){
      wx.showToast({
        title: '请输入目的地',
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
      wx.removeStorageSync("endAddress");
      wx.removeStorageSync("relative_people");
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
    if(wx.getStorageSync("endAddress")!==""){
      this.setData({ endAddress: wx.getStorageSync("endAddress").addressName });
    }
  },
  // 用户信息事件
  /**loginHandler用户登录页面 */
  loginHandler: function (e) {
    if ( this.data.buttonText === "登录") {
    handler.loginHandler((res)=>{
      console.log(res);
      this.setData(res);
    })
    }else{
      this.setData({ avatar: "../../../images/icon/icon-07.png", username: "未登录", buttonText: "登录" });
      }
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.skip);
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