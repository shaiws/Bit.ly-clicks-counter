(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i=n(0),o=n.n(i),l=n(4),u=n.n(l),d=(n(16),n(1)),p=n.n(d),h=n(2),k=n(5),b=n(6),f=n(8),m=n(7),v=n(9);n(20);function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(p.a.mark(function e(t,n){var a,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t.data.link_history,a=[],r=0;case 3:if(!(r<s.length)){e.next=12;break}return e.t0="<li>Title: ".concat(s[r].title,', Link: <a href="').concat(s[r].link,'">').concat(s[r].link,"</a>, Clicks: "),e.next=7,x(s[r].link,n);case 7:e.t1=e.sent,a[r]=e.t0.concat.call(e.t0,e.t1,"</li>");case 9:r++,e.next=3;break;case 12:return e.abrupt("return","<ol>\n    ".concat(a.join(""),"\n  </ol>"));case 13:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e,t){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(p.a.mark(function e(t,n){var r,s,i,o,l,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api-ssl.bitly.com/v3/link/clicks?access_token=".concat(n,"&format=json&limit=100&link=").concat(t),e.prev=1,s=fetch(r,{method:"GET",cache:"reload",mode:"cors"}),e.next=5,s;case 5:if(!(i=e.sent).ok){e.next=19;break}return e.next=9,i.json();case 9:return o=e.sent,e.next=12,o.data;case 12:return l=e.sent,e.next=15,l.link_clicks;case 15:return u=e.sent,e.abrupt("return",JSON.stringify(u));case 19:return e.abrupt("return","N/A");case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),c.innerHTML=e.t0,a.disabled=!1;case 26:case"end":return e.stop()}},e,this,[[1,22]])}))).apply(this,arguments)}function E(){return(E=Object(h.a)(p.a.mark(function e(t){var n,r,s,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c.innerHTML="Gathering Data... </br> Please wait.",n="https://api-ssl.bitly.com/v3/user/link_history?access_token=".concat(t,"&format=json&limit=100"),e.prev=2,r=fetch(new Request(n,{method:"GET",cache:"reload"}),{mode:"cors"}),e.next=6,r;case 6:if(!(s=e.sent).ok){e.next=17;break}return e.next=10,s.json();case 10:return i=e.sent,e.next=13,y(i,t);case 13:c.innerHTML=e.sent,a.disabled=!1,e.next=19;break;case 17:c.innerHTML="Response.status: ".concat(s.status),a.disabled=!1;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(2),c.innerHTML=e.t0,a.disabled=!1;case 25:case"end":return e.stop()}},e,this,[[2,21]])}))).apply(this,arguments)}var g=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).state={data:[],disabled:!1},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{align:"center"},o.a.createElement("h1",null,"Get your bit.ly links' clicks count"),o.a.createElement("input",{type:"text",placeholder:"Enter bit.ly access token"}),o.a.createElement("button",{disabled:this.state.disabled},"Get links clicks count"),o.a.createElement("div",{align:"left",id:"result"}))}},{key:"componentDidMount",value:function(){a=document.querySelector("button"),r=document.querySelector("input"),c=document.querySelector("#result"),a.addEventListener("click",function(){var e=r.value;/^[A-Za-z0-9]+$/.test(e)&&(a.disabled=!0,function(e){E.apply(this,arguments)}(e))})}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.b5b8d15f.chunk.js.map