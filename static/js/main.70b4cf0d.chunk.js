(this["webpackJsonpbadge-maker"]=this["webpackJsonpbadge-maker"]||[]).push([[0],{11:function(e,n,o){"use strict";o.r(n);var t=o(1),r=o.n(t),c=o(4),a=o.n(c),s=o(2),i=(o(9),o(0)),b=function(e){var n=e.name,o=e.onType,t=l(n);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("label",{htmlFor:n,children:t}),Object(i.jsx)("input",{id:"".concat(n,"-field"),type:"text",name:n,placeholder:"Badge ".concat(t),onInput:function(e){o(e.target.value)}})]})},l=function(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")};b.defaultProps={name:"Text Field"};var j=function(e){var n=e.index,o=e.onChangeColorCombo;return Object(i.jsx)("button",{onClick:function(){o(n)},children:n+1})},d=function(e){var n=e.colorCombos,o=e.onChangeColorCombo;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("label",{children:"Color"}),Object(i.jsx)("br",{}),n.map((function(e,n){return Object(i.jsx)(j,{index:n,onChangeColorCombo:o},n)}))]})},u=function(e){var n=e.colorCombos,o=e.onChangeRecipient,t=e.onChangeReason,r=e.onChangeIcon,c=e.onChangeColorCombo;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(i.jsx)(b,{name:"recipient",onType:o}),Object(i.jsx)(b,{name:"reason",onType:t}),Object(i.jsx)(b,{name:"icon",onType:r}),Object(i.jsx)("a",{href:"https://fontawesome.com/cheatsheet",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("small",{children:"Availible Icons"})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{colorCombos:n,onChangeColorCombo:c})]})},f=function(e){var n=e.icon;return Object(i.jsxs)("div",{className:"fa-stack fa-4x badge",children:[Object(i.jsx)("i",{className:"fa fa-circle fa-stack-2x badge-background"}),Object(i.jsx)("i",{className:"fa fa-circle-o fa-stack-2x badge-foreground"}),Object(i.jsx)("i",{id:"icon",className:"fas fa-".concat(n.toLowerCase()||"star"," fa-stack-1x badge-foreground")})]})},g=function(e){var n=e.recipient,o=e.reason,t=e.icon;return Object(i.jsxs)("div",{id:"badge-area",children:[Object(i.jsx)("h1",{children:n}),Object(i.jsx)("p",{children:"has earned"}),Object(i.jsx)(f,{icon:t}),Object(i.jsxs)("h2",{children:['"',o,'"']})]})};g.defaultProps={recipient:"Your Friend",reason:"This Really Cool Badge",icon:"star"};var h=function(){return Object(i.jsxs)("footer",{children:[Object(i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Colin Williams"]}),Object(i.jsxs)("p",{children:["Icons by"," ",Object(i.jsx)("a",{href:"https://fontawesome.com/",target:"_blank",rel:"noreferrer",children:"Font Awesome"})]})]})},x=function(){var e=document.documentElement,n=[{foreground:"yellowgreen",background:"blue"},{foreground:"red",background:"yellow"},{foreground:"black",background:"white"},{foreground:"white",background:"purple"}],o=Object(t.useState)("Your Friend"),r=Object(s.a)(o,2),c=r[0],a=r[1],b=Object(t.useState)("This Really Cool Badge"),l=Object(s.a)(b,2),j=l[0],d=l[1],f=Object(t.useState)("star"),x=Object(s.a)(f,2),O=x[0],m=x[1],C=function(o){var t=n[o];e.style.setProperty("--badge-foreground-color",t.foreground),e.style.setProperty("--badge-background-color",t.background)};return Object(t.useEffect)((function(){C(0)})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Badge Maker"}),Object(i.jsx)(u,{colorCombos:n,onChangeRecipient:a,onChangeReason:d,onChangeIcon:m,onChangeColorCombo:C}),Object(i.jsx)(g,{recipient:c,reason:j,icon:O}),Object(i.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;o(e),t(e),r(e),c(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),O()},9:function(e,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.70b4cf0d.chunk.js.map