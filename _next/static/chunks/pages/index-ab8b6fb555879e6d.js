(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(882)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(8754),i=r(1757),a=i._(r(7294)),o=n._(r(2636)),s=r(7757),l=r(3735),c=r(3341);r(4210);let d=n._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,i,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function h(e){let[t,r]=a.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,a.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:o,className:s,imgStyle:l,blurStyle:c,isLazy:d,fetchPriority:u,fill:f,placeholder:m,loading:g,srcString:x,config:w,unoptimized:b,loader:v,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:E,onLoad:k,onError:S,...C}=e;return g=d?"lazy":g,a.default.createElement("img",{...C,...h(u),loading:g,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...l,...c},...r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,x,m,j,y,_,b))},[x,m,j,y,_,S,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,x,m,j,y,_,b)},onError:e=>{E(!0),"blur"===m&&_(!0),S&&S(e)}})}),x=(0,a.forwardRef)((e,t)=>{var r;let n,i,{src:p,sizes:x,unoptimized:w=!1,priority:b=!1,loading:v,className:j,quality:y,width:_,height:E,fill:k,style:S,onLoad:C,onLoadingComplete:N,placeholder:P="empty",blurDataURL:I,fetchPriority:z,layout:O,objectFit:A,objectPosition:M,lazyBoundary:R,lazyRoot:T,...D}=e,B=(0,a.useContext)(c.ImageConfigContext),F=(0,a.useMemo)(()=>{let e=u||B||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[B]),W=D.loader||d.default;delete D.loader;let V="__next_img_default"in W;if(V){if("custom"===F.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!x&&(x=t)}let G="",J=m(_),L=m(E);if("object"==typeof(r=p)&&(f(r)||void 0!==r.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,I=I||e.blurDataURL,G=e.src,!k){if(J||L){if(J&&!L){let t=J/e.width;L=Math.round(e.height*t)}else if(!J&&L){let t=L/e.height;J=Math.round(e.width*t)}}else J=e.width,L=e.height}}let q=!b&&("lazy"===v||void 0===v);(!(p="string"==typeof p?p:G)||p.startsWith("data:")||p.startsWith("blob:"))&&(w=!0,q=!1),F.unoptimized&&(w=!0),V&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0),b&&(z="high");let[K,U]=(0,a.useState)(!1),[X,Y]=(0,a.useState)(!1),H=m(y),$=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:M}:{},X?{}:{color:"transparent"},S),Q="blur"===P&&I&&!K?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:J,heightInt:L,blurWidth:n,blurHeight:i,blurDataURL:I,objectFit:$.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:a,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:a,width:l[d]})}}({config:F,src:p,unoptimized:w,width:J,quality:H,sizes:x,loader:W}),ee=p,et=(0,a.useRef)(C);(0,a.useEffect)(()=>{et.current=C},[C]);let er=(0,a.useRef)(N);(0,a.useEffect)(()=>{er.current=N},[N]);let en={isLazy:q,imgAttributes:Z,heightInt:L,widthInt:J,qualityInt:H,className:j,imgStyle:$,blurStyle:Q,loading:v,config:F,fetchPriority:z,fill:k,unoptimized:w,placeholder:P,loader:W,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:U,setShowAltText:Y,...D};return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,{...en,ref:t}),b?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:D.crossOrigin,referrerPolicy:D.referrerPolicy,...h(z)})):null)}),w=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=n||t,l=i||r,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},882:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),i=r(5675),a=r.n(i);r(7294);var o=r(9008),s=r.n(o);let l=e=>{let{children:t,title:r="This is the default title",description:i="",keywords:a=[]}=e,o="/assets/avatar-github.jpg";return(0,n.jsxs)("div",{className:"container max-w-xl pt-6",children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{content:i,name:"description"}),(0,n.jsx)("meta",{property:"keywords",content:a.join(", ")}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:site_name",content:"Koen Verburg"}),(0,n.jsx)("meta",{name:"msapplication-TileImage",content:"/favicon.ico"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"favicon-16x16.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"512x512",href:"apple-touch-icon-512x512.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"192x192",href:"apple-touch-icon-192x192.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",href:"/apple-touch-icon.png"}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:image",content:o}),(0,n.jsx)("meta",{property:"og:description",content:i}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:o}),(0,n.jsx)("meta",{name:"twitter:description",content:i}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@koenverburg"})]}),t]})},c=(e,t)=>()=>{let r=e.toLowerCase().replaceAll(".","-").replaceAll(" ","-");return(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"underline font-semibold text-orange-500 umami--click--".concat(r),children:e})},d=e=>(0,n.jsx)("span",{className:"font-semibold text-blue-500",children:e.children});var u=()=>{let e=c("Twitch","https://www.twitch.tv/conradtheprogrammer"),t=c("Instagram","https://www.instagram.com/conradtheprogrammer/"),r=c("Blog","https://conradtheprogrammer.medium.com"),i=c("Adidas","https://adidas.com"),o=c("adidas.com","https://adidas.com");return(0,n.jsxs)(l,{title:"Conrad The Programmer",children:[(0,n.jsxs)("div",{className:"text-center mb-4",children:[(0,n.jsx)(a(),{width:"460",height:"460",alt:"Avatar",src:"/assets/new-avatar.jpg",className:"rounded-full w-32 mb-4 mx-auto"}),(0,n.jsx)("h1",{className:"font-bold text-3xl tracking-tight",children:"Koen Verburg"}),(0,n.jsxs)("h2",{className:"text-gray-500",children:["Software Engineer at ",(0,n.jsx)(i,{})]}),(0,n.jsxs)("h5",{className:"text-gray-500 mb-2",children:["On Social Media as ",(0,n.jsx)(d,{children:"Conrad The Programmer"})]})]}),(0,n.jsxs)("article",{className:"mb-4 text-center",children:["I care about Developer Experience which includes a fast CI/CD, fast feedback loop during active development, repeatable and solid infrastructure using IaC, Docker and kubernetes.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"During the day I work on the ReactJS app that powers ",(0,n.jsx)(o,{})," ",(0,n.jsx)("br",{}),"At night I stream on ",(0,n.jsx)(e,{}),", work on content for ",(0,n.jsx)(t,{})," or my ",(0,n.jsx)(r,{}),", or one of my SaaS projects."]})]})}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);