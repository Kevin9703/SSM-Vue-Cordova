(function(e){function t(t){for(var a,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-0a1a71b0":"afc1dd22","chunk-2d0b30b7":"50a12e50","chunk-2d22d74b":"841ab135",about:"3fc668ec","chunk-3161cf93":"805726b3","chunk-4b3f0258":"ac40797e","chunk-7813288e":"f6d23c33","chunk-3b8cc264":"ed521b1d","chunk-4514abc2":"968fb3ad","chunk-4e0981fe":"43128ee8","chunk-52f4491d":"a4d1428c","chunk-74da411e":"0b27ddb9","chunk-8e8301f2":"7f14de2b","chunk-c1021298":"d97a7ddb","chunk-c6dc0390":"d7ce5753","chunk-fe9737d4":"9d9bd92e"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0a1a71b0":1,about:1,"chunk-4b3f0258":1,"chunk-7813288e":1,"chunk-3b8cc264":1,"chunk-4514abc2":1,"chunk-4e0981fe":1,"chunk-52f4491d":1,"chunk-74da411e":1,"chunk-8e8301f2":1,"chunk-c1021298":1,"chunk-fe9737d4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{"chunk-0a1a71b0":"9bd80d7c","chunk-2d0b30b7":"31d6cfe0","chunk-2d22d74b":"31d6cfe0",about:"a62d065a","chunk-3161cf93":"31d6cfe0","chunk-4b3f0258":"9bac4a83","chunk-7813288e":"1e354d89","chunk-3b8cc264":"8479f4c1","chunk-4514abc2":"3e28545d","chunk-4e0981fe":"0a79d15f","chunk-52f4491d":"1e354d89","chunk-74da411e":"90e026c8","chunk-8e8301f2":"795befe1","chunk-c1021298":"b4bd9043","chunk-c6dc0390":"31d6cfe0","chunk-fe9737d4":"794d3db3"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"038e":function(e,t,n){},"3875b":function(e,t,n){"use strict";var a=n("3d7e"),o=n.n(a);o.a},"3d7e":function(e,t,n){},"40bd":function(e,t,n){"use strict";var a=n("038e"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("transition",[n("router-view")],1),"/login"!==e.$route.path&&"/register"!==e.$route.path&&"PostDetail"!==e.$route.name&&"NewPost"!==e.$route.name&&"GoodDetail"!==e.$route.name&&"ShoppingCart"!==e.$route.name?n("div",{staticClass:"nav"},[n("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{name:"home",icon:"chat-o",to:"/"}},[e._v(" 圈子 ")]),n("van-tabbar-item",{attrs:{name:"allItem",icon:"bag-o",to:"/allitem"}},[e._v(" 所有商品 ")]),n("van-tabbar-item",{attrs:{name:"shoppingCart",icon:"shopping-cart-o",to:"/shoppingcart"}},[e._v(" 购物车 ")]),n("van-tabbar-item",{attrs:{name:"my",icon:"user-o",to:"/userdetail"}},[e._v(" 我的 ")])],1)],1):e._e()],1)])},i=[],r=(n("b0c0"),n("f0e6"),{data:function(){return{active:"home"}},updated:function(){this.nav()},methods:{nav:function(){"home"==this.$route.name&&(this.active="home"),"AllItem"==this.$route.name&&(this.active="allItem"),"ShoppingCart"==this.$route.name&&(this.active="shoppingCart"),"UserDetail"==this.$route.name&&(this.active="my")}}}),u=r,c=(n("034f"),n("2877")),s=Object(c["a"])(u,o,i,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[n("van-pull-refresh",{attrs:{"success-text":e.refresh_text,"success-duration":1e3},on:{refresh:e.get_allPosts},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[n("div",[n("PostCard",{attrs:{posts:e.pList}})],1)])],1),n("div",{staticClass:"button"},[n("van-button",{attrs:{type:"info",to:"/NewPost",round:!0,icon:"plus"}})],1)])},h=[],p=(n("26e9"),n("bc3a")),m=n.n(p),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.posts,(function(t){return n("div",{key:t.index},[n("router-link",{attrs:{to:"/PostDetail/"+t.postId}},[n("van-row",{attrs:{type:"flex"}},[n("van-col",{attrs:{span:"3"}},[n("div",{staticStyle:{"margin-left":"5px","margin-top":"5px"}},[n("van-image",{attrs:{round:"",width:"35px",height:"35px",src:t.icon}})],1)]),n("van-col",{staticStyle:{"margin-top":"5px"},attrs:{span:"20"}},[n("span",{staticStyle:{color:"black","font-size":"13px"}},[e._v(e._s(t.userId))]),n("br"),n("span",{staticStyle:{color:"black","font-size":"16px"}},[e._v(e._s(t.title))]),n("br"),n("span",{staticClass:"show_text"},[e._v(e._s(t.details))]),n("br"),null!=t.photo?n("div",[n("van-image",{attrs:{width:"10rem",height:"10rem",fit:"contain",src:t.photo}})],1):e._e(),n("br"),n("van-col",{attrs:{span:"18"}},[n("span",{staticStyle:{color:"grey","font-size":"12px"}},[e._v(e._s(t.postTime))])]),n("span",[n("van-icon",{attrs:{name:"comment-o"}})],1),n("span",{staticStyle:{color:"grey","font-size":"12px"}},[e._v(e._s(t.totalNumber))])],1)],1),n("van-divider")],1)],1)})),0)},g=[],v=n("7744"),k=n("34e9"),y=n("9ed2"),L=n("44bf"),_=n("d1e1"),x=n("9ffb"),w=n("ad06");a["default"].use(w["a"]),a["default"].use(_["a"]).use(x["a"]),a["default"].use(L["a"]),a["default"].use(y["a"]),a["default"].use(v["a"]).use(k["a"]);var P={name:"PostCard",data:function(){return{userId:"babadlala",details:"IT之家12月17日消息 今日，移动应用数据分析平台Sensor Tower发布了最新研究报告，带来了2019年11月期间中国手游产品在海外市场下载排行榜单。",title:"11月中国手游海外下载排行",photo:"null",icon:"null",postTime:"2019-12-17",totalNumber:"12"}},props:{posts:{type:Array,default:null}}},S=P,C=(n("40bd"),Object(c["a"])(S,b,g,!1,null,"564ed948",null)),O=C.exports,j=n("ac28"),I=n("2ed4"),T=n("5596"),$=n("2bb1"),D=n("d399"),E=n("58e6"),A=n("b650");a["default"].use(w["a"]),a["default"].use(A["a"]),a["default"].use(E["a"]),a["default"].use(y["a"]),a["default"].use(L["a"]),a["default"].use(D["a"]),a["default"].use(_["a"]).use(x["a"]),a["default"].use(T["a"]).use($["a"]),a["default"].use(j["a"]).use(I["a"]);var N={name:"Home",components:{PostCard:O},data:function(){return{isLoading:!1,refresh_text:"",pList:[],postList:[]}},mounted:function(){this.get_allPosts(),this.pList=this.postList.reverse()},methods:{get_allPosts:function(){var e=this;m.a.get("http://192.168.137.1:8090/androidApp/Comment/FindAllForums").then((function(t){console.log(t),e.postList=t.data,e.pList=e.postList.reverse(),setTimeout((function(){e.refresh_text="刷新成功！",e.isLoading=!1}),500)})).catch((function(t){console.log(t),setTimeout((function(){Object(D["a"])("网络开小差了，请稍后再试！"),e.refresh_text="刷新失败！",e.isLoading=!1}),500)}))},click:function(){Object(D["a"])("submit")}}},M=N,B=(n("3875b"),Object(c["a"])(M,f,h,!1,null,"09541e5f",null)),G=B.exports;a["default"].use(d["a"]);var z=[{path:"/",name:"home",meta:{isLogin:!0},component:G},{path:"/login",name:"login",meta:{isLogin:!1},component:function(){return Promise.all([n.e("chunk-2d22d74b"),n.e("about")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{isLogin:!1},component:function(){return Promise.all([n.e("chunk-2d22d74b"),n.e("chunk-3161cf93")]).then(n.bind(null,"73cf"))}},{path:"/shoppingcart",name:"ShoppingCart",meta:{isLogin:!0},component:function(){return n.e("chunk-c1021298").then(n.bind(null,"8c6e"))}},{path:"/allitem",name:"AllItem",meta:{isLogin:!0},component:function(){return n.e("chunk-fe9737d4").then(n.bind(null,"591c"))}},{path:"/userdetail",name:"UserDetail",meta:{isLogin:!0},component:function(){return Promise.all([n.e("chunk-2d22d74b"),n.e("chunk-4b3f0258")]).then(n.bind(null,"5320"))}},{path:"/test",name:"test",meta:{isLogin:!0},component:function(){return n.e("chunk-2d0b30b7").then(n.bind(null,"2762"))}},{path:"/MySell",name:"/MySell",meta:{isLogin:!0},component:function(){return n.e("chunk-3b8cc264").then(n.bind(null,"57ee"))}},{path:"/Sell",name:"/Sell",meta:{isLogin:!0},component:function(){return Promise.all([n.e("chunk-2d22d74b"),n.e("chunk-7813288e")]).then(n.bind(null,"753a"))}},{path:"/ReviseGoods/:goodId",name:"ReviseGoods",meta:{isLogin:!0},component:function(){return n.e("chunk-52f4491d").then(n.bind(null,"b8a5"))}},{path:"/MyDetail",name:"MyDetail",meta:{isLogin:!0},component:function(){return n.e("chunk-c6dc0390").then(n.bind(null,"3c77"))}},{path:"/IconRevise",name:"IconRevise",meta:{isLogin:!0},component:function(){return n.e("chunk-4514abc2").then(n.bind(null,"49b9"))}},{path:"/GoodDetail/:goodId",name:"GoodDetail",meta:{isLogin:!0},component:function(){return n.e("chunk-74da411e").then(n.bind(null,"5f8f"))}},{path:"/PostDetail/:postId",name:"PostDetail",meta:{isLogin:!0},component:function(){return n.e("chunk-8e8301f2").then(n.bind(null,"246d"))}},{path:"/NewPost",name:"NewPost",meta:{isLogin:!0},component:function(){return n.e("chunk-4e0981fe").then(n.bind(null,"6e73"))}},{path:"/MyBuy",name:"MyBuy",meta:{isLogin:!0},component:function(){return n.e("chunk-0a1a71b0").then(n.bind(null,"f421"))}}],F=new d["a"]({mode:"hash",routes:z}),R=F,U=n("2f62");a["default"].use(U["a"]);var q=new U["a"].Store({state:{isLogin:!1},getters:{isLogin:function(e){return e.isLogin}},mutations:{userStatus:function(e,t){e.isLogin=t}},actions:{userLogin:function(e,t){var n=e.commit;n("userStatus",t)}},modules:{}}),H=(n("157a"),n("f8ce"),n("2241"));a["default"].config.productionTip=!1,new a["default"]({router:R,store:q,render:function(e){return e(l)}}).$mount("#app"),R.beforeEach((function(e,t,n){var a=localStorage.getItem("Flag");"isLogin"===a?(q.state.isLogin=!0,n(),e.meta.isLogin||(H["a"].alert({title:"提示",message:"请先退出登录"}).then((function(){})),n({path:"/"}))):e.meta.isLogin?(H["a"].alert({title:"提示",message:"请先登录！"}).then((function(){})),n({path:"/login"})):n()}))},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.dc9165e9.js.map