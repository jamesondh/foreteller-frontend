"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8452],{88452:function(e,r,t){function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var n,a,u=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);c=!0);}catch(s){o=!0,a=s}finally{try{c||null==t.return||t.return()}finally{if(o)throw a}}return u}(e,r)||s(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){if(e){if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r,t,n,a,u,c){try{var o=e[u](c),s=o.value}catch(i){return void t(i)}o.done?r(s):Promise.resolve(s).then(n,a)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function c(e){l(u,n,a,c,o,"next",e)}function o(e){l(u,n,a,c,o,"throw",e)}c(void 0)}))}}t.r(r);var p="m/44'/60'";function h(e){return m.apply(this,arguments)}function m(){return(m=f(regeneratorRuntime.mark((function e(r){var n,u,s,i,l,h,m,g,v,b,y,w,x,k,P,R,z,A,S,O,M,j,T,E,I,N,H,L,V,B,D,C,_,U,W,F,K,q,$,G,J,Q,X,Y,Z,ee,re,te,ne,ae,ue,ce,oe,se,ie,le,fe,pe,he;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he=function(){return(he=f(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,0!==H.size){e.next=4;break}return e.next=4,G();case 4:return n=o(H.values())[0],e.abrupt("return",_.signEIP712HashedMessage(n,k.bufferToHex(z(t)),k.bufferToHex(A(t))).then((function(e){var r=(e.v-27).toString(16);return r.length<2&&(r="0"+r),"0x".concat(e.r).concat(e.s).concat(r)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},pe=function(e){return he.apply(this,arguments)},fe=function(){return(fe=f(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==H.size){e.next=3;break}return e.next=3,G();case 3:return t=o(H.values())[0],e.abrupt("return",_.signPersonalMessage(t,k.stripHexPrefix(r.data)).then((function(e){var r=(e.v-27).toString(16);return r.length<2&&(r="0"+r),"0x".concat(e.r).concat(e.s).concat(r)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},le=function(e){return fe.apply(this,arguments)},ie=function(){return(ie=f(regeneratorRuntime.mark((function e(r){var t,n,u,c,s,i,l,f,p,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o(H.values())[0],n=k.rlp,u=new w({chain:I||T(S),hardfork:x.Berlin,eips:[1559]}),e.prev=3,r.gasLimit=null!==(c=r.gas)&&void 0!==c?c:r.gasLimit,s=v.fromTxData(a({},r),{common:u}),i=s.getMessageToSign(!1),s.supports(b.EIP1559FeeMarket)||(i=n.encode(i)),e.next=10,_.signTransaction(t,i);case 10:return l=e.sent,f=l.v,p=l.r,h=l.s,m=v.fromTxData(a(a({},r),{},{v:"0x".concat(f),r:"0x".concat(p),s:"0x".concat(h)}),{common:u}),e.abrupt("return","0x".concat(m.serialize().toString("hex")));case 18:throw e.prev=18,e.t0=e.catch(3),e.t0;case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)},se=function(e){return ie.apply(this,arguments)},oe=function(e){return new Promise((function(r,t){D.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,n){e&&t(e);var a=n&&n.result;r(null!=a?new j(a).toString(10):null)}))}))},ce=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=f(regeneratorRuntime.mark((function r(t){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,oe(e);case 2:n=r.sent,t({address:e,balance:n});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},ue=function(){return(ue=f(regeneratorRuntime.mark((function e(r){var t,n,a,u,c,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(H.size>0)||r){e.next=4;break}return e.abrupt("return",J());case 4:if(_){e.next=7;break}return e.next=7,q();case 7:if(""===N&&(N=p),N!==p){e.next=24;break}for(t=H.size,n=[],a=t;a<5+t;a++)n.push("".concat(p,"/").concat(a,"'/0/0"));u=0,c=n;case 13:if(!(u<c.length)){e.next=22;break}return o=c[u],e.next=17,_.getAddress(o);case 17:s=e.sent,H.set(s.address,o);case 19:u++,e.next=13;break;case 22:e.next=36;break;case 24:if(B){e.next=34;break}return e.prev=25,e.next=28,Z();case 28:B=e.sent,e.next=34;break;case 31:throw e.prev=31,e.t0=e.catch(25),e.t0;case 34:i(B,H.size).forEach((function(e){var r=e.dPath,t=e.address;H.set(t,r)}));case 36:return e.abrupt("return",J());case 37:case"end":return e.stop()}}),e,null,[[25,31]])})))).apply(this,arguments)},ae=function(e){return ue.apply(this,arguments)},ne=function(){return(ne=f(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(!0);case 2:return r=e.sent,e.abrupt("return",r&&ce(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},te=function(){return ne.apply(this,arguments)},re=function(){return L?J()[0]:void 0},ee=function(){return(ee=f(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:if(_){e.next=5;break}return e.next=5,q();case 5:return e.prev=5,e.next=8,_.getAddress(N,!1,!0);case 8:return r=e.sent,t=r.publicKey,n=r.chainCode,B={publicKey:t,chainCode:n,path:N},e.abrupt("return",B);case 14:throw e.prev=14,e.t0=e.catch(5),console.error({error:e.t0}),new Error("There was a problem accessing your Ledger accounts.");case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)},Z=function(){return ee.apply(this,arguments)},Y=function(){return(Y=f(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=3;break}return e.next=3,q();case 3:return e.prev=3,e.next=6,_.getAddress(r);case 6:return t=e.sent,e.abrupt("return",t.address);case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)},X=function(e){return Y.apply(this,arguments)},Q=function(e){var r=o(H.entries()),t=r.findIndex((function(r){return c(r,1)[0]===e}));r.unshift(r.splice(t,1)[0]),H=new Map(r)},J=function(){return Array.from(H.keys())},G=function(){return L=!0,ae()},$=function(){return($=f(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r={next:function(e){"remove"===e.type&&U()},error:function(){},complete:function(){}},n=M){e.next=16;break}return e.next=6,d();case 6:if(!e.sent){e.next=12;break}return e.next=9,t.e(4546).then(t.bind(t,44546));case 9:e.t0=e.sent.default,e.next=15;break;case 12:return e.next=14,t.e(9698).then(t.bind(t,99698));case 14:e.t0=e.sent.default;case 15:n=e.t0;case 16:return e.next=18,n.create();case 18:C=e.sent,_=new m(C),n.listen(r),e.next=27;break;case 23:throw e.prev=23,e.t1=e.catch(0),console.error(e.t1),new Error("Error connecting to Ledger wallet");case 27:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)},q=function(){return $.apply(this,arguments)},K=function(){return V},F=function(){return(F=f(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==N&&(H=new Map),!t){e.next=10;break}return e.next=6,X(r);case 6:return n=e.sent,H.set(n,r),V=!0,e.abrupt("return",!0);case 10:return V=!1,N=r,e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)},W=function(e,r){return F.apply(this,arguments)},U=function(){var e;null===(e=C)||void 0===e||e.close(),D.stop(),E({disconnected:!0,walletName:"Ledger"})},e.next=28,Promise.all([t.e(9351),t.e(9225),t.e(4414)]).then(t.bind(t,49225));case 28:return n=e.sent,u=n.default,e.next=32,Promise.all([t.e(9351),t.e(4415)]).then(t.bind(t,64415));case 32:return s=e.sent,i=s.generateAddresses,l=s.isValidPath,e.next=37,Promise.all([t.e(5507),t.e(4378)]).then(t.bind(t,4378));case 37:return h=e.sent,m=h.default,e.next=41,Promise.all([t.e(3482),t.e(9351)]).then(t.t.bind(t,66052,23));case 41:return g=e.sent,v=g.TransactionFactory,b=g.Capability,e.next=46,Promise.all([t.e(3482),t.e(9351)]).then(t.t.bind(t,2832,23));case 46:return y=e.sent,w=y.default,x=y.Hardfork,e.next=51,t.e(9351).then(t.t.bind(t,22751,23));case 51:return k=e.sent,e.next=54,Promise.all([t.e(9351),t.e(144),t.e(8034)]).then(t.t.bind(t,50144,23));case 54:return P=e.sent,R=P.TypedDataUtils,z=function(e){return R.hashStruct("EIP712Domain",e.domain,e.types,!0)},A=function(e){return R.hashStruct(e.primaryType,e.message,e.types,!0)},S=r.networkId,O=r.rpcUrl,M=r.LedgerTransport,j=r.BigNumber,T=r.networkName,E=r.resetWalletState,I=r.customNetwork,N="",H=new Map,L=!1,V=!1,(D=u({getAccounts:function(e){ae().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){se(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){le(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){le(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){le(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){le(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signTypedMessage:function(e,r){pe(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:O})).setPath=W,D.dPath=N,D.enable=G,D.setPrimaryAccount=Q,D.getPrimaryAddress=re,D.getAccounts=ae,D.getMoreAccounts=te,D.getBalance=oe,D.getBalances=ce,D.send=D.sendAsync,D.disconnect=U,D.isCustomPath=K,e.abrupt("return",D);case 77:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){return Promise.resolve(!!navigator&&!!navigator.usb&&"function"===typeof navigator.usb.getDevices)};r.default=function(e){var r=e.rpcUrl,t=e.LedgerTransport,n=e.networkId,a=e.preferred,u=e.label,c=e.iconSrc,o=e.svg,s=e.customNetwork;return{name:u||"Ledger",svg:o||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:c,wallet:function(){var e=f(regeneratorRuntime.mark((function e(a){var u,c,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a.BigNumber,c=a.networkName,o=a.resetWalletState,e.next=3,h({rpcUrl:r,networkId:n,LedgerTransport:t,BigNumber:u,networkName:c,resetWalletState:o,customNetwork:s});case 3:return i=e.sent,e.abrupt("return",{provider:i,interface:{name:"Ledger",connect:i.enable,disconnect:i.disconnect,address:{get:function(){var e=f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=f(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.getPrimaryAddress(),e.abrupt("return",r&&i.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:a}}}}]);