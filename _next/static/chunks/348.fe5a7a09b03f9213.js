"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{5348:function(r,n,t){t.r(n);var a=t(5893),e=t(7294),i=t(3457),c=t(480),o=t(9653),s=t(6447),u=t(3321),l=t(1031),d=t(9226),h=t(1007),f=t(4855),p=t(7516),v=t(1664),x=t.n(v);n.default=function(){var r=(0,e.useState)(!0),n=r[0],t=r[1],v=(0,e.useState)(""),j=v[0],g=v[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(d.Z,{sx:{maxWidth:400,margin:"0 auto",padding:"30px 0"},children:[(0,a.jsx)(l.Z,{value:n?(0,h.iT)(j):(0,h.Gm)(j),fullWidth:!0,InputProps:{readOnly:!0}}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(c.Z,{control:(0,a.jsx)(o.Z,{checked:n,onChange:function(r){t(null===r||void 0===r?void 0:r.target.checked)}}),label:"Com M\xe1scara"})}),(0,a.jsxs)(s.Z,{spacing:2,direction:"row",sx:{mt:2,mb:2},children:[(0,a.jsx)(u.Z,{color:"primary",variant:"contained",onClick:function(){return g((0,h.ZP)())},disableElevation:!0,startIcon:(0,a.jsx)(p.t5J,{}),children:"Gerar cnpj"}),(0,a.jsx)(f.CopyToClipboard,{text:n?(0,h.iT)(j):(0,h.Gm)(j),children:(0,a.jsx)(u.Z,{color:"primary",variant:"outlined",disabled:!j,disableElevation:!0,startIcon:(0,a.jsx)(p.LhG,{}),children:"Copiar"})})]}),(0,a.jsx)(x(),{href:"/validar-cnpj?cnpj=".concat(j),passHref:!0,children:(0,a.jsx)(u.Z,{color:"success",disabled:!j,disableElevation:!0,startIcon:(0,a.jsx)(p.wRn,{}),children:"Validar"})})]})})}},1007:function(r,n,t){function a(){for(var r=new Array,n=0;n<8;n++)r.push(Math.floor(9*Math.random()));for(var t=0;t<3;t++)r.push(0);return r.push(1),r}function e(r){var n,t=(n=function(r){for(var n=0,t=9,a=r.length-1;a>=0;a--)n+=r[a]*t--,t<2&&(t=9);return n}(r),n%11);return t>=10?0:t}t.d(n,{Gm:function(){return o},KN:function(){return i},iT:function(){return c}});var i=function(r){if(14!=(r=o(r)).length)return!1;if("00000000000000"==r||"11111111111111"==r||"22222222222222"==r||"33333333333333"==r||"44444444444444"==r||"55555555555555"==r||"66666666666666"==r||"77777777777777"==r||"88888888888888"==r||"99999999999999"==r)return!1;for(var n=r.length-2,t=r.substring(0,n),a=r.substring(n),e=n-7,i=0,c=n;c>=1;c--)i+=parseInt(t.charAt(n-c))*e--,e<2&&(e=9);var s=i%11<2?0:11-i%11;if(s!==parseInt(a.charAt(0)))return!1;n+=1,t=r.substring(0,n),i=0,e=n-7;for(var u=n;u>=1;u--)i+=parseInt(t.charAt(n-u))*e--,e<2&&(e=9);return(s=i%11<2?0:11-i%11)===parseInt(a.charAt(1))},c=function(r){return r=(""+r).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")},o=function(r){return r.replace(/\D/g,"")};n.ZP=function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=a();n.push(e(n));var t="".concat(n.join("")).concat(e(n));return r?c(t):t}}}]);