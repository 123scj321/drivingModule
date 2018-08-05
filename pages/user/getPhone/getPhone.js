// pages/user/getPhone/getPhone.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getPhoneAndYanZhengMa: true,
    sendtxt: "获取验证码",
    phone: null,
    phone: '',
    verificationcode: '',
    sendtxt: '发送验证码',
    gettingCode: true,
    successCallback: null
  },
  // phoneinput 获取电话号码
  phoneinput: function (event) {
    var that = this
    that.setData({
      phone: event.detail.value
    })
  },
  // 发送验证码
  sendcode: function () {
    var that = this;
    console.log('打印手机号')
    console.log(that.data.phone)
    if (!that.data.gettingCode) {
      return;
    }
    if (that.data.phone == '' || !/^1\d{10}$/.test(that.data.phone)) {

      wx.showToast({
        title: '请输入正确的电话号码格式',
        icon: "none"
      })
      return;
    }
    // console.log('触发发验证码')
    wx.request({
      url: 'https://product.fishqc.com/Api/WeixinLogin/weixinminiMobileVerificationCode',
      data: {
        mobile: that.data.phone
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == 200) {
          that.countDown()
        } else {

        }
      }
    })
  },
  //倒计时 倒数
  countDown: function () {
    var that = this;
    that.data.gettingCode = false;
    var seconds = 59;
    var countTimer = setInterval(function () {
      that.setData({
        sendtxt: seconds + "s"
      })
      seconds--;
      if (seconds <= 0) {
        countTimer = clearInterval(countTimer);
        that.setData({
          sendtxt: '获取验证码'
        })
        that.data.gettingCode = true;
      }
    }, 1000);
  },
  // getPhoneLogin 登录的电话号码
  getPhoneLogin: function () {
    console.log(this.data.gettingCode);
    if (!this.data.gettingCode) {
      wx.showToast({
        title: '登录成功',
        icon: 'none'
      })
      wx.setStorageSync("userPhone", this.data.phone)
      handler.intoPageHandler("../../map/driverServer/driverServer");
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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