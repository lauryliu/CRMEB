require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_cancellation/index"],{"0b18":function(t,e,n){"use strict";var a=n("9526"),u=n.n(a);u.a},"14e5":function(t,e,n){"use strict";(function(t){n("4a5c");a(n("66fd"));var e=a(n("6fea"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"26b7":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("点击【立即注销】即代表您已经同意《用户注销协议》")),a=t.$t("立即注销"),u=t.$t("是否确认注销"),c=t.$t("注销后无法恢复，请谨慎操作"),i=t.$t("注销"),r=t.$t("取消");t._isMounted||(t.e0=function(e){t.isCancellation=!0},t.e1=function(e){t.isCancellation=!1}),t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:u,m3:c,m4:i,m5:r}})},c=[]},"3e66":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a672")),u=n("5367");function c(t){return t&&t.__esModule?t:{default:t}}var i=getApp(),r={mixins:[a.default],data:function(){return{isCancellation:!1,agreementData:""}},onLoad:function(){this.getAgreement()},methods:{getAgreement:function(){var t=this;(0,u.getUserAgreement)(5).then((function(e){t.agreementData=e.data}))},cancelUser:function(){var e=this;(0,u.cancelUser)().then((function(n){i.globalData.spid="",i.globalData.pid="",e.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){return e.$util.Tips({title:t})}))}}};e.default=r}).call(this,n("543d")["default"])},"6fea":function(t,e,n){"use strict";n.r(e);var a=n("26b7"),u=n("c1ef");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("0b18");var i,r=n("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"5fc04c54",null,!1,a["a"],i);e["default"]=o.exports},9526:function(t,e,n){},c1ef:function(t,e,n){"use strict";n.r(e);var a=n("3e66"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=u.a}},[["14e5","common/runtime","common/vendor"]]]);