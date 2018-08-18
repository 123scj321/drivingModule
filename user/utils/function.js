// 登录事件
function loginHandler(callback) {
    wx.login({
      success: res => {
        console.log(res);

        if (res.code) {
          wx.setStorageSync("openId", res.code );
          wx.getUserInfo({
            success: res => {
              console.log(res);
              callback({ avatar: res.userInfo.avatarUrl, username: res.userInfo.nickName, buttonText: "退出" });
              wx.setStorageSync("userMessage",{ avatar: res.userInfo.avatarUrl, username: res.userInfo.nickName, buttonText: "退出" });
            }
          })
        }
      }
    })
};
// 地址获取
function getLatLntHandler(callback){
  var latitude = null;
  var longitude = null;
  var speed = null;
  var accuracy = null;
  var addressName=null;
  wx.getLocation({
    type: 'gcj02',
    success (res) {
      latitude = res.latitude
      longitude = res.longitude
      speed = res.speed
      accuracy = res.accuracy;
      var locationString = res.latitude + "," + res.longitude;
      console.log(latitude, longitude);
        console.log(latitude, longitude, speed, accuracy);
       
        addressName_fun(latitude + "," + longitude,(address)=>{
          callback({ latitude, longitude, speed, accuracy, address})
        })
      
    },
    fail:function(){
      wx.showToast({
        title: '请求失败',
      })
    },
    complete:function(){
      wx.showToast({
        title: '请求失败',
      })
    }})
  // console.log(latitude, longitude, speed, accuracy, addressName);
  // return { latitude, longitude, speed, accuracy, addressName};
}
// 获取地址
function addressName_fun(params,call){
  wx.request({
    url: 'http://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1', //根据经纬度转换成具体地址
    data: {
      "key": "YLFBZ-WHAWI-ZXUGH-53Q65-TOJ7E-ADBNQ",
      "location": params
    },
    method: 'GET',
    // header: {},
    success(res) {
     
      call(res.data.result.address)
    },
    fail: function () {
      wx.showToast({
        title: '请求失败',
      })
    },
    complete: function () {
      wx.showToast({
        title: '请求失败',
      })
    }
  })
}
// 页面跳转
function intoPageHandler(params) {
  console.log(params);
  wx.navigateTo({
    url: params,
  })
}
function payHandler(e) {
  var money = '0.01';
  wx.request({
    url: 'http://cjapp.135k.com/index.php/api/Pay/rechargePay',
    method: 'get',
    data: {
      uid: wx.getStorageSync('uid'),
      money: money,
    },
    success: function (res) {
      console.log('res', res)
      var prepay_id = res.data.weixin.package
      var pay_id = prepay_id.slice(10);
      wx.requestPayment({
        'timeStamp': '' + res.data.weixin.timeStamp + '',
        'nonceStr': '' + res.data.weixin.nonceStr + '',
        'package': '' + res.data.weixin.package + '',
        'signType': 'MD5',
        'paySign': '' + res.data.weixin.paySign + '',
        'success': function (res) {
          wx.showToast({
            title: '支付成功',
            duration: 1500,
            success: function (res) {
              console.log('eres', res)
              //支付成功后回调处理数据
              wx.request({
                url: 'http://cjapp.135k.com/index.php/api/Pay/callback',
                method: "get",
                data: {
                  uid: wx.getStorageSync('uid'),
                  openid: wx.getStorageSync('openid'),
                  pay_id: pay_id,
                },
                success: function (res) {
                  console.log('resresres', res)
                  
                }
              })
            }
          })
        },
        'fail': function (res) {
          // wx.navigateTo({
          //   url: '../smallclass/index',
          // })
        }
      })
    }
  })
}
// 获取位置路线
function getPolyline(callback) {
  wx.request({
    url: `https://apis.map.qq.com/ws/direction/v1/bicycling/?from=${wx.getStorageSync("startAddress").latitude},${wx.getStorageSync("startAddress").longitude}&to=34.28,108.94&key=Z6RBZ-6H4CU-AV6V5-2OTIO-Q2CLZ-VMF5T`,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      var coors = res.data.result.routes[0].polyline;
      for (var i = 2; i < coors.length; i++)
      { coors[i] = coors[i - 2] + coors[i] / 1000000 }
      // console.log(coors);
      const points = [];
      for (var j = 0; j < coors.length; j += 2) {
        points[points.length] = { longitude: coors[j + 1], latitude: coors[j] }
      }
      
      callback(points);
      

    },
    fail: function () {
    }
  })
}
// callPhoneHandler 联系客服
function callPhoneHandler(params) {
  wx.makePhoneCall({
    phoneNumber: params,
  })
}
module.exports = {
  getLatLntHandler: getLatLntHandler,
  intoPageHandler: intoPageHandler,
  loginHandler: loginHandler,
  payHandler: payHandler,
  getPolyline: getPolyline,
  callPhoneHandler: callPhoneHandler
}