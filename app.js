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
    // getDataHnadler
    this.getDataHnadler();
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
        console.log("定位成功");
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
            wx.setStorageSync("startAddress", { title: res.data.result.address, address: res.data.result.address, location: { lat:latitude, lng:longitude} });
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
  getDataHnadler: function () {
    const datas = require("./data/driverMockData.js");
    const { driver, order, activity, award, evaluate, knowledge, server_phone } = datas.data;

    console.log({ driver, order, activity, award, evaluate, knowledge });
    wx.setStorageSync("driver", driver);
    wx.setStorageSync("order", order);
    wx.setStorageSync("knowledge", knowledge);
    wx.setStorageSync("award", award);
    wx.setStorageSync("activity", activity);
    wx.setStorageSync("evaluate", evaluate);
    wx.setStorageSync("setup", { "listenWay": "抢单模式", "orderHobby": "全部", "orderDistance": 1 });
    wx.setStorageSync("server_phone", server_phone);
  },
  globalData: {
    userInfo: null
  }
})