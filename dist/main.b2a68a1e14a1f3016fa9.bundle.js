!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(...e)=>e.every(e=>"number"==typeof e&&!isNaN(e))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);class o{constructor(){this.errorBox=document.getElementById("error")}handleAdditionError(e,t){const n=e.reduce((e,n,o)=>Object(r.a)(t[o])?e+"":e+`${n} is not a number. `,"Please enter two valid numbers! ");this.errorBox.classList.remove("invisible"),this.errorBox.innerText=n}hideErrors(){this.errorBox.classList.add("invisible")}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){this.numberOneInput=document.getElementById("numberOne"),this.numberTwoInput=document.getElementById("numberTwo"),this.addValuesButton=document.getElementById("addValues"),this.resultDiv=document.getElementById("result")}getInputs(){return[this.numberOneInput.value,this.numberTwoInput.value]}setResult(e){this.resultDiv.innerText=e}onClick(e){this.addValuesButton.addEventListener("click",e)}}},function(e,t,n){"use strict";var r=n(0);n.d(t,"a",(function(){return o}));const o=(e,t)=>{e.hideErrors(),t.onClick(()=>{e.hideErrors();const n=t.getInputs(),o=((...e)=>e.map(e=>parseInt(e)))(...n);if(Object(r.a)(...o)){const[e,n]=o;t.setResult(e+n)}else t.setResult(""),e.handleAdditionError(n,o)})}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),r=n(1),o=n(2);n(6);const u=new r.a,i=new o.a;Object(t.a)(u,i),console.lg("test"),e&&e.hot&&e.hot.accept()}.call(this,n(5)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){}]);
//# sourceMappingURL=main.b2a68a1e14a1f3016fa9.bundle.js.map