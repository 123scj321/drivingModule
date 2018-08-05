//order: status  0：未接单  1 已接单 2 未完成订单 3 已完成订单  4 未支付 5 已支付 
// paid_way:  0 微信支付 1 支付宝支付
// user_type: 0 用户 1 司机
const user={
  user:{
    open_id:"123456",
    avatar:"",
    name:"",
    phone:"",
    password:"",
    user_type:"用户",
  },
  coupon:[
    {
      id:"000",
      name:"新人优惠券",
      reduce:"7.8",
      type:"专属权",
      reduceMoney: 10,
      startTime: "2018-1-12",
      endTime: "2018-12-12"
    },
    {
      id: "001",
      name: "新人优惠券",
      reduce: "7.8",
      type: "专属权",
      reduceMoney: 10,
      startTime: "2018-1-12",
      endTime: "2018-12-12"
    },
  ],
  serverPhone:{phone:"13212341234"},
  order:[
    {
      id: "001",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 1,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      spendTime: null,
      distance: null,
      driver_count: 1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/user/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["001"],
    },
    {
      id: "002",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 1,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      driver_count: 1,
      spendTime: "40",
      distance: "20",
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/user/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    },
    {
      id: "003",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 1,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      spendTime: "50",
      driver_count: 1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/user/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      distance: "30",
      payWay: 0,
      coupon_ids: ["002"],
      driver_ids: ["002"],
    },
    {
      id: "004",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 1,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      driver_count: 1,
      spendTime: null,
      distance: null,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/user/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    }
  ],
  wallet:{
    
  },
  address:{

  },
  evaluate:{
      satisfaction:"一般",
      question:"态度不好",
      idea:"希望可以有更好的态度"
  }
}
const driver={
  driver:{
    open_id: "123456",
    avatar: "",
    name: "",
    phone: "",
    password: "",
    user_type: "司机",
    id_number:"",

  },
  order:[],
  activity:[],
  award:[],
  wallet:[],
  evaluate:[
    {
      id: "000",
      satisfaction: "一般",
      question: "态度不好",
      idea: "希望可以有更好的态度"
    },
    {
      id: "001",
      satisfaction: "一般",
      question: "态度不好",
      idea: "希望可以有更好的态度"
    }
  ],
  serverPhone:{},
  knowledge:[],
  address:{}
}

module.exports={
  driver:driver,
  user:user,
}