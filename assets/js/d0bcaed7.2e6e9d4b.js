"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7298],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<r;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(7294),a=t(6010),r={tabItem:"tabItem_Ymn6"};function s(e){var n=e.children,t=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return w}});var o=t(7462),a=t(7294),r=t(6010),s=t(2466),l=t(6550),u=t(1980),i=t(7392),p=t(12);function m(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:m(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,r=(0,l.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:o});return[(0,u._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[s,r])]}function f(e){var n,t,o,r,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,i=e.groupId,m=c(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),y=f[0],h=f[1],b=g({queryString:u,groupId:i}),k=b[0],v=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),t=(0,p.Nk)(n),o=t[0],r=t[1],[o,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),C=w[0],N=w[1],I=function(){var e=null!=k?k:C;return d({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);h(e),v(e),N(e)}),[v,N,m]),tabValues:m}}var y=t(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var n=e.className,t=e.block,l=e.selectedValue,u=e.selectValue,i=e.tabValues,p=[],m=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=p.indexOf(n),o=i[t].value;o!==l&&(m(n),u(o))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var o,a=p.indexOf(e.currentTarget)+1;t=null!=(o=p[a])?o:p[0];break;case"ArrowLeft":var r,s=p.indexOf(e.currentTarget)-1;t=null!=(r=p[s])?r:p[p.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return p.push(e)},onKeyDown:d,onClick:c},s,{className:(0,r.Z)("tabs__item",h.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,o=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var r=t.find((function(e){return e.props.value===o}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})})))}function v(e){var n=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(b,(0,o.Z)({},e,n)),a.createElement(k,(0,o.Z)({},e,n)))}function w(e){var n=(0,y.Z)();return a.createElement(v,(0,o.Z)({key:String(n)},e))}},1076:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),s=t(4866),l=t(5162),u=["components"],i={id:"common-plugins",title:"Common Plugins"},p=void 0,m={unversionedId:"guides/integration-examples/common-plugins",id:"guides/integration-examples/common-plugins",title:"Common Plugins",description:"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to typegoose's repository.",source:"@site/../docs/guides/integration-examples/common-plugins.mdx",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/common-plugins",permalink:"/typegoose/docs/guides/integration-examples/common-plugins",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/integration-examples/common-plugins.mdx",tags:[],version:"current",frontMatter:{id:"common-plugins",title:"Common Plugins"},sidebar:"guides",previous:{title:"Using with @deepkit/type",permalink:"/typegoose/docs/guides/integration-examples/using-with-deepkit-type"},next:{title:"Typegoose Logger",permalink:"/typegoose/docs/guides/advanced/logger"}},c={},d=[{value:"mongoose-autopopulate",id:"mongoose-autopopulate",level:2},{value:"mongoose-findorcreate",id:"mongoose-findorcreate",level:2},{value:"mongoose-sequence",id:"mongoose-sequence",level:2},{value:"@typegoose/auto-increment",id:"typegooseauto-increment",level:2},{value:"AutoIncrementSimple",id:"autoincrementsimple",level:3},{value:"AutoIncrementID",id:"autoincrementid",level:3}],g={toc:d},f="wrapper";function y(e){var n=e.components,t=(0,a.Z)(e,u);return(0,r.kt)(f,(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"typegoose's repository"),"."),(0,r.kt)("p",null,"If the Example does not have tabs for ",(0,r.kt)("inlineCode",{parentName:"p"},"esModuleInterop"),", then assume it is only written and tested for ",(0,r.kt)("inlineCode",{parentName:"p"},"esModuleInterop: false"),"."),(0,r.kt)("h2",{id:"mongoose-autopopulate"},"mongoose-autopopulate"),(0,r.kt)("p",null,"Last updated for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.0.0\nmongoose-autopopulate@0.14.0\n")),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-autopopulate\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-autopopulate\n")))),(0,r.kt)("p",null,"Typegoose has the prop option ",(0,r.kt)("inlineCode",{parentName:"p"},"autopopulate")," implemented, but it only has an effect, if ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mongodb-js/mongoose-autopopulate"},(0,r.kt)("inlineCode",{parentName:"a"},"mongoose-autopopulate"))," is installed and used too."),(0,r.kt)(s.Z,{groupId:"esModuleInterop",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"esModuleInterop-false",label:"esModuleInterop: false",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport * as autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin don't work with \"esModuleInterop: false\"\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n"))),(0,r.kt)(l.Z,{value:"esModuleInterop-true",label:"esModuleInterop: true",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate)\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," which refers back to its own class/model, like having a User class with a ",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy")," field referring back to User, then you'll need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDepth")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"autocomplete")," to 1. If you don't do this, Mongoose will do recursive calls to\nthe user collection 10 times, extremely delaying the output of the query. Below is an example of how to set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDepth"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// the types of "autopopulate" may change depending on the tsconfig option "esModuleInterop"\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin don\'t work\nclass SomeClass {\n  @prop({ autopopulate: { maxDepth: 1 }, ref: \'SomeReferencedClass\' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n')),(0,r.kt)("h2",{id:"mongoose-findorcreate"},"mongoose-findorcreate"),(0,r.kt)("p",null,"Last updated for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@10.0.0\nmongoose-findorcreate@3.0.0\n")),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-findorcreate\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-findorcreate\n")))),(0,r.kt)("p",null,"Typegoose has a default class for ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoose-findorcreate")," that has all the types it needs. Here's how to use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DocumentType, getModelForClass, plugin, prop, defaultClasses } from '@typegoose/typegoose';\nimport * as mongoose from 'mongoose';\nimport * as findorcreate from 'mongoose-findorcreate';\n\n@plugin(findorcreate)\nclass SomeClass extends defaultClasses.FindOrCreate {\n  @prop()\n  public someField!: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' }));\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' })); // both will give the same output\n\n  await mongoose.disconnect();\n})();\n")),(0,r.kt)("h2",{id:"mongoose-sequence"},"mongoose-sequence"),(0,r.kt)("p",null,"Last updated for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@7.1.0\nmongoose-sequence@5.0.0\n")),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-sequence\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-sequence\n")))),(0,r.kt)("p",null,"To use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence"},(0,r.kt)("inlineCode",{parentName:"a"},"mongoose-sequence")),", import the plugin and use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import AutoIncrementFactory from 'mongoose-sequence';\n\n// AutoIncrement now is the instance\nconst AutoIncrement = AutoIncrementFactory(mongoose);\n\n@plugin(AutoIncrement, { inc_field: '_id', start_seq: 200 })\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id: number;\n}\n\n// The Plugin options can be applied too\n@plugin<mongoose.SequenceOptions>(AutoIncrement, { inc_field: '_id' }) // Note: \"start_seq\" is not in the \"SequenceOptions\" type\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id!: number;\n}\n")),(0,r.kt)("p",null,"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence/issues/83"},"this issue"),"."),(0,r.kt)("h2",{id:"typegooseauto-increment"},"@typegoose/auto-increment"),(0,r.kt)("p",null,"Last updated for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@10.0.0\n@typegoose/auto-increment@2.0.0\n")),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @typegoose/auto-increment\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @typegoose/auto-increment\n")))),(0,r.kt)("p",null,"The Typegoose project provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/auto-increment"},(0,r.kt)("inlineCode",{parentName:"a"},"auto-increment")," plugin")," for Mongoose. Here is how to use it:"),(0,r.kt)("h3",{id:"autoincrementsimple"},"AutoIncrementSimple"),(0,r.kt)("p",null,"Always increments the field on each save"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementSimple, [{ field: 'someIncrementedField' }])\nclass SomeClass {\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 });\n\nawait doc.save(); // someIncrementedField will be 11\n")),(0,r.kt)("h3",{id:"autoincrementid"},"AutoIncrementID"),(0,r.kt)("p",null,"Only increases the field if the document is ",(0,r.kt)("em",{parentName:"p"},"new")," and the counter is stored in a counter-collection (default field: ",(0,r.kt)("inlineCode",{parentName:"p"},"_id"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementID, {})\nclass SomeClass {\n  @prop()\n  public _id: number;\n\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 }); // _id will be 1\n")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some or all of the listed plugins might not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"@types")," package, so types have to be mostly manually declared.")))}y.isMDXComponent=!0}}]);