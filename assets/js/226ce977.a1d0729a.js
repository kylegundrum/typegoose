"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[9873],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,n,r,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=g[0],v=g[1],h=f({queryString:l,groupId:u}),y=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],T=w[1],x=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),T(e)}),[k,T,p]),tabValues:p}}var b=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},9918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4866),s=n(5162),l=["components"],u={id:"using-with-class-transformer",title:"Using with class-transformer"},c=void 0,p={unversionedId:"guides/integration-examples/using-with-class-transformer",id:"guides/integration-examples/using-with-class-transformer",title:"Using with class-transformer",description:"Last updated for:",source:"@site/../docs/guides/integration-examples/class-transformer.md",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/using-with-class-transformer",permalink:"/typegoose/docs/guides/integration-examples/using-with-class-transformer",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/integration-examples/class-transformer.md",tags:[],version:"current",frontMatter:{id:"using-with-class-transformer",title:"Using with class-transformer"},sidebar:"guides",previous:{title:"Error & Warning Details",permalink:"/typegoose/docs/guides/error-warning-details"},next:{title:"Using with @deepkit/type",permalink:"/typegoose/docs/guides/integration-examples/using-with-deepkit-type"}},d={},m=[{value:"Implementation",id:"implementation",level:2}],f={toc:m},g="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last updated for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@10.0.0\nclass-transformer@0.5.1\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This guide shows how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"typegoose")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer"),"."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save class-transformer@~0.5.1\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add class-transformer@~0.5.1\n")))),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Suppose you have this ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," class decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Exclude, Expose, Transform } from 'class-transformer';\nimport { getModelForClass, mongoose, prop } from '@typegoose/typegoose';\n\n// re-implement base Document to allow class-transformer to serialize/deserialize its properties\n// This class is needed, otherwise \"_id\" and \"__v\" would be excluded from the output\nclass DocumentCT {\n  @Expose()\n  // makes sure that when deserializing from a Mongoose Object, ObjectId is serialized into a string\n  @Transform((value) => {\n    if ('value' in value) {\n      // HACK: this is changed because of https://github.com/typestack/class-transformer/issues/879\n      // return value.value.toString(); // because \"toString\" is also a wrapper for \"toHexString\"\n      return value.obj[value.key].toString();\n    }\n\n    return 'unknown value';\n  })\n  public _id: string;\n\n  @Expose()\n  public __v: number;\n}\n\n@Exclude()\nclass Account extends DocumentCT {\n  @prop()\n  @Expose()\n  public email: string;\n\n  @prop()\n  @Expose({ groups: ['admin'] })\n  public password: string;\n}\n\nconst AccountModel = getModelForClass(Account);\n")),(0,o.kt)("p",null,"Side-Note: Typegoose doesn't provide a class like ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentCT")," by default, because this would require adding ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," as a dependency."),(0,o.kt)("p",null,"You can then use, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"lean()")," on the query:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// lean return a Plain Old Javascript Object\nconst pojo = await AccountModel.findById(id).orFail().lean().exec();\n// deserialize Plain Old Javascript Object into an instance of the Account class\nconst deserialized = plainToClass(Account, pojo);\n// serialize Account instance back to a Plain Old Javascript Object, applying class-transformer's magic\nconst serialized = instanceToPlain(deserialized);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"or a normal document:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// exec returns a Mongoose Object\nconst mo = await AccountModel.findById(id).orFail().exec();\n// deserialize Mongoose Object into an instance of the Account class\nconst deserialized = plainToClass(Account, mo);\n// serialize Account instance back to a Plain Old Javascript Object, applying class-transformer's magic\nconst serialized = instanceToPlain(deserialized);\n")))),(0,o.kt)("p",null,"As you can see from these examples, there is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a redundant step to first turn the output of the query into a full instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"plainToClass(..., ...)")),(0,o.kt)("li",{parentName:"ul"},"before being able to benefit from its features for serialization: ",(0,o.kt)("inlineCode",{parentName:"li"},"instanceToPlain(...)"))),(0,o.kt)("p",null,"The reason for doing this is so queries will output ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentType<Account>")," (Mongoose Document) instead of required ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," (Plain Object / instance of the Class) in this example."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," can only operate its magic on instances of annotated classes."),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information, you can always look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/test/tests/classTransformer.test.ts"},"typegoose ",(0,o.kt)("inlineCode",{parentName:"a"},"class-transformer")," tests"))))}b.isMDXComponent=!0}}]);