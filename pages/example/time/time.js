// pages/example/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ["今天", "明天", "后台"],//时间选择器
    hours: [],
    minute: [],
    homeHandlerShow: true
  },
  bindTimeChange:function(e){
    console.log(e.detail.value);
    // 今天样式
    if (e.detail.value[0]===0&&e.detail.value[1] === 0){
      this.selectTimeHandler(0,0);
    } else if (e.detail.value[0] === 0 && e.detail.value[1] !== 0){
      this.selectTimeHandler(0, e.detail.value[1]);
    }
    // 明天和后台样式
    else if (e.detail.value[0] !== 0){
      this.selectTimeHandler(e.detail.value[0], e.detail.value[1],0);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectTimeHandler(0,0,0);
  },
  selectTimeHandler:function(dateParams,hoursParams,minutesParams){
    const { hours, minute} = this.data;
    console.log(dateParams);
    const data = new Date();
    const hour = data.getHours();
    // 今天样式
    hours.length = 0;
    minute.length = 0;
    console.log(dateParams, hoursParams, minutesParams);
    if (dateParams === 0 && hoursParams===0){
      
      hours.push("现在");
      for (var i = hour + 1; i < 24; i++) {
        hours.push(i);
      }
      this.setData({ hours  , minute });
    } else if (dateParams === 0 && hoursParams !== 0){
      hours.push("现在");
      for (var i = hour + 1; i < 24; i++) {
        hours.push(i);
      }
      for (var i = 0; i < 60; i += 10) {
        minute.push(i);
      }
      this.setData({ hours, minute });
    } else if (dateParams !== 0){
      for (var i =0; i < 24; i ++) {
        hours.push(i);
      }
      for (var i = 0; i < 60; i += 10) {
        minute.push(i);
      }
      this.setData({ hours, minute });
    }
    console.log(hours, minute);
    
  },
  nextDateHandler:function(){

  },
  // 
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