"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[5365],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(r),s=a,b=k["".concat(c,".").concat(s)]||k[s]||m[s]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},585:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_label:"\u6846\u67b6\uff1aReact Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406",sidebar_position:4},c="React Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406",p={unversionedId:"book2/frame-react-fiber",id:"book2/frame-react-fiber",isDocsHomePage:!1,title:"React Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406",description:"\u76f8\u5173\u95ee\u9898",source:"@site/docs/book2/frame-react-fiber.md",sourceDirName:"book2",slug:"/book2/frame-react-fiber",permalink:"/awesome-interview/book2/frame-react-fiber",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u6846\u67b6\uff1aReact Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u7a0b\u5316\uff1aBabel \u7684\u539f\u7406",permalink:"/awesome-interview/book2/engineer-babel"},next:{title:"\u6846\u67b6\uff1aHOC vs Render Props vs Hooks",permalink:"/awesome-interview/book2/frame-react-hoc-hooks"}},u=[{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",children:[]},{value:"\u56de\u7b54\u5173\u952e\u70b9",id:"\u56de\u7b54\u5173\u952e\u70b9",children:[]},{value:"\u77e5\u8bc6\u70b9\u6df1\u5165",id:"\u77e5\u8bc6\u70b9\u6df1\u5165",children:[{value:"1. React \u662f\u5982\u4f55\u5de5\u4f5c\u7684",id:"1-react-\u662f\u5982\u4f55\u5de5\u4f5c\u7684",children:[]},{value:"2. Fiber Reconciler \u5982\u4f55\u5de5\u4f5c",id:"2-fiber-reconciler-\u5982\u4f55\u5de5\u4f5c",children:[]}]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-fiber-\u7684\u4f5c\u7528\u548c\u539f\u7406"},"React Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406"),(0,i.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fiber \u662f\u4ec0\u4e48"),(0,i.kt)("li",{parentName:"ul"},"\u8c08\u8c08\u4f60\u5bf9 Fiber \u7684\u4e86\u89e3"),(0,i.kt)("li",{parentName:"ul"},"Fiber \u5bf9 React \u7684\u4f7f\u7528\u5e26\u6765\u4e86\u4ec0\u4e48\u5f71\u54cd")),(0,i.kt)("h2",{id:"\u56de\u7b54\u5173\u952e\u70b9"},"\u56de\u7b54\u5173\u952e\u70b9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u8c03\u5ea6")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386")),(0,i.kt)("p",null,"Fiber \u662f React 16 \u4e2d\u91c7\u7528\u7684\u65b0\u534f\u8c03\uff08reconciliation\uff09\u5f15\u64ce\uff0c\u4e3b\u8981\u76ee\u6807\u662f\u652f\u6301\u865a\u62df DOM \u7684\u6e10\u8fdb\u5f0f\u6e32\u67d3\u3002"),(0,i.kt)("p",null,"Fiber \u5c06\u539f\u6709\u7684 Stack Reconciler \u66ff\u6362\u4e3a Fiber Reconciler\uff0c\u63d0\u9ad8\u4e86\u590d\u6742\u5e94\u7528\u7684\u53ef\u54cd\u5e94\u6027\u548c\u6027\u80fd\u3002\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fbe\u6210\u76ee\u6807\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u5927\u578b\u590d\u6742\u4efb\u52a1\u7684\u5206\u7247\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4efb\u52a1\u5212\u5206\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u8c03\u5ea6\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u4efb\u52a1\u8fdb\u884c\u6302\u8d77\u3001\u6062\u590d\u3001\u7ec8\u6b62\u7b49\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"Fiber \u5bf9\u73b0\u6709\u4ee3\u7801\u7684\u5f71\u54cd\uff1a\n\u7531\u4e8e Fiber \u91c7\u7528\u4e86\u5168\u65b0\u7684\u8c03\u5ea6\u65b9\u5f0f\uff0c\u4efb\u52a1\u7684\u66f4\u65b0\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u88ab\u6253\u65ad\uff0c\u8fd9\u610f\u5473\u7740\u5728\u7ec4\u4ef6\u66f4\u65b0\u8fc7\u7a0b\u4e2d\uff0crender \u53ca\u5176\u4e4b\u524d\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u53ef\u80fd\u4f1a\u8c03\u7528\u591a\u6b21\u3002\u56e0\u6b64\uff0c\u5728\u4e0b\u5217\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u4e0d\u5e94\u51fa\u73b0\u526f\u4f5c\u7528\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"shouldComponentUpdate"),(0,i.kt)("li",{parentName:"ul"},"React 16 \u4e2d\u5df2\u7ecf\u58f0\u660e\u5e9f\u5f03\u7684\u94a9\u5b50",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"componentWillMount\uff08UNSAFE_componentWillMount\uff09"),(0,i.kt)("li",{parentName:"ul"},"componentWillReceiveProps\uff08UNSAFE_componentWillReceiveProps\uff09"),(0,i.kt)("li",{parentName:"ul"},"componentWillUpdate\uff08UNSAFE_componentWillUpdate\uff09")))),(0,i.kt)("h2",{id:"\u77e5\u8bc6\u70b9\u6df1\u5165"},"\u77e5\u8bc6\u70b9\u6df1\u5165"),(0,i.kt)("h3",{id:"1-react-\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"1. React \u662f\u5982\u4f55\u5de5\u4f5c\u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport ReactDOM from "react-dom";\n\nfunction App() {\n  return <div>Hello, HZFE.</div>;\n}\n\nReactDOM.render(<App />, document.getElementById("root"));\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\u6211\u4eec\u5f15\u5165\u7684\u4e24\u4e2a\u5305\uff0c\u5206\u522b\u4ee3\u8868\u4e86 React \u7684 core API \u5c42\u548c\u6e32\u67d3\u5c42\uff0c\u5728\u8fd9\u80cc\u540e\u8fd8\u6709\u4e00\u5c42\u88ab\u79f0\u4e3a\u534f\u8c03\u5668\uff08Reconcilers\uff09\u7684\u5c42\u6b21\u3002\uff08\u534f\u8c03\u5668\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/main/packages/react-reconciler"},"react-reconciler"),"\u4e2d\u5b9e\u73b0\uff09"),(0,i.kt)("p",null,"\u4e00\u4e2a React \u7ec4\u4ef6\u7684\u6e32\u67d3\u4e3b\u8981\u7ecf\u5386\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u9636\u6bb5\uff08Reconciler\uff09\uff1a\u7528\u65b0\u7684\u6570\u636e\u751f\u6210\u4e00\u68f5\u65b0\u7684\u6811\uff0c\u7136\u540e\u901a\u8fc7 Diff \u7b97\u6cd5\uff0c\u904d\u5386\u65e7\u7684\u6811\uff0c\u5feb\u901f\u627e\u51fa\u9700\u8981\u66f4\u65b0\u7684\u5143\u7d20\uff0c\u653e\u5230\u66f4\u65b0\u961f\u5217\u4e2d\u53bb\uff0c\u5f97\u5230\u65b0\u7684\u66f4\u65b0\u961f\u5217\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u9636\u6bb5\uff08Renderer\uff09\uff1a\u904d\u5386\u66f4\u65b0\u961f\u5217\uff0c\u901a\u8fc7\u8c03\u7528\u5bbf\u4e3b\u73af\u5883\u7684 API\uff0c\u5b9e\u9645\u66f4\u65b0\u6e32\u67d3\u5bf9\u5e94\u7684\u5143\u7d20\u3002\u5bbf\u4e3b\u73af\u5883\u5982 DOM\uff0cNative \u7b49\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8c03\u5ea6\u9636\u6bb5\uff0c\u65b0\u8001\u67b6\u6784\u4e2d\u6709\u4e0d\u540c\u7684\u5904\u7406\u65b9\u5f0f\uff1a"),(0,i.kt)("p",null,"React 16 \u4e4b\u524d\u4f7f\u7528\u7684\u662f Stack Reconciler\uff08\u6808\u534f\u8c03\u5668\uff09\uff0c\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u5f0f\u521b\u5efa\u865a\u62df DOM\uff0c\u9012\u5f52\u7684\u8fc7\u7a0b\u662f\u4e0d\u80fd\u4e2d\u65ad\u7684\u3002\u5982\u679c\u7ec4\u4ef6\u6811\u7684\u5c42\u7ea7\u5f88\u6df1\uff0c\u9012\u5f52\u66f4\u65b0\u7ec4\u4ef6\u7684\u65f6\u95f4\u8d85\u8fc7 16ms\uff0c\u7528\u6237\u4ea4\u4e92\u5c31\u4f1a\u611f\u89c9\u5230\u5361\u987f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4338052/127518991-bea34058-35fc-4712-94d7-a3fc8df21df4.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u6765\u6e90 ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5Wd5rxT7e1U&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0&index=4"},"react conf 17"))),(0,i.kt)("p",null,"React 16 \u53ca\u4ee5\u540e\u4f7f\u7528\u7684\u662f Fiber Reconciler\uff08\u7ea4\u7ef4\u534f\u8c03\u5668\uff09\uff0c\u5c06\u9012\u5f52\u4e2d\u65e0\u6cd5\u4e2d\u65ad\u7684\u66f4\u65b0\u91cd\u6784\u4e3a\u8fed\u4ee3\u4e2d\u7684\u5f02\u6b65\u53ef\u4e2d\u65ad\u66f4\u65b0\u8fc7\u7a0b\uff0c\u8fd9\u6837\u5c31\u80fd\u591f\u66f4\u597d\u7684\u63a7\u5236\u7ec4\u4ef6\u7684\u6e32\u67d3\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4338052/127519057-56e3a47a-19b4-42b0-9ad6-02b543c633cc.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u6765\u6e90 ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5Wd5rxT7e1U&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0&index=4"},"react conf 17"))),(0,i.kt)("h3",{id:"2-fiber-reconciler-\u5982\u4f55\u5de5\u4f5c"},"2. Fiber Reconciler \u5982\u4f55\u5de5\u4f5c"),(0,i.kt)("p",null,"\u7531\u4e8e\u6d4f\u89c8\u5668\u4e2d JS \u7684\u8fd0\u884c\u73af\u5883\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u56e0\u6b64\uff0c\u4e00\u65e6\u6709\u4efb\u52a1\u8017\u65f6\u8fc7\u957f\uff0c\u5c31\u4f1a\u963b\u585e\u5176\u4ed6\u4efb\u52a1\u7684\u6267\u884c\uff0c\u5bfc\u81f4\u6d4f\u89c8\u5668\u4e0d\u80fd\u53ca\u65f6\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u4f7f\u7528\u6237\u4f53\u9a8c\u4e0b\u964d\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cReact \u63a8\u51fa\u4e86 Fiber Reconciler \u67b6\u6784\u3002"),(0,i.kt)("p",null,"\u5728 Fiber \u4e2d\uff0c\u4f1a\u628a\u4e00\u4e2a\u8017\u65f6\u5f88\u957f\u7684\u4efb\u52a1\u5206\u6210\u5f88\u591a\u5c0f\u7684\u4efb\u52a1\u7247\uff0c\u6bcf\u4e00\u4e2a\u4efb\u52a1\u7247\u7684\u8fd0\u884c\u65f6\u95f4\u5f88\u77ed\u3002\u867d\u7136\u603b\u7684\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u4f9d\u7136\u5f88\u957f\uff0c\u4f46\u662f\u5728\u6bcf\u4e2a\u4efb\u52a1\u5c0f\u7247\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u90fd\u4f1a\u7ed9\u5176\u4ed6\u4efb\u52a1\u4e00\u4e2a\u6267\u884c\u673a\u4f1a\u3002\n\u8fd9\u6837\uff0c\u552f\u4e00\u7684\u7ebf\u7a0b\u5c31\u4e0d\u4f1a\u88ab\u72ec\u5360\uff0c\u5176\u4ed6\u4efb\u52a1\u4e5f\u80fd\u591f\u5f97\u5230\u6267\u884c\u673a\u4f1a\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u6e10\u8fdb\u6e32\u67d3\u7684\u76ee\u7684\uff0cFiber \u67b6\u6784\u4e2d\u5f15\u5165\u4e86\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff1aFiber Node\uff0cFiber Node Tree \u6839\u636e React Element Tree \u751f\u6210\uff0c\u5e76\u7528\u6765\u9a71\u52a8\u771f\u5b9e DOM \u7684\u6e32\u67d3\u3002"),(0,i.kt)("p",null,"Fiber \u8282\u70b9\u7684\u5927\u81f4\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n    tag: TypeOfWork, // \u6807\u8bc6 fiber \u7c7b\u578b\n    type: 'div', // \u548c fiber \u76f8\u5173\u7684\u7ec4\u4ef6\u7c7b\u578b\n    return: Fiber | null, // \u7236\u8282\u70b9\n    child: Fiber | null, // \u5b50\u8282\u70b9\n    sibling: Fiber | null, // \u540c\u7ea7\u8282\u70b9\n    alternate: Fiber | null, // diff \u7684\u53d8\u5316\u8bb0\u5f55\u5728\u8fd9\u4e2a\u8282\u70b9\u4e0a\n    ...\n}\n")),(0,i.kt)("p",null,"Fiber \u6811\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11912260/44942438-4c0e7f00-ade3-11e8-83ea-161e2aedcf8e.png",alt:"Fiber Tree"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u6765\u6e90 ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5Wd5rxT7e1U&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0&index=4"},"react conf 17"))),(0,i.kt)("p",null,"Fiber \u7684\u4e3b\u8981\u5de5\u4f5c\u6d41\u7a0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ReactDOM.render()")," \u5f15\u5bfc React \u542f\u52a8\u6216\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"setState()")," \u7684\u65f6\u5019\u5f00\u59cb\u521b\u5efa\u6216\u66f4\u65b0 Fiber \u6811\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4ece\u6839\u8282\u70b9\u5f00\u59cb\u904d\u5386 Fiber Node Tree\uff0c \u5e76\u4e14\u6784\u5efa WokeInProgress Tree\uff08reconciliation \u9636\u6bb5\uff09\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u672c\u9636\u6bb5\u53ef\u4ee5\u6682\u505c\u3001\u7ec8\u6b62\u3001\u548c\u91cd\u542f\uff0c\u4f1a\u5bfc\u81f4 react \u76f8\u5173\u751f\u547d\u5468\u671f\u91cd\u590d\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"React \u4f1a\u751f\u6210\u4e24\u68f5\u6811\uff0c\u4e00\u68f5\u662f\u4ee3\u8868\u5f53\u524d\u72b6\u6001\u7684 current tree\uff0c\u4e00\u68f5\u662f\u5f85\u66f4\u65b0\u7684 workInProgress tree\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u904d\u5386 current tree\uff0c\u91cd\u7528\u6216\u66f4\u65b0 Fiber Node \u5230 workInProgress tree\uff0cworkInProgress tree \u5b8c\u6210\u540e\u4f1a\u66ff\u6362 current tree\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u66f4\u65b0\u4e00\u4e2a\u8282\u70b9\uff0c\u540c\u65f6\u751f\u6210\u8be5\u8282\u70b9\u5bf9\u5e94\u7684 Effect List\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a\u8282\u70b9\u521b\u5efa\u66f4\u65b0\u4efb\u52a1\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u521b\u5efa\u7684\u66f4\u65b0\u4efb\u52a1\u52a0\u5165\u4efb\u52a1\u961f\u5217\uff0c\u7b49\u5f85\u8c03\u5ea6\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u7531 scheduler \u6a21\u5757\u5b8c\u6210\uff0c\u5176\u6838\u5fc3\u804c\u8d23\u662f\u6267\u884c\u56de\u8c03\u3002"),(0,i.kt)("li",{parentName:"ul"},"scheduler \u6a21\u5757\u5b9e\u73b0\u4e86\u8de8\u5e73\u53f0\u517c\u5bb9\u7684 requestIdleCallback\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u5904\u7406\u5b8c\u4e00\u4e2a Fiber Node \u7684\u66f4\u65b0\uff0c\u53ef\u4ee5\u4e2d\u65ad\u3001\u6302\u8d77\uff0c\u6216\u6062\u590d\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e Effect List \u66f4\u65b0 DOM \uff08commit \u9636\u6bb5\uff09\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"React \u4f1a\u904d\u5386 Effect List \u5c06\u6240\u6709\u53d8\u66f4\u4e00\u6b21\u6027\u66f4\u65b0\u5230 DOM \u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u4e00\u9636\u6bb5\u7684\u5de5\u4f5c\u4f1a\u5bfc\u81f4\u7528\u6237\u53ef\u89c1\u7684\u53d8\u5316\u3002\u56e0\u6b64\u8be5\u8fc7\u7a0b\u4e0d\u53ef\u4e2d\u65ad\uff0c\u5fc5\u987b\u4e00\u76f4\u6267\u884c\u76f4\u5230\u66f4\u65b0\u5b8c\u6210\u3002")))),(0,i.kt)("p",null,"React \u8c03\u5ea6\u6d41\u7a0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4338052/127530996-23513132-f3ef-4a3e-8553-8bfef2e3669b.png",alt:"image"})),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/acdlite/react-fiber-architecture"},"React Fiber Architecture")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7HSd1sk07uU&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0"},"React Conf 2017")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://blog.ag-grid.com/inside-fiber-an-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/"},"Inside Fiber"))))}k.isMDXComponent=!0}}]);