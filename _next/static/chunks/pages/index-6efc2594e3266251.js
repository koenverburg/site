(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7954)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,n;var i,{src:a,sizes:p,unoptimized:x=!1,priority:v=!1,loading:b,className:j,quality:y,width:_,height:E,fill:S,style:C,onLoad:k,onLoadingComplete:z,placeholder:N="empty",blurDataURL:I,layout:O,objectFit:P,objectPosition:R,lazyBoundary:A,lazyRoot:T}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=s.useContext(u.ImageConfigContext),L=s.useMemo(()=>{let e=f||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[M]),B=D,W=B.loader||m.default;if(delete B.loader,"__next_img_default"in W){if("custom"===L.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=W;W=e=>{let{config:t}=e,n=o(e,["config"]);return F(n)}}if(O){"fill"===O&&(S=!0);let V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];V&&(C=r({},C,V));let q={responsive:"100vw",fill:"100vw"}[O];q&&!p&&(p=q)}let G="",Z=h(_),J=h(E);if("object"==typeof(i=a)&&(g(i)||void 0!==i.src)){let U=g(a)?a.default:a;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,n=U.blurHeight,I=I||U.blurDataURL,G=U.src,!S){if(Z||J){if(Z&&!J){let K=Z/U.width;J=Math.round(U.height*K)}else if(!Z&&J){let X=J/U.height;Z=Math.round(U.width*X)}}else Z=U.width,J=U.height}}let H=!v&&("lazy"===b||void 0===b);((a="string"==typeof a?a:G).startsWith("data:")||a.startsWith("blob:"))&&(x=!0,H=!1),L.unoptimized&&(x=!0);let[$,Q]=s.useState(!1),[Y,ee]=s.useState(!1),et=h(y),en=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:R}:{},Y?{}:{color:"transparent"},C),er="blur"===N&&I&&!$?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:J,blurWidth:t,blurHeight:n,blurDataURL:I}),'")')}:{},ei=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=a.exec(n);s)o.push(parseInt(s[2]));if(o.length){let l=.01*Math.min(...o);return{widths:i.filter(e=>e>=r[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:n,quality:a,width:l[d]})}}({config:L,src:a,unoptimized:x,width:Z,quality:et,sizes:p,loader:W}),ea=a,eo={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:B.crossOrigin},es=s.useRef(k);s.useEffect(()=>{es.current=k},[k]);let el=s.useRef(z);s.useEffect(()=>{el.current=z},[z]);let ec=r({isLazy:H,imgAttributes:ei,heightInt:J,widthInt:Z,qualityInt:et,className:j,imgStyle:en,blurStyle:er,loading:b,config:L,fill:S,unoptimized:x,placeholder:N,loader:W,srcString:ea,onLoadRef:es,onLoadingCompleteRef:el,setBlurComplete:Q,setShowAltText:ee},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},ec)),v?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},eo))):null)};var r=n(6495).Z,i=n(2648).Z,a=n(1598).Z,o=n(7273).Z,s=a(n(7294)),l=i(n(3121)),c=n(2675),d=n(139),u=n(8730);n(7238);var m=i(n(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,i,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,l=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist(){},preventDefault(){s=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let w=e=>{var{imgAttributes:t,heightInt:n,widthInt:i,qualityInt:a,className:l,imgStyle:c,blurStyle:d,isLazy:u,fill:m,placeholder:f,loading:g,srcString:h,config:w,unoptimized:x,loader:v,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:y,setShowAltText:_,onLoad:E,onError:S}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=u?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,t,{width:i,height:n,decoding:"async","data-nimg":m?"fill":"1",className:l,loading:g,style:r({},c,d),ref:s.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&p(e,h,f,b,j,y,x))},[h,f,b,j,y,S,x]),onLoad(e){let t=e.currentTarget;p(t,h,f,b,j,y,x)},onError(e){_(!0),"blur"===f&&y(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a}=e,o=r||t,s=i||n,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},7954:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(5675),a=n.n(i);n(7294);var o=n(9008),s=n.n(o);let l=e=>{let{children:t,title:n="This is the default title",description:i="",keywords:a=[]}=e,o="/assets/avatar-github.jpg";return(0,r.jsxs)("div",{className:"container max-w-xl pt-6",children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{content:i,name:"description"}),(0,r.jsx)("meta",{property:"keywords",content:a.join(", ")}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Koen Verburg"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/favicon.ico"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"favicon-16x16.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"512x512",href:"apple-touch-icon-512x512.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"192x192",href:"apple-touch-icon-192x192.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon-precomposed",href:"/apple-touch-icon.png"}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:image",content:o}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("meta",{name:"twitter:description",content:i}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@koenverburg"})]}),t]})},c=(e,t)=>()=>(0,r.jsx)("a",{href:t,target:"_blank",className:"underline font-semibold text-orange-500",children:e}),d=e=>(0,r.jsx)("span",{className:"font-semibold text-blue-500",children:e.children}),u=()=>{let e=c("Twitch","https://www.twitch.tv/conradtheprogrammer"),t=c("Instagram","https://www.instagram.com/conradtheprogrammer/");return(0,r.jsxs)(l,{title:"Conrad The Programmer",children:[(0,r.jsxs)("div",{className:"text-center mb-4",children:[(0,r.jsx)(a(),{width:"460",height:"460",alt:"Avatar",src:"/assets/avatar-github.jpg",className:"rounded-full w-32 mb-4 mx-auto"}),(0,r.jsx)("h1",{className:"font-bold text-3xl tracking-tight",children:"Koen Verburg"}),(0,r.jsxs)("h2",{className:"text-gray-500",children:["Software Engineer at ",(0,r.jsx)(d,{children:"Adidas"})]}),(0,r.jsxs)("h5",{className:"text-gray-500 mb-2",children:["On Social Media as ",(0,r.jsx)(d,{children:"Conrad The Programmer"})]})]}),(0,r.jsxs)("article",{className:"mb-4",children:["I care about Developer Experience, CI/CD, and faster roll-outs. During the day I work on the ReactJS app that powers adidas.com At night I stream on ",(0,r.jsx)(e,{}),", work on posts for ",(0,r.jsx)(t,{}),", or one of my Saas projects"]})]})};var m=u},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);