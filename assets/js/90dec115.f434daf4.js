"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8174],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(7294),a=t(6010),r={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(7462),a=t(7294),r=t(6010),o=t(2466),s=t(6550),l=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,r=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:i});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function h(e){var n,t,i,r,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,d=p(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),y=h[0],b=h[1],g=f({queryString:l,groupId:c}),v=g[0],k=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Nk)(n),i=t[0],r=t[1],[i,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),M=w[0],N=w[1],T=function(){var e=null!=v?v:M;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),N(e)}),[k,N,d]),tabValues:d}}var y=t(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var n=e.className,t=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=u.indexOf(n),i=c[t].value;i!==s&&(d(n),l(i))},m=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var i,a=u.indexOf(e.currentTarget)+1;t=null!=(i=u[a])?i:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;t=null!=(r=u[o])?r:u[u.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,i=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var r=t.find((function(e){return e.props.value===i}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})})))}function k(e){var n=h(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},a.createElement(g,(0,i.Z)({},e,n)),a.createElement(v,(0,i.Z)({},e,n)))}function w(e){var n=(0,y.Z)();return a.createElement(k,(0,i.Z)({key:String(n)},e))}},6393:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=t(4866),s=t(5162),l=["components"],c={id:"nested-discriminators",title:"Nested Discriminators"},u=void 0,d={unversionedId:"guides/advanced/nested-discriminators",id:"guides/advanced/nested-discriminators",title:"Nested Discriminators",description:"Use-Case",source:"@site/../docs/guides/advanced/nested-discriminators.mdx",sourceDirName:"guides/advanced",slug:"/guides/advanced/nested-discriminators",permalink:"/typegoose/docs/guides/advanced/nested-discriminators",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/nested-discriminators.mdx",tags:[],version:"current",frontMatter:{id:"nested-discriminators",title:"Nested Discriminators"},sidebar:"guides",previous:{title:"Non-Nested Discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators"},next:{title:"Typegoose's Name Generation",permalink:"/typegoose/docs/guides/advanced/name-generation"}},p={},m=[{value:"Use-Case",id:"use-case",level:2},{value:"First thought",id:"first-thought",level:2},{value:"Fixing it with Nested Discriminators",id:"fixing-it-with-nested-discriminators",level:2},{value:"Extras",id:"extras",level:2},{value:"Multiple ways to define nested discriminators",id:"multiple-ways-to-define-nested-discriminators",level:3},{value:"See Also",id:"see-also",level:2}],f={toc:m},h="wrapper";function y(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)(h,(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-case"},"Use-Case"),(0,r.kt)("p",null,"If you don't know an use case for this, consider the following:",(0,r.kt)("br",{parentName:"p"}),"\n","A Veterinarian that wants to store medication information about the current patients in their care, how would it be done in mongoose / typegoose?"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This Guide will use similar examples and guide style to that from ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/non-nested-discriminators"},"Non-Nested-Discriminators"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Nested Discriminators may also be called "Embedded Discriminators".')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This Guide will use the ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/assertions"},(0,r.kt)("inlineCode",{parentName:"a"},"assertion"))," function that typegoose provides.",(0,r.kt)("br",{parentName:"p"}),"\n","TL;DR: This function is basically like NodeJS's ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assertvalue-message"},(0,r.kt)("inlineCode",{parentName:"a"},"assert")),", just more typescript friendly.")),(0,r.kt)("h2",{id:"first-thought"},"First thought"),(0,r.kt)("p",null,"At first you might think to do a basic array, that is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Mixed"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface MedicationA {\n  name: string;\n  amount: number;\n}\n\ninterface MedicationB {\n  name: string;\n  length: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  // Even when not setting the type explicitly, the resulting type would be "Mixed" with the typescript type below\n  @prop({ type: mongoose.Schema.Types.Mixed })\n  public medications?: (MedicationA | MedicationB)[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n')),(0,r.kt)("p",null,"And then in some code accessing the properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const doc = await AnimalModel.create({\n  patientNumber: 0,\n  medications: [\n    {\n      name: 'med1',\n      amount: 10,\n    } as MedicationA,\n    {\n      name: 'med2',\n      length: 5,\n    } as MedicationB,\n    {\n      unknownType: 1,\n    },\n  ],\n});\n\nassertion(doc.medications[0].name === 'med1');\nassertion(doc.medications[1].name === 'med2');\nassertion(doc.medications[2].unknownType === 1);\nassertion(doc.medications.length === 3);\n")),(0,r.kt)("p",null,"Which is obviously problematic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No Runtime validation and no Middleware applied to elements of the array (because of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Mixed"),")"),(0,r.kt)("li",{parentName:"ul"},"Because of no validation, unknown properties like ",(0,r.kt)("inlineCode",{parentName:"li"},"unknownType")," will persist")),(0,r.kt)("h2",{id:"fixing-it-with-nested-discriminators"},"Fixing it with Nested Discriminators"),(0,r.kt)("p",null,"The code from ",(0,r.kt)("a",{parentName:"p",href:"#first-thought"},"First though")," is not that far off of what nested discriminators will need to work:"),(0,r.kt)(o.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ @modelOptions({\n+   schemaOptions: {\n+     // Set the property key which is used to discriminate between the different types\n+     discriminatorKey: 'name',\n+     // Disable automatic \"_id\" property\n+     _id: false,\n+   },\n+ })\n+ class MedicationBase {\n+   @prop({ required: true })\n+   public name!: string;\n+ }\n\n+ enum MedicationTypes {\n+   MedicationA = 'MedicationA',\n+   MedicationB = 'MedicationB',\n+ }\n\n- interface MedicationA {\n-   name: string;\n-   amount: number;\n+ class MedicationA extends MedicationBase {\n+   @prop({ required: true })\n+   public amount!: number;\n}\n\n- interface MedicationB {\n-   name: string;\n-   length: number;\n+ class MedicationB extends MedicationBase {\n+   @prop({ required: true })\n+   public length!: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n-   // Even when not setting the type explicitly, the resulting type would be \"Mixed\" with the typescript type below\n-   @prop({ type: mongoose.Schema.Types.Mixed })\n-   public medications?: (MedicationA | MedicationB)[];\n+   @prop({\n+     required: true,\n+     // Set the Base class, which all types need to extend from\n+     type: MedicationBase,\n+     // Set the nested discriminators that are used for this property\n+     discriminators: () => [\n+       // The \"advanced\" way of defining types is used here, to make it easier to understand\n+       { type: MedicationA, value: MedicationTypes.MedicationA },\n+       { type: MedicationB, value: MedicationTypes.MedicationB },\n+     ],\n+   })\n+   public medications!: MedicationBase[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n"))),(0,r.kt)(s.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({\n  schemaOptions: {\n    // Set the property key which is used to discriminate between the different types\n    discriminatorKey: 'name',\n    // Disable automatic \"_id\" property\n    _id: false,\n  },\n})\nclass MedicationBase {\n  @prop({ required: true })\n  public name!: string;\n}\n\n// A Enum is used to easily keep track of different types, instead of hardcoding it in many places\nenum MedicationTypes {\n  MedicationA = 'MedicationA',\n  MedicationB = 'MedicationB',\n}\n\nclass MedicationA extends MedicationBase {\n  @prop({ required: true })\n  public amount!: number;\n}\n\nclass MedicationB extends MedicationBase {\n  @prop({ required: true })\n  public length!: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  @prop({\n    required: true,\n    // Set the Base class, which all types need to extend from\n    type: MedicationBase,\n    // Set the nested discriminators that are used for this property\n    discriminators: () => [\n      // The \"advanced\" way of defining types is used here, to make it easier to understand, see section #Extras\n      { type: MedicationA, value: MedicationTypes.MedicationA },\n      { type: MedicationB, value: MedicationTypes.MedicationB },\n    ],\n  })\n  public medications!: MedicationBase[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n")))),(0,r.kt)("p",null,"And then in some code accessing the properties again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const doc = await AnimalModel.create({\n  patientNumber: 1,\n  medications: [\n    {\n      name: MedicationTypes.MedicationA,\n      amount: 10,\n    } as MedicationA,\n    {\n      name: MedicationTypes.MedicationB,\n      length: 5,\n    } as MedicationB,\n  ],\n});\n\ntry {\n  await AnimalModel.create({\n    patientNumber: 2,\n    medications: [\n      {\n        unknownType: 1,\n      },\n    ],\n  });\n\n  throw new Error('Expected create to fail');\n} catch (err) {\n  assertion(err instanceof mongoose.Error.ValidationError);\n}\n\nassertion(doc.medications[0].name === MedicationTypes.MedicationA);\nassertion(doc.medications[1].name === MedicationTypes.MedicationB);\nassertion(doc.medications.length === 2);\n")),(0,r.kt)("p",null,"This Time, it will correctly validate and apply middleware to all elements of the array, meaning it will correctly strip all unknown elements and error if elements are missing (as can be seen in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try-catch"),")."),(0,r.kt)("h2",{id:"extras"},"Extras"),(0,r.kt)("h3",{id:"multiple-ways-to-define-nested-discriminators"},"Multiple ways to define nested discriminators"),(0,r.kt)("p",null,"There are currently multiple ways to define nested discriminators, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directly and only the ",(0,r.kt)("inlineCode",{parentName:"li"},"Class")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscriminatorObject")," (which is used in the examples)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'class Animal {\n  @prop({\n    type: MedicationBase,\n    // Define nested discriminators with a "DiscriminatorObject"\n    // Explicitly set the discriminator value\n    discriminators: () => [\n      { type: MedicationA, value: MedicationTypes.MedicationA },\n      { type: MedicationB, value: MedicationTypes.MedicationB },\n    ],\n    // Define nested discriminators with the "Class" directly\n    // Implicitly converts the generated model name to the discriminator value\n    discriminators: () => [\n      MedicationA,\n      MedicationB,\n    ],\n  })\n  public medications!: MedicationBase[];\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"@prop")," option ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#discriminators"},(0,r.kt)("inlineCode",{parentName:"a"},"discriminators")),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Also see the blog post from ",(0,r.kt)("inlineCode",{parentName:"li"},"thecodebarbarian")," (or also known as ",(0,r.kt)("inlineCode",{parentName:"li"},"vkarpov15")," on github) about ",(0,r.kt)("a",{parentName:"li",href:"https://thecodebarbarian.com/mongoose-4.12-single-embedded-discriminators.html"},"Embedded Discriminators"),".")))}y.isMDXComponent=!0}}]);