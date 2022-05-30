"use strict";(self.webpackChunkmyreactapi=self.webpackChunkmyreactapi||[]).push([[882],{2144:function(e,a,r){r.d(a,{Z:function(){return E}});var i=r(1413),s=r(5987),t=r(1694),n=r.n(t),l=r(2791),o=r(162),d=r(6543),c=r(7472),f=r(184),v=["bsPrefix","className","variant","as"],u=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.variant,d=e.as,c=void 0===d?"img":d,u=(0,s.Z)(e,v),m=(0,o.vE)(r,"card-img");return(0,f.jsx)(c,(0,i.Z)({ref:a,className:n()(l?"".concat(m,"-").concat(l):m,t)},u))}));u.displayName="CardImg";var m=u,b=l.createContext(null);b.displayName="CardHeaderContext";var p=b,x=["bsPrefix","className","as"],y=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,d=e.as,c=void 0===d?"div":d,v=(0,s.Z)(e,x),u=(0,o.vE)(r,"card-header"),m=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,f.jsx)(p.Provider,{value:m,children:(0,f.jsx)(c,(0,i.Z)((0,i.Z)({ref:a},v),{},{className:n()(t,u)}))})}));y.displayName="CardHeader";var N=y,h=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,c.Z)("h5"),g=(0,c.Z)("h6"),j=(0,d.Z)("card-body"),P=(0,d.Z)("card-title",{Component:Z}),w=(0,d.Z)("card-subtitle",{Component:g}),I=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),C=(0,d.Z)("card-footer"),F=(0,d.Z)("card-img-overlay"),R=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.bg,d=e.text,c=e.border,v=e.body,u=e.children,m=e.as,b=void 0===m?"div":m,p=(0,s.Z)(e,h),x=(0,o.vE)(r,"card");return(0,f.jsx)(b,(0,i.Z)((0,i.Z)({ref:a},p),{},{className:n()(t,x,l&&"bg-".concat(l),d&&"text-".concat(d),c&&"border-".concat(c)),children:v?(0,f.jsx)(j,{children:u}):u}))}));R.displayName="Card",R.defaultProps={body:!1};var E=Object.assign(R,{Img:m,Title:P,Subtitle:w,Body:j,Link:I,Text:k,Header:N,Footer:C,ImgOverlay:F})},3855:function(e,a,r){r.d(a,{Z:function(){return ae}});var i=r(1413),s=r(5987),t=r(1694),n=r.n(t),l=r(2007),o=r.n(l),d=r(2791),c=r(184),f=["as","className","type","tooltip"],v={type:o().string,tooltip:o().bool,as:o().elementType},u=d.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,l=e.className,o=e.type,d=void 0===o?"valid":o,v=e.tooltip,u=void 0!==v&&v,m=(0,s.Z)(e,f);return(0,c.jsx)(t,(0,i.Z)((0,i.Z)({},m),{},{ref:a,className:n()(l,"".concat(d,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=v;var m=u,b=d.createContext({}),p=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=d.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,l=e.className,o=e.type,f=void 0===o?"checkbox":o,v=e.isValid,u=void 0!==v&&v,m=e.isInvalid,y=void 0!==m&&m,N=e.as,h=void 0===N?"input":N,Z=(0,s.Z)(e,x),g=(0,d.useContext)(b).controlId;return t=(0,p.vE)(t,"form-check-input"),(0,c.jsx)(h,(0,i.Z)((0,i.Z)({},Z),{},{ref:a,type:f,id:r||g,className:n()(l,t,u&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var N=y,h=["bsPrefix","className","htmlFor"],Z=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.htmlFor,o=(0,s.Z)(e,h),f=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-check-label"),(0,c.jsx)("label",(0,i.Z)((0,i.Z)({},o),{},{ref:a,htmlFor:l||f,className:n()(t,r)}))}));Z.displayName="FormCheckLabel";var g=Z;var j=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=d.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,f=void 0!==o&&o,v=e.disabled,u=void 0!==v&&v,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,Z=void 0!==h&&h,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,k=e.feedbackType,C=e.className,F=e.style,R=e.title,E=void 0===R?"":R,O=e.type,L=void 0===O?"checkbox":O,z=e.label,T=e.children,S=e.as,V=void 0===S?"input":S,D=(0,s.Z)(e,j);t=(0,p.vE)(t,"form-check"),l=(0,p.vE)(l,"form-switch");var H=(0,d.useContext)(b).controlId,K=(0,d.useMemo)((function(){return{controlId:r||H}}),[H,r]),M=!T&&null!=z&&!1!==z||function(e,a){return d.Children.toArray(e).some((function(e){return d.isValidElement(e)&&e.type===a}))}(T,g),B=(0,c.jsx)(N,(0,i.Z)((0,i.Z)({},D),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:y,isInvalid:Z,disabled:u,as:V}));return(0,c.jsx)(b.Provider,{value:K,children:(0,c.jsx)("div",{style:F,className:n()(C,M&&t,f&&"".concat(t,"-inline"),"switch"===L&&l),children:T||(0,c.jsxs)(c.Fragment,{children:[B,M&&(0,c.jsx)(g,{title:E,children:z}),I&&(0,c.jsx)(m,{type:k,tooltip:w,children:I})]})})})}));P.displayName="FormCheck";var w=Object.assign(P,{Input:N,Label:g}),I=r(4942),k=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=d.forwardRef((function(e,a){var r,t,l=e.bsPrefix,o=e.type,f=e.size,v=e.htmlSize,u=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,Z=e.plaintext,g=e.readOnly,j=e.as,P=void 0===j?"input":j,w=(0,s.Z)(e,k),C=(0,d.useContext)(b).controlId;(l=(0,p.vE)(l,"form-control"),Z)?r=(0,I.Z)({},"".concat(l,"-plaintext"),!0):(t={},(0,I.Z)(t,l,!0),(0,I.Z)(t,"".concat(l,"-").concat(f),f),r=t);return(0,c.jsx)(P,(0,i.Z)((0,i.Z)({},w),{},{type:o,size:v,ref:a,readOnly:g,id:u||C,className:n()(m,r,y&&"is-valid",h&&"is-invalid","color"===o&&"".concat(l,"-color"))}))}));C.displayName="FormControl";var F=Object.assign(C,{Feedback:m}),R=(0,r(6543).Z)("form-floating"),E=["controlId","as"],O=d.forwardRef((function(e,a){var r=e.controlId,t=e.as,n=void 0===t?"div":t,l=(0,s.Z)(e,E),o=(0,d.useMemo)((function(){return{controlId:r}}),[r]);return(0,c.jsx)(b.Provider,{value:o,children:(0,c.jsx)(n,(0,i.Z)((0,i.Z)({},l),{},{ref:a}))})}));O.displayName="FormGroup";var L=O,z=r(2677),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],S=d.forwardRef((function(e,a){var r=e.as,t=void 0===r?"label":r,l=e.bsPrefix,o=e.column,f=e.visuallyHidden,v=e.className,u=e.htmlFor,m=(0,s.Z)(e,T),x=(0,d.useContext)(b).controlId;l=(0,p.vE)(l,"form-label");var y="col-form-label";"string"===typeof o&&(y="".concat(y," ").concat(y,"-").concat(o));var N=n()(v,l,f&&"visually-hidden",o&&y);return u=u||x,o?(0,c.jsx)(z.Z,(0,i.Z)({ref:a,as:"label",className:N,htmlFor:u},m)):(0,c.jsx)(t,(0,i.Z)({ref:a,className:N,htmlFor:u},m))}));S.displayName="FormLabel",S.defaultProps={column:!1,visuallyHidden:!1};var V=S,D=["bsPrefix","className","id"],H=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.id,o=(0,s.Z)(e,D),f=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-range"),(0,c.jsx)("input",(0,i.Z)((0,i.Z)({},o),{},{type:"range",ref:a,className:n()(t,r),id:l||f}))}));H.displayName="FormRange";var K=H,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,l=e.htmlSize,o=e.className,f=e.isValid,v=void 0!==f&&f,u=e.isInvalid,m=void 0!==u&&u,x=e.id,y=(0,s.Z)(e,M),N=(0,d.useContext)(b).controlId;return r=(0,p.vE)(r,"form-select"),(0,c.jsx)("select",(0,i.Z)((0,i.Z)({},y),{},{size:l,ref:a,className:n()(o,r,t&&"".concat(r,"-").concat(t),v&&"is-valid",m&&"is-invalid"),id:x||N}))}));B.displayName="FormSelect";var A=B,G=["bsPrefix","className","as","muted"],W=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.as,o=void 0===l?"small":l,d=e.muted,f=(0,s.Z)(e,G);return r=(0,p.vE)(r,"form-text"),(0,c.jsx)(o,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:n()(t,r,d&&"text-muted")}))}));W.displayName="FormText";var _=W,q=d.forwardRef((function(e,a){return(0,c.jsx)(w,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var J=Object.assign(q,{Input:w.Input,Label:w.Label}),Q=["bsPrefix","className","children","controlId","label"],U=d.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.children,o=e.controlId,d=e.label,f=(0,s.Z)(e,Q);return r=(0,p.vE)(r,"form-floating"),(0,c.jsxs)(L,(0,i.Z)((0,i.Z)({ref:a,className:n()(t,r),controlId:o},f),{},{children:[l,(0,c.jsx)("label",{htmlFor:o,children:d})]}))}));U.displayName="FloatingLabel";var X=U,Y=["className","validated","as"],$={_ref:o().any,validated:o().bool,as:o().elementType},ee=d.forwardRef((function(e,a){var r=e.className,t=e.validated,l=e.as,o=void 0===l?"form":l,d=(0,s.Z)(e,Y);return(0,c.jsx)(o,(0,i.Z)((0,i.Z)({},d),{},{ref:a,className:n()(r,t&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:L,Control:F,Floating:R,Check:w,Switch:J,Label:V,Text:_,Range:K,Select:A,FloatingLabel:X})},9341:function(e,a,r){r.d(a,{Z:function(){return E}});var i=r(1413),s=r(5987),t=r(1694),n=r.n(t),l=r(2791),o=r(162),d=r(885);r(7904);var c=r(9007);r(5746),r(2803);var f="undefined"!==typeof r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product;"undefined"!==typeof document||f?l.useLayoutEffect:l.useEffect,new WeakMap;var v=r(184),u=["as","disabled"];function m(e){var a=e.tagName,r=e.disabled,i=e.href,s=e.target,t=e.rel,n=e.onClick,l=e.tabIndex,o=void 0===l?0:l,d=e.type;a||(a=null!=i||null!=s||null!=t?"a":"button");var c={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},c];var f=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(i))&&e.preventDefault(),r?e.stopPropagation():null==n||n(e)};return"a"===a&&(i||(i="#"),r&&(i=void 0)),[{role:"button",disabled:void 0,tabIndex:r?void 0:o,href:i,target:"a"===a?s:void 0,"aria-disabled":r||void 0,rel:"a"===a?t:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},c]}var b=l.forwardRef((function(e,a){var r=e.as,i=e.disabled,s=function(e,a){if(null==e)return{};var r,i,s={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,u),t=m(Object.assign({tagName:r,disabled:i},s)),n=(0,d.Z)(t,2),l=n[0],o=n[1].tagName;return(0,v.jsx)(o,Object.assign({},s,l,{ref:a}))}));b.displayName="Button";var p=["onKeyDown"];var x=l.forwardRef((function(e,a){var r,i=e.onKeyDown,s=function(e,a){if(null==e)return{};var r,i,s={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,p),t=m(Object.assign({tagName:"a"},s)),n=(0,d.Z)(t,1)[0],l=(0,c.Z)((function(e){n.onKeyDown(e),null==i||i(e)}));return((r=s.href)&&"#"!==r.trim()||s.role)&&"button"!==s.role?(0,v.jsx)("a",Object.assign({ref:a},s,{onKeyDown:i})):(0,v.jsx)("a",Object.assign({ref:a},s,n,{onKeyDown:l}))}));x.displayName="Anchor";var y=x,N=["active","disabled","className","style","activeLabel","children"],h=["children"],Z=l.forwardRef((function(e,a){var r=e.active,t=e.disabled,l=e.className,o=e.style,d=e.activeLabel,c=e.children,f=(0,s.Z)(e,N),u=r||t?"span":y;return(0,v.jsx)("li",{ref:a,style:o,className:n()(l,"page-item",{active:r,disabled:t}),children:(0,v.jsxs)(u,(0,i.Z)((0,i.Z)({className:"page-link",disabled:t},f),{},{children:[c,r&&d&&(0,v.jsx)("span",{className:"visually-hidden",children:d})]}))})}));Z.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},Z.displayName="PageItem";var g=Z;function j(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;function t(e){var t=e.children,n=(0,s.Z)(e,h);return(0,v.jsxs)(Z,(0,i.Z)((0,i.Z)({},n),{},{children:[(0,v.jsx)("span",{"aria-hidden":"true",children:t||a}),(0,v.jsx)("span",{className:"visually-hidden",children:r})]}))}return t.displayName=e,t}var P=j("First","\xab"),w=j("Prev","\u2039","Previous"),I=j("Ellipsis","\u2026","More"),k=j("Next","\u203a"),C=j("Last","\xbb"),F=["bsPrefix","className","size"],R=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.size,d=(0,s.Z)(e,F),c=(0,o.vE)(r,"pagination");return(0,v.jsx)("ul",(0,i.Z)((0,i.Z)({ref:a},d),{},{className:n()(t,c,l&&"".concat(c,"-").concat(l))}))}));R.displayName="Pagination";var E=Object.assign(R,{First:P,Prev:w,Ellipsis:I,Item:g,Next:k,Last:C})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=882.00e5f356.chunk.js.map