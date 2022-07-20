(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9092)}])},9092:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return Y},default:function(){return ee}});var t=r(5893),o=r(9520),i=r(9226),a=r(3795),s=r(1664),c=r.n(s),d=r(5675),u=r.n(d),p=r(870),l=r(7462),m=r(3366),f=r(7294),g=r(6010),h=r(4780),x=r(948),w=r(1657),v=r(5113),Z=r(4867),b=r(1588);function S(e){return(0,Z.Z)("MuiCard",e)}(0,b.Z)("MuiCard",["root"]);const $=["className","raised"],M=(0,x.ZP)(v.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var k=f.forwardRef((function(e,n){const r=(0,w.Z)({props:e,name:"MuiCard"}),{className:o,raised:i=!1}=r,a=(0,m.Z)(r,$),s=(0,l.Z)({},r,{raised:i}),c=(e=>{const{classes:n}=e;return(0,h.Z)({root:["root"]},S,n)})(s);return(0,t.jsx)(M,(0,l.Z)({className:(0,g.Z)(c.root,o),elevation:i?8:void 0,ref:n,ownerState:s},a))}));function j(e){return(0,Z.Z)("MuiCardContent",e)}(0,b.Z)("MuiCardContent",["root"]);const C=["className","component"],N=(0,x.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var y=f.forwardRef((function(e,n){const r=(0,w.Z)({props:e,name:"MuiCardContent"}),{className:o,component:i="div"}=r,a=(0,m.Z)(r,C),s=(0,l.Z)({},r,{component:i}),c=(e=>{const{classes:n}=e;return(0,h.Z)({root:["root"]},j,n)})(s);return(0,t.jsx)(N,(0,l.Z)({as:i,className:(0,g.Z)(c.root,o),ownerState:s,ref:n},a))}));function W(e){return(0,Z.Z)("MuiCardMedia",e)}(0,b.Z)("MuiCardMedia",["root","media","img"]);const R=["children","className","component","image","src","style"],_=(0,x.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e,{isMediaComponent:t,isImageComponent:o}=r;return[n.root,t&&n.media,o&&n.img]}})((({ownerState:e})=>(0,l.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),E=["video","audio","picture","iframe","img"],P=["picture","img"];var z=f.forwardRef((function(e,n){const r=(0,w.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:i,component:a="div",image:s,src:c,style:d}=r,u=(0,m.Z)(r,R),p=-1!==E.indexOf(a),f=!p&&s?(0,l.Z)({backgroundImage:`url("${s}")`},d):d,x=(0,l.Z)({},r,{component:a,isMediaComponent:p,isImageComponent:-1!==P.indexOf(a)}),v=(e=>{const{classes:n,isMediaComponent:r,isImageComponent:t}=e,o={root:["root",r&&"media",t&&"img"]};return(0,h.Z)(o,W,n)})(x);return(0,t.jsx)(_,(0,l.Z)({className:(0,g.Z)(v.root,i),as:a,role:!p&&s?"img":void 0,ref:n,style:f,ownerState:x,src:p?s||c:void 0},u,{children:o}))})),G=r(5861),B=r(5408),I=r(9707),O=r(2734);var F=f.createContext();function T(e){return(0,Z.Z)("MuiGrid",e)}const L=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var X=(0,b.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...L.map((e=>`grid-xs-${e}`)),...L.map((e=>`grid-sm-${e}`)),...L.map((e=>`grid-md-${e}`)),...L.map((e=>`grid-lg-${e}`)),...L.map((e=>`grid-xl-${e}`))]);const D=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function H(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}const q=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e,{container:t,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:d}=r;let u=[];t&&(u=function(e,n,r={}){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]];const t=[];return n.forEach((n=>{const o=e[n];Number(o)>0&&t.push(r[`spacing-${n}-${String(o)}`])})),t}(a,d,n));const p=[];return d.forEach((e=>{const t=r[e];t&&p.push(n[`grid-${e}-${String(t)}`])})),[n.root,t&&n.container,i&&n.item,c&&n.zeroMinWidth,...u,"row"!==o&&n[`direction-xs-${String(o)}`],"wrap"!==s&&n[`wrap-xs-${String(s)}`],...p]}})((({ownerState:e})=>(0,l.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const r=(0,B.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,B.k9)({theme:e},r,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${X.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:r,rowSpacing:t}=n;let o={};if(r&&0!==t){const n=(0,B.P$)({values:t,breakpoints:e.breakpoints.values});o=(0,B.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{marginTop:`-${H(r)}`,[`& > .${X.item}`]:{paddingTop:H(r)}}:{}}))}return o}),(function({theme:e,ownerState:n}){const{container:r,columnSpacing:t}=n;let o={};if(r&&0!==t){const n=(0,B.P$)({values:t,breakpoints:e.breakpoints.values});o=(0,B.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{width:`calc(100% + ${H(r)})`,marginLeft:`-${H(r)}`,[`& > .${X.item}`]:{paddingLeft:H(r)}}:{}}))}return o}),(function({theme:e,ownerState:n}){let r;return e.breakpoints.keys.reduce(((t,o)=>{let i={};if(n[o]&&(r=n[o]),!r)return t;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=(0,B.P$)({values:n.columns,breakpoints:e.breakpoints.values}),s="object"===typeof a?a[o]:a;if(void 0===s||null===s)return t;const c=Math.round(r/s*1e8)/1e6+"%";let d={};if(n.container&&n.item&&0!==n.columnSpacing){const r=e.spacing(n.columnSpacing);if("0px"!==r){const e=`calc(${c} + ${H(r)})`;d={flexBasis:e,maxWidth:e}}}i=(0,l.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}return 0===e.breakpoints.values[o]?Object.assign(t,i):t[e.breakpoints.up(o)]=i,t}),{})}));const A=e=>{const{classes:n,container:r,direction:t,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let d=[];r&&(d=function(e,n){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const r=[];return n.forEach((n=>{const t=e[n];if(Number(t)>0){const e=`spacing-${n}-${String(t)}`;r.push(e)}})),r}(i,c));const u=[];c.forEach((n=>{const r=e[n];r&&u.push(`grid-${n}-${String(r)}`)}));const p={root:["root",r&&"container",o&&"item",s&&"zeroMinWidth",...d,"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,h.Z)(p,T,n)},J=f.forwardRef((function(e,n){const r=(0,w.Z)({props:e,name:"MuiGrid"}),{breakpoints:o}=(0,O.Z)(),i=(0,I.Z)(r),{className:a,columns:s,columnSpacing:c,component:d="div",container:u=!1,direction:p="row",item:h=!1,rowSpacing:x,spacing:v=0,wrap:Z="wrap",zeroMinWidth:b=!1}=i,S=(0,m.Z)(i,D),$=x||v,M=c||v,k=f.useContext(F),j=u?s||12:k,C={},N=(0,l.Z)({},S);o.keys.forEach((e=>{null!=S[e]&&(C[e]=S[e],delete N[e])}));const y=(0,l.Z)({},i,{columns:j,container:u,direction:p,item:h,rowSpacing:$,columnSpacing:M,wrap:Z,zeroMinWidth:b,spacing:v},C,{breakpoints:o.keys}),W=A(y);return(0,t.jsx)(F.Provider,{value:j,children:(0,t.jsx)(q,(0,l.Z)({ownerState:y,className:(0,g.Z)(W.root,a),as:d,ref:n},N))})}));var K=J,Q=r(5568),U=r(9008),V=r.n(U),Y=!0,ee=function(e){var n=e.subpages;V();var r=(0,f.useState)(""),s=r[0],d=r[1],l=(0,f.useState)(n),m=l[0],g=l[1];return(0,f.useEffect)((function(){var e=n.filter((function(e){return!!e.title.match(new RegExp(s,"gi"))||!!e.description.match(new RegExp(s,"gi"))}));g(e)}),[s,n]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Z,{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h2",{children:"Ferramentas do Gerador de Tudo"}),(0,t.jsx)("p",{children:"Ferramentas online gratuitas, geradores de cpf, conta banc\xe1ria, pessoas, cnpj, cep, rg, validadores, encoders e muitas outras \xfateis para programadores."}),(0,t.jsxs)(K,{container:!0,spacing:2,children:[(0,t.jsx)(K,{item:!0,xs:12,children:(0,t.jsx)(p.Z,{type:"search",fullWidth:!0,label:"Buscar",color:"secondary",onChange:function(e){d(e.target.value)}})}),m&&m.map((function(e){return(0,t.jsx)(K,{item:!0,xs:12,md:4,children:(0,t.jsx)(c(),{href:"/".concat(e.slug),passHref:!0,children:(0,t.jsx)(a.Z,{color:"primary",underline:"none",children:(0,t.jsx)(k,{children:(0,t.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,t.jsx)(z,{sx:{width:100,height:100},children:(0,t.jsx)(u(),{src:"/tool/".concat(e.slug,".jpg"),alt:e.title,width:"100",height:"100"})}),(0,t.jsx)(y,{sx:{width:"calc(100% - 100px)",display:"flex",alignItems:"center",pb:0},children:(0,t.jsx)(G.Z,{variant:"body1",component:"h2",children:e.title})})]})})})})},"tool-".concat(e.slug))})),!m.length&&(0,t.jsx)(K,{item:!0,xs:12,children:(0,t.jsx)(Q.Z,{severity:"warning",sx:{mt:2},children:"Nenhum item encontrado..."})})]})]})})})}}},function(e){e.O(0,[870,638,383,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);