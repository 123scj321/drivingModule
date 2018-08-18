
// order---status 
// 0 待接单 1 已接单 2 待支付 3 已支付 4 未处理事故订单 5 已处理事故订单 6 实时订单 7 预约订单
//---payWay
//0 微信支付 1 支付宝支付
const data={
  server_phone:"13212341234",
  driver:{
    name:"张三",
    wallet:"200.00",

    avatar: "images/icon/icon-25.png",
    workTime: 12,
    say: "希望我的服务，能得到你的满意",
    score: "4.7",
    order_ids: ["001", "002", "003", "004"],
    evaluate_ids: ["000", "001"],
    knowledge_ids: ["000", "001", "002", "003"],
    accident_ids:["000","001","002"],
    award_ids: ["000", "001", "002", "003"],
    server_phone:"13212341234"
  },
  activity:[
    {
      id:"000",
      title:"活动主题",
      time:"2018年10月2日",
      context: [

        "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...",]
    },
    {
      id: "001",
      title: "活动主题",
      time: "2018年10月2日",
      context: [
        "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...",]
    }, {
      id: "002",
      title: "活动主题",
      time: "2018年10月3日",
      context: [
        "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...",]
    }, {
      id: "002",
      title: "活动主题",
      time: "2018年10月4日",
      context: [
        "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...", "车主朋友们，今日提醒：在次日6时前完成5项订单即可完成订单任务，获得200元奖励... ...",]
    }
  ],
  award:[
    {
      id:"000",
      name:"新人奖",
      status:true,
      title:"完成订单任务，车主奖励20元",
      start_time:"2018-6-10 17:00",
      end_time: "2018-9-10 17:00",
      award_status: true,
      condition: { area: "西安市", 
          area_status: true, 
          effict: 0.8, 
          effict_status: true, 
          finished: 1, 
          finished_status: true, 
          knowledge: ["禁止作弊，一经查实，立刻取消参加活动的资格。", 
          "指派订单完成率到达80%，即视为到达奖励标准。", 
          "活动地区仅限于注册地点,在注册区域外接单则不记录此次活动。"]
          }
    },
    {
      id: "001",
      name: "新人奖",
      status: false,
      title: "完成订单任务，车主奖励20元",
      start_time: "2018-6-10 17:00",
      end_time: "2018-9-10 17:00",
      award_status: true,
      condition: {
          area: "西安市",
          area_status: true,
          effict: 0.8,
          effict_status: true,
          finished: 1,
          finished_status: true,
          knowledge: ["禁止作弊，一经查实，立刻取消参加活动的资格。",
            "指派订单完成率到达80%，即视为到达奖励标准。",
            "活动地区仅限于注册地点,在注册区域外接单则不记录此次活动。"]
        }
    },
    {
      id: "002",
      name: "新人奖",
      status: false,
      title: "完成订单任务，车主奖励20元",
      start_time: "2018-6-10 17:00",
      end_time: "2018-9-10 17:00",
      award_status: true,
      condition: {
          area: "西安市",
          area_status: true,
          effict: 0.8,
          effict_status: true,
          finished: 1,
          finished_status: true,
          knowledge: ["禁止作弊，一经查实，立刻取消参加活动的资格。",
            "指派订单完成率到达80%，即视为到达奖励标准。",
            "活动地区仅限于注册地点,在注册区域外接单则不记录此次活动。"]
        }
    },
    {
      id: "004",
      name: "新人奖",
      status: true,
      title: "完成订单任务，车主奖励20元",
      start_time: "2018-6-10 17:00",
      end_time: "2018-9-10 17:00",
      award_status: true,
      condition: {
          area: "西安市",
          area_status: true,
          effict: 0.8,
          effict_status: true,
          finished: 1,
          finished_status: true,
          knowledge: ["禁止作弊，一经查实，立刻取消参加活动的资格。",
            "指派订单完成率到达80%，即视为到达奖励标准。",
            "活动地区仅限于注册地点,在注册区域外接单则不记录此次活动。"]
        }
    }
  ],
  evaluate: [
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
  knowledge:[
    {
      id:"000",
      title:'在接单前该注意些什么？',
      context:"在接到订单后，应立即到达指定地点；需要确认下单人员信息，核对姓名，电话号码，车辆情况，车辆外观是否受损，及时与客户沟通"
    },
    {
      id: "001",
      title: '在接单前该注意些什么？',
      context: "在接到订单后，应立即到达指定地点；需要确认下单人员信息，核对姓名，电话号码，车辆情况，车辆外观是否受损，及时与客户沟通"
    },
    {
      id: "002",
      title: '在接单前该注意些什么？',
      context: "在接到订单后，应立即到达指定地点；需要确认下单人员信息，核对姓名，电话号码，车辆情况，车辆外观是否受损，及时与客户沟通"
    },
    {
      id: "003",
      title: '在接单前该注意些什么？',
      context: "在接到订单后，应立即到达指定地点；需要确认下单人员信息，核对姓名，电话号码，车辆情况，车辆外观是否受损，及时与客户沟通"
    }
  ],
  order: [
    {
      id: "001",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 2,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      spendTime: "30",
      distance: "8.5",
      driver_count: 1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/icon/icon-07.png",
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
      status: 2,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      spendTime: "30",
      distance: "8.5",
      driver_count: 1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["001"],
    },
    {
      id: "003",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 3,
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
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    },
    {
      id: "004",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 3,
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
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    },
    {
      id: "004",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 4,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      driver_count: 1,
      spendTime: "30",
      distance: "8.5",
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
      accident_because:"在XX路到XX路路口发生剐蹭事故",

    },
    {
      id: "005",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 5,
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
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    },
    {
      id: "006",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 5,
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
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["002"],
    },
    {
      id: "007",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 6,
      due: "65.00",
      paid: "50.00",
      startPrice: "20.00",
      mileageFee: "30.50",
      durationFee: "14.80",
      spendTime: null,
      distance: "1.2",
      driver_count: 1,
      user: [{
        name: "dingding",
        phone: "13212341234",
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["001"],
    },
    {
      id: "008",
      time: "01月01日 00：21",
      startAddress: "朝阳区XX街道",
      endAddress: "未央区XX街道XX小区",
      status: 7,
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
        avatar: "images/icon/icon-07.png",
        order_ids: ["001", "002"],
        coupon_ids: ["001"],
        evaluate_ids: ["001"]
      }],
      payWay: 0,
      coupon_ids: ["001"],
      driver_ids: ["001"],
    },
  ],
  server:[
    {
      id:"001",
      name:"张三",
      phone:"13212341234",
      driver:["001"]
    }
  ]
}
module.exports={
  data
}
