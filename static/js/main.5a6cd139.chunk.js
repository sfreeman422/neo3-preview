(window["webpackJsonpneo-3-preview"]=window["webpackJsonpneo-3-preview"]||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/neo-logo.909dbdde.svg"},34:function(e,t,n){e.exports=n.p+"static/media/coz-logo.aa4aec2c.svg"},36:function(e,t,n){e.exports=n.p+"static/media/fb-social.e7ff3f8b.svg"},37:function(e,t,n){e.exports=n.p+"static/media/twitter-social.87676691.svg"},38:function(e,t,n){e.exports=n.p+"static/media/linkedin-social.19217fb3.svg"},39:function(e,t,n){e.exports=n.p+"static/media/telegram-social.2a85ba62.svg"},40:function(e,t,n){e.exports=n.p+"static/media/signal.6c24cbb2.svg"},42:function(e,t,n){e.exports=n(64)},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=n(9),l=n(10),s=n(31),u=n(32),m=n(11),d=n(14),p=n.n(d),f=n(26),E=function(e){return function(t){t({type:"REQUEST_BLOCK",indexOrHash:e})}},v=function(e){return function(t){t({type:"REQUEST_BLOCKS",page:e})}},b=function(e,t){return function(n){n({type:"REQUEST_BLOCK_SUCCESS",blockHeight:e,json:t,receivedAt:Date.now()})}},h=function(e,t){return function(n){n({type:"REQUEST_BLOCKS_SUCCESS",page:e,json:t,receivedAt:Date.now()})}},g=function(e,t){return function(n){n({type:"REQUEST_BLOCK_ERROR",blockHeight:e,error:t,receivedAt:Date.now()})}};var O=Object(l.c)({blocks:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,cached:{},list:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_BLOCK":return Object.assign({},t,{isLoading:!0,block:t.cached[n.indexOrHash]});case"REQUEST_BLOCK_SUCCESS":return Object.assign({},t,{isLoading:!1,block:n.json,lastUpdated:n.receivedAt,cached:(e={},Object(m.a)(e,n.blockHeight,n.json),Object(m.a)(e,n.json.hash,n.json),e)});case"REQUEST_BLOCKS":return Object.assign({},t,{isLoading:!0});case"REQUEST_BLOCKS_SUCCESS":return Object.assign({},t,{isLoading:!1,list:n.json,lastUpdated:n.receivedAt});default:return t}}}),k={blocks:{isLoading:!1,items:[],cached:{}}},y=Object(s.createLogger)();n(52);var j=n(12),w=n(8),S=n(33),x=n.n(S),N=n(34),C=n.n(N),L=(n(53),{fontWeight:"bold"}),_=function(){return c.a.createElement("div",{className:"logo-sub-text",to:"/"},c.a.createElement("h3",null," NEO3 Preview Explorer"),c.a.createElement("p",null,"Brought to you by: ",c.a.createElement("img",{alt:"coz-logo",src:C.a})))},B=function(){return c.a.createElement("nav",{id:"desktop_navigation"},c.a.createElement("div",{id:"desktop_logo"},c.a.createElement("img",{src:x.a,alt:"logo"}),c.a.createElement("div",{id:"logo-spacer"}),c.a.createElement(j.b,{className:"logo-sub-text",to:"/"},c.a.createElement(_,null))),c.a.createElement("div",{id:"desktop_navigation_options"},c.a.createElement(j.c,{activeStyle:L,to:"/transactions"},"Transactions"),c.a.createElement(j.c,{activeStyle:L,to:"/blocks"},"Blocks"),c.a.createElement(j.c,{activeStyle:L,to:"/contracts"},"Contracts")))},T=n(36),D=n.n(T),P=n(37),R=n.n(P),U=n(38),H=n.n(U),z=n(39),M=n.n(z),K=(n(55),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer-flex-container"},c.a.createElement(_,null)),c.a.createElement("span",{className:"footer-flex-container"},"\xa9 2019 City Of Zion"),c.a.createElement("div",{id:"footer-social-icons",className:"footer-flex-container"},c.a.createElement("img",{alt:"facebook-icon",src:D.a}),c.a.createElement("img",{alt:"twitter-icon",src:R.a}),c.a.createElement("img",{alt:"linkedin-icon",src:H.a}),c.a.createElement("img",{alt:"telegram-icon",src:M.a})))}),Q=n(18),Y=n(19),A=n(22),F=n(20),W=n(23),G=n(21),I=n.n(G),J=n(40),V=n.n(J),Z=n(66),$=(n(57),function(e){var t=e.columns,n=e.data,a=e.handleRowClick,r=n.map((function(e){var n={};return t.forEach((function(t){n[t.accessor]=e[t.accessor]})),n})),o={gridTemplateColumns:"repeat(".concat(t.length,", 1fr)")},i=function(e){return e?e===t.length-1?{borderRadius:"0 3px 3px 0"}:null:{borderRadius:"3px 0 0 3px"}};return c.a.createElement("div",{className:"data-list-container"},c.a.createElement("div",{className:"data-list",style:o},t.map((function(e,t){return c.a.createElement("div",{style:i(t),className:"data-list-column",key:e.name},e.name)})),r.map((function(e){return Object.values(e).map((function(t){return c.a.createElement("span",{style:i(),onClick:function(){return a(e)},key:Object(Z.a)()},"function"===typeof t?t():t)}))}))))}),q=(n(58),function(e){var t=e.children,n=e.secondary,a=void 0!==n&&n;return c.a.createElement("button",{className:a?"secondary-button":"primary-button"},t)}),X=(n(59),function(e){var t=e.value,n=e.detail;return c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,t),c.a.createElement("p",null,n))});n(60);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var te=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{time:I()(e.time).format("MM-DD-YYYY | MM:HH:SS"),index:function(){return c.a.createElement("div",{className:"list-block-height-container"},c.a.createElement("img",{src:V.a,alt:"block-icon"}),e.index.toLocaleString())},size:"".concat(e.size," bytes"),height:e.index})},ne=function(e){function t(){return Object(Q.a)(this,t),Object(A.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBlocks()}},{key:"render",value:function(){var e=this,t=this.props,n=t.filteredBlocks;t.isLoading;return c.a.createElement("div",{id:"landing-page"},c.a.createElement("div",{id:"call-to-action"},c.a.createElement("h1",null,"NEO3 Download"),c.a.createElement("div",{id:"call-to-action-content"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat arcu a felis porta, a fringilla augue blandit. Proin maximus at libero sit amet."),c.a.createElement("div",{id:"call-to-action-button-container"},c.a.createElement(q,{secondary:!0},"Get Started"),c.a.createElement("span",null," or skip the tutorial"),c.a.createElement(q,null,"Download Now")))),c.a.createElement("h1",null," Statistics"),c.a.createElement("div",{id:"statistics-card-container"},c.a.createElement(X,{value:"25,036,425",detail:"Total Transactions"}),c.a.createElement(X,{value:"25,036,425",detail:"Total Transactions"}),c.a.createElement(X,{value:"25,036,425",detail:"Total Transactions"}),c.a.createElement(X,{value:"25,036,425",detail:"Total Transactions"})),c.a.createElement("div",{className:"header-and-link"},c.a.createElement("h1",null," Last 5 Blocks"),c.a.createElement("a",null," View all blocks")),c.a.createElement($,{handleRowClick:function(t){return e.props.history.push("/blocks/".concat(e.props.blocks.find((function(e){return e.hash===t.hash})).index))},columns:[{name:"Height",accessor:"index"},{name:"Size",accessor:"size"},{name:"Hash",accessor:"hash"},{name:"Created On",accessor:"time"}],data:n}),c.a.createElement("h1",null," NEO3 Features"),c.a.createElement("h1",null," Recent Articles"))}}]),t}(c.a.Component),ae=Object(i.b)((function(e){var t=e.blocks;return{filteredBlocks:t.list&&t.list.length&&t.list.slice(0,5).map(te)||[],blocks:t.list,isLoading:t.isLoading}}),(function(e){return{fetchBlocks:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return console.log("fetching blocks"),function(){var t=Object(f.a)(p.a.mark((function t(n,a){var c,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(v(e)),c=function(e){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_blocks/".concat(e)},t.next=5,fetch(c(e));case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,console.log({json:o}),n(h(e,o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n(g(e,t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}())}}}))(ne),ce=function(){return c.a.createElement("div",null," hello NEO 3! (transactions)")},re=function(){return c.a.createElement("div",null," hello NEO 3! (blocks)")},oe=(n(61),function(e){var t=e.title,n=e.value;return c.a.createElement("div",{className:"panel"},c.a.createElement("span",null,t),c.a.createElement("p",null,n))});n(62);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var le=function(e){function t(){return Object(Q.a)(this,t),Object(A.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){console.log("mounted");var e=this.props.match.params.id;this.props.fetchBlock(e)}},{key:"render",value:function(){var e=this.props.block;return c.a.createElement("div",{className:"wrapper"},e&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null," Block "),c.a.createElement("div",{className:"block-index"}," #",e.index.toLocaleString()),c.a.createElement("div",null," ",I()(e.time).format("MM-DD-YYYY | MM:HH:SS")),c.a.createElement("div",{className:"panels-container"},c.a.createElement("div",{className:"panels-row"},c.a.createElement(oe,{title:"Index",value:e.index.toLocaleString()}),c.a.createElement(oe,{title:"Hash",value:e.hash})),c.a.createElement("div",{className:"panels-row"},c.a.createElement(oe,{title:"Size",value:"".concat(e.size," bytes")}),c.a.createElement(oe,{title:"Network Fee",value:".0005 GAS"}))),c.a.createElement("div",{id:"block-transactions-list"},c.a.createElement("h1",null," Transactions(",e.tx.legth||"0",")"))))}}]),t}(c.a.Component),se=Object(i.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.blocks)}),(function(e){return{fetchBlock:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return console.log("fetching block"),function(){var t=Object(f.a)(p.a.mark((function t(n,a){var c,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n,a),i=a(),l=e,i.blocks.cached[l]&&(i.blocks.isLoading,1)){t.next=17;break}return n(E(e)),t.prev=3,c=function(t){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_block/".concat(e)},t.next=7,fetch(c());case 7:return r=t.sent,t.next=10,r.json();case 10:o=t.sent,n(b(e,o)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),n(g(e,t.t0));case 17:case"end":return t.stop()}var i,l}),t,null,[[3,14]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}}))(le);n(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return Object(l.d)(O,e,Object(l.a)(u.a,y))}()},c.a.createElement((function(){return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"content"},c.a.createElement(j.a,null,c.a.createElement(B,null),c.a.createElement("div",{className:"router-content"},c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/transactions"},c.a.createElement(ce,null)),c.a.createElement(w.a,{path:"/blocks/:id",component:function(e){return c.a.createElement(se,e)}}),c.a.createElement(w.a,{path:"/blocks"},c.a.createElement(re,null)),c.a.createElement(w.a,{path:"/",component:function(e){return c.a.createElement(ae,e)}}))))),c.a.createElement(K,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5a6cd139.chunk.js.map