"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5728],{47371:function(e,n,t){t.d(n,{c:function(){return r}});var r='\n\t<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>\n\t</svg>\n'},25728:function(e,n,t){t.r(n);var r=t(47371);function o(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}n.default=function(e){var n=e.rpcUrl,a=e.appName,i=e.appLogoUrl,c=e.networkId,u=e.preferred,s=e.label,l=e.iconSrc;return{name:s||"Coinbase Wallet",svg:e.svg||r.c,iconSrc:l,wallet:function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var o,u,s,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.getBalance,u=r.getAddress,s=r.getNetwork,e.next=3,Promise.all([t.e(9351),t.e(6473),t.e(983)]).then(t.bind(t,80983));case 3:return l=e.sent,f=l.default,p=new f({appName:a,appLogoUrl:i}),d=p.makeWeb3Provider(n,c),e.abrupt("return",{provider:d,interface:{name:"Coinbase Wallet",connect:function(){return new Promise((function(e,n){d.enable().then((function(n){return e(n)})).catch((function(){return n({message:"This dapp needs access to your account information."})}))}))},disconnect:function(){d.disconnect()},address:{get:function(){return u(d)}},network:{get:function(){return s(d)}},balance:{get:function(){return o(d)}}}});case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){o(i,r,a,c,u,"next",e)}function u(e){o(i,r,a,c,u,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}(),type:"sdk",desktop:!0,preferred:u}}}}]);