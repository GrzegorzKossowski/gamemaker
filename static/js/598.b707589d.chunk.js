(self.webpackChunkgamebook_creator=self.webpackChunkgamebook_creator||[]).push([[598],{6485:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,i=n(168),o=(n(2791),n(6031)),a=n(6060),s=n(4483),u=n(3174),l=n(6871),c=n(184),f=o.ZP.div(r||(r=(0,i.Z)(["\n    // put some styles here\n"]))),d=[{label:"Editor",key:"goToEditor",disabled:!1,icon:(0,c.jsx)(s.G,{icon:u.A35})}],p=function(){var e=(0,l.s0)();return(0,c.jsx)(f,{children:(0,c.jsx)(a.Z,{onClick:function(t){if("goToEditor"===t.key)e("/editor")},mode:"horizontal",items:d})})}},7598:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(9439),i=n(168),o=n(2791),a=n(6031),s=n(9964),u=n(6106),l=n(914),c=n(9581),f=n(7309),d=n(6485),p=n(6697),h=n(844),v=n.n(h),g=n(3504),m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},m.apply(this,arguments)};var x="",y=null,b=null,w=null;function j(){x="",null!==y&&y.disconnect(),null!==b&&(window.clearTimeout(b),b=null)}function P(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function T(){var e=null;if("#"===x)e=document.body;else{var t=x.replace("#","");null===(e=document.getElementById(t))&&"#top"===x&&(e=document.body)}if(null!==e){w(e);var n=e.getAttribute("tabindex");return null!==n||P(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||P(e)||(e.blur(),e.removeAttribute("tabindex")),j(),!0}return!1}function Z(e){return o.forwardRef((function(t,n){var r="";"string"===typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(r=t.to.hash);var i={};e===g.OL&&(i.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(t,["scroll","smooth","timeout","elementId"]);return o.createElement(e,m({},i,a,{onClick:function(e){var n;j(),x=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===x||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(w=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===T()&&(null===y&&(y=new MutationObserver(T)),y.observe(document,{attributes:!0,childList:!0,subtree:!0}),b=window.setTimeout((function(){j()}),n||1e4))}),0))},ref:n}),t.children)}))}var E,N=Z(g.rU),_=(Z(g.OL),n(2810)),O=n(4483),A=n(3174),k=n(184),C=a.ZP.div(E||(E=(0,i.Z)(["\n    // put some styles here\n    .preview {\n        &__container {\n            padding: 2rem 0;\n            text-align: justify;\n        }\n        &__title {\n            text-align: center;\n        }\n        &__subtitle {\n            text-align: center;\n            margin-bottom: 4rem;\n        }\n        &__paragraph {\n            font-size: 1.2rem;\n            padding-bottom: 2rem;\n        }\n    }\n"]))),S=s.Z.Title,R=s.Z.Text,B=s.Z.Paragraph,I=function(){var e=(0,p.C)((function(e){return e.gamebook})),t=e.authorName,n=e.gamebookTitle,i=e.chapters,a=e.introduction,s=o.useState([]),h=(0,r.Z)(s,2),g=h[0],m=h[1];return o.useEffect((function(){m((function(){return i.map((function(e){return e.id}))}))}),[]),(0,k.jsxs)(C,{children:[(0,k.jsx)(d.Z,{}),(0,k.jsx)(u.Z,{justify:"center",className:"preview__container",id:"mainRow",children:(0,k.jsxs)(l.Z,{xs:22,sm:22,md:22,lg:16,xl:12,xxl:10,children:[(0,k.jsx)(S,{level:2,className:"preview__title",children:n}),(0,k.jsxs)(S,{level:4,className:"preview__subtitle",children:["by ",t]}),a&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S,{level:4,className:"preview__subtitle",children:"Introduction"}),(0,k.jsx)(B,{className:"preview__paragraph",children:a})]}),i&&i.map((function(e){return(0,k.jsxs)(B,{className:"preview__paragraph",id:e.id,children:[e.chapterNumber&&(0,k.jsx)(S,{level:4,className:"preview__title",children:e.chapterNumber}),e.title&&(0,k.jsx)(S,{level:4,className:"preview__title",children:e.title}),(0,k.jsx)(R,{children:v()(null===e||void 0===e?void 0:e.content,/\{(\d+)\}/g,(function(e,t){var n=g[parseInt(e)-1];return n?(0,k.jsxs)("span",{children:["[",(0,k.jsx)(N,{to:"#".concat(n),children:e}),"]"]},(0,_.Z)()):(0,k.jsxs)("span",{children:["[",e,"]"]},(0,_.Z)())}))})]},e.id)}))]})}),(0,k.jsx)(c.Z,{style:{position:"fixed",bottom:50,right:50},children:(0,k.jsx)(N,{to:"#mainRow",children:(0,k.jsx)(f.Z,{size:"large",type:"primary",shape:"circle",children:(0,k.jsx)(O.G,{icon:A.UAH})})})})]})}},6697:function(e,t,n){"use strict";n.d(t,{C:function(){return o},T:function(){return i}});var r=n(9434),i=function(){return(0,r.I0)()},o=r.v9},9581:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7462),i=n(4942),o=n(5671),a=n(3144),s=n(136),u=n(7277),l=n(1002),c=n(2791),f=n(1694),d=n.n(f),p=n(1818),h=n(8829),v=n(3785),g=n(3433),m=n(5314);function x(){return function(e,t,n){var r=n.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return r;var n=function(e){var t,n=function(n){return function(){t=null,e.apply(void 0,(0,g.Z)(n))}},r=function(){if(null==t){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];t=(0,m.Z)(n(r))}};return r.cancel=function(){m.Z.cancel(t),t=null},r}(r.bind(this));return i=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),i=!1,n}}}}var y=n(1585);function b(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function w(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function j(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var P=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],T=[];function Z(e,t){if(e){var n=T.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},T.push(n),P.forEach((function(t){n.eventHandlers[t]=(0,y.Z)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function E(e){var t=T.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(T=T.filter((function(e){return e!==t})),P.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var N,_=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,l.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};function O(){return"undefined"!==typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(N||(N={}));var A=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).state={status:N.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offsetBottom,r=t.offsetTop;return void 0===n&&void 0===r?0:r},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,i=e.props.onChange,o=e.getTargetFunc();if(n===N.Prepare&&e.fixedNode&&e.placeholderNode&&o){var a=e.getOffsetTop(),s=e.getOffsetBottom(),u=o();if(u){var l={status:N.None},c=b(u),f=b(e.placeholderNode),d=w(f,c,a),p=j(f,c,s);void 0!==d?(l.affixStyle={position:"fixed",top:d,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}):void 0!==p&&(l.affixStyle={position:"fixed",bottom:p,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}),l.lastAffix=!!l.affixStyle,i&&r!==l.lastAffix&&i(l.lastAffix),e.setState(l)}}},e.prepareMeasure=function(){e.setState({status:N.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return(0,a.Z)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||O}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){Z(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),r=(null===n||void 0===n?void 0:n())||null;t!==r&&(E(this),r&&(Z(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),E(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),i=e();if(i&&this.placeholderNode){var o=b(i),a=b(this.placeholderNode),s=w(a,o,n),u=j(a,o,r);if(void 0!==s&&t.top===s||void 0!==u&&t.bottom===u)return}}this.prepareMeasure()}},{key:"render",value:function(){var e=this,t=this.state,n=t.affixStyle,o=t.placeholderStyle,a=this.props,s=a.affixPrefixCls,u=a.children,l=d()((0,i.Z)({},s,!!n)),f=(0,p.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return c.createElement(h.Z,{onResize:function(){e.updatePosition()}},c.createElement("div",(0,r.Z)({},f,{ref:this.savePlaceholderNode}),n&&c.createElement("div",{style:o,"aria-hidden":"true"}),c.createElement("div",{className:l,ref:this.saveFixedNode,style:n},c.createElement(h.Z,{onResize:function(){e.updatePosition()}},u))))}}]),n}(c.Component);A.contextType=v.E_,_([x()],A.prototype,"updatePosition",null),_([x()],A.prototype,"lazyUpdatePosition",null);var k=c.forwardRef((function(e,t){var n=e.prefixCls,i=(0,c.useContext(v.E_).getPrefixCls)("affix",n),o=(0,r.Z)((0,r.Z)({},e),{affixPrefixCls:i});return c.createElement(A,(0,r.Z)({},o,{ref:t}))}))},844:function(e){var t=function(e){return"string"===typeof e};function n(e,n,r){var i=0,o=0;if(""===e)return e;if(!e||!t(e))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var a=n;(function(e){return e instanceof RegExp})(a)||(a=new RegExp("("+function(e){var t=/[\\^$.*+?()[\]{}|]/g,n=RegExp(t.source);return e&&n.test(e)?e.replace(t,"\\$&"):e}(a)+")","gi"));for(var s=e.split(a),u=1,l=s.length;u<l;u+=2)void 0!==s[u]&&void 0!==s[u-1]?(o=s[u].length,i+=s[u-1].length,s[u]=r(s[u],u,i),i+=o):console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");return s}e.exports=function(e,r,i){return Array.isArray(e)||(e=[e]),function(e){var t=[];return e.forEach((function(e){Array.isArray(e)?t=t.concat(e):t.push(e)})),t}(e.map((function(e){return t(e)?n(e,r,i):e})))}}}]);
//# sourceMappingURL=598.b707589d.chunk.js.map