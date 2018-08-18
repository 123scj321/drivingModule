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
    driver: {
      city: null,
      city_status: false,
      name: null,
      name_status: false,
      id: null,
      id_status: false,
      relative: null,
      relative_status: false,
      bank: null,
      bank_status: false,
      workTime: -1,
      workTime_status: false,
      idCard: null,
      idCard_status: false,
      driver: null,
      driver_status: false,
      driverTime: -1,
      driverTime_status: false, 
    },
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
  selectedCity: function (e) {
    //获取区列表 
    console.log("selectedCity");
    console.log(this.data.indexProvince);
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
        registerCity: this.data.registerCity + this.data.arrayCity[e.detail.value],
        checkCitylist:true
      })
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
  // selectDriverAgeHandler 选择驾驶年龄
  selectDriverAgeHandler:function(e){
    var arrayDriverAge=[];
    for(var i=0;i<45;i++){
      arrayDriverAge.push(i)
    }
    this.setData({
      arrayDriverAge, driverAge: e.detail.value, driver,
      checkCitylist: true});
  },
  // selectNameHandler 输入姓名事件
  selectNameHandler:function(){
    const driver = this.data.driver;
    driver.name_status = true;
    this.setData({ driver });
  },
  // selectedNameHandler 获取姓名事件
  selectedNameHandler:function(e){
    const driver = this.data.driver;
    driver.name = e.detail.value;
    this.setData({ driver });
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
    this.setData({ driver });
    console.log(e.detail.value);
  },
  // selectNameHandler 输入联系人电话号码事件
  selectRelativeHandler: function () {
    const driver = this.data.driver;
    driver.relative_status = true;
    this.setData({ driver });
  },
  // selectedNameHandler 获取联系人电话号码事件
  selectedRelativeHandler: function (e) {
    const driver = this.data.driver;
    driver.relative = e.detail.value;
    this.setData({ driver });
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
  },
  // selectWorktimeHandler 输入银行卡号事件
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
    this.setData({ driver });
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
    console.log(e.detail.value);
  },
  // selectDriverAgeHandler 选择驾驶年龄
  selectDriverAgeHandler:function(e){
   
    console.log(e.detail.value);
    const driver=this.data.driver;
    driver.workTime = e.detail.value;
    this.setData({  driver});
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
    driver.id_status = false;
    driver.relative_status = false;
    driver.bank_status = false;
    driver.workTime_status = false;
    driver.idCard_status = false;
    driver.driver_status = false;
    driver.driverTime_status = false;
    driver.city_status = false;
    this.setData({driver});
    wx.setStorageSync("driver_information", this.data.driver)
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