(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill/index"],{"0fe7":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.timeList,(function(e,i){var n=t.__get_orig(e),a=t.$t(e.state);return{$orig:n,m0:a}}))),n=t.$t("￥"),a=t.$t("￥"),l=t.$t("限量"),o=t.$t("已抢"),c=1==t.status?t.$t("抢购中"):null,s=1!=t.status&&2==t.status?t.$t("未开始"):null,u=1!=t.status&&2!=t.status?t.$t("已结束"):null,r=t.__map(t.seckillList,(function(e,i){var n=t.__get_orig(e),a=t.$t(e.unit_name)||"";return{$orig:n,m4:a}})),d=0!=t.seckillList.length||1==t.page&&0!=t.active?null:t.$t("暂无商品，去看点别的吧");t.$mp.data=Object.assign({},{$root:{l0:i,m1:n,m2:a,m3:l,m5:o,m6:c,m7:s,m8:u,l1:r,m9:d}})},l=[]},"32ba":function(t,e,i){"use strict";i.r(e);var n=i("0fe7"),a=i("f553");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("890d");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=s.exports},"3d92":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("e2b7"),a=o(i("a672")),l=i("d458");function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("2877"))}.bind(null,i)).catch(i.oe)},s={components:{home:c},mixins:[a.default],data:function(){return{imgHost:l.HTTP_REQUEST_URL,topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,n=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=n})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(e){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+e.id})}},onReachBottom:function(){this.getSeckillList()}};e.default=s}).call(this,i("543d")["default"])},"658d":function(t,e,i){},"7ec7":function(t,e,i){"use strict";(function(t){i("4a5c");n(i("66fd"));var e=n(i("32ba"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"890d":function(t,e,i){"use strict";var n=i("658d"),a=i.n(n);a.a},f553:function(t,e,i){"use strict";i.r(e);var n=i("3d92"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a}},[["7ec7","common/runtime","common/vendor"]]]);