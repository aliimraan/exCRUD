(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(28),s=a.n(r),i=(a(35),a(3)),o=a(9),u=a.n(o),l=a(12),j=a(4),d=a(70),b=a(8),h=(a(37),a(13)),m=a.n(h),O=a(0);var p=function(e){var t=e.isActive,a=e.setActive,n=e.user,r=e.userEmail;Object(c.useEffect)((function(){}),[t,n]);var s=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete",{params:{param1:r}});case 3:if(200!==(t=e.sent).status){e.next=7;break}return alert(t.data.Message),e.abrupt("return",a(!1));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"deleteArea",children:Object(O.jsxs)("div",{className:"delete",children:["are you sure to delete ",n,Object(O.jsxs)("div",{className:"buttonArea",children:[Object(O.jsx)("button",{onClick:s,children:"delete"}),Object(O.jsx)("button",{onClick:function(){return function(){if(!0===t)return a(!1)}()},children:"cancel"})]})]})})};a(57);var x=function(e){var t=e.record,a=e.active,n=e.setActive,r=e.setUser,s=e.setUserEmail,i=e.search;return Object(c.useEffect)((function(){}),[t]),console.log(i),Object(O.jsx)("div",{className:"table ",children:Object(O.jsxs)(d.a,{className:"custom_table",children:[Object(O.jsx)("thead",{className:"custom_table_head",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"State"}),Object(O.jsx)("th",{children:"City"}),Object(O.jsx)("th",{children:"Pincode"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:void 0===t[0]||t[0]===[]?"loading":t[0].filter((function(e){return""==i||e.first_name.toLowerCase().includes(i.toLowerCase())||e.last_name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.city.toLowerCase().includes(i.toLowerCase())||e.states.toLowerCase().includes(i.toLowerCase())||e.pincode.includes(i)?e:void 0})).map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:++t}),Object(O.jsx)("td",{children:e.first_name}),Object(O.jsx)("td",{children:e.last_name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:e.city}),Object(O.jsx)("td",{children:e.states}),Object(O.jsx)("td",{children:e.pincode}),Object(O.jsxs)("td",{className:"buttons",children:[Object(O.jsx)(b.b,{to:{pathname:"/editRecord",query:e},className:"anchor",children:"edit"}),Object(O.jsx)("button",{onClick:function(t){return function(e,t,c){if(!0===a)return n(!1);n(!0),r("".concat(e," ").concat(t)),s(c)}(e.first_name,e.last_name,e.email)},className:"anchor",children:"delete"})]})]},t)}))})]})})};a(63);var f=function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"logo",children:"task"}),Object(O.jsx)(b.b,{to:"/",className:"anchor",children:"home"})]})};a(64);var v=function(e){var t=e.onChange;return Object(O.jsxs)("div",{className:"rowOne",children:[Object(O.jsxs)(b.b,{to:"/addRecord",className:"anchor",children:[Object(O.jsx)("span",{children:"+"}),Object(O.jsx)("h6",{children:"Add record"})]}),Object(O.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){return t(e)}})]})};a(65);var g=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),h=b[0],g=b[1],y=Object(c.useState)([]),N=Object(j.a)(y,2),w=N[0],C=N[1],k=Object(c.useState)(""),_=Object(j.a)(k,2),A=_[0],S=_[1];Object(c.useEffect)((function(){E()}),[a,w]);var E=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch");case 3:return t=e.sent,e.abrupt("return",C([t.data.data]));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(f,{}),Object(O.jsx)(v,{onChange:function(e){return S(e.target.value)}}),Object(O.jsx)(x,{record:w,active:a,setActive:n,setUser:g,setUserEmail:o,search:A}),Object(O.jsx)("div",{style:!1===a?{display:"none"}:{display:"block"},children:Object(O.jsx)(p,{isActive:a,setActive:n,user:h,userEmail:i})})]})};a(66);var y=function(e){var t=e.submitHandler,a=e.isEdit,n=e.record,r=e.BtnName,s=Object(c.useState)(""),o=Object(j.a)(s,2),u=o[0],l=o[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),h=b[0],m=b[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(""),y=Object(j.a)(g,2),N=y[0],w=y[1],C=Object(c.useState)(""),k=Object(j.a)(C,2),_=k[0],A=k[1],S=Object(c.useState)(""),E=Object(j.a)(S,2),L=E[0],G=E[1],F=Object(i.f)(),z={first_name:u,last_name:h,email:f,city:N,state:_,pincode:L};return Object(c.useEffect)((function(){if(n===[]||void 0===n)return"";var e=n.first_name,t=n.last_name,a=n.email,c=n.states,r=n.city,s=n.pincode;console.log(n),l(e),m(t),v(a),w(c),A(r),G(s)}),[n]),Object(O.jsx)("div",{className:"customForm",children:Object(O.jsxs)("form",{onSubmit:function(e){return t(e,z)},children:[Object(O.jsxs)("div",{className:"formArea",children:[Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"first name"}),Object(O.jsx)("input",{type:"text",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"last name"}),Object(O.jsx)("input",{type:"text",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"email"}),Object(O.jsx)("input",{type:"email",className:"true"===a&&"active",value:f,onChange:"false"===a?function(e){return v(e.target.value)}:{},required:!0})]}),Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"state"}),Object(O.jsxs)("select",{onChange:function(e){return A(e.target.value)},children:[Object(O.jsx)("option",{value:_,children:""!==_?_:"choose state"}),Object(O.jsx)("option",{value:"mumbai",children:"Mumbai"}),Object(O.jsx)("option",{value:"delhi",children:"Delhi"}),Object(O.jsx)("option",{value:"goa",children:"Goa"}),Object(O.jsx)("option",{value:"gujrat",children:"Gujrat"})]})]}),Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"city"}),Object(O.jsx)("input",{type:"text",value:N,onChange:function(e){return w(e.target.value)}})]}),Object(O.jsxs)("div",{className:"formGroup",children:[Object(O.jsx)("label",{children:"pincode"}),Object(O.jsx)("input",{type:"number",value:L,onChange:function(e){return G(e.target.value)}})]})]}),Object(O.jsxs)("div",{className:"buttonArea",children:[Object(O.jsx)("button",{type:"submit",children:r}),Object(O.jsx)("button",{onClick:function(){return F.push("/")},children:"cancel"})]})]})})};var N=function(){var e=Object(i.f)(),t=function(){var t=Object(l.a)(u.a.mark((function t(a,c){var n,r,s,i,o,l,j,d,b;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=c.first_name,r=c.last_name,s=c.email,i=c.city,o=c.state,l=c.pincode,j=/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i,s.match(j)){t.next=7;break}return t.abrupt("return",alert("wrong Email format ".concat(s)));case 7:if(5===l.length){t.next=12;break}return d=l.length,t.abrupt("return",alert("pincode length mustbe 5 and you have entered ".concat(d," ")));case 12:return t.prev=12,t.next=15,m.a.get("https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add",{params:{param1:s,param2:n,param3:r,param4:l,param5:i,param6:o}});case 15:200===(b=t.sent).status&&(alert(b.data.Message),e.push("/")),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(12),alert(t.t0);case 22:case"end":return t.stop()}}),t,null,[[12,19]])})));return function(e,a){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(y,{submitHandler:t,isEdit:"false",BtnName:"add"})]})};var w=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(i.f)();Object(c.useEffect)((function(){r(e.location.query)}),[]);var o=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var c,n,r,i,o,l,j,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(a),c=a.first_name,n=a.last_name,r=a.email,i=a.city,o=a.state,5===(l=a.pincode).length){e.next=8;break}j=l.length,alert("pincode length mustbe 5 and you have entered ".concat(j," ")),e.next=18;break;case 8:return e.prev=8,e.next=11,m.a.get("https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit",{params:{param1:r,param2:c,param3:n,param4:l,param5:i,param6:o}});case 11:200===(d=e.sent).status&&(alert(d.data.Message),s.push("/")),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(y,{submitHandler:o,isEdit:"true",record:n,BtnName:"update"})]})};var C=function(){return Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",exact:!0,component:g}),Object(O.jsx)(i.a,{path:"/addRecord",component:N}),Object(O.jsx)(i.a,{path:"/editRecord",component:w}),Object(O.jsx)(i.a,{path:"/deleteRecord",component:p})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(67);s.a.render(Object(O.jsx)(b.a,{children:Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})})}),document.getElementById("root")),k()}},[[68,1,2]]]);
//# sourceMappingURL=main.fa3454a9.chunk.js.map