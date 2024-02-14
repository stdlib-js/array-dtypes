// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.0-esm/index.mjs";var n={all:["complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]},i=/_and_generic$/;function e(){var e,l,o;return 0===arguments.length?n.all.slice():(o=!1,e=arguments[0],i.test(e)&&"all"!==(e=t(e,i,""))&&(o=!0),l=(l=n[e])?l.slice():[],o&&l.length>0&&l.push("generic"),l)}export{e as default};
//# sourceMappingURL=index.mjs.map
