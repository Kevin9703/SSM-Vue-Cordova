(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13624bef"],{4598:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return c}));var n=i("a142"),s=Date.now();function a(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var o=n["d"]?t:window,r=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function h(t){return r.call(o,t)}function c(t){h((function(){h(t)}))}}).call(this,i("c8ba"))},"8c6e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-uploader",{attrs:{"after-read":t.afterRead}})],1)},s=[],a=i("2b0e"),o=i("c31d"),r=i("d282"),h=i("ea8e"),c=i("a142");function l(t){return Array.isArray(t)?t:[t]}function u(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function f(t,e){return l(t).some((function(t){return t.size>e}))}var d=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function v(t){return d.test(t)}function m(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?v(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var p=i("ad06"),g=i("44bf");function w(t,e,i){return Math.min(Math.max(t,e),i)}var y=i("1325"),b=i("6605"),S=i("3875"),x=i("543e"),T=i("5fbe"),z=i("4598"),C=Object(r["a"])("swipe"),I=C[0],M=C[1],$=I({mixins:[S["a"],Object(T["a"])((function(t,e){t(window,"resize",this.resize,!0),e?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},resize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(y["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count;return t?this.loop?w(e+t,-1,i):w(e+t,0,i-1):e},getTargetOffset:function(t,e){var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=w(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,s=void 0===n?0:n,a=t.emitChange,o=this.loop,r=this.count,h=this.active,c=this.swipes,l=this.trackSize,u=this.minOffset;if(!(r<=1)){var f=this.getTargetActive(i),d=this.getTargetOffset(f,s);if(o){if(c[0]){var v=d<u;c[0].offset=v?l:0}if(c[r-1]){var m=d>0;c[r-1].offset=m?-l:0}}this.active=f,this.offset=d,a&&f!==h&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(z["a"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,i.move({pace:n-i.active,emitChange:!0}),e.immediate?Object(z["a"])((function(){i.swiping=!1})):i.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(z["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&i>1?e("div",{class:M("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,s){return e("i",{class:M("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:M()},[t("div",{ref:"track",style:this.trackStyle,class:M("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.genIndicator()])}}),P=Object(r["a"])("swipe-item"),O=P[0],A=P[1],D=O({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],e=this.$parent,i=e.vertical,n=e.computedWidth,s=e.computedHeight,a={width:n+"px",height:i?s+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:A(),style:a,on:Object(o["a"])({},this.$listeners)},[this.slots()])}}),X=Object(r["a"])("image-preview"),Y=X[0],k=X[1];function j(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var E,B=Y({mixins:[b["a"],S["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:k("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(y["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},s=n.offsetX,a=void 0===s?0:s,o=n.offsetY,r=void 0===o?0:o;i<300&&a<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=e.active;e.$emit("close",{index:t,url:e.images[t]}),e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,s=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-s)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=j(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,s=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||s||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(y["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=w(i,-this.maxMoveX,this.maxMoveX),this.moveY=w(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var s=j(e),a=this.startScale*s/this.startDistance;this.scale=w(a,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(y["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:k("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:k("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(x["a"],{attrs:{type:"spinner"}})}};return e($,{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:k("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:y["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map((function(n,s){return e(D,[e(g["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:k("image"),scopedSlots:i,style:s===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[k(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),L={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},N=function(){E=new(a["default"].extend(B))({el:document.createElement("div")}),document.body.appendChild(E.$el),E.$on("change",(function(t){E.onChange&&E.onChange(t)}))},F=function(t,e){if(void 0===e&&(e=0),!c["d"]){E||N();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(o["a"])(E,L,i),E.$once("input",(function(t){E.value=t})),i.onClose&&E.$once("close",i.onClose),E}};F.install=function(){a["default"].use(B)};var R=F,W=Object(r["a"])("uploader"),U=W[0],Z=W[1],H=U({inheritAttrs:!1,model:{prop:"fileList"},props:{disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"}},computed:{previewSizeWithUnit:function(){return Object(h["a"])(this.previewSize)}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(n.then)return void n.then((function(){e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=f(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return u(t,e.resultType)}))).then((function(n){var s=t.map((function(t,e){var i={file:t};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(s,i)}))}else u(t,this.resultType).then((function(n){var s={file:t};n&&(s.content=n),e.onAfterRead(s,i)}))},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.getDetail()):(this.resetInput(),this.$emit("input",[].concat(this.fileList,l(t))),this.afterRead&&this.afterRead(t,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(n.then)return void n.then((function(){i.deleteFile(t,e)})).catch(c["e"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return m(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=R({images:n,closeOnPopstate:!0,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}})}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},genPreviewItem:function(t,e){var i=this,n=this.$createElement,s=this.deletable&&n(p["a"],{attrs:{name:"clear"},class:Z("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}}),a=m(t)?n(g["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,radius:4},class:Z("preview-image"),on:{click:function(){i.onPreviewImage(t)}}}):n("div",{class:Z("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(p["a"],{class:Z("file-icon"),attrs:{name:"description"}}),n("div",{class:[Z("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url])]);return n("div",{class:Z("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[a,s])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),n=t("input",{attrs:Object(o["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:Z("input"),on:{change:this.onChange}});if(i)return t("div",{class:Z("input-wrapper")},[i,n]);if(this.previewSize){var s=this.previewSizeWithUnit;e={width:s,height:s}}return t("div",{class:Z("upload"),style:e},[t(p["a"],{attrs:{name:"plus"},class:Z("upload-icon")}),this.uploadText&&t("span",{class:Z("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:Z()},[t("div",{class:Z("wrapper")},[this.genPreviewList(),this.genUpload()])])}});a["default"].use(H);var _={name:"",data:function(){return{}},methods:{afterRead:function(t){console.log(t.content)}}},q=_,J=i("2877"),V=Object(J["a"])(q,n,s,!1,null,null,null);e["default"]=V.exports}}]);
//# sourceMappingURL=chunk-13624bef.5100c177.js.map