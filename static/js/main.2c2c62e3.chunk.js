(this["webpackJsonpsrg-web"]=this["webpackJsonpsrg-web"]||[]).push([[0],{106:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),s=n.n(r),i=n(12),c=n.n(i),l=(n(106),n(33)),o=n.n(l),h=n(40),u=n(62),j=n(47),d=n(46),b=n(25),m=n(26),p=n(22),f=n(28),O=n(27),x=n(83),g=n.n(x),y=n(237),v=n(222),S=n(227),C=n(235),k=n(230),w=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={isLoading:!1,isError:!1},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(m.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;"member_emails"===t?this.setState({member_emails:n.trim().split(/\r?\n/)}):"member_names"===t?this.setState({member_names:n.trim().split(/\r?\n/)}):"deadline"===t?this.setState({deadline:Date.parse(n)/1e3}):"grpSize"===t?this.setState({grpSize:parseInt(n)}):this.setState(Object(d.a)({},t,n))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,r,s,i,c,l,j=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.setState({isLoading:!0}),n=Object(u.a)(this.state.member_emails),e.prev=3,n.s();case 5:if((a=n.n()).done){e.next=12;break}if(r=a.value,g.a.isEmail(r.trim())){e.next=10;break}return alert("Please Check Member Emails For Error (Invalid Email-Id,Empty Rows etc)"),e.abrupt("return");case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:s=Object(u.a)(this.state.member_names),e.prev=21,s.s();case 23:if((i=s.n()).done){e.next=30;break}if(""!==i.value){e.next=28;break}return alert("Please Check Member Names For Error (Empty Rows etc)"),e.abrupt("return");case 28:e.next=23;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(21),s.e(e.t1);case 35:return e.prev=35,s.f(),e.finish(35);case 38:if(0!==this.state.member_emails.length&&0!==this.state.member_names.length){e.next=41;break}return alert("Please Fill All Fields"),e.abrupt("return");case 41:if(this.state.member_emails.length===this.state.member_names.length){e.next=44;break}return alert("Different Number Of Names And Email"),e.abrupt("return");case 44:delete(c=Object(h.a)({},this.state)).isError,delete c.isLoading,console.log(c),l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},fetch("https://silverbug.eastus.cloudapp.azure.com/create",l).then((function(e){return e.json()})).then((function(e){j.setState({isLoading:!1}),0!==e.status?j.props.history.push("/Done"):j.setState({isError:!0})})).catch((function(e){this.setState({isLoading:!1,isError:!0}),console.info(e+"------err------")}));case 50:case"end":return e.stop()}}),e,this,[[3,14,17,20],[21,32,35,38]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(a.jsx)(v.a,{style:{margin:"20px"}})}):this.state.isError?Object(a.jsx)("div",{children:Object(a.jsx)(y.a,{severity:"error",style:{display:"flex",justifyContent:"center"},children:"Error! Something Happened. Please Try Again."})}):Object(a.jsxs)("div",{id:"main",children:[Object(a.jsxs)("div",{style:{marginLeft:"40px"},children:[Object(a.jsx)("br",{}),"How to use:",Object(a.jsx)("br",{}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Fill out this form."}),Object(a.jsx)("li",{children:"App sends a email to all the members, asking them their preferences."}),Object(a.jsx)("li",{children:"Once the preferences are collected (or deadline is reached), the app will form groups and send emails (to you and all members), informing them of their groups."})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{container:!0,spacing:0,direction:"column",style:{minHeight:"100vh",margin:"40px"},children:Object(a.jsxs)("form",{id:"mainForm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("p",{children:"Your Name"}),Object(a.jsx)(C.a,{name:"owner_name",type:"text",required:!0,"data-parse":"uppercase",onChange:this.handleChange}),Object(a.jsx)("p",{children:"Your Email"}),Object(a.jsx)(C.a,{name:"owner_email",type:"email",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Title of Project"}),Object(a.jsx)(C.a,{name:"title",type:"text",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Group Size"}),Object(a.jsx)(C.a,{name:"grpSize",type:"number",InputProps:{inputProps:{min:2}},required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"The Deadline for Group Formation"}),Object(a.jsx)(C.a,{name:"deadline",type:"date",required:!0,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Names of Members seperated by newline"}),Object(a.jsx)(C.a,{multiline:!0,required:!0,rowsMax:10,onChange:this.handleChange,label:"Member Names",variant:"outlined",name:"member_names"}),Object(a.jsx)("p",{children:"Emails of Members (In same order as names)"}),Object(a.jsx)(C.a,{multiline:!0,required:!0,rowsMax:10,onChange:this.handleChange,label:"Member Emails",variant:"outlined",name:"member_emails"}),Object(a.jsx)("p",{}),Object(a.jsx)(k.a,{type:"Submit",variant:"contained",color:"primary",children:"Submit"})]})})]})}}]),n}(s.a.Component),E=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About..."})})}}]),n}(s.a.Component),P=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{textAlign:"center",margin:"30px"},children:[Object(a.jsx)("h3",{children:"Thank You!"}),Object(a.jsx)("p",{children:"We will mail you the results when the process is complete."})]})}}]),n}(s.a.Component),_=n(233),I=n(234),L=n(231),T=n(90),N=n(13),D=n(89),z=n.n(D),F=n(236),M=n(193),q=n(229),A=n(232),H=n(226),J=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleTag=a.handleTag.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.delete=a.delete.bind(Object(p.a)(a)),a.getNames=a.getNames.bind(Object(p.a)(a)),a.getNames(),a.state={name:"Loading...",title:"Loading...",owner_name:"Loading....",all:[],chosen:[],chosenPref:[],isLoading:!0,isError:!1},a}return Object(m.a)(n,[{key:"getNames",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)},fetch("https://silverbug.eastus.cloudapp.azure.com/fill/"+this.props.match.params.id+"/"+this.props.match.params.secret,t).then((function(e){return e.json()})).then((function(e){n.setState({isLoading:!1}),0!==e.status?n.setState({name:e.name,title:e.title,owner_name:e.owner_name,all:e.names.filter((function(t){return t!==e.name})),chosen:[]}):n.setState({isError:!0})})).catch((function(e){this.setState({isLoading:!1,isError:!0}),console.info(e+"------err------")}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.chosenPref,a=this.state.chosen.map((function(e,t){return[e,n[t]]}));this.setState({isLoading:!0});var r={data:a},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://silverbug.eastus.cloudapp.azure.com/submit/"+this.props.match.params.id+"/"+this.props.match.params.secret,s).then((function(e){return e.json()})).then((function(e){0!==e.status?t.props.history.push("/Done"):t.setState({isError:!0})})).catch((function(e){this.setState({isError:!0}),console.info(e+"------err------")}))}},{key:"delete",value:function(e){var t=this.state.chosen;t.splice(e,1),this.setState({chosen:t})}},{key:"pref",value:function(e,t){var n=this.state.chosenPref;n[e]=parseInt(t),this.setState({chosenPref:n})}},{key:"handleTag",value:function(e,t){if(this.state.all.includes(t)){var n=this.state.chosen;n.includes(t)||(n.push(t),this.setState({chosen:n}))}}},{key:"render",value:function(){var e=this;if(this.state.isLoading)return Object(a.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(a.jsx)(v.a,{style:{margin:"20px"}})});if(this.state.isError)return Object(a.jsx)("div",{children:Object(a.jsx)(y.a,{severity:"error",style:{display:"flex",justifyContent:"center"},children:"Error! Something Happened. Please Try Again."})});var t=[],n=function(n){t.push(Object(a.jsx)(G,{name:e.state.chosen[n],onClick:function(){return e.delete(n)},onPref:function(t){return e.pref(n,t.target.value)}},n.toString()))};for(var r in this.state.chosen)n(r);return Object(a.jsx)(S.a,{container:!0,spacing:0,direction:"column",alignItems:"center",style:{minHeight:"100vh",margin:"40px"},children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("p",{children:["Hello ",this.state.name,",",Object(a.jsx)("br",{}),"Please fill out your preferences for ",this.state.title," "]}),Object(a.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)(L.a,{style:{margin:10},children:"Find Name:"}),Object(a.jsx)(F.a,{onInputChange:this.handleTag,options:this.state.all,getOptionLabel:function(e){return e},style:{width:300},onChange:this.onTagsChange,renderInput:function(e){return Object(a.jsx)(C.a,Object(h.a)(Object(h.a)({},e),{},{variant:"outlined"}))}}),"       "]}),Object(a.jsx)(M.a,{elevation:0,style:{maxHeight:400,overflow:"auto"},children:Object(a.jsx)(q.a,{style:{justifyContent:"center",alignItems:"center"},children:t})}),Object(a.jsx)("span",{style:{margin:"20px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(k.a,{type:"submit",style:{margin:"20px",alignSelf:"center"},variant:"contained",color:"primary",children:"Submit"})}),Object(a.jsxs)("div",{children:["Note:",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"You can leave out choices, it that case they will be given a preference of zero."}),Object(a.jsx)("li",{children:"Filling out as many choices as you can will lead to a better matching."})]})]})]})})}}]),n}(s.a.Component),G=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){return Object(b.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)(A.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(M.a,{children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(a.jsx)(L.a,{align:"center",style:{margin:"20px"},children:this.props.name}),Object(a.jsx)(C.a,{style:{minWidth:"170px"},required:!0,onChange:this.props.onPref,InputProps:{inputProps:{max:10,min:0}},type:"number",label:"Preference (0-10)"}),Object(a.jsx)(H.a,{"aria-label":"delete",onClick:this.props.onClick,children:Object(a.jsx)(z.a,{fontSize:"large"})})]})})})}}]),n}(s.a.Component),Y=J;function R(){return Object(a.jsx)("main",{children:Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{path:"/",component:w,exact:!0}),Object(a.jsx)(N.a,{path:"/home",component:w,exact:!0}),Object(a.jsx)(N.a,{path:"/about",component:E}),Object(a.jsx)(N.a,{path:"/done",component:P}),Object(a.jsx)(N.a,{path:"/fillPreference/:id/:secret",component:Y})]})})}c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(_.a,{position:"static",children:Object(a.jsx)(I.a,{children:Object(a.jsx)(L.a,{children:"Group Us"})})}),Object(a.jsx)(T.a,{children:Object(a.jsx)(R,{})}),","]})}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.2c2c62e3.chunk.js.map