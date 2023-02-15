require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_spread_code/index"],{"0ccb":function(e,t,n){},"0e3c":function(e,t,n){"use strict";(function(e){n("4a5c");a(n("66fd"));var t=a(n("5cf8"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"5ac6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("a34a")),i=n("5367"),r=n("f20a"),s=n("26cb"),o=n("d458"),u=c(n("a672"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,a,i,r,s){try{var o=e[r](s),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(a,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function s(e){d(r,a,i,s,o,"next",e)}function o(e){d(r,a,i,s,o,"throw",e)}s(void 0)}))}}var l=function(){Promise.all([n.e("common/vendor"),n.e("components/zb-code/zb-code")]).then(function(){return resolve(n("e3a5"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/Authorize").then(function(){return resolve(n("8dd2"))}.bind(null,n)).catch(n.oe)},p=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("2877"))}.bind(null,n)).catch(n.oe)},m={components:{authorize:h,home:p,zbCode:l},mixins:[u.default],data:function(){return{imgUrls:[],indicatorDots:!1,posterImageStatus:!0,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1,spreadData:[{}],nickName:"",siteName:"",mpUrl:"",canvasImageUrl:"",posterImage:[],codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:0,hg:0,qrcode:""}},computed:(0,s.mapGetters)({isLogin:"isLogin",userData:"userInfo",uid:"uid"}),watch:{isLogin:{handler:function(e,t){e&&this.userSpreadBannerList()},deep:!0},userData:{handler:function(e,t){e&&this.$set(this,"userInfo",e)},deep:!0}},onReady:function(){var e=this;return f(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isLogin){t.next=8;break}return e.val="".concat(o.HTTP_REQUEST_URL,"?spid=").concat(e.uid),t.next=4,e.getUser();case 4:return t.next=6,e.spreadMsgs();case 6:t.next=9;break;case 8:(0,r.toLogin)();case 9:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;this.$nextTick((function(){var n=e.createSelectorQuery().select(".aaa");n.fields({size:!0},(function(e){t.wd=e.width,t.hg=e.height})).exec()}))},onShareAppMessage:function(){return{title:this.userInfo.nickname+"-"+this.$t("分销海报"),imageUrl:this.spreadList[0],path:"/pages/index/index?spread="+this.userInfo.uid}},methods:{getUser:function(){var e=this;(0,i.getUserInfo)().then((function(t){e.userInfo=t.data}))},onLoadFun:function(e){this.$set(this,"userInfo",e),this.userSpreadBannerList()},qrR:function(e){this.codeSrc=e},spreadMsgs:function(){var t=this;return f(a.default.mark((function n(){var r,s,o,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.spreadMsg)();case 2:return r=n.sent,t.spreadData=r.data.spread,t.nickName=r.data.nickname,t.siteName=r.data.site_name,n.next=8,t.imgToBase(r.data.qrcode);case 8:return t.qrcode=n.sent,n.next=11,t.routineCode();case 11:return n.next=13,t.downloadFilestoreImage(t.mpUrl);case 13:s=n.sent,e.showLoading({title:t.$t("海报生成中"),mask:!0}),o=a.default.mark((function e(n){var i,o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,o=void 0,void 0,e.t0=s,e.next=5,t.downloadFilestoreImage(r.data.spread[n].pic);case 5:e.t1=e.sent,o=[e.t0,e.t1],i.$util.userPosterCanvas(o,r.data.nickname,r.data.site_name,n,t.wd,t.hg,(function(e){if(i.$set(i.posterImage,n,e),!i.posterImage.length)return i.$util.Tips({title:i.$t("小程序二维码需要发布正式版后才能获取到")})}));case 8:case"end":return e.stop()}}),e)})),u=0;case 17:if(!(u<r.data.spread.length)){n.next=22;break}return n.delegateYield(o(u),"t0",19);case 19:u++,n.next=17;break;case 22:e.hideLoading();case 23:case"end":return n.stop()}}),n)})))()},downloadImg:function(){e.saveImageToPhotosAlbum({filePath:this.posterImage[this.swiperIndex],success:function(){}})},routineCode:function(){var e=this;return f(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.routineCode)();case 2:n=t.sent,e.mpUrl=n.data.url;case 4:case"end":return t.stop()}}),t)})))()},imgToBase:function(e,t){return f(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.imgToBase)({image:e,code:t});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()},codeImg:function(){},authColse:function(e){this.isShowAuth=e},bindchange:function(e){this.spreadList;this.swiperIndex=e.detail.current},savePosterPathMp:function(t){var n=this;e.getSetting({success:function(a){a.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum({filePath:t,success:function(e){n.$util.Tips({title:n.$t("保存成功"),icon:"success"})},fail:function(e){n.$util.Tips({title:n.$t("保存失败")})}}):e.authorize({scope:"scope.writePhotosAlbum",success:function(){e.saveImageToPhotosAlbum({filePath:t,success:function(e){n.$util.Tips({title:n.$t("保存成功"),icon:"success"})},fail:function(e){n.$util.Tips({title:n.$t("保存失败")})}})}})}})},downloadFilestoreImage:function(t){var n=this;return new Promise((function(a,i){var r=n;e.downloadFile({url:t,success:function(e){a(e.tempFilePath)},fail:function(){return r.$util.Tips({title:""})}})}))},setShareInfoStatus:function(){var e=this;this.$wechat.isWeixin()&&(this.isLogin?(0,i.getUserInfo)().then((function(t){var n={desc:e.$t("分销海报"),title:t.data.nickname+"-"+e.$t("分销海报"),link:"/pages/index/index?spread="+t.data.uid,imgUrl:e.spreadList[0]};e.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)})):(0,r.toLogin)())},userSpreadBannerList:function(){var t=this;e.showLoading({title:t.$t("获取中"),mask:!0}),(0,i.spreadBanner)().then((function(n){e.hideLoading(),t.$set(t,"spreadList",n.data),t.$set(t,"poster",n.data[0].poster)})).catch((function(t){e.hideLoading()}))}}};t.default=m}).call(this,n("543d")["default"])},"5cf8":function(e,t,n){"use strict";n.r(t);var a=n("c041"),i=n("fafd");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("9f72");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=u.exports},"9f72":function(e,t,n){"use strict";var a=n("0ccb"),i=n.n(a);i.a},c041:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={zbCode:function(){return Promise.all([n.e("common/vendor"),n.e("components/zb-code/zb-code")]).then(n.bind(null,"e3a5"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t("保存海报"));e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},fafd:function(e,t,n){"use strict";n.r(t);var a=n("5ac6"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}},[["0e3c","common/runtime","common/vendor"]]]);