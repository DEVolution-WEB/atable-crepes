(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8862],{78862:(n,e,t)=>{"use strict";n.exports=t(44051)},44051:function(n,e,t){var r,o;n.exports=(r=t(67294),o=t(78384),function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=95)}({0:function(n,e,t){n.exports=t(16)()},1:function(n,e){n.exports=r},10:function(n,e,t){var r=t(22),o=t(23),i=t(19),a=t(24);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,e,t){"use strict";var r=t(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,e){n.exports=o},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return f}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),d=t(7),l={color:!0},f=c.a.div.withConfig({shouldForwardProp:function(n,e){return!l[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(d.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(d.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(d.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(d.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(d.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(d.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(d.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(d.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(d.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},46:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(1),o=function(n,e){Object(r.useEffect)((function(){var t=new ResizeObserver(e);return t.observe(n.current),function(){t.disconnect()}}),[])}},48:function(n,e,t){"use strict";t.r(e),t.d(e,"Grid",(function(){return w})),t.d(e,"GridItem",(function(){return j}));var r,o=t(6),i=t.n(o),a=t(5),u=t.n(a),s=t(3),c=t.n(s),d=t(1),l=t.n(d),f=t(2),p=t.n(f),g=t(0),h=t.n(g),m=Object(d.createContext)({gap:0,gridCols:12}),v=t(4),b=t(7),y=["gap","gridCols"],x=p()(v.Box)(r||(r=c()(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  ","\n"])),(function(n){return n.gridCols}),(function(n){var e=n.theme,t=n.gap;return Object(b.a)("gap",t,e)})),w=function(n){var e=n.gap,t=n.gridCols,r=u()(n,y);return l.a.createElement(m.Provider,{value:{gap:e,gridCols:t}},l.a.createElement(x,i()({gap:e,gridCols:t},r)))};w.defaultProps={gap:0,gridCols:12},w.propTypes={gap:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),gridCols:h.a.number};var O,T=["col","xs","s"],S=p.a.div(O||(O=c()(["\n  grid-column: span ",";\n\n  "," {\n    grid-column: span ",";\n  }\n\n  "," {\n    grid-column: span ",";\n  }\n"])),(function(n){return n.col}),(function(n){return n.theme.mediaQueries.tablet}),(function(n){return n.s}),(function(n){return n.theme.mediaQueries.mobile}),(function(n){return n.xs})),j=function(n){var e=n.col,t=n.xs,r=n.s,o=u()(n,T),i=Object(d.useContext)(m),a=i.gap,s=i.gridCols;return l.a.createElement(S,{gap:a,gridCols:s,col:e,xs:t,s:r},l.a.createElement(v.Box,o))};j.defaultProps={col:void 0,s:void 0,xs:void 0},j.propTypes={col:h.a.number,s:h.a.number,xs:h.a.number}},5:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),i=r[0],a=r[1],u=r[2],s="".concat(n,": ").concat(t.spaces[i],";");return void 0!==a&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[a],";\n        }")),void 0!==u&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[u],";\n        }")),s}var c=t.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return l}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},l=t.n(s).a.span.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));l.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},l.propTypes={fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(c)}},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return f}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),d=t(4),l={direction:!0},f=c()(d.Box).withConfig({shouldForwardProp:function(n,e){return!l[n]&&e(n)}})(r||(r=i()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.justifyContent}),(function(n){return n.alignItems}),(function(n){return n.wrap}));f.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},f.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}},95:function(n,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return m})),t.d(e,"ActionLayout",(function(){return O})),t.d(e,"ContentLayout",(function(){return T})),t.d(e,"HeaderLayout",(function(){return L})),t.d(e,"BaseHeaderLayout",(function(){return I})),t.d(e,"TwoColsLayout",(function(){return F})),t.d(e,"GridLayout",(function(){return N}));var r,o,i=t(3),a=t.n(i),u=t(1),s=t.n(u),c=t(0),d=t.n(c),l=t(2),f=t.n(l),p=t(4),g=f()(p.Box)(r||(r=a()(["\n  display: grid;\n  grid-template-columns: ",";\n"])),(function(n){return n.hasSideNav?"auto 1fr":"1fr"})),h=f()(p.Box)(o||(o=a()(["\n  overflow-x: hidden;\n"]))),m=function(n){var e=n.sideNav,t=n.children;return s.a.createElement(g,{hasSideNav:Boolean(e)},e,s.a.createElement(h,{paddingBottom:10},t))};m.defaultProps={sideNav:void 0},m.propTypes={children:d.a.node.isRequired,sideNav:d.a.node};var v,b,y=t(9),x=f()(y.Flex)(v||(v=a()(["\n  & > * + * {\n    margin-left: ",";\n  }\n\n  margin-left: ",";\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.pullRight?"auto":void 0})),w=f()(x)(b||(b=a()(["\n  flex-shrink: 0;\n"]))),O=function(n){var e=n.startActions,t=n.endActions;return e||t?s.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},s.a.createElement(p.Box,{paddingBottom:4},s.a.createElement(y.Flex,{justifyContent:"space-between",alignItems:"flex-start"},e&&s.a.createElement(x,{wrap:"wrap"},e),t&&s.a.createElement(w,{pullRight:!0},t)))):null};O.defaultProps={endActions:void 0,startActions:void 0},O.propTypes={endActions:d.a.node,startActions:d.a.node};var T=function(n){var e=n.children;return s.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},e)};T.propTypes={children:d.a.node.isRequired};var S,j=t(5),E=t.n(j),C=t(6),_=t.n(C),R=t(10),B=t.n(R),A=t(8),z=t(46),k=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],P=function(){var n=Object(u.useRef)(null),e=Object(u.useState)(null),t=B()(e,2),r=t[0],o=t[1],i=function(n){var e=Object(u.useRef)(null),t=Object(u.useState)(!0),r=B()(t,2),o=r[0],i=r[1],a=function(n){var e=B()(n,1)[0];i(e.isIntersecting)};return Object(u.useEffect)((function(){var t=e.current,r=new IntersectionObserver(a,n);return t&&r.observe(e.current),function(){t&&r.disconnect()}}),[e,n]),[e,o]}({root:null,rootMargin:"0px",threshold:0}),a=B()(i,2),s=a[0],c=a[1];return Object(z.a)(s,(function(){s.current&&o(s.current.getBoundingClientRect())})),Object(u.useEffect)((function(){n.current&&o(n.current.getBoundingClientRect())}),[n]),{containerRef:s,isVisible:c,baseHeaderLayoutRef:n,headerSize:r}},L=function(n){var e=P(),t=e.containerRef,r=e.isVisible,o=e.baseHeaderLayoutRef,i=e.headerSize;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{height:null==i?void 0:i.height},ref:t},r&&s.a.createElement(I,_()({ref:o},n))),!r&&s.a.createElement(I,_()({},n,{sticky:!0,width:null==i?void 0:i.width})))};L.displayName="HeaderLayout";var H=f()(p.Box)(S||(S=a()(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: ","px;\n  z-index: 4;\n  box-shadow: ",";\n"])),(function(n){return n.width}),(function(n){return n.theme.shadows.tableShadow})),I=s.a.forwardRef((function(n,e){var t=n.navigationAction,r=n.primaryAction,o=n.secondaryAction,i=n.subtitle,a=n.title,u=n.sticky,c=n.width,d=E()(n,k);return u?s.a.createElement(H,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:c,"data-strapi-header-sticky":!0},s.a.createElement(y.Flex,{justifyContent:"space-between"},s.a.createElement(y.Flex,null,t&&s.a.createElement(p.Box,{paddingRight:3},t),s.a.createElement(p.Box,null,s.a.createElement(A.Typography,_()({variant:"beta",as:"h1"},d),a),s.a.createElement(A.Typography,{variant:"pi",textColor:"neutral600"},i)),o?s.a.createElement(p.Box,{paddingLeft:4},o):null),s.a.createElement(y.Flex,null,r?s.a.createElement(p.Box,{paddingLeft:2},r):void 0))):s.a.createElement(p.Box,{ref:e,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:t?6:8,background:"neutral100","data-strapi-header":!0},t?s.a.createElement(p.Box,{paddingBottom:2},t):null,s.a.createElement(y.Flex,{justifyContent:"space-between"},s.a.createElement(y.Flex,null,s.a.createElement(A.Typography,_()({as:"h1",variant:"alpha"},d),a),o?s.a.createElement(p.Box,{paddingLeft:4},o):null),r),s.a.createElement(A.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},i))}));I.displayName="BaseHeaderLayout",I.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},I.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,sticky:d.a.bool,subtitle:d.a.string,title:d.a.string.isRequired,width:d.a.number},L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},L.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,subtitle:d.a.string,title:d.a.string.isRequired};var M,W=t(48),F=function(n){var e=n.startCol,t=n.endCol;return s.a.createElement(W.Grid,{gap:4},s.a.createElement(W.GridItem,{col:9,s:12},s.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e)),s.a.createElement(W.GridItem,{col:3,s:12},s.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},t)))};F.propTypes={endCol:d.a.node.isRequired,startCol:d.a.node.isRequired};var N=f.a.div(M||(M=a()(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spaces[4]}));N.propTypes={children:d.a.node.isRequired}}}))}}]);