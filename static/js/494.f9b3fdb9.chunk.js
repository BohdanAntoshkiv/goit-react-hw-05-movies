"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494],{488:function(e,r,n){n.d(r,{Hg:function(){return u},TP:function(){return o},qF:function(){return i},tx:function(){return l},zv:function(){return p}});var t=n(861),a=n(757),s=n.n(a),c=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"fa56f77e329575fa8f7cf874a4b361b4"}}),u=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/week");case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},494:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(861),a=n(885),s=n(757),c=n.n(s),u=n(731),i=n(689),o=n(791),p=n(488),l=(n(1),n(184));function f(){var e=(0,i.UO)().movieId,r=(0,i.s0)(),n=(0,o.useState)(null),s=(0,a.Z)(n,2),f=s[0],v=s[1],d=(0,i.TH)();if((0,o.useEffect)((function(){var r=function(){var r=(0,t.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.TP)(e);case 3:n=r.sent,v(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),!f)return null;var h=f.genres,m=f.overview,x=f.vote_average,w=f.title,k=f.poster_path;return(0,l.jsxs)("main",{className:"containerMain",children:[(0,l.jsx)("button",{className:"homeButton",onClick:function(){var e,n;r(null!==(e=null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/home")},children:"Go back"}),(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)("img",{width:"250",src:"https://image.tmdb.org/t/p/w500/".concat(k),alt:w}),(0,l.jsxs)("div",{className:"details",children:[(0,l.jsx)("h2",{children:w}),(0,l.jsxs)("p",{children:["User Score: ",(10*x).toFixed()," %"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:m}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("p",{children:null===h||void 0===h?void 0:h.reduce((function(e,r){return e+r.name+" "}),"")})]})]}),(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)(u.OL,{className:"navLink",to:"cast",children:"Cast"}),(0,l.jsx)(u.OL,{className:"navLink",to:"reviews",children:"Reviews"})]}),(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)("div",{children:"...Loading"}),children:(0,l.jsx)(i.j3,{})})]})}},1:function(){}}]);
//# sourceMappingURL=494.f9b3fdb9.chunk.js.map