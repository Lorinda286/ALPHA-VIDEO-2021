(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{108:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),c};e.exports=n,e.exports.default=n},109:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},110:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(102),o=a(100),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:a(23).a,theme:i};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},b=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=m({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?b(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=m({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==r&&(l.style=void 0!==l.style?m({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var c=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(o))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,c=m({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?m({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,c=0,o=[],i=[o];c>-1;){for(;(l=n[c]++)<r[c];){var s=void 0,u=t[c],m=a[c][l];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=h(u,m.type),m.alias&&(u=h(u,m.alias)),s=m.content),"string"==typeof s){var b=s.split(p),y=b.length;o.push({types:u,content:b[0]});for(var f=1;f<y;f++)d(o),i.push(o=[]),o.push({types:u,content:b[f]})}else c++,t.push(u),a.push(s),n.push(0),r.push(s.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return d(o),i}(void 0!==c?t.tokenize(n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=a(108),v=a.n(g),k=a(109),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(112),N=a(101),C=function(){var e=Object(N.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(57),S=a.n(x),_=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},P=/(?:title=")(.*)(?:")/,w=function(e){var t=e.children,a=e.className,c=e.metastring,i=Object(N.useThemeConfig)().prism,u=Object(r.useState)(!1),m=u[0],p=u[1],d=Object(r.useState)(!1),h=d[0],b=d[1];Object(r.useEffect)((function(){b(!0)}),[]);var y=Object(r.useRef)(null),g=[],k="",E=C(),O=Array.isArray(t)?t.join(""):t;if(c&&_.test(c)){var x=c.match(_)[1];g=j()(x).filter((function(e){return e>0}))}c&&P.test(c)&&(k=c.match(P)[1]);var w=a&&a.replace(/language-/,"");!w&&i.defaultLanguage&&(w=i.defaultLanguage);var I=O.replace(/\n$/,"");if(0===g.length&&void 0!==w){for(var L,B="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(w),M=O.replace(/\n$/,"").split("\n"),R=0;R<M.length;){var A=R+1,H=M[R].match(D);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=A+",";break;case"highlight-start":L=A;break;case"highlight-end":B+=L+"-"+(A-1)+","}M.splice(R,1)}else R+=1}g=j()(B),I=M.join("\n")}var W=function(){v()(I),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(f,Object(n.a)({},s,{key:String(h),theme:E,code:I,language:w}),(function(e){var t,a=e.className,r=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,k&&l.a.createElement("div",{style:r,className:S.a.codeBlockTitle},k),l.a.createElement("div",{className:S.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(a,S.a.codeBlock,"thin-scrollbar",(t={},t[S.a.codeBlockWithTitle]=k,t))},l.a.createElement("div",{className:S.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return g.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))})))})))),l.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(S.a.copyButton),onClick:W},m?"Copied":"Copy")))}))},I=a(7),L=(a(58),a(59)),B=a.n(L),D=function(e){return function(t){var a,n=t.id,r=Object(I.a)(t,["id"]),c=Object(N.useThemeConfig)().navbar.hideOnScroll;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",(a={},a[B.a.enhancedAnchor]=!c,a)),id:n}),r.children,l.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},M=a(60),R=a.n(M),A={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?l.a.createElement(w,e):l.a.createElement("code",e):t},a:function(e){return l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e))},h1:D("h1"),h2:D("h2"),h3:D("h3"),h4:D("h4"),h5:D("h5"),h6:D("h6")};t.a=A},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(106);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(103),c=a(22),o=a(25),i=a(106),s=a(3),u=a(7),m=a(100),p=a(101),d=a(122),h=a(126),b=a(127),y=a(125),f=a(102),g=a(115),v=a(129),k=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=a(128),E=a(75),O=a.n(E);var N=function e(t,a){return"link"===t.type?Object(p.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function C(e){var t,a,l,c=e.item,o=e.onItemClick,i=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=c.items,b=c.label,y=N(c,p),f=(a=y,l=Object(n.useRef)(a),Object(n.useEffect)((function(){l.current=a}),[a]),l.current),g=Object(n.useState)((function(){return!!i&&(!y&&c.collapsed)})),v=g[0],k=g[1],j=Object(n.useRef)(null),E=Object(n.useState)(void 0),C=E[0],x=E[1],_=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){y&&!f&&v&&k(!1)}),[y,f,v]);var T=Object(n.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===h.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:b},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[O.a.menuLinkText]=!i,t)),onClick:i?T:void 0,href:i?"#!":void 0},d),b),r.a.createElement("ul",{className:"menu__list",ref:j,style:{height:C},onTransitionEnd:function(){v||_(!1)}},h.map((function(e){return r.a.createElement(S,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:i,activePath:p})}))))}function x(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,o=t.label,i=N(t,n);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(f.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),o))}function S(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(x,e)}}var _=function(e){var t,a,l=e.path,c=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,u=e.isHidden,f=Object(n.useState)(!1),g=f[0],E=f[1],N=Object(p.useThemeConfig)(),C=N.navbar.hideOnScroll,x=N.hideableSidebar,_=Object(d.a)().isAnnouncementBarClosed,T=Object(y.a)().scrollY;Object(h.a)(g);var P=Object(b.a)();return Object(n.useEffect)((function(){P===b.b.desktop&&E(!1)}),[P]),r.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=C,t[O.a.sidebarHidden]=u,t))},C&&r.a.createElement(v.a,{tabIndex:-1,className:O.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,(a={"menu--show":g},a[O.a.menuWithAnnouncementBar]=!_&&0===T,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!g)}},g?r.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:i,activePath:l})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:s},r.a.createElement(k,{className:O.a.collapseSidebarButtonIcon})))},T=a(110),P=a(118),w=a(111),I=a(76),L=a.n(I);function B(e){var t,a,o,s,u=e.currentDocRoute,d=e.versionMetadata,h=e.children,b=Object(c.default)(),y=b.siteConfig,f=b.isClient,g=d.pluginId,v=d.permalinkToSidebar,j=d.docsSidebars,E=d.version,O=v[u.path],N=j[O],C=Object(n.useState)(!1),x=C[0],S=C[1],P=Object(n.useState)(!1),w=P[0],I=P[1],B=Object(n.useCallback)((function(){w&&I(!1),S(!x)}),[w]);return r.a.createElement(i.a,{key:f,searchMetadatas:{version:E,tag:Object(p.docVersionSearchTag)(g,E)}},r.a.createElement("div",{className:L.a.docPage},N&&r.a.createElement("div",{className:Object(m.a)(L.a.docSidebarContainer,(t={},t[L.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(L.a.docSidebarContainer)&&x&&I(!0)},role:"complementary"},r.a.createElement(_,{key:O,sidebar:N,path:u.path,sidebarCollapsible:null===(a=null===(o=y.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===a||a,onCollapse:B,isHidden:w}),w&&r.a.createElement("div",{className:L.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:B,onClick:B},r.a.createElement(k,null))),r.a.createElement("main",{className:L.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",L.a.docItemWrapper,(s={},s[L.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(l.a,{components:T.a},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return Object(w.matchPath)(n.pathname,e)}));return l?r.a.createElement(B,{currentDocRoute:l,versionMetadata:a},Object(o.a)(t)):r.a.createElement(P.default,e)}}}]);