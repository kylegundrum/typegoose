"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[3042],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||c[y]||o;return n?r.createElement(m,p(p({ref:t},d),{},{components:n})):r.createElement(m,p({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={id:"return-model-type",title:"ReturnModelType<T, QueryHelpers>"},l=void 0,s={unversionedId:"api/types/return-model-type",id:"api/types/return-model-type",title:"ReturnModelType<T, QueryHelpers>",description:"Typings:",source:"@site/../docs/api/types/returnModelType.md",sourceDirName:"api/types",slug:"/api/types/return-model-type",permalink:"/typegoose/docs/api/types/return-model-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/returnModelType.md",tags:[],version:"current",frontMatter:{id:"return-model-type",title:"ReturnModelType<T, QueryHelpers>"},sidebar:"docs",previous:{title:"DocumentType<T, QueryHelpers>",permalink:"/typegoose/docs/api/types/document-type"},next:{title:"Ref<PopulatedType, RawId>",permalink:"/typegoose/docs/api/types/ref-type"}},d={},u=[{value:"Example",id:"example",level:2},{value:"Difference to <code>ModelType</code>",id:"difference-to-modeltype",level:2}],c={toc:u},y="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)(y,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ReturnModelType<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"U")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"AnyParamConstructor<any>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of a Class to get a Model type of")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"QueryHelpers")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/typegoose/docs/api/decorators/query-method"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryHelpers"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add Query Helpers to the type")))),(0,o.kt)("p",null,"The Type ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModelType<T, QueryHelpers>")," is the type used to have type information for a class converted to a Mongoose Model."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"T")," is the logical ",(0,o.kt)("inlineCode",{parentName:"li"},"AND")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"mongoose.Model<DocumentType<T>>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"T")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QueryHelpers")," is for a Query-Helpers interface, ",(0,o.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/query-method"},"more here"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When using Classes directly it has to always be ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof Class"),", to get the static representation of a class instead of the instance of a class.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This type should always be used over (internal) ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelType"),",")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Kitten {\n  @prop()\n  public name?: string;\n\n  // this is a Model Method\n  public static findByName(this: ReturnModelType<typeof Kitten>, name: string) {\n    return this.find({ name }).exec(); // thanks to "ReturnModelType" "this" has type information\n  }\n}\n\nconst KittenModel: ReturnModelType<typeof Kitten> = getModelForClass(Kitten);\n')),(0,o.kt)("h2",{id:"difference-to-modeltype"},"Difference to ",(0,o.kt)("inlineCode",{parentName:"h2"},"ModelType")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ModelType")," is the logical ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Model<DocumentType<T>>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModelType")," is an extension to ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelType"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"ModelType<InstanceType<U>> & U")))}m.isMDXComponent=!0}}]);