(this.webpackJsonpgoogle=this.webpackJsonpgoogle||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(28),o=c.n(n),r=(c(35),c(29)),i=c(2),l=(c(36),c(9)),h=c(10),u=c(1),j=function(e){var t=s.a.useState(""),c=Object(l.a)(t,2),a=c[0],n=c[1];return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{className:"home__container",children:[Object(u.jsx)("div",{className:"home__logo",children:Object(u.jsx)("img",{src:"/images/googleLogo.png",alt:"Logo"})}),Object(u.jsxs)("form",{className:"home__form",onSubmit:function(t){e.history.push({pathname:"/search",state:a})},children:[Object(u.jsx)("input",{type:"text",className:"home__input",onChange:function(e){return n(e.target.value)},value:a,required:!0}),Object(u.jsx)("div",{className:"home__group",children:Object(u.jsx)("input",{type:"submit",className:"home__btn",value:"Google Search"})}),Object(u.jsx)(h.b,{className:"search__icon"}),Object(u.jsx)(h.a,{className:"microphone"})]})]})})},m=c(12),b=c.n(m),p=c(15),d="AIzaSyCmnrq1gqBmLyq1BldMfpDpez2Lkcl8I9k",f="b7bf9b8636c6abef1",x=c(16),O=c.n(x),g=function(e){var t=e.results,c=e.info;return Object(u.jsxs)("div",{className:"show",children:[Object(u.jsx)("div",{className:"show__info",children:c?"Total results: ".concat(c.totalResults):""}),t.length>0?t.map((function(e){return Object(u.jsxs)("div",{className:"show__details",children:[Object(u.jsx)("div",{className:"show__link",children:Object(u.jsx)("a",{href:e.displayLink,children:e.displayLink})}),Object(u.jsx)("div",{className:"show__title",children:Object(u.jsx)("a",{href:e.link,children:e.title})}),Object(u.jsx)("div",{className:"show__description",children:Object(u.jsx)("p",{children:e.snippet})})]})})):""]})},v=function(e){var t=s.a.useState(e.location.state?e.location.state:""),c=Object(l.a)(t,2),a=c[0],n=c[1],o=s.a.useState([]),r=Object(l.a)(o,2),i=r[0],j=r[1],m=s.a.useState(""),x=Object(l.a)(m,2),v=x[0],_=x[1],N=function(){var e=Object(p.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(d,"&cx=").concat(f,"&q=").concat(a));case 4:(c=e.sent)&&(j(c.data.items),_(c.data.searchInformation)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return s.a.useEffect((function(){function t(){return(t=Object(p.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.location.state){t.next=11;break}return t.prev=1,t.next=4,O.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(d,"&cx=").concat(f,"&q=").concat(a));case 4:(c=t.sent)&&(j(c.data.items),_(c.data.searchInformation)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsxs)("div",{className:"search__form",children:[Object(u.jsx)("div",{className:"search__form-logo",children:Object(u.jsx)("img",{src:"/images/small.png",alt:"logo",onClick:function(){e.history.push("/")}})}),Object(u.jsx)("div",{className:"search__form-input",children:Object(u.jsxs)("form",{className:"home__form",onSubmit:N,children:[Object(u.jsx)("input",{type:"text",className:"home__input",value:a,onChange:function(e){return n(e.target.value)},required:!0}),Object(u.jsx)(h.b,{className:"search__icon"}),Object(u.jsx)(h.a,{className:"microphone"})]})})]}),Object(u.jsx)(g,{results:i,info:v})]})};var _=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",exact:!0,component:j}),Object(u.jsx)(i.a,{path:"/search",exact:!0,component:v})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),s(e),n(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"));t.default=N()}},[[62,1,2]]]);
//# sourceMappingURL=main.522477a6.chunk.js.map