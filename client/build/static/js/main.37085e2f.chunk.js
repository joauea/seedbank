(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/pot.cb30fab2.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/404_glitch2.119ecb7e.gif"},48:function(e,t,a){e.exports=a.p+"static/media/blue-sponge.2bd84a50.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/orange-sponge.4ce5bf73.jpg"},54:function(e,t,a){e.exports=a(91)},78:function(e,t,a){},79:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a(6),u=a(5),o=a(3),i=a(4),s=a(8),h=a(18),m=a(12),p=a.n(m);function b(e,t){return function(a){function n(){var e;return Object(r.a)(this,n),(e=Object(u.a)(this,Object(o.a)(n).call(this))).state={loading:!0,redirect:!1,intendedPath:"",message:""},e}return Object(i.a)(n,a),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,a={authorization:"Bearer "+localStorage.getItem("token")};if(t){this.setState({intendedPath:t});var n=t.slice(1);n=n.replace(/-/g," "),this.setState({message:"Please log in to access ".concat(n)})}else this.setState({message:"Please log in"});p.a.get("/api/auth/verify",{headers:a}).then((function(t){200===t.status?e.setState({loading:!1}):e.setState({loading:!1,redirect:!0})})).catch((function(t){e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var a=this.state,n=a.loading,r=a.redirect;return n?null:r?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{to:{pathname:"/auth",state:{route:t,message:this.state.message}}})):l.a.createElement(l.a.Fragment,null,l.a.createElement(e,this.props))}}]),n}(n.Component)}var g=a(1),d=a(9),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={eventname:"",sponges:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),p.a.post("/api/events",{name:this.state.eventname,sponges:this.state.sponges}).then((function(e){console.log("Created event: "+e)})).catch((function(e){console.log(e)})),this.props.checkForUpdates()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("label",null,"Create an event ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"eventname",placeholder:"name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"sponges",placeholder:"sponges",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Create"}))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null," Events: "),l.a.createElement("ul",null,this.props.events.map((function(e){var t=e.id,a=e.name,n=e.data;return l.a.createElement("li",{key:t.toString()},a," ",n)}))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).checkForUpdates=function(){p.a.get("/api/events").then((function(t){e.setState({events:t.data})})).catch((function(e){return console.log(e)}))},e.state={events:[]},e}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.checkForUpdates()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{checkForUpdates:this.checkForUpdates}),l.a.createElement(f,{events:this.state.events}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.login=a.login.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){var t=this;e.preventDefault(),p.a.post("/api/auth/login",{email:this.state.email,password:this.state.password}).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.props.updateAuth(!0))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.props.auth?l.a.createElement(h.a,{to:"".concat(this.props.pathway)}):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login},l.a.createElement("label",null,"Login",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={username:"",email:"",password:"",authorize:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.signup=a.signup.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){var t=this;e.preventDefault(),p.a.post("/api/auth/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.setState({authorize:!0}),t.props.updateAuth(!0))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.authorize?(console.log("authorized"),l.a.createElement(h.a,{to:"".concat(this.props.pathway)})):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("label",null,"Need to signup?",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).logout=a.logout.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(e){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.logout},l.a.createElement("input",{type:"submit",value:"Logout"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).updateAuth=function(e){console.log("triggered",e),a.setState({auth:e})},a.state={pathway:"/",message:"",auth:!1},a.updateAuth=a.updateAuth.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state?(this.setState({pathway:this.props.location.state.route}),this.setState({message:this.props.location.state.message})):console.log("nothing");var t={authorization:"Bearer "+localStorage.getItem("token")};p.a.get("/api/auth/verify",{headers:t}).then((function(t){200===t.status?e.setState({auth:!0}):e.setState({auth:!1})})).catch((function(t){e.setState({auth:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.auth,a=e.pathway;return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"You are Already Logged In"),l.a.createElement(y,null)):l.a.createElement("div",null,l.a.createElement("h3",null,this.state.message),l.a.createElement(O,{pathway:a,updateAuth:this.updateAuth,auth:this.auth}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,{pathway:a,updateAuth:this.updateAuth,auth:this.auth}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null," ABOUT 3 Ecologgiiiesssss ")}}]),t}(n.Component),S=a(28),w=a.n(S),x=(a(78),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Cup",src:w.a,alt:"teapot"})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/events"},"Go to events")),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/sponges"}," 20,000 sponges")),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/auth"},"Login or signup")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/entryway"},"EntryWay")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about3e"},"3E About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/oOoOs"},"404 oOoO Portal")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/patches"},"Patches")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/traces"},"Register a trace")))))}}]),t}(n.Component)),A=(a(79),a(46)),F=a.n(A),B=function(){return l.a.createElement("div",{className:"glitch"},l.a.createElement("h3",null,"glitch"),l.a.createElement("img",{src:F.a,alt:"glitch"}))},P=a(32),D=a.n(P),L=a(47),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={image:"",tendencies:"",notes:""},a.onChange=a.onChange.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){switch(e.target.name){case"image":this.setState({image:e.target.files[0]});break;default:this.setState(Object(g.a)({},e.target.name,e.target.value))}}},{key:"submit",value:function(){var e=Object(L.a)(D.a.mark((function e(t){var a,n=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData,e.next=4,Object.keys(this.state).map((function(e){a.append(e,n.state[e])}));case 4:p.a.post("/api/assets/images",a,{"content-type":"multipart/form-data"}).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("form",{encType:"multipart/form-data"},l.a.createElement("label",null,"Upload an image",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"tendencies",placeholder:"tendencies (comma-separated)",value:this.state.value,onChange:this.onChange}),l.a.createElement("input",{type:"text",name:"notes",placeholder:"notes",value:this.state.value,onChange:this.onChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"file",name:"image",onChange:this.onChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Upload",onClick:this.submit})))}}]),t}(n.Component),z=function(){return l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))},I=a(11),M=a(29),H=a.n(M),N=a(34),T=a(48),G=a.n(T),J=a(49),R=a.n(J),W=a(7),Y=function(e){for(var t=[],a=[e.restofSponge,e.topofSponge],r=[],c=0;c<a.length;c++)t[c]=new W.TextureLoader,r.push(new W.MeshBasicMaterial({map:t[c].load(a[c]),transparent:!0}));var u=[r[0],r[1],r[1],r[1],r[1],r[1]],o=Object(n.useRef)(),i=Object(n.useState)(!1),s=Object(I.a)(i,2),h=(s[0],s[1]),m=Object(n.useState)(!1),p=Object(I.a)(m,2),b=p[0],g=p[1];return Object(N.b)((function(){return o.current.rotation.x=o.current.rotation.y+=.01})),l.a.createElement("mesh",Object.assign({},e,{ref:o,scale:b?[.75,3,1.5]:[.5,2,1],onClick:function(e){return g(!b)},onPointerOver:function(e){return h(!0)},onPointerOut:function(e){return h(!1)},material:u,dispose:null}),l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.5,2,1]}))},_=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement("ambientLight",null),l.a.createElement("pointLight",{position:[10,10,10]}),l.a.createElement(n.Suspense,{fallback:null},l.a.createElement(Y,{position:[-1.2,0,0],restofSponge:G.a,topofSponge:R.a}))))}}]),t}(n.Component);function q(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home Hello"))}var K=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(x,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:q}),l.a.createElement(h.b,{path:"/about3e",component:k}),l.a.createElement(h.b,{path:"/oOoOs",component:B}),l.a.createElement(h.b,{path:"/sponges",component:_}),l.a.createElement(h.b,{path:"/patches",render:function(){return l.a.createElement("div",null,"Patches")}}),l.a.createElement(h.b,{path:"/entryway",render:function(){return l.a.createElement("div",null,"Entry")}}),l.a.createElement(h.b,{exact:!0,path:"/auth",component:C}),l.a.createElement(h.b,{exact:!0,path:"/events",component:b(v,"/events")}),l.a.createElement(h.b,{exact:!0,path:"/traces",component:b(z,"/traces")})))}}]),t}(n.Component);H.a.render(l.a.createElement(K,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.37085e2f.chunk.js.map