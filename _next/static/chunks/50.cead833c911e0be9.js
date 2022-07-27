(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{6336:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(4867);function o(e){return(0,r.Z)("MuiListItemText",e)}const a=(0,n(1588).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},431:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),c=n(4780),s=n(1796),l=n(948),u=n(1657),p=n(9773),d=n(7739),f=n(8974),m=n(1705),y=n(5097),b=n(1588);var v=(0,b.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),g=n(6336),h=n(4867);function x(e){return(0,h.Z)("MuiMenuItem",e)}var C=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=n(5893);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],j=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${y.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${y.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${v.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.root} svg`]:{fontSize:"1.25rem"}}))));var Z=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:l="li",dense:d=!1,divider:y=!1,disableGutters:b=!1,focusVisibleClassName:v,role:g="menuitem",tabIndex:h}=n,C=(0,r.Z)(n,w),Z=a.useContext(p.Z),P={dense:d||Z.dense||!1,disableGutters:b},k=a.useRef(null);(0,f.Z)((()=>{s&&k.current&&k.current.focus()}),[s]);const D=(0,o.Z)({},n,{dense:P.dense,divider:y,disableGutters:b}),S=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:a,selected:i,classes:s}=e,l={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",r&&"divider",i&&"selected"]},u=(0,c.Z)(l,x,s);return(0,o.Z)({},s,u)})(n),E=(0,m.Z)(k,t);let R;return n.disabled||(R=void 0!==h?h:-1),(0,O.jsx)(p.Z.Provider,{value:P,children:(0,O.jsx)(j,(0,o.Z)({ref:E,role:g,tabIndex:R,component:l,focusVisibleClassName:(0,i.Z)(S.focusVisible,v)},C,{ownerState:D,classes:S}))})}))},6447:function(e,t,n){"use strict";var r=n(3366),o=n(7462),a=n(7294),i=n(5408),c=n(8700),s=n(9707),l=n(9766),u=n(948),p=n(1657),d=n(5893);const f=["component","direction","spacing","divider","children"];function m(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,o)=>(e.push(r),o<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${o}`})),e)),[])}const y=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,c.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),a=(0,i.P$)({values:e.direction,base:o}),s=(0,i.P$)({values:e.spacing,base:o}),u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,c.NA)(r,t)}};var o};n=(0,l.Z)(n,(0,i.k9)({theme:t},s,u))}return n})),b=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiStack"}),a=(0,s.Z)(n),{component:i="div",direction:c="column",spacing:l=0,divider:u,children:b}=a,v=(0,r.Z)(a,f),g={direction:c,spacing:l};return(0,d.jsx)(y,(0,o.Z)({as:i,ownerState:g,ref:t},v,{children:u?m(b,u):b}))}));t.Z=b},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},7050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(7294),a=n(6447),i=n(3321),c=n(1031),s=n(431),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=l.length;var p=n(9226),d=n(4855),f=n(7516),m=[{name:"Cal\xe7a Angelical",prefix:"J9BF2"},{name:"Passe de Elite",prefix:"BWJBE"},{name:"Incubadora",prefix:"26N7T"},{name:"Barba do Velho",prefix:"AVXTQ"},{name:"AK Chama do Drag\xe3o",prefix:"6YW3L"},{name:"Bandeir\xe3o",prefix:"W8TAU"},{name:"La Casa de Papel",prefix:"LCDPJ"},{name:"CR7 (Personagem Chrono)",prefix:"ACDBH"},{name:"MP40 Iniciativa Cobra",prefix:"2QEW7"},{name:"Kit Angelical",prefix:"T6XKC"},{name:"100 Dimas BOOYAH",prefix:"A3NMD"},{name:"500 Dimas BOOYAH",prefix:"WZ6DH"},{name:"Dunk Master",prefix:"YWQHD"},{name:"Cart\xe3o Passe de Elite",prefix:"SPEHG"},{name:"Corinthians",prefix:"8TPFQ"},{name:"Incubadora XM8",prefix:"0XM8L"},{name:"Pared\xe3o das Rimas",prefix:"GEDR9"},{name:"M4A1",prefix:"PUXW4"}];var y=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],y=(0,o.useState)(""),b=y[0],v=y[1],g=function(){var e="".concat(m[t].prefix).concat(function(e){for(var t="",n=0;n<e;n++)t+=l.charAt(Math.floor(Math.random()*u));return t}(7)).toUpperCase();v(e)};return(0,o.useEffect)((function(){g()}),[t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(p.Z,{sx:{padding:"30px 0"},children:[(0,r.jsxs)(a.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{mt:2,mb:2},children:[(0,r.jsx)(c.Z,{select:!0,label:"Item Desejado:",value:t,fullWidth:!0,onChange:function(e){var t;n(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value))},children:m.map((function(e,t){return(0,r.jsx)(s.Z,{value:t,children:e.name},t)}))}),(0,r.jsx)(c.Z,{value:b,disabled:!b,label:"Codiguin",multiline:!0,inputProps:{readOnly:!0},fullWidth:!0})]}),(0,r.jsxs)(a.Z,{spacing:2,direction:"row",sx:{mt:2,mb:2},children:[(0,r.jsx)(i.Z,{color:"primary",variant:"contained",onClick:function(){return g()},disableElevation:!0,startIcon:(0,r.jsx)(f.t5J,{}),children:"Gerar Outro"}),(0,r.jsx)(d.CopyToClipboard,{text:b,children:(0,r.jsx)(i.Z,{color:"primary",variant:"outlined",disableElevation:!0,startIcon:(0,r.jsx)(f.LhG,{}),children:"Copiar"})})]})]})})}},4300:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n(7294)),a=c(n(640)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,n,r,c=m(s);function s(){var e;p(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(b(e=c.call.apply(c,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,i=n.onCopy,c=n.children,s=n.options,l=o.default.Children.only(c),u=(0,a.default)(r,s);i&&i(r,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,i),r=o.default.Children.only(t);return o.default.cloneElement(r,l(l({},n),{},{onClick:this.onClick}))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=h,g(h,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,n){"use strict";var r=n(4300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);