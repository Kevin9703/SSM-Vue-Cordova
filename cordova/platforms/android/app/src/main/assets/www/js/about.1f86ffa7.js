(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"center"}},[s("br"),s("h1",[t._v("用户登录")]),s("h1",[t._v("这里可以放个logo")]),s("div",[s("Input",{staticStyle:{width:"90%","margin-top":"30px"},attrs:{prefix:"ios-contact-outline",placeholder:"用户名",size:"large",clearable:""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),s("Input",{staticStyle:{width:"90%","margin-top":"30px"},attrs:{prefix:"ios-lock-outline",type:"password",size:"large",password:"",placeholder:"密码"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1),s("div",[s("Button",{staticStyle:{width:"90%","margin-top":"30px"},attrs:{type:"primary",size:"large"},on:{click:t.login_test}},[t._v(" 登录 ")]),s("br"),s("div",{staticStyle:{"margin-top":"30px"}},[s("router-link",{attrs:{to:"/register"}},[t._v(" 注册账户 ")]),s("br"),s("span",[t._v(t._s(t.userId))]),s("br"),s("span",[t._v(t._s(t.userPassword))])],1)],1)])},r=[],o=s("bc3a"),n=s.n(o),i=s("f825"),u=s("2b0e"),l=s("d399"),c=s("543e"),d=s("2241");u["default"].use(c["a"]),u["default"].use(l["a"]),u["default"].component("Input",i["Input"]),u["default"].component("Button",i["Button"]);var p={name:"Login",data:function(){return{userId:"",userPassword:""}},methods:{login_test:function(){"1"==this.userId&&"1"==this.userPassword&&(this.$store.dispatch("userLogin",!0),localStorage.setItem("Flag","isLogin"),Object(l["a"])("欢迎！"),this.$router.push("/"))},login_check:function(){var t=this;""==this.userId||""==this.userPassword?d["a"].alert({title:"提示",message:"用户名或密码不能为空！"}).then((function(){})):n.a.post("http://localhost:8090/androidApp/User/Login",{userId:this.userId,password:this.userPassword}).then((function(e){console.log("response :",e),"fail"==e.data?d["a"].alert({title:"提示",message:"用户名或密码错误！"}).then((function(){})):"success"==e.data&&(t.$store.dispatch("userLogin",!0),localStorage.setItem("Flag","isLogin"),Object(l["a"])("欢迎！"),t.$router.push("/"))})).catch((function(t){console.log("error :",t),d["a"].alert({title:"提示",message:"数据请求失败，请重试！"}).then((function(){}))}))}}},h=p,g=(s("d6db"),s("2877")),f=Object(g["a"])(h,a,r,!1,null,null,null);e["default"]=f.exports},d6db:function(t,e,s){"use strict";var a=s("e67a"),r=s.n(a);r.a},e67a:function(t,e,s){}}]);
//# sourceMappingURL=about.1f86ffa7.js.map