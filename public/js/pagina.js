/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},v=function(e){return null!=e&&e===e.window},y={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in y)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b=function(e,t){return new b.fn.init(e,t)},w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function T(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}b.fn=b.prototype={jquery:"3.3.1",constructor:b,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return b.each(this,e)},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},b.extend=b.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(b.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&b.isPlainObject(n)?n:{},a[t]=b.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},b.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e)||(t=i(e))&&("function"!=typeof(n=f.call(t,"constructor")&&t.constructor)||p.call(n)!==d))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(T(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(w,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?b.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,s=[];if(T(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(b.fn[Symbol.iterator]=n[Symbol.iterator]),b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var C=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,v,y,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,y,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!v||!v.test(e))){if(1!==T)m=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;s--;)h[s]="#"+c+" "+ye(h[s]);y=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(y)try{return L.apply(r,m.querySelectorAll(y)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){for(x=(d=(l=(c=(f=(p=v)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ve(){}function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[b]||(t[b]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function we(e,t,n,r,i,o){return r&&!r[b]&&(r=we(r)),i&&!i[b]&&(i=we(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?g:be(g,p,e,s,u),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,s,u),r)for(l=be(y,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else y=be(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):L.apply(a,y)})}function Te(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return we(u>1&&xe(p),u>1&&ye(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Te(e.slice(u,i)),i<o&&Te(e=e.slice(i)),i<o&&ye(e))}p.push(n)}return xe(p)}return ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length)),r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)},s=oe.compile=function(e,t){var n,i,o,s,u,c,f=[],h=[],v=S[e+" "];if(!v){for(t||(t=a(e)),n=t.length;n--;)(v=Te(t[n]))[b]?f.push(v):h.push(v);(v=S(e,(i=h,o=f,s=o.length>0,u=i.length>0,c=function(e,t,n,a,c){var f,h,v,y=0,m="0",x=e&&[],b=[],w=l,C=e||u&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=t===d||t||c);m!==k&&null!=(f=C[m]);m++){if(u&&f){for(h=0,t||f.ownerDocument===d||(p(f),n=!g);v=i[h++];)if(v(f,t||d,n)){a.push(f);break}c&&(T=E)}s&&((f=!v&&f)&&y--,e&&x.push(f))}if(y+=m,s&&m!==y){for(h=0;v=o[h++];)v(x,b,t,n);if(e){if(y>0)for(;m--;)x[m]||b[m]||(b[m]=j.call(a));b=be(b)}L.apply(a,b),c&&!e&&b.length>0&&y+o.length>1&&oe.uniqueSort(a)}return c&&(T=E,l=w),x},s?se(c):c))).selector=e}return v},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=V.needsContext.test(e)?0:u.length;o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ye(u)))return L.apply(n,i),n;break}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);b.find=C,b.expr=C.selectors,b.expr[":"]=b.expr.pseudos,b.uniqueSort=b.unique=C.uniqueSort,b.text=C.getText,b.isXMLDoc=C.isXML,b.contains=C.contains,b.escapeSelector=C.escape;var E=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&b(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=b.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(e,t,n){return g(t)?b.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?b.grep(e,function(e){return e===t!==n}):"string"!=typeof t?b.grep(e,function(e){return u.call(t,e)>-1!==n}):b.filter(t,e,n)}b.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?b.find.matchesSelector(r,e)?[r]:[]:b.find.matches(e,b.grep(t,function(e){return 1===e.nodeType}))},b.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(b(e).filter(function(){for(t=0;t<r;t++)if(b.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)b.find(e,i[t],n);return r>1?b.uniqueSort(n):n},filter:function(e){return this.pushStack(A(this,e||[],!1))},not:function(e){return this.pushStack(A(this,e||[],!0))},is:function(e){return!!A(this,"string"==typeof e&&S.test(e)?b(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(b.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof b?t[0]:t,b.merge(this,b.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),N.test(i[1])&&b.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(b):b.makeArray(e,this)}).prototype=b.fn,j=b(r);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}b.fn.extend({has:function(e){var t=b(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(b.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&b(e);if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&b.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?b.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(b(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(b.uniqueSort(b.merge(this.get(),b(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return E(e,"parentNode")},parentsUntil:function(e,t,n){return E(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return E(e,"nextSibling")},prevAll:function(e){return E(e,"previousSibling")},nextUntil:function(e,t,n){return E(e,"nextSibling",n)},prevUntil:function(e,t,n){return E(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),b.merge([],e.childNodes))}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),this.length>1&&(H[e]||b.uniqueSort(i),L.test(e)&&i.reverse()),this.pushStack(i)}});var P=/[^\x20\t\r\n\f]+/g;function M(e){return e}function R(e){throw e}function I(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}b.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},b.each(t.match(P)||[],function(e,t){n[t]=!0}),n):b.extend({},e);var r,i,o,a,s=[],u=[],l=-1,c=function(){for(a=a||e.once,o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(l=s.length,i=!1);e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){b.each(n,function(n,r){g(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),i&&!r&&c()),this},remove:function(){return b.each(arguments,function(e,t){for(var n;(n=b.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?b.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},b.extend({Deferred:function(t){var n=[["notify","progress",b.Callbacks("memory"),b.Callbacks("memory"),2],["resolve","done",b.Callbacks("once memory"),b.Callbacks("once memory"),0,"resolved"],["reject","fail",b.Callbacks("once memory"),b.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return b.Deferred(function(t){b.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,M,i),a(o,n,R,i)):(o++,l.call(e,a(o,n,M,i),a(o,n,R,i),a(o,n,M,n.notifyWith))):(r!==M&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){b.Deferred.exceptionHook&&b.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==R&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(b.Deferred.getStackHook&&(c.stackTrace=b.Deferred.getStackHook()),e.setTimeout(c))}}return b.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:M,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:M)),n[2][3].add(a(0,e,g(r)?r:R))}).promise()},promise:function(e){return null!=e?b.extend(e,i):i}},o={};return b.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=b.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&(I(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();for(;n--;)I(i[n],s(n),a.reject);return a.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;b.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&W.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},b.readyException=function(t){e.setTimeout(function(){throw t})};var $=b.Deferred();function B(){r.removeEventListener("DOMContentLoaded",B),e.removeEventListener("load",B),b.ready()}b.fn.ready=function(e){return $.then(e).catch(function(e){b.readyException(e)}),this},b.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--b.readyWait:b.isReady)||(b.isReady=!0,!0!==e&&--b.readyWait>0||$.resolveWith(r,[b]))}}),b.ready.then=$.then,"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(b.ready):(r.addEventListener("DOMContentLoaded",B),e.addEventListener("load",B));var F=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)F(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(b(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function U(e){return e.replace(_,"ms-").replace(z,X)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=b.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[U(t)]=n;else for(r in t)i[U(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][U(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(U):(t=U(t))in r?[t]:t.match(P)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||b.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!b.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}b.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),b.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=U(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Q.set(this,e)}):F(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=Q.get(o,e)))return n;if(void 0!==(n=Z(o,e)))return n}else this.each(function(){Q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),b.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,b.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){b.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:b.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),b.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?b.queue(this[0],e):void 0===t?this:this.each(function(){var n=b.queue(this,e,t);b._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=b.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&b.contains(e.ownerDocument,e)&&"none"===b.css(e,"display")},ie=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function oe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return b.css(e,t,"")},u=s(),l=n&&n[3]||(b.cssNumber[t]?"":"px"),c=(b.cssNumber[t]||"px"!==l&&+u)&&te.exec(b.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)b.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,b.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ae={};function se(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Y.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&re(r)&&(i[o]=(u=void 0,l=void 0,void 0,f=void 0,l=(s=r).ownerDocument,c=s.nodeName,(f=ae[c])||(u=l.body.appendChild(l.createElement(c)),f=b.css(u,"display"),u.parentNode.removeChild(u),"none"===f&&(f="block"),ae[c]=f,f)))):"none"!==n&&(i[o]="none",Y.set(r,"display",n)));var s,u,l,c,f;for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}b.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?b(this).show():b(this).hide()})}});var ue=/^(?:checkbox|radio)$/i,le=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ce=/^$|^module$|\/(?:java|ecma)script/i,fe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?b.merge([e],n):n}function de(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}fe.optgroup=fe.option,fe.tbody=fe.tfoot=fe.colgroup=fe.caption=fe.thead,fe.th=fe.td;var he,ge,ve=/<|&#?\w+;/;function ye(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))b.merge(p,o.nodeType?[o]:o);else if(ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(le.exec(o)||["",""])[1].toLowerCase(),u=fe[s]||fe._default,a.innerHTML=u[1]+b.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;b.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&b.inArray(o,r)>-1)i&&i.push(o);else if(l=b.contains(o.ownerDocument,o),a=pe(f.appendChild(o),"script"),l&&de(a),n)for(c=0;o=a[c++];)ce.test(o.type||"")&&n.push(o);return f}he=r.createDocumentFragment().appendChild(r.createElement("div")),(ge=r.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),he.appendChild(ge),h.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var me=r.documentElement,xe=/^key/,be=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function Ce(){return!1}function Ee(){try{return r.activeElement}catch(e){}}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return b().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=b.guid++)),e.each(function(){b.event.add(this,t,i,r,n)})}b.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(e);if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&b.find.matchesSelector(me,i),n.guid||(n.guid=b.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return void 0!==b&&b.event.triggered!==t.type?b.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(P)||[""]).length;l--;)d=g=(s=we.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=b.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=b.event.special[d]||{},c=b.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&b.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),b.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){for(l=(t=(t||"").match(P)||[""]).length;l--;)if(d=g=(s=we.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=b.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||b.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=b.event.fix(e),u=new Array(arguments.length),l=(Y.get(this,"events")||{})[s.type]||[],c=b.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=b.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((b.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?b(i,this).index(l)>-1:b.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(b.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[b.expando]?e:new b.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ee()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ee()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},b.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},b.Event=function(e,t){if(!(this instanceof b.Event))return new b.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Te:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&b.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[b.expando]=!0},b.Event.prototype={constructor:b.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},b.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&xe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&be.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},b.event.addProp),b.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||b.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),b.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,b(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){b.event.remove(this,e,n,t)})}});var Se=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,De=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&b(e).children("tbody")[0]||e}function qe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Le(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),a=Y.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)b.event.add(t,i,l[i][n]);Q.hasData(e)&&(s=Q.access(e),u=b.extend({},s),Q.set(t,u))}}function Oe(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,v=t[0],y=g(v);if(y||p>1&&"string"==typeof v&&!h.checkClone&&Ne.test(v))return e.each(function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),Oe(o,t,n,r)});if(p&&(o=(i=ye(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=b.map(pe(i,"script"),qe)).length;f<p;f++)l=i,f!==d&&(l=b.clone(l,!0,!0),u&&b.merge(s,pe(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,b.map(s,Le),f=0;f<u;f++)l=s[f],ce.test(l.type||"")&&!Y.access(l,"globalEval")&&b.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?b._evalUrl&&b._evalUrl(l.src):m(l.textContent.replace(Ae,""),c,l))}return e}function Pe(e,t,n){for(var r,i=t?b.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||b.cleanData(pe(r)),r.parentNode&&(n&&b.contains(r.ownerDocument,r)&&de(pe(r,"script")),r.parentNode.removeChild(r));return e}b.extend({htmlPrefilter:function(e){return e.replace(Se,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=b.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(a=pe(c),r=0,i=(o=pe(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&ue.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||pe(e),a=a||pe(c),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,c);return(a=pe(c,"script")).length>0&&de(a,!f&&pe(e,"script")),c},cleanData:function(e){for(var t,n,r,i=b.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?b.event.remove(n,r):b.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),b.fn.extend({detach:function(e){return Pe(this,e,!0)},remove:function(e){return Pe(this,e)},text:function(e){return F(this,function(e){return void 0===e?b.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(b.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!fe[(le.exec(e)||["",""])[1].toLowerCase()]){e=b.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(b.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Oe(this,arguments,function(t){var n=this.parentNode;b.inArray(this,e)<0&&(b.cleanData(pe(this)),n&&n.replaceChild(t,this))},e)}}),b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){for(var n,r=[],i=b(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),b(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||b.contains(e.ownerDocument,e)||(a=b.style(e,t)),!h.pixelBoxStyles()&&Me.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",me.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,b.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();var Be=/^(none|table(?!-c[ea]).+)/,Fe=/^--/,_e={position:"absolute",visibility:"hidden",display:"block"},ze={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Ue=r.createElement("div").style;function Ve(e){var t=b.cssProps[e];return t||(t=b.cssProps[e]=function(e){if(e in Ue)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Ue)return e}(e)||e),t}function Ge(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ye(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=b.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=b.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=b.css(e,"border"+ne[a]+"Width",!0,i))):(u+=b.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=b.css(e,"border"+ne[a]+"Width",!0,i):s+=b.css(e,"border"+ne[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function Qe(e,t,n){var r=Re(e),i=We(e,t,r),o="border-box"===b.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===b.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ye(e,t,n||(o?"border":"content"),a,r,i)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=U(t),u=Fe.test(t),l=e.style;if(u||(t=Ve(s)),a=b.cssHooks[t]||b.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(b.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=U(t);return Fe.test(t)||(t=Ve(s)),(a=b.cssHooks[t]||b.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in ze&&(i=ze[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),b.each(["height","width"],function(e,t){b.cssHooks[t]={get:function(e,n,r){if(n)return!Be.test(b.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Qe(e,t,r):ie(e,_e,function(){return Qe(e,t,r)})},set:function(e,n,r){var i,o=Re(e),a="border-box"===b.css(e,"boxSizing",!1,o),s=r&&Ye(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ye(e,t,"border",!1,o)-.5)),s&&(i=te.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=b.css(e,t)),Ge(0,n,s)}}}),b.cssHooks.marginLeft=$e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ne[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(b.cssHooks[e+t].set=Ge)}),b.fn.extend({css:function(e,t){return F(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=b.css(e,t[a],!1,r);return o}return void 0!==n?b.style(e,t,n):b.css(e,t)},e,t,arguments.length>1)}}),b.Tween=Je,Je.prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||b.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop];return this.options.duration?this.pos=t=b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=b.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[b.cssProps[e.prop]]&&!b.cssHooks[e.prop]?e.elem[e.prop]=e.now:b.style(e.elem,e.prop,e.now+e.unit)}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},b.fx=Je.prototype.init,b.fx.step={};var Ke,Ze,et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){Ze&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(it):e.setTimeout(it,b.fx.interval),b.fx.tick())}function ot(){return e.setTimeout(function(){Ke=void 0}),Ke=Date.now()}function at(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ut(e,t,n){var r,i,o=0,a=ut.prefilters.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Ke||ot(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{},easing:b.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ke||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=U(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=b.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ut.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(b._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return b.map(c,st,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}b.Animation=b.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&re(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=b._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,b.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||b.style(e,r)}if((u=!b.isEmptyObject(t))||!b.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=b.css(e,"display"))&&(l?c=l:(se([e],!0),l=e.style.display||l,c=b.css(e,"display"),se([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===b.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&se([e],!0),p.done(function(){for(r in g||se([e]),Y.remove(e,"fxshow"),d)b.style(e,r,d[r])})),u=st(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return b.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in b.fx.speeds?r.duration=b.fx.speeds[r.duration]:r.duration=b.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=ut(this,b.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=b.timers,a=Y.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&rt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||b.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,r,i)}}),b.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.timers=[],b.fx.tick=function(){var e,t=0,n=b.timers;for(Ke=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||b.fx.stop(),Ke=void 0},b.fx.timer=function(e){b.timers.push(e),b.fx.start()},b.fx.interval=13,b.fx.start=function(){Ze||(Ze=!0,it())},b.fx.stop=function(){Ze=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fn.delay=function(t,n){return t=b.fx&&b.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},et=r.createElement("input"),tt=r.createElement("select").appendChild(r.createElement("option")),et.type="checkbox",h.checkOn=""!==et.value,h.optSelected=tt.selected,(et=r.createElement("input")).value="t",et.type="radio",h.radioValue="t"===et.value;var lt,ct=b.expr.attrHandle;b.fn.extend({attr:function(e,t){return F(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})}}),b.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?b.prop(e,t,n):(1===o&&b.isXMLDoc(e)||(i=b.attrHooks[t.toLowerCase()]||(b.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void b.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=b.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),lt={set:function(e,t,n){return!1===t?b.removeAttr(e,n):e.setAttribute(n,n),n}},b.each(b.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ct[t]||b.find.attr;ct[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ct[a],ct[a]=i,i=null!=n(e,t,r)?a:null,ct[a]=o),i}});var ft=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function dt(e){return(e.match(P)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function gt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}b.fn.extend({prop:function(e,t){return F(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[b.propFix[e]||e]})}}),b.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&b.isXMLDoc(e)||(t=b.propFix[t]||t,i=b.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=b.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(b.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),b.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){b.propFix[this.toLowerCase()]=this}),b.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){b(this).addClass(e.call(this,t,ht(this)))});if((t=gt(e)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){b(this).removeClass(e.call(this,t,ht(this)))});if(!arguments.length)return this.attr("class","");if((t=gt(e)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,ht(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=b(this),a=gt(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=ht(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+dt(ht(n))+" ").indexOf(t)>-1)return!0;return!1}});var vt=/\r/g;b.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,b(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=b.map(i,function(e){return null==e?"":e+""})),(t=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=b.valHooks[i.type]||b.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(vt,""):null==n?"":n:void 0}}),b.extend({valHooks:{option:{get:function(e){var t=b.find.attr(e,"value");return null!=t?t:dt(b.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=b(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=b.makeArray(t),a=i.length;a--;)((r=i[a]).selected=b.inArray(b.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=b.inArray(b(e).val(),t)>-1}},h.checkOn||(b.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var yt=/^(?:focusinfocus|focusoutblur)$/,mt=function(e){e.stopPropagation()};b.extend(b.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,y=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!yt.test(m+b.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,(t=t[b.expando]?t:new b.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:b.makeArray(n,[t]),d=b.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!v(i)){for(l=d.delegateType||m,yt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)y.push(s),u=s;u===(i.ownerDocument||r)&&y.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=y[a++])&&!t.isPropagationStopped();)h=s,t.type=a>1?l:d.bindType||m,(p=(Y.get(s,"events")||{})[t.type]&&Y.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&V(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(y.pop(),n)||!V(i)||c&&g(i[m])&&!v(i)&&((u=i[c])&&(i[c]=null),b.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,mt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,mt),b.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=b.extend(new b.Event,n,{type:e,isSimulated:!0});b.event.trigger(r,null,t)}}),b.fn.extend({trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return b.event.trigger(e,t,n,!0)}}),h.focusin||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){b.event.simulate(t,e.target,b.event.fix(e))};b.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Y.access(r,t);i||r.addEventListener(e,n,!0),Y.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Y.access(r,t)-1;i?Y.access(r,t,i):(r.removeEventListener(e,n,!0),Y.remove(r,t))}}});var xt=e.location,bt=Date.now(),wt=/\?/;b.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+t),n};var Tt=/\[\]$/,Ct=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function St(e,t,n,r){var i;if(Array.isArray(t))b.each(t,function(t,i){n||Tt.test(e)?r(e,i):St(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)St(e+"["+i+"]",t[i],n,r)}b.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){i(this.name,this.value)});else for(n in e)St(n,e[n],t,i);return r.join("&")},b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&kt.test(this.nodeName)&&!Et.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:Array.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}});var Dt=/%20/g,Nt=/#.*$/,At=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:GET|HEAD)$/,Lt=/^\/\//,Ht={},Ot={},Pt="*/".concat("*"),Mt=r.createElement("a");function Rt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(P)||[];if(g(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function It(e,t,n,r){var i={},o=e===Ot;function a(s){var u;return i[s]=!0,b.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Wt(e,t){var n,r,i=b.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&b.extend(!0,e,r),e}Mt.href=xt.href,b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,b.ajaxSettings),t):Wt(b.ajaxSettings,e)},ajaxPrefilter:Rt(Ht),ajaxTransport:Rt(Ot),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=b.ajaxSetup({},n),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?b(g):b.event,y=b.Deferred(),m=b.Callbacks("once memory"),x=h.statusCode||{},w={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=jt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(y.promise(E),h.url=((t||h.url||xt.href)+"").replace(Lt,xt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Mt.protocol+"//"+Mt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=b.param(h.data,h.traditional)),It(Ht,h,n,E),c)return E;for(p in(f=b.event&&h.global)&&0==b.active++&&b.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!qt.test(h.type),o=h.url.replace(Nt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Dt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(wt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(At,"$1"),d=(wt.test(o)?"&":"?")+"_="+bt+++d),h.url=o+d),h.ifModified&&(b.lastModified[o]&&E.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&E.setRequestHeader("If-None-Match",b.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Pt+"; q=0.01":""):h.accepts["*"]),h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=It(Ot,h,n,E)){if(E.readyState=1,f&&v.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(w,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,w,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,E,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,w,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(b.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(b.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=w.state,p=w.data,l=!(d=w.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?y.resolveWith(g,[p,C,E]):y.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(v.trigger("ajaxComplete",[E,h]),--b.active||b.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return b.get(e,t,n,"json")},getScript:function(e,t){return b.get(e,void 0,t,"script")}}),b.each(["get","post"],function(e,t){b[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),b.ajax(b.extend({url:e,type:t,dataType:i,data:n,success:r},b.isPlainObject(e)&&e))}}),b._evalUrl=function(e){return b.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},b.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=b(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){b(this).replaceWith(this.childNodes)}),this}}),b.expr.pseudos.hidden=function(e){return!b.expr.pseudos.visible(e)},b.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var $t={0:200,1223:204},Bt=b.ajaxSettings.xhr();h.cors=!!Bt&&"withCredentials"in Bt,h.ajax=Bt=!!Bt,b.ajaxTransport(function(t){var n,r;if(h.cors||Bt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o($t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),b.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),b.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(i,o){t=b("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ft,_t=[],zt=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||b.expando+"_"+bt++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(zt,"$1"+i):!1!==t.jsonp&&(t.url+=(wt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||b.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?b(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,_t.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=((Ft=r.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ft.childNodes.length),b.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),a=!n&&[],(o=N.exec(e))?[t.createElement(o[1])]:(o=ye([e],t,a),a&&a.length&&b(a).remove(),b.merge([],o.childNodes)));var i,o,a},b.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=dt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&b.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?b("<div>").append(b.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.expr.pseudos.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length},b.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=b.css(e,"position"),c=b(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=b.css(e,"top"),u=b.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,b.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},b.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){b.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===b.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===b.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=b(e).offset()).top+=b.css(e,"borderTopWidth",!0),i.left+=b.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-b.css(r,"marginTop",!0),left:t.left-i.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===b.css(e,"position");)e=e.offsetParent;return e||me})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;b.fn[e]=function(r){return F(this,function(e,r,i){var o;if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),b.each(["top","left"],function(e,t){b.cssHooks[t]=$e(h.pixelPosition,function(e,n){if(n)return n=We(e,t),Me.test(n)?b(e).position()[t]+"px":n})}),b.each({Height:"height",Width:"width"},function(e,t){b.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){b.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return F(this,function(t,n,i){var o;return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?b.css(t,n,s):b.style(t,n,i,s)},t,a?i:void 0,a)}})}),b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),b.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),b.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(o.call(arguments)))}).guid=e.guid=e.guid||b.guid++,i},b.holdReady=function(e){e?b.readyWait++:b.ready(!0)},b.isArray=Array.isArray,b.parseJSON=JSON.parse,b.nodeName=D,b.isFunction=g,b.isWindow=v,b.camelCase=U,b.type=x,b.now=Date.now,b.isNumeric=function(e){var t=b.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return b});var Xt=e.jQuery,Ut=e.$;return b.noConflict=function(t){return e.$===b&&(e.$=Ut),t&&e.jQuery===b&&(e.jQuery=Xt),b},t||(e.jQuery=e.$=b),b});
/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){var i,r,o;i=t,r=e,o=n[e],r in i?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o})}return t}for(var o,s,a,l,c,h,f,u,d,p,g,m,_,v,E,y,b,T,C,w,I,D,A,S,O,N,k,L,P,x,j,M,R,H,W,F,U,B,K,V,Q,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ft,ut,dt,pt,gt=function(t){var e="transitionend";function n(e){var n=this,r=!1;return t(this).one(i.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(document).find(n).length>0?n:null}catch(t){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var n=t(e).css("transition-duration");return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],s=e[r],a=s&&i.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}var l}};return t.fn.emulateTransitionEnd=n,t.event.special[i.TRANSITION_END]={bindType:e,delegateType:e,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},i}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(s="alert",l="."+(a="bs.alert"),c=(o=e).fn[s],h={CLOSE:"close"+l,CLOSED:"closed"+l,CLICK_DATA_API:"click"+l+".data-api"},f="alert",u="fade",d="show",p=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,a),this._element=null},e._getRootElement=function(t){var e=gt.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(h.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;if(o(t).removeClass(d),o(t).hasClass(u)){var n=gt.getTransitionDurationFromElement(t);o(t).one(gt.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(h.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(a);i||(i=new t(this),n.data(a,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}(),o(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),o.fn[s]=p._jQueryInterface,o.fn[s].Constructor=p,o.fn[s].noConflict=function(){return o.fn[s]=c,p._jQueryInterface},p),_t=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",C="focus",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',D="input",A=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:"focus"+v+E+" blur"+v+E},N=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(D)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(A)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},e.dispose=function(){g.removeData(this._element,_),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(_);n||(n=new t(this),g(this).data(_,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),vt=(L="carousel",x="."+(P="bs.carousel"),j=".data-api",M=(k=e).fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",U="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+j,CLICK_DATA_API:"click"+x+j},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},Z=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=k(t)[0],this._indicatorsElement=k(this._element).find(J.INDICATORS)[0],this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(W)},e.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(F)},e.pause=function(t){t||(this._isPaused=!0),k(this._element).find(J.NEXT_PREV)[0]&&(gt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=k(this._element).find(J.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)k(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=t>n?W:F;this._slide(i,this._items[t])}},e.dispose=function(){k(this._element).off(x),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},R,t),gt.typeCheckConfig(L,t,H),t},e._addEventListeners=function(){var t=this;this._config.keyboard&&k(this._element).on(K.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(k(this._element).on(K.MOUSEENTER,function(e){return t.pause(e)}).on(K.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&k(this._element).on(K.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=k.makeArray(k(t).parent().find(J.ITEM)),this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===W,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),r=k.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return k(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&k(e).addClass(Q)}},e._slide=function(t,e){var n,i,r,o=this,s=k(this._element).find(J.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===W?(n=q,i=z,r=U):(n=G,i=X,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var f=k.Event(K.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(k(this._element).hasClass(Y)){k(l).addClass(i),gt.reflow(l),k(s).addClass(n),k(l).addClass(n);var u=gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(f)},0)}).emulateTransitionEnd(u)}else k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(f);h&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=k(this).data(P),i=r({},R,k(this).data());"object"==typeof e&&(i=r({},i,e));var o="string"==typeof e?e:i.slide;if(n||(n=new t(this,i),k(this).data(P,n)),"number"==typeof e)n.to(e);else if("string"==typeof o){if(void 0===n[o])throw new TypeError('No method named "'+o+'"');n[o]()}else i.interval&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=gt.getSelectorFromElement(this);if(n){var i=k(n)[0];if(i&&k(i).hasClass(V)){var o=r({},k(i).data(),k(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),t._jQueryInterface.call(k(i),o),s&&k(i).data(P).to(s),e.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return R}}]),t}(),k(document).on(K.CLICK_DATA_API,J.DATA_SLIDE,Z._dataApiClickHandler),k(window).on(K.LOAD_DATA_API,function(){k(J.DATA_RIDE).each(function(){var t=k(this);Z._jQueryInterface.call(t,t.data())})}),k.fn[L]=Z._jQueryInterface,k.fn[L].Constructor=Z,k.fn[L].noConflict=function(){return k.fn[L]=M,Z._jQueryInterface},Z),Et=(tt="collapse",nt="."+(et="bs.collapse"),it=($=e).fn[tt],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},st={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},at="show",lt="collapse",ct="collapsing",ht="collapsed",ft="width",ut="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},pt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=$(dt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=gt.getSelectorFromElement(r);null!==o&&$(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){$(this._element).hasClass(at)?this.hide():this.show()},e.show=function(){var e,n,i=this;if(!this._isTransitioning&&!$(this._element).hasClass(at)&&(this._parent&&0===(e=$.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(n=$(e).not(this._selector).data(et))&&n._isTransitioning))){var r=$.Event(st.SHOW);if($(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call($(e).not(this._selector),"hide"),n||$(e).data(et,null));var o=this._getDimension();$(this._element).removeClass(lt).addClass(ct),this._element.style[o]=0,this._triggerArray.length>0&&$(this._triggerArray).removeClass(ht).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(o[0].toUpperCase()+o.slice(1)),a=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){$(i._element).removeClass(ct).addClass(lt).addClass(at),i._element.style[o]="",i.setTransitioning(!1),$(i._element).trigger(st.SHOWN)}).emulateTransitionEnd(a),this._element.style[o]=this._element[s]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&$(this._element).hasClass(at)){var e=$.Event(st.HIDE);if($(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",gt.reflow(this._element),$(this._element).addClass(ct).removeClass(lt).removeClass(at),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=gt.getSelectorFromElement(r);if(null!==o)$(o).hasClass(at)||$(r).addClass(ht).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){t.setTransitioning(!1),$(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)}).emulateTransitionEnd(s)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){$.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},rt,t)).toggle=Boolean(t.toggle),gt.typeCheckConfig(tt,t,ot),t},e._getDimension=function(){return $(this._element).hasClass(ft)?ft:ut},e._getParent=function(){var e=this,n=null;gt.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=$(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return $(n).find(i).each(function(n,i){e._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}),n},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=$(t).hasClass(at);e.length>0&&$(e).toggleClass(ht,!n).attr("aria-expanded",n)}},t._getTargetFromElement=function(t){var e=gt.getSelectorFromElement(t);return e?$(e)[0]:null},t._jQueryInterface=function(e){return this.each(function(){var n=$(this),i=n.data(et),o=r({},rt,n.data(),"object"==typeof e&&e?e:{});if(!i&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),i||(i=new t(this,o),n.data(et,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return rt}}]),t}(),$(document).on(st.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=$(this),n=gt.getSelectorFromElement(this);$(n).each(function(){var t=$(this),n=t.data(et)?"toggle":e.data();pt._jQueryInterface.call(t,n)})}),$.fn[tt]=pt._jQueryInterface,$.fn[tt].Constructor=pt,$.fn[tt].noConflict=function(){return $.fn[tt]=it,pt._jQueryInterface},pt),yt="undefined"!=typeof window&&"undefined"!=typeof document,bt=["Edge","Trident","Firefox"],Tt=0,Ct=0;Ct<bt.length;Ct+=1)if(yt&&navigator.userAgent.indexOf(bt[Ct])>=0){Tt=1;break}var wt=yt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Tt))}};function It(t){return t&&"[object Function]"==={}.toString.call(t)}function Dt(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function At(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function St(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Dt(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?t:St(At(t))}var Ot=yt&&!(!window.MSInputMethodContext||!document.documentMode),Nt=yt&&/MSIE 10/.test(navigator.userAgent);function kt(t){return 11===t?Ot:10===t?Nt:Ot||Nt}function Lt(t){if(!t)return document.documentElement;for(var e=kt(10)?document.body:null,n=t.offsetParent;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===Dt(n,"position")?Lt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Pt(t){return null!==t.parentNode?Pt(t.parentNode):t}function xt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Lt(s.firstElementChild)!==s?Lt(l):l;var c=Pt(t);return c.host?xt(c.host,e):xt(t,Pt(e).host)}function jt(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function Mt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Rt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],kt(10)?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Ht(){var t=document.body,e=document.documentElement,n=kt(10)&&getComputedStyle(e);return{height:Rt("Height",t,e,n),width:Rt("Width",t,e,n)}}var Wt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ft=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ut=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Kt(t){return Bt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Vt(t){var e={};try{if(kt(10)){e=t.getBoundingClientRect();var n=jt(t,"top"),i=jt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Ht():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=Dt(t);l-=Mt(h,"x"),c-=Mt(h,"y"),r.width-=l,r.height-=c}return Kt(r)}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=kt(10),r="HTML"===e.nodeName,o=Vt(t),s=Vt(e),a=St(t),l=Dt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=Kt({top:o.top-s.top-c,left:o.left-s.left-h,width:o.width,height:o.height});if(f.marginTop=0,f.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);f.top-=c-u,f.bottom-=c-u,f.left-=h-d,f.right-=h-d,f.marginTop=u,f.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=jt(e,"top"),r=jt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(f,e)),f}function Yt(t){if(!t||!t.parentElement||kt())return document.documentElement;for(var e=t.parentElement;e&&"none"===Dt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?Yt(t):xt(t,e);if("viewport"===i)o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Qt(t,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:jt(n),a=e?0:jt(n,"left");return Kt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=St(At(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Qt(a,s,r);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===Dt(e,"position")||t(At(e)))}(s))o=l;else{var c=Ht(),h=c.height,f=c.width;o.top+=l.top-l.marginTop,o.bottom=h+l.top,o.left+=l.left-l.marginLeft,o.right=f+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function qt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(n,i,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Bt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,f=t.split("-")[1];return h+(f?"-"+f:"")}function zt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Qt(n,i?Yt(e):xt(e,n),i)}function Xt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Jt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Zt(t,e,n){n=n.split("-")[0];var i=Xt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[Jt(a)],r}function $t(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function te(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=$t(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&It(n)&&(e.offsets.popper=Kt(e.offsets.popper),e.offsets.reference=Kt(e.offsets.reference),e=n(e,t))}),e}function ee(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function ne(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],o=r?""+r+n:t;if(void 0!==document.body.style[o])return o}return null}function ie(t){var e=t.ownerDocument;return e?e.defaultView:window}function re(t,e,n,i){n.updateBound=i,ie(t).addEventListener("resize",n.updateBound,{passive:!0});var r=St(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(St(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function oe(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ie(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function se(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function ae(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&se(e[n])&&(i="px"),t.style[n]=e[n]+i})}function le(t,e,n){var i=$t(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],he=ce.slice(3);function fe(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=he.indexOf(t),i=he.slice(n+1).concat(he.slice(0,n));return e?i.reverse():i}var ue={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function de(t,e,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf($t(s,function(t){return-1!==t.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(c=c.map(function(t,i){var r=(1===i?!o:o)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Kt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,r,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){se(n)&&(r[e]+=n*("-"===t[i-1]?-1:1))})}),r}var pe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ut({},l,o[l]),end:Ut({},l,o[l]+o[c]-s[c])};t.offsets.popper=Bt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=se(+n)?[+n,0]:de(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||Lt(t.instance.popper);t.instance.reference===n&&(n=Lt(n));var i=ne("transform"),r=t.instance.popper.style,o=r.top,s=r.left,a=r[i];r.top="",r.left="",r[i]="";var l=Gt(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);r.top=o,r.left=s,r[i]=a,e.boundaries=l;var c=e.priority,h=t.offsets.popper,f={primary:function(t){var n=h[t];return h[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(h[t],l[t])),Ut({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=h[n];return h[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(h[n],l[t]-("right"===t?h.width:h.height))),Ut({},n,i)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Bt({},h,f[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!le(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",h=l?"Top":"Left",f=h.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=Xt(i)[c];a[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(t.offsets.popper[f]+=a[f]+p-s[d]),t.offsets.popper=Kt(t.offsets.popper);var g=a[f]+a[c]/2-p/2,m=Dt(t.instance.popper),_=parseFloat(m["margin"+h],10),v=parseFloat(m["border"+h+"Width"],10),E=g-t.offsets.popper[f]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Ut(n={},f,Math.round(E)),Ut(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(ee(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=Gt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],r=Jt(i),o=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case ue.FLIP:s=[i,r];break;case ue.CLOCKWISE:s=fe(i);break;case ue.COUNTERCLOCKWISE:s=fe(i,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0],r=Jt(i);var c,h=t.offsets.popper,f=t.offsets.reference,u=Math.floor,d="left"===i&&u(h.right)>u(f.left)||"right"===i&&u(h.left)<u(f.right)||"top"===i&&u(h.bottom)>u(f.top)||"bottom"===i&&u(h.top)<u(f.bottom),p=u(h.left)<u(n.left),g=u(h.right)>u(n.right),m=u(h.top)<u(n.top),_=u(h.bottom)>u(n.bottom),v="left"===i&&p||"right"===i&&g||"top"===i&&m||"bottom"===i&&_,E=-1!==["top","bottom"].indexOf(i),y=!!e.flipVariations&&(E&&"start"===o&&p||E&&"end"===o&&g||!E&&"start"===o&&m||!E&&"end"===o&&_);(d||v||y)&&(t.flipped=!0,(d||v)&&(i=s[l+1]),y&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=i+(o?"-"+o:""),t.offsets.popper=Bt({},t.offsets.popper,Zt(t.instance.popper,t.offsets.reference,t.placement)),t=te(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=Jt(e),t.offsets.popper=Kt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!le(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=$t(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=$t(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=Vt(Lt(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",u=ne("transform"),d=void 0,p=void 0;if(p="bottom"===h?-a.height+c.bottom:c.top,d="right"===f?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[h]=0,l[f]=0,l.willChange="transform";else{var g="bottom"===h?-1:1,m="right"===f?-1:1;l[h]=p*g,l[f]=d*m,l.willChange=h+", "+f}var _={"x-placement":t.placement};return t.attributes=Bt({},_,t.attributes),t.styles=Bt({},l,t.styles),t.arrowStyles=Bt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return ae(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&ae(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=zt(r,e,t,n.positionFixed),s=qt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),ae(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ge=function(){function t(e,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Wt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=wt(this.update.bind(this)),this.options=Bt({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(Bt({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=Bt({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Bt({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&It(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return Ft(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=zt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=qt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Zt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=te(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,ee(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ne("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=re(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return oe.call(this)}}]),t}();ge.Utils=("undefined"!=typeof window?window:global).PopperUtils,ge.placements=ce,ge.Defaults=pe;var me,_e,ve,Ee,ye,be,Te,Ce,we,Ie,De,Ae,Se,Oe,Ne,ke,Le,Pe,xe,je,Me,Re,He,We,Fe,Ue,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,hn,fn,un,dn,pn,gn,mn,_n,vn,En,yn,bn,Tn,Cn,wn,In,Dn,An,Sn,On,Nn,kn,Ln,Pn,xn,jn,Mn,Rn,Hn,Wn,Fn,Un,Bn,Kn,Vn,Qn,Yn,Gn,qn,zn,Xn,Jn,Zn,$n,ti,ei,ni,ii,ri,oi,si,ai,li,ci,hi,fi,ui,di,pi,gi,mi,_i,vi,Ei,yi,bi,Ti=(_e="dropdown",Ee="."+(ve="bs.dropdown"),ye=".data-api",be=(me=e).fn[_e],Te=new RegExp("38|40|27"),Ce={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:"show"+Ee,SHOWN:"shown"+Ee,CLICK:"click"+Ee,CLICK_DATA_API:"click"+Ee+ye,KEYDOWN_DATA_API:"keydown"+Ee+ye,KEYUP_DATA_API:"keyup"+Ee+ye},we="disabled",Ie="show",De="dropup",Ae="dropright",Se="dropleft",Oe="dropdown-menu-right",Ne="position-static",ke='[data-toggle="dropdown"]',Le=".dropdown form",Pe=".dropdown-menu",xe=".navbar-nav",je=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Me="top-start",Re="top-end",He="bottom-start",We="bottom-end",Fe="right-start",Ue="left-start",Be={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Ke={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Ve=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!me(this._element).hasClass(we)){var e=t._getParentFromElement(this._element),n=me(this._menu).hasClass(Ie);if(t._clearMenus(),!n){var i={relatedTarget:this._element},r=me.Event(Ce.SHOW,i);if(me(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if(void 0===ge)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=e:gt.isElement(this._config.reference)&&(o=this._config.reference,void 0!==this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&me(e).addClass(Ne),this._popper=new ge(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===me(e).closest(xe).length&&me(document.body).children().on("mouseover",null,me.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),me(this._menu).toggleClass(Ie),me(e).toggleClass(Ie).trigger(me.Event(Ce.SHOWN,i))}}}},e.dispose=function(){me.removeData(this._element,ve),me(this._element).off(Ee),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;me(this._element).on(Ce.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=r({},this.constructor.Default,me(this._element).data(),t),gt.typeCheckConfig(_e,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);this._menu=me(e).find(Pe)[0]}return this._menu},e._getPlacement=function(){var t=me(this._element).parent(),e=He;return t.hasClass(De)?(e=Me,me(this._menu).hasClass(Oe)&&(e=Re)):t.hasClass(Ae)?e=Fe:t.hasClass(Se)?e=Ue:me(this._menu).hasClass(Oe)&&(e=We),e},e._detectNavbar=function(){return me(this._element).closest(".navbar").length>0},e._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},t._jQueryInterface=function(e){return this.each(function(){var n=me(this).data(ve);if(n||(n=new t(this,"object"==typeof e?e:null),me(this).data(ve,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=me.makeArray(me(ke)),i=0;i<n.length;i++){var r=t._getParentFromElement(n[i]),o=me(n[i]).data(ve),s={relatedTarget:n[i]};if(o){var a=o._menu;if(me(r).hasClass(Ie)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&me.contains(r,e.target))){var l=me.Event(Ce.HIDE,s);me(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&me(document.body).children().off("mouseover",null,me.noop),n[i].setAttribute("aria-expanded","false"),me(a).removeClass(Ie),me(r).removeClass(Ie).trigger(me.Event(Ce.HIDDEN,s)))}}}},t._getParentFromElement=function(t){var e,n=gt.getSelectorFromElement(t);return n&&(e=me(n)[0]),e||t.parentNode},t._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||me(e.target).closest(Pe).length)):Te.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!me(this).hasClass(we))){var n=t._getParentFromElement(this),i=me(n).hasClass(Ie);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var r=me(n).find(je).get();if(0!==r.length){var o=r.indexOf(e.target);38===e.which&&o>0&&o--,40===e.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===e.which){var s=me(n).find(ke)[0];me(s).trigger("focus")}me(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Be}},{key:"DefaultType",get:function(){return Ke}}]),t}(),me(document).on(Ce.KEYDOWN_DATA_API,ke,Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API,Pe,Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API+" "+Ce.KEYUP_DATA_API,Ve._clearMenus).on(Ce.CLICK_DATA_API,ke,function(t){t.preventDefault(),t.stopPropagation(),Ve._jQueryInterface.call(me(this),"toggle")}).on(Ce.CLICK_DATA_API,Le,function(t){t.stopPropagation()}),me.fn[_e]=Ve._jQueryInterface,me.fn[_e].Constructor=Ve,me.fn[_e].noConflict=function(){return me.fn[_e]=be,Ve._jQueryInterface},Ve),Ci=(Ye="modal",qe="."+(Ge="bs.modal"),ze=(Qe=e).fn[Ye],Xe={backdrop:!0,keyboard:!0,focus:!0,show:!0},Je={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ze={HIDE:"hide"+qe,HIDDEN:"hidden"+qe,SHOW:"show"+qe,SHOWN:"shown"+qe,FOCUSIN:"focusin"+qe,RESIZE:"resize"+qe,CLICK_DISMISS:"click.dismiss"+qe,KEYDOWN_DISMISS:"keydown.dismiss"+qe,MOUSEUP_DISMISS:"mouseup.dismiss"+qe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qe,CLICK_DATA_API:"click"+qe+".data-api"},$e="modal-scrollbar-measure",tn="modal-backdrop",en="modal-open",nn="fade",rn="show",on={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},sn=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Qe(t).find(on.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Qe(this._element).hasClass(nn)&&(this._isTransitioning=!0);var n=Qe.Event(Ze.SHOW,{relatedTarget:t});Qe(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Qe(document.body).addClass(en),this._setEscapeEvent(),this._setResizeEvent(),Qe(this._element).on(Ze.CLICK_DISMISS,on.DATA_DISMISS,function(t){return e.hide(t)}),Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS,function(){Qe(e._element).one(Ze.MOUSEUP_DISMISS,function(t){Qe(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Qe.Event(Ze.HIDE);if(Qe(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Qe(this._element).hasClass(nn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Qe(document).off(Ze.FOCUSIN),Qe(this._element).removeClass(rn),Qe(this._element).off(Ze.CLICK_DISMISS),Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS),i){var r=gt.getTransitionDurationFromElement(this._element);Qe(this._element).one(gt.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){Qe.removeData(this._element,Ge),Qe(window,document,this._element,this._backdrop).off(qe),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},Xe,t),gt.typeCheckConfig(Ye,t,Je),t},e._showElement=function(t){var e=this,n=Qe(this._element).hasClass(nn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&gt.reflow(this._element),Qe(this._element).addClass(rn),this._config.focus&&this._enforceFocus();var i=Qe.Event(Ze.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Qe(e._element).trigger(i)};if(n){var o=gt.getTransitionDurationFromElement(this._element);Qe(this._dialog).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},e._enforceFocus=function(){var t=this;Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===Qe(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?Qe(this._element).on(Ze.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||Qe(this._element).off(Ze.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?Qe(window).on(Ze.RESIZE,function(e){return t.handleUpdate(e)}):Qe(window).off(Ze.RESIZE)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Qe(document.body).removeClass(en),t._resetAdjustments(),t._resetScrollbar(),Qe(t._element).trigger(Ze.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(Qe(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=Qe(this._element).hasClass(nn)?nn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=tn,n&&Qe(this._backdrop).addClass(n),Qe(this._backdrop).appendTo(document.body),Qe(this._element).on(Ze.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&gt.reflow(this._backdrop),Qe(this._backdrop).addClass(rn),!t)return;if(!n)return void t();var i=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Qe(this._backdrop).removeClass(rn);var r=function(){e._removeBackdrop(),t&&t()};if(Qe(this._element).hasClass(nn)){var o=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){Qe(on.FIXED_CONTENT).each(function(e,n){var i=Qe(n)[0].style.paddingRight,r=Qe(n).css("padding-right");Qe(n).data("padding-right",i).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),Qe(on.STICKY_CONTENT).each(function(e,n){var i=Qe(n)[0].style.marginRight,r=Qe(n).css("margin-right");Qe(n).data("margin-right",i).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),Qe(on.NAVBAR_TOGGLER).each(function(e,n){var i=Qe(n)[0].style.marginRight,r=Qe(n).css("margin-right");Qe(n).data("margin-right",i).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var e=document.body.style.paddingRight,n=Qe(document.body).css("padding-right");Qe(document.body).data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){Qe(on.FIXED_CONTENT).each(function(t,e){var n=Qe(e).data("padding-right");void 0!==n&&Qe(e).css("padding-right",n).removeData("padding-right")}),Qe(on.STICKY_CONTENT+", "+on.NAVBAR_TOGGLER).each(function(t,e){var n=Qe(e).data("margin-right");void 0!==n&&Qe(e).css("margin-right",n).removeData("margin-right")});var t=Qe(document.body).data("padding-right");void 0!==t&&Qe(document.body).css("padding-right",t).removeData("padding-right")},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$e,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var i=Qe(this).data(Ge),o=r({},Xe,Qe(this).data(),"object"==typeof e&&e?e:{});if(i||(i=new t(this,o),Qe(this).data(Ge,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else o.show&&i.show(n)})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xe}}]),t}(),Qe(document).on(Ze.CLICK_DATA_API,on.DATA_TOGGLE,function(t){var e,n=this,i=gt.getSelectorFromElement(this);i&&(e=Qe(i)[0]);var o=Qe(e).data(Ge)?"toggle":r({},Qe(e).data(),Qe(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Qe(e).one(Ze.SHOW,function(t){t.isDefaultPrevented()||s.one(Ze.HIDDEN,function(){Qe(n).is(":visible")&&n.focus()})});sn._jQueryInterface.call(Qe(e),o,this)}),Qe.fn[Ye]=sn._jQueryInterface,Qe.fn[Ye].Constructor=sn,Qe.fn[Ye].noConflict=function(){return Qe.fn[Ye]=ze,sn._jQueryInterface},sn),wi=(ln="tooltip",hn="."+(cn="bs.tooltip"),fn=(an=e).fn[ln],un="bs-tooltip",dn=new RegExp("(^|\\s)"+un+"\\S+","g"),pn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},gn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},mn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},_n="show",vn="out",En={HIDE:"hide"+hn,HIDDEN:"hidden"+hn,SHOW:"show"+hn,SHOWN:"shown"+hn,INSERTED:"inserted"+hn,CLICK:"click"+hn,FOCUSIN:"focusin"+hn,FOCUSOUT:"focusout"+hn,MOUSEENTER:"mouseenter"+hn,MOUSELEAVE:"mouseleave"+hn},yn="fade",bn="show",Tn=".tooltip-inner",Cn=".arrow",wn="hover",In="focus",Dn="click",An="manual",Sn=function(){function t(t,e){if(void 0===ge)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=an(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(an(this.getTipElement()).hasClass(bn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),an.removeData(this.element,this.constructor.DATA_KEY),an(this.element).off(this.constructor.EVENT_KEY),an(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&an(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===an(this.element).css("display"))throw new Error("Please use show on visible elements");var e=an.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){an(this.element).trigger(e);var n=an.contains(this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=gt.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&an(i).addClass(yn);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:an(this.config.container);an(i).data(this.constructor.DATA_KEY,this),an.contains(this.element.ownerDocument.documentElement,this.tip)||an(i).appendTo(a),an(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new ge(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Cn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),an(i).addClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().on("mouseover",null,an.noop);var l=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,an(t.element).trigger(t.constructor.Event.SHOWN),e===vn&&t._leave(null,t)};if(an(this.tip).hasClass(yn)){var c=gt.getTransitionDurationFromElement(this.tip);an(this.tip).one(gt.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},e.hide=function(t){var e=this,n=this.getTipElement(),i=an.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==_n&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),an(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(an(this.element).trigger(i),!i.isDefaultPrevented()){if(an(n).removeClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().off("mouseover",null,an.noop),this._activeTrigger[Dn]=!1,this._activeTrigger[In]=!1,this._activeTrigger[wn]=!1,an(this.tip).hasClass(yn)){var o=gt.getTransitionDurationFromElement(n);an(n).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){an(this.getTipElement()).addClass(un+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||an(this.config.template)[0],this.tip},e.setContent=function(){var t=an(this.getTipElement());this.setElementContent(t.find(Tn),this.getTitle()),t.removeClass(yn+" "+bn)},e.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?an(e).parent().is(t)||t.empty().append(e):t.text(an(e).text()):t[n?"html":"text"](e)},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getAttachment=function(t){return gn[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)an(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==An){var n=e===wn?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=e===wn?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;an(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}an(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?In:wn]=!0),an(e.getTipElement()).hasClass(bn)||e._hoverState===_n?e._hoverState=_n:(clearTimeout(e._timeout),e._hoverState=_n,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===_n&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?In:wn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=vn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===vn&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){return"number"==typeof(t=r({},this.constructor.Default,an(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),gt.typeCheckConfig(ln,t,this.constructor.DefaultType),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=an(this.getTipElement()),e=t.attr("class").match(dn);null!==e&&e.length>0&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(an(t).removeClass(yn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=an(this).data(cn),i="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new t(this,i),an(this).data(cn,n)),"string"==typeof e)){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return mn}},{key:"NAME",get:function(){return ln}},{key:"DATA_KEY",get:function(){return cn}},{key:"Event",get:function(){return En}},{key:"EVENT_KEY",get:function(){return hn}},{key:"DefaultType",get:function(){return pn}}]),t}(),an.fn[ln]=Sn._jQueryInterface,an.fn[ln].Constructor=Sn,an.fn[ln].noConflict=function(){return an.fn[ln]=fn,Sn._jQueryInterface},Sn),Ii=(Nn="popover",Ln="."+(kn="bs.popover"),Pn=(On=e).fn[Nn],xn="bs-popover",jn=new RegExp("(^|\\s)"+xn+"\\S+","g"),Mn=r({},wi.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Rn=r({},wi.DefaultType,{content:"(string|element|function)"}),Hn="fade",Wn="show",Fn=".popover-header",Un=".popover-body",Bn={HIDE:"hide"+Ln,HIDDEN:"hidden"+Ln,SHOW:"show"+Ln,SHOWN:"shown"+Ln,INSERTED:"inserted"+Ln,CLICK:"click"+Ln,FOCUSIN:"focusin"+Ln,FOCUSOUT:"focusout"+Ln,MOUSEENTER:"mouseenter"+Ln,MOUSELEAVE:"mouseleave"+Ln},Kn=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){On(this.getTipElement()).addClass(xn+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||On(this.config.template)[0],this.tip},o.setContent=function(){var t=On(this.getTipElement());this.setElementContent(t.find(Fn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Un),e),t.removeClass(Hn+" "+Wn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=On(this.getTipElement()),e=t.attr("class").match(jn);null!==e&&e.length>0&&t.removeClass(e.join(""))},r._jQueryInterface=function(t){return this.each(function(){var e=On(this).data(kn),n="object"==typeof t?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new r(this,n),On(this).data(kn,e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Mn}},{key:"NAME",get:function(){return Nn}},{key:"DATA_KEY",get:function(){return kn}},{key:"Event",get:function(){return Bn}},{key:"EVENT_KEY",get:function(){return Ln}},{key:"DefaultType",get:function(){return Rn}}]),r}(wi),On.fn[Nn]=Kn._jQueryInterface,On.fn[Nn].Constructor=Kn,On.fn[Nn].noConflict=function(){return On.fn[Nn]=Pn,Kn._jQueryInterface},Kn),Di=(Qn="scrollspy",Gn="."+(Yn="bs.scrollspy"),qn=(Vn=e).fn[Qn],zn={offset:10,method:"auto",target:""},Xn={offset:"number",method:"string",target:"(string|element)"},Jn={ACTIVATE:"activate"+Gn,SCROLL:"scroll"+Gn,LOAD_DATA_API:"load"+Gn+".data-api"},Zn="dropdown-item",$n="active",ti={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},ei="offset",ni="position",ii=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" a,"+this._config.target+" "+ti.NAV_LINKS+","+this._config.target+" "+ti.LIST_ITEMS+","+this._config.target+" "+ti.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Vn(this._scrollElement).on(Jn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?ei:ni,n="auto"===this._config.method?e:this._config.method,i=n===ni?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Vn.makeArray(Vn(this._selector)).map(function(t){var e,r=gt.getSelectorFromElement(t);if(r&&(e=Vn(r)[0]),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[Vn(e)[n]().top+i,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){Vn.removeData(this._element,Yn),Vn(this._scrollElement).off(Gn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},zn,"object"==typeof t&&t?t:{})).target){var e=Vn(t.target).attr("id");e||(e=gt.getUID(Qn),Vn(t.target).attr("id",e)),t.target="#"+e}return gt.typeCheckConfig(Qn,t,Xn),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=Vn(e.join(","));n.hasClass(Zn)?(n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n),n.addClass($n)):(n.addClass($n),n.parent().is("li")&&n.parent().addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS+", "+ti.LIST_ITEMS).addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)),Vn(this._scrollElement).trigger(Jn.ACTIVATE,{relatedTarget:t})},e._clear=function(){Vn(this._selector).filter(ti.ACTIVE).removeClass($n).parent().removeClass($n)},t._jQueryInterface=function(e){return this.each(function(){var n=Vn(this).data(Yn);if(n||(n=new t(this,"object"==typeof e&&e),Vn(this).data(Yn,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return zn}}]),t}(),Vn(window).on(Jn.LOAD_DATA_API,function(){for(var t=Vn.makeArray(Vn(ti.DATA_SPY)),e=t.length;e--;){var n=Vn(t[e]);ii._jQueryInterface.call(n,n.data())}}),Vn.fn[Qn]=ii._jQueryInterface,Vn.fn[Qn].Constructor=ii,Vn.fn[Qn].noConflict=function(){return Vn.fn[Qn]=qn,ii._jQueryInterface},ii),Ai=(si="."+(oi="bs.tab"),ai=(ri=e).fn.tab,li={HIDE:"hide"+si,HIDDEN:"hidden"+si,SHOW:"show"+si,SHOWN:"shown"+si,CLICK_DATA_API:"click"+si+".data-api"},ci="dropdown-menu",hi="active",fi="disabled",ui="fade",di="show",pi=".dropdown",gi=".nav, .list-group",mi=".active",_i="> li > .active",vi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ei=".dropdown-toggle",yi="> .dropdown-menu .active",bi=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ri(this._element).hasClass(hi)||ri(this._element).hasClass(fi))){var e,n,i=ri(this._element).closest(gi)[0],r=gt.getSelectorFromElement(this._element);if(i){var o="UL"===i.nodeName?_i:mi;n=(n=ri.makeArray(ri(i).find(o)))[n.length-1]}var s=ri.Event(li.HIDE,{relatedTarget:this._element}),a=ri.Event(li.SHOW,{relatedTarget:n});if(n&&ri(n).trigger(s),ri(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=ri(r)[0]),this._activate(this._element,i);var l=function(){var e=ri.Event(li.HIDDEN,{relatedTarget:t._element}),i=ri.Event(li.SHOWN,{relatedTarget:n});ri(n).trigger(e),ri(t._element).trigger(i)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){ri.removeData(this._element,oi),this._element=null},e._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?ri(e).find(_i):ri(e).children(mi))[0],o=n&&r&&ri(r).hasClass(ui),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=gt.getTransitionDurationFromElement(r);ri(r).one(gt.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},e._transitionComplete=function(t,e,n){if(e){ri(e).removeClass(di+" "+hi);var i=ri(e.parentNode).find(yi)[0];i&&ri(i).removeClass(hi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(ri(t).addClass(hi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),gt.reflow(t),ri(t).addClass(di),t.parentNode&&ri(t.parentNode).hasClass(ci)){var r=ri(t).closest(pi)[0];r&&ri(r).find(Ei).addClass(hi),t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=ri(this),i=n.data(oi);if(i||(i=new t(this),n.data(oi,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}(),ri(document).on(li.CLICK_DATA_API,vi,function(t){t.preventDefault(),bi._jQueryInterface.call(ri(this),"show")}),ri.fn.tab=bi._jQueryInterface,ri.fn.tab.Constructor=bi,ri.fn.tab.noConflict=function(){return ri.fn.tab=ai,bi._jQueryInterface},bi);!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=gt,t.Alert=mt,t.Button=_t,t.Carousel=vt,t.Collapse=Et,t.Dropdown=Ti,t.Modal=Ci,t.Popover=Ii,t.Scrollspy=Di,t.Tab=Ai,t.Tooltip=wi,Object.defineProperty(t,"__esModule",{value:!0})});
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(t){"use strict";var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function e(e){return this.each(function(){var o=t(this),f=o.data("bs.affix"),n="object"==typeof e&&e;f||o.data("bs.affix",f=new i(this,n)),"string"==typeof e&&f[e]()})}i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,i,e,o){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=e&&"top"==this.affixed)return f<e&&"top";if("bottom"==this.affixed)return null!=e?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-o)&&"bottom";var a=null==this.affixed,h=a?f:n.top;return null!=e&&f<=e?"top":null!=o&&h+(a?s:i)>=t-o&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,f=o.top,n=o.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(n=f=o),"function"==typeof f&&(f=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var a=this.getState(s,e,f,n);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),r=t.Event(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-e-n})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery);
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!function(e){var r=[],t=!1,i=!1,a={interval:250,force_process:!1},n=e(window),o=[];function f(){i=!1;for(var t=0,a=r.length;t<a;t++){var n=(p=r[t],e(p).filter(function(){return e(this).is(":appeared")}));if(n.trigger("appear",[n]),o[t]){var f=o[t].not(n);f.trigger("disappear",[f])}o[t]=n}var p}e.expr[":"].appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var i=n.scrollLeft(),a=n.scrollTop(),o=t.offset(),f=o.left,p=o.top;return p+t.height()>=a&&p-(t.data("appear-top-offset")||0)<=a+n.height()&&f+t.width()>=i&&f-(t.data("appear-left-offset")||0)<=i+n.width()},e.fn.extend({appear:function(n){var p,s=e.extend({},a,n||{}),u=this.selector||this;if(!t){var c=function(){i||(i=!0,setTimeout(f,s.interval))};e(window).scroll(c).resize(c),t=!0}return s.force_process&&setTimeout(f,s.interval),p=u,r.push(p),o.push(),e(u)}}),e.extend({force_appear:function(){return!!t&&(f(),!0)}})}("undefined"!=typeof module?require("jquery"):jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){var n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function i(o,i){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(t):t}var r=e.cookie=function(n,t,c){if(arguments.length>1&&!e.isFunction(t)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var u=c.expires,a=c.expires=new Date;a.setTime(+a+864e5*u)}return document.cookie=[o(n),"=",(d=t,o(r.json?JSON.stringify(d):String(d))),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d,f,p=n?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;m<x;m++){var l=s[m].split("="),v=(f=l.shift(),r.raw?f:decodeURIComponent(f)),k=l.join("=");if(n&&n===v){p=i(k,t);break}n||void 0===(k=i(k))||(p[v]=k)}return p};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}(function(e){"use strict";var t,n,i={interval:100,sensitivity:6,timeout:0},o=0,r=function(e){t=e.pageX,n=e.pageY},u=function(e,i,o,v){if(Math.sqrt((o.pX-t)*(o.pX-t)+(o.pY-n)*(o.pY-n))<v.sensitivity)return i.off(o.event,r),delete o.timeoutId,o.isActive=!0,e.pageX=t,e.pageY=n,delete o.pX,delete o.pY,v.over.apply(i[0],[e]);o.pX=t,o.pY=n,o.timeoutId=setTimeout(function(){u(e,i,o,v)},v.interval)};e.fn.hoverIntent=function(t,n,v){var a=o++,s=e.extend({},i);e.isPlainObject(t)?(s=e.extend(s,t),e.isFunction(s.out)||(s.out=s.over)):s=e.isFunction(n)?e.extend(s,{over:t,out:n,selector:v}):e.extend(s,{over:t,out:t,selector:n});var f=function(t){var n=e.extend({},t),i=e(this),o=i.data("hoverIntent");o||i.data("hoverIntent",o={});var v=o[a];v||(o[a]=v={id:a}),v.timeoutId&&(v.timeoutId=clearTimeout(v.timeoutId));var f=v.event="mousemove.hoverIntent.hoverIntent"+a;if("mouseenter"===t.type){if(v.isActive)return;v.pX=n.pageX,v.pY=n.pageY,i.off(f,r).on(f,r),v.timeoutId=setTimeout(function(){u(n,i,v,s)},s.interval)}else{if(!v.isActive)return;i.off(f,r),v.timeoutId=setTimeout(function(){var e,t,o,r;e=n,t=i,o=v,r=s.out,delete t.data("hoverIntent")[o.id],r.apply(t[0],[e])},s.timeout)}};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},s.selector)}});
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
!function(e,s){"use strict";var t,o,n,i,r,a,h,l,p,u,f,c,d,v,m,y,C,w,g=(n="sf-breadcrumb",i="sf-js-enabled",r="sf-with-ul",a="sf-arrows",(o=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent))&&e("html").css("cursor","pointer").on("click",e.noop),h=o,l="behavior"in(t=document.documentElement.style)&&"fill"in t&&/iemobile/i.test(navigator.userAgent),p=!!s.PointerEvent,u=function(e,s,t){var o=i;s.cssArrows&&(o+=" "+a),e[t?"addClass":"removeClass"](o)},f=function(e,s){var t=s?"addClass":"removeClass";e.children("a")[t](r)},c=function(e){var s=e.css("ms-touch-action"),t=e.css("touch-action");t="pan-y"===(t=t||s)?"auto":"pan-y",e.css({"ms-touch-action":t,"touch-action":t})},d=function(e){return e.closest("."+i)},v=function(e){return d(e).data("sfOptions")},m=function(){var s=e(this),t=v(s);clearTimeout(t.sfTimer),s.siblings().superfish("hide").end().superfish("show")},y=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(d(this)),s.$path.length&&e.proxy(m,s.$path)())},C=function(){var s=e(this),t=v(s);h?e.proxy(y,s,t)():(clearTimeout(t.sfTimer),t.sfTimer=setTimeout(e.proxy(y,s,t),t.delay))},w=function(s){var t=e(this),o=v(t),n=t.siblings(s.data.popUpSelector);if(!1===o.onHandleTouch.call(n))return this;n.length>0&&n.is(":hidden")&&(t.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?t.trigger("focus"):e.proxy(m,t.parent("li"))())},{hide:function(s){if(this.length){var t=v(this);if(!t)return this;var o=!0===t.retainPath?t.$path:"",n=this.find("li."+t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),i=t.speedOut;if(s&&(n.show(),i=0),t.retainPath=!1,!1===t.onBeforeHide.call(n))return this;n.stop(!0,!0).animate(t.animationOut,i,function(){var s=e(this);t.onHide.call(s)})}return this},show:function(){var e=v(this);if(!e)return this;var s=this.addClass(e.hoverClass).children(e.popUpSelector);return!1===e.onBeforeShow.call(s)?this:(s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),this)},destroy:function(){return this.each(function(){var s,t=e(this),o=t.data("sfOptions");if(!o)return!1;s=t.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),u(t,o),f(s),c(t),t.off(".superfish").off(".hoverIntent"),s.children(o.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+n).addClass(o.pathClass),t.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call(t),t.removeData("sfOptions")})},init:function(s){return this.each(function(){var t=e(this);if(t.data("sfOptions"))return!1;var o,i=e.extend({},e.fn.superfish.defaults,s),r=t.find(i.popUpSelector).parent("li");i.$path=(o=i,t.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)),t.data("sfOptions",i),u(t,i,!0),f(r,!0),c(t),function(s,t){var o="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(m,C,o):s.on("mouseenter.superfish",o,m).on("mouseleave.superfish",o,C);var n="MSPointerDown.superfish";p&&(n="pointerdown.superfish"),h||(n+=" touchend.superfish"),l&&(n+=" mousedown.superfish"),s.on("focusin.superfish","li",m).on("focusout.superfish","li",C).on(n,"a",t,w)}(t,i),r.not("."+n).superfish("hide",!0),i.onInit.call(this)})}});e.fn.superfish=function(s,t){return g[s]?g[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):g.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window);
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */
!function(t){"use strict";var e=function(n,s){this.$element=t(n),this.options=t.extend({},e.defaults,s)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,s=n.parent(),a=this.$back_text,i=this.$front_text,r=this.options,o=parseInt(n.attr("data-transitiongoal")),h=parseInt(n.attr("aria-valuemin"))||0,d=parseInt(n.attr("aria-valuemax"))||100,f=s.hasClass("vertical"),p=r.update&&"function"==typeof r.update?r.update:e.defaults.update,c=r.done&&"function"==typeof r.done?r.done:e.defaults.done,u=r.fail&&"function"==typeof r.fail?r.fail:e.defaults.fail;if(isNaN(o))u("data-transitiongoal not set");else{var l,g=Math.round(100*(o-h)/(d-h));if("center"===r.display_text&&!a&&!i)this.$back_text=a=t("<span>").addClass("progressbar-back-text").prependTo(s),this.$front_text=i=t("<span>").addClass("progressbar-front-text").prependTo(n),f?(l=s.css("height"),a.css({height:l,"line-height":l}),i.css({height:l,"line-height":l}),t(window).resize(function(){l=s.css("height"),a.css({height:l,"line-height":l}),i.css({height:l,"line-height":l})})):(l=s.css("width"),i.css({width:l}),t(window).resize(function(){l=s.css("width"),i.css({width:l})}));setTimeout(function(){var t,e,u,l,_;f?n.css("height",g+"%"):n.css("width",g+"%");var x=setInterval(function(){f?(u=n.height(),l=s.height()):(u=n.width(),l=s.width()),t=Math.round(100*u/l),e=Math.round(h+u/l*(d-h)),t>=g&&(t=g,e=o,c(n),clearInterval(x)),"none"!==r.display_text&&(_=r.use_percentage?r.percent_format(t):r.amount_format(e,d,h),"fill"===r.display_text?n.text(_):"center"===r.display_text&&(a.text(_),i.text(_))),n.attr("aria-valuenow",e),p(t,n)},r.refresh_speed)},r.transition_delay)}};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var s=t(this),a=s.data("bs.progressbar"),i="object"==typeof n&&n;a&&i&&t.extend(a.options,i),a||s.data("bs.progressbar",a=new e(this,i)),a.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!function(){"use strict";var e=!1;window.JQClass=function(){},JQClass.classes={},JQClass.extend=function t(i){function s(){!e&&this._init&&this._init.apply(this,arguments)}var n=this.prototype;e=!0;var o=new this;for(var a in e=!1,i)if("function"==typeof i[a]&&"function"==typeof n[a])o[a]=function(e,t){return function(){var i=this._super;this._super=function(t){return n[e].apply(this,t||[])};var s=t.apply(this,arguments);return this._super=i,s}}(a,i[a]);else if("object"==typeof i[a]&&"object"==typeof n[a]&&"defaultOptions"===a){var r,l=n[a],_=i[a],p={};for(r in l)p[r]=l[r];for(r in _)p[r]=_[r];o[a]=p}else o[a]=i[a];return s.prototype=o,s.prototype.constructor=s,s.extend=t,s}}(),
/*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
function($){"use strict";function camelCase(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}JQClass.classes.JQPlugin=JQClass.extend({name:"plugin",defaultOptions:{},regionalOptions:{},deepMerge:!0,_getMarker:function(){return"is-"+this.name},_init:function(){$.extend(this.defaultOptions,this.regionalOptions&&this.regionalOptions[""]||{});var e=camelCase(this.name);$[e]=this,$.fn[e]=function(t){var i=Array.prototype.slice.call(arguments,1),s=this,n=this;return this.each(function(){if("string"==typeof t){if("_"===t[0]||!$[e][t])throw"Unknown method: "+t;var o=$[e][t].apply($[e],[this].concat(i));if(o!==s&&void 0!==o)return n=o,!1}else $[e]._attach(this,t)}),n}},setDefaults:function(e){$.extend(this.defaultOptions,e||{})},_attach:function(e,t){if(!(e=$(e)).hasClass(this._getMarker())){e.addClass(this._getMarker()),t=$.extend(this.deepMerge,{},this.defaultOptions,this._getMetadata(e),t||{});var i=$.extend({name:this.name,elem:e,options:t},this._instSettings(e,t));e.data(this.name,i),this._postAttach(e,i),this.option(e,t)}},_instSettings:function(e,t){return{}},_postAttach:function(e,t){},_getMetadata:function(elem){try{var data=elem.data(this.name.toLowerCase())||"";for(var key in data=data.replace(/(\\?)'/g,function(e,t){return t?"'":'"'}).replace(/([a-zA-Z0-9]+):/g,function(e,t,i){var s=data.substring(0,i).match(/"/g);return s&&s.length%2!=0?t+":":'"'+t+'":'}).replace(/\\:/g,":"),data=$.parseJSON("{"+data+"}"),data)if(data.hasOwnProperty(key)){var value=data[key];"string"==typeof value&&value.match(/^new Date\(([-0-9,\s]*)\)$/)&&(data[key]=eval(value))}return data}catch(e){return{}}},_getInst:function(e){return $(e).data(this.name)||{}},option:function(e,t,i){var s=(e=$(e)).data(this.name),n=t||{};return!t||"string"==typeof t&&void 0===i?(n=(s||{}).options)&&t?n[t]:n:void(e.hasClass(this._getMarker())&&("string"==typeof t&&(n={},n[t]=i),this._optionsChanged(e,s,n),$.extend(s.options,n)))},_optionsChanged:function(e,t,i){},destroy:function(e){(e=$(e)).hasClass(this._getMarker())&&(this._preDestroy(e,this._getInst(e)),e.removeData(this.name).removeClass(this._getMarker()))},_preDestroy:function(e,t){}}),$.JQPlugin={createPlugin:function(e,t){"object"==typeof e&&(t=e,e="JQPlugin"),e=camelCase(e);var i=camelCase(t.name);JQClass.classes[i]=JQClass.classes[e].extend(t),new JQClass.classes[i]}}}(jQuery),function(e){"use strict";var t="countdown";e.JQPlugin.createPlugin({name:t,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:t+"-rtl",_sectionClass:t+"-section",_amountClass:t+"-amount",_periodClass:t+"-period",_rowClass:t+"-row",_holdingClass:t+"-holding",_showClass:t+"-show",_descrClass:t+"-descr",_timerElems:[],_init:function(){var t=this;this._super(),this._serverSyncs=[];var i="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},s=window.performance&&"function"==typeof window.performance.now,n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,o=0;!n||e.noRequestAnimationFrame?(e.noRequestAnimationFrame=null,e.countdown._timer=setInterval(function(){t._updateElems()},1e3)):(o=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||i(),n(function e(a){var r=a<1e12?s?window.performance.now()+window.performance.timing.navigationStart:i():a||i();r-o>=1e3&&(t._updateElems(),o=r),n(e)}))},UTCDate:function(e,t,i,s,n,o,a,r){"object"==typeof t&&t instanceof Date&&(r=t.getMilliseconds(),a=t.getSeconds(),o=t.getMinutes(),n=t.getHours(),s=t.getDate(),i=t.getMonth(),t=t.getFullYear());var l=new Date;return l.setUTCFullYear(t),l.setUTCDate(1),l.setUTCMonth(i||0),l.setUTCDate(s||1),l.setUTCHours(n||0),l.setUTCMinutes((o||0)-(Math.abs(e)<30?60*e:e)),l.setUTCSeconds(a||0),l.setUTCMilliseconds(r||0),l},periodsToSeconds:function(e){return 31557600*e[0]+2629800*e[1]+604800*e[2]+86400*e[3]+3600*e[4]+60*e[5]+e[6]},resync:function(){var t=this;e("."+this._getMarker()).each(function(){var i=e.data(this,t.name);if(i.options.serverSync){for(var s=null,n=0;n<t._serverSyncs.length;n++)if(t._serverSyncs[n][0]===i.options.serverSync){s=t._serverSyncs[n];break}if(t._eqNull(s[2])){var o=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(this,[]):null;s[2]=(o?(new Date).getTime()-o.getTime():0)-s[1]}i._since&&i._since.setMilliseconds(i._since.getMilliseconds()+s[2]),i._until.setMilliseconds(i._until.getMilliseconds()+s[2])}});for(var i=0;i<t._serverSyncs.length;i++)t._eqNull(t._serverSyncs[i][2])||(t._serverSyncs[i][1]+=t._serverSyncs[i][2],delete t._serverSyncs[i][2])},_instSettings:function(e,t){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(e){this._hasElem(e)||this._timerElems.push(e)},_hasElem:function(t){return e.inArray(t,this._timerElems)>-1},_removeElem:function(t){this._timerElems=e.map(this._timerElems,function(e){return e===t?null:e})},_updateElems:function(){for(var e=this._timerElems.length-1;e>=0;e--)this._updateCountdown(this._timerElems[e])},_optionsChanged:function(t,i,s){s.layout&&(s.layout=s.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(i.options,s);var n=i.options.timezone!==s.timezone;e.extend(i.options,s),this._adjustSettings(t,i,!this._eqNull(s.until)||!this._eqNull(s.since)||n);var o=new Date;(i._since&&i._since<o||i._until&&i._until>o)&&this._addElem(t[0]),this._updateCountdown(t,i)},_updateCountdown:function(t,i){if(t=t.jquery?t:e(t),i=i||this._getInst(t)){if(t.html(this._generateHTML(i)).toggleClass(this._rtlClass,i.options.isRTL),"pause"!==i._hold&&e.isFunction(i.options.onTick)){var s="lap"!==i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);1!==i.options.tickInterval&&this.periodsToSeconds(s)%i.options.tickInterval!=0||i.options.onTick.apply(t[0],[s])}if("pause"!==i._hold&&(i._since?i._now.getTime()<i._since.getTime():i._now.getTime()>=i._until.getTime())&&!i._expiring){if(i._expiring=!0,this._hasElem(t[0])||i.options.alwaysExpire){if(this._removeElem(t[0]),e.isFunction(i.options.onExpiry)&&i.options.onExpiry.apply(t[0],[]),i.options.expiryText){var n=i.options.layout;i.options.layout=i.options.expiryText,this._updateCountdown(t[0],i),i.options.layout=n}i.options.expiryUrl&&(window.location=i.options.expiryUrl)}i._expiring=!1}else"pause"===i._hold&&this._removeElem(t[0])}},_resetExtraLabels:function(e,t){var i=null;for(i in t)i.match(/[Ll]abels[02-9]|compactLabels1/)&&(e[i]=t[i]);for(i in e)i.match(/[Ll]abels[02-9]|compactLabels1/)&&void 0===t[i]&&(e[i]=null)},_eqNull:function(e){return null==e},_adjustSettings:function(t,i,s){for(var n=null,o=0;o<this._serverSyncs.length;o++)if(this._serverSyncs[o][0]===i.options.serverSync){n=this._serverSyncs[o][1];break}var a=null,r=null;if(this._eqNull(n)){var l=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(t[0],[]):null;a=new Date,r=l?a.getTime()-l.getTime():0,this._serverSyncs.push([i.options.serverSync,r])}else a=new Date,r=i.options.serverSync?n:0;var _=i.options.timezone;_=this._eqNull(_)?-a.getTimezoneOffset():_,(s||!s&&this._eqNull(i._until)&&this._eqNull(i._since))&&(i._since=i.options.since,this._eqNull(i._since)||(i._since=this.UTCDate(_,this._determineTime(i._since,null)),i._since&&r&&i._since.setMilliseconds(i._since.getMilliseconds()+r)),i._until=this.UTCDate(_,this._determineTime(i.options.until,a)),r&&i._until.setMilliseconds(i._until.getMilliseconds()+r)),i._show=this._determineShow(i)},_preDestroy:function(e,t){this._removeElem(e[0]),e.empty()},pause:function(e){this._hold(e,"pause")},lap:function(e){this._hold(e,"lap")},resume:function(e){this._hold(e,null)},toggle:function(t){this[(e.data(t,this.name)||{})._hold?"resume":"pause"](t)},toggleLap:function(t){this[(e.data(t,this.name)||{})._hold?"resume":"lap"](t)},_hold:function(t,i){var s=e.data(t,this.name);if(s){if("pause"===s._hold&&!i){s._periods=s._savePeriods;var n=s._since?"-":"+";s[s._since?"_since":"_until"]=this._determineTime(n+s._periods[0]+"y"+n+s._periods[1]+"o"+n+s._periods[2]+"w"+n+s._periods[3]+"d"+n+s._periods[4]+"h"+n+s._periods[5]+"m"+n+s._periods[6]+"s"),this._addElem(t)}s._hold=i,s._savePeriods="pause"===i?s._periods:null,e.data(t,this.name,s),this._updateCountdown(t,s)}},getTimes:function(t){var i=e.data(t,this.name);return i?"pause"===i._hold?i._savePeriods:i._hold?this._calculatePeriods(i,i._show,i.options.significant,new Date):i._periods:null},_determineTime:function(e,t){var i,s,n=this,o=this._eqNull(e)?t:"string"==typeof e?function(e){e=e.toLowerCase();for(var t=new Date,i=t.getFullYear(),s=t.getMonth(),o=t.getDate(),a=t.getHours(),r=t.getMinutes(),l=t.getSeconds(),_=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,p=_.exec(e);p;){switch(p[2]||"s"){case"s":l+=parseInt(p[1],10);break;case"m":r+=parseInt(p[1],10);break;case"h":a+=parseInt(p[1],10);break;case"d":o+=parseInt(p[1],10);break;case"w":o+=7*parseInt(p[1],10);break;case"o":s+=parseInt(p[1],10),o=Math.min(o,n._getDaysInMonth(i,s));break;case"y":i+=parseInt(p[1],10),o=Math.min(o,n._getDaysInMonth(i,s))}p=_.exec(e)}return new Date(i,s,o,a,r,l,0)}(e):"number"==typeof e?(i=e,(s=new Date).setTime(s.getTime()+1e3*i),s):e;return o&&o.setMilliseconds(0),o},_getDaysInMonth:function(e,t){return 32-new Date(e,t,32).getDate()},_normalLabels:function(e){return e},_generateHTML:function(t){var i=this;t._periods=t._hold?t._periods:this._calculatePeriods(t,t._show,t.options.significant,new Date);var s=!1,n=0,o=t.options.significant,a=e.extend({},t._show),r=null;for(r=0;r<=6;r++)s=s||"?"===t._show[r]&&t._periods[r]>0,a[r]="?"!==t._show[r]||s?t._show[r]:null,n+=a[r]?1:0,o-=t._periods[r]>0?1:0;var l=[!1,!1,!1,!1,!1,!1,!1];for(r=6;r>=0;r--)t._show[r]&&(t._periods[r]?l[r]=!0:(l[r]=o>0,o--));var _=t.options.compact?t.options.compactLabels:t.options.labels,p=t.options.whichLabels||this._normalLabels,c=function(e){var s=t.options["compactLabels"+p(t._periods[e])];return a[e]?i._translateDigits(t,t._periods[e])+(s?s[e]:_[e])+" ":""},u=t.options.padZeroes?2:1,h=function(e){var s=t.options["labels"+p(t._periods[e])];return!t.options.significant&&a[e]||t.options.significant&&l[e]?'<span class="'+i._sectionClass+'"><span class="'+i._amountClass+'">'+i._minDigits(t,t._periods[e],u)+'</span><span class="'+i._periodClass+'">'+(s?s[e]:_[e])+"</span></span>":""};return t.options.layout?this._buildLayout(t,a,t.options.layout,t.options.compact,t.options.significant,l):(t.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(t._hold?" "+this._holdingClass:"")+'">'+c(0)+c(1)+c(2)+c(3)+(a[4]?this._minDigits(t,t._periods[4],2):"")+(a[5]?(a[4]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[5],2):"")+(a[6]?(a[4]||a[5]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[6],2):""):'<span class="'+this._rowClass+" "+this._showClass+(t.options.significant||n)+(t._hold?" "+this._holdingClass:"")+'">'+h(0)+h(1)+h(2)+h(3)+h(4)+h(5)+h(6))+"</span>"+(t.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+t.options.description+"</span>":"")},_buildLayout:function(t,i,s,n,o,a){for(var r=t.options[n?"compactLabels":"labels"],l=t.options.whichLabels||this._normalLabels,_=function(e){return(t.options[(n?"compactLabels":"labels")+l(t._periods[e])]||r)[e]},p=function(e,i){return t.options.digits[Math.floor(e/i)%10]},c={desc:t.options.description,sep:t.options.timeSeparator,yl:_(0),yn:this._minDigits(t,t._periods[0],1),ynn:this._minDigits(t,t._periods[0],2),ynnn:this._minDigits(t,t._periods[0],3),y1:p(t._periods[0],1),y10:p(t._periods[0],10),y100:p(t._periods[0],100),y1000:p(t._periods[0],1e3),ol:_(1),on:this._minDigits(t,t._periods[1],1),onn:this._minDigits(t,t._periods[1],2),onnn:this._minDigits(t,t._periods[1],3),o1:p(t._periods[1],1),o10:p(t._periods[1],10),o100:p(t._periods[1],100),o1000:p(t._periods[1],1e3),wl:_(2),wn:this._minDigits(t,t._periods[2],1),wnn:this._minDigits(t,t._periods[2],2),wnnn:this._minDigits(t,t._periods[2],3),w1:p(t._periods[2],1),w10:p(t._periods[2],10),w100:p(t._periods[2],100),w1000:p(t._periods[2],1e3),dl:_(3),dn:this._minDigits(t,t._periods[3],1),dnn:this._minDigits(t,t._periods[3],2),dnnn:this._minDigits(t,t._periods[3],3),d1:p(t._periods[3],1),d10:p(t._periods[3],10),d100:p(t._periods[3],100),d1000:p(t._periods[3],1e3),hl:_(4),hn:this._minDigits(t,t._periods[4],1),hnn:this._minDigits(t,t._periods[4],2),hnnn:this._minDigits(t,t._periods[4],3),h1:p(t._periods[4],1),h10:p(t._periods[4],10),h100:p(t._periods[4],100),h1000:p(t._periods[4],1e3),ml:_(5),mn:this._minDigits(t,t._periods[5],1),mnn:this._minDigits(t,t._periods[5],2),mnnn:this._minDigits(t,t._periods[5],3),m1:p(t._periods[5],1),m10:p(t._periods[5],10),m100:p(t._periods[5],100),m1000:p(t._periods[5],1e3),sl:_(6),sn:this._minDigits(t,t._periods[6],1),snn:this._minDigits(t,t._periods[6],2),snnn:this._minDigits(t,t._periods[6],3),s1:p(t._periods[6],1),s10:p(t._periods[6],10),s100:p(t._periods[6],100),s1000:p(t._periods[6],1e3)},u=s,h=0;h<=6;h++){var d="yowdhms".charAt(h),m=new RegExp("\\{"+d+"<\\}([\\s\\S]*)\\{"+d+">\\}","g");u=u.replace(m,!o&&i[h]||o&&a[h]?"$1":"")}return e.each(c,function(e,t){var i=new RegExp("\\{"+e+"\\}","g");u=u.replace(i,t)}),u},_minDigits:function(e,t,i){return(t=""+t).length>=i?this._translateDigits(e,t):(t="0000000000"+t,this._translateDigits(e,t.substr(t.length-i)))},_translateDigits:function(e,t){return(""+t).replace(/[0-9]/g,function(t){return e.options.digits[t]})},_determineShow:function(e){var t=e.options.format,i=[];return i[0]=t.match("y")?"?":t.match("Y")?"!":null,i[1]=t.match("o")?"?":t.match("O")?"!":null,i[2]=t.match("w")?"?":t.match("W")?"!":null,i[3]=t.match("d")?"?":t.match("D")?"!":null,i[4]=t.match("h")?"?":t.match("H")?"!":null,i[5]=t.match("m")?"?":t.match("M")?"!":null,i[6]=t.match("s")?"?":t.match("S")?"!":null,i},_calculatePeriods:function(e,t,i,s){e._now=s,e._now.setMilliseconds(0);var n=new Date(e._now.getTime());e._since?s.getTime()<e._since.getTime()?e._now=s=n:s=e._since:(n.setTime(e._until.getTime()),s.getTime()>e._until.getTime()&&(e._now=s=n));var o=[0,0,0,0,0,0,0];if(t[0]||t[1]){var a=this._getDaysInMonth(s.getFullYear(),s.getMonth()),r=this._getDaysInMonth(n.getFullYear(),n.getMonth()),l=n.getDate()===s.getDate()||n.getDate()>=Math.min(a,r)&&s.getDate()>=Math.min(a,r),_=function(e){return 60*(60*e.getHours()+e.getMinutes())+e.getSeconds()},p=Math.max(0,12*(n.getFullYear()-s.getFullYear())+n.getMonth()-s.getMonth()+(n.getDate()<s.getDate()&&!l||l&&_(n)<_(s)?-1:0));o[0]=t[0]?Math.floor(p/12):0,o[1]=t[1]?p-12*o[0]:0;var c=(s=new Date(s.getTime())).getDate()===a,u=this._getDaysInMonth(s.getFullYear()+o[0],s.getMonth()+o[1]);s.getDate()>u&&s.setDate(u),s.setFullYear(s.getFullYear()+o[0]),s.setMonth(s.getMonth()+o[1]),c&&s.setDate(u)}var h=Math.floor((n.getTime()-s.getTime())/1e3),d=null,m=function(e,i){o[e]=t[e]?Math.floor(h/i):0,h-=o[e]*i};if(m(2,604800),m(3,86400),m(4,3600),m(5,60),m(6,1),h>0&&!e._since){var g=[1,12,4.3482,7,24,60,60],f=6,w=1;for(d=6;d>=0;d--)t[d]&&(o[f]>=w&&(o[f]=0,h=1),h>0&&(o[d]++,h=0,f=d,w=1)),w*=g[d]}if(i)for(d=0;d<=6;d++)i&&o[d]?i--:i||(o[d]=0);return o}})}(jQuery);
!function(t){t.fn.countTo=function(e){return e=e||{},t(this).each(function(){var a=t.extend({},t.fn.countTo.defaults,{from:t(this).data("from"),to:t(this).data("to"),speed:t(this).data("speed"),refreshInterval:t(this).data("refresh-interval"),decimals:t(this).data("decimals")},e),n=Math.ceil(a.speed/a.refreshInterval),o=(a.to-a.from)/n,r=this,l=t(this),f=0,i=a.from,c=l.data("countTo")||{};function s(t){var e=a.formatter.call(r,t,a);l.text(e)}l.data("countTo",c),c.interval&&clearInterval(c.interval),c.interval=setInterval(function(){f++,s(i+=o),"function"==typeof a.onUpdate&&a.onUpdate.call(r,i);f>=n&&(l.removeData("countTo"),clearInterval(c.interval),i=a.to,"function"==typeof a.onComplete&&a.onComplete.call(r,i))},a.refreshInterval),s(i)})},t.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery);
!function(e,t){"object"==typeof exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(e.jQuery)}(this,function(e){var t=function(e,t){var n,a=document.createElement("canvas");e.appendChild(a),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(a);var i=a.getContext("2d");a.width=a.height=t.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,a.style.width=a.style.height=[t.size,"px"].join(""),a.width=a.height=t.size*r,i.scale(r,r)),i.translate(t.size/2,t.size/2),i.rotate((t.rotate/180-.5)*Math.PI);var o=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(o-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(e,t,n){var a=0>=(n=Math.min(Math.max(-1,n||0),1));i.beginPath(),i.arc(0,0,o,0,2*Math.PI*n,a),i.strokeStyle=e,i.lineWidth=t,i.stroke()},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},h=function(){t.scaleColor&&function(){var e,n;i.lineWidth=1,i.fillStyle=t.scaleColor,i.save();for(var a=24;a>0;--a)a%6==0?(n=t.scaleLength,e=0):(n=.6*t.scaleLength,e=t.scaleLength-n),i.fillRect(-t.size/2+e,0,n,1),i.rotate(Math.PI/12);i.restore()}(),t.trackColor&&s(t.trackColor,t.lineWidth,1)};this.getCanvas=function(){return a},this.getCtx=function(){return i},this.clear=function(){i.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){var a;t.scaleColor||t.trackColor?i.getImageData&&i.putImageData?n?i.putImageData(n,0,0):(h(),n=i.getImageData(0,0,t.size*r,t.size*r)):(this.clear(),h()):this.clear(),i.lineCap=t.lineCap,a="function"==typeof t.barColor?t.barColor(e):t.barColor,s(a,t.lineWidth,e/100)}.bind(this),this.animate=function(e,n){var a=Date.now();t.onStart(e,n);var i=function(){var r=Math.min(Date.now()-a,t.animate.duration),o=t.easing(this,r,e,n-e,t.animate.duration);this.draw(o),t.onStep(e,n,o),r>=t.animate.duration?t.onStop(e,n):d(i)}.bind(this);d(i)}.bind(this)};e.fn.easyPieChart=function(n){return this.each(function(){var a;e.data(this,"easyPieChart")||(a=e.extend({},n,e(this).data()),e.data(this,"easyPieChart",new function(e,n){var a={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,n,a,i){return 1>(t/=i/2)?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},onStart:function(){},onStep:function(){},onStop:function(){}};if(void 0!==t)a.renderer=t;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");a.renderer=SVGRenderer}var i={},r=0,o=function(){for(var t in this.el=e,this.options=i,a)a.hasOwnProperty(t)&&(i[t]=n&&void 0!==n[t]?n[t]:a[t],"function"==typeof i[t]&&(i[t]=i[t].bind(this)));i.easing="string"==typeof i.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[i.easing])?jQuery.easing[i.easing]:a.easing,"number"==typeof i.animate&&(i.animate={duration:i.animate,enabled:!0}),"boolean"!=typeof i.animate||i.animate||(i.animate={duration:1e3,enabled:i.animate}),this.renderer=new i.renderer(e,i),this.renderer.draw(r),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),i.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return i.animate.enabled=!1,this},this.enableAnimation=function(){return i.animate.enabled=!0,this},o()}(this,a)))})}});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.11
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof exports?require("jquery"):l.jQuery)}(this,function(l){"use strict";function e(e){if(o.webkit&&!e)return{height:0,width:0};if(!o.data.outer){var s={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};o.data.inner=l("<div>").css(l.extend({},s)),o.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},s)).append(o.data.inner).appendTo("body")}return o.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(o.data.outer.offset().top-o.data.inner.offset().top||0),width:Math.ceil(o.data.outer.offset().left-o.data.inner.offset().left||0)}}function s(l){var e=l.originalEvent;return!(e.axis&&e.axis===e.HORIZONTAL_AXIS||e.wheelDeltaX)}var o={data:{index:0,name:"scrollbar"},firefox:/firefox/i.test(navigator.userAgent),macosx:/mac/i.test(navigator.platform),msedge:/edge\/\d+/i.test(navigator.userAgent),msie:/(msie|trident)/i.test(navigator.userAgent),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};o.scrolls.add=function(l){this.remove(l).push(l)},o.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var r={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,isRtl:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onFallback:null,onInit:null,onScroll:null,onUpdate:null},t=function(s){var t;o.scroll||(o.overlay=!((t=e(!0)).height||t.width),o.scroll=e(),c(),l(window).resize(function(){var l=!1;if(o.scroll&&(o.scroll.height||o.scroll.width)){var s=e();s.height===o.scroll.height&&s.width===o.scroll.width||(o.scroll=s,l=!0)}c(l)})),this.container=s,this.namespace=".scrollbar_"+o.data.index++,this.options=l.extend({},r,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(o.data.name,this),o.scrolls.add(this)};t.prototype={destroy:function(){if(this.wrapper){this.container.removeData(o.data.name),o.scrolls.remove(this);var e=this.container.scrollLeft(),s=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(s),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var r=this,t=this.container,i=this.containerWrapper||t,n=this.namespace,a=l.extend(this.options,e||{}),c={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={},u={scrollLeft:t.scrollLeft(),scrollTop:t.scrollTop()};if(o.mobile&&a.ignoreMobile||o.overlay&&a.ignoreOverlay||o.macosx&&!o.webkit)return l.isFunction(a.onFallback)&&a.onFallback.apply(this,[t]),!1;if(d)(h={height:"auto","margin-bottom":-1*o.scroll.height+"px","max-height":""})[a.isRtl?"margin-left":"margin-right"]=-1*o.scroll.width+"px",i.css(h);else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(t.attr("class")).css("position","absolute"===t.css("position")?"absolute":"relative").insertBefore(t).append(t),a.isRtl&&d.addClass("scroll--rtl"),t.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(t).append(t),d.addClass("scroll-textarea")),(h={height:"auto","margin-bottom":-1*o.scroll.height+"px","max-height":""})[a.isRtl?"margin-left":"margin-right"]=-1*o.scroll.width+"px",i.addClass("scroll-content").css(h),t.on("scroll"+n,function(e){var s=t.scrollLeft(),i=t.scrollTop();if(a.isRtl)switch(!0){case o.firefox:s=Math.abs(s);case o.msedge||o.msie:s=t[0].scrollWidth-t[0].clientWidth-s}l.isFunction(a.onScroll)&&a.onScroll.call(r,{maxScroll:c.y.maxScrollOffset,scroll:i,size:c.y.size,visible:c.y.visible},{maxScroll:c.x.maxScrollOffset,scroll:s,size:c.x.size,visible:c.x.visible}),c.x.isVisible&&c.x.scroll.bar.css("left",s*c.x.kx+"px"),c.y.isVisible&&c.y.scroll.bar.css("top",i*c.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),a.disableBodyScroll){var p=function(l){s(l)?c.y.isVisible&&c.y.mousewheel(l):c.x.isVisible&&c.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),o.mobile&&d.on("touchstart"+n,function(e){var s=e.originalEvent.touches&&e.originalEvent.touches[0]||e,o=s.pageX,r=s.pageY,i=t.scrollLeft(),a=t.scrollTop();l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;t.scrollLeft(i+o-e.pageX),t.scrollTop(a+r-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(a.onInit)&&a.onInit.apply(this,[t])}l.each(c,function(e,i){var d=null,h=1,u="x"===e?"scrollLeft":"scrollTop",p=a.scrollStep,f=function(){var l=t[u]();t[u](l+p),1==h&&l+p>=v&&(l=t[u]()),-1==h&&l+p<=v&&(l=t[u]()),t[u]()==l&&d&&d()},v=0;i.scroll||(i.scroll=r._getScroll(a["scroll"+e]).addClass("scroll-"+e),a.showArrows&&i.scroll.addClass("scroll-element_arrows_visible"),i.mousewheel=function(l){if(!i.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return c.x.mousewheel(l),!0;var o=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=i.size-i.visible-i.offset;return o||("x"===e&&l.originalEvent.deltaX?o=40*l.originalEvent.deltaX:"y"===e&&l.originalEvent.deltaY&&(o=40*l.originalEvent.deltaY)),(o>0&&v<n||o<0&&v>0)&&((v+=o)<0&&(v=0),v>n&&(v=n),r.scrollTo=r.scrollTo||{},r.scrollTo[u]=v,setTimeout(function(){r.scrollTo&&(t.stop().animate(r.scrollTo,240,"linear",function(){v=t[u]()}),r.scrollTo=null)},1)),l.preventDefault(),!1},i.scroll.on("MozMousePixelScroll"+n,i.mousewheel).on("mousewheel"+n,i.mousewheel).on("mouseenter"+n,function(){v=t[u]()}),i.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;h=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:i.size-i.visible-i.offset,scrollbarOffset:i.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:i.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},c=0,m=0;if(l(this).hasClass("scroll-arrow")){if(h=l(this).hasClass("scroll-arrow_more")?1:-1,p=a.scrollStep*h,v=h>0?n.maxScrollValue:0,a.isRtl)switch(!0){case o.firefox:v=h>0?0:-1*n.maxScrollValue;break;case o.msie||o.msedge:}}else h=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,"x"===e&&a.isRtl&&(o.msie||o.msedge)&&(h*=-1),p=Math.round(.75*i.visible)*h,v=n.eventOffset-n.scrollbarOffset-(a.stepScrolling?1==h?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),v=t[u]()+v/i.kx;return r.scrollTo=r.scrollTo||{},r.scrollTo[u]=a.stepScrolling?t[u]()+p:v,a.stepScrolling&&(d=function(){v=t[u](),clearInterval(m),clearTimeout(c),c=0,m=0},c=setTimeout(function(){m=setInterval(f,40)},a.duration+100)),setTimeout(function(){r.scrollTo&&(t.animate(r.scrollTo,a.duration),r.scrollTo=null)},1),r._handleMouseDown(d,s)}),i.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var c=s["x"===e?"pageX":"pageY"],d=t[u]();return i.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var s=parseInt((l["x"===e?"pageX":"pageY"]-c)/i.kx,10);"x"===e&&a.isRtl&&(o.msie||o.msedge)&&(s*=-1),t[u](d+s)}),r._handleMouseDown(function(){i.scroll.removeClass("scroll-draggable"),v=t[u]()},s)}))}),l.each(c,function(l,e){var s="scroll-scroll"+l+"_visible",o="x"==l?c.y:c.x;e.scroll.removeClass(s),o.scroll.removeClass(s),i.removeClass(s)}),l.each(c,function(e,s){l.extend(s,"x"==e?{offset:parseInt(t.css("left"),10)||0,size:t.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(t.css("top"),10)||0,size:t.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(a.onUpdate)&&a.onUpdate.apply(this,[t]),l.each(c,function(l,e){var s="x"===l?"left":"top",o="x"===l?"outerWidth":"outerHeight",r="x"===l?"width":"height",i=parseInt(t.css(s),10)||0,n=e.size,c=e.visible+i,d=e.scroll.size[o]()+(parseInt(e.scroll.size.css(s),10)||0);a.autoScrollSize&&(e.scrollbarSize=parseInt(d*c/n,10),e.scroll.bar.css(r,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[o](),e.kx=(d-e.scrollbarSize)/(n-c)||1,e.maxScrollOffset=n-c}),t.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")},_getScroll:function(e){var s={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return s[e]&&(e=s[e]),e||(e=s.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,s){var o=this.namespace;return l(document).on("blur"+o,function(){l(document).add("body").off(o),e&&e()}),l(document).on("dragstart"+o,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+o,function(){l(document).add("body").off(o),e&&e()}),l("body").on("selectstart"+o,function(l){return l.preventDefault(),!1}),s&&s.preventDefault(),!1},_updateScroll:function(e,s){var r=this.container,t=this.containerWrapper||r,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,a=parseInt(this.container.css("x"===e?"left":"top"),10)||0,c=this.wrapper,d=s.size,h=s.visible+a;s.isVisible=d-h>1,s.isVisible?(s.scroll.addClass(i),n.scroll.addClass(i),t.addClass(i)):(s.scroll.removeClass(i),n.scroll.removeClass(i),t.removeClass(i)),"y"===e&&(r.is("textarea")||d<h?t.css({height:h+o.scroll.height+"px","max-height":"none"}):t.css({"max-height":h+o.scroll.height+"px"})),s.size==r.prop("scrollWidth")&&n.size==r.prop("scrollHeight")&&s.visible==c.width()&&n.visible==c.height()&&s.offset==(parseInt(r.css("left"),10)||0)&&n.offset==(parseInt(r.css("top"),10)||0)||(l.extend(this.scrollx,{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:c.width()}),l.extend(this.scrolly,{offset:parseInt(r.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:c.height()}),this._updateScroll("x"===e?"y":"x",n))}};var i=t;l.fn.scrollbar=function(e,s){return"string"!=typeof e&&(s=e,e="init"),void 0===s&&(s=[]),l.isArray(s)||(s=[s]),this.not("body, .scroll-wrapper").each(function(){var r=l(this),t=r.data(o.data.name);(t||"init"===e)&&(t||(t=new i(r)),t[e]&&t[e].apply(t,s))}),this},l.fn.scrollbar.options=r;var n,a,c=(n=0,function(l){var e,s,r,t,i,a,d;for(e=0;e<o.scrolls.length;e++)s=(t=o.scrolls[e]).container,r=t.options,i=t.wrapper,a=t.scrollx,d=t.scrolly,(l||r.autoUpdate&&i&&i.is(":visible")&&(s.prop("scrollWidth")!=a.size||s.prop("scrollHeight")!=d.size||i.width()!=a.visible||i.height()!=d.visible))&&(t.init(),r.debug&&window.console&&console.log({scrollHeight:s.prop("scrollHeight")+":"+t.scrolly.size,scrollWidth:s.prop("scrollWidth")+":"+t.scrollx.size,visibleHeight:i.height()+":"+t.scrolly.visible,visibleWidth:i.width()+":"+t.scrollx.visible},!0));clearTimeout(n),n=setTimeout(c,300)});window.angular&&(a=window.angular).module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var l=r;return{setOptions:function(e){a.extend(l,e)},$get:function(){return{options:a.copy(l)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(s,o,r){var t=e(r.jqueryScrollbar)(s);o.scrollbar(t||l.options).on("$destroy",function(){o.scrollbar("destroy")})}}}])});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,o,n){var i=o.hash.slice(1),a=document.getElementById(i)||document.getElementsByName(i)[0];if(a){t&&t.preventDefault();var l=e(n.target);if(!(n.lock&&l.is(":animated")||n.onBefore&&!1===n.onBefore(t,a,l))){if(n.stop&&l.stop(!0),n.hash){var r=a.id===i?"id":"name",s=e("<a> </a>").attr(r,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});a[r]="",e("body").prepend(s),location.hash=o.hash,s.remove(),a[r]=i}l.scrollTo(a,n).trigger("notify.serialScroll",[a])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};return n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,autoscroll:!0},e.fn.localScroll=function(i){function a(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===o&&(!i.filter||e(this).is(i.filter))}return(i=e.extend({},n.defaults,i)).autoscroll&&i.hash&&location.hash&&(i.target&&window.scrollTo(0,0),t(0,location,i)),i.lazy?this.on(i.event,"a,area",function(e){a.call(this)&&t(e,this,i)}):this.find("a,area").filter(a).bind(i.event,function(e){t(e,this,i)}).end().end()},n.hash=function(){},n});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},n.defaults,s),i=i||s.duration;var a=s.queue&&1<s.axis.length;return a&&(i/=2),s.offset=o(s.offset),s.over=o(s.over),this.each(function(){function u(t){var o=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(l,m,s)}});d.animate(p,o)}if(null!==r){var f,c=t(this),l=c?this.contentWindow||window:this,d=e(l),m=r,p={};switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=o(m);break}m=c?e(m):e(m,l);case"object":if(0===m.length)return;(m.is||m.style)&&(f=(m=e(m)).offset())}var h=e.isFunction(s.offset)&&s.offset(l,m)||s.offset;e.each(s.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",r=o.toLowerCase(),i="scroll"+o,x=d[i](),v=n.max(l,t);f?(p[i]=f[r]+(c?0:x-d.offset()[r]),s.margin&&(p[i]-=parseInt(m.css("margin"+o),10)||0,p[i]-=parseInt(m.css("border"+o+"Width"),10)||0),p[i]+=h[r]||0,s.over[r]&&(p[i]+=m["x"===t?"width":"height"]()*s.over[r])):(o=m[r],p[i]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*v:o),s.limit&&/^\d+$/.test(p[i])&&(p[i]=0>=p[i]?0:Math.min(p[i],v)),!e&&1<s.axis.length&&(x===p[i]?p={}:a&&(u(s.onAfterFirst),p={}))}),u(s.onAfter)}})},n.max=function(o,n){var r="scroll"+(i="x"===n?"Width":"Height");if(!t(o))return o[r]-e(o)[i.toLowerCase()]();var i="client"+i,s=(a=o.ownerDocument||o.document).documentElement,a=a.body;return Math.max(s[r],a[r])-Math.min(s[i],a[i])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n});
!function(o){o.fn.UItoTop=function(n){var e=o.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},n),t="#"+e.containerID,i="#"+e.containerHoverID;o("body").append('<a href="#" id="'+e.containerID+'">'+e.text+"</a>"),o(t).hide().on("click.UItoTop",function(){return o("html, body").animate({scrollTop:0},e.scrollSpeed,e.easingType),o("#"+e.containerHoverID,this).stop().animate({opacity:0},e.inDelay,e.easingType),!1}).prepend('<span id="'+e.containerHoverID+'"></span>').hover(function(){o(i,this).stop().animate({opacity:1},600,"linear")},function(){o(i,this).stop().animate({opacity:0},700,"linear")}),o(window).scroll(function(){var n=o(window).scrollTop();void 0===document.body.style.maxHeight&&o(t).css({position:"absolute",top:n+o(window).height()-50}),n>e.min?o(t).fadeIn(e.inDelay):o(t).fadeOut(e.Outdelay)})}}(jQuery);
!function(n){var t=n(window),o=t.height();t.resize(function(){o=t.height()}),n.fn.parallax=function(i,e,r){var u,h,l=n(this);function c(){var r=t.scrollTop();l.each(function(){var t=n(this),c=t.offset().top;c+u(t)<r||c>r+o||l.css("backgroundPosition",i+" "+Math.round((h-r)*e)+"px")})}l.each(function(){h=l.offset().top}),u=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",c).resize(c),c()}}(jQuery);
/*!
 * Isotope PACKAGED v3.0.3
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){(a=a||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return h=e,l="$()."+i+'("'+(u=t)+'")',(o=this).each(function(t,e){var o=a.data(e,i);if(o){var n=o[u];if(n&&"_"!=u.charAt(0)){var s=n.apply(o,h);d=void 0===d?s:d}else r(l+" is not a valid method")}else r(i+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==d?d:o}var o,u,h,d,l,f;return f=t,this.each(function(t,e){var o=a.data(e,i);o?(o.option(f),o._init()):(o=new s(e,f),a.data(e,i,o))}),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r=void 0===s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=0,n=i[o];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];n;){var r=s&&s[n];r&&(this.off(t,n),delete s[n]),n.apply(this,e),n=i[o+=r?0:1]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(t){var e=getComputedStyle(t);return e||n("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function i(n){if(function(){if(!a){a=!0;var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style.boxSizing="border-box";var s=document.body||document.documentElement;s.appendChild(n);var r=e(n);i.isBoxSizeOuter=o=200==t(r.width),s.removeChild(n)}}(),"string"==typeof n&&(n=document.querySelector(n)),n&&"object"==typeof n&&n.nodeType){var u=e(n);if("none"==u.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<r;e++)t[s[e]]=0;return t}();var h={};h.width=n.offsetWidth,h.height=n.offsetHeight;for(var d=h.isBorderBox="border-box"==u.boxSizing,l=0;l<r;l++){var f=s[l],m=u[f],c=parseFloat(m);h[f]=isNaN(c)?0:c}var p=h.paddingLeft+h.paddingRight,y=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,v=h.marginTop+h.marginBottom,_=h.borderLeftWidth+h.borderRightWidth,I=h.borderTopWidth+h.borderBottomWidth,z=d&&o,S=t(u.width);!1!==S&&(h.width=S+(z?0:p+_));var x=t(u.height);return!1!==x&&(h.height=x+(z?0:y+I)),h.innerWidth=h.width-(p+_),h.innerHeight=h.height-(y+I),h.outerWidth=h.width+g,h.outerHeight=h.height+v,h}}var o,n="undefined"==typeof console?function(){}:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],r=s.length,a=!1;return i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i]+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e},makeArray:function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},removeFrom:function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},getParent:function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},getQueryElement:function(t){return"string"==typeof t?document.querySelector(t):t},handleEvent:function(t){var e="on"+t.type;this[e]&&this[e](t)},filterFindElements:function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},debounceMethod:function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},docReady:function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},toDashed:function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}},o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(e){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);l&&l.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,n="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],a={transform:s,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"},u=i.prototype=Object.create(t.prototype);u.constructor=i,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=-1!=o.indexOf("%")?parseFloat(o)/100*s.width:parseInt(o,10),a=-1!=n.indexOf("%")?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),!r||this.isTransitioning){var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var h="opacity,"+s.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:h,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var d={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=d[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(l)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(i){this.element=i,u&&(this.$element=u(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++d;this.element.outlayerGUID=n,l[n]=this,this._create(),this._getOption("initLayout")&&this.layout()}else a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t))}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,u=t.jQuery,h=function(){},d=0,l={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=s.prototype;o.extend(f,e.prototype),f.option=function(t){o.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=new i(e[n],this);o.push(s)}return o},f._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];return i.length?(i=parseFloat(i))*(m[o]||1):0}(t),this.stagger)},f._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},f._getContainerSize=h,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){++r==s&&i()}var n=this,s=e.length;if(e&&s){var r=0;e.forEach(function(e){e.once(t,o)})}else i()},f.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),u)if(this.$element=this.$element||u(this.element),e){var n=u.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),o.makeArray(t)},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=h,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t);return{left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom}},f.handleEvent=o.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},s.data=function(t){var e=(t=o.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o;s=Math[r&&r<1?"round":"floor"](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var o=this._getColGroup(i),n=Math.min.apply(Math,o),s=o.indexOf(n),r={x:this.columnWidth*s,y:n},a=n+t.size.outerHeight,u=this.cols+1-o.length,h=0;h<u;h++)this.colYs[s+h]=a;return r},i.prototype._getColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},i.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft")?o.left:o.right,s=n+i.outerWidth,r=Math.floor(n/this.columnWidth);r=Math.max(0,r);var a=Math.floor(s/this.columnWidth);a-=s%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this._getOption("originTop")?o.top:o.bottom)+i.outerHeight,h=r;h<=a;h++)this.colYs[h]=Math.max(u,this.colYs[h])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){var a=t.jQuery,u=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},h=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});h.Item=s,h.LayoutMode=r;var d=h.prototype;d._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},d.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},d._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},d._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},d.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},d._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},d._init=d.arrange,d._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},d._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},d._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},d._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},d._getFilterTest=function(t){return a&&this.options.isJQueryFiltering?function(e){return a(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},d.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var l=function(){return function(t){if("string"!=typeof t)return t;var e,i,o=u(t).split(" "),n=o[0],s=n.match(/^\[(.+)\]$/),r=s&&s[1],a=(i=n,(e=r)?function(t){return t.getAttribute(e)}:function(t){var e=t.querySelector(i);return e&&e.textContent}),d=h.sortDataParsers[o[1]];return d?function(t){return t&&d(a(t))}:function(t){return t&&a(t)}}}();h.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=(i=this.sortHistory,o=this.options.sortAscending,function(t,e){for(var n=0;n<i.length;n++){var s=i[n],r=t.sortData[s],a=e.sortData[s];if(r>a||r<a)return(r>a?1:-1)*((void 0!==o[s]?o[s]:o)?1:-1)}return 0});this.filteredItems.sort(e)}var i,o},d._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},d._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},d._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},d._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d._manageStamp=function(t){this._mode()._manageStamp(t)},d._getContainerSize=function(){return this._mode()._getContainerSize()},d.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var f=d.remove;return d.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);f.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},d.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},d.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},h});
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function(e){var t=!0;e.flexslider=function(a,n){var i=e(a);i.vars=e.extend({},e.flexslider.defaults,n);var s,r=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click touchend MSPointerUp keyup",d="",u="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,g={};e.data(a,"flexslider",i),g={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return i.pfx=t[a].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),""!==i.vars.customDirectionNav&&(i.customDirectionNav=2===e(i.vars.customDirectionNav).length&&e(i.vars.customDirectionNav)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&g.controlNav.setup(),i.vars.directionNav&&g.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var a=39===t?i.getTarget("next"):37===t&&i.getTarget("prev");i.flexAnimate(a,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t,a,n){e.preventDefault();var s=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(s,i.vars.pauseOnAction)}),i.vars.pausePlay&&g.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&g.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&g.asNav.setup(),l&&i.vars.touch&&g.touch(),(!m||m&&i.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",g.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),o?(a._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),n=a.index();e(i.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(t){t.preventDefault();var a=e(this),n=a.index();0>=a.offset().left-e(i).scrollLeft()&&a.hasClass(r+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||a.hasClass(r+"active-slide")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,a,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",s=1;if(i.controlNavScaffold=e('<ol class="'+r+"control-nav "+r+n+'"></ol>'),i.pagingCount>1)for(var o=0;o<i.pagingCount;o++){void 0===(a=i.slides.eq(o)).attr("data-thumb-alt")&&a.attr("data-thumb-alt","");var l=""!==a.attr("data-thumb-alt")?l=' alt="'+a.attr("data-thumb-alt")+'"':"";if(t="thumbnails"===i.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"'+l+"/>":'<a href="#">'+s+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var u=a.attr("data-thumbcaption");""!==u&&void 0!==u&&(t+='<span class="'+r+'caption">'+u+"</span>")}i.controlNavScaffold.append("<li>"+t+"</li>"),s++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,g.controlNav.active(),i.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+r+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(t,a){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e('<li><a href="#">'+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(a).closest("li").remove(),g.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(a,t):g.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+r+'direction-nav"><li class="'+r+'nav-prev"><a class="'+r+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+r+'nav-next"><a class="'+r+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.customDirectionNav?i.directionNav=i.customDirectionNav:i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+r+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+r+"direction-nav li a",i)),g.directionNav.update(),i.directionNav.bind(c,function(t){var a;t.preventDefault(),""!==d&&d!==t.type||(a=e(this).hasClass(r+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(a,i.vars.pauseOnAction)),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+r+'pauseplay"><a href="#"></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+r+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+r+"pauseplay a",i)),g.pausePlay.update(i.vars.slideshow?r+"pause":r+"play"),i.pausePlay.bind(c,function(t){t.preventDefault(),""!==d&&d!==t.type||(e(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").html(i.vars.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").html(i.vars.pauseText)}},touch:function(){var e,t,n,s,r,l,c,d,f,g=!1,h=0,S=0,y=0;o?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",function(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),a._gesture.addPointer(e.pointerId),y=0,s=u?i.h:i.w,l=Number(new Date),n=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*s:(i.currentSlide+i.cloneOffset)*s)},!1),a._slider=i,a.addEventListener("MSGestureChange",function(e){e.stopPropagation();var t=e.target._slider;if(t){var i=-e.translationX,o=-e.translationY;return r=y+=u?o:i,g=u?Math.abs(y)<Math.abs(-i):Math.abs(y)<Math.abs(-o),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){a._gesture.stop()}):void((!g||Number(new Date)-l>500)&&(e.preventDefault(),!m&&t.transitions&&(t.vars.animationLoop||(r=y/(0===t.currentSlide&&0>y||t.currentSlide===t.last&&y>0?Math.abs(y)/s+2:1)),t.setProps(n+r,"setTouch"))))}},!1),a.addEventListener("MSGestureEnd",function(a){a.stopPropagation();var i=a.target._slider;if(i){if(i.animatingTo===i.currentSlide&&!g&&null!==r){var o=v?-r:r,c=o>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(c)&&(Number(new Date)-l<550&&Math.abs(o)>50||Math.abs(o)>s/2)?i.flexAnimate(c,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}e=null,t=null,r=null,n=null,y=0}},!1)):(c=function(r){i.animating?r.preventDefault():(window.navigator.msPointerEnabled||1===r.touches.length)&&(i.pause(),s=u?i.h:i.w,l=Number(new Date),h=r.touches[0].pageX,S=r.touches[0].pageY,n=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*s:(i.currentSlide+i.cloneOffset)*s,e=u?S:h,t=u?h:S,a.addEventListener("touchmove",d,!1),a.addEventListener("touchend",f,!1))},d=function(a){h=a.touches[0].pageX,S=a.touches[0].pageY,r=u?e-S:e-h;(!(g=u?Math.abs(r)<Math.abs(h-t):Math.abs(r)<Math.abs(S-t))||Number(new Date)-l>500)&&(a.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(r/=0===i.currentSlide&&0>r||i.currentSlide===i.last&&r>0?Math.abs(r)/s+2:1),i.setProps(n+r,"setTouch")))},f=function(o){if(a.removeEventListener("touchmove",d,!1),i.animatingTo===i.currentSlide&&!g&&null!==r){var c=v?-r:r,u=c>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(u)&&(Number(new Date)-l<550&&Math.abs(c)>50||Math.abs(c)>s/2)?i.flexAnimate(u,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}a.removeEventListener("touchend",f,!1),e=null,t=null,r=null,n=null},a.addEventListener("touchstart",c,!1))},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?g.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&g.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).innerHeight()},e):t.innerHeight(i.slides.eq(i.animatingTo).innerHeight())}},sync:function(t){var a=e(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(t){case"animate":a.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(s),s=setTimeout(function(){d=""},3e3)}},i.flexAnimate=function(t,a,n,s,o){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,o)||n)&&i.is(":visible")){if(f&&s){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,o),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a&&i.pause(),i.vars.before(i),i.syncExists&&!o&&g.sync("animate"),i.vars.controlNav&&g.controlNav.active(),p||i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&g.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var d,h,S,y=u?i.slides.filter(":first").height():i.computedW;p?(d=i.vars.itemMargin,h=(S=(i.itemW+d)*i.move*i.animatingTo)>i.limit&&1!==i.visible?i.limit:S):h=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*y:v?(i.count-1-t+i.cloneOffset)*y:(t+i.cloneOffset)*y,i.setProps(h,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(y)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&g.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&t&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&g.pausePlay.update("play"),i.syncExists&&g.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&g.pausePlay.update("pause"),i.syncExists&&g.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var a=f?i.pagingCount-1:i.last;return!!t||(!(!f||i.currentItem!==i.count-1||0!==e||"prev"!==i.direction)||(!f||0!==i.currentItem||e!==i.pagingCount-1||"next"===i.direction)&&(!(e===i.currentSlide&&!f)&&(!!i.vars.animationLoop||(!i.atEnd||0!==i.currentSlide||e!==a||"next"===i.direction)&&(!i.atEnd||i.currentSlide!==a||0!==e||"next"!==i.direction))))},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,a){var n,s=(n=e||(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,-1*function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}()+"px");i.transitions&&(s=u?"translate3d(0,"+s+",0)":"translate3d("+s+",0,0)",a=void 0!==a?a/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",a),i.container.css("transition-duration",a)),i.args[i.prop]=s,(i.transitions||void 0===a)&&i.container.css(i.args),i.container.css("transform",s)},i.setup=function(t){var a,n;m?(i.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&g.smoothHeight()):("init"===t&&(i.viewport=e('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(n=e.makeArray(i.slides).reverse(),i.slides=e(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(g.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=e(i.vars.selector,i),a=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(a*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(a*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,marginRight:i.computedM,float:"left",display:"block"}),i.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0)));p||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,a=i.vars.minItems,n=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.itemM=t,i.minW=a?a*i.itemT:i.w,i.maxW=n?n*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(a-1))/a:i.maxW<i.w?(i.w-t*(n-1))/n:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.itemM=t,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding,i.computedM=i.itemM},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?g.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),g.controlNav.update("remove",i.last))),i.vars.directionNav&&g.directionNav.update()},i.addSlide=function(t,a){var n=e(t);i.count+=1,i.last=i.count-1,u&&v?void 0!==a?i.slides.eq(i.count-a).after(n):i.container.prepend(n):void 0!==a?i.slides.eq(a).before(n):i.container.append(n),i.update(a,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var a=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&v?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(a,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},g.init()},e(window).blur(function(e){t=!1}).focus(function(e){t=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&!1===t.allowOneSlide||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,n={width:"auto","margin-left":s?e:"","margin-right":s?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,n=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[s]=n?e*i:this._items[s].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,s=this.settings,n=Math.max(2*s.items,4),o=2*Math.ceil(i.length/2),r=s.loop&&i.length?s.rewind?n:Math.max(n,o):0,a="",h="";for(r/=2;r--;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),h=i[e[e.length-1]][0].outerHTML+h;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)s=o[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,o.push(s+n*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;i<s;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],n.prototype.initialize=function(){var e,i,n;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(e=this.$element.find("img"),i=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:s,n=this.$element.children(i).width(),e.length&&n<=0&&this.preloadAutoWidthImages(e));this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,function(t){t<=e&&t>s&&(s=Number(t))}),"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(function(t){return this[t]},this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&this._width!==this.$element.width()&&!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var s=null;3!==e.which&&(t.support.transform?s={x:(s=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===s.length?12:4],y:s[16===s.length?13:5]}:(s=this.$stage.position(),s={x:this.settings.rtl?s.left+this.$stage.width()-this.width()+this.settings.margin:s.left,y:s.top}),this.is("animating")&&(t.support.transform?this.animate(s.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=s,this._drag.stage.current=s,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var s=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(s.x)<Math.abs(s.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},n.prototype.onDragMove=function(t){var e=null,i=null,s=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),s=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+s),i+s)),this._drag.stage.current=o,this.animate(o.x))},n.prototype.onDragEnd=function(e){var s=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,o=s.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==s.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==s.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(s.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var s=-1,n=this.width(),o=this.coordinates();return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){return"left"===i&&e>r-30&&e<r+30?s=t:"right"===i&&e>r-n-30&&e<r-n+30?s=t+1:this.op(e,"<",r)&&this.op(e,">",o[t+1]||r-n)&&(s="left"===i?t+1:t),-1===s},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?s=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(s=e=this.maximum())),s},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(t===s)return this._current;if(0===this._items.length)return s;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==s&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},n.prototype.reset=function(t){(t=this.normalize(t))!==s&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,n=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=s:(t<0||t>=i+n)&&(t=((t-n/2)%i+i)%i+n/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=this.settings,o=this._coordinates.length;if(n.loop)o=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){for(e=this._items.length,i=this._items[--e].width(),s=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>s););o=e+1}else o=n.center?this._items.length-1:this._items.length-n.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return t===s?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return t===s?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,n=i+this._items.length,o=function(t){return t%2==0?n+t/2:i-(t+1)/2};return e===s?t.map(this._clones,function(t,e){return o(e)}):t.map(this._clones,function(t,i){return t===e?o(i):null})},n.prototype.speed=function(t){return t!==s&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,n=1,o=e-1;return e===s?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(n=-1,o=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[o]||0))/2*n):i=this._coordinates[o]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),r=this._items.length,a=this.minimum(),h=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>r/2&&(n+=-1*o*r),(s=(((t=i+n)-a)%r+r)%r+a)!==t&&s-n<=h&&s-n>0&&(i=s-n,t=s,this.reset(i))):this.settings.rewind?t=(t%(h+=1)+h)%h:t=Math.max(a,Math.min(h,t)),this.speed(this.duration(i,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(t!==s&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var s;return this.options.responsiveBaseElement!==e?s=t(this.options.responsiveBaseElement).width():e.innerWidth?s=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?s=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),s},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var n=this.relative(this._current);i=i===s?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[n]&&this.reset(this._items[n].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){(t=this.normalize(t,!0))!==s&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},n.prototype.destroy=function(){for(var s in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:t<i;case">":return s?t<i:t>i;case">=":return s?t<=i:t>=i;case"<=":return s?t>=i:t<=i}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s,o,r){var a={item:{count:this._items.length,index:this.current()}},h=t.camelCase(t.grep(["on",e,s],function(t){return t}).join("-").toLowerCase()),l=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(l)}),this.register({type:n.Type.Event,name:e}),this.$element.trigger(l),this.settings&&"function"==typeof this.settings[h]&&this.settings[h].call(this,l)),l},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]===s&&(this._states.current[e]=0),this._states.current[e]++},this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,s){return t.inArray(i,this._states.tags[e.name])===s},this)))},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.pointer=function(t){var i={x:null,y:null};return(t=(t=t.originalEvent||t||e.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=t(this),o=s.data("owl.carousel");o||(o=new n(this,"object"==typeof e&&e),s.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){o.register({type:n.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},o))})),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;for(t in e.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find(".owl-lazy");!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r):((n=new Image).onload=t.proxy(function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),n.src=r)},this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e,i=this._core._current,s=i+this._core.settings.items,n=this._core.$stage.children().toArray().slice(i,s),o=[];t.each(n,function(e,i){o.push(t(i).height())}),e=Math.max.apply(null,o),this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if((s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o=i.width&&i.height?'style="width:'+i.width+"px;height:"+i.height+'px;"':"",r=e.find("img"),a="src",h="",l=this._core.settings,c=function(t){'<div class="owl-video-play-icon"></div>',s=l.lazyLoad?'<div class="owl-video-tn '+h+'" '+a+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(s),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap('<div class="owl-video-wrapper"'+o+"></div>"),this._core.settings.lazyLoad&&(a="data-src",h="owl-lazy"),r.length)return c(r.attr(a)),r.remove(),!1;"youtube"===i.type?(n="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",c(n)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,c(n)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,c(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,s=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[s.attr("data-video")],o=n.width||"100%",r=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),"youtube"===n.type?i='<iframe width="'+o+'" height="'+r+'" src="//www.youtube.com/embed/'+n.id+"?autoplay=1&rel=0&v="+n.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===n.type?i='<iframe src="//player.vimeo.com/video/'+n.id+'?autoplay=1" width="'+o+'" height="'+r+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===n.type&&(i='<iframe frameborder="0"height="'+r+'"width="'+o+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+n.id+'/player?autoplay=true"></iframe>'),t('<div class="owl-video-frame">'+i+"</div>").insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},n.prototype._getNextTimeout=function(s,n){return this._timeout&&e.clearTimeout(this._timeout),e.setTimeout(t.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||i.hidden||this._core.next(n||this._core.settings.autoplaySpeed)},this),s||this._core.settings.autoplayTimeout)},n.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},n.prototype.stop=function(){this._core.is("rotating")&&(e.clearTimeout(this._timeout),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},n.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var s=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(s,i.dotsSpeed)},this)),this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,s;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,n=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0,0;t<s;t++){if(e>=r||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+r-1}),Math.min(n,t-i)===n)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;!s&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===s?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),s=this._core.$stage.children(),n=this._hashes[i]&&s.index(this._hashes[i]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;for(i in t(e).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){function n(e,i){var n=!1,o=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(o+" ")+o).split(" "),function(t,e){if(r[e]!==s)return n=!i||e,!1}),n}function o(t){return n(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),h={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},l=function(){return!!n("transform")},c=function(){return!!n("perspective")},p=function(){return!!n("animation")};(function(){return!!n("transition")})()&&(t.support.transition=new String(o("transition")),t.support.transition.end=h.transition.end[t.support.transition]),p()&&(t.support.animation=new String(o("animation")),t.support.animation.end=h.animation.end[t.support.animation]),l()&&(t.support.transform=new String(o("transform")),t.support.transform3d=c())}(window.Zepto||window.jQuery,window,document);
/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(e,t,n,i){var o={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){o.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){o.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(o.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(o.features)return o.features;var e=o.createEl().style,t="",n={};if(n.oldIE=document.all&&!document.addEventListener,n.touch="ontouchstart"in window,window.requestAnimationFrame&&(n.raf=window.requestAnimationFrame,n.caf=window.cancelAnimationFrame),n.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!n.pointerEvent){var i=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&a.length>0&&(a=parseInt(a[1],10))>=1&&a<8&&(n.isOldIOSPhone=!0)}var r=i.match(/Android\s([0-9\.]*)/),l=r?r[1]:0;(l=parseFloat(l))>=1&&(l<4.4&&(n.isOldAndroid=!0),n.androidVersion=l),n.isMobileOpera=/opera mini|opera mobi/i.test(i)}for(var s,u,c=["transform","perspective","animationName"],d=["","webkit","Moz","ms","O"],p=0;p<4;p++){t=d[p];for(var m=0;m<3;m++)s=c[m],u=t+(t?s.charAt(0).toUpperCase()+s.slice(1):s),!n[s]&&u in e&&(n[s]=u);t&&!n.raf&&(t=t.toLowerCase(),n.raf=window[t+"RequestAnimationFrame"],n.raf&&(n.caf=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"]))}if(!n.raf){var f=0;n.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-f)),i=window.setTimeout(function(){e(t+n)},n);return f=t+n,i},n.caf=function(e){clearTimeout(e)}}return n.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=n,n}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var a=this,r={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(r,i);var l,s,u,c,d,p,m,f,h,y,x,v,g,w,b,I,C,D,T,M,S,A,E,O,k,R,Z,P,F,L,z,_,N,U,H,Y,W,B,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue={x:0,y:0},ce={x:0,y:0},de={x:0,y:0},pe={},me=0,fe={},he={x:0,y:0},ye=0,xe=!0,ve=[],ge={},we=!1,be=function(e,t){o.extend(a,t.publicMethods),ve.push(e)},Ie=function(e){var t=Ht();return e>t-1?e-t:e<0?t+e:e},Ce={},De=function(e,t){return Ce[e]||(Ce[e]=[]),Ce[e].push(t)},Te=function(e){var t=Ce[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(a,n)}},Me=function(){return(new Date).getTime()},Se=function(e){re=e,a.bg.style.opacity=e*r.bgOpacity},Ae=function(e,t,n,i,o){(!we||o&&o!==a.currItem)&&(i/=o?o.fitRatio:a.currItem.fitRatio),e[A]=v+t+"px, "+n+"px"+g+" scale("+i+")"},Ee=function(e){te&&(e&&(y>a.currItem.fitRatio?we||($t(a.currItem,!1,!0),we=!0):we&&($t(a.currItem),we=!1)),Ae(te,de.x,de.y,y))},Oe=function(e){e.container&&Ae(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},ke=function(e,t){t[A]=v+e+"px, 0px"+g},Re=function(e,t){if(!r.loop&&t){var n=c+(he.x*me-e)/he.x,i=Math.round(e-ct.x);(n<0&&i>0||n>=Ht()-1&&i<0)&&(e=ct.x+i*r.mainScrollEndFriction)}ct.x=e,ke(e,d)},Ze=function(e,t){var n=dt[e]-fe[e];return ce[e]+ue[e]+n-n*(t/x)},Pe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Fe=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Le=null,ze=function(){Le&&(o.unbind(document,"mousemove",ze),o.addClass(e,"pswp--has_mouse"),r.mouseUsed=!0,Te("mouseUsed")),Le=setTimeout(function(){Le=null},100)},_e=function(e,t){var n=Xt(a.currItem,pe,e);return t&&(ee=n),n},Ne=function(e){return e||(e=a.currItem),e.initialZoomLevel},Ue=function(e){return e||(e=a.currItem),e.w>0?r.maxSpreadZoom:1},He=function(e,t,n,i){return i===a.currItem.initialZoomLevel?(n[e]=a.currItem.initialPosition[e],!0):(n[e]=Ze(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Ye=function(e){var t="";r.escKey&&27===e.keyCode?t="close":r.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,a[t]()))},We=function(e){e&&(K||V||ne||W)&&(e.preventDefault(),e.stopPropagation())},Be=function(){a.setScrollOffset(0,o.getScrollY())},Ge={},Xe=0,Ve=function(e){Ge[e]&&(Ge[e].raf&&R(Ge[e].raf),Xe--,delete Ge[e])},Ke=function(e){Ge[e]&&Ve(e),Ge[e]||(Xe++,Ge[e]={})},qe=function(){for(var e in Ge)Ge.hasOwnProperty(e)&&Ve(e)},$e=function(e,t,n,i,o,a,r){var l,s=Me();Ke(e);var u=function(){if(Ge[e]){if((l=Me()-s)>=i)return Ve(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Ge[e].raf=k(u)}};u()},je={shout:Te,listen:De,viewportSize:pe,options:r,isMainScrollAnimating:function(){return ne},getZoomLevel:function(){return y},getCurrentIndex:function(){return c},isDragging:function(){return G},isZooming:function(){return J},setScrollOffset:function(e,t){fe.x=e,L=fe.y=t,Te("updateScrollOffset",fe)},applyZoomPan:function(e,t,n,i){de.x=t,de.y=n,y=e,Ee(i)},init:function(){if(!l&&!s){var n;a.framework=o,a.template=e,a.bg=o.getChildByClass(e,"pswp__bg"),Z=e.className,l=!0,z=o.detectFeatures(),k=z.raf,R=z.caf,A=z.transform,F=z.oldIE,a.scrollWrap=o.getChildByClass(e,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),d=a.container.style,a.itemHolders=I=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],I[0].el.style.display=I[2].el.style.display="none",function(){if(A){var t=z.perspective&&!O;return v="translate"+(t?"3d(":"("),void(g=z.perspective?", 0px)":")")}A="left",o.addClass(e,"pswp--ie"),ke=function(e,t){t.left=e+"px"},Oe=function(e){var t=e.fitRatio>1?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Ee=function(){if(te){var e=te,t=a.currItem,n=t.fitRatio>1?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=de.x+"px",e.top=de.y+"px"}}}(),h={resize:a.updateSize,orientationchange:function(){clearTimeout(_),_=setTimeout(function(){pe.x!==a.scrollWrap.clientWidth&&a.updateSize()},500)},scroll:Be,keydown:Ye,click:We};var i=z.isOldIOSPhone||z.isOldAndroid||z.isMobileOpera;for(z.animationName&&z.transform&&!i||(r.showAnimationDuration=r.hideAnimationDuration=0),n=0;n<ve.length;n++)a["init"+ve[n]]();t&&(a.ui=new t(a,o)).init(),Te("firstUpdate"),c=c||r.index||0,(isNaN(c)||c<0||c>=Ht())&&(c=0),a.currItem=Ut(c),(z.isOldIOSPhone||z.isOldAndroid)&&(xe=!1),e.setAttribute("aria-hidden","false"),r.modal&&(xe?e.style.position="fixed":(e.style.position="absolute",e.style.top=o.getScrollY()+"px")),void 0===L&&(Te("initialLayout"),L=P=o.getScrollY());var u="pswp--open ";for(r.mainClass&&(u+=r.mainClass+" "),r.showHideOpacity&&(u+="pswp--animate_opacity "),u+=O?"pswp--touch":"pswp--notouch",u+=z.animationName?" pswp--css_animation":"",u+=z.svg?" pswp--svg":"",o.addClass(e,u),a.updateSize(),p=-1,ye=null,n=0;n<3;n++)ke((n+p)*he.x,I[n].el.style);F||o.bind(a.scrollWrap,f,a),De("initialZoomInEnd",function(){a.setContent(I[0],c-1),a.setContent(I[2],c+1),I[0].el.style.display=I[2].el.style.display="block",r.focus&&e.focus(),o.bind(document,"keydown",a),z.transform&&o.bind(a.scrollWrap,"click",a),r.mouseUsed||o.bind(document,"mousemove",ze),o.bind(window,"resize scroll orientationchange",a),Te("bindEvents")}),a.setContent(I[1],c),a.updateCurrItem(),Te("afterInit"),xe||(w=setInterval(function(){Xe||G||J||y!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(e,"pswp--visible")}},close:function(){l&&(l=!1,s=!0,Te("close"),o.unbind(window,"resize scroll orientationchange",a),o.unbind(window,"scroll",h.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",ze),z.transform&&o.unbind(a.scrollWrap,"click",a),G&&o.unbind(window,m,a),clearTimeout(_),Te("unbindEvents"),Yt(a.currItem,null,!0,a.destroy))},destroy:function(){Te("destroy"),Lt&&clearTimeout(Lt),e.setAttribute("aria-hidden","true"),e.className=Z,w&&clearInterval(w),o.unbind(a.scrollWrap,f,a),o.unbind(window,"scroll",a),ft(),qe(),Ce=null},panTo:function(e,t,n){n||(e>ee.min.x?e=ee.min.x:e<ee.max.x&&(e=ee.max.x),t>ee.min.y?t=ee.min.y:t<ee.max.y&&(t=ee.max.y)),de.x=e,de.y=t,Ee()},handleEvent:function(e){e=e||window.event,h[e.type]&&h[e.type](e)},goTo:function(e){var t=(e=Ie(e))-c;ye=t,c=e,a.currItem=Ut(c),me-=t,Re(he.x*me),qe(),ne=!1,a.updateCurrItem()},next:function(){a.goTo(c+1)},prev:function(){a.goTo(c-1)},updateCurrZoomItem:function(e){if(e&&Te("beforeChange",0),I[1].el.children.length){var t=I[1].el.children[0];te=o.hasClass(t,"pswp__zoom-wrap")?t.style:null}else te=null;ee=a.currItem.bounds,x=y=a.currItem.initialZoomLevel,de.x=ee.center.x,de.y=ee.center.y,e&&Te("afterChange")},invalidateCurrItems:function(){b=!0;for(var e=0;e<3;e++)I[e].item&&(I[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==ye){var t,n=Math.abs(ye);if(!(e&&n<2)){a.currItem=Ut(c),we=!1,Te("beforeChange",ye),n>=3&&(p+=ye+(ye>0?-3:3),n=3);for(var i=0;i<n;i++)ye>0?(t=I.shift(),I[2]=t,ke((++p+2)*he.x,t.el.style),a.setContent(t,c-n+i+1+1)):(t=I.pop(),I.unshift(t),ke(--p*he.x,t.el.style),a.setContent(t,c+n-i-1-1));if(te&&1===Math.abs(ye)){var o=Ut(C);o.initialZoomLevel!==y&&(Xt(o,pe),$t(o),Oe(o))}ye=0,a.updateCurrZoomItem(),C=c,Te("afterChange")}}},updateSize:function(t){if(!xe&&r.modal){var n=o.getScrollY();if(L!==n&&(e.style.top=n+"px",L=n),!t&&ge.x===window.innerWidth&&ge.y===window.innerHeight)return;ge.x=window.innerWidth,ge.y=window.innerHeight,e.style.height=ge.y+"px"}if(pe.x=a.scrollWrap.clientWidth,pe.y=a.scrollWrap.clientHeight,Be(),he.x=pe.x+Math.round(pe.x*r.spacing),he.y=pe.y,Re(he.x*me),Te("beforeResize"),void 0!==p){for(var i,l,s,u=0;u<3;u++)i=I[u],ke((u+p)*he.x,i.el.style),s=c+u-1,r.loop&&Ht()>2&&(s=Ie(s)),(l=Ut(s))&&(b||l.needsUpdate||!l.bounds)?(a.cleanSlide(l),a.setContent(i,s),1===u&&(a.currItem=l,a.updateCurrZoomItem(!0)),l.needsUpdate=!1):-1===i.index&&s>=0&&a.setContent(i,s),l&&l.container&&(Xt(l,pe),$t(l),Oe(l));b=!1}x=y=a.currItem.initialZoomLevel,(ee=a.currItem.bounds)&&(de.x=ee.center.x,de.y=ee.center.y,Ee(!0)),Te("resize")},zoomTo:function(e,t,n,i,a){t&&(x=y,dt.x=Math.abs(t.x)-de.x,dt.y=Math.abs(t.y)-de.y,Pe(ce,de));var r=_e(e,!1),l={};He("x",r,l,e),He("y",r,l,e);var s=y,u=de.x,c=de.y;Fe(l);var d=function(t){1===t?(y=e,de.x=l.x,de.y=l.y):(y=(e-s)*t+s,de.x=(l.x-u)*t+u,de.y=(l.y-c)*t+c),a&&a(t),Ee(1===t)};n?$e("customZoomTo",0,1,n,i||o.easing.sine.inOut,d):d(1)}},Je={},Qe={},et={},tt={},nt={},it=[],ot={},at=[],rt={},lt=0,st={x:0,y:0},ut=0,ct={x:0,y:0},dt={x:0,y:0},pt={x:0,y:0},mt=function(e,t){return rt.x=Math.abs(e.x-t.x),rt.y=Math.abs(e.y-t.y),Math.sqrt(rt.x*rt.x+rt.y*rt.y)},ft=function(){q&&(R(q),q=null)},ht=function(){G&&(q=k(ht),Et())},yt=function(e,t){return!(!e||e===document)&&!(e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(t(e)?e:yt(e.parentNode,t))},xt={},vt=function(e,t){return xt.prevent=!yt(e.target,r.isClickableElement),Te("preventDragEvent",e,t,xt),xt.prevent},gt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},wt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},bt=function(){var e=de.y-a.currItem.initialPosition.y;return 1-Math.abs(e/(pe.y/2))},It={},Ct={},Dt=[],Tt=function(e){for(;Dt.length>0;)Dt.pop();return E?(se=0,it.forEach(function(e){0===se?Dt[0]=e:1===se&&(Dt[1]=e),se++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(Dt[0]=gt(e.touches[0],It),e.touches.length>1&&(Dt[1]=gt(e.touches[1],Ct))):(It.x=e.pageX,It.y=e.pageY,It.id="",Dt[0]=It),Dt},Mt=function(e,t){var n,i,o,l,s=de[e]+t[e],u=t[e]>0,c=ct.x+t.x,d=ct.x-ot.x;if(n=s>ee.min[e]||s<ee.max[e]?r.panEndFriction:1,s=de[e]+t[e]*n,(r.allowPanToNext||y===a.currItem.initialZoomLevel)&&(te?"h"!==ie||"x"!==e||V||(u?(s>ee.min[e]&&(n=r.panEndFriction,ee.min[e],i=ee.min[e]-ce[e]),(i<=0||d<0)&&Ht()>1?(l=c,d<0&&c>ot.x&&(l=ot.x)):ee.min.x!==ee.max.x&&(o=s)):(s<ee.max[e]&&(n=r.panEndFriction,ee.max[e],i=ce[e]-ee.max[e]),(i<=0||d>0)&&Ht()>1?(l=c,d>0&&c<ot.x&&(l=ot.x)):ee.min.x!==ee.max.x&&(o=s))):l=c,"x"===e))return void 0!==l&&(Re(l,!0),$=l!==ot.x),ee.min.x!==ee.max.x&&(void 0!==o?de.x=o:$||(de.x+=t.x*n)),void 0!==l;ne||$||y>a.currItem.fitRatio&&(de[e]+=t[e]*n)},St=function(e){if(!("mousedown"===e.type&&e.button>0))if(Nt)e.preventDefault();else if(!B||"mousedown"!==e.type){if(vt(e,!0)&&e.preventDefault(),Te("pointerDown"),E){var t=o.arraySearch(it,e.pointerId,"id");t<0&&(t=it.length),it[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Tt(e),i=n.length;j=null,qe(),G&&1!==i||(G=oe=!0,o.bind(window,m,a),Y=le=ae=W=$=K=X=V=!1,ie=null,Te("firstTouchStart",n),Pe(ce,de),ue.x=ue.y=0,Pe(tt,n[0]),Pe(nt,tt),ot.x=he.x*me,at=[{x:tt.x,y:tt.y}],U=N=Me(),_e(y,!0),ft(),ht()),!J&&i>1&&!ne&&!$&&(x=y,V=!1,J=X=!0,ue.y=ue.x=0,Pe(ce,de),Pe(Je,n[0]),Pe(Qe,n[1]),wt(Je,Qe,pt),dt.x=Math.abs(pt.x)-de.x,dt.y=Math.abs(pt.y)-de.y,Q=mt(Je,Qe))}},At=function(e){if(e.preventDefault(),E){var t=o.arraySearch(it,e.pointerId,"id");if(t>-1){var n=it[t];n.x=e.pageX,n.y=e.pageY}}if(G){var i=Tt(e);if(ie||K||J)j=i;else if(ct.x!==he.x*me)ie="h";else{var a=Math.abs(i[0].x-tt.x)-Math.abs(i[0].y-tt.y);Math.abs(a)>=10&&(ie=a>0?"h":"v",j=i)}}},Et=function(){if(j){var e,t,n=j.length;if(0!==n)if(Pe(Je,j[0]),et.x=Je.x-tt.x,et.y=Je.y-tt.y,J&&n>1){if(tt.x=Je.x,tt.y=Je.y,!et.x&&!et.y&&(e=j[1],t=Qe,e.x===t.x&&e.y===t.y))return;Pe(Qe,j[1]),V||(V=!0,Te("zoomGestureStarted"));var i=mt(Je,Qe),o=Pt(i);o>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(le=!0);var l=1,s=Ne(),u=Ue();if(o<s)if(r.pinchToClose&&!le&&x<=a.currItem.initialZoomLevel){var c=1-(s-o)/(s/1.2);Se(c),Te("onPinchClose",c),ae=!0}else(l=(s-o)/s)>1&&(l=1),o=s-l*(s/3);else o>u&&((l=(o-u)/(6*s))>1&&(l=1),o=u+l*s);l<0&&(l=0),wt(Je,Qe,st),ue.x+=st.x-pt.x,ue.y+=st.y-pt.y,Pe(pt,st),de.x=Ze("x",o),de.y=Ze("y",o),Y=o>y,y=o,Ee()}else{if(!ie)return;if(oe&&(oe=!1,Math.abs(et.x)>=10&&(et.x-=j[0].x-nt.x),Math.abs(et.y)>=10&&(et.y-=j[0].y-nt.y)),tt.x=Je.x,tt.y=Je.y,0===et.x&&0===et.y)return;if("v"===ie&&r.closeOnVerticalDrag&&"fit"===r.scaleMode&&y===a.currItem.initialZoomLevel){ue.y+=et.y,de.y+=et.y;var d=bt();return W=!0,Te("onVerticalDrag",d),Se(d),void Ee()}!function(e,t,n){if(e-U>50){var i=at.length>2?at.shift():{};i.x=t,i.y=n,at.push(i),U=e}}(Me(),Je.x,Je.y),K=!0,ee=a.currItem.bounds,Mt("x",et)||(Mt("y",et),Fe(de),Ee())}}},Ot=function(e){if(z.isOldAndroid){if(B&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout(B),B=setTimeout(function(){B=0},600))}var t;if(Te("pointerUp"),vt(e,!1)&&e.preventDefault(),E){var n=o.arraySearch(it,e.pointerId,"id");n>-1&&(t=it.splice(n,1)[0],navigator.pointerEnabled?t.type=e.pointerType||"mouse":(t.type={4:"mouse",2:"touch",3:"pen"}[e.pointerType],t.type||(t.type=e.pointerType||"mouse")))}var i,l=Tt(e),s=l.length;if("mouseup"===e.type&&(s=0),2===s)return j=null,!0;1===s&&Pe(nt,l[0]),0!==s||ie||ne||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Te("touchRelease",e,t));var u=-1;if(0===s&&(G=!1,o.unbind(window,m,a),ft(),J?u=0:-1!==ut&&(u=Me()-ut)),ut=1===s?Me():-1,i=-1!==u&&u<150?"zoom":"swipe",J&&s<2&&(J=!1,1===s&&(i="zoomPointerUp"),Te("zoomGestureEnded")),j=null,K||V||ne||W)if(qe(),H||(H=kt()),H.calculateSwipeSpeed("x"),W)if(bt()<r.verticalDragRange)a.close();else{var c=de.y,d=re;$e("verticalDrag",0,1,300,o.easing.cubic.out,function(e){de.y=(a.currItem.initialPosition.y-c)*e+c,Se((1-d)*e+d),Ee()}),Te("onVerticalDrag",1)}else{if(($||ne)&&0===s){if(Zt(i,H))return;i="zoomPointerUp"}ne||("swipe"===i?!$&&y>a.currItem.fitRatio&&Rt(H):Ft())}},kt=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(i){at.length>1?(e=Me()-U+50,t=at[at.length-2][i]):(e=Me()-N,t=nt[i]),n.lastFlickOffset[i]=tt[i]-t,n.lastFlickDist[i]=Math.abs(n.lastFlickOffset[i]),n.lastFlickDist[i]>20?n.lastFlickSpeed[i]=n.lastFlickOffset[i]/e:n.lastFlickSpeed[i]=0,Math.abs(n.lastFlickSpeed[i])<.1&&(n.lastFlickSpeed[i]=0),n.slowDownRatio[i]=.95,n.slowDownRatioReverse[i]=1-n.slowDownRatio[i],n.speedDecelerationRatio[i]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(de[e]>ee.min[e]?n.backAnimDestination[e]=ee.min[e]:de[e]<ee.max[e]&&(n.backAnimDestination[e]=ee.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,$e("bounceZoomPan"+e,de[e],n.backAnimDestination[e],t||300,o.easing.sine.out,function(t){de[e]=t,Ee()}))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,de[e]+=n.distanceOffset[e])},panAnimLoop:function(){if(Ge.zoomPan&&(Ge.zoomPan.raf=k(n.panAnimLoop),n.now=Me(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),Ee(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05))return de.x=Math.round(de.x),de.y=Math.round(de.y),Ee(),void Ve("zoomPan")}};return n},Rt=function(e){if(e.calculateSwipeSpeed("y"),ee=a.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;Ke("zoomPan"),e.lastNow=Me(),e.panAnimLoop()},Zt=function(e,t){var n,i,l;if(ne||(lt=c),"swipe"===e){var s=tt.x-nt.x,u=t.lastFlickDist.x<10;s>30&&(u||t.lastFlickOffset.x>20)?i=-1:s<-30&&(u||t.lastFlickOffset.x<-20)&&(i=1)}i&&((c+=i)<0?(c=r.loop?Ht()-1:0,l=!0):c>=Ht()&&(c=r.loop?0:Ht()-1,l=!0),l&&!r.loop||(ye+=i,me-=i,n=!0));var d,p=he.x*me,m=Math.abs(p-ct.x);return n||p>ct.x==t.lastFlickSpeed.x>0?(d=Math.abs(t.lastFlickSpeed.x)>0?m/Math.abs(t.lastFlickSpeed.x):333,d=Math.min(d,400),d=Math.max(d,250)):d=333,lt===c&&(n=!1),ne=!0,Te("mainScrollAnimStart"),$e("mainScroll",ct.x,p,d,o.easing.cubic.out,Re,function(){qe(),ne=!1,lt=-1,(n||lt!==c)&&a.updateCurrItem(),Te("mainScrollAnimComplete")}),n&&a.updateCurrItem(!0),n},Pt=function(e){return 1/Q*e*x},Ft=function(){var e=y,t=Ne(),n=Ue();y<t?e=t:y>n&&(e=n);var i,r=re;return ae&&!Y&&!le&&y<t?(a.close(),!0):(ae&&(i=function(e){Se((1-r)*e+r)}),a.zoomTo(e,0,200,o.easing.cubic.out,i),!0)};be("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){D=e+t,T=e+n,M=e+i,S=o?e+o:""};(E=z.pointerEvent)&&z.touch&&(z.touch=!1),E?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):z.touch?(e("touch","start","move","end","cancel"),O=!0):e("mouse","down","move","up"),m=T+" "+M+" "+S,f=D,E&&!O&&(O=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=O,h[D]=St,h[T]=At,h[M]=Ot,S&&(h[S]=h[M]),z.touch&&(f+=" mousedown",m+=" mousemove mouseup",h.mousedown=h[D],h.mousemove=h[T],h.mouseup=h[M]),O||(r.allowPanToNext=!1)}}});var Lt,zt,_t,Nt,Ut,Ht,Yt=function(t,n,i,l){var s;Lt&&clearTimeout(Lt),Nt=!0,_t=!0,t.initialLayout?(s=t.initialLayout,t.initialLayout=null):s=r.getThumbBoundsFn&&r.getThumbBoundsFn(c);var d,p,m=i?r.hideAnimationDuration:r.showAnimationDuration,f=function(){Ve("initialZoom"),i?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(Se(1),n&&(n.style.display="block"),o.addClass(e,"pswp--animated-in"),Te("initialZoom"+(i?"OutEnd":"InEnd"))),l&&l(),Nt=!1};if(!m||!s||void 0===s.x)return Te("initialZoom"+(i?"Out":"In")),y=t.initialZoomLevel,Pe(de,t.initialPosition),Ee(),e.style.opacity=i?0:1,Se(1),void(m?setTimeout(function(){f()},m):f());d=u,p=!a.currItem.src||a.currItem.loadError||r.showHideOpacity,t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),i||(y=s.w/t.w,de.x=s.x,de.y=s.y-P,a[p?"template":"bg"].style.opacity=.001,Ee()),Ke("initialZoom"),i&&!d&&o.removeClass(e,"pswp--animated-in"),p&&(i?o[(d?"remove":"add")+"Class"](e,"pswp--animate_opacity"):setTimeout(function(){o.addClass(e,"pswp--animate_opacity")},30)),Lt=setTimeout(function(){if(Te("initialZoom"+(i?"Out":"In")),i){var n=s.w/t.w,a=de.x,r=de.y,l=y,u=re,c=function(t){1===t?(y=n,de.x=s.x,de.y=s.y-L):(y=(n-l)*t+l,de.x=(s.x-a)*t+a,de.y=(s.y-L-r)*t+r),Ee(),p?e.style.opacity=1-t:Se(u-t*u)};d?$e("initialZoom",0,1,m,o.easing.cubic.out,c,f):(c(1),Lt=setTimeout(f,m+20))}else y=t.initialZoomLevel,Pe(de,t.initialPosition),Ee(),Se(1),p?e.style.opacity=1:Se(1),Lt=setTimeout(f,m+20)},i?25:90)},Wt={},Bt=[],Gt={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return zt.length}},Xt=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Te("parseVerticalMargin",e)),Wt.x=t.x,Wt.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=Wt.x/e.w,a=Wt.y/e.h;e.fitRatio=o<a?o:a;var l=r.scaleMode;"orig"===l?n=1:"fit"===l&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!n)return;return s=e,u=e.w*n,c=e.h*n,(d=s.bounds).center.x=Math.round((Wt.x-u)/2),d.center.y=Math.round((Wt.y-c)/2)+s.vGap.top,d.max.x=u>Wt.x?Math.round(Wt.x-u):d.center.x,d.max.y=c>Wt.y?Math.round(Wt.y-c)+s.vGap.top:d.center.y,d.min.x=u>Wt.x?0:d.center.x,d.min.y=c>Wt.y?s.vGap.top:d.center.y,i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},e.initialPosition=e.bounds.center,e.bounds;var s,u,c,d},Vt=function(e,t,n,i,o,r){t.loadError||i&&(t.imageAppended=!0,$t(t,i,t===a.currItem&&we),n.appendChild(i),r&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},Kt=function(e){e.loading=!0,e.loaded=!1;var t=e.img=o.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},qt=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=r.errorMsg.replace("%url%",e.src),!0},$t=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},jt=function(){if(Bt.length){for(var e,t=0;t<Bt.length;t++)(e=Bt[t]).holder.index===e.index&&Vt(e.index,e.item,e.baseDiv,e.img,0,e.clearPlaceholder);Bt=[]}};be("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ie(e);var t=Ut(e);t&&(!t.loaded&&!t.loading||b)&&(Te("gettingData",e,t),t.src&&Kt(t))},initController:function(){o.extend(r,Gt,!0),a.items=zt=n,Ut=a.getItemAt,Ht=r.getNumItemsFn,r.loop,Ht()<3&&(r.loop=!1),De("beforeChange",function(e){var t,n=r.preload,i=null===e||e>=0,o=Math.min(n[0],Ht()),l=Math.min(n[1],Ht());for(t=1;t<=(i?l:o);t++)a.lazyLoadItem(c+t);for(t=1;t<=(i?o:l);t++)a.lazyLoadItem(c-t)}),De("initialLayout",function(){a.currItem.initialLayout=r.getThumbBoundsFn&&r.getThumbBoundsFn(c)}),De("mainScrollAnimComplete",jt),De("initialZoomInEnd",jt),De("destroy",function(){for(var e,t=0;t<zt.length;t++)(e=zt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);Bt=null})},getItemAt:function(e){return e>=0&&void 0!==zt[e]&&zt[e]},allowProgressiveImg:function(){return r.forceProgressiveLoading||!O||r.mouseUsed||screen.width>1200},setContent:function(e,t){r.loop&&(t=Ie(t));var n=a.getItemAt(e.index);n&&(n.container=null);var i,s=a.getItemAt(t);if(s){Te("gettingData",t,s),e.index=t,e.item=s;var u=s.container=o.createEl("pswp__zoom-wrap");if(!s.src&&s.html&&(s.html.tagName?u.appendChild(s.html):u.innerHTML=s.html),qt(s),Xt(s,pe),!s.src||s.loadError||s.loaded)s.src&&!s.loadError&&((i=o.createEl("pswp__img","img")).style.opacity=1,i.src=s.src,$t(s,i),Vt(0,s,u,i));else{if(s.loadComplete=function(n){if(l){if(e&&e.index===t){if(qt(n,!0))return n.loadComplete=n.img=null,Xt(n,pe),Oe(n),void(e.index===c&&a.updateCurrZoomItem());n.imageAppended?!Nt&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):z.transform&&(ne||Nt)?Bt.push({item:n,baseDiv:u,img:n.img,index:t,holder:e,clearPlaceholder:!0}):Vt(0,n,u,n.img,0,!0)}n.loadComplete=null,n.img=null,Te("imageLoadComplete",t,n)}},o.features.transform){var d="pswp__img pswp__img--placeholder";d+=s.msrc?"":" pswp__img--placeholder--blank";var p=o.createEl(d,s.msrc?"img":"");s.msrc&&(p.src=s.msrc),$t(s,p),u.appendChild(p),s.placeholder=p}s.loading||Kt(s),a.allowProgressiveImg()&&(!_t&&z.transform?Bt.push({item:s,baseDiv:u,img:s.img,index:t,holder:e}):Vt(0,s,u,s.img,0,!0))}_t||t!==c?Oe(s):(te=u.style,Yt(s,i||s.img)),e.el.innerHTML="",e.el.appendChild(u)}else e.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var Jt,Qt,en={},tn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};be("Tap",{publicMethods:{initTap:function(){De("firstTouchStart",a.onTapStart),De("touchRelease",a.onTapRelease),De("destroy",function(){en={},Jt=null})},onTapStart:function(e){e.length>1&&(clearTimeout(Jt),Jt=null)},onTapRelease:function(e,t){var n,i;if(t&&!K&&!X&&!Xe){var a=t;if(Jt&&(clearTimeout(Jt),Jt=null,n=a,i=en,Math.abs(n.x-i.x)<25&&Math.abs(n.y-i.y)<25))return void Te("doubleTap",a);if("mouse"===t.type)return void tn(e,t,"mouse");if("BUTTON"===e.target.tagName.toUpperCase()||o.hasClass(e.target,"pswp__single-tap"))return void tn(e,t);Pe(en,a),Jt=setTimeout(function(){tn(e,t),Jt=null},300)}}}}),be("DesktopZoom",{publicMethods:{initDesktopZoom:function(){F||(O?De("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))},setupDesktopZoom:function(t){Qt={};var n="wheel mousewheel DOMMouseScroll";De("bindEvents",function(){o.bind(e,n,a.handleMouseWheel)}),De("unbindEvents",function(){Qt&&o.unbind(e,n,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var i,r=function(){a.mouseZoomedIn&&(o.removeClass(e,"pswp--zoomed-in"),a.mouseZoomedIn=!1),y<1?o.addClass(e,"pswp--zoom-allowed"):o.removeClass(e,"pswp--zoom-allowed"),l()},l=function(){i&&(o.removeClass(e,"pswp--dragging"),i=!1)};De("resize",r),De("afterChange",r),De("pointerDown",function(){a.mouseZoomedIn&&(i=!0,o.addClass(e,"pswp--dragging"))}),De("pointerUp",l),t||r()},handleMouseWheel:function(e){if(y<=a.currItem.fitRatio)return r.modal&&(!r.closeOnScroll||Xe||G?e.preventDefault():A&&Math.abs(e.deltaY)>2&&(u=!0,a.close())),!0;if(e.stopPropagation(),Qt.x=0,"deltaX"in e)1===e.deltaMode?(Qt.x=18*e.deltaX,Qt.y=18*e.deltaY):(Qt.x=e.deltaX,Qt.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(Qt.x=-.16*e.wheelDeltaX),e.wheelDeltaY?Qt.y=-.16*e.wheelDeltaY:Qt.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;Qt.y=e.detail}_e(y,!0);var t=de.x-Qt.x,n=de.y-Qt.y;(r.modal||t<=ee.min.x&&t>=ee.max.x&&n<=ee.min.y&&n>=ee.max.y)&&e.preventDefault(),a.panTo(t,n)},toggleDesktopZoom:function(t){t=t||{x:pe.x/2+fe.x,y:pe.y/2+fe.y};var n=r.getDoubleTapZoom(!0,a.currItem),i=y===n;a.mouseZoomedIn=!i,a.zoomTo(i?a.currItem.initialZoomLevel:n,t,333),o[(i?"remove":"add")+"Class"](e,"pswp--zoomed-in")}}});var nn,on,an,rn,ln,sn,un,cn,dn,pn,mn,fn,hn={history:!0,galleryUID:1},yn=function(){return mn.hash.substring(1)},xn=function(){nn&&clearTimeout(nn),an&&clearTimeout(an)},vn=function(){var e=yn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(r.galleryPIDs){var a=t.pid;for(t.pid=0,n=0;n<zt.length;n++)if(zt[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},gn=function(){if(an&&clearTimeout(an),Xe||G)an=setTimeout(gn,500);else{rn?clearTimeout(on):rn=!0;var e=c+1,t=Ut(c);t.hasOwnProperty("pid")&&(e=t.pid);var n=un+"&gid="+r.galleryUID+"&pid="+e;cn||-1===mn.hash.indexOf(n)&&(pn=!0);var i=mn.href.split("#")[0]+"#"+n;fn?"#"+n!==window.location.hash&&history[cn?"replaceState":"pushState"]("",document.title,i):cn?mn.replace(i):mn.hash=n,cn=!0,on=setTimeout(function(){rn=!1},60)}};be("History",{publicMethods:{initHistory:function(){if(o.extend(r,hn,!0),r.history){mn=window.location,pn=!1,dn=!1,cn=!1,un=yn(),fn="pushState"in history,un.indexOf("gid=")>-1&&(un=(un=un.split("&gid=")[0]).split("?gid=")[0]),De("afterChange",a.updateURL),De("unbindEvents",function(){o.unbind(window,"hashchange",a.onHashChange)});var e=function(){sn=!0,dn||(pn?history.back():un?mn.hash=un:fn?history.pushState("",document.title,mn.pathname+mn.search):mn.hash=""),xn()};De("unbindEvents",function(){u&&e()}),De("destroy",function(){sn||e()}),De("firstUpdate",function(){c=vn().pid});var t=un.indexOf("pid=");t>-1&&"&"===(un=un.substring(0,t)).slice(-1)&&(un=un.slice(0,-1)),setTimeout(function(){l&&o.bind(window,"hashchange",a.onHashChange)},40)}},onHashChange:function(){if(yn()===un)return dn=!0,void a.close();rn||(ln=!0,a.goTo(vn().pid),ln=!1)},updateURL:function(){xn(),ln||(cn?nn=setTimeout(gn,800):gn())}}}),o.extend(a,je)}});
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";return function(e,t){var n,o,l,r,i,s,a,u,c,p,d,m,f,h,w,g,v,b,_=this,C=!1,T=!0,I=!0,E={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return e.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return e.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},F=function(e){if(g)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!c&&z();for(var n,o,l=(e.target||e.srcElement).getAttribute("class")||"",r=0;r<P.length;r++)(n=P[r]).onTap&&l.indexOf("pswp__"+n.name)>-1&&(n.onTap(),o=!0);if(o){e.stopPropagation&&e.stopPropagation(),g=!0;var i=t.features.isOldAndroid?600:30;setTimeout(function(){g=!1},i)}},x=function(e,n,o){t[(o?"add":"remove")+"Class"](e,"pswp__"+n)},S=function(){var e=1===w.getNumItemsFn();e!==h&&(x(o,"ui--one-slide",e),h=e)},k=function(){x(a,"share-modal--hidden",I)},K=function(){return(I=!I)?(t.removeClass(a,"pswp__share-modal--fade-in"),setTimeout(function(){I&&k()},300)):(k(),setTimeout(function(){I||t.addClass(a,"pswp__share-modal--fade-in")},30)),I||O(),!1},L=function(t){var n=(t=t||window.event).target||t.srcElement;return e.shout("shareLinkClick",t,n),!(!n.href||!n.hasAttribute("download")&&(window.open(n.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),I||K(),1))},O=function(){for(var e,t,n,o,l="",r=0;r<w.shareButtons.length;r++)e=w.shareButtons[r],t=w.getImageURLForShare(e),n=w.getPageURLForShare(e),o=w.getTextForShare(e),l+='<a href="'+e.url.replace("{{url}}",encodeURIComponent(n)).replace("{{image_url}}",encodeURIComponent(t)).replace("{{raw_image_url}}",t).replace("{{text}}",encodeURIComponent(o))+'" target="_blank" class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>",w.parseShareButtonOut&&(l=w.parseShareButtonOut(e,l));a.children[0].innerHTML=l,a.children[0].onclick=L},R=function(e){for(var n=0;n<w.closeElClasses.length;n++)if(t.hasClass(e,"pswp__"+w.closeElClasses[n]))return!0},y=0,z=function(){clearTimeout(b),y=0,c&&_.setIdle(!1)},M=function(e){var t=(e=e||window.event).relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(b),b=setTimeout(function(){_.setIdle(!0)},w.timeToIdleOutside))},D=function(e){m!==e&&(x(d,"preloader--active",!e),m=e)},A=function(n){var i=n.vGap;if(!e.likelyTouchDevice||w.mouseUsed||screen.width>w.fitControlsWidth){var s=w.barsSize;if(w.captionEl&&"auto"===s.bottom)if(r||((r=t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")),o.insertBefore(r,l),t.addClass(o,"pswp__ui--fit")),w.addCaptionHTMLFn(n,r,!0)){var a=r.clientHeight;i.bottom=parseInt(a,10)||44}else i.bottom=s.top;else i.bottom="auto"===s.bottom?0:s.bottom;i.top=s.top}else i.top=i.bottom=0},P=[{name:"caption",option:"captionEl",onInit:function(e){l=e}},{name:"share-modal",option:"shareEl",onInit:function(e){a=e},onTap:function(){K()}},{name:"button--share",option:"shareEl",onInit:function(e){s=e},onTap:function(){K()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){i=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){d=e}}];_.init=function(){var i;t.extend(e.options,E,!0),w=e.options,o=t.getChildByClass(e.scrollWrap,"pswp__ui"),(p=e.listen)("onVerticalDrag",function(e){T&&e<.95?_.hideControls():!T&&e>=.95&&_.showControls()}),p("onPinchClose",function(e){T&&e<.9?(_.hideControls(),i=!0):i&&!T&&e>.9&&_.showControls()}),p("zoomGestureEnded",function(){(i=!1)&&!T&&_.showControls()}),p("beforeChange",_.update),p("doubleTap",function(t){var n=e.currItem.initialZoomLevel;e.getZoomLevel()!==n?e.zoomTo(n,t,333):e.zoomTo(w.getDoubleTapZoom(!1,e.currItem),t,333)}),p("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&e.type.indexOf("mouse")>-1&&(o.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)}),p("bindEvents",function(){t.bind(o,"pswpTap click",F),t.bind(e.scrollWrap,"pswpTap",_.onGlobalTap),e.likelyTouchDevice||t.bind(e.scrollWrap,"mouseover",_.onMouseOver)}),p("unbindEvents",function(){I||K(),v&&clearInterval(v),t.unbind(document,"mouseout",M),t.unbind(document,"mousemove",z),t.unbind(o,"pswpTap click",F),t.unbind(e.scrollWrap,"pswpTap",_.onGlobalTap),t.unbind(e.scrollWrap,"mouseover",_.onMouseOver),n&&(t.unbind(document,n.eventK,_.updateFullscreen),n.isFullscreen()&&(w.hideAnimationDuration=0,n.exit()),n=null)}),p("destroy",function(){w.captionEl&&(r&&o.removeChild(r),t.removeClass(l,"pswp__caption--empty")),a&&(a.children[0].onclick=null),t.removeClass(o,"pswp__ui--over-close"),t.addClass(o,"pswp__ui--hidden"),_.setIdle(!1)}),w.showAnimationDuration||t.removeClass(o,"pswp__ui--hidden"),p("initialZoomIn",function(){w.showAnimationDuration&&t.removeClass(o,"pswp__ui--hidden")}),p("initialZoomOut",function(){t.addClass(o,"pswp__ui--hidden")}),p("parseVerticalMargin",A),function(){var e,n,l,r=function(o){if(o)for(var r=o.length,i=0;i<r;i++){e=o[i],n=e.className;for(var s=0;s<P.length;s++)l=P[s],n.indexOf("pswp__"+l.name)>-1&&(w[l.option]?(t.removeClass(e,"pswp__element--disabled"),l.onInit&&l.onInit(e)):t.addClass(e,"pswp__element--disabled"))}};r(o.children);var i=t.getChildByClass(o,"pswp__top-bar");i&&r(i.children)}(),w.shareEl&&s&&a&&(I=!0),S(),w.timeToIdle&&p("mouseUsed",function(){t.bind(document,"mousemove",z),t.bind(document,"mouseout",M),v=setInterval(function(){2==++y&&_.setIdle(!0)},w.timeToIdle/2)}),w.fullscreenEl&&!t.features.isOldAndroid&&(n||(n=_.getFullscreenAPI()),n?(t.bind(document,n.eventK,_.updateFullscreen),_.updateFullscreen(),t.addClass(e.template,"pswp--supports-fs")):t.removeClass(e.template,"pswp--supports-fs")),w.preloaderEl&&(D(!0),p("beforeChange",function(){clearTimeout(f),f=setTimeout(function(){e.currItem&&e.currItem.loading?(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth)&&D(!1):D(!0)},w.loadingIndicatorDelay)}),p("imageLoadComplete",function(t,n){e.currItem===n&&D(!0)}))},_.setIdle=function(e){c=e,x(o,"ui--idle",e)},_.update=function(){T&&e.currItem?(_.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(e.currItem,l),x(l,"caption--empty",!e.currItem.title)),C=!0):C=!1,I||K(),S()},_.updateFullscreen=function(o){o&&setTimeout(function(){e.setScrollOffset(0,t.getScrollY())},50),t[(n.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")},_.updateIndexIndicator=function(){w.counterEl&&(i.innerHTML=e.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},_.onGlobalTap=function(n){var o=(n=n||window.event).target||n.srcElement;if(!g)if(n.detail&&"mouse"===n.detail.pointerType){if(R(o))return void e.close();t.hasClass(o,"pswp__img")&&(1===e.getZoomLevel()&&e.getZoomLevel()<=e.currItem.fitRatio?w.clickToCloseNonZoomable&&e.close():e.toggleDesktopZoom(n.detail.releasePoint))}else if(w.tapToToggleControls&&(T?_.hideControls():_.showControls()),w.tapToClose&&(t.hasClass(o,"pswp__img")||R(o)))return void e.close()},_.onMouseOver=function(e){var t=(e=e||window.event).target||e.srcElement;x(o,"ui--over-close",R(t))},_.hideControls=function(){t.addClass(o,"pswp__ui--hidden"),T=!1},_.showControls=function(){T=!0,C||_.update(),t.removeClass(o,"pswp__ui--hidden")},_.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},_.getFullscreenAPI=function(){var t,n=document.documentElement,o="fullscreenchange";return n.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:o}:n.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+o}:n.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+o}:n.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){return u=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?e.template[this.enterK]():void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return w.closeOnScroll=u,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}}});
/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
!function(e){e.fn.jflickrfeed=function(i,a){var t=(i=e.extend(!0,{flickrbase:"http://api.flickr.com/services/feeds/",feedapi:"photos_public.gne",limit:20,qstrings:{lang:"en-us",format:"json",jsoncallback:"?"},cleanDescription:!0,useTemplate:!0,itemTemplate:"",itemCallback:function(){}},i)).flickrbase+i.feedapi+"?",c=!0;for(var n in i.qstrings)c||(t+="&"),t+=n+"="+i.qstrings[n],c=!1;return e(this).each(function(){var c=e(this),n=this;e.getJSON(t,function(t){e.each(t.items,function(e,a){if(e<i.limit){if(i.cleanDescription){var t=/<p>(.*?)<\/p>/g,m=a.description;t.test(m)&&(a.description=m.match(t)[2],null!=a.description&&(a.description=a.description.replace("<p>","").replace("</p>","")))}if(a.image_s=a.media.m.replace("_m","_s"),a.image_t=a.media.m.replace("_m","_t"),a.image_m=a.media.m.replace("_m","_m"),a.image=a.media.m.replace("_m",""),a.image_b=a.media.m.replace("_m","_b"),delete a.media,i.useTemplate){var r=i.itemTemplate;for(var l in a){var p=new RegExp("{{"+l+"}}","g");r=r.replace(p,a[l])}c.append(r)}i.itemCallback.call(n,a)}}),e.isFunction(a)&&a.call(n,t)})})}}(jQuery);
"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,s,a){var i={API_URL:"https://api.instagram.com/v1",initialize:function(e,s){this.elem=s,this.$elem=t(s),this.accessToken=t.fn.spectragram.accessData.accessToken,this.options=t.extend({},t.fn.spectragram.options,e),this.endpoints=this.setEndpoints(),this.messages={defaultImageAltText:"Instagram Photo related with "+this.options.query,notFound:"This user account is private or doesn't have any photos."}},setEndpoints:function(){return{usersSelf:"/users/self/?access_token="+this.accessToken,usersMediaRecent:"/users/self/media/recent/?&count="+this.options.max+"&access_token="+this.accessToken,tagsMediaRecent:"/tags/"+this.options.query+"/media/recent?&count="+this.options.max+"&access_token="+this.accessToken}},getPhotos:function(e){var s=this;s.fetch(e).done(function(e){var a=s.options.query||"User";e.data.length?s.display(e):t.error("Spectragram.js - Error: "+a+" does not have photos.")})},getUserFeed:function(){this.getPhotos(this.endpoints.usersMediaRecent)},getRecentTagged:function(){this.getPhotos(this.endpoints.tagsMediaRecent)},fetch:function(e){var s=this.API_URL+e;return t.ajax({type:"GET",dataType:"jsonp",cache:!1,url:s})},display:function(e){var s,a,i,n,o,r,c,h,d,p=[];if(i=0===t(this.options.wrapEachWith).length,void 0===e.data||200!==e.meta.code||0===e.data.length)i?this.$elem.append(this.messages.notFound):this.$elem.append(t(this.options.wrapEachWith).append(this.messages.notFound));else{c=this.options.max>=e.data.length?e.data.length:this.options.max,h=this.options.size;for(var u=0;u<c;u++)"small"===h?(d=e.data[u].images.thumbnail.url,o=e.data[u].images.thumbnail.height,r=e.data[u].images.thumbnail.width):"medium"===h?(d=e.data[u].images.low_resolution.url,o=e.data[u].images.low_resolution.height,r=e.data[u].images.low_resolution.width):(d=e.data[u].images.standard_resolution.url,o=e.data[u].images.standard_resolution.height,r=e.data[u].images.standard_resolution.width),n=null!==e.data[u].caption?t("<span>").text(e.data[u].caption.text).html():this.messages.defaultImageAltText,a=t("<img>",{alt:n,attr:{height:o,width:r},src:d}),s=t("<a>",{href:e.data[u].link,target:"_blank",title:n}).append(a),i?p.push(s):p.push(t(this.options.wrapEachWith).append(s));this.$elem.append(p)}"function"==typeof this.options.complete&&this.options.complete.call(this)}};jQuery.fn.spectragram=function(e,s){jQuery.fn.spectragram.accessData.accessToken?this.each(function(){var a=Object.create(i);if(a.initialize(s,this),a[e])return a[e](this);t.error("Method "+e+" does not exist on jQuery.spectragram")}):t.error("You must define an accessToken on jQuery.spectragram")},jQuery.fn.spectragram.options={complete:null,max:20,query:"instagram",size:"medium",wrapEachWith:"<li></li>"},jQuery.fn.spectragram.accessData={accessToken:null}}(jQuery,window,document);
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){e.fn.tweet=function(t){var r=e.extend({modpath:"/twitter/",username:null,list_id:null,list:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"api.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(e,t){return t.tweet_time-e.tweet_time},filter:function(e){return!0}},t),a=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;function n(e,t){if("string"==typeof e){var r=e;for(var a in t){var n=t[a];r=r.replace(new RegExp("{"+a+"}","g"),null===n?"":n)}return r}return e(t)}function i(t,r){return function(){var a=[];return this.each(function(){a.push(this.replace(t,r))}),e(a)}}function s(e){return e.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}function u(t){var i,u,o,_,l={};return l.item=t,l.source=t.source,l.name=t.from_user_name||t.user.name,l.screen_name=t.from_user||t.user.screen_name,l.avatar_size=r.avatar_size,l.avatar_url=function e(t,r){return r?"user"in t?t.user.profile_image_url_https:e(t,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/"):t.profile_image_url||t.user.profile_image_url}(t,"https:"===document.location.protocol),l.retweet=void 0!==t.retweeted_status,l.tweet_time=(i=t.created_at,Date.parse(i.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))),l.join_text="auto"==r.join_text?(u=t.text).match(/^(@([A-Za-z0-9-_]+)) .*/i)?r.auto_join_text_reply:u.match(a)?r.auto_join_text_url:u.match(/^((\w+ed)|just) .*/im)?r.auto_join_text_ed:u.match(/^(\w*ing) .*/i)?r.auto_join_text_ing:r.auto_join_text_default:r.join_text,l.tweet_id=t.id_str,l.twitter_base="http://"+r.twitter_url+"/",l.user_url=l.twitter_base+l.screen_name,l.tweet_url=l.user_url+"/status/"+l.tweet_id,l.reply_url=l.twitter_base+"intent/tweet?in_reply_to="+l.tweet_id,l.retweet_url=l.twitter_base+"intent/retweet?tweet_id="+l.tweet_id,l.favorite_url=l.twitter_base+"intent/favorite?tweet_id="+l.tweet_id,l.retweeted_screen_name=l.retweet&&t.retweeted_status.user.screen_name,l.tweet_relative_time=function(e){var t=arguments.length>1?arguments[1]:new Date,r=parseInt((t.getTime()-e)/1e3,10);return r<1?"just now":r<60?r+" seconds ago":r<120?"about a minute ago":r<2700?"about "+parseInt(r/60,10).toString()+" minutes ago":r<7200?"about an hour ago":r<86400?"about "+parseInt(r/3600,10).toString()+" hours ago":r<172800?"about a day ago":"about "+parseInt(r/86400,10).toString()+" days ago"}(l.tweet_time),l.entities=t.entities?(t.entities.urls||[]).concat(t.entities.media||[]):[],l.tweet_raw_text=l.retweet?"RT @"+l.retweeted_screen_name+" "+t.retweeted_status.text:t.text,l.tweet_text=e([(o=l.tweet_raw_text,_=l.entities,o.replace(a,function(e){for(var t=/^[a-z]+:/i.test(e)?e:"http://"+e,r=e,a=0;a<_.length;++a){var n=_[a];if(n.url==t&&n.expanded_url){t=n.expanded_url,r=n.display_url;break}}return'<a href="'+s(t)+'">'+s(r)+"</a>"}))]).linkUser().linkHash()[0],l.tweet_text_fancy=e([l.tweet_text]).makeHeart()[0],l.user=n('<a class="tweet_user" href="{user_url}">{screen_name}</a>',l),l.join=r.join_text?n(' <span class="tweet_join">{join_text}</span> ',l):" ",l.avatar=l.avatar_size?n('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',l):"",l.time=n('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',l),l.text=n('<span class="tweet_text">{tweet_text_fancy}</span>',l),l.reply_action=n('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',l),l.retweet_action=n('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',l),l.favorite_action=n('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',l),l}return e.extend({tweet:{t:n}}),e.fn.extend({linkUser:i(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+r.twitter_url+'/$2">$2</a>'),linkHash:i(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="https://twitter.com/search?q=%23$1'+(r.username&&1==r.username.length&&!r.list?"&from="+r.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:i(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")}),this.each(function(t,a){var i=e('<ul class="tweet_list">'),s='<p class="tweet_intro">'+r.intro_text+"</p>",o='<p class="tweet_outro">'+r.outro_text+"</p>",_=e('<p class="loading">'+r.loading_text+"</p>");r.username&&"string"==typeof r.username&&(r.username=[r.username]),e(a).unbind("tweet:load").bind("tweet:load",function(){r.loading_text&&e(a).empty().append(_),e.ajax({dataType:"json",type:"post",async:!0,url:r.modpath||"/twitter/",data:{request:function(){r.modpath;var t=null===r.fetch?r.count:r.fetch,a={include_entities:1};if(r.list)return{host:r.twitter_api_url,url:"/1.1/lists/statuses.json",parameters:e.extend({},a,{list_id:r.list_id,slug:r.list,owner_screen_name:r.username,page:r.page,count:t,include_rts:r.retweets?1:0})};if(r.favorites)return{host:r.twitter_api_url,url:"/1.1/favorites/list.json",parameters:e.extend({},a,{list_id:r.list_id,screen_name:r.username,page:r.page,count:t})};if(null===r.query&&1===r.username.length)return{host:r.twitter_api_url,url:"/1.1/statuses/user_timeline.json",parameters:e.extend({},a,{screen_name:r.username,page:r.page,count:t,include_rts:r.retweets?1:0})};var n=r.query||"from:"+r.username.join(" OR from:");return{host:r.twitter_search_url,url:"/1.1/search/tweets.json",parameters:e.extend({},a,{q:n,count:t})}}()},success:function(t,_){t.message&&console.log(t.message);var l=t.response;e(a).empty().append(i),r.intro_text&&i.before(s),i.empty(),void 0!==l.statuses?resp=l.statuses:void 0!==l.results?resp=l.results:resp=l;var c=e.map(resp,u);c=e.grep(c,r.filter).sort(r.comparator).slice(0,r.count),i.append(e.map(c,function(e){return"<li>"+n(r.template,e)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"),r.outro_text&&i.after(o),e(a).trigger("loaded").trigger(c?"empty":"full"),r.refresh_interval&&window.setTimeout(function(){e(a).trigger("tweet:load")},1e3*r.refresh_interval)}})}).trigger("tweet:load")})}});
"use strict";
//Wrapping all JavaScript code into a IIFE function for prevent global variables creation
(function($){

var $body = $('body');
var $window = $(window);

//hidding menu elements that do not fit in menu width
//processing center logo
function menuHideExtraElements() {
	
	//cleaneng changed elements
	$('.sf-more-li, .sf-logo-li').remove();
	var windowWidth = $('body').innerWidth();
	
	$('.sf-menu').each(function(){
		var $thisMenu = $(this);
		var $menuWraper = $thisMenu.closest('.top-nav');
		$menuWraper.attr('style', '');
		if (windowWidth > 1199) {
			//grab all main menu first level items 
			var $menuLis = $menuWraper.find('.sf-menu > li');
			$menuLis.removeClass('sf-xl-hidden');

			var $headerLogoCenter = $thisMenu.closest('.header_logo_center');
			var logoWidth = 0;
			var summaryLiWidth = 0;
			
			if ( $headerLogoCenter.length ) {
				var $logo = $headerLogoCenter.find('.logo');
				// 30/2 - left and right margins
				logoWidth = $logo.outerWidth(true) + 70;
			}

			// var wrapperWidth = $('.sf-menu').width();
			var wrapperWidth = $menuWraper.outerWidth(true);
			$menuLis.each(function(index) {
				//4 - 4px additional width for inline-block LI element
				var elementWidth = $(this).outerWidth() +4;
				summaryLiWidth += elementWidth;
				if(summaryLiWidth >= (wrapperWidth-logoWidth)) {
					var $newLi = $('<li class="sf-more-li"><a>...</a><ul></ul></li>');
					$($menuLis[index - 1 ]).before($newLi);
					var newLiWidth = $($newLi).outerWidth(true);
					var $extraLiElements = $menuLis.filter(':gt('+ ( index - 2 ) +')');
					$extraLiElements.clone().appendTo($newLi.find('ul'));
					$extraLiElements.addClass('sf-xl-hidden');
					return false;
				}
			});

			//processing center logo
			if ( $headerLogoCenter.length ) {
				var $menuLisVisible = $headerLogoCenter.find('.sf-menu > li:not(.sf-xl-hidden)');
				var menuLength = $menuLisVisible.length;
				var summaryLiVisibleWidth = 0;
				$menuLisVisible.each(function(){
					summaryLiVisibleWidth += $(this).outerWidth();
				});

				var centerLi = Math.floor( menuLength / 2 );
				if ( (menuLength % 2 === 0) ) {
					centerLi--;
				}
				var $liLeftFromLogo = $menuLisVisible.eq(centerLi-1);
				$liLeftFromLogo.after('<li class="sf-logo-li"><a href="#">&nbsp;</a></li>');
				$headerLogoCenter.find('.sf-logo-li').width(logoWidth);
				var liLeftRightDotX = $liLeftFromLogo.offset().left + $liLeftFromLogo.outerWidth();
				var logoLeftDotX = windowWidth/2 - logoWidth/2;
				var menuLeftOffset = liLeftRightDotX - logoLeftDotX;
				$menuWraper.css({'left': -menuLeftOffset})
			}
			
		}// > 991
	}); //sf-menu each
} //menuHideExtraElements

function initMegaMenu(timeOut) {
	var $megaMenu = $('.top-nav .mega-menu');
	if($megaMenu.length) {
		setTimeout(function () {

			var windowWidth = $('body').innerWidth();
			if (windowWidth > 991) {
				$megaMenu.each(function(){
					var $thisMegaMenu = $(this);
					//temporary showing mega menu to proper size calc
					$thisMegaMenu.css({'display': 'block', 'left': 'auto'});

					//checking for sticked side header
					var stickedSideHeaderWidth = 0;
					var $stickedSideHeader = $('.header_side_sticked');
					if($stickedSideHeader.length && $stickedSideHeader.hasClass('active-slide-side-header')) {
						stickedSideHeaderWidth = $stickedSideHeader.outerWidth(true);
						if($stickedSideHeader.hasClass('header_side_right')) {
							stickedSideHeaderWidth = -stickedSideHeaderWidth;
						}
						windowWidth = windowWidth - stickedSideHeaderWidth;
					}
					var thisWidth = $thisMegaMenu.outerWidth();
					var thisOffset = $thisMegaMenu.offset().left - stickedSideHeaderWidth;
					var thisLeft = (thisOffset + (thisWidth/2)) - windowWidth/2;
					$thisMegaMenu.css({'left' : -thisLeft, 'display': 'none'});
					if(!$thisMegaMenu.closest('ul').hasClass('nav')) {
						$thisMegaMenu.css('left', '');
					}
				});
			}
		}, timeOut);

	}
}

//NOTE: affixed sidebar works bad with side headers
function initAffixSidebar() {
	var $affixAside = $('.affix-aside');
	if ($affixAside.length) {

			$window = $(window);
		
			//on stick and unstick event
			$affixAside.on('affix.bs.affix', function(e) {
				var affixWidth = $affixAside.width() - 1;
				var affixLeft = $affixAside.offset().left;
				$affixAside
					.width(affixWidth)
					.css("left", affixLeft);

			}).on('affix-bottom.bs.affix', function(e) {
				var affixWidth = $affixAside.width() - 1;
				//if sticked left header
				var stickedSideHeaderWidth = 0;
				var $stickedSideHeader = $('.header_side_sticked');
				if($stickedSideHeader.length && $stickedSideHeader.hasClass('active-slide-side-header') && !$stickedSideHeader.hasClass('header_side_right')) {
					stickedSideHeaderWidth = $stickedSideHeader.outerWidth(true);
				}
				var affixLeft = $affixAside.offset().left - stickedSideHeaderWidth - $('#box_wrapper').offset().left;;

				$affixAside
					.width(affixWidth)
					.css("left", affixLeft);
			}).on('affix-top.bs.affix', function(e) {
				$affixAside.css({"width": "", "left": ""});
			});

			//counting offset
			var offsetTopAdd = 10;
			var offsetBottomAdd = 150;
			var offsetTop = $affixAside.offset().top - $('.page_header').height();
			//note that page_footer and page_copyright sections must exists - else this will cause error in last jQuery versions
			var offsetBottom = $('.page_footer').outerHeight(true) + $('.page_copyright').outerHeight(true);

			$affixAside.affix({
				offset: {
					top: offsetTop - offsetTopAdd,
					bottom: offsetBottom + offsetBottomAdd
				},
			});

			$window.on('resize', function() {
				//returning sidebar in top position if it is sticked because of unexpected behavior
				$affixAside.removeClass("affix affix-bottom").addClass("affix-top").trigger('affix-top.bs.affix');

				var offsetTopSectionsArray = [
					'.page_topline',
					'.page_toplogo',
					'.page_header',
					'.page_title',
					'.blog_slider',
					'.blog-featured-posts'
				];
				var offsetTop = 0;

				offsetTopSectionsArray.map(function (val) {
					offsetTop += $(val).outerHeight(true) || 0;
				});
				//note that page_footer and page_copyright sections must exists - else this will cause error in last jQuery versions
				var offsetBottom = $('.page_footer').outerHeight(true)
								+ $('.page_copyright').outerHeight(true);

				$affixAside.data('bs.affix').options.offset.top = offsetTop - offsetTopAdd;
				$affixAside.data('bs.affix').options.offset.bottom = offsetBottom + offsetBottomAdd;
				
				$affixAside.affix('checkPosition');

			});

			$affixAside.affix('checkPosition');

	}//eof checking of affix sidebar existing
}

//photoSwipe gallery plugin
function initPhotoSwipe() {
        if (typeof PhotoSwipe !== 'undefined') {

            //adding prettyPhoto for backward compatibility. Deprecated.
            //will leave only .photoswipe-link later
            var gallerySelectors = '.photoswipe-link, a[data-gal^="prettyPhoto"], [data-thumb] a';
            var $galleryLinks = $(gallerySelectors);
            if ($galleryLinks.length) {

                //adding photoswipe gallery markup
                if (!($('.pswp').length)) {
                    $body.append('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><a class="pswp__button pswp__button--close" title="Close (Esc)"></a><a class="pswp__button pswp__button--share" title="Share"></a><a class="pswp__button pswp__button--fs" title="Toggle fullscreen"></a><a class="pswp__button pswp__button--zoom" title="Zoom in/out"></a><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><a class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></a><a class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></a><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>');
                    //if function already was called - return (all listeners was setted and .pswp gallery container was added)
                } else {
                    return;
                }
                //adding prettyPhoto for backward compatibility. Deprecated.
                $('body').on('click', gallerySelectors, function (e) {
                    e.preventDefault();

                    var $link = $(this);
                    var $linksParentContainer = $link.closest('.photoswipe-container, .isotope-wrapper, .owl-carousel, .flickr_ul, .images');
                    var $links = $linksParentContainer.find(gallerySelectors);

                    //if no container only adding this link
                    if (!$links.length) {
                        $links.push($link);
                    }
                    var items = [];

                    var options = {
                        bgOpacity: 0.7,
                        showHideOpacity: true,
                        history: false,
                        shareEl: false,
                        index: 0
                    };
                    var gallery = $('.pswp')[0];
                    //building items array
                    var counter = 0;
                    var clonedClick = false;
                    var clonedRealIndex = 0;
                    $links.each(function (i) {
                        var $this = $(this);
                        //if cloned element (owl or flexslider thumbs) - continue
                        if ($this.closest('.clone, .cloned').length) {
                            if (($link[0] === $this[0])) {
                                clonedClick = true;
                                clonedRealIndex = parseInt($this.data('index'), 10);
                                options.index = clonedRealIndex;
                            }
                            return;
                        }
                        var item = {};
                        //start slide from clicked element
                        if (($link[0] === $this[0])) {
                            options.index = counter;
                        }

                        //video or image
                        if ($this.data('iframe')) {
                            //for wordpress - iframe tag is escaped
                            //item.html = $this.data('iframe').replace(/&amp/g, '&').replace(/$lt;/g, '<').replace(/&gt;/g, '>').replace(/$quot;/g, '"');
                            //for html - building iframe manually
                            //autoplay only if 1 iframe in gallery
                            var autoplay = ($links.length > 1) ? '' : '&autoplay=1';
                            item.html = '<div class="embed-responsive embed-responsive-16by9">';
                            // item.html += '<iframe class="embed-responsive-item" src="'+ $(this).data('iframe') + '?rel=0&autoplay=1'+ '"></iframe>';
                            item.html += '<iframe class="embed-responsive-item" src="' + $(this).data('iframe') + '?rel=0' + autoplay + '&enablejsapi=1&api=1"></iframe>';
                            item.html += '</div>';
                        } else {
                            item.src = $this.attr('href');
                            //default values
                            var width = 1170;
                            var height = 780;
                            //template data on A element
                            var data = $this.data();
                            //image data in Woo
                            var dataImage = $this.find('img').first().data();
                            if (data.width) {
                                width = data.width;
                            }
                            if (data.height) {
                                height = data.height;
                            }
                            if (typeof  dataImage !== 'undefined') {
                                if (dataImage.large_image_width) {
                                    width = dataImage.large_image_width;
                                }
                                if (dataImage.large_image_height) {
                                    height = dataImage.large_image_height;
                                }
                            }
                            item.w = width;
                            item.h = height;
                        }
                        items.push(item);
                        counter++;
                    });

                    var pswpGallery = new PhotoSwipe(gallery, PhotoSwipeUI_Default, items, options);
                    pswpGallery.init();

                    //pausing video on close and on slide change
                    pswpGallery.listen('afterChange', function () {
                        $(pswpGallery.container).find('iframe').each(function () {
                            //"method":"pause" - form Vimeo, other - for YouTube
                            $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', '*')
                        });
                    });
                    pswpGallery.listen('close', function () {
                        $(pswpGallery.container).find('iframe').each(function () {
                            //"method":"pause" - form Vimeo, other - for YouTube
                            $(this)[0].contentWindow.postMessage('{"method":"pause","event":"command","func":"pauseVideo","args":""}', '*')
                        });
                    });

                });
            }

        }
    }

//helper functions to init elements only when they appears in viewport (jQUery.appear plugin)
function initAnimateElement(self, index) {
	var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
	var animationDelay = !self.data('delay') ? 150 : self.data('delay');
	setTimeout(function(){
		self.addClass("animated " + animationClass);
	}, index * animationDelay);
}
function initCounter(self) {
	if (self.hasClass('counted')) {
		return;
	} else {
		self.countTo().addClass('counted');
	}
}
function initProgressbar(el) {
	el.progressbar({
		transition_delay: 300
	});
}
function initChart(el) {
	var data = el.data();
	var size = data.size ? data.size : 270;
	var line = data.line ? data.line : 20;
	var bgcolor = data.bgcolor ? data.bgcolor : '#ffffff';
	var trackcolor = data.trackcolor ? data.trackcolor : '#c14240';
	var speed = data.speed ? data.speed : 3000;

	el.easyPieChart({
		barColor: trackcolor,
		trackColor: bgcolor,
		scaleColor: false,
		scaleLength: false,
		lineCap: 'butt',
		lineWidth: line,
		size: size,
		rotate: 0,
		animate: speed,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
}

function initGoogleMap() {
	//Google Map script
	var $googleMaps = $('#map, .page_map');
	if ( $googleMaps.length ) {
		$googleMaps.each(function() {
			var $map = $(this);

			var lat;
			var lng;
			var map;

			//map styles. You can grab different styles on https://snazzymaps.com/

			//dark style
			//var styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#707070"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#be2026"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"hue":"#ff000a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"saturation":"-52"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

			// light style
            // var styles = [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#25434f"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}];

            // grey style
			var styles = [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ];

			//markers
			var $markers = $map.find('.marker');

			//map settings
			// var address = $markers.first().find('.marker-address').text() ? $markers.first().find('.marker-address').text() : 'london, baker street, 221b';
			var address = 'USA, 301 S Christopher Columbus Blvd, Philadelphia, PA 19106';
			var geocoder = new google.maps.Geocoder();


			var draggable = $map.data('draggable') ? $map.data('draggable') : false;
			var scrollwheel = $map.data('scrollwheel') ? $map.data('scrollwheel') : false;

			//type your address after "address="
			geocoder.geocode({
				address: address
			}, function(data){

				lat = data[0].geometry.location.lat();
				lng = data[0].geometry.location.lng();

				var center = new google.maps.LatLng(lat, lng);
				var settings = {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					zoom: 16,
					draggable: draggable,
					scrollwheel: scrollwheel,
					center: center,
					styles: styles
				};
				map = new google.maps.Map($map[0], settings);

				var infoWindows = [];

				$($markers).each(function(index) {

					var $marker = $(this);
					var markerTitle = $marker.find('.marker-title').text();

					//building info widnow HTML code
					var markerDescription = '';
					markerDescription += markerTitle ? '<h3 class="makret-title">' + markerTitle + '</h3>' : '';
					markerDescription += $marker.find('.marker-description').html() ? '<div class="marker-description">' + $marker.find('.marker-description').html() + '</div>' : '';
					if(markerDescription) {
						markerDescription = '<div class="map_marker_description">' + markerDescription + '</div>';
					}

					geocoder.geocode({
						address: $marker.find('.marker-address').text()
					}, function(data){
						var iconSrc = $marker.find('.marker-icon').attr('src');

						var lat = data[0].geometry.location.lat();
						var lng = data[0].geometry.location.lng();

						var center = new google.maps.LatLng(lat, lng);

						var marker = new google.maps.Marker({
							position: center,
							title: markerTitle,
							map: map,
							icon: iconSrc
						});

						var infowindow = new google.maps.InfoWindow({
							content: markerDescription
						});

						infoWindows.push(infowindow);

						google.maps.event.addListener(marker, 'click', function() {
							for (var i=0;i<infoWindows.length;i++) {
								infoWindows[i].close();
							}
							infowindow.open(map,marker);
						});
					});
				});
			});
		}); //each Google map
	}//google map length
}

if ($('#map, .page_map').length) {
	window.templateInitGoogleMap = initGoogleMap;
}

//function that initiating template plugins on window.load event
function documentReadyInit() {
	////////////
	//mainmenu//
	////////////
	if ($().scrollbar) {
		$('[class*="scrollbar-"]').scrollbar();
	}

    if ( /mac/i.test(navigator.platform) && /firefox/i.test(navigator.userAgent) ) {
        if (jQuery().scrollbar) {
            jQuery('[class*="scrollbar-"]').addClass('scroll-content').wrap('<div class="scroll-wrapper firefox-on-macos"></div>');
        }
    }
	if ($().superfish) {
		$('ul.sf-menu').superfish({
			popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
			delay:       700,
			animation:   {opacity:'show', marginTop: 0},
			animationOut: {opacity: 'hide',  marginTop: 5},
			speed:       200,
			speedOut:    200,
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true,
			onInit: function () {
				var $thisMenu = $(this);
				$thisMenu.find('.sf-with-ul').after('<span class="sf-menu-item-mobile-toggler"/>');
				$thisMenu.find('.sf-menu-item-mobile-toggler').on('click', function (e) {
					var $parentLi = $(this).parent();
					if($parentLi.hasClass('sfHover')) {
						$parentLi.superfish('hide');
					} else {
						$parentLi.superfish('show');
					}
				});
			}

		});
		$('ul.sf-menu-side').superfish({
			popUpSelector: 'ul:not(.mega-menu ul), .mega-menu ',
			delay:       500,
			animation:   {opacity:'show', height: 100 +'%'},
			animationOut: {opacity: 'hide',  height: 0},
			speed:       400,
			speedOut:    300,
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true
		});
	}


	//toggle mobile menu
	$('.page_header .toggle_menu, .page_toplogo .toggle_menu').on('click', function(){
        $('.page_header .toggle_menu, .page_toplogo .toggle_menu')
			.toggleClass('mobile-active')
			.closest('.page_header')
			.toggleClass('mobile-active')
			.end()
			.closest('.page_toplogo')
			.next()
			.find('.page_header')
			.toggleClass('mobile-active');
	});

	$('.sf-menu a').on('click', function(){
		var $this = $(this);
		//If this is a local link or item with sumbenu - not toggling menu
		if (($this.hasClass('sf-with-ul')) || !($this.attr('href').charAt(0) === '#')) {
			return;
		}
		$this
			.closest('.page_header')
			.toggleClass('mobile-active')
			.find('.toggle_menu')
			.toggleClass('mobile-active');
	});

	//side header processing
	var $sideHeader = $('.page_header_side');
	// toggle sub-menus visibility on menu-click
	$('ul.menu-click').find('li').each(function(){
		var $thisLi = $(this);
		//toggle submenu only for menu items with submenu
		if ($thisLi.find('ul').length)  {
			$thisLi
				.append('<span class="toggle_submenu color-darkgrey"></span>')
				//adding anchor
				.find('.toggle_submenu, > a')
				.on('click', function(e) {
					var $thisSpanOrA = $(this);
					//if this is a link and it is already opened - going to link
					if (($thisSpanOrA.attr('href') === '#') || !($thisSpanOrA.parent().hasClass('active-submenu'))) {
						e.preventDefault();
					}
					if ($thisSpanOrA.parent().hasClass('active-submenu')) {
						$thisSpanOrA.parent().removeClass('active-submenu');
						return;
					}
					$thisLi.addClass('active-submenu').siblings().removeClass('active-submenu');
				});
		} //eof sumbenu check
	});
	if ($sideHeader.length) {
		$('.toggle_menu_side').on('click', function(){
			var $thisToggler = $(this);
			$thisToggler.toggleClass('active');
			if ($thisToggler.hasClass('header-slide')) {
				$sideHeader.toggleClass('active-slide-side-header');
			} else {
				if($thisToggler.parent().hasClass('header_side_right')) {
					$body.toggleClass('active-side-header slide-right');
				} else {
					$body.toggleClass('active-side-header');
				}
				$body.parent().toggleClass('html-active-push-header');
			}
			//fixing mega menu and aside affix on toggling side sticked header
			if($thisToggler.closest('.header_side_sticked').length) {
				initMegaMenu(600);
				var $affixAside = $('.affix-aside');
				if($affixAside.length) {
					$affixAside.removeClass("affix affix-bottom").addClass("affix-top").css({"width": "", "left": ""}).trigger('affix-top.bs.affix');
					setTimeout(function () {
						$affixAside.removeClass("affix affix-bottom").addClass("affix-top").css({"width": "", "left": ""}).trigger('affix-top.bs.affix');
					}, 10);
				}
			}
		});
		//hidding side header on click outside header
		$body.on('mousedown touchstart', function( e ) {
			if ( !($(e.target).closest('.page_header_side').length) && !($sideHeader.hasClass('header_side_sticked')) ) {
				$sideHeader.removeClass('active-slide-side-header');
				$body.removeClass('active-side-header slide-right');
                $body.parent().removeClass('html-active-push-header');
				var $toggler = $('.toggle_menu_side');
				if(($toggler).hasClass('active')) {
					$toggler.removeClass('active');
				}
			}
		});
	} //sideHeader check

	//1 and 2/3/4th level offscreen fix
	var MainWindowWidth = $window.width();
	$window.on('resize', function(){
		MainWindowWidth = $(window).width();
	});
	//2/3/4 levels
	$('.top-nav .sf-menu').on('mouseover', 'ul li', function(){
		// $('.mainmenu').on('mouseover', 'ul li', function(){
		if(MainWindowWidth > 991) {
			var $this = $(this);
			// checks if third level menu exist
			var subMenuExist = $this.find('ul').length;
			if( subMenuExist > 0){
				var subMenuWidth = $this.find('ul, div').first().width();
				var subMenuOffset = $this.find('ul, div').first().parent().offset().left + subMenuWidth;
				// if sub menu is off screen, give new position
				if((subMenuOffset + subMenuWidth) > MainWindowWidth){
					var newSubMenuPosition = subMenuWidth + 0;
					$this.find('ul, div').first().css({
						left: -newSubMenuPosition,
					});
				} else {
					$this.find('ul, div').first().css({
						left: '100%',
					});
				}
			}
		}
		//1st level
	}).on('mouseover', '> li', function(){
		if(MainWindowWidth > 991) {
			var $this = $(this);
			var subMenuExist = $this.find('ul').length;
			if( subMenuExist > 0){
				var subMenuWidth = $this.find('ul').width();
				var subMenuOffset = $this.find('ul').parent().offset().left;
				// if sub menu is off screen, give new position
				if((subMenuOffset + subMenuWidth) > MainWindowWidth){
					var newSubMenuPosition = MainWindowWidth - (subMenuOffset + subMenuWidth);
					$this.find('ul').first().css({
						left: newSubMenuPosition,
					});
				}
			}
		}
	});

	/////////////////////////////////////////
	//single page localscroll and scrollspy//
	/////////////////////////////////////////
	var navHeight = $('.page_header').outerHeight(true);
	//if sidebar nav exists - binding to it. Else - to main horizontal nav
	if ($('.mainmenu_side_wrapper').length) {
		$body.scrollspy({
			target: '.mainmenu_side_wrapper',
			offset: navHeight
		});
	} else if ($('.top-nav').length) {
		$body.scrollspy({
			target: '.top-nav',
			offset: navHeight
		})
	}
	if ($().localScroll) {
		$('.top-nav > ul, .mainmenu_side_wrapper > ul, #land,  .comments-link').localScroll({
			duration:900,
			easing:'easeInOutQuart',
			offset: -navHeight+160
		});
	}

	//background image teaser and sections with half image bg
	//put this before prettyPhoto init because image may be wrapped in prettyPhoto link
	$(".bg_teaser, .cover-image").each(function(){
		var $element = $(this);
		var $image = $element.find("img").first();
		if (!$image.length) {
			$image = $element.parent().find("img").first();
		}
		if (!$image.length) {
			return;
		}
		var imagePath = $image.attr("src");
		$element.css("background-image", "url(" + imagePath + ")");
		var $imageParent = $image.parent();
		//if image inside link - adding this link, removing gallery to preserve duplicating gallery items
		if ($imageParent.is('a')) {
			$element.prepend($image.parent().clone().html(''));
			$imageParent.attr('data-gal', '');
		}
	});

	//video images preview - from WP
	$('.embed-placeholder').each(function(){
		$(this).on('click', function(e) {
			var $thisLink = $(this);
			// if prettyPhoto popup with YouTube - return
			if ($thisLink.attr('data-gal')) {
				return;
			}
			e.preventDefault();
			if ($thisLink.attr('href') === '' || $thisLink.attr('href') === '#') {
				$thisLink.replaceWith($thisLink.data('iframe').replace(/&amp/g, '&').replace(/$lt;/g, '<').replace(/&gt;/g, '>').replace(/$quot;/g, '"')).trigger('click');
			} else {
				$thisLink.replaceWith('<iframe class="embed-responsive-item" src="'+ $thisLink.attr('href') + '?rel=0&autoplay=1'+ '"></iframe>');
			}
		});
	});

	//toTop
	if ($().UItoTop) {
		$().UItoTop({ easingType: 'easeInOutQuart' });
	}

	//parallax
	if ($().parallax) {
		$('.s-parallax').parallax("50%", 0.01);
	}

	//prettyPhoto
	if ($().prettyPhoto) {
		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			hook: 'data-gal',
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
		});
	}
	initPhotoSwipe();

	////////////////////////////////////////
	//init Bootstrap JS components//
	////////////////////////////////////////
	//adding .form-control class for search widgets
	$('[type="search"]').addClass('form-control');


	//bootstrap carousel
	if ($().carousel) {
		$('.carousel').carousel();
	}
	//bootstrap tab - show first tab
	$('.nav-tabs').each(function() {
		$(this).find('a').first().tab('show');
	});
	//video in bootstrap tabs
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var iframe = $(e.relatedTarget.hash).find('iframe');
		var src = iframe.attr('src');
		iframe.attr('src', '');
		iframe.attr('src', src);
	});

	$('.tab-content').each(function() {
		$(this).find('.tab-pane').first().addClass('fade in');
	});
	//bootstrap collapse - show first tab
	$('.panel-group').each(function() {
		$(this).find('a').first().filter('.collapsed').trigger('click');
	});
	//tooltip
	if ($().tooltip) {
		$('[data-toggle="tooltip"]').tooltip();
	}

	//comingsoon counter
	if ($().countdown) {
		var $counter = $('#comingsoon-countdown');
		//today date plus month for demo purpose
		var date = ($counter.data('date') !== 'undefined') ? $counter.data('date') : false;
		if(date) {
			date = new Date(date);
		} else {
			date = new Date();
			date.setMonth(date.getMonth()+1);
		}
		$counter.countdown({until: date});
	}

	/////////////////////////////////////////////////
	//PHP widgets - contact form, search, MailChimp//
	/////////////////////////////////////////////////

	//contact form processing
	$('form.contact-form').on('submit', function( e ){
		e.preventDefault();
		var $form = $(this);
		$($form).find('.contact-form-respond').remove();

		//checking on empty values
		$($form).find('[aria-required="true"], [required]').each(function(index) {
			var $thisRequired = $(this);
			if (!$thisRequired.val().length) {
				$thisRequired
					.addClass('invalid')
					.on('focus', function(){
						$thisRequired
							.removeClass('invalid');
					});
			}
		});
		//if one of form fields is empty - exit
		if ($form.find('[aria-required="true"], [required]').hasClass('invalid')) {
			return;
		}

		//sending form data to PHP server if fields are not empty
		var request = $form.serialize();
		var ajax = jQuery.post( "contact-form.php", request )
			.done(function( data ) {
				$($form).find('[type="submit"]').attr('disabled', false).parent().append('<div class="contact-form-respond color-main mt-20">'+data+'</div>');
				//cleaning form
				var $formErrors = $form.find('.form-errors');
				if ( !$formErrors.length ) {
					$form[0].reset();
				}
			})
			.fail(function( data ) {
				$($form).find('[type="submit"]').attr('disabled', false).blur().parent().append('<div class="contact-form-respond color-main mt-20">Mail cannot be sent. You need PHP server to send mail.</div>');
			})
	});


	//search modal
	$(".search_modal_button").on('click', function(e){
		e.preventDefault();
		$('#search_modal').modal('show').find('input').first().focus();
	});
	//search form processing - not need in WP
	$('form.searchform, form.search-form').on('submit', function( e ){

		e.preventDefault();
		var $form = $(this);
		var $searchModal = $('#search_modal');
		$searchModal.find('div.searchform-respond').remove();

		//checking on empty values
		$($form).find('[type="text"], [type="search"]').each(function(index) {
			var $thisField = $(this);
			if (!$thisField.val().length) {
				$thisField
					.addClass('invalid')
					.on('focus', function(){
						$thisField.removeClass('invalid')
					});
			}
		});
		//if one of form fields is empty - exit
		if ($form.find('[type="text"]').hasClass('invalid')) {
			return;
		}

		$searchModal.modal('show');
		//sending form data to PHP server if fields are not empty
		var request = $form.serialize();
		var ajax = jQuery.post( "search.php", request )
			.done(function( data ) {
				$searchModal.append('<div class="searchform-respond">'+data+'</div>');
			})
			.fail(function( data ) {
				$searchModal.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>');

			})
	});

	//MailChimp subscribe form processing
	$('.signup').on('submit', function( e ) {
		e.preventDefault();
		var $form = $(this);
		// update user interface
		$form.find('.response').html('Adding email address...');
		// Prepare query string and send AJAX request
		jQuery.ajax({
			url: 'mailchimp/store-address.php',
			data: 'ajax=true&email=' + escape($form.find('.mailchimp_email').val()),
			success: function(msg) {
				$form.find('.response').html(msg);
			}
		});
	});

	//twitter
	if ($().tweet) {
		$('.twitter').tweet({
			modpath: "./twitter/",
			count: 2,
			avatar_size: 48,
			loading_text: 'loading twitter feed...',
			join_text: 'auto',
			username: 'michaeljackson',
			template: "{avatar}<div class=\"tweet_right\">{join}<span class=\"tweet_text links-maincolor\">{tweet_text}</span>{time}</div>"
		});
	}

	// init timetable
	var $timetable = $('#timetable');
	if ($timetable.length) {
		// bind filter click
		$('#timetable_filter').on( 'click', 'a', function( e ) {
			e.preventDefault();
			e.stopPropagation();
			var $thisA = $(this);
			if ( $thisA.hasClass('selected') ) {
				// return false;
				return;
			}
			var selector = $thisA.attr('data-filter');
			$timetable
				.find('tbody td')
				.removeClass('current')
				.end()
				.find(selector)
				.closest('td')
				.addClass('current');
			$thisA.closest('ul').find('a').removeClass('selected');
			$thisA.addClass('selected');
		});
	}

}

//function that initiating template plugins on window.load event
function windowLoadInit() {

    /////////
    //SHOP///
    /////////
    $('#toggle_shop_view').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('grid-view');
        $('#products').toggleClass('grid-view list-view');
    });


    //checkout collapse forms - only for HTML
    $('a.showlogin, a.showcoupon').on('click', function (e) {
        e.preventDefault();
        var $form = $(this).parent().next();

        if ($form.css('display') === 'none') {
            $form.show(150);
        } else {
            $form.hide(150);
        }
    });


    //remove product from cart - only for HTML
    $('a.remove').on('click', function (e) {
        e.preventDefault();
        $(this).closest('tr, .woocommerce-mini-cart-item').remove();
    });

	//////////////
	//flexslider//
	//////////////
	if ($().flexslider) {
		var $introSlider = $(".page_slider .flexslider");
		$introSlider.each(function(index){
			var $currentSlider = $(this);
			var data = $currentSlider.data();
			var nav = (data.nav !== 'undefined') ? data.nav : true;
			var dots = (data.dots !== 'undefined') ? data.dots : true;
			var speed = (data.speed !== 'undefined') ? data.speed : 7000;

			$currentSlider.flexslider({
				animation: "fade",
				pauseOnHover: true, 
				useCSS: true,
				controlNav: dots,   
				directionNav: nav,
				prevText: "",
				nextText: "",
				smoothHeight: false,
				slideshowSpeed:speed,
				animationSpeed:600,
				start: function( slider ) {
					slider.find('.intro_layers').children().css({'visibility': 'hidden'});
					slider.find('.flex-active-slide .intro_layers').children().each(function(index){
						var self = $(this);
						var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
						setTimeout(function(){
							self.addClass("animated "+animationClass);
						}, index*250);
					});
				},
				after :function( slider ){
					slider.find('.flex-active-slide .intro_layers').children().each(function(index){
						var self = $(this);
						var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
						setTimeout(function(){
							self.addClass("animated "+animationClass);
						}, index*250);
					});
				},
				end :function( slider ){
					slider.find('.intro_layers').children().each(function() {
						var self = $(this);
						var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
						self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
							// $(this).attr('class', '');
					});
				},

			})
			//wrapping nav with container - uncomment if need
			// .find('.flex-control-nav')
			// .wrap('<div class="container nav-container"/>')
		}); //.page_slider flex slider

		$(".flexslider").each(function(index){
			var $currentSlider = $(this);
			//exit if intro slider already activated 
			if ($currentSlider.find('.flex-active-slide').length) {
				return;
			}
			$currentSlider.flexslider({
				animation: "fade",
				useCSS: true,
				controlNav: true,   
				directionNav: false,
				prevText: "",
				nextText: "",
				smoothHeight: false,
				slideshowSpeed:5000,
				animationSpeed:800,
			})
		});
	}

	////////////////
	//owl carousel//
	////////////////
	if ($().owlCarousel) {
		$('.owl-carousel').each(function() {
			var $carousel = $(this);
			$carousel.find('> *').each(function (i) {
				$(this).attr('data-index', i);
			});
			var data = $carousel.data();

			var loop = data.loop ? data.loop : false,
				margin = (data.margin || data.margin === 0) ? data.margin : 30,
				nav = data.nav ? data.nav : false,
				navPrev = data.navPrev ? data.navPrev : '<i class="fa fa-chevron-left">',
				navNext = data.navNext ? data.navNext : '<i class="fa fa-chevron-right">',
				dots = data.dots ? data.dots : false,
				themeClass = data.themeclass ? data.themeclass : 'owl-theme',
				center = data.center ? data.center : false,
				items = data.items ? data.items : 4,
				autoplay = data.autoplay ? data.autoplay : false,
				responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
				responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
				responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
				responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
				draggable = (data.draggable === false) ? data.draggable : true,
				syncedClass = (data.syncedClass) ? data.syncedClass : false,
				filters = data.filters ? data.filters : false;

			if (filters) {
				$carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
				$(filters).on('click', 'a', function( e ) {
					//processing filter link
					e.preventDefault();
					if ($(this).hasClass('selected')) {
						return;
					}
					var filterValue = $( this ).attr('data-filter');
					$(this).siblings().removeClass('selected active');
					$(this).addClass('selected active');
					
					//removing old items
					for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
						$carousel.trigger('remove.owl.carousel', [1]);
					};

					//adding new items
					var $filteredItems = $($carousel.next().find(' > ' +filterValue).clone());
					$filteredItems.each(function() {
						$carousel.trigger('add.owl.carousel', $(this));
						$(this).addClass('scaleAppear');
					});
					
					$carousel.trigger('refresh.owl.carousel');

					//reinit prettyPhoto in filtered OWL carousel
					if ($().prettyPhoto) {
						$carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
							hook: 'data-gal',
							theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
						});
					}
				});
				
			} //filters

			$carousel.owlCarousel({
				loop: loop,
				margin: margin,
				nav: nav,
				autoplay: autoplay,
				dots: dots,
				themeClass: themeClass,
				center: center,
				navText: [navPrev,navNext],
				mouseDrag: draggable,
				touchDrag: draggable,
				items: items,
				responsive: {
					0:{
						items: responsiveXs
					},
					767:{
						items: responsiveSm
					},
					992:{
						items: responsiveMd
					},
					1200:{
						items: responsiveLg
					}
				},
			})
			.addClass(themeClass);
			if(center) {
				$carousel.addClass('owl-center');
			}

			$window.on('resize', function() {
				$carousel.trigger('refresh.owl.carousel');
			});

			//topline two synced carousels
			if($carousel.hasClass('owl-news-slider-items') && syncedClass) {
				$carousel.on('changed.owl.carousel', function(e) {
					var indexTo = loop ? e.item.index+1 : e.item.index;
					$(syncedClass).trigger('to.owl.carousel', [indexTo]);
				})
			}


		});


	} //eof owl-carousel
	
	// Custom nav of owl carousel
	var $carouseSection = $('.carousel-section-alt');
    $carouseSection.find('.owl-custom-nav .owl-prev').on('click', function () {
        $carouseSection.find('.owl-carousel').trigger('prev.owl');
    });
    $carouseSection.find('.owl-custom-nav .owl-next').on('click', function () {
        $carouseSection.find('.owl-carousel').trigger('next.owl');
    });

	////////////////////
	//header processing/
	////////////////////
	//stick header to top
	//wrap header with div for smooth sticking
	var $header = $('.page_header').first();
	var boxed = $header.closest('.boxed').length;
	var headerSticked = $('.header_side_sticked').length;
	if ($header.length) {
		//hiding main menu 1st levele elements that do not fit width
		menuHideExtraElements();
		//mega menu
		initMegaMenu(1);
		//wrap header for smooth stick and unstick
		var headerHeight = $header.outerHeight();
		$header.wrap('<div class="page_header_wrapper"></div>');
		var $headerWrapper = $('.page_header_wrapper');
		if (!boxed) {
			$headerWrapper.css({height: headerHeight});
		}

		//headerWrapper background - same as header
		if( $header.hasClass('ls') ) {
			$headerWrapper.addClass('ls');
			if ( $header.hasClass('ms') ) {
				$headerWrapper.addClass('ms');
			}
		} else if ( $header.hasClass('ds') ) {
			$headerWrapper.addClass('ds');
			if ( $header.hasClass('bs') ) {
				$headerWrapper.addClass('bs');
			}
			if ( $header.hasClass('ms') ) {
				$headerWrapper.addClass('ms');
			}

		} else if ( $header.hasClass('cs') ) {
			$headerWrapper.addClass('cs');
			if ( $header.hasClass('cs2') ) {
				$headerWrapper.addClass('cs2');
			}
			if ( $header.hasClass('cs3') ) {
				$headerWrapper.addClass('cs3');
			}
		} else if ( $header.hasClass('gradient-background') ) {
			$headerWrapper.addClass('gradient-background');
		}

		//get offset
		var headerOffset = 0;
		//check for sticked template headers
		if (!boxed && !($headerWrapper.css('position') === 'fixed')) {
			headerOffset = $header.offset().top;
		}

		//for boxed layout - show or hide main menu elements if width has been changed on affix
		$header.on('affixed-top.bs.affix affixed.bs.affix affixed-bottom.bs.affix', function ( e ) {
			if( $header.hasClass('affix-top') ) {
				$headerWrapper.removeClass('affix-wrapper affix-bottom-wrapper').addClass('affix-top-wrapper');
				//cs to ls when affixed
				// if($header.hasClass('cs')) {
				// 	$header.removeClass('ls');
				// }
			} else if ( $header.hasClass('affix') ) {
				$headerWrapper.removeClass('affix-top-wrapper affix-bottom-wrapper').addClass('affix-wrapper');
				//cs to ls when affixed
				// if($header.hasClass('cs')) {
				// 	$header.addClass('ls');
				// }
			} else if ( $header.hasClass('affix-bottom') ) {
				$headerWrapper.removeClass('affix-wrapper affix-top-wrapper').addClass('affix-bottom-wrapper');
			} else {
				$headerWrapper.removeClass('affix-wrapper affix-top-wrapper affix-bottom-wrapper');
			}

			//calling this functions disable menu items animation when going from affix to affix-top with centered logo inside
			//in boxed layouts header is always fixed
			if (boxed && !($header.css('position') === 'fixed')) {
				menuHideExtraElements();
				initMegaMenu(1);
			}
			if(headerSticked) {
				initMegaMenu(1);
			}

		});

		//if header has different height on afixed and affixed-top positions - correcting wrapper height
		$header.on('affixed-top.bs.affix', function () {
			// $headerWrapper.css({height: $header.outerHeight()});
		});

		//fixing auto affix bug - toggle affix on click when page is at the top
		$header.on('affix.bs.affix', function(){
			if( !$window.scrollTop() ) return false;
		});

		$header.affix({
			offset: {
				top: headerOffset,
				bottom: -10
			}
		});
	}

	//aside affix
	initAffixSidebar();

	$body.scrollspy('refresh');

	//appear plugin is used to elements animation, counter, pieChart, bootstrap progressbar
	if ($().appear) {
		//animation to elements on scroll
		var $animate = $('.animate');
		$animate.appear();

		$animate.filter(':appeared').each(function(index){
			initAnimateElement($(this), index);
		});

		$body.on('appear', '.animate', function(e, $affected ) {
			$($affected).each(function(index){
				initAnimateElement($(this), index);
			});
		});

		//counters init on scroll
		if ($().countTo) {
			var $counter = $('.counter');
			$counter.appear();
			
			$counter.filter(':appeared').each(function(){
				initCounter($(this));
			});
			$body.on('appear', '.counter', function(e, $affected ) {
				$($affected).each(function(){
					initCounter($(this));
				});
			});
		}
	
		//bootstrap animated progressbar
		if ($().progressbar) {
			var $progressbar = $('.progress .progress-bar');
			$progressbar.appear();

			$progressbar.filter(':appeared').each(function(){
				initProgressbar($(this));
			});
			$body.on('appear', '.progress .progress-bar', function(e, $affected ) {
				$($affected).each(function(){
					initProgressbar($(this));
				});
			});
			//animate progress bar inside bootstrap tab
			$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
				initProgressbar($($(e.target).attr('href')).find('.progress .progress-bar'));
			});
			//animate progress bar inside bootstrap dropdown
			$('.dropdown').on('shown.bs.dropdown', function(e) {
				initProgressbar($(this).find('.progress .progress-bar'));
			});
		}

		//circle progress bar
		if ($().easyPieChart) {
			var $chart = $('.chart');

			$chart.appear();

			$chart.filter(':appeared').each(function(){
				initChart($(this));
			});
			$body.on('appear', '.chart', function(e, $affected ) {
				$($affected).each(function(){
					initChart($(this));
				});
			});

		}

	} //appear check

	//Flickr widget
	// use http://idgettr.com/ to find your ID
	if ($().jflickrfeed) {
		var $flickr = $("#flickr, .flickr_ul");
		if ( $flickr.length ) {
			if ( ! ( $flickr.hasClass('flickr_loaded') ) ) {
				$flickr.jflickrfeed({
					flickrbase: "http://api.flickr.com/services/feeds/",
					limit: 6,
					qstrings: {
						id: "131791558@N04"
					},
					itemTemplate: '<a href="{{image_b}}" class="photoswipe-link"><li><img alt="{{title}}" src="{{image_m}}" /></li></a>'
				//complete
				}, function(data) {
					initPhotoSwipe();
				}).addClass('flickr_loaded');
			}
		}
	}

    // Instagram widget
    if (jQuery().spectragram) {
        var Spectra = {
            instaToken: '3905738328.5104743.42b91d10580042e3aeeab90c926666a4',

            init: function () {
                jQuery.fn.spectragram.accessData = {
                    accessToken: this.instaToken
                };

                //available methods: getUserFeed, getRecentTagged
                jQuery('.instafeed').each(function () {
                    var $this = jQuery(this);
                    if ($this.find('img').length) {
                        return;
                    }
                    $this.spectragram('getUserFeed', {
                        max: 6,
                        wrapEachWith: '<div class="photo" />'
                    });
                });

            }
        }

        Spectra.init();
    }

	// init Isotope
	$('.isotope-wrapper').each(function(index) {
		var $container = $(this);
		var layoutMode = ($container.hasClass('masonry-layout')) ? 'masonry' : 'fitRows';
		var columnWidth = ($container.children('.col-md-4').length) ? '.col-md-4' : false;
		$container.isotope({
			percentPosition: true,
			layoutMode: layoutMode,
			masonry: {
				//TODO for big first element in grid - giving smaller element to use as grid
				// columnWidth: '.isotope-wrapper > .col-md-4'
				columnWidth: columnWidth
			}
		});

		var $filters = $container.attr('data-filters') ? $($container.attr('data-filters')) : $container.prev().find('.filters');
		// bind filter click
		if ($filters.length) {
			$filters.on( 'click', 'a', function( e ) {
				e.preventDefault();
				var $thisA = $(this);
				var filterValue = $thisA.attr('data-filter');
				$container.isotope({ filter: filterValue });
				$thisA.siblings().removeClass('selected active');
				$thisA.addClass('selected active');
			});
			//for works on select
			$filters.on( 'change', 'select', function( e ) {
				e.preventDefault();
				var filterValue = $(this).val();
				$container.isotope({ filter: filterValue });
			});
		}
	});


	/////////
	//SHOP///
	/////////
    //product counter
		jQuery('.plus, .minus').on('click', function (e) {
			var numberField = jQuery(this).parent().find('[type="number"]');
			var currentVal = numberField.val();
			var sign = jQuery(this).val();
			if (sign === '-') {
				if (currentVal > 1) {
					numberField.val(parseFloat(currentVal) - 1);
				}
			} else {
				numberField.val(parseFloat(currentVal) + 1);
			}
		});

		$('#toggle_shop_view').on('click', function( e ) {
			e.preventDefault();
			$(this).toggleClass('grid-view');
			$('#products').toggleClass('grid-view list-view');
		});


		//checkout collapse forms - only for HTML
		$('a.showlogin, a.showcoupon').on('click', function( e ) {
			e.preventDefault();
			var $form = $(this).parent().next();

			if($form.css('display') === 'none') {
				$form.show(150);
			} else {
				$form.hide(150);
			}
		});


		//remove product from cart - only for HTML
		$('a.remove').on('click', function( e ) {
			e.preventDefault();
			$(this).closest('tr, .media').remove();
		});


		//flexslider - only for HTML
		$('.images').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
			selector: "figure > div",
			directionNav: false,
		});

		//flexslider - only for Models
		$('.faces-section .model-images').flexslider({
			animation: "slide",
			controlNav: false,
            selector: ".model-figure > div",
			directionNav: true,
            sync: 'model-slider-thumbs',
            touch: true,
            // customDirectionNav: jQuery(".faces-section .custom-navigation a"),
		});
		$('.faces-section .model-slider-thumbs').flexslider({
			animation: "slide",
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
			controlNav: false,
            directionNav: true,
			animationLoop: true,
            itemMargin: 27,
			itemWidth: 95,
			asNavFor: '.model-images',
			touch: true,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
		});

		function getGridSize() {
			return (window.innerWidth < 1200) ? 3 : 4;
		}

		//mousewheel
		$('.faces-section .model-slider-thumbs').on('mousewheel', function (e) {
			var $carousel = $(this);
			if (e.originalEvent.wheelDelta > 0) {
				$carousel.find('.flex-next').trigger('click');
			} else {
				$carousel.find( '.flex-prev' ).trigger('click');
			}
			e.preventDefault();
			e.stopPropagation();
		});


		//flexslider - only for Models
		$('.model-images').flexslider({
			animation: "slide",
			controlNav: false,
			selector: ".model-figure > div",
			directionNav: false,
			sync: 'model-slider-thumbs',
            touch: true,
		});
		$('.model-slider-thumbs').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			slideshow: false,
            minItems: 1, // use function to pull in initial value
            maxItems: 4, // use function to pull in initial value
			itemWidth: 95,
			itemMargin: 20,
			asNavFor: '.model-images',
			customDirectionNav: jQuery(".custom-navigation a"),
			touch: true,
		});

    function getGridSizeModel() {
        return (window.innerWidth > 768) ? 4 : (window.innerWidth > 468 && window.innerWidth < 768) ? 3 : 2;
    }

        //Video

        function videoAutoPlay() {
            if ( document.getElementById('myVideo') ) {
                var $videobg = document.getElementById('myVideo');

                var $src = $videobg.querySelector('source').dataset.src;
                var $time = $videobg.querySelector('source').dataset.time;

                if ( $(window).width() > 1200 ) {
                    if ( $videobg.paused ){
                        $videobg.querySelector('source').src = $src;
                        $videobg.load();
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();

                        $videobg.addEventListener('timeupdate', function () {
                            if ( this.currentTime >= $time ) {
                                $videobg.currentTime = 0;
                                $videobg.volume = 0;
                                $videobg.play();
                            }
                        });
                    }

                }

                $('.slides').on('classChanged','li:first', function () {
                    if ( $(window).width() > 1200 ) {
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();
                        $videobg.addEventListener('timeupdate', function () {
                            if ( this.currentTime >= 26 ) {
                                $videobg.currentTime = 0;
                                $videobg.volume = 0;
                                $videobg.play();
                            }
                        })
                    }
                });
            }
        }

		if ( document.getElementById('myVideo') ) {
			var $videobg = document.getElementById('myVideo');

            var $src = $videobg.querySelector('source').dataset.src;
            var $time = $videobg.querySelector('source').dataset.time;

			if ( $(window).width() > 1200 ) {
			    if ( $videobg.paused ){
                    $videobg.querySelector('source').src = $src;
                    $videobg.load();
                    $videobg.currentTime = 0;
                    $videobg.volume = 0;
                    $videobg.play();

                    $videobg.addEventListener('timeupdate', function () {
                        if ( this.currentTime >= $time ) {
                            $videobg.currentTime = 0;
                            $videobg.volume = 0;
                            $videobg.play();
                        }
                    });
                }

            }

			$('.slides').on('classChanged','li:first', function () {
                if ( $(window).width() > 1200 ) {
                    $videobg.currentTime = 0;
                    $videobg.volume = 0;
                    $videobg.play();
                    $videobg.addEventListener('timeupdate', function () {
                        if ( this.currentTime >= 26 ) {
                            $videobg.currentTime = 0;
                            $videobg.volume = 0;
                            $videobg.play();
                        }
                    })
                }
			});
		}

		(function () {
			var originalAddClassMethod = jQuery.fn.addClass;
			var originalRemoveClassMethod = jQuery.fn.removeClass;
			jQuery.fn.addClass = function () {
				var result = originalAddClassMethod.apply(this, arguments);
				jQuery(this).trigger('classChanged');
				return result;
			};
			jQuery.fn.removeClass = function () {
				var result = originalRemoveClassMethod.apply(this, arguments);
				jQuery(this).trigger('classChanged');
				return result;
			}
		})();

		//tabs - only for HTML
		$( '.wc-tab, .woocommerce-tabs .panel:not(.panel .panel)' ).hide();

		$('.wc-tabs li a, ul.tabs li a').on( 'click', function( e ) {
			e.preventDefault();
			var $tab          = $( this );
			var $tabs_wrapper = $tab.closest( '.wc-tabs-wrapper, .woocommerce-tabs' );
			var $tabs         = $tabs_wrapper.find( '.wc-tabs, ul.tabs' );

			$tabs.find( 'li' ).removeClass( 'active' );
			$tabs_wrapper.find( '.wc-tab, .panel:not(.panel .panel)' ).hide();

			$tab.closest( 'li' ).addClass( 'active' );
			$tabs_wrapper.find( $tab.attr( 'href' ) ).show();
		} );
		// Review link
		$('a.woocommerce-review-link').on( 'click', function() {
			$( '.reviews_tab a' ).trigger('click');
			return true;
		});

		//parsing URL hash
		var hash  = window.location.hash;
		var url   = window.location.href;
		var $tabs = $( '.wc-tabs, ul.tabs' ).first();

		if ( hash.toLowerCase().indexOf( 'comment-' ) >= 0 || hash === '#reviews' || hash === '#tab-reviews' ) {
			$tabs.find( 'li.reviews_tab a' ).trigger('click');
		} else if ( url.indexOf( 'comment-page-' ) > 0 || url.indexOf( 'cpage=' ) > 0 ) {
			$tabs.find( 'li.reviews_tab a' ).trigger('click');
		} else if ( hash === '#tab-additional_information' ) {
			$tabs.find( 'li.additional_information_tab a' ).trigger('click');
		} else {
			$tabs.find( 'li:first a' ).trigger('click');
		}


		//price filter - only for HTML
		if ($().slider) {
			var $rangeSlider = $(".slider-range-price");
			if ($rangeSlider.length) {
				var $priceMin = $(".slider_price_min");
				var $priceMax = $(".slider_price_max");
				$rangeSlider.slider({
					range: true,
					min: 0,
					max: 100000,
					values: [ 1500, 30000 ],
					slide: function( event, ui ) {
						$priceMin.val( ui.values[ 0 ] );
						$priceMax.val( ui.values[ 1 ] );
					}
				});
				$priceMin.val($rangeSlider.slider("values", 0));
				$priceMax.val($rangeSlider.slider("values", 1));
			}
		}


		//woocommerce related products, upsells products
		$('.related.products ul.products, .upsells.products ul.products, .cross-sells ul.products')
			.addClass('owl-carousel top-right-nav')
			.owlCarousel({
				loop: true,
				autoplay: true,
				margin: 30,
				nav: true,
				dots: false,
				items: 3,
				navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
				responsive: {
					0: {
						items: 1
					},
					767: {
						items: 2
					},
					992: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});

		//color filter
		$(".color-filters").find("a[data-background-color]").each(function() {
			$(this).css({"background-color" : $(this).data("background-color")});
		});
	////////////////
	// end of SHOP//
	////////////////


    //team-slider
    (function ($) {
        jQuery(document).ready(function () {

            //team-slider
            $('.team-slider-item span').on('mouseenter', function () {
                var $item = $(this).closest('.team-slider-item');
                $('.team-slider-item.active').removeClass('active');
                $item.addClass('active');
            });

        });
//end of IIFE function
    })(jQuery);



	//Unyson or other messages modal
	var $messagesModal = $('#messages_modal');
	if ($messagesModal.find('ul').length) {
		$messagesModal.modal('show');
	}

	//page preloader
	$(".preloaderimg").fadeOut(150);
	$(".preloader").fadeOut(150).delay(50, function(){
		$(this).remove();
	});
}//eof windowLoadInit

$(document).ready(function() {
	documentReadyInit();
	initGoogleMap();
});

$window.on('load', function(){
	windowLoadInit();
}); //end of "window load" event

$window.on('resize', function(){

	$body.scrollspy('refresh');

    //Video

    if ( document.getElementById('myVideo') ) {
        var $videobg = document.getElementById('myVideo');

        var $src = $videobg.querySelector('source').dataset.src;
        var $time = $videobg.querySelector('source').dataset.time;

        if ( $(window).width() > 1200 ) {

            if ( $videobg.paused ){
                $videobg.querySelector('source').src = $src;
                $videobg.load();
                $videobg.currentTime = 0;
                $videobg.volume = 0;
                $videobg.play();

                $videobg.addEventListener('timeupdate', function () {
                    if ( this.currentTime >= $time ) {
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();
                    }
                });
            }

        } else {
            if ( $videobg.querySelector('source').src !== '' ){
                $videobg.load();
                $videobg.querySelector('source').src = '';
            }
        }

        $('.slides').on('classChanged','li:first', function () {
            if ( $(window).width() > 1200 ) {
                $videobg.currentTime = 0;
                $videobg.volume = 0;
                $videobg.play();
                $videobg.addEventListener('timeupdate', function () {
                    if ( this.currentTime >= 26 ) {
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();
                    }
                })
            }
        });
    }

	//header processing
	menuHideExtraElements();
	initMegaMenu(1);
	var $header = $('.page_header').first();
		//checking document scrolling position
		if ($header.length && !$(document).scrollTop() && $header.first().data('bs.affix')) {
			$header.first().data('bs.affix').options.offset.top = $header.offset().top;
		}
	if (!$header.closest('.boxed').length) {
		var affixed = false;
		if($header.hasClass('affix')) {
			affixed = true;
			//animation duration
			$header.removeClass('affix');

			//TODO fix header wrapper height from small to large when page is scrolled (not top)
			setTimeout(function () {
				//editing header wrapper height for smooth stick and unstick
				$(".page_header_wrapper").css({height: $header.first().outerHeight()});
				$header.addClass('affix');
			}, 250);
		}

		if(!affixed) {
			//editing header wrapper height for smooth stick and unstick
			$(".page_header_wrapper").css({height: $header.first().outerHeight()});
		}
	}
	
});
//end of IIFE function
})(jQuery);