"use strict";exports.id=968,exports.ids=[968],exports.modules={4643:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(41680).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},12214:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(41680).A)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},45103:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(73864),i=r.n(n)},41902:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(25488),i=r(81063),s=r(45512),o=i._(r(58009)),a=n._(r(55740)),l=n._(r(59153)),u=r(42034),d=r(94653),c=r(48156);r(99212);let f=r(84055),h=n._(r(21628)),p=r(73727),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function y(e,t,r,n,i,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:u,className:d,style:c,fetchPriority:f,placeholder:h,loading:m,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:_,setShowAltText:S,sizesInput:j,onLoad:C,onError:P,...I}=e,E=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&y(e,h,w,x,_,v,j))},[r,h,w,x,_,P,v,j]),O=(0,p.useMergedRef)(t,E);return(0,s.jsx)("img",{...I,...g(f),loading:m,width:l,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:O,onLoad:e=>{y(e.currentTarget,h,w,x,_,v,j)},onError:e=>{S(!0),"empty"!==h&&_(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let y=(0,o.useRef)(l);(0,o.useEffect)(()=>{y.current=l},[l]);let[g,w]=(0,o.useState)(!1),[x,_]=(0,o.useState)(!1),{props:S,meta:j}=(0,u.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:g,showAltText:x});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),j.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},32782:(e,t,r)=>{e.exports=r(8104).vendored.contexts.AmpContext},48156:(e,t,r)=>{e.exports=r(8104).vendored.contexts.ImageConfigContext},62677:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},42034:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(99212);let n=r(38337),i=r(94653);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,u,{src:d,sizes:c,unoptimized:f=!1,priority:h=!1,loading:p,className:m,quality:y,width:g,height:v,fill:b=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:S,placeholder:j="empty",blurDataURL:C,fetchPriority:P,decoding:I="async",layout:E,objectFit:O,objectPosition:k,lazyBoundary:z,lazyRoot:q,...M}=e,{imgConf:R,showAltText:A,blurComplete:$,defaultLoader:T}=t,N=R||i.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=M.loader||T;delete M.loader,delete M.srcSet;let D="__next_img_default"in F;if(D){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let L="",Q=o(g),B=o(v);if((r=d)&&"object"==typeof r&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,L=e.src,!b){if(Q||B){if(Q&&!B){let t=Q/e.width;B=Math.round(e.height*t)}else if(!Q&&B){let t=B/e.height;Q=Math.round(e.width*t)}}else Q=e.width,B=e.height}}let G=!h&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),a.unoptimized&&(f=!0),D&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0);let U=o(y),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},A?{}:{color:"transparent"},w),J=$||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:Q,heightInt:B,blurWidth:l,blurHeight:u,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+j+'")',W=J?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:o,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:f,width:Q,quality:U,sizes:c,loader:F});return{props:{...M,loading:G?"lazy":p,fetchPriority:P,width:Q,height:B,decoding:I,className:m,style:{...V,...W},sizes:H.sizes,srcSet:H.srcSet,src:x||H.src},meta:{unoptimized:f,priority:h,placeholder:j,fill:b}}}},59153:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let n=r(25488),i=r(81063),s=r(45512),o=i._(r(58009)),a=n._(r(87440)),l=r(32782),u=r(6302),d=r(62677);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(99212);let h=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let s=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38337:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:o}=e,a=n?40*n:t,l=i?40*i:r,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},94653:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},73864:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=r(25488),i=r(42034),s=r(41902),o=n._(r(21628));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},21628:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},87440:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(58009),i=()=>{},s=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},24817:(e,t,r)=>{r.d(t,{dp:()=>Y.dp});var n=r(96116),i=r(4589),s=r(46993);function o(e,t){if("undefined"==typeof Convex||void 0===Convex.syscall)throw Error("The Convex database and auth objects are being used outside of a Convex backend. Did you mean to use `useQuery` or `useMutation` to call a Convex function?");return JSON.parse(Convex.syscall(e,JSON.stringify(t)))}async function a(e,t){let r;if("undefined"==typeof Convex||void 0===Convex.asyncSyscall)throw Error("The Convex database and auth objects are being used outside of a Convex backend. Did you mean to use `useQuery` or `useMutation` to call a Convex function?");try{r=await Convex.asyncSyscall(e,JSON.stringify(t))}catch(e){if(void 0!==e.data){let t=new i.i(e.message);throw t.data=(0,s.du)(e.data),t}throw Error(e.message)}return JSON.parse(r)}r(54410);var l=Object.defineProperty,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r)=>u(e,"symbol"!=typeof t?t+"":t,r);class c{constructor(){d(this,"_isExpression"),d(this,"_value")}}var f=Object.defineProperty,h=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t,r)=>h(e,"symbol"!=typeof t?t+"":t,r);class m extends c{constructor(e){super(),p(this,"inner"),this.inner=e}serialize(){return this.inner}}function y(e){return e instanceof m?e.serialize():{$literal:(0,s.cy)(e)}}var g=Object.defineProperty,v=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t,r)=>v(e,"symbol"!=typeof t?t+"":t,r);class w{constructor(){b(this,"_isExpression"),b(this,"_value")}}var x=Object.defineProperty,_=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t,r)=>_(e,"symbol"!=typeof t?t+"":t,r);class j extends w{constructor(e){super(),S(this,"inner"),this.inner=e}serialize(){return this.inner}}function C(e){return e instanceof j?e.serialize():{$literal:(0,s.cy)(e)}}let P={eq:(e,t)=>new j({$eq:[C(e),C(t)]}),neq:(e,t)=>new j({$neq:[C(e),C(t)]}),lt:(e,t)=>new j({$lt:[C(e),C(t)]}),lte:(e,t)=>new j({$lte:[C(e),C(t)]}),gt:(e,t)=>new j({$gt:[C(e),C(t)]}),gte:(e,t)=>new j({$gte:[C(e),C(t)]}),add:(e,t)=>new j({$add:[C(e),C(t)]}),sub:(e,t)=>new j({$sub:[C(e),C(t)]}),mul:(e,t)=>new j({$mul:[C(e),C(t)]}),div:(e,t)=>new j({$div:[C(e),C(t)]}),mod:(e,t)=>new j({$mod:[C(e),C(t)]}),neg:e=>new j({$neg:C(e)}),and:(...e)=>new j({$and:e.map(C)}),or:(...e)=>new j({$or:e.map(C)}),not:e=>new j({$not:C(e)}),field:e=>new j({$field:e})};var I=Object.defineProperty,E=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t,r)=>E(e,"symbol"!=typeof t?t+"":t,r);class k{constructor(){O(this,"_isIndexRange")}}var z=Object.defineProperty,q=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t,r)=>q(e,"symbol"!=typeof t?t+"":t,r);class R extends k{constructor(e){super(),M(this,"rangeExpressions"),M(this,"isConsumed"),this.rangeExpressions=e,this.isConsumed=!1}static new(){return new R([])}consume(){if(this.isConsumed)throw Error("IndexRangeBuilder has already been used! Chain your method calls like `q => q.eq(...).eq(...)`. See https://docs.convex.dev/using/indexes");this.isConsumed=!0}eq(e,t){return this.consume(),new R(this.rangeExpressions.concat({type:"Eq",fieldPath:e,value:(0,s.cy)(t)}))}gt(e,t){return this.consume(),new R(this.rangeExpressions.concat({type:"Gt",fieldPath:e,value:(0,n.rz)(t)}))}gte(e,t){return this.consume(),new R(this.rangeExpressions.concat({type:"Gte",fieldPath:e,value:(0,n.rz)(t)}))}lt(e,t){return this.consume(),new R(this.rangeExpressions.concat({type:"Lt",fieldPath:e,value:(0,n.rz)(t)}))}lte(e,t){return this.consume(),new R(this.rangeExpressions.concat({type:"Lte",fieldPath:e,value:(0,n.rz)(t)}))}export(){return this.consume(),this.rangeExpressions}}var A=Object.defineProperty,$=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t,r)=>$(e,"symbol"!=typeof t?t+"":t,r);class N{constructor(){T(this,"_isSearchFilter")}}function F(e,t,r,n){if(void 0===e)throw TypeError(`Must provide arg ${t} \`${n}\` to \`${r}\``)}var D=Object.defineProperty,L=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t,r)=>L(e,"symbol"!=typeof t?t+"":t,r);class B extends N{constructor(e){super(),Q(this,"filters"),Q(this,"isConsumed"),this.filters=e,this.isConsumed=!1}static new(){return new B([])}consume(){if(this.isConsumed)throw Error("SearchFilterBuilder has already been used! Chain your method calls like `q => q.search(...).eq(...)`.");this.isConsumed=!0}search(e,t){return F(e,1,"search","fieldName"),F(t,2,"search","query"),this.consume(),new B(this.filters.concat({type:"Search",fieldPath:e,value:t}))}eq(e,t){return F(e,1,"eq","fieldName"),2!=arguments.length&&F(t,2,"search","value"),this.consume(),new B(this.filters.concat({type:"Eq",fieldPath:e,value:(0,s.cy)(t)}))}export(){return this.consume(),this.filters}}var G=r(81661),U=Object.defineProperty,V=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t,r)=>V(e,"symbol"!=typeof t?t+"":t,r);function W(e){throw Error("consumed"===e?"This query is closed and can't emit any more values.":"This query has been chained with another operator and can't be reused.")}Symbol.asyncIterator;class H{constructor(e){J(this,"state"),this.state={type:"preparing",query:e}}takeQuery(){if("preparing"!==this.state.type)throw Error("A query can only be chained once and can't be chained after iteration begins.");let e=this.state.query;return this.state={type:"closed"},e}startQuery(){if("executing"===this.state.type)throw Error("Iteration can only begin on a query once.");("closed"===this.state.type||"consumed"===this.state.type)&&W(this.state.type);let{queryId:e}=o("1.0/queryStream",{query:this.state.query,version:G.r});return this.state={type:"executing",queryId:e},e}closeQuery(){"executing"===this.state.type&&o("1.0/queryCleanup",{queryId:this.state.queryId}),this.state={type:"consumed"}}order(e){F(e,1,"order","order");let t=this.takeQuery();if("Search"===t.source.type)throw Error("Search queries must always be in relevance order. Can not set order manually.");if(null!==t.source.order)throw Error("Queries may only specify order at most once");return t.source.order=e,new H(t)}filter(e){F(e,1,"filter","predicate");let t=this.takeQuery();return t.operators.push({filter:C(e(P))}),new H(t)}limit(e){F(e,1,"limit","n");let t=this.takeQuery();return t.operators.push({limit:e}),new H(t)}[Symbol.asyncIterator](){return this.startQuery(),this}async next(){("closed"===this.state.type||"consumed"===this.state.type)&&W(this.state.type);let e="preparing"===this.state.type?this.startQuery():this.state.queryId,{value:t,done:r}=await a("1.0/queryStreamNext",{queryId:e});return r&&this.closeQuery(),{value:(0,n.du)(t),done:r}}return(){return this.closeQuery(),Promise.resolve({done:!0,value:void 0})}async paginate(e){if(F(e,1,"paginate","options"),"number"!=typeof e?.numItems||e.numItems<0)throw Error(`\`options.numItems\` must be a positive number. Received \`${e?.numItems}\`.`);let t=this.takeQuery(),r=e.numItems,i=e.cursor,s=e?.endCursor??null,o=e.maximumRowsRead??null,{page:l,isDone:u,continueCursor:d,splitCursor:c,pageStatus:f}=await a("1.0/queryPage",{query:t,cursor:i,endCursor:s,pageSize:r,maximumRowsRead:o,maximumBytesRead:e.maximumBytesRead,version:G.r});return{page:l.map(e=>(0,n.du)(e)),isDone:u,continueCursor:d,splitCursor:c,pageStatus:f}}async collect(){let e=[];for await(let t of this)e.push(t);return e}async take(e){return F(e,1,"take","n"),function(e,t,r,n){if(!Number.isInteger(e)||e<0)throw TypeError(`Arg 1 \`n\` to \`${r}\` must be a non-negative integer`)}(e,0,"take",0),this.limit(e).collect()}async first(){let e=await this.take(1);return 0===e.length?null:e[0]}async unique(){let e=await this.take(2);if(0===e.length)return null;if(2===e.length)throw Error("unique() query returned more than one result");return e[0]}}var X=r(168);X.v.object({numItems:X.v.number(),cursor:X.v.union(X.v.string(),X.v.null()),endCursor:X.v.optional(X.v.union(X.v.string(),X.v.null())),id:X.v.optional(X.v.number()),maximumRowsRead:X.v.optional(X.v.number()),maximumBytesRead:X.v.optional(X.v.number())});var Y=r(30689),Z=Object.defineProperty,K=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t,r)=>K(e,"symbol"!=typeof t?t+"":t,r),et=Object.defineProperty,er=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,en=(e,t,r)=>er(e,"symbol"!=typeof t?t+"":t,r);class ei{constructor(e){en(this,"indexes"),en(this,"searchIndexes"),en(this,"vectorIndexes"),en(this,"validator"),this.indexes=[],this.searchIndexes=[],this.vectorIndexes=[],this.validator=e}index(e,t){return this.indexes.push({indexDescriptor:e,fields:t}),this}searchIndex(e,t){return this.searchIndexes.push({indexDescriptor:e,searchField:t.searchField,filterFields:t.filterFields||[]}),this}vectorIndex(e,t){return this.vectorIndexes.push({indexDescriptor:e,vectorField:t.vectorField,dimensions:t.dimensions,filterFields:t.filterFields||[]}),this}self(){return this}export(){return{indexes:this.indexes,searchIndexes:this.searchIndexes,vectorIndexes:this.vectorIndexes,documentType:this.validator.json}}}function es(e){return new ei((0,X.d)(e)?e:X.v.object(e))}class eo{constructor(e,t){en(this,"tables"),en(this,"strictTableNameTypes"),en(this,"schemaValidation"),this.tables=e,this.schemaValidation=t?.schemaValidation===void 0||t.schemaValidation}export(){return JSON.stringify({tables:Object.entries(this.tables).map(([e,t])=>{let{indexes:r,searchIndexes:n,vectorIndexes:i,documentType:s}=t.export();return{tableName:e,indexes:r,searchIndexes:n,vectorIndexes:i,documentType:s}}),schemaValidation:this.schemaValidation})}}new eo({_scheduled_functions:es({name:X.v.string(),args:X.v.array(X.v.any()),scheduledTime:X.v.float64(),completedTime:X.v.optional(X.v.float64()),state:X.v.union(X.v.object({kind:X.v.literal("pending")}),X.v.object({kind:X.v.literal("inProgress")}),X.v.object({kind:X.v.literal("success")}),X.v.object({kind:X.v.literal("failed"),error:X.v.string()}),X.v.object({kind:X.v.literal("canceled")}))}),_storage:es({sha256:X.v.string(),size:X.v.float64(),contentType:X.v.optional(X.v.string())})},void 0)}};