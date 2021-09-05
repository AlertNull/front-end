"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[8765],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),k=o,y=m["".concat(i,".").concat(k)]||m[k]||c[k]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6109:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],p={sidebar_label:"\u57fa\u7840\uff1aES5\u3001ES6 \u5982\u4f55\u5b9e\u73b0\u7ee7\u627f",sidebar_position:6},i="ES5\u3001ES6 \u5982\u4f55\u5b9e\u73b0\u7ee7\u627f",s={unversionedId:"book2/js-inherite",id:"book2/js-inherite",isDocsHomePage:!1,title:"ES5\u3001ES6 \u5982\u4f55\u5b9e\u73b0\u7ee7\u627f",description:"\u76f8\u5173\u95ee\u9898",source:"@site/docs/book2/js-inherite.md",sourceDirName:"book2",slug:"/book2/js-inherite",permalink:"/awesome-interview/book2/js-inherite",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"\u57fa\u7840\uff1aES5\u3001ES6 \u5982\u4f55\u5b9e\u73b0\u7ee7\u627f",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6846\u67b6\uff1aHOC vs Render Props vs Hooks",permalink:"/awesome-interview/book2/frame-react-hoc-hooks"},next:{title:"\u57fa\u7840\uff1aNew \u64cd\u4f5c\u7b26\u7684\u539f\u7406",permalink:"/awesome-interview/book2/js-new"}},u=[{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",children:[]},{value:"\u56de\u7b54\u5173\u952e\u70b9",id:"\u56de\u7b54\u5173\u952e\u70b9",children:[]},{value:"\u77e5\u8bc6\u70b9\u6df1\u5165",id:"\u77e5\u8bc6\u70b9\u6df1\u5165",children:[{value:"1. \u539f\u578b\u94fe",id:"1-\u539f\u578b\u94fe",children:[]},{value:"2. \u539f\u578b\u94fe\u7ee7\u627f",id:"2-\u539f\u578b\u94fe\u7ee7\u627f",children:[]},{value:"3. \u6784\u9020\u51fd\u6570\u7ee7\u627f",id:"3-\u6784\u9020\u51fd\u6570\u7ee7\u627f",children:[]},{value:"4. \u7ec4\u5408\u7ee7\u627f\uff08\u4f2a\u7ecf\u5178\u7ee7\u627f\uff09",id:"4-\u7ec4\u5408\u7ee7\u627f\u4f2a\u7ecf\u5178\u7ee7\u627f",children:[]},{value:"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",children:[]},{value:"6. ES6 \u4e2d class \u7684\u7ee7\u627f",id:"6-es6-\u4e2d-class-\u7684\u7ee7\u627f",children:[]}]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"es5es6-\u5982\u4f55\u5b9e\u73b0\u7ee7\u627f"},"ES5\u3001ES6 \u5982\u4f55\u5b9e\u73b0\u7ee7\u627f"),(0,a.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e ES5 \u548c ES6 \u7684\u7ee7\u627f\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\u6982\u5ff5")),(0,a.kt)("h2",{id:"\u56de\u7b54\u5173\u952e\u70b9"},"\u56de\u7b54\u5173\u952e\u70b9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u539f\u578b\u94fe\u7ee7\u627f")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6784\u9020\u51fd\u6570\u7ee7\u627f")," ",(0,a.kt)("inlineCode",{parentName:"p"}," ES6 \u7c7b\u7ee7\u627f")),(0,a.kt)("p",null,"\u7ee7\u627f\u662f\u6307\u5b50\u7c7b\u578b\u5177\u5907\u7236\u7c7b\u578b\u7684\u5c5e\u6027\u548c\u884c\u4e3a\uff0c\u4f7f\u4ee3\u7801\u5f97\u4ee5\u590d\u7528\uff0c\u505a\u5230\u8bbe\u8ba1\u4e0a\u7684\u5206\u79bb\u3002JavaScript \u4e2d\u7684\u7ee7\u627f\u4e3b\u8981\u901a\u8fc7\u539f\u578b\u94fe\u548c\u6784\u9020\u51fd\u6570\u6765\u5b9e\u73b0\u3002\u5e38\u89c1\u7684\u7ee7\u627f\u65b9\u6cd5\u6709\uff1aES6 \u4e2d class \u7684\u7ee7\u627f\u3001\u539f\u578b\u94fe\u7ee7\u627f\u3001\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u7b49\u3002"),(0,a.kt)("h2",{id:"\u77e5\u8bc6\u70b9\u6df1\u5165"},"\u77e5\u8bc6\u70b9\u6df1\u5165"),(0,a.kt)("h3",{id:"1-\u539f\u578b\u94fe"},"1. \u539f\u578b\u94fe"),(0,a.kt)("p",null,"\u539f\u578b\u94fe\u7684\u672c\u8d28\u662f\u62d3\u5c55\u539f\u578b\u641c\u7d22\u673a\u5236\u3002\u6bcf\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u79c1\u6709\u5c5e\u6027 ","_","_","proto","_","_","\u3002\u8be5\u5c5e\u6027\u6307\u5411\u5b83\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61 prototype\u3002\u8be5\u539f\u578b\u5bf9\u8c61\u7684 ","_","_","proto","_","_"," \u4e5f\u53ef\u4ee5\u6307\u5411\u5176\u4ed6\u6784\u9020\u51fd\u6570\u7684 prototype\u3002\u4f9d\u6b21\u5c42\u5c42\u5411\u4e0a\uff0c\u76f4\u5230\u4e00\u4e2a\u5bf9\u8c61\u7684 ","_","_","proto","_","_"," \u6307\u5411 null\u3002\u6839\u636e\u5b9a\u4e49\uff0cnull \u6ca1\u6709\u539f\u578b\uff0c\u5e76\u4f5c\u4e3a\u8fd9\u4e2a\u539f\u578b\u94fe\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u73af\u8282\u3002"),(0,a.kt)("p",null,"\u5f53\u8bd5\u56fe\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u5728\u8be5\u5bf9\u8c61\u4e0a\u641c\u5bfb\uff0c\u8fd8\u4f1a\u641c\u5bfb\u8be5\u5bf9\u8c61\u7684\u539f\u578b\uff0c\u4ee5\u53ca\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u7684\u539f\u578b\uff0c\u4f9d\u6b21\u5c42\u5c42\u5411\u4e0a\u641c\u7d22\uff0c\u76f4\u5230\u627e\u5230\u4e00\u4e2a\u540d\u5b57\u5339\u914d\u7684\u5c5e\u6027\u6216\u76f4\u5230\u8fd9\u4e2a\u94fe\u8868\u7ed3\u675f\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.__proto__ === null"),"\uff09\u3002"),(0,a.kt)("h3",{id:"2-\u539f\u578b\u94fe\u7ee7\u627f"},"2. \u539f\u578b\u94fe\u7ee7\u627f"),(0,a.kt)("p",null,"\u539f\u578b\u94fe\u7ee7\u627f\u7684\u601d\u60f3\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5f15\u7528\u7c7b\u578b\u7ee7\u627f\u53e6\u4e00\u4e2a\u5f15\u7528\u7c7b\u578b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function SuperType() {\n  this.b = [1, 2, 3];\n}\n\nfunction SubType() {}\n\nSubType.prototype = new SuperType();\nSubType.prototype.constructor = SubType;\n\nvar sub1 = new SubType();\nvar sub2 = new SubType();\n\n// \u8fd9\u91cc\u5bf9\u5f15\u7528\u7c7b\u578b\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\nsub1.b.push(4);\n\nconsole.log(sub1.b); // [1,2,3,4]\nconsole.log(sub2.b); // [1,2,3,4]\nconsole.log(sub1 instanceof SuperType); // true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7236\u7c7b\u65b0\u589e\u539f\u578b\u65b9\u6cd5/\u539f\u578b\u5c5e\u6027\uff0c\u5b50\u7c7b\u90fd\u80fd\u8bbf\u95ee\u5230\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b80\u5355\u3001\u6613\u4e8e\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5b9e\u73b0\u591a\u7ee7\u627f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u539f\u578b\u4e2d\u7684\u5f15\u7528\u503c\u88ab\u5171\u4eab\uff0c\u5bfc\u81f4\u5b9e\u4f8b\u4e0a\u7684\u4fee\u6539\u4f1a\u76f4\u63a5\u5f71\u54cd\u5230\u539f\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5b50\u7c7b\u5b9e\u4f8b\u65f6\uff0c\u65e0\u6cd5\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u4f20\u53c2\u3002")),(0,a.kt)("h3",{id:"3-\u6784\u9020\u51fd\u6570\u7ee7\u627f"},"3. \u6784\u9020\u51fd\u6570\u7ee7\u627f"),(0,a.kt)("p",null,"\u6784\u9020\u51fd\u6570\u7ee7\u627f\u7684\u601d\u60f3\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u7c7b\u578b\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u4f7f\u6240\u6709\u9700\u8981\u7ee7\u627f\u7684\u5c5e\u6027\u90fd\u5b9a\u4e49\u5728\u5b9e\u4f8b\u5bf9\u8c61\u4e0a"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function SuperType(name) {\n  this.name = name;\n  this.b = [1, 2, 3, 4];\n}\n\nSuperType.prototype.say = function () {\n  console.log("HZFE");\n};\n\nfunction SubType(name) {\n  SuperType.call(this, name);\n}\n\nvar sub1 = new SubType();\nvar sub2 = new SubType();\n\n// \u4f20\u9012\u53c2\u6570\nvar sub3 = new SubType("Hzfe");\n\nsub1.say(); // \u4f7f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f\u5e76\u6ca1\u6709\u8bbf\u95ee\u5230\u539f\u578b\u94fe\uff0csay \u65b9\u6cd5\u4e0d\u80fd\u8c03\u7528\n\nconsole.log(sub3.name); // Hzfe\n\nsub1.b.push(4);\n\n// \u89e3\u51b3\u4e86\u539f\u578b\u94fe\u7ee7\u627f\u4e2d\u5b50\u7c7b\u5b9e\u4f8b\u5171\u4eab\u7236\u7c7b\u5f15\u7528\u5c5e\u6027\u7684\u95ee\u9898\nconsole.log(sub1.b); // [1,2,3,4]\nconsole.log(sub2.b); // [1,2,3]\nconsole.log(sub1 instanceof SuperType); // false\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u89e3\u51b3\u4e86\u539f\u578b\u94fe\u7ee7\u627f\u4e2d\u5b50\u7c7b\u5b9e\u4f8b\u5171\u4eab\u7236\u7c7b\u5f15\u7528\u5c5e\u6027\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728\u5b50\u7c7b\u578b\u6784\u9020\u51fd\u6570\u4e2d\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u4f20\u9012\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5b9e\u73b0\u591a\u7ee7\u627f\uff08call \u591a\u4e2a\u7236\u7c7b\u5bf9\u8c61\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5e76\u4e0d\u662f\u7236\u7c7b\u7684\u5b9e\u4f8b\uff0c\u53ea\u662f\u5b50\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u7ee7\u627f\u7236\u7c7b\u7684\u5b9e\u4f8b\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4e0d\u80fd\u7ee7\u627f\u539f\u578b\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5b9e\u73b0\u51fd\u6570\u590d\u7528\uff0c\u6bcf\u4e2a\u5b50\u7c7b\u90fd\u6709\u7236\u7c7b\u5b9e\u4f8b\u51fd\u6570\u7684\u526f\u672c\uff0c\u5f71\u54cd\u6027\u80fd\u3002")),(0,a.kt)("h3",{id:"4-\u7ec4\u5408\u7ee7\u627f\u4f2a\u7ecf\u5178\u7ee7\u627f"},"4. \u7ec4\u5408\u7ee7\u627f\uff08\u4f2a\u7ecf\u5178\u7ee7\u627f\uff09"),(0,a.kt)("p",null,"\u7ec4\u5408\u7ee7\u627f\u7684\u601d\u60f3\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u539f\u578b\u94fe\u5b9e\u73b0\u5bf9\u539f\u578b\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u7ee7\u627f\uff0c\u501f\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u5bf9\u5b9e\u4f8b\u5c5e\u6027\u7684\u7ee7\u627f"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function SuperType(name) {\n  this.name = name;\n  this.a = "HZFE";\n  this.b = [1, 2, 3, 4];\n}\n\nSuperType.prototype.say = function () {\n  console.log("HZFE");\n};\n\nfunction SubType(name) {\n  SuperType.call(this, name); // \u7b2c\u4e8c\u6b21\u8c03\u7528 SuperType\n}\n\nSubType.prototype = new SuperType(); // \u7b2c\u4e00\u6b21\u8c03\u7528 SuperType\nSubType.prototype.constructor = SubType;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7ee7\u627f\u5b9e\u4f8b\u5c5e\u6027/\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u627f\u539f\u578b\u5c5e\u6027/\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u5b58\u5728\u5f15\u7528\u5c5e\u6027\u5171\u4eab\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4f20\u53c2"),(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6570\u53ef\u590d\u7528")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528\u4e86\u4e24\u6b21\u7236\u7c7b\u6784\u9020\u51fd\u6570\uff08\u8017\u5185\u5b58\uff09\uff0c\u751f\u6210\u4e86\u4e24\u4efd\u5b9e\u4f8b\u3002")),(0,a.kt)("h3",{id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),(0,a.kt)("p",null,"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u7684\u601d\u60f3\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u501f\u7528\u6784\u9020\u51fd\u6570\u6765\u7ee7\u627f\u5c5e\u6027\uff0c\u4f7f\u7528\u6df7\u5408\u5f0f\u539f\u578b\u94fe\u7ee7\u627f\u65b9\u6cd5"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u51fd\u6570\u5185\u90e8\uff0c\u7b2c\u4e00\u6b65\u521b\u5efa\u7236\u7c7b\u539f\u578b\u7684\u4e00\u4e2a\u526f\u672c\uff0c\u7b2c\u4e8c\u90e8\u662f\u4e3a\u521b\u5efa\u7684\u526f\u672c\u6dfb\u52a0 constructor \u5c5e\u6027\uff0c\n// \u4ece\u800c\u5f25\u8865\u56e0\u91cd\u5199\u800c\u5931\u53bb\u7684\u9ed8\u8ba4\u7684 constructor \u5c5e\u6027\u3002\u6700\u540e\u4e00\u6b65\uff0c\u5c06\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff08\u5373\u526f\u672c\uff09\u8d4b\u503c\u7ed9\u4e88\u7c7b\u578b\u7684\u539f\u578b\u3002\nfunction inheritPrototype(subType, superType) {\n  var prototype = Object.create(superType.prototype); // \u521b\u5efa\u5bf9\u8c61\n  prototype.constructor = subType; // \u589e\u5f3a\u5bf9\u8c61\n  subType.prototype = prototype; // \u6307\u5b9a\u5bf9\u8c61\n}\n\nfunction SuperType(name) {\n  this.name = name;\n}\n\nSuperType.prototype.sayName = function () {\n  console.log(this.name);\n};\n\nfunction SubType(name, num) {\n  SuperType.call(this, name);\n  this.num = num;\n}\n\ninheritPrototype(SubType, SuperType);\n\nSubType.prototype.sayNum = function () {\n  console.log(this.num);\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ea\u8c03\u7528\u4e86\u4e00\u6b21 SuperType \u6784\u9020\u51fd\u6570\uff0c\u907f\u514d\u4e86\u5728 SubType.prototype \u4e0a\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u80fd\u591f\u6b63\u5e38\u4f7f\u7528 instanceof \u548c isPrototypeOf()\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u8f83\u4e3a\u590d\u6742")),(0,a.kt)("h3",{id:"6-es6-\u4e2d-class-\u7684\u7ee7\u627f"},"6. ES6 \u4e2d class \u7684\u7ee7\u627f"),(0,a.kt)("p",null,"ES6 \u4e2d\u5f15\u5165\u4e86 class \u5173\u952e\u5b57\uff0c class \u53ef\u4ee5\u901a\u8fc7 extends \u5173\u952e\u5b57\u5b9e\u73b0\u7ee7\u627f\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 static \u5173\u952e\u5b57\u5b9a\u4e49\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u8fd9\u6bd4 ES5 \u7684\u901a\u8fc7\u4fee\u6539\u539f\u578b\u94fe\u5b9e\u73b0\u7ee7\u627f\uff0c\u8981\u6e05\u6670\u548c\u65b9\u4fbf\u5f88\u591a\u3002\n",(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1aclass \u5173\u952e\u5b57\u53ea\u662f\u539f\u578b\u7684\u8bed\u6cd5\u7cd6\uff0c JavaScript \u7ee7\u627f\u4ecd\u7136\u662f\u57fa\u4e8e\u539f\u578b\u5b9e\u73b0\u7684\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class Pet {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  showName() {\n    console.log("\u8c03\u7528\u7236\u7c7b\u7684\u65b9\u6cd5");\n    console.log(this.name, this.age);\n  }\n}\n\n// \u5b9a\u4e49\u4e00\u4e2a\u5b50\u7c7b\nclass Dog extends Pet {\n  constructor(name, age, color) {\n    super(name, age); // \u901a\u8fc7 super \u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\n    this.color = color;\n  }\n\n  showName() {\n    console.log("\u8c03\u7528\u5b50\u7c7b\u7684\u65b9\u6cd5");\n    console.log(this.name, this.age, this.color);\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6e05\u6670\u65b9\u4fbf")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u662f\u6240\u6709\u7684\u6d4f\u89c8\u5668\u90fd\u652f\u6301 class\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/humin/p/4556820.html"},"JS \u5b9e\u73b0\u7ee7\u627f\u7684\u51e0\u79cd\u65b9\u5f0f")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://es6.ruanyifeng.com/#docs/class-extends"},"\u962e\u4e00\u5cf0 ES6 \u5165\u95e8\u4e4b class \u7684\u7ee7\u627f")),(0,a.kt)("li",{parentName:"ol"},"\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b"),(0,a.kt)("li",{parentName:"ol"},"\u300a\u4f60\u4e0d\u77e5\u9053\u7684 JavaScript\u300b")))}m.isMDXComponent=!0}}]);