// pages/driver/personalInformation/personalInformation.js
const citylist=require("../../../data/PCA.js");
const handler=require("../../../utils/function.js");
console.log(citylist);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '省',
    city: '市',
    district: '区',
    arrayProvince: [],
    arrayCity: [],
    arrayDistrict: [],
    indexProvince: 0,
    indexCity: 0,
    IndexDistrict: 0,
    citylist1: [], 
    checkCitylist:true,
    citylist: citylist.data,
    registerCity:"请选择",
    driverAge:"请选择",
    arrayDriverAge:[],
    driver: {//所有信息验证
      city: null,
      city_status: false,
      cityTest: false,
      name: null,
      name_status: false,
      nameTest: false,
      phone:null,
      phone_status:false,
      phoneTest: false,
      id: null,
      id_status: false,
      idTest: false,
      relative: null,
      relative_status: false,
      relativeTest: false,
      bank: null,
      bank_status: false,
      bankTest: false,
      workTime: -1,
      workTime_status: false,
      workTimeTest: false,
      idCard: null,
      idCard_status: false,
      idCardTest: false,
      driver: null,
      driver_status: false,
      driverTime: -1,
      driverTime_status: false,
      driverTimeTest:false,
      idCardPhoto:null,
      idCardPhotoTest:false,
      driverPhoto:null,
      driverPhotoTest:false
    },
    url_type:"",
    driverEffictTime: ["6年", "10年", "长期"],
  },
  // selectCityHandler
  selectCityHandler:function(){
    this.setData({ checkCitylist:false});
  },
  // selectCityHandler 选择城市显示
  selectCityHandler:function(){
    const driver=this.data.driver;
    driver.city_status=true;
    this.setData({ driver});
    var arrayTemp = [];  
    for(var i = 0; i< this.data.citylist.length; i++) {  
    arrayTemp.push(this.data.citylist[i].p);
    // console.log(this.data.citylist[i].p);  
  }
    this.setData({
      arrayProvince: arrayTemp,
    })  
  },
  selectedProvince: function (e) {
    //获取省份列表  
    var arrayTemp1 = [];
    var arrayTemp = this.data.citylist[e.detail.value].c;
    if (arrayTemp[0].a) {
      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp1.push(arrayTemp[i].n);
      }
      //更新市显示  
      this.setData({
        province: this.data.arrayProvince[e.detail.value],
        indexProvince: e.detail.value,
        arrayCity: arrayTemp1,
        city: '市',
        district: '区',
        registerCity: this.data.arrayProvince[e.detail.value]
      })
    }
    //直辖市  
    else {
      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp1.push(arrayTemp[i].n);
      }
      //更新市显示  
      this.setData({
        province: '直辖市',
        indexProvince: -1,
        city: this.data.arrayProvince[e.detail.value],
        district: '区',
        arrayDistrict: arrayTemp1,
      })
    }

  },
  
  // 选择省份
  selectedProvince: function (e) {
    //获取省份列表  
    var arrayTemp1 = [];
    var arrayTemp = this.data.citylist[e.detail.value].c;
    if (arrayTemp[0].a) {
      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp1.push(arrayTemp[i].n);
      }
      //更新市显示  
      this.setData({
        province: this.data.arrayProvince[e.detail.value],
        indexProvince: e.detail.value,
        arrayCity: arrayTemp1,
        city: '市',
        district: '区',
        registerCity: this.data.arrayProvince[e.detail.value]
      })
    }
    //直辖市  
    else {
      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp1.push(arrayTemp[i].n);
      }
      //更新市显示  
      this.setData({
        province: '直辖市',
        indexProvince: -1,
        city: this.data.arrayProvince[e.detail.value],
        district: '区',
        arrayDistrict: arrayTemp1,
      })
    }

  },
  // 选择城市
  selectedCity: function (e) {
    //获取区列表 
    if (this.data.indexProvince === 0 || this.data.indexProvince === -1){
      wx.showToast({
        title: '请先选择省',
        icon:"none"
      })
    }else{ 
      var arrayTemp1 = [];
      var arrayTemp = this.data.citylist[this.data.indexProvince].c[e.detail.value].a;

      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp1.push(arrayTemp[i].s);
      }
      const driver = this.data.driver;
      driver.city = this.data.registerCity + this.data.arrayCity[e.detail.value];
      //更新区显示  
      this.setData({
        city: this.data.arrayCity[e.detail.value],
        indexCity: e.detail.value,
        arrayDistrict: arrayTemp1,
        district: '区',
        registerCity: driver.city ,
        checkCitylist:true
      })
      const driver_information = wx.getStorageSync("driver_information");
      driver_information.city="";
      driver_information.city = driver.city;
      driver_information.city_status = false;
      driver_information.cityTest=true;
      wx.setStorageSync("driver_information", driver_information);
    }
  },
  selectedDistrict: function (e) {
    console.log(this.data.indexProvince);
    if (this.data.indexCity === 0 || this.data.indexCity === -1) {
      wx.showToast({
        title: '请先选择市',
        icon: "none"
      })
    } else {
    var arrayTemp1 = [];
      //直辖市  
      if (this.data.indexCity === -1) {
        //更新区显示  
        this.setData({
          district: this.data.arrayDistrict[e.detail.value],
          indexDistrict: e.detail.value,
        })
      }
      //省  
      else {
        //获取省份列表  
        var arrayTemp = this.data.citylist[this.data.indexProvince].c[this.data.indexCity].a;

        //更新区显示  
        this.setData({
          district: arrayTemp[e.detail.value].s,
          indexDistrict: e.detail.value,
        })
      }
    }
  },  
  // selectNameHandler 输入姓名事件
  selectNameHandler:function(){
    const driver = this.data.driver;
    driver.name_status = true;
    this.setData({ driver });
  },
  // selectedNameHandler 获取姓名事件
  selectedNameHandler:function(e){
    // const driver = this.data.driver;
    // driver.name = e.detail.value;
    // this.setData({ driver });
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.name = e.detail.value;
    driver_information.name_status = false;
    driver_information.nameTest=true;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectPhoneHandler 输入电话号码事件
  selectPhoneHandler:function(){
    const driver = this.data.driver;
    driver.phone_status = true;
    this.setData({ driver });
  },
  // selectedPhoneHandler 获取电话号码
  selectedPhoneHandler:function(e){
    // const driver = this.data.driver;
    // driver.phone = e.detail.value;
    // this.setData({ driver });
    // console.log(e.detail.value);
    this.phoneTest(e.detail.value);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.phone = e.detail.value;
    driver_information.phone_status = false;
    driver_information.phoneTest=this.phoneTest(e.detail.value)?true:false;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectIdHandler 输入工号事件
  selectIdHandler: function () {
    const driver = this.data.driver;
    driver.id_status = true;
    this.setData({ driver });
  },
  // selectedIdHandler 获取工号事件
  selectedIdHandler: function (e) {
    const driver = this.data.driver;
    driver.id = e.detail.value;
    driver.idTest = true;
    this.setData({ driver });
    console.log(e.detail.value);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.id = e.detail.value;
    driver_information.id_status = false;
    driver_information.idTest=true;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectNameHandler 输入联系人电话号码事件
  selectRelativeHandler: function () {
    const driver = this.data.driver;
    driver.relative_status = true;
    this.setData({ driver });
  },
  // phoneTest 电话号码验证
  phoneTest: function (params) {
    if (params == '' || !/^1\d{10}$/.test(params)) {
      wx.showToast({
        title: '请输入正确的电话号码格式',
        icon: "none"
      })
      return;
    } else {
      return true;
    }
  },
  // selectedNameHandler 获取联系人电话号码事件
  selectedRelativeHandler: function (e) {
    const driver = this.data.driver;
    driver.relative = e.detail.value;
    this.setData({ driver });
    console.log(e.detail.value);
    this.phoneTest(e.detail.value);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.relative = e.detail.value;
    driver_information.relative_status = false;
    driver_information.relativeTest = this.phoneTest(e.detail.value)?true:false;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectNameHandler 输入银行卡号事件
  selectBankHandler: function () {
    const driver = this.data.driver;
    driver.bank_status = true;
    this.setData({ driver });
  },
  // selectBankHandler 获取银行卡号事件
  selectedBankHandler: function (e) {
    const driver = this.data.driver;
    driver.bank = e.detail.value;
    this.setData({ driver });
    console.log(e.detail.value);
    var bankTest= this.bankTest(e.detail.value);
    console.log("银行卡号", bankTest);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.bank = e.detail.value;
    driver_information.bank_status = false;
    driver_information.bankTest = this.bankTest(e.detail.value)?true:false;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  bankTest: function (bankno){
    var lastNum = bankno.substr(bankno.length - 1, 1);//取出 最后一位（与 luhm 进行比较） 
    var first15Num=bankno.substr(0,bankno.length-1);// 前 15 或 18 位 
    var newArr=new Array(); 
    for(var i=first15Num.length-1;i>-1;i--){ 
      newArr.push(first15Num.substr(i,1)); } 
      var arrJiShu=new Array(); //奇数位*2 的积 <9 
      var arrJiShu2=new Array(); //奇数位*2 的积 >9 
      var arrOuShu=new Array(); //偶数位数组 
      for(var j=0;j<newArr.length;j++){ if((j+1)%2==1){
        //奇数位 
        if(parseInt(newArr[j])*2<9) 
        arrJiShu.push(parseInt(newArr[j])*2); 
        else arrJiShu2.push(parseInt(newArr[j])*2); } 
        else 
         arrOuShu.push(newArr[j]); }
          var jishu_child1=new Array();//奇数位*2 >9 的分割之 后的数组个位数 
          var jishu_child2=new Array();//奇数位*2 >9 的分割之 后的数组十位数 
          for(var h=0;h<arrJiShu2.length;h++){ jishu_child1.push(parseInt(arrJiShu2[h])%10); jishu_child2.push(parseInt(arrJiShu2[h])/10); } var sumJiShu=0; //奇数位*2 < 9 的数组之和 
          var sumOuShu=0; //偶数位数组之和 
          var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组 个位数之和 
          var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组 十位数之和 
          var sumTotal=0; for(var m=0;m<arrJiShu.length;m++){ sumJiShu=sumJiShu+parseInt(arrJiShu[m]); } 
          for(var n=0;n<arrOuShu.length;n++){ sumOuShu=sumOuShu+parseInt(arrOuShu[n]); } 
          for(var p=0;p<jishu_child1.length;p++){ sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1 [p]); sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2 [p]); } 
          //计算总和 
          sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2); 
          //计算 Luhm 值 
          var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
          var luhm= 10-k; if(lastNum==luhm){ 
             return true; 
          } 
          else{  
            wx.showToast({
              title: '请输入正确的银行卡号',
              icon:"none"
            })
            console.log("验证失败");
            return false;
          }
  },
  // selectWorktimeHandler 输入工作年限事件
  selectWorktimeHandler: function (e) {
    console.log("selectWorktimeHandler");
    const driver = this.data.driver;
    driver.workTime_status = true;
    var arrayDriverAge = [];
    for (var i = 0; i < 45; i++) {
      arrayDriverAge.push(i)
    }
    this.setData({ driver, arrayDriverAge, driverAge: e.detail.value});
    console.log("selectWorktimeHandler", this.data.driver.workTime_status);
  },
  // selectedWorktimeHandler 获取银行卡号事件
  selectedWorktimeHandler: function (e) {
    const driver = this.data.driver;
    driver.workTime = e.detail.value;
    driver.workTimeTest = true;
    this.setData({ driver });
    console.log(e.detail.value);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.workTime = e.detail.value;
    driver_information.workTime_status = false;
    driver_information.workTimeTest = true;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectIdCardHandler 输入身份证事件
  selectIdCardHandler: function () {
    const driver = this.data.driver;
    driver.idCard_status = true;
    this.setData({ driver });
  },
  // selectedIdHandler 获取身份证事件
  selectedIdCardHandler: function (e) {
    const driver = this.data.driver;
    driver.idCard = e.detail.value;
    this.setData({ driver });

    // console.log(e.detail.value);
    // driver.idCard.status=this.IdCardTest(e.detail.value);
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.idCard = e.detail.value;
    driver_information.idCard_status = false;
    driver_information.idCardTest = this.IdCardTest(e.detail.value)? true:false;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  IdCardTest: function (idCard){
    //15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
      if (idCard.length == 18) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
          idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
        var idCardLast = idCard.substring(17);//得到最后一位身份证号码
        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == "X" || idCardLast == "x") {
            return true;
          } else {
            wx.showToast({
              title: '身份证号码错误！',
              icon:"none"
            })
            return false;
          }
        } else {
          //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {
            return true;
          } else {
            wx.showToast({
              title: '身份证号码错误！',
              icon: "none"
            })
            return false;
          }
        }
      }
    } else {
      wx.showToast({
        title: '身份证格式不正确！',
        icon: "none"
      })
      return false;
    }
  },
  // selectDriverAgeHandler 选择驾驶年龄
  selectDriverAgeHandler:function(e){
    console.log(e.detail.value);
    const driver=this.data.driver;
    driver.workTime = e.detail.value;
    this.setData({  driver});
    const driver_information = wx.getStorageSync("driver_information");
    driver_information.driverTime = e.detail.value;
    driver_information.driverTime_status = false;
    driver_information.driverTimeTest =true;
    wx.setStorageSync("driver_information", driver_information);
    console.log(e.detail.value);
  },
  // selectDriverTimeHandler 选择驾驶证有效期年龄
  selectDriverTimeHandler: function () {
    const driver = this.data.driver;
    driver.driverTime_status = true;
    this.setData({ driver });
  },
  // selectedDriverTimeHandler 选择驾驶证有效期年龄
  selectedDriverTimeHandler: function (e) {
    const { driver, driverEffictTime} = this.data;
    console.log(e.detail.value)
    driver.driverTime = driverEffictTime[e.detail.value];
    this.setData({ driver });
  },
  // intoPageHandler 页面跳转
  intoPageHandler: function (e) {
    console.log(e.currentTarget.dataset.skip);
    handler.intoPageHandler(e.currentTarget.dataset.skip)
  },
  // personalInformationHandler 完成按钮 提交个人信息
  personalInformationHandler:function(){
   
    console.log(this.data.driver.city);
    const driver = this.data.driver;
    driver.city_status = false;
    driver.name_status=false;
    driver.phone_status = false;
    driver.id_status = false;
    driver.relative_status = false;
    driver.bank_status = false;
    driver.workTime_status = false;
    driver.idCard_status = false;
    driver.driver_status = false;
    driver.driverTime_status = false;
    driver.city_status = false;
    this.setData({driver});
      if (this.data.url_type =="register"){
        handler.intoPageHandler("../../map/driverServer/driverServer")
      }else{
        handler.intoPageHandler("../../index/index")
      }
    wx.setStorageSync("driver_information", this.data.driver)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.url_type);
    this.setData({ url_type: options.url_type});
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
    if (wx.getStorageSync("driver_information")!==""){
      this.setData({ driver: wx.getStorageSync("driver_information") });
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