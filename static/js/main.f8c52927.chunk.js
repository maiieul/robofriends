(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=a(5),i=a(4),s=(a(28),a(12)),u=a(13),h=a(15),m=a(14),d=a(16),b=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},f=function(e){var t=e.robots,a=t.map(function(e,a){return r.a.createElement(b,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})});return r.a.createElement("div",null,a)},v=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},p=(a(29),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)}),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).state={robots:[]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){setTimeout(function(){e.setState({robots:t})},2e3)})}},{key:"render",value:function(){var e=this.state.robots,t=this.props,a=t.searchField,n=t.onSearchChange,o=e.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(v,{searchChange:n}),r.a.createElement(p,null,r.a.createElement(f,{robots:o}))):r.a.createElement("div",{className:"vh-100 dt w-100"},r.a.createElement("div",{className:"dtc v-mid"},r.a.createElement("h1",{className:"f1 tc"},"loading...")))}}]),t}(n.Component),g=Object(l.b)(function(e){return{searchField:e.searchField}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={searchField:""},y=(a(30),Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));c.a.render(r.a.createElement(l.a,{store:y},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.f8c52927.chunk.js.map