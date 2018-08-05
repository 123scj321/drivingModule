// order状态 0--
// payWay 0--微信 1--支付宝 2--现金
const mockData={
  user: {
    id:123456,
    name:"dingding",
    phone:"13212341234", 
    avatar:"images/user/icon-07.png",
    order_ids:["001","002"],
    coupon_ids:["001"],
    evaluate_ids:["001"],
  },
  order:[
    {
      id:"001",
      time:"01月01日 00：21",
      startAddress:"朝阳区XX街道",
      endAddress:"未央区XX街道XX小区",
      status:1,
      due:"65.00",
      paid:"50.00",
      startPrice:"20.00",
      mileageFee:"30.50",
      durationFee:"14.80",
      spendTime:null,
      distance:null,
      driver_count:1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/user/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]}],
      payWay:0,
      coupon_ids:["001"],
      driver_ids:["001"],
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
  latutide:{},
  serverPhone:"13212341234",
  driver:[
    {
      id:"001",
      name:"王师傅",
      workTime:12,
      order_ids:["001","002","003"],
      score:"4.7",
      avatar:"images/user/icon-02.png",
      phone:"13212341234",
      say:"希望我的服务，能得到你的满意",
      evaluate_ids: ["002"]
    },
    {
      id: "002",
      name: "刘师傅",
      workTime: 7,
      order_ids: ["001", "002", "003"],
      score: "4.7",
      avatar: "images/user/icon-07.png",
      phone: "13212341234",
      say: "希望我的服务，能得到你的满意",
      evaluate_ids: ["001"]
    }
  ],
  coupon:[
    {
      id:"001",
      name:"新人优惠券",
      reduce:"7.8",
      type:"专属权",
      reduceMoney: 10,
      startTime: "2018-1-12",
      endTime: "2018-12-12"
    },
    {
      id: "002",
      name: "新人优惠券",
      reduce:"8.0",
      type: "专属权",
      reduceMoney:15,
      startTime: "2018-1-12",
      endTime: "2018-12-12"
    }
  ],
  evaluate: [
    {
      id:"000",
      satisfaction:"一般",
      question:"态度不好",
      idea:"希望可以有更好的态度"
    },
    {
      id: "001",
      satisfaction: "一般",
      question: "态度不好",
      idea: "希望可以有更好的态度"
    }
  ],
  server: [
    { id:"001",
      title: "打车费为什么跟预估价有差异", 
      context:"打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异"
    },
    {
      id: "002",
      title: "打车费为什么跟预估价有差异",
      context: "打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异"
    },
    {
      id: "003",
      title: "打车费为什么跟预估价有差异",
      context: "打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异打车费为什么跟预估价有差异"
    }
  ]
};
module.exports={
  mockData
}