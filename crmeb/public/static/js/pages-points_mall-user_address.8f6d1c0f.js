(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-user_address"],{"0051":function(t,e,i){var n=i("133e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("60213145",n,!0,{sourceMap:!1,shadowMode:!1})},"0268":function(t,e,i){"use strict";i.r(e);var n=i("0a53"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"0a53":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("26cb"),a=n(i("a672")),o=i("d458"),d={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,s.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=d},"133e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".address-management.fff[data-v-8f0e37ea]{background-color:#fff;height:%?1300?%}.address-management .line[data-v-8f0e37ea]{width:100%;height:%?3?%}.address-management .line uni-image[data-v-8f0e37ea]{width:100%;height:100%;display:block}.address-management .item[data-v-8f0e37ea]{background-color:#fff;padding:0 %?30?%;margin-bottom:%?12?%}.address-management .item .address[data-v-8f0e37ea]{padding:%?30?% 0;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.address-management .item .address .consignee[data-v-8f0e37ea]{font-size:%?28?%;font-weight:700;margin-bottom:%?8?%}.address-management .item .address .consignee .phone[data-v-8f0e37ea]{margin-left:%?25?%}.address-management .item .operation[data-v-8f0e37ea]{height:%?83?%;font-size:%?28?%;color:#282828}.address-management .item .operation .radio uni-text[data-v-8f0e37ea]{margin-left:%?13?%}.address-management .item .operation .iconfont[data-v-8f0e37ea]{color:#2c2c2c;font-size:%?35?%;vertical-align:%?-2?%;margin-right:%?10?%}.address-management .item .operation .iconfont.icon-shanchu[data-v-8f0e37ea]{margin-left:%?40?%;font-size:%?38?%}.address-management .footer[data-v-8f0e37ea]{position:fixed;width:100%;background-color:#fff;bottom:0;height:%?106?%;padding:0 %?30?%;box-sizing:border-box}.address-management .footer .addressBnt[data-v-8f0e37ea]{width:%?330?%;height:%?76?%;border-radius:%?50?%;text-align:center;line-height:%?76?%;font-size:%?30?%;color:#fff}.address-management .footer .addressBnt.on[data-v-8f0e37ea]{width:%?690?%;margin:0 auto}.address-management .footer .addressBnt .iconfont[data-v-8f0e37ea]{font-size:%?35?%;margin-right:%?8?%;vertical-align:%?-1?%}.address-management .footer .addressBnt.wxbnt[data-v-8f0e37ea]{background-color:#fe960f}",""]),t.exports=e},"243f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},2877:function(t,e,i){"use strict";i.r(e);var n=i("243f"),s=i("0268");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("ac34");var o,d=i("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"5c721f6d",null,!1,n["a"],o);e["default"]=r.exports},"47d7":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"address-management",class:t.addressList.length<1&&t.page>1?"fff":""},[n("v-uni-view",{staticClass:"line"},[t.addressList.length?n("v-uni-image",{attrs:{src:i("5ca1")}}):t._e()],1),t.addressList.length?n("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.addressList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"address",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrder(e.id)}}},[n("v-uni-view",{staticClass:"consignee"},[t._v(t._s(t.$t("收货人"))+"："+t._s(e.real_name)),n("v-uni-text",{staticClass:"phone"},[t._v(t._s(e.phone))])],1),n("v-uni-view",[t._v(t._s(t.$t("收货地址"))+"："+t._s(e.province)+t._s(e.city)+t._s(e.district)+t._s(e.detail))])],1),n("v-uni-view",{staticClass:"operation acea-row row-between-wrapper"},[n("v-uni-radio",{staticClass:"radio",attrs:{value:i.toString(),checked:!!e.is_default}},[n("v-uni-text",[t._v(t._s(t.$t("设为默认")))])],1),n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddress(e.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v(t._s(t.$t("编辑")))],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delAddress(i)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu"}),t._v(t._s(t.$t("删除")))],1)],1)],1)],1)})),1):t._e(),t.addressList.length?n("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[n("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),t.addressList.length<1&&t.page>1?n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/noAddress.png"}})],1)],1):t._e(),n("v-uni-view",{staticStyle:{height:"120rpx"}}),n("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"addressBnt bg-color",class:this.$wechat.isWeixin()?"":"on",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-tianjiadizhi"}),t._v(t._s(t.$t("添加新地址")))],1),this.$wechat.isWeixin()?n("v-uni-view",{staticClass:"addressBnt wxbnt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-weixin2"}),t._v(t._s(t.$t("导入微信地址")))],1):t._e()],1)],1),n("home")],1)},a=[]},5247:function(t,e,i){var n=i("9af2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("05ebbfc9",n,!0,{sourceMap:!1,shadowMode:!1})},"5ca1":function(t,e,i){t.exports=i.p+"static/img/line.05bf1c84.jpg"},8642:function(t,e,i){"use strict";var n=i("4ea4");i("a434"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("5367"),a=i("f20a"),o=i("26cb"),d=n(i("2877")),r=n(i("a672")),c=i("d458"),u={components:{home:d.default},mixins:[r.default],data:function(){return{imgHost:c.HTTP_REQUEST_URL,addressList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,news:"",unique:"",num:""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){this.unique=t.unique,this.num=t.num,this.isLogin?(this.cartId=t.cartId||"",this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.news=t.news||0,this.getAddressList(!0)):(0,a.toLogin)()},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(e){uni.chooseAddress({success:function(e){var i={};i.province=e.provinceName,i.city=e.cityName,i.district=e.countyName,(0,s.editAddress)({address:i,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){t.$util.Tips({title:t.$t("添加成功"),icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e})}))},fail:function(e){if("chooseAddress:cancel"==e.errMsg)return t.$util.Tips({title:t.$t("取消选择")})}})},fail:function(e){uni.showModal({title:this.$t("您已拒绝导入微信地址权限"),content:this.$t("是否进入权限管理，调整授权？"),success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:t.$t("已取消")})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(e){(0,s.editAddress)({real_name:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName},detail:e.detailInfo,post_code:e.postalCode,is_default:1,type:1}).then((function(){t.$util.Tips({title:t.$t("添加成功"),icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e||t.$t("添加失败")})}))}))},getAddressList:function(t){var e=this;t&&(e.loadend=!1,e.page=1,e.$set(e,"addressList",[])),e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,s.getAddressList)({page:e.page,limit:e.limit}).then((function(t){var i=t.data,n=i.length<e.limit;e.addressList=e.$util.SplitArray(i,e.addressList),e.$set(e,"addressList",e.addressList),e.loadend=n,e.loadTitle=n?e.$t("我也是有底线的"):e.$t("加载更多"),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))},radioChange:function(t){var e=parseInt(t.detail.value),i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:i.$t("您设置的默认地址不存在!")});(0,s.setAddressDefault)(n.id).then((function(t){for(var n=0,s=i.addressList.length;n<s;n++)i.addressList[n].is_default=n==e;i.$util.Tips({title:i.$t("设置成功"),icon:"success"},(function(){i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},editAddress:function(t){this.cartId;var e=this.pinkId,i=this.couponId;this.cartId="",this.pinkId="",this.couponId="",uni.navigateTo({url:"/pages/users/user_address/index?id="+t+"&pinkId="+e+"&couponId="+i+"&new="+this.news})},delAddress:function(t){var e=this,i=this.addressList[t];if(void 0==i)return e.$util.Tips({title:e.$t("您删除的地址不存在!")});(0,s.delAddress)(i.id).then((function(i){e.$util.Tips({title:e.$t("删除成功"),icon:"success"},(function(){e.addressList.splice(t,1),e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},addAddress:function(){uni.navigateTo({url:"/pages/users/user_address/index?&new="+this.news})},goOrder:function(t){t&&uni.redirectTo({url:"/pages/points_mall/integral_order?is_address=1&new="+this.news+"&addressId="+t+"&num="+this.num+"&unique="+this.unique})}},onReachBottom:function(){this.getAddressList()}};e.default=u},"926f":function(t,e,i){"use strict";var n=i("0051"),s=i.n(n);s.a},"9af2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},ac34:function(t,e,i){"use strict";var n=i("5247"),s=i.n(n);s.a},c933:function(t,e,i){"use strict";i.r(e);var n=i("8642"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},e6a3:function(t,e,i){"use strict";i.r(e);var n=i("47d7"),s=i("c933");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("926f");var o,d=i("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"8f0e37ea",null,!1,n["a"],o);e["default"]=r.exports}}]);