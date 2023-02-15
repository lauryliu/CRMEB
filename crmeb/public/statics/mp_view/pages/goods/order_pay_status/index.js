require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/order_pay_status/index"],{"1c42":function(o,t,n){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n("b588"),r=n("5b5f"),i=n("f20a"),d=n("26cb"),a=l(n("a672"));function l(o){return o&&o.__esModule?o:{default:o}}var u=function(){Promise.all([n.e("pages/goods/common/vendor"),n.e("pages/goods/order_pay_status/payLottery")]).then(function(){return resolve(n("7e18"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/Authorize").then(function(){return resolve(n("8dd2"))}.bind(null,n)).catch(n.oe)},s={components:{lotteryModel:u,authorize:p},mixins:[a.default],data:function(){return{loading:!1,lotteryLoading:!1,orderLottery:!1,orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[],options:{},payType:""}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(o,t){o&&this.getOrderPayInfo()},deep:!0}},onLoad:function(o){if(this.options=o,!o.order_id)return this.$util.Tips({title:this.$t("缺少参数无法查看订单支付状态")},{tab:3,url:1});this.orderId=o.order_id,this.status=o.status||0,this.msg=o.msg||"",this.payType=o.payType||""},onShow:function(){this.isLogin?this.getOrderPayInfo():(0,i.toLogin)()},methods:{getOrderLottery:function(o){this.orderLottery=o,this.lotteryLoading=!0},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this,n=this;o.showLoading({title:n.$t("正在加载中")}),(0,e.getOrderDetail)(n.orderId).then((function(e){o.hideLoading(),n.$set(n,"order_pay_info",e.data),o.setNavigationBarTitle({title:e.data.paid?n.$t("支付成功"):n.$t("未支付")}),t.loading=!0,t.getOrderCoupon()})).catch((function(n){t.loading=!0,o.hideLoading()}))},getOrderCoupon:function(){var o=this;(0,e.orderCoupon)(o.orderId).then((function(t){o.couponList=t.data}))},goIndex:function(t){o.switchTab({url:"/pages/index/index"})},goPink:function(t){o.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+t})},goOrderDetails:function(t){var n=this;o.showLoading({title:n.$t("正在加载中")}),(0,r.openOrderSubscribe)().then((function(t){o.hideLoading(),o.redirectTo({url:"/pages/goods/order_details/index?order_id="+n.orderId})})).catch((function(){nui.hideLoading()}))}}};t.default=s}).call(this,n("543d")["default"])},2484:function(o,t,n){"use strict";n.r(t);var e=n("d210"),r=n("9bc5");for(var i in r)"default"!==i&&function(o){n.d(t,o,(function(){return r[o]}))}(i);n("b212");var d,a=n("f0c5"),l=Object(a["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],d);t["default"]=l.exports},"9b7e":function(o,t,n){"use strict";(function(o){n("4a5c");e(n("66fd"));var t=e(n("2484"));function e(o){return o&&o.__esModule?o:{default:o}}wx.__webpack_require_UNI_MP_PLUGIN__=n,o(t.default)}).call(this,n("543d")["createPage"])},"9bc5":function(o,t,n){"use strict";n.r(t);var e=n("1c42"),r=n.n(e);for(var i in e)"default"!==i&&function(o){n.d(t,o,(function(){return e[o]}))}(i);t["default"]=r.a},b212:function(o,t,n){"use strict";var e=n("b743"),r=n.n(e);r.a},b743:function(o,t,n){},d210:function(o,t,n){"use strict";var e;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return e}));var r=function(){var o=this,t=o.$createElement,n=(o._self._c,o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||"offline"==o.order_pay_info.pay_type||!o.order_pay_info.paid?null:o.$t("订单支付成功")),e=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||"offline"==o.order_pay_info.pay_type||o.order_pay_info.paid?null:o.$t(o.payType?"订单支付中":"订单支付失败"),r=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||"offline"!=o.order_pay_info.pay_type?null:o.$t("订单创建成功"),i=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading?null:o.$t("订单号"),d=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading?null:o.$t("下单时间"),a=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading?null:o.$t("支付方式"),l=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading?null:o.$t(o.order_pay_info._status._payType)||o.$t("暂未支付"),u=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading?null:o.$t("支付金额"),p=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||0!=o.order_pay_info.paid||"offline"==o.order_pay_info.pay_type?null:o.$t("失败原因"),s=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||0!=o.order_pay_info.paid||"offline"==o.order_pay_info.pay_type||2!=o.status?null:o.$t("取消支付"),_=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||0!=o.status?null:o.$t("查看订单"),y=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||"ALLINPAY_PAY"!=o.payType?null:o.$t("刷新支付状态"),f=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||0!=o.order_pay_info.paid||1!=o.status?null:o.$t("重新购买"),c=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||0!=o.order_pay_info.paid||2!=o.status?null:o.$t("重新支付"),g=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||!o.order_pay_info.pink_id||0==o.order_pay_info.paid||2==o.status||1==o.status?null:o.$t("邀请好友参团"),L=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||o.order_pay_info.pink_id&&0!=o.order_pay_info.paid&&2!=o.status&&1!=o.status?null:o.$t("返回首页"),h=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||!o.couponList.length?null:o.$t("赠送优惠券"),m=o.orderLottery&&o.order_pay_info.paid||!o.loading||!o.lotteryLoading||!o.couponList.length?null:o.__map(o.couponList,(function(t,n){var e=o.__get_orig(t),r=n<2||!o.couponsHidden?o.$t("￥"):null,i=n<2||!o.couponsHidden?o.$t("满"):null,d=n<2||!o.couponsHidden?o.$t("元可用"):null,a=n<2||!o.couponsHidden?o.$t("有效期"):null;return{$orig:e,m17:r,m18:i,m19:d,m20:a}})),$=(!o.orderLottery||!o.order_pay_info.paid)&&o.loading&&o.lotteryLoading&&o.couponList.length&&o.couponList.length>2&&o.couponsHidden?o.$t("更多"):null,b=(!o.orderLottery||!o.order_pay_info.paid)&&o.loading&&o.lotteryLoading&&o.couponList.length&&o.couponList.length>2&&!o.couponsHidden?o.$t("关闭"):null;o.$mp.data=Object.assign({},{$root:{m0:n,m1:e,m2:r,m3:i,m4:d,m5:a,m6:l,m7:u,m8:p,m9:s,m10:_,m11:y,m12:f,m13:c,m14:g,m15:L,m16:h,l0:m,m21:$,m22:b}})},i=[]}},[["9b7e","common/runtime","common/vendor"]]]);