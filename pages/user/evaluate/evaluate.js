// pages/user/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    driver:wx.getStorageSync("driverDetail"),
    order:wx.getStorageSync("orderDetail"),
    satisfaction: ["满意", "一般","不满意"],
    checkSatisfaction:-1,
    question: ["绕路", "态度不好", "迟到早退", "不穿工服", "用语不礼貌", "垃圾未处理","其他"],
    checkQuestion:-1,
    idea:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
// satisfactionHandler 满意度选择
  satisfactionHandler:function(e){
    console.log(e.currentTarget.dataset.id);
    this.setData({ checkSatisfaction: e.currentTarget.dataset.id});
  },
  // questionHandler 存在问题选择
  questionHandler:function(e){
    console.log(e.currentTarget.dataset.id);
    this.setData({ checkQuestion: e.currentTarget.dataset.id});
  },
  // ideaHandler 意见事件
  ideaHandler:function(e){
    console.log(e.detail.value);
      this.setData({ idea: e.detail.value});
  },
  // evaluateSubmitHandler 匿名提交事件
  evaluateSubmitHandler:function(){
    const idea = this.testIdeaHandler(this.data.idea, "请输入您的意见");
    const question = this.testHandler(this.data.checkQuestion, "请选择存在的问题");
    const satisfaction = this.testHandler(this.data.checkSatisfaction,"请选择服务满意度");
    if (idea && question && satisfaction){
      const evaluate=wx.getStorageSync("evaluate");
      const evaluateId = "00" + evaluate.length;
      evaluate[evaluate.length] = {
        id: evaluateId,
        satisfaction: this.data.satisfaction[this.data.checkSatisfaction],
        question: this.data.question[this.data.checkQuestion],
        idea: this.data.idea};
      wx.setStorageSync("evaluate", evaluate);
      const driver=wx.getStorageSync("driverDetail");
      driver.evaluate_ids[driver.evaluate_ids.length] = evaluateId;
      wx.setStorageSync("driverDetail", driver);
    }
  },
  // 验证提交信息
testHandler:function(params,message){
  if (params!==-1){
    return true;
  }else{
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000
    })
  }
},
// testIdeaHandler 验证意见信息
  testIdeaHandler:function(params,message){
    if (params!==null){
      return true
    }else{
      wx.showToast({
        title: message,
        icon: 'none',
        duration: 2000
      })
    }
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
      driver: wx.getStorageSync("driverDetail"),
      order: wx.getStorageSync("orderDetail")});
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