(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7813288e"],{"20fb":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),o=i("a142"),r=i("ea8e"),l=i("a8fa"),c=i("1325"),u=Object(a["a"])("stepper"),h=u[0],f=u[1],d=600,m=200;function p(t,e){return String(t)===String(e)}function g(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i}e["a"]=h({props:{value:null,integer:Boolean,disabled:Boolean,inputWidth:[Number,String],buttonSize:[Number,String],asyncChange:Boolean,disableInput:Boolean,decimalLength:Number,name:{type:[Number,String],default:""},min:{type:[Number,String],default:1},max:{type:[Number,String],default:1/0},step:{type:[Number,String],default:1},defaultValue:{type:[Number,String],default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0}},data:function(){var t=Object(o["b"])(this.value)?this.value:this.defaultValue,e=this.format(t);return p(e,this.value)||this.$emit("input",e),{currentValue:e}},computed:{minusDisabled:function(){return this.disabled||this.currentValue<=this.min},plusDisabled:function(){return this.disabled||this.currentValue>=this.max},inputStyle:function(){var t={};return this.inputWidth&&(t.width=Object(r["a"])(this.inputWidth)),this.buttonSize&&(t.height=Object(r["a"])(this.buttonSize)),t},buttonStyle:function(){if(this.buttonSize){var t=Object(r["a"])(this.buttonSize);return{width:t,height:t}}}},watch:{value:function(t){p(t,this.currentValue)||(this.currentValue=this.format(t))},currentValue:function(t){this.$emit("input",t),this.$emit("change",t,{name:this.name})}},methods:{filter:function(t){return t=String(t).replace(/[^0-9.-]/g,""),this.integer&&-1!==t.indexOf(".")&&(t=t.split(".")[0]),t},format:function(t){return t=this.filter(t),t=""===t?0:+t,t=Math.max(Math.min(this.max,t),this.min),Object(o["b"])(this.decimalLength)&&(t=t.toFixed(this.decimalLength)),t},onInput:function(t){var e=t.target.value;if(""!==e){var i=this.filter(e);if(Object(o["b"])(this.decimalLength)&&-1!==i.indexOf(".")){var n=i.split(".");i=n[0]+"."+n[1].slice(0,this.decimalLength)}p(e,i)||(t.target.value=i),this.emitChange(i)}},emitChange:function(t){this.asyncChange?(this.$emit("input",t),this.$emit("change",t,{name:this.name})):this.currentValue=t},onChange:function(){var t=this.type;if(this[t+"Disabled"])this.$emit("overlimit",t);else{var e="minus"===t?-this.step:+this.step,i=this.format(g(+this.currentValue,e));this.emitChange(i),this.$emit(t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e=this.format(t.target.value);t.target.value=e,this.currentValue=e,this.$emit("blur",t),Object(l["a"])()},longPressStep:function(){var t=this;this.longPressTimer=setTimeout((function(){t.onChange(t.type),t.longPressStep(t.type)}),m)},onTouchStart:function(){var t=this;clearTimeout(this.longPressTimer),this.isLongPress=!1,this.longPressTimer=setTimeout((function(){t.isLongPress=!0,t.onChange(),t.longPressStep()}),d)},onTouchEnd:function(t){clearTimeout(this.longPressTimer),this.isLongPress&&Object(c["c"])(t)}},render:function(){var t=this,e=arguments[0],i=function(e){return{on:{click:function(){t.type=e,t.onChange()},touchstart:function(){t.type=e,t.onTouchStart(e)},touchend:t.onTouchEnd,touchcancel:t.onTouchEnd}}};return e("div",{class:f()},[e("button",s()([{directives:[{name:"show",value:this.showMinus}],style:this.buttonStyle,class:f("minus",{disabled:this.minusDisabled})},i("minus")])),e("input",{attrs:{type:"number",role:"spinbutton","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.currentValue,disabled:this.disabled||this.disableInput},class:f("input"),domProps:{value:this.currentValue},style:this.inputStyle,on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),e("button",s()([{directives:[{name:"show",value:this.showPlus}],style:this.buttonStyle,class:f("plus",{disabled:this.plusDisabled})},i("plus")]))])}})},"28a2":function(t,e,i){"use strict";var n=i("c31d"),s=i("2b0e"),a=i("d282"),o=i("482d"),r=i("1325"),l=i("6605"),c=i("3875"),u=i("44bf"),h=i("543e"),f=i("5596"),d=i("2bb1"),m=Object(a["a"])("image-preview"),p=m[0],g=m[1];function v(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var b,y=p({mixins:[l["a"],c["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:g("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(r["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},s=n.offsetX,a=void 0===s?0:s,o=n.offsetY,l=void 0===o?0:o;i<300&&a<10&&l<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=e.active;e.$emit("close",{index:t,url:e.images[t]}),e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,s=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-s)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=v(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,s=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||s||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(r["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(o["a"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(o["a"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var s=v(e),a=this.startScale*s/this.startDistance;this.scale=Object(o["a"])(a,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(r["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:g("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:g("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(h["a"],{attrs:{type:"spinner"}})}};return e(f["a"],{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:g("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:r["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map((function(n,s){return e(d["a"],[e(u["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:g("image"),scopedSlots:i,style:s===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[g(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),w=i("a142"),x={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},S=function(){b=new(s["default"].extend(y))({el:document.createElement("div")}),document.body.appendChild(b.$el),b.$on("change",(function(t){b.onChange&&b.onChange(t)}))},C=function(t,e){if(void 0===e&&(e=0),!w["d"]){b||S();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(n["a"])(b,x,i),b.$once("input",(function(t){b.value=t})),i.onClose&&b.$once("close",i.onClose),b}};C.install=function(){s["default"].use(y)};e["a"]=C},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),o=i("ad06"),r=i("7744"),l=i("dfaf"),c=i("1325"),u=i("a8fa"),h=i("d282"),f=i("a142"),d=i("ea8e"),m=Object(h["a"])("field"),p=m[0],g=m[1];e["a"]=p({inheritAttrs:!1,props:Object(a["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(f["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(d["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.maxlength;return Object(f["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(u["a"])()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(f["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:g("control",this.inputAlign)},[e]);var i={ref:"input",class:g("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:g("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(o["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:g("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(o["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength)return t("div",{class:g("word-limit")},[this.value.length,"/",this.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.genLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(r["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[g("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:g((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:g("body")},[this.genInput(),this.showClear&&e(o["a"],{attrs:{name:"clear"},class:g("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:g("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:g("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"6b41":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),o=i("a142"),r=i("ba31"),l=i("b1d2"),c=i("ad06"),u=Object(a["a"])("nav-bar"),h=u[0],f=u[1];function d(t,e,i,n){var a;return t("div",s()([{class:[f({fixed:e.fixed}),(a={},a[l["a"]]=e.border,a)],style:{zIndex:e.zIndex}},Object(r["b"])(n)]),[t("div",{class:f("left"),on:{click:n.listeners["click-left"]||o["e"]}},[i.left?i.left():[e.leftArrow&&t(c["a"],{class:f("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:f("text")},[e.leftText])]]),t("div",{class:[f("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:f("right"),on:{click:n.listeners["click-right"]||o["e"]}},[i.right?i.right():e.rightText&&t("span",{class:f("text")},[e.rightText])])])}d.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=h(d)},"753a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"register"},[i("div",{staticClass:"top"},[i("van-nav-bar",{attrs:{title:"商品出售","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),i("div",[i("van-cell-group",[i("van-field",{attrs:{required:"",label:"商品名称",placeholder:"请输入商品名称",error:t.goodNameError,clearable:""},on:{blur:t.goodNameCheck,focus:function(e){t.goodNameError=!1}},model:{value:t.goodName,callback:function(e){t.goodName=e},expression:"goodName"}}),i("van-field",{attrs:{label:"价格",placeholder:"请输入价格",required:"",error:t.priceError,clearable:""},on:{blur:t.priceCheck,focus:function(e){t.priceError=!1}},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),i("van-cell",{attrs:{title:"数量"}},[i("van-stepper",{attrs:{integer:""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),i("van-field",{attrs:{rows:"2",autosize:"",label:"商品描述",type:"textarea",maxlength:"100",placeholder:"不超过100字","show-word-limit":""},model:{value:t.describe,callback:function(e){t.describe=e},expression:"describe"}})],1)],1),i("div",{staticStyle:{"margin-top":"20px"}},[i("van-uploader",{attrs:{"after-read":t.afterRead1,multiple:"","max-count":1},model:{value:t.imageList1,callback:function(e){t.imageList1=e},expression:"imageList1"}}),i("van-uploader",{attrs:{"after-read":t.afterRead2,multiple:"","max-count":1},model:{value:t.imageList2,callback:function(e){t.imageList2=e},expression:"imageList2"}}),i("van-uploader",{attrs:{"after-read":t.afterRead3,multiple:"","max-count":1},model:{value:t.imageList3,callback:function(e){t.imageList3=e},expression:"imageList3"}})],1),i("div",{staticStyle:{"text-align":"center"}},[i("Button",{staticStyle:{width:"90%","margin-top":"30px"},attrs:{type:"primary",disabled:t.buttonDisabled,size:"large"},on:{click:t.submitInfo}},[t._v(" 提交 ")])],1)])},s=[],a=i("2b0e"),o=i("bc3a"),r=i.n(o),l=i("d399"),c=i("2241"),u=i("6b41"),h=i("ad06"),f=i("565f"),d=i("f825"),m=i("543e"),p=i("20fb"),g=i("7744"),v=i("34e9"),b=i("8f80");a["default"].use(b["a"]),a["default"].use(g["a"]).use(v["a"]),a["default"].use(p["a"]),a["default"].use(m["a"]),a["default"].use(f["a"]),a["default"].use(l["a"]),a["default"].use(c["a"]),a["default"].use(u["a"]),a["default"].use(h["a"]),a["default"].component("Button",d["Button"]);var y={name:"Register",data:function(){return{buttonDisabled:!0,goodNameError:!1,priceError:!1,goodName:"",number:"1",price:"",describe:"",imageList1:[],imageList2:[],imageList3:[],photo1:"",photo2:"",photo3:"",temp:""}},updated:function(){this.check()},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){Object(l["a"])("发布")},check:function(){""==this.goodName||""==this.price||""==this.imageList?this.buttonDisabled=!0:this.buttonDisabled=!1},submitInfo:function(){r.a.post("http://192.168.137.1:8090/androidApp/Goods/AddGoods",{goodName:this.goodName,price:this.price,number:this.number,describe:this.describe,photo1:this.photo1,photo2:this.photo2,photo3:this.photo3}).then((function(t){console.log("response :",t),"success"==t.data?(l["a"].success("商品发布成功！"),window.history.go(-1)):"fail"==t.data?c["a"].alert({title:"提示",message:"商品已存在，请重新输入！"}).then((function(){})):c["a"].alert({title:"提示",message:"数据请求失败，请重试！"}).then((function(){}))})).catch((function(t){console.log("error :",t),c["a"].alert({title:"提示",message:"数据请求失败，请重试！"}).then((function(){}))}))},goodNameCheck:function(){""==this.goodName?this.goodNameError=!0:this.goodNameError=!1},priceCheck:function(){""==this.price?this.priceError=!0:this.priceError=!1},afterRead1:function(t){console.log(t.content),this.photo1=t.content},afterRead2:function(t){console.log(t.content),this.photo2=t.content},afterRead3:function(t){console.log(t.content),this.photo3=t.content}}},w=y,x=(i("f51b"),i("2877")),S=Object(x["a"])(w,n,s,!1,null,null,null);e["default"]=S.exports},"8f80":function(t,e,i){"use strict";var n=i("c31d"),s=i("d282"),a=i("ea8e"),o=i("a142");function r(t){return Array.isArray(t)?t:[t]}function l(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function c(t,e){return r(t).some((function(t){return t.size>e}))}var u=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function h(t){return u.test(t)}function f(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?h(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var d=i("ad06"),m=i("44bf"),p=i("28a2"),g=Object(s["a"])("uploader"),v=g[0],b=g[1];e["a"]=v({inheritAttrs:!1,model:{prop:"fileList"},props:{disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"}},computed:{previewSizeWithUnit:function(){return Object(a["a"])(this.previewSize)}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(n.then)return void n.then((function(){e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=c(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return l(t,e.resultType)}))).then((function(n){var s=t.map((function(t,e){var i={file:t};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(s,i)}))}else l(t,this.resultType).then((function(n){var s={file:t};n&&(s.content=n),e.onAfterRead(s,i)}))},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.getDetail()):(this.resetInput(),this.$emit("input",[].concat(this.fileList,r(t))),this.afterRead&&this.afterRead(t,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(n.then)return void n.then((function(){i.deleteFile(t,e)})).catch(o["e"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return f(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=Object(p["a"])({images:n,closeOnPopstate:!0,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}})}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},genPreviewItem:function(t,e){var i=this,n=this.$createElement,s=this.deletable&&n(d["a"],{attrs:{name:"clear"},class:b("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}}),a=f(t)?n(m["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,radius:4},class:b("preview-image"),on:{click:function(){i.onPreviewImage(t)}}}):n("div",{class:b("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(d["a"],{class:b("file-icon"),attrs:{name:"description"}}),n("div",{class:[b("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url])]);return n("div",{class:b("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[a,s])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),s=t("input",{attrs:Object(n["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:b("input"),on:{change:this.onChange}});if(i)return t("div",{class:b("input-wrapper")},[i,s]);if(this.previewSize){var a=this.previewSizeWithUnit;e={width:a,height:a}}return t("div",{class:b("upload"),style:e},[t(d["a"],{attrs:{name:"plus"},class:b("upload-icon")}),this.uploadText&&t("span",{class:b("upload-text")},[this.uploadText]),s])}}},render:function(){var t=arguments[0];return t("div",{class:b()},[t("div",{class:b("wrapper")},[this.genPreviewList(),this.genUpload()])])}})},a8fa:function(t,e,i){"use strict";var n=i("a142");function s(){return!n["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var a=i("a8c1");i.d(e,"a",(function(){return r}));var o=s();function r(){o&&Object(a["d"])(Object(a["a"])())}},bd96:function(t,e,i){},f51b:function(t,e,i){"use strict";var n=i("bd96"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-7813288e.f6d23c33.js.map