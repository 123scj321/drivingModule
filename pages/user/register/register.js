// pages/user/register/register.js
const handler = require("../../../utils/function.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendtxt: "获取验证码",
    phone: null,
    phoneTest:false,
    verificationcode: null,
    verificationcodeTest:false,
    sendtxt: '发送验证码',
    gettingCode: true,
    password:null,
    passwordTest:false,
    successCallback: null,
    agreement:{
      stauts:false,
      image: "../../../../images/driver/icon-34.png"
    },
    
  },
  // phoneinput 获取电话号码
  phoneinput: function (event) {
    var that = this
    that.setData({
      phone: event.detail.value
    })
    this.phoneTest(event.detail.value)
  },
  // phoneTest 电话号码验证
  phoneTest: function (params) {
    if (params == '' || !/^1\d{10}$/.test(params)) {
      wx.showToast({
        title: '请输入正确的电话号码格式',
        icon: "none"
      })
      this.setData({
        phoneTest: false,
      });
      return;
    } else {
      this.setData({
        phoneTest: true,
      });
    }
  },
  // 发送验证码
  sendcode: function () {
    var that = this;
    this.phoneTest(this.data.phone)
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
          wx.showToast({
            title: '获取验证码失败',
            icon:"none"
          })
        }
      },
      fail:function(){
        wx.showToast({
          title: '获取验证码失败',
          icon: "none"
        })
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
  verificationinput:function(e){
    this.setData({
      verificationcode: e.detail.value,
    });
    this.verificationTest(e.detail.value);
  },
  verificationTest:function(params){
    if (params == null) {
      wx.showToast({
        title: '请输入验证码',
        icon: "none"
      })
      return;
    } else {
      this.setData({
        verificationcodeTest: true,
      });
    }
  },
  // passwordinput 获取密码
  passwordinput:function(e){
    console.log(e.detail.value);
    this.setData({
      password: e.detail.value
    });
    this.passwordTest(e.detail.value);
  },
  // passwordTest 密码验证
  passwordTest:function(params){
    if (params == '' || !/^\d{6}$/.test(params)) {
      wx.showToast({
        title: '请输入正确的密码格式',
        icon: "none"
      })
      return;
    } else {
      this.setData({
        passwordTest: true,
      });
    }
  },
  // getPhoneLogin 登录的电话号码
  getPhoneLogin: function () {
    const { 
      sendtxt,
      phone,
      phoneTest,
      verificationcode,
      verificationcodeTest,
      password,
      passwordTest,
      successCallback,
      agreement}=this.data;
    // console.log(sendtxt,
    //   phone,
    //   phoneTest,
    //   verificationcode,
    //   verificationcodeTest,
    //   password,
    //   passwordTest,
    //   successCallback,
    //   agreement);
    if (agreement.stauts && verificationcodeTest && passwordTest && phoneTest){
      wx.showToast({
        title: '注册成功',
        icon: 'none'
      })
      wx.setStorageSync("userPhone", this.data.phone)
      handler.intoPageHandler("../../driver/personalInformation/personalInformation?url_type=register");
    }else{
      !agreement.stauts && this.agreementAndReadTest();
      !passwordTest && this.passwordTest(phone);
      !verificationcodeTest && this.verificationTest(verificationcode);
      !phoneTest && this.phoneTest(phone);
    }
  },
  // agreementAndReadHandler 我已阅读并同意事件
  agreementAndReadHandler:function(){
    const { agreement } = this.data;
    if (agreement.status) {
      this.setData({
        agreement: {
          stauts: false,
          image: "../../../../images/driver/icon-34.png"
        }
      });
    }else{
      this.setData({
        agreement: {
          stauts: true,
          image: "../../../../images/driver/icon-35.png"
        }
      });
    }
    
  },
  agreementAndReadTest:function(){
    const { agreement } = this.data;
    if (!agreement.stauts){
      wx.showToast({
        title: ' 请勾选我已阅读并同意《代驾服务协议》',
        icon:"none"
      })
      return;
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