(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-promoter-order-index"],{"0268":function(t,e,i){"use strict";i.r(e);var n=i("0a53"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"0a53":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),a=n(i("a672")),r=i("d458"),s={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:r.HTTP_REQUEST_URL}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},"1eac":function(t,e,i){"use strict";var n=i("2cad"),o=i.n(n);o.a},"243f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},"260a":function(t,e,i){"use strict";i.r(e);var n=i("8673"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},2877:function(t,e,i){"use strict";i.r(e);var n=i("243f"),o=i("0268");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ac34");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5c721f6d",null,!1,n["a"],r);e["default"]=c.exports},"2cad":function(t,e,i){var n=i("5eaa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("65928681",n,!0,{sourceMap:!1,shadowMode:!1})},"39d5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-box"},[i("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/empty-box.png"}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title||t.$t("暂无记录")))])],1)},a=[]},5247:function(t,e,i){var n=i("9af2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("05ebbfc9",n,!0,{sourceMap:!1,shadowMode:!1})},"5eaa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-40a2f1ee]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-40a2f1ee]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-40a2f1ee]{font-size:%?26?%;color:#999}',""]),t.exports=e},"6a11":function(t,e,i){"use strict";var n=i("f2fc"),o=i.n(n);o.a},8673:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d458"),o={props:{title:{type:String,default:""}},data:function(){return{imgHost:n.HTTP_REQUEST_URL}}};e.default=o},9314:function(t,e,i){"use strict";var n=i("4ea4");i("caad"),i("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("5367"),a=i("f20a"),r=i("26cb"),s=n(i("ccbc")),c=n(i("2877")),u=n(i("a672")),d={components:{emptyPage:s.default,home:c.default},mixins:[u.default],data:function(){return{page:1,limit:5,status:!1,recordList:[],times:[],recordCount:0,count:0,orderType:0,isAuto:!1,isShowAuth:!1}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?(this.orderType=t.type||0,this.getRecordOrderList(t.type)):(0,a.toLogin)()},methods:{open:function(t){t.open=!t.open},onLoadFun:function(){this.getRecordOrderList()},authColse:function(t){this.isShowAuth=t},getRecordOrderList:function(){var t,e=this,i=this,n=i.page,a=i.limit,r=i.status;1!=r&&(this.orderType?(t=o.divisionOrder,uni.setNavigationBarTitle({title:i.$t("推广订单列表")})):t=o.spreadOrder,t({page:n,limit:a}).then((function(t){for(var n=0;n<t.data.time.length;n++)e.times.includes(t.data.time[n].time)||(e.times.push(t.data.time[n].time),e.recordList.push({time:t.data.time[n].time,count:t.data.time[n].count,child:[]}));for(var o=0;o<e.times.length;o++)for(var a=0;a<t.data.list.length;a++)e.times[o]===t.data.list[a].time_key&&(t.data.list[a].open=!1,e.recordList[o].child.push(t.data.list[a]));i.count=t.data.count||0,i.status=t.data.list.length<5,i.page+=1})))}},onReachBottom:function(){this.getRecordOrderList()}};e.default=d},"9af2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},ac34:function(t,e,i){"use strict";var n=i("5247"),o=i.n(n);o.a},b27d:function(t,e,i){"use strict";i.r(e);var n=i("c4e4"),o=i("c9bb");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6a11");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5f34a45d",null,!1,n["a"],r);e["default"]=c.exports},c4e4:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"promoter-order"},[i("v-uni-view",{staticClass:"promoterHeader bg-color"},[i("v-uni-view",{staticClass:"headerCon acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.$t("累积推广订单")))]),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.count||0))]),t._v(t._s(t.$t("单")))],1)],1),i("v-uni-view",{staticClass:"iconfont icon-2"})],1)],1),t.recordList.length>0?i("v-uni-view",{staticClass:"list"},[t._l(t.recordList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"item"},[i("v-uni-view",{staticClass:"title acea-row row-column row-center"},[i("v-uni-view",{staticClass:"data"},[t._v(t._s(e.time))]),i("v-uni-view",[t._v(t._s(t.$t("本月累计推广订单"))+"："+t._s(e.count||0)+t._s(t.$t("单")))])],1),i("v-uni-view",{staticClass:"listn"},[t._l(e.child,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"itenm"},[i("v-uni-view",{staticClass:"top acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.avatar}})],1),i("v-uni-view",{staticClass:"text line1"},[t._v(t._s(e.nickname))])],1),"brokerage"==e.type?i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("返佣"))+"："),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])],1):i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("暂未返佣"))+"："),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])],1)],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("订单编号"))+"：")]),t._v(t._s(e.order_id))],1),"brokerage"==e.type?i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("返佣时间"))+"：")]),t._v(t._s(e.time))],1):i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("下单时间"))+"：")]),t._v(t._s(e.time))],1),e.children&&e.children.length?i("v-uni-view",{staticClass:"more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open(e)}}},[t._v(t._s(e.open?t.$t("收起"):t.$t("更多"))),i("v-uni-text",{staticClass:"iconfont",class:e.open?"icon-xiangshang":"icon-xiangxia"})],1):t._e()],1),e.open?i("v-uni-view",{staticClass:"more-record"},t._l(e.children,(function(e,n){return i("v-uni-view",{key:n,staticClass:"more-record-list"},[i("v-uni-view",{staticClass:"more-record-box"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("单号"))+"：")]),t._v(t._s(e.order_id))],1),"brokerage"==e.type?i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("返佣"))+"："),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])],1):i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("暂未返佣"))+"："),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.$t("￥"))+t._s(e.number))])],1)],1)],1)})),1):t._e()],1)]}))],2)],1)]}))],2):t._e(),0==t.recordList.length?i("v-uni-view",[i("emptyPage",{attrs:{title:t.$t("暂无推广订单～")}})],1):t._e()],1),i("home")],1)},a=[]},c9bb:function(t,e,i){"use strict";i.r(e);var n=i("9314"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},ccbc:function(t,e,i){"use strict";i.r(e);var n=i("39d5"),o=i("260a");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1eac");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"40a2f1ee",null,!1,n["a"],r);e["default"]=c.exports},da31:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.promoter-order .list .item .title[data-v-5f34a45d]{height:%?133?%;padding:0 %?30?%;font-size:%?26?%;color:#999}.promoter-order .list .item .title .data[data-v-5f34a45d]{font-size:%?28?%;color:#282828;margin-bottom:%?5?%}.promoter-order .list .item .listn .itenm[data-v-5f34a45d]{background-color:#fff;border-radius:%?8?%}.promoter-order .list .item .listn .itenm .more-record[data-v-5f34a45d]{color:#999;font-size:%?24?%}.promoter-order .list .item .listn .itenm .more-record .more-record-list[data-v-5f34a45d]{padding:%?20?% %?30?%;border-top:1px solid #f2f2f2}.promoter-order .list .item .listn .itenm .more-record .more-record-list .more-record-box[data-v-5f34a45d]{display:flex;justify-content:space-between}.promoter-order .list .item .listn .itenm ~ .itenm[data-v-5f34a45d]{margin-top:%?12?%}.promoter-order .list .item .listn .itenm .top[data-v-5f34a45d]{margin-left:%?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #eee;height:%?100?%}.promoter-order .list .item .listn .itenm .top .pictxt[data-v-5f34a45d]{width:%?320?%}.promoter-order .list .item .listn .itenm .top .pictxt .text[data-v-5f34a45d]{width:%?230?%;font-size:%?30?%;color:#282828}.promoter-order .list .item .listn .itenm .top .pictxt .pictrue[data-v-5f34a45d]{width:%?66?%;height:%?66?%}.promoter-order .list .item .listn .itenm .top .pictxt .pictrue uni-image[data-v-5f34a45d]{width:100%;height:100%;border-radius:50%;border:%?3?% solid #fff;box-sizing:border-box;box-shadow:0 0 %?15?% #aaa}.promoter-order .list .item .listn .itenm .top .money[data-v-5f34a45d]{font-size:%?28?%}.promoter-order .list .item .listn .itenm .bottom[data-v-5f34a45d]{padding:%?20?% %?30?%;font-size:%?28?%;color:#666;line-height:1.6;position:relative}.promoter-order .list .item .listn .itenm .bottom .more[data-v-5f34a45d]{font-size:%?24?%;position:absolute;right:%?12?%;bottom:%?24?%}.promoter-order .list .item .listn .itenm .bottom .more .iconfont[data-v-5f34a45d]{font-size:%?22?%;margin-left:%?5?%}.promoter-order .list .item .listn .itenm .bottom .name[data-v-5f34a45d]{color:#999}',""]),t.exports=e},f2fc:function(t,e,i){var n=i("da31");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("67a57fc0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);