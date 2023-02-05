"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7563],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"known-issues",title:"Known Issues"},l=void 0,p={unversionedId:"guides/known-issues",id:"guides/known-issues",title:"Known Issues",description:"Known Issues",source:"@site/../docs/guides/known-issues.md",sourceDirName:"guides",slug:"/guides/known-issues",permalink:"/typegoose/docs/guides/known-issues",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/known-issues.md",tags:[],version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"guides",previous:{title:"FAQ",permalink:"/typegoose/docs/guides/faq"},next:{title:"Mongoose Compatibility",permalink:"/typegoose/docs/guides/mongoose-compatibility"}},c={},d=[{value:"Known Issues",id:"known-issues",level:2},{value:"transpile-only",id:"transpile-only",level:3},{value:"tsconfig-paths",id:"tsconfig-paths",level:3},{value:"Self-Containing classes",id:"self-containing-classes",level:3},{value:"Babel",id:"babel",level:3},{value:"prop on get &amp; set",id:"prop-on-get--set",level:3},{value:"Webpack",id:"webpack",level:3},{value:"<code>@types/node</code> breaking change",id:"typesnode-breaking-change",level:3},{value:"NodeJS 17.5 Breaking Change",id:"nodejs-175-breaking-change",level:3},{value:"<code>DocumentType</code> is not generic",id:"documenttype-is-not-generic",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3Ahasezoey"},"Please look here first, to decide if it is a Typegoose or a Mongoose issue.")),(0,i.kt)("h3",{id:"transpile-only"},"transpile-only"),(0,i.kt)("p",null,"It is not recommended to run compilers with option ",(0,i.kt)("inlineCode",{parentName:"p"},"transpile-only")," (like ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc --transpile-only")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node --transpile-only"),"), because this will act like not having ",(0,i.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," enabled, see ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},'Use Without "emitDecoratorMetadata"'),"."),(0,i.kt)("h3",{id:"tsconfig-paths"},"tsconfig-paths"),(0,i.kt)("p",null,"TypeScript provides the option to alias paths (with ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig-paths"),"), but is somehow incompatible with Typegoose, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/szokodiakos/typegoose/issues/392"},"more info in here"),"."),(0,i.kt)("h3",{id:"self-containing-classes"},"Self-Containing classes"),(0,i.kt)("p",null,"It is currently not (and probably never) possible to use a self-containing class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'class SomeClass {\n  @prop()\n  public ref: SomeClass; // ERROR "Maximum Class Stack Size Exceeded"\n}\n')),(0,i.kt)("p",null,"Though Deferred Reference will still work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeClass {\n  @prop({ ref: () => SomeClass }) // or hardcode the string\n  public ref: Ref<SomeClass>;\n}\n")),(0,i.kt)("h3",{id:"babel"},"Babel"),(0,i.kt)("span",{class:"badge badge--warning"},"This Section may be outdated"),(0,i.kt)("p",null,"Using babel as a TypeScript compiler is known to cause problems (like incorrect types) (see ",(0,i.kt)("a",{parentName:"p",href:"#transpile-only"},(0,i.kt)("inlineCode",{parentName:"a"},"transpile-only")),"), it is recommended you use ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," directly."),(0,i.kt)("p",null,"If Babel is still needed, then read ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-typescript"},"Babel TypeScript preset")," and install the following plugins:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To reproduce the typescript decorators (",(0,i.kt)("inlineCode",{parentName:"li"},"experimentalDecorators"),"), use ",(0,i.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"},(0,i.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-decorators"))),(0,i.kt)("li",{parentName:"ul"},"To reproduce the decorator metadata output (",(0,i.kt)("inlineCode",{parentName:"li"},"emitDecoratorMetadata"),"), use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-transform-typescript-metadata"))),(0,i.kt)("li",{parentName:"ul"},"Plugin ",(0,i.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-class-properties"))," is required to solve the error ",(0,i.kt)("inlineCode",{parentName:"li"},"Syntax error, Definitely assigned fields cannot be initialized here, but only in the constructor")," which would come with using decorators (legacy / stage 1) nowdays")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," is not strictly needed, see ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},"Use Without ",(0,i.kt)("inlineCode",{parentName:"a"},"emitDecoratorMetadata")),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    ['@babel/plugin-proposal-decorators', { legacy: true }],\n    'babel-plugin-transform-typescript-metadata',\n    ['@babel/plugin-proposal-class-properties', { loose: true }],\n  ]\n}\n")),(0,i.kt)("h3",{id:"prop-on-get--set"},"prop on get & set"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," cannot be applied to ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," (ES6 class keywords), because virtuals do not accept options & ",(0,i.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/advanced_schemas.html#creating-from-es6-classes-using-loadclass"},(0,i.kt)("inlineCode",{parentName:"a"},"schema.loadClass"))," wouldn't load these."),(0,i.kt)("h3",{id:"webpack"},"Webpack"),(0,i.kt)("p",null,"Webpack's ",(0,i.kt)("inlineCode",{parentName:"p"},"minimize")," cannot be used with typegoose, because typegoose relies heavily on reflection and property names."),(0,i.kt)("p",null,"In webpack, it can be disabled when adding the following to the webpack config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  optimization: {\n    minimize: false\n  }\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There are some workarounds for some minification problems, like the class name (which would be the model name) can be changed with ",(0,i.kt)("a",{parentName:"p",href:"../api/decorators/model-options#customname"},(0,i.kt)("inlineCode",{parentName:"a"},"customName")),".")),(0,i.kt)("h3",{id:"typesnode-breaking-change"},(0,i.kt)("inlineCode",{parentName:"h3"},"@types/node")," breaking change"),(0,i.kt)("p",null,"Early January 2022, there was a update in ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/node"),", which was actually a breaking change which causes typescript compile errors to show up (like for ",(0,i.kt)("inlineCode",{parentName:"p"},"GridFSBucketWriteStream")," from mongodb, even though unused)."),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"The current only workaround is to pin the versions of ",(0,i.kt)("inlineCode",{parentName:"del"},"@types/node")," used to ones before the update, which in the case of typegoose is ",(0,i.kt)("inlineCode",{parentName:"del"},"@types/node@12.20.39"),"."),(0,i.kt)("br",{parentName:"p"}),"\n","As of 02-02-2022 (d/m/y), mongoose has released ",(0,i.kt)("inlineCode",{parentName:"p"},"6.2.0")," which upgraded ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb")," to a version that has updated types, and typegoose ",(0,i.kt)("inlineCode",{parentName:"p"},"9.6.0")," uses this mongoose version."),(0,i.kt)("h3",{id:"nodejs-175-breaking-change"},"NodeJS 17.5 Breaking Change"),(0,i.kt)("p",null,"NodeJS 17.5 was released, which included a breaking change for mongoose, which resulted in a error (/ crash of the application)."),(0,i.kt)("p",null,"Mongoose has released version ",(0,i.kt)("inlineCode",{parentName:"p"},"6.2.2")," on 16.2.22 (d/m/y) which fixes the issue on mongoose's side.",(0,i.kt)("br",{parentName:"p"}),"\n","Since 24.2.22 (d/m/y) NodeJS 17.6 is released which should include the fix."),(0,i.kt)("h3",{id:"documenttype-is-not-generic"},(0,i.kt)("inlineCode",{parentName:"h3"},"DocumentType")," is not generic"),(0,i.kt)("p",null,"Typescript has its own ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentType")," when having ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM")," enabled in ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," option ",(0,i.kt)("inlineCode",{parentName:"p"},"lib"),", in any case the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentType")," has to be imported directly from typegoose.",(0,i.kt)("br",{parentName:"p"}),"\n","It is also recommended to remove the option ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," option ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," when possible."))}h.isMDXComponent=!0}}]);