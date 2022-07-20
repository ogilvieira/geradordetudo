(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{480:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r=o(3366),n=o(7462),a=o(7294),i=o(6010),c=o(4780),l=o(9068),s=o(5861),d=o(8216),u=o(948),p=o(1657),f=o(4867);function m(e){return(0,f.Z)("MuiFormControlLabel",e)}var b=(0,o(1588).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),h=o(5704),y=o(5893);const g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],v=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${b.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(o.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${b.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${b.label}`]:{[`&.${b.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})));var w=a.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:u,componentsProps:f={},control:b,disabled:w,disableTypography:k,label:Z,labelPlacement:C="end"}=o,x=(0,r.Z)(o,g),S=(0,l.Z)();let P=w;"undefined"===typeof P&&"undefined"!==typeof b.props.disabled&&(P=b.props.disabled),"undefined"===typeof P&&S&&(P=S.disabled);const R={disabled:P};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof b.props[e]&&"undefined"!==typeof o[e]&&(R[e]=o[e])}));const O=(0,h.Z)({props:o,muiFormControl:S,states:["error"]}),$=(0,n.Z)({},o,{disabled:P,labelPlacement:C,error:O.error}),j=(e=>{const{classes:t,disabled:o,labelPlacement:r,error:n}=e,a={root:["root",o&&"disabled",`labelPlacement${(0,d.Z)(r)}`,n&&"error"],label:["label",o&&"disabled"]};return(0,c.Z)(a,m,t)})($);let D=Z;return null==D||D.type===s.Z||k||(D=(0,y.jsx)(s.Z,(0,n.Z)({component:"span",className:j.label},f.typography,{children:D}))),(0,y.jsxs)(v,(0,n.Z)({className:(0,i.Z)(j.root,u),ownerState:$,ref:t},x,{children:[a.cloneElement(b,R),D]}))}))},3457:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var r=o(3366),n=o(7462),a=o(7294),i=o(6010),c=o(4780),l=o(948),s=o(1657),d=o(4867);function u(e){return(0,d.Z)("MuiFormGroup",e)}(0,o(1588).Z)("MuiFormGroup",["root","row","error"]);var p=o(9068),f=o(5704),m=o(5893);const b=["className","row"],h=(0,l.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})((({ownerState:e})=>(0,n.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var y=a.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiFormGroup"}),{className:a,row:l=!1}=o,d=(0,r.Z)(o,b),y=(0,p.Z)(),g=(0,f.Z)({props:o,muiFormControl:y,states:["error"]}),v=(0,n.Z)({},o,{row:l,error:g.error}),w=(e=>{const{classes:t,row:o,error:r}=e,n={root:["root",o&&"row",r&&"error"]};return(0,c.Z)(n,u,t)})(v);return(0,m.jsx)(h,(0,n.Z)({className:(0,i.Z)(w.root,a),ownerState:v,ref:t},d))}))},6447:function(e,t,o){"use strict";var r=o(3366),n=o(7462),a=o(7294),i=o(5408),c=o(8700),l=o(9707),s=o(9766),d=o(948),u=o(1657),p=o(5893);const f=["component","direction","spacing","divider","children"];function m(e,t){const o=a.Children.toArray(e).filter(Boolean);return o.reduce(((e,r,n)=>(e.push(r),n<o.length-1&&e.push(a.cloneElement(t,{key:`separator-${n}`})),e)),[])}const b=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let o=(0,n.Z)({display:"flex"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,c.hB)(t),n=Object.keys(t.breakpoints.values).reduce(((t,o)=>(("object"===typeof e.spacing&&null!=e.spacing[o]||"object"===typeof e.direction&&null!=e.direction[o])&&(t[o]=!0),t)),{}),a=(0,i.P$)({values:e.direction,base:n}),l=(0,i.P$)({values:e.spacing,base:n}),d=(t,o)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=o?a[o]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,c.NA)(r,t)}};var n};o=(0,s.Z)(o,(0,i.k9)({theme:t},l,d))}return o})),h=a.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiStack"}),a=(0,l.Z)(o),{component:i="div",direction:c="column",spacing:s=0,divider:d,children:h}=a,y=(0,r.Z)(a,f),g={direction:c,spacing:s};return(0,p.jsx)(b,(0,n.Z)({as:i,ownerState:g,ref:t},y,{children:d?m(h,d):h}))}));t.Z=h},9653:function(e,t,o){"use strict";o.d(t,{Z:function(){return j}});var r=o(3366),n=o(7462),a=o(7294),i=o(6010),c=o(4780),l=o(1796),s=o(8216),d=o(948),u=o(2627),p=o(9068),f=o(7739),m=o(4867),b=o(1588);function h(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var y=o(5893);const g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],v=(0,d.ZP)(f.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),w=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var k=a.forwardRef((function(e,t){const{autoFocus:o,checked:a,checkedIcon:l,className:d,defaultChecked:f,disabled:m,disableFocusRipple:b=!1,edge:k=!1,icon:Z,id:C,inputProps:x,inputRef:S,name:P,onBlur:R,onChange:O,onFocus:$,readOnly:j,required:D,tabIndex:E,type:B,value:F}=e,N=(0,r.Z)(e,g),[M,T]=(0,u.Z)({controlled:a,default:Boolean(f),name:"SwitchBase",state:"checked"}),z=(0,p.Z)();let _=m;z&&"undefined"===typeof _&&(_=z.disabled);const I="checkbox"===B||"radio"===B,A=(0,n.Z)({},e,{checked:M,disabled:_,disableFocusRipple:b,edge:k}),L=(e=>{const{classes:t,checked:o,disabled:r,edge:n}=e,a={root:["root",o&&"checked",r&&"disabled",n&&`edge${(0,s.Z)(n)}`],input:["input"]};return(0,c.Z)(a,h,t)})(A);return(0,y.jsxs)(v,(0,n.Z)({component:"span",className:(0,i.Z)(L.root,d),centerRipple:!0,focusRipple:!b,disabled:_,tabIndex:null,role:void 0,onFocus:e=>{$&&$(e),z&&z.onFocus&&z.onFocus(e)},onBlur:e=>{R&&R(e),z&&z.onBlur&&z.onBlur(e)},ownerState:A,ref:t},N,{children:[(0,y.jsx)(w,(0,n.Z)({autoFocus:o,checked:a,defaultChecked:f,className:L.input,disabled:_,id:I&&C,name:P,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;T(t),O&&O(e,t)},readOnly:j,ref:S,required:D,ownerState:A,tabIndex:E,type:B},"checkbox"===B&&void 0===F?{}:{value:F},x)),M?l:Z]}))})),Z=o(1657);function C(e){return(0,m.Z)("MuiSwitch",e)}var x=(0,b.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);const S=["className","color","edge","size","sx"],P=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${(0,s.Z)(o.edge)}`],t[`size${(0,s.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${x.thumb}`]:{width:16,height:16},[`& .${x.switchBase}`]:{padding:4,[`&.${x.checked}`]:{transform:"translateX(16px)"}}}))),R=(0,d.ZP)(k,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${x.input}`]:t.input},"default"!==o.color&&t[`color${(0,s.Z)(o.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${x.checked}`]:{transform:"translateX(20px)"},[`&.${x.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${x.checked} + .${x.track}`]:{opacity:.5},[`&.${x.disabled} + .${x.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${x.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,n.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${x.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,l.$n)(e.palette[t.color].main,.62):(0,l._j)(e.palette[t.color].main,.55)}`}},[`&.${x.checked} + .${x.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),O=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),$=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})));var j=a.forwardRef((function(e,t){const o=(0,Z.Z)({props:e,name:"MuiSwitch"}),{className:a,color:l="primary",edge:d=!1,size:u="medium",sx:p}=o,f=(0,r.Z)(o,S),m=(0,n.Z)({},o,{color:l,edge:d,size:u}),b=(e=>{const{classes:t,edge:o,size:r,color:a,checked:i,disabled:l}=e,d={root:["root",o&&`edge${(0,s.Z)(o)}`,`size${(0,s.Z)(r)}`],switchBase:["switchBase",`color${(0,s.Z)(a)}`,i&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,c.Z)(d,C,t);return(0,n.Z)({},t,u)})(m),h=(0,y.jsx)($,{className:b.thumb,ownerState:m});return(0,y.jsxs)(P,{className:(0,i.Z)(b.root,a),sx:p,ownerState:m,children:[(0,y.jsx)(R,(0,n.Z)({type:"checkbox",icon:h,checkedIcon:h,ref:t,ownerState:m},f,{classes:(0,n.Z)({},b,{root:b.switchBase})})),(0,y.jsx)(O,{className:b.track,ownerState:m})]})}))},640:function(e,t,o){"use strict";var r=o(1742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,i,c,l,s,d=!1;t||(t={}),o=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){o&&console.error("unable to copy using execCommand: ",u),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},4300:function(e,t,o){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=c(o(7294)),a=c(o(640)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){g(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=y(e);if(t){var n=y(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return b(this,o)}}function b(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,o,r,c=m(l);function l(){var e;u(this,l);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return g(h(e=c.call.apply(c,[this].concat(o))),"onClick",(function(t){var o=e.props,r=o.text,i=o.onCopy,c=o.children,l=o.options,s=n.default.Children.only(c),d=(0,a.default)(r,l);i&&i(r,d),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=l,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=d(e,i),r=n.default.Children.only(t);return n.default.cloneElement(r,s(s({},o),{},{onClick:this.onClick}))}}])&&p(t.prototype,o),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default.PureComponent);t.CopyToClipboard=v,g(v,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,o){"use strict";var r=o(4300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);