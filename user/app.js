//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // wx.removeStorageSync("startAddress");
    // 保存数据
    const data = require("./data/mockData.js");
    wx.setStorageSync("user", data.mockData.user);
    wx.setStorageSync("coupon", data.mockData.coupon);
    wx.setStorageSync("order", data.mockData.order);
    wx.setStorageSync("driver", data.mockData.driver);
    wx.setStorageSync("evaluate", data.mockData.evaluate);
    wx.setStorageSync("server", data.mockData.server);
    wx.setStorageSync("serverPhone", data.mockData.serverPhone);
    wx.setStorageSync("openId", "wed3h213hn2jk123j");
    // 调用用户的地理位置
    this.getlocation();
    // this.loginHandler();
    // 事件定时器
    // if(wx.getStorageSync("time")!==undefined){
    //   setInterval(this.timeTask, 1000);
    // }
  },
  timeTask: function () {
    const time=wx.getStorageSync("time");
    let s = time.s;
    let m = time.m;
    s++;
    if (s > 59) {
      s = 0;
      m++;
    }
    wx.setStorageSync("time", { m, s });
  },
  // 获取用户的地理位置
  getlocation: function () {
    // console.log(cb)
    // const that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log("latitude:" + latitude)
        console.log("longitude:" + longitude)
        console.log("speed:" + speed)
        console.log("accuracy:" + accuracy)
        // that.setData({ latitude, longitude });
        //  wx.setStorageSync("latitude_longitude", { latitude, longitude})
        console.log("定位成功");
        // return (res.latitude+res.longitude);
        var locationString = res.latitude + "," + res.longitude;   //获取的经度纬度
        wx.request({
          url: 'http://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',  //根据经纬度转换成具体地址
          data: {
            "key": "YLFBZ-WHAWI-ZXUGH-53Q65-TOJ7E-ADBNQ",
            "location": locationString
          },
          method: 'GET',
          // header: {},
          success: function (res) {
            // success
            console.log("请求成功");
            console.log("请求数据:" + res.data.result.address);
            console.log("startAddress", wx.getStorageSync("startAddress"));
            // if (wx.getStorageSync("startAddress") !== "") {
            console.log("kaishisizhi", res.data.result.address);
            // that.setData({ startAddressName: res.data.result.address });
            // }else{
            // that.setData({ startAddressName: res.data.result.address });
            wx.setStorageSync("startAddress", { addressName: res.data.result.address, addressText: res.data.result.address, latitude, longitude });
            // }

          },
          fail: function () {
            // fail
            console.log("请求失败");
          },
          complete: function () {
            // complete
            console.log("请求完成");
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})