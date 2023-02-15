require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/components/verify/verifySlider/verifySlider"],{"336a":function(t,e,i){},5864:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("ee64"),a=i("9b9e"),o={name:"VerifySlide",props:{captchaType:{type:String},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default:function(){return{width:"100%",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",passFalg:!1,backImgBase:"",blockBackImgBase:"",backToken:"",startMoveTime:"",endMovetime:"",tipsBackColor:"",tipWords:"",text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},methods:{init:function(){var t=this;this.text=this.explain,this.getPictrue(),this.$nextTick((function(){t.$parent.$emit("ready",t)}))},start:function(t){this.startMoveTime=(new Date).getTime(),0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",t.stopPropagation(),this.status=!0)},move:function(e){var i,n,a=this,o=t.createSelectorQuery().in(this);this.barArea=o.select(".verify-bar-area"),this.barArea.boundingClientRect((function(t){if(i=Math.ceil(t.left),n=Math.ceil(t.width),a.status&&0==a.isEnd){if(e.touches)o=Math.ceil(e.touches[0].pageX);else var o=Math.ceil(e.clientX);var r=o-i;"1"!==a.type&&r>=n-parseInt(parseInt(a.blockSize.width)/2)-2&&(r=n-parseInt(parseInt(a.blockSize.width)/2)-2),r<=0&&(r=parseInt(parseInt(a.blockSize.width)/2)),a.moveBlockLeft=r-parseInt(parseInt(a.blockSize.width)/2)+"px",a.leftBarWidth=r-parseInt(parseInt(a.blockSize.width)/2)+"px"}})).exec()},end:function(){var t=this;this.endMovetime=(new Date).getTime();if(this.status&&0==this.isEnd){if("1"!==this.type){var e=parseInt((this.moveBlockLeft||"").replace("px",""));e=310*e/parseInt(this.imgSize.width);var i=this.secretKey?(0,n.aesEncrypt)(this.backToken+"---"+JSON.stringify({x:e,y:5}),this.secretKey):this.backToken+"---"+JSON.stringify({x:e,y:5}),o={captchaType:this.captchaType,pointJson:this.secretKey?(0,n.aesEncrypt)(JSON.stringify({x:e,y:5}),this.secretKey):JSON.stringify({x:e,y:5}),token:this.backToken};(0,a.ajcaptchaCheck)(o).then((function(e){e.data;t.moveBlockBackgroundColor="#5cb85c",t.leftBarBorderColor="#5cb85c",t.iconColor="#fff",t.iconClass="icon-check",t.showRefresh=!0,t.isEnd=!0,setTimeout((function(){"pop"==t.mode&&(t.$parent.clickShow=!1),t.refresh()}),1500),t.passFalg=!0,t.tipWords="".concat(((t.endMovetime-t.startMoveTime)/1e3).toFixed(2),"s验证成功"),setTimeout((function(){t.tipWords="",t.$emit("success",{captchaVerification:i})}),1e3)})).catch((function(e){t.moveBlockBackgroundColor="#d9534f",t.leftBarBorderColor="#d9534f",t.iconColor="#fff",t.iconClass="icon-close",t.passFalg=!1,setTimeout((function(){t.refresh()}),1e3),t.$parent.$emit("error",t),t.tipWords="验证失败",setTimeout((function(){t.tipWords=""}),1e3)}))}this.status=!1}},refresh:function(){var t=this;this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=!1,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.getPictrue(),this.isEnd=!1,setTimeout((function(){t.transitionWidth="",t.transitionLeft="",t.text=t.explain}),300)},getLeft:function(t){var e=0;while(t)e+=t.offsetLeft,t=t.offsetParent;var i=e;return i},getPictrue:function(){var e=this,i={captchaType:this.captchaType,clientUid:t.getStorageSync("slider"),ts:Date.now()};(0,a.getAjcaptcha)(i).then((function(t){var i=t.data;e.backImgBase=i.originalImageBase64,e.blockBackImgBase=i.jigsawImageBase64,e.backToken=i.token,e.secretKey=i.secretKey})).catch((function(){e.backImgBase=null,e.blockBackImgBase=null}))}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){}};e.default=o}).call(this,i("543d")["default"])},"602d":function(t,e,i){"use strict";i.r(e);var n=i("ee3d"),a=i("dd83");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7587");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"7e849fb6",null,!1,n["a"],r);e["default"]=c.exports},7587:function(t,e,i){"use strict";var n=i("336a"),a=i.n(n);a.a},dd83:function(t,e,i){"use strict";i.r(e);var n=i("5864"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ee3d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=(t._self._c,"2"===t.type?parseInt(t.imgSize.height):null),n="2"===t.type?Math.floor(47*parseInt(t.imgSize.width)/310):null,a="2"===t.type?parseInt(t.imgSize.height):null;t.$mp.data=Object.assign({},{$root:{m0:i,g0:n,m1:a}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/users/components/verify/verifySlider/verifySlider-create-component',
    {
        'pages/users/components/verify/verifySlider/verifySlider-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("602d"))
        })
    },
    [['pages/users/components/verify/verifySlider/verifySlider-create-component']]
]);
