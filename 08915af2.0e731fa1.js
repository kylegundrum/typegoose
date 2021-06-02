(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,s=m["".concat(o,".").concat(O)]||m[O]||u[O]||b;return n?r.a.createElement(s,c(c({ref:t},i),{},{components:n})):r.a.createElement(s,c({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<b;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(134)),o={id:"mongoose-compatibility",title:"Mongoose Compatibility"},c={unversionedId:"guides/mongoose-compatibility",id:"guides/mongoose-compatibility",isDocsHomePage:!1,title:"Mongoose Compatibility",description:"The version values use npm's semver convention.",source:"@site/../docs/guides/mongoose-compatibility.md",slug:"/guides/mongoose-compatibility",permalink:"/typegoose/docs/guides/mongoose-compatibility",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/mongoose-compatibility.md",version:"current",sidebar:"guides",previous:{title:"Using with class-transformer",permalink:"/typegoose/docs/guides/advanced/using-with-class-transformer"},next:{title:"Migrate to 7.0.0",permalink:"/typegoose/docs/guides/migrate-7"}},l=[],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},Object(b.b)("sub",null,"The version values use ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://www.npmjs.com/package/semver"}),"npm's semver convention"),"."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Typegoose Version"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mongoose Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.6.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5.10.0 - 5.10.18")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.5.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5.10.0 - 5.10.18")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.4.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5.10.0 - 5.10.18")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.3.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.9.22")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.2.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.9.17")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.1.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.9.14")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7.0.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.9.9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.4.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.9.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.3.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.8.11")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.2.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.8.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.1.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.7.7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.0.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.7.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5.9.x"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"~5.6.7")))))}p.isMDXComponent=!0}}]);