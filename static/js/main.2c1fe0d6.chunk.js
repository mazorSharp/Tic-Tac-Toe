(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{11:function(t,e,s){"use strict";s.r(e);var l=s(1),r=s.n(l),i=s(4),n=s.n(i),u=s(2),o=(s(9),s(0));var c=function(){var t=Object(l.useState)(),e=Object(u.a)(t,2),s=e[0],r=e[1],i=Object(l.useState)(!0),n=Object(u.a)(i,2),c=n[0],a=n[1],d=Object(l.useState)([{position:"square-top-left",result:null},{position:"square-top-center",result:null},{position:"square-top-right",result:null},{position:"square-middle-left",result:null},{position:"square-middle-center",result:null},{position:"square-middle-right",result:null},{position:"square-bottom-left",result:null},{position:"square-bottom-center",result:null},{position:"square-bottom-right",result:null}]),p=Object(u.a)(d,2),O=p[0],j=p[1],b=[[O[0].result,O[1].result,O[2].result],[O[3].result,O[4].result,O[5].result],[O[6].result,O[7].result,O[8].result],[O[0].result,O[4].result,O[8].result],[O[6].result,O[4].result,O[2].result],[O[0].result,O[3].result,O[6].result],[O[1].result,O[4].result,O[7].result],[O[2].result,O[5].result,O[8].result]];Object(l.useEffect)((function(){f()}),b);var m=function(t){t===O[0].position&&!0===c?O[0].result="X":t===O[0].position&&!1===c?O[0].result="O":t===O[1].position&&!0===c?O[1].result="X":t===O[1].position&&!1===c?O[1].result="O":t===O[2].position&&!0===c?O[2].result="X":t===O[2].position&&!1===c?O[2].result="O":t===O[3].position&&!0===c?O[3].result="X":t===O[3].position&&!1===c?O[3].result="O":t===O[4].position&&!0===c?O[4].result="X":t===O[4].position&&!1===c?O[4].result="O":t===O[5].position&&!0===c?O[5].result="X":t===O[5].position&&!1===c?O[5].result="O":t===O[6].position&&!0===c?O[6].result="X":t===O[6].position&&!1===c?O[6].result="O":t===O[7].position&&!0===c?O[7].result="X":t===O[7].position&&!1===c?O[7].result="O":t===O[8].position&&!0===c?O[8].result="X":t===O[8].position&&!1===c&&(O[8].result="O"),a((function(t){return!t}))},f=function(){for(var t=["X","X","X"],e=["O","O","O"],s=0;s<b.length;s++)JSON.stringify(b[s])===JSON.stringify(t)?r("X WINS"):JSON.stringify(b[s])===JSON.stringify(e)&&r("O WINS")};return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("div",{className:"display",children:[Object(o.jsxs)("span",{className:"turn-display ".concat("X WINS"===s||"O WINS"===s?"display-off":""),children:["its Player ",c?"X":"O","'s turn"]}),Object(o.jsxs)("div",{className:"win",children:[Object(o.jsx)("h2",{className:"winner-display",children:s}),Object(o.jsx)("button",{className:"reset-btn",onClick:function(){j([{position:"square-top-left",result:null},{position:"square-top-center",result:null},{position:"square-top-right",result:null},{position:"square-middle-left",result:null},{position:"square-middle-center",result:null},{position:"square-middle-right",result:null},{position:"square-bottom-left",result:null},{position:"square-bottom-center",result:null},{position:"square-bottom-right",result:null}]),r(""),a(!0)},children:"Reset"})]})]}),Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"cell ".concat(O[0].result),id:"square-top-left",onClick:function(t){return m(t.target.id)},children:O[0].result}),Object(o.jsx)("div",{className:"cell ".concat(O[1].result),id:"square-top-center",onClick:function(t){return m(t.target.id)},children:O[1].result}),Object(o.jsx)("div",{className:"cell ".concat(O[2].result),id:"square-top-right",onClick:function(t){return m(t.target.id)},children:O[2].result}),Object(o.jsx)("div",{className:"cell ".concat(O[3].result),id:"square-middle-left",onClick:function(t){return m(t.target.id)},children:O[3].result}),Object(o.jsx)("div",{className:"cell ".concat(O[4].result),id:"square-middle-center",onClick:function(t){return m(t.target.id)},children:O[4].result}),Object(o.jsx)("div",{className:"cell ".concat(O[5].result),id:"square-middle-right",onClick:function(t){return m(t.target.id)},children:O[5].result}),Object(o.jsx)("div",{className:"cell ".concat(O[6].result),id:"square-bottom-left",onClick:function(t){return m(t.target.id)},children:O[6].result}),Object(o.jsx)("div",{className:"cell ".concat(O[7].result),id:"square-bottom-center",onClick:function(t){return m(t.target.id)},children:O[7].result}),Object(o.jsx)("div",{className:"cell ".concat(O[8].result),id:"square-bottom-right",onClick:function(t){return m(t.target.id)},children:O[8].result})]})]})};n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(c,{})}),document.getElementById("root"))},9:function(t,e,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.2c1fe0d6.chunk.js.map