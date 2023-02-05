"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[2683],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5525:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"manual-schema-modification",title:"Manual Schema Modification"},c=void 0,l={unversionedId:"guides/advanced/manual-schema-modification",id:"guides/advanced/manual-schema-modification",title:"Manual Schema Modification",description:"Sometimes manual schema modification is needed, this Guide will describe on how to do it.",source:"@site/../docs/guides/advanced/manual-schema-modification.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/manual-schema-modification",permalink:"/typegoose/docs/guides/advanced/manual-schema-modification",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/manual-schema-modification.md",tags:[],version:"current",frontMatter:{id:"manual-schema-modification",title:"Manual Schema Modification"},sidebar:"guides",previous:{title:"Typegoose's Name Generation",permalink:"/typegoose/docs/guides/advanced/name-generation"},next:{title:'Why overwrite "this"',permalink:"/typegoose/docs/guides/advanced/overwrite-this"}},d={},u=[],m={toc:u},p="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes manual schema modification is needed, this Guide will describe on how to do it."),(0,r.kt)("p",null,"When wanting to get the schema of a class, but not the model yet, then ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/build-schema"},(0,r.kt)("inlineCode",{parentName:"a"},"buildSchema"))," should be used and ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/add-model-to-typegoose"},(0,r.kt)("inlineCode",{parentName:"a"},"addModelToTypegoose"))," to add it to the typegoose cache and get the correct types."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Normal Typegoose Class definition\nclass Cat {\n  @prop()\n  public name?: string;\n}\n\n// "buildSchema" is called like "getModelForClass"\n// "buildSchema" also supports overwriting options like "getModelForClass" (essentially "getModelForClass" passes the options to "buildSchema")\nconst CatSchema = buildSchema(Cat);\n\n// example modifying the schema before adding\n// in this case adding a virtual "getName"\nCatSchema.virtual("getName").get(function() { return this.name });\n\n// The Schema will have to be manually made into a model\nconst CatModelRaw = mongoose.model(getName(Cat), CatSchema);\n\n// And finally the model will get added to the typegoose cache with the class and also have proper types\n// essentially "addModelToTypegoose" re-exports the input model, but cast as the correct typegoose type\nexport const CatModel = addModelToTypegoose(CatModelRaw, Cat);\n')),(0,r.kt)("p",null,"Note: the example above uses ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-name"},(0,r.kt)("inlineCode",{parentName:"a"},"getName"))," to generate the name like typegoose does normally."))}f.isMDXComponent=!0}}]);