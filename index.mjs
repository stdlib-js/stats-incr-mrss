// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msum@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=t.isPrimitive,s=r,n=i;var m=function(t){var r;if(!e(t))throw new TypeError(n("invalid argument. Must provide a positive integer. Value: `%s`.",t));return r=s(t),function(t,i){var e;if(0===arguments.length)return r();return r((e=i-t)*e)}};export{m as default};
//# sourceMappingURL=index.mjs.map
