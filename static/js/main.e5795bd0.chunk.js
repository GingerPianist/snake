(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{68:function(e,t,a){e.exports=a(78)},73:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),l=a.n(c),u=(a(73),a(18)),i=a(54),o=a(105),s=a(125),m=a(126),f=a(44),d=a(43),h=a(108),p=a(110),v=Object(o.a)({wrapper:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},main:{margin:"auto",display:"flex",flexShrink:1,flexDirection:"column"},title:{color:"red"}});var E=function(e){var t=e.startGame,a=v();return n.a.createElement("div",{className:a.main},n.a.createElement(h.a,{variant:"h1",className:a.title},"Snake"),n.a.createElement(p.a,{variant:"contained",onClick:t},"Play Classic Snake"))},g=a(34),b=a(112),k=a(113),O=a(114),S=a(130),w=a(129),j=a(116),y=a(117),x=a(118),N=Object(o.a)({});var C=function(e){var t=e.grid;return N(),n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",null,e.map((function(e){return n.a.createElement("td",{style:{height:30,width:30,backgroundColor:e}})})))})))))},D=a(111),R=Object(o.a)({main:{margin:"auto"},header:{display:"flex",flexDirection:"row",alignItems:"center"},grow:{flexGrow:1},appBar:{backgroundColor:f.a[900]}}),I={snake:f.a[500],apple:D.a[400],grid:"lightgrey"};var M=function(e){var t=e.gameOver,a=e.snakeSpeed,c=e.setSnakeSpeed,l=R(),i=Object(r.useState)([]),o=Object(u.a)(i,2),s=o[0],m=o[1],f=Object(r.useRef)([0,0]),d=Object(r.useRef)([]),p=Object(r.useRef)([0]),v=Object(r.useRef)(4),E=Object(r.useRef)([0,0]),N=Object(r.useState)(0),D=Object(u.a)(N,2),M=D[0],A=D[1];function G(){switch(p.current.length>1&&p.current.shift(),p.current[0]){case 0:f.current[1]++;break;case 1:f.current[0]--;break;case 2:f.current[1]--;break;case 3:f.current[0]++}f.current[0]+=20,f.current[0]%=20,f.current[1]+=40,f.current[1]%=40,0!==d.current[f.current[0]][f.current[1]]?t(v.current):m((function(e){for(var t=Object(g.a)(e),a=0;a<20;a++)for(var r=0;r<40;r++)0!==d.current[a][r]&&(--d.current[a][r],0===d.current[a][r]&&(t[a]=Object(g.a)(e[a]),t[a][r]=I.grid));if(d.current[f.current[0]][f.current[1]]=v.current,f.current[0]===E.current[0]&&f.current[1]===E.current[1])if(v.current++,v.current<800){do{E.current[0]=Math.floor(20*Math.random()),E.current[1]=Math.floor(40*Math.random())}while(0!==d.current[E.current[0]][E.current[1]]);t[E.current[0]]=Object(g.a)(t[E.current[0]]),t[E.current[0]][E.current[1]]=I.apple}else E.current=[-1,-1];return t[f.current[0]]=Object(g.a)(t[f.current[0]]),t[f.current[0]][f.current[1]]=I.snake,t}))}function B(e){var t=p.current[p.current.length-1];switch(e.key){case"ArrowRight":2!==t&&p.current.push(0);break;case"ArrowUp":3!==t&&p.current.push(1);break;case"ArrowLeft":0!==t&&p.current.push(2);break;case"ArrowDown":1!==t&&p.current.push(3);break;case"p":J()}}function J(){A((function(e){return 1===e?0:1}))}return Object(r.useEffect)((function(){E.current[0]=Math.floor(20*Math.random()),E.current[1]=Math.floor(40*Math.random());var e=[];d.current=[];for(var t=0;t<20;t++){for(var a=[],r=[],n=0;n<40;n++)t===E.current[0]&&n===E.current[1]?a.push(I.apple):a.push(I.grid),r.push(0);e.push(a),d.current.push(r)}m(e)}),[]),Object(r.useEffect)((function(){var e;return 0===M&&(e=setInterval(G,a)),function(){clearInterval(e)}}),[M,a]),Object(r.useEffect)((function(){return document.addEventListener("keydown",B),function(){document.removeEventListener("keydown",B)}}),[]),n.a.createElement("div",{className:l.main},n.a.createElement(b.a,{position:"static",className:l.appBar},n.a.createElement(k.a,{className:l.header},n.a.createElement(O.a,{container:!0,spacing:2,justify:"space-between",alignItems:"center"},n.a.createElement(O.a,{item:!0},n.a.createElement(h.a,{variant:"h6"},"Your score is: ",v.current)),n.a.createElement(O.a,{item:!0,xs:6},n.a.createElement(S.a,{value:a,onChange:function(e,t){return c(t)},valueLabelDisplay:"auto",min:30,max:500})),n.a.createElement(O.a,{item:!0},n.a.createElement(w.a,{title:"keypress: p"},n.a.createElement(j.a,{onClick:J,color:"inherit"},1===M?n.a.createElement(y.a,null):n.a.createElement(x.a,null))))))),n.a.createElement(C,{grid:s}))},A=a(127),G=Object(o.a)({wrapper:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},main:{margin:"auto",display:"flex",flexShrink:1,flexDirection:"column",textAlign:"center"},title:{color:"red"}});var B=function(e){var t=e.score,a=e.endGame,c=e.showRanking,l=e.snakeSpeed,i=G(),o=Object(r.useState)(""),s=Object(u.a)(o,2),m=s[0],f=s[1],d=Object(r.useState)(!0),v=Object(u.a)(d,2),E=v[0],g=v[1];return n.a.createElement("div",{className:i.main},n.a.createElement(h.a,{variant:"h1",className:i.title},"You lost!"),n.a.createElement(p.a,{variant:"contained",onClick:a},"Play again"),n.a.createElement(p.a,{variant:"contained",onClick:c},"Best scores"),n.a.createElement(h.a,null,"Your score is ",t),E&&n.a.createElement(A.a,{label:"Your name",variant:"outlined",value:m,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&function(){g(!1);var e=JSON.parse(localStorage.getItem("ranking")||"[]");e.push({name:m,score:t,snakeSpeed:l}),localStorage.setItem("ranking",JSON.stringify(e)),c()}()}}))},J=a(119),Y=a(120),L=a(121),P=a(122),U=a(123),W=a(124);var K=function(e){var t=e.startGameAgain,a=JSON.parse(localStorage.getItem("ranking")||"[]");return a.sort((function(e,t){return t.score-e.score})),n.a.createElement("div",null,n.a.createElement("div",{align:"center"},n.a.createElement(p.a,{variant:"contained",onClick:t},"Play again")),n.a.createElement(J.a,null,n.a.createElement(Y.a,null,n.a.createElement(L.a,null,n.a.createElement(P.a,null,n.a.createElement(U.a,null,"Ranking"),n.a.createElement(U.a,null,"Username"),n.a.createElement(U.a,null,"Best score"),n.a.createElement(U.a,null,"Your speed"))),n.a.createElement(W.a,null,a.map((function(e){var t=e.name,a=e.score,r=e.snakeSpeed;return n.a.createElement(P.a,null,n.a.createElement(U.a,null),n.a.createElement(U.a,null,t),n.a.createElement(U.a,null,a),n.a.createElement(U.a,null,r))}))))))},$=Object(i.a)({palette:{primary:f.a,secondary:d.a}}),q=Object(o.a)({wrapper:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}});var z=function(){var e=q(),t=Object(r.useState)("startScreen"),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(-1),o=Object(u.a)(i,2),f=o[0],d=o[1],h=Object(r.useState)(200),p=Object(u.a)(h,2),v=p[0],g=p[1];return n.a.createElement(s.a,{theme:$},n.a.createElement("div",{className:e.wrapper},n.a.createElement(m.a,null),"startScreen"===c&&n.a.createElement(E,{startGame:function(){return l("gameScreen")}}),"gameScreen"===c&&n.a.createElement(M,{gameOver:function(e){d(e),l("gameOverScreen")},snakeSpeed:v,setSnakeSpeed:g}),"gameOverScreen"===c&&n.a.createElement(B,{score:f,endGame:function(){l("gameScreen"),g(200)},showRanking:function(){return l("rankingScreen")},snakeSpeed:v}),"rankingScreen"===c&&n.a.createElement(K,{startGameAgain:function(){return l("gameScreen")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.e5795bd0.chunk.js.map