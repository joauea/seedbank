(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/pot.cb30fab2.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/404_glitch2.119ecb7e.gif"},36:function(e,t,a){e.exports=a(65)},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a(2),u=a(4),i=a(3),o=a(5),s=a(7),m=a(14),h=a(13),b=a.n(h);var p=a(15),E=a(9),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={eventname:"",sponges:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.submit=a.submit.bind(Object(E.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),b.a.post("/api/events",{name:this.state.eventname,sponges:this.state.sponges}).then((function(e){console.log("Created event: "+e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("label",null,"Create an event",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"eventname",placeholder:"name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"sponges",placeholder:"sponges",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Create"}))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={events:[]},e}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/events").then((function(t){e.setState({events:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.events;return l.a.createElement("div",null,l.a.createElement("p",null,"Events:"),l.a.createElement("ul",null,e.map((function(e){var t=e.id,a=e.name,n=e.data;return l.a.createElement("li",{key:t.toString()},a," ",n)}))))}}]),t}(n.Component),v=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.login=a.login.bind(Object(E.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),b.a.post("/api/auth/login",{email:this.state.email,password:this.state.password}).then((function(e){200===e.status&&localStorage.setItem("token",e.data.token)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login},l.a.createElement("label",null,"Login",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.signup=a.signup.bind(Object(E.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){e.preventDefault(),b.a.post("/api/auth/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then((function(e){200===e.status&&localStorage.setItem("token",e.data.token)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("label",null,"Need to signup?",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).logout=a.logout.bind(Object(E.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(e){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.logout},l.a.createElement("input",{type:"submit",value:"Logout"})))}}]),t}(n.Component),y=function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,null))},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null," ABOUT 3 Ecologgiiiesssss ")}}]),t}(n.Component),k=a(33),S=a.n(k),w=(a(60),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Cup",src:S.a,alt:"teapot"}))}}]),t}(n.Component)),x=(a(61),a(34)),B=a.n(x),D=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"glitch"},l.a.createElement("h3",null,"glitch"),l.a.createElement("img",{src:B.a,alt:"glitch"}))}}]),t}(n.Component),L=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"o0Oo0o 3ntryw4y o0oO0o"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/events"},"Go to events"),l.a.createElement(s.b,{to:"/auth"},"Login or signup"))},I=function(){return l.a.createElement("h3",null,"Patches")},N=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home Login")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/entryway"},"EntryWay")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about3e"},"3E About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/oOoOs"},"404 oOoO Portal")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/patches"},"Patches"))))),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/about3e"},l.a.createElement(C,null)),l.a.createElement(m.b,{path:"/oOoOs"},l.a.createElement(D,null)),l.a.createElement(m.b,{path:"/patches"},l.a.createElement(I,null)),l.a.createElement(m.b,{exact:!0,path:"/auth",component:y}),l.a.createElement(m.b,{exact:!0,path:"/events",component:(e=v,function(t){function a(){var e;return Object(r.a)(this,a),(e=Object(u.a)(this,Object(i.a)(a).call(this))).state={loading:!0,redirect:!1},e}return Object(o.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={authorization:"Bearer "+localStorage.getItem("token")};b.a.get("/api/auth/verify",{headers:t}).then((function(t){200===t.status?e.setState({loading:!1}):e.setState({loading:!1,redirect:!0})})).catch((function(t){e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?l.a.createElement(m.a,{to:"/auth"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(e,this.props))}}]),a}(n.Component))}),l.a.createElement(m.b,{exact:!0,path:"/",component:L}))));var e}}]),t}(n.Component),P=a(35);a.n(P).a.render(l.a.createElement(s.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.76258922.chunk.js.map