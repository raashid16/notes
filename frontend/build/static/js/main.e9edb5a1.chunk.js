(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(20),s=n.n(c),o=(n(86),n(87),n(7)),i=(n(88),n(21)),l=n(11),u=n(129),j=n(130),d=n(74),p=function(){return Object(a.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(d.a,{className:"text-center py-3",children:"Copyright \xa9 Note Zipper"})})})})},b=n(136),h=n(137),O=n(135),f=n(77),x=n(133),g=n(8),m=n(12),v=n.n(m),y=n(23),S="USER_LOGIN_REQUEST",E="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",w="USER_LOGOUT",I="USER_REGISTER_REQUEST",L="USER_REGISTER_SUCCESS",N="USER_REGISTER_FAIL",_="USER_UPDATE_REQUEST",T="USER_UPDATE_SUCCESS",U="USER_UPDATE_FAIL",k=n(26),P=n.n(k);var R=function(e){var t=e.setSearch,n=Object(g.b)(),c=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){}),[c]),Object(a.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a.Brand,{href:"/",children:"Note Zipper"}),Object(a.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(h.a,{className:"m-auto",children:c&&Object(a.jsx)(O.a,{inline:!0,children:Object(a.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(a.jsx)(h.a,{children:c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a.Link,{href:"/mynotes",children:"My Notes"}),Object(a.jsxs)(x.a,{title:"".concat(c.name),id:"collasible-nav-dropdown",children:[Object(a.jsx)(x.a.Item,{href:"/profile",children:"My Profile"}),Object(a.jsx)(x.a.Divider,{}),Object(a.jsx)(x.a.Item,{onClick:function(){n(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:w});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(a.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},A=n(78);n(115);var D=function(e){var t=e.history,n=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:" intro-text",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{className:"title",children:["Welcome to Note Zipper",Object(a.jsx)("span",{})]}),Object(a.jsx)("p",{className:"subtitle",children:"One Safe place for all your notes."})]}),Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)(i.b,{to:"/login",children:Object(a.jsx)(A.a,{size:"lg",style:{width:200,height:55},children:"Login"})}),Object(a.jsx)(i.b,{to:"/register",children:Object(a.jsx)(A.a,{variant:"outline-primary",size:"lg",style:{width:200,height:55},children:"Signup"})})]})]})})})})},G=n(138);n(119);var F=function(e){var t=e.children,n=e.title;return Object(a.jsx)("div",{className:"mainback",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"page",children:[n&&Object(a.jsxs)(a.Fragment,{children:[" ",Object(a.jsx)("h1",{className:"heading",children:n}),Object(a.jsx)("hr",{})]}),t]})})})})},B=(n(120),n(134));var z=function(e){var t=e.show,n=e.noteModal,r=e.onHide;return Object(a.jsxs)(B.a,{onHide:r,show:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(B.a.Header,{closeButton:!0,onClick:r,children:Object(a.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:n.title})}),Object(a.jsx)(B.a.Body,{children:Object(a.jsx)("p",{children:n.content})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsx)(A.a,{onClick:r,children:"Close"})})]})},H="NOTES_LIST_REQUEST",Q="NOTES_LIST_SUCCESS",J="NOTES_LIST_FAIL",M="NOTES_CREATE_REQUEST",q="NOTES_CREATE_SUCCESS",W="NOTES_CREATE_FAIL",Z="NOTES_UPDATE_REQUEST",K="NOTES_UPDATE_SUCCESS",V="NOTES_UPDATE_FAIL",X="NOTES_DELETE_REQUEST",Y="NOTES_DELETE_SUCCESS",$="NOTES_DELETE_FAIL",ee=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n,a){var r,c,s,o,i,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:X}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,P.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:Y,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:$,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},te=n(131);var ne=function(e){var t=e.size,n=void 0===t?100:t;return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(a.jsx)(te.a,{style:{width:n,height:n},animation:"border"})})},ae=n(132),re=function(e){var t=e.variant,n=void 0===t?"info":t,r=e.children;return Object(a.jsx)(ae.a,{variant:n,style:{fontSize:20},children:Object(a.jsx)("strong",{children:r})})};var ce=function(e){var t=e.history,n=e.search,c=Object(r.useState)(""),s=Object(o.a)(c,2),l=s[0],u=s[1],j=Object(r.useState)(!1),d=Object(o.a)(j,2),p=d[0],b=d[1],h=Object(g.b)(),O=Object(g.c)((function(e){return e.noteList})),f=O.loading,x=O.error,m=O.notes,S=Object(g.c)((function(e){return e.userLogin})).userInfo,E=Object(g.c)((function(e){return e.noteDelete})),C=E.loading,w=E.error,I=E.success,L=Object(g.c)((function(e){return e.noteCreate})).success,N=Object(g.c)((function(e){return e.noteUpdate})).success;return Object(r.useEffect)((function(){h(function(){var e=Object(y.a)(v.a.mark((function e(t,n){var a,r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:H}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,P.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:Q,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:J,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),S||t.push("/")}),[h,t,S,I,L,N]),Object(a.jsxs)(F,{title:"Welcome Back ".concat(S&&S.name,".."),children:[console.log(m),Object(a.jsx)(i.b,{to:"/createnote",children:Object(a.jsx)(A.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Note"})}),x&&Object(a.jsx)(re,{variant:"danger",children:x}),w&&Object(a.jsx)(re,{variant:"danger",children:w}),f&&Object(a.jsx)(ne,{}),C&&Object(a.jsx)(ne,{}),m&&m.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(a.jsxs)(G.a,{style:{margin:10},children:[Object(a.jsxs)(G.a.Header,{style:{display:"flex"},children:[Object(a.jsx)("span",{onClick:function(){return function(e){b(!0),u(e)}(e)},style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center"},children:e.title}),Object(a.jsxs)("div",{children:[Object(a.jsx)(A.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(a.jsx)(A.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&h(ee(t)));var t},children:"Delete"})]})]}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(a.jsx)("p",{children:e.content}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(a.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})})]},e._id)})),Object(a.jsx)(z,{show:p,noteModal:l,onHide:function(){return b(!1)}})]})};n(73);var se=function(e){var t=e.match,n=e.history,c=Object(r.useState)(),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(),j=Object(o.a)(u,2),d=j[0],p=j[1],b=Object(r.useState)(),h=Object(o.a)(b,2),f=h[0],x=h[1],m=Object(r.useState)(""),S=Object(o.a)(m,2),E=S[0],C=S[1],w=Object(g.b)(),I=Object(g.c)((function(e){return e.noteUpdate})),L=I.loading,N=I.error,_=Object(g.c)((function(e){return e.noteDelete})),T=_.loading,U=_.error;return Object(r.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,l(a.title),p(a.content),x(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,E]),Object(a.jsx)(F,{title:"Edit Note",children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Edit your Note"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),w(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c,s){var o,i,l,u,j,d;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:Z}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,P.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:K,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:V,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,i,d,f)),i&&d&&f&&(l(""),x(""),p(""),n.push("/mynotes"))},children:[T&&Object(a.jsx)(ne,{}),N&&Object(a.jsx)(re,{variant:"danger",children:N}),U&&Object(a.jsx)(re,{variant:"danger",children:U}),Object(a.jsxs)(O.a.Group,{controlId:"title",children:[Object(a.jsx)(O.a.Label,{children:"Title"}),Object(a.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Content"}),Object(a.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return p(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Category"}),Object(a.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return x(e.target.value)}})]}),L&&Object(a.jsx)(ne,{size:50}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(a.jsx)(A.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&w(ee(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(a.jsxs)(G.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})};n(121);var oe=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],f=Object(g.b)(),x=Object(g.c)((function(e){return e.userLogin})),m=x.loading,w=x.error,I=x.userInfo;return Object(r.useEffect)((function(){I&&t.push("/mynotes")}),[t,I]),Object(a.jsx)(F,{title:"LOGIN",children:Object(a.jsxs)("div",{className:"loginContainer",children:[w&&Object(a.jsx)(re,{variant:"danger",children:w}),m&&Object(a.jsx)(ne,{}),Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(y.a)(v.a.mark((function n(a){var r,c,s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:S}),r={headers:{"Content-type":"application/json"}},n.next=5,P.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:E,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:C,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(s,b))},children:[Object(a.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(O.a.Label,{children:"Email address"}),Object(a.jsx)(O.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["New Customer ? ",Object(a.jsx)(i.b,{to:"/register",children:"Register Here"})]})})]})})};n(122);var ie=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],f=Object(r.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),x=Object(o.a)(f,2),m=x[0],S=x[1],C=Object(r.useState)(""),w=Object(o.a)(C,2),_=w[0],T=w[1],U=Object(r.useState)(""),k=Object(o.a)(U,2),R=k[0],D=k[1],G=Object(r.useState)(null),B=Object(o.a)(G,2),z=B[0],H=B[1],Q=Object(r.useState)(null),J=Object(o.a)(Q,2),M=J[0],q=J[1],W=Object(g.b)(),Z=Object(g.c)((function(e){return e.userRegister})),K=Z.loading,V=Z.error,X=Z.userInfo;return Object(r.useEffect)((function(){X&&t.push("/")}),[t,X]),Object(a.jsx)(F,{title:"REGISTER",children:Object(a.jsxs)("div",{className:"loginContainer",children:[V&&Object(a.jsx)(re,{variant:"danger",children:V}),z&&Object(a.jsx)(re,{variant:"danger",children:z}),K&&Object(a.jsx)(ne,{}),Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),_!==R?H("Passwords do not match"):W(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c){var s,o,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:I}),s={headers:{"Content-type":"application/json"}},r.next=5,P.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:L,payload:i}),c({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:N,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(b,s,_,m))},children:[Object(a.jsxs)(O.a.Group,{controlId:"name",children:[Object(a.jsx)(O.a.Label,{children:"Name"}),Object(a.jsx)(O.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(O.a.Label,{children:"Email address"}),Object(a.jsx)(O.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:_,placeholder:"Password",onChange:function(e){return T(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(O.a.Label,{children:"Confirm Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:R,placeholder:"Confirm Password",onChange:function(e){return D(e.target.value)}})]}),M&&Object(a.jsx)(re,{variant:"danger",children:M}),Object(a.jsxs)(O.a.Group,{controlId:"pic",children:[Object(a.jsx)(O.a.Label,{children:"Profile Picture"}),Object(a.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return q("Please Select an Image");if(q(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return q("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){S(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["Have an Account ? ",Object(a.jsx)(i.b,{to:"/login",children:"Login"})]})})]})})};var le=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),j=u[0],d=u[1],p=Object(r.useState)(""),b=Object(o.a)(p,2),h=b[0],f=b[1],x=Object(g.b)(),m=Object(g.c)((function(e){return e.noteCreate})),S=m.loading,E=m.error,C=m.note;console.log(C);var w=function(){i(""),f(""),d("")};return Object(r.useEffect)((function(){}),[]),Object(a.jsx)(F,{title:"Create a Note",children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Create a new Note"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),x(function(e,t,n){return function(){var a=Object(y.a)(v.a.mark((function a(r,c){var s,o,i,l,u,j;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:M}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,P.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:q,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:W,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(s,j,h)),s&&j&&h&&(w(),t.push("/mynotes"))},children:[E&&Object(a.jsx)(re,{variant:"danger",children:E}),Object(a.jsxs)(O.a.Group,{controlId:"title",children:[Object(a.jsx)(O.a.Label,{children:"Title"}),Object(a.jsx)(O.a.Control,{type:"title",value:s,placeholder:"Enter the title",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Content"}),Object(a.jsx)(O.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return d(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Category"}),Object(a.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),S&&Object(a.jsx)(ne,{size:50}),Object(a.jsx)(A.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(a.jsx)(A.a,{className:"mx-2",onClick:w,variant:"danger",children:"Reset Feilds"})]})}),Object(a.jsxs)(G.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},ue=(n(123),function(e){e.location;var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),p=u[0],b=u[1],h=Object(r.useState)(),f=Object(o.a)(h,2),x=f[0],m=f[1],S=Object(r.useState)(""),C=Object(o.a)(S,2),w=C[0],I=C[1],L=Object(r.useState)(""),N=Object(o.a)(L,2),k=N[0],R=N[1],D=Object(r.useState)(),G=Object(o.a)(D,2),B=G[0],z=G[1],H=Object(g.b)(),Q=Object(g.c)((function(e){return e.userLogin})).userInfo,J=Object(g.c)((function(e){return e.userUpdate})),M=J.loading,q=J.error,W=J.success;Object(r.useEffect)((function(){Q?(i(Q.name),b(Q.email),m(Q.pic)):t.push("/")}),[t,Q]);return Object(a.jsx)(F,{title:"EDIT PROFILE",children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{className:"profileContainer",children:[Object(a.jsx)(d.a,{md:6,children:Object(a.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),H((t={name:s,email:p,password:w,pic:x},function(){var e=Object(y.a)(v.a.mark((function e(n,a){var r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:_}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,P.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:T,payload:i}),n({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:U,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[M&&Object(a.jsx)(ne,{}),W&&Object(a.jsx)(re,{variant:"success",children:"Updated Successfully"}),q&&Object(a.jsx)(re,{variant:"danger",children:q}),Object(a.jsxs)(O.a.Group,{controlId:"name",children:[Object(a.jsx)(O.a.Label,{children:"Name"}),Object(a.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email Address"}),Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:w,onChange:function(e){return I(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(O.a.Label,{children:"Confirm Password"}),Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:k,onChange:function(e){return R(e.target.value)}})]})," ",B&&Object(a.jsx)(re,{variant:"danger",children:B}),Object(a.jsxs)(O.a.Group,{controlId:"pic",children:[Object(a.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(a.jsx)(O.a.File,{onChange:function(e){return function(e){if(z(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return z("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){m(e.url.toString()),console.log(x)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(A.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(a.jsx)(d.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)("img",{src:x,alt:s,className:"profilePic"})})]})})})});var je=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(R,{setSearch:function(e){return c(e)}}),Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)(l.a,{path:"/",component:D,exact:!0}),Object(a.jsx)(l.a,{path:"/login",component:oe}),Object(a.jsx)(l.a,{path:"/register",component:ie}),Object(a.jsx)(l.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(a.jsx)(ce,{search:n,history:t})}}),Object(a.jsx)(l.a,{path:"/note/:id",component:se}),Object(a.jsx)(l.a,{path:"/createnote",component:le}),Object(a.jsx)(l.a,{path:"/profile",component:ue})]}),Object(a.jsx)(p,{})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},pe=n(36),be=n(79),he=n(80),Oe=Object(pe.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case Q:return{loading:!1,notes:t.payload};case J:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case E:return{loading:!1,userInfo:t.payload};case C:return{loading:!1,error:t.payload};case w:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case L:return{loading:!1,userInfo:t.payload};case N:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case q:return{loading:!1,success:!0};case W:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Y:return{loading:!1,success:!0};case $:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{loading:!0};case K:return{loading:!1,success:!0};case V:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case T:return{loading:!1,userInfo:t.payload,success:!0};case U:return{loading:!1,error:t.payload,success:!1};default:return e}}}),fe={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},xe=[be.a],ge=Object(pe.createStore)(Oe,fe,Object(he.composeWithDevTools)(pe.applyMiddleware.apply(void 0,xe)));s.a.render(Object(a.jsx)(g.a,{store:ge,children:Object(a.jsx)(je,{})}),document.getElementById("root")),de()},73:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.e9edb5a1.chunk.js.map