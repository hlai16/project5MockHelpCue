(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=(a(19),a(11)),s=a(9),u=a(10),i=a(13),p=a(12),m=a(3),d=a.n(m);a(21);d.a.initializeApp({apiKey:"AIzaSyBIINcqr3r8lPglG8lvVVuj_5BPlpMr704",authDomain:"project5-dd870.firebaseapp.com",databaseURL:"https://project5-dd870.firebaseio.com",projectId:"project5-dd870",storageBucket:"project5-dd870.appspot.com",messagingSenderId:"966876576721",appId:"1:966876576721:web:722637cba469f2e34f7ef0"});var f=d.a,h=(a(24),function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getUserInput=function(t){e.setState({userAsk:t.target.value})},e.submitQuestion=function(t){t.preventDefault(),f.database().ref().push(e.state.userAsk),e.setState({userAsk:""})},e.deleteQuestion=function(e){f.database().ref().child(e).remove()},e.toggleGreen=function(t,a){var n=Object(l.a)(e.state.queues).map((function(e){return e.id===t?e.clickHelped=!e.cueState&&e.question:e.clickHelped===e.cueState&&e.question}));e.setState({queues:n}),console.log("updatedCopy",n)},e.state={queues:[],userAsk:"",clickStop:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var o in a){var r={id:o,question:a[o],clickHelped:!1};n.push(r)}e.setState({queues:n})}))}},{key:"toggleRed",value:function(){this.setState({clickStop:!this.state.clickStop})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{className:"h1"},"Mock Helpcue"),o.a.createElement("form",{action:"submit"},o.a.createElement("div",{className:"textBar"},o.a.createElement("label",{htmlFor:"question",className:"sr-only"},"Please type your question here"),o.a.createElement("textarea",{onChange:this.getUserInput,value:this.state.userAsk,id:"question",row:"20",placeholder:"Type your question here"})),o.a.createElement("button",{onClick:this.submitQuestion},"Help!! ",o.a.createElement("span",null,"\ud83d\ude23"))),o.a.createElement("ul",null,this.state.queues.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"questionBox"},o.a.createElement("div",{className:"actualQuestion"},o.a.createElement("p",null,t.question)),o.a.createElement("button",{onClick:function(){return e.deleteQuestion(t.id)}},o.a.createElement("span",null,"\ud83d\udeae")),o.a.createElement("button",{className:function(){return e.toggleGreen(t.clickHelped)?"button green":"button"},onClick:function(){return e.toggleGreen(t.id)}},o.a.createElement("span",null,"\ud83e\uddb8\u200d\u2642\ufe0f")),o.a.createElement("button",{className:e.state.clickStop?"button red":"button",onClick:function(){return e.toggleRed()}},o.a.createElement("span",null,"\u26d4"))))})))),o.a.createElement("footer",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",null,"\xa9 Copyright 2020 Gloria Lai Juno College Project5"))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2a40384c.chunk.js.map