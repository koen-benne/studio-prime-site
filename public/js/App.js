const t="_$DX_DELEGATE";function e(e,n=window.document){const o=n[t]||(n[t]=new Set);for(let t=0,a=e.length;t<a;t++){const a=e[t];o.has(a)||(o.add(a),n.addEventListener(a,c))}}function c(t){const e=`$$${t.type}`;let c=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==c&&Object.defineProperty(t,"target",{configurable:!0,value:c}),Object.defineProperty(t,"currentTarget",{configurable:!0,get:()=>c||document});c;){const n=c[e];if(n&&!c.disabled){const o=c[`${e}Data`];if(void 0!==o?n.call(c,o,t):n.call(c,t),t.cancelBubble)return}c=c._$host||c.parentNode||c.host}}e(["click"]),e(["click"]);
