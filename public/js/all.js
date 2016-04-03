(function () {var ca;function da(a){var b=a.length;return 1===b?function(){return a(this)}:2===b?function(b){return a(this,b)}:3===b?function(b,d){return a(this,b,d)}:4===b?function(b,d,e){return a(this,b,d,e)}:function(){var b=Array.prototype.slice.call(arguments,0);b.unshift(this);return a.apply(null,b)}}
var f={cd:function(a){return a},W:function(){},Jc:function(){return!0},D:function(){return!1},ia:function(a){return function(){return!a.apply(this,arguments)}},c:function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b.concat(Array.prototype.slice.call(arguments,0)))}},ef:function(a,b){return a===b},Tc:function(){var a=arguments,b=a.length;return function(){var c,d=b;for(0<d--&&(c=a[d].apply(this,arguments));0<d--;)c=a[d].call(this,c);return c}},he:function(){var a=
arguments,b=a.length;return function(){for(var c=0;c<b;c++)if(!a[c].apply(this,arguments))return!1;return!0}},ug:function(){var a=arguments,b=a.length;return function(){for(var c=0;c<b;c++)if(a[c].apply(this,arguments))return!0;return!1}},Lf:function(a){return function(){return a}},w:function(a){return"function"===typeof a},ea:function(a){return null==a},F:da,Vc:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.prototype[c]=da(b[c]))}};function ea(a,b){return-1!==a.indexOf(b)}function fa(a){return a.length?a[a.length-1]:null}function ga(a){return Array.prototype.slice.call(a)}function ha(a,b){var c=-1;a.some(function(a,e){if(b(a))return c=e,!0});return c}
var h={contains:ea,tb:function(a,b){return a.filter(function(a){return!ea(b,a)})},gc:function(a,b,c){var d,e=a.length;if(e!==b.length)return!1;c=c||f.ef;for(d=0;d<e;d++)if(!c(a[d],b[d]))return!1;return!0},fd:function(a,b){return a.filter(function(a){return ea(b,a)})},w:function(a){return"[object Array]"===Object.prototype.toString.call(a)},m:fa,Y:ga,Ee:function(a,b){return a.reduce(function(a,d){return a.concat(b(d))},[])},zd:function(a,b){return a.reduce(function(a,d){var e=fa(a);e&&e.length<b?e.push(d):
a.push([d]);return a},[])},some:function(a,b){var c=ha(a,b);return-1===c?null:a[c]},Tb:ha,split:function(a,b){var c=ha(a,b),c=-1===c?a.length:c;return[a.slice(0,c),a.slice(c)]},unique:function(a){var b=[];a.forEach(function(a){-1===b.indexOf(a)&&b.push(a)});return b},Bg:function(a){for(var b=ga(arguments).slice(1),c=0;c<a.length&&a[c]&&b[c];c++)b[c].length=0,Array.prototype.splice.apply(b[c],[0,0].concat(a[c]))}};var ia=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};function ja(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c}function ka(a){var b=(new Date).getTime();a.df||(a.df=b);var c=b-a.df,b=Math.min(1,c/a.duration),c=a.Wf(b,c,0,1,a.duration);return a.interval(a.start+a.Sf*c,b)?1:b}
var la={step:ka,Df:function(a,b,c,d,e){var g={start:a,Sf:b-a,duration:d||1,interval:e||f.W,Wf:c||ja};(function m(){1>ka(g)&&ia(m)})();return g},Vf:function(a,b,c,d){return c+(d-c)*a},zh:ja,yh:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},requestAnimationFrame:ia};var ma=["\\u200B","\\u200C","\\u200D","\\uFEFF"],na=["\\u00A0","\\u202F"],oa="\\u0009 \\u000A \\u000B \\u000C \\u000D \\u0020 \\u0085 \\u00A0 \\u1680 \\u180E \\u2000 \\u2001 \\u2002 \\u2003 \\u2004 \\u2005 \\u2006 \\u2007 \\u2008 \\u2009 \\u200A \\u2028 \\u2029 \\u202F \\u205F \\u3000".split(" "),pa="A- Z a- z \u00aa \u00b5 \u00ba \u00c0- \u00d6 \u00d8- \u00f6 \u00f8- \u02c1 \u02c6- \u02d1 \u02e0- \u02e4 \u02ec \u02ee \u0370- \u0374 \u0376 \u0377 \u037a- \u037d \u0386 \u0388- \u038a \u038c \u038e- \u03a1 \u03a3- \u03f5 \u03f7- \u0481 \u048a- \u0525 \u0531- \u0556 \u0559 \u0561- \u0587 \u05d0- \u05ea \u05f0- \u05f2 \u0621- \u064a \u066e \u066f \u0671- \u06d3 \u06d5 \u06e5 \u06e6 \u06ee \u06ef \u06fa- \u06fc \u06ff \u0710 \u0712- \u072f \u074d- \u07a5 \u07b1 \u07ca- \u07ea \u07f4 \u07f5 \u07fa \u0800- \u0815 \u081a \u0824 \u0828 \u0904- \u0939 \u093d \u0950 \u0958- \u0961 \u0971 \u0972 \u0979- \u097f \u0985- \u098c \u098f \u0990 \u0993- \u09a8 \u09aa- \u09b0 \u09b2 \u09b6- \u09b9 \u09bd \u09ce \u09dc \u09dd \u09df- \u09e1 \u09f0 \u09f1 \u0a05- \u0a0a \u0a0f \u0a10 \u0a13- \u0a28 \u0a2a- \u0a30 \u0a32 \u0a33 \u0a35 \u0a36 \u0a38 \u0a39 \u0a59- \u0a5c \u0a5e \u0a72- \u0a74 \u0a85- \u0a8d \u0a8f- \u0a91 \u0a93- \u0aa8 \u0aaa- \u0ab0 \u0ab2 \u0ab3 \u0ab5- \u0ab9 \u0abd \u0ad0 \u0ae0 \u0ae1 \u0b05- \u0b0c \u0b0f \u0b10 \u0b13- \u0b28 \u0b2a- \u0b30 \u0b32 \u0b33 \u0b35- \u0b39 \u0b3d \u0b5c \u0b5d \u0b5f- \u0b61 \u0b71 \u0b83 \u0b85- \u0b8a \u0b8e- \u0b90 \u0b92- \u0b95 \u0b99 \u0b9a \u0b9c \u0b9e \u0b9f \u0ba3 \u0ba4 \u0ba8- \u0baa \u0bae- \u0bb9 \u0bd0 \u0c05- \u0c0c \u0c0e- \u0c10 \u0c12- \u0c28 \u0c2a- \u0c33 \u0c35- \u0c39 \u0c3d \u0c58 \u0c59 \u0c60 \u0c61 \u0c85- \u0c8c \u0c8e- \u0c90 \u0c92- \u0ca8 \u0caa- \u0cb3 \u0cb5- \u0cb9 \u0cbd \u0cde \u0ce0 \u0ce1 \u0d05- \u0d0c \u0d0e- \u0d10 \u0d12- \u0d28 \u0d2a- \u0d39 \u0d3d \u0d60 \u0d61 \u0d7a- \u0d7f \u0d85- \u0d96 \u0d9a- \u0db1 \u0db3- \u0dbb \u0dbd \u0dc0- \u0dc6 \u0e01- \u0e30 \u0e32 \u0e33 \u0e40- \u0e46 \u0e81 \u0e82 \u0e84 \u0e87 \u0e88 \u0e8a \u0e8d \u0e94- \u0e97 \u0e99- \u0e9f \u0ea1- \u0ea3 \u0ea5 \u0ea7 \u0eaa \u0eab \u0ead- \u0eb0 \u0eb2 \u0eb3 \u0ebd \u0ec0- \u0ec4 \u0ec6 \u0edc \u0edd \u0f00 \u0f40- \u0f47 \u0f49- \u0f6c \u0f88- \u0f8b \u1000- \u102a \u103f \u1050- \u1055 \u105a- \u105d \u1061 \u1065 \u1066 \u106e- \u1070 \u1075- \u1081 \u108e \u10a0- \u10c5 \u10d0- \u10fa \u10fc \u1100- \u1248 \u124a- \u124d \u1250- \u1256 \u1258 \u125a- \u125d \u1260- \u1288 \u128a- \u128d \u1290- \u12b0 \u12b2- \u12b5 \u12b8- \u12be \u12c0 \u12c2- \u12c5 \u12c8- \u12d6 \u12d8- \u1310 \u1312- \u1315 \u1318- \u135a \u1380- \u138f \u13a0- \u13f4 \u1401- \u166c \u166f- \u167f \u1681- \u169a \u16a0- \u16ea \u1700- \u170c \u170e- \u1711 \u1720- \u1731 \u1740- \u1751 \u1760- \u176c \u176e- \u1770 \u1780- \u17b3 \u17d7 \u17dc \u1820- \u1877 \u1880- \u18a8 \u18aa \u18b0- \u18f5 \u1900- \u191c \u1950- \u196d \u1970- \u1974 \u1980- \u19ab \u19c1- \u19c7 \u1a00- \u1a16 \u1a20- \u1a54 \u1aa7 \u1b05- \u1b33 \u1b45- \u1b4b \u1b83- \u1ba0 \u1bae \u1baf \u1c00- \u1c23 \u1c4d- \u1c4f \u1c5a- \u1c7d \u1ce9- \u1cec \u1cee- \u1cf1 \u1d00- \u1dbf \u1e00- \u1f15 \u1f18- \u1f1d \u1f20- \u1f45 \u1f48- \u1f4d \u1f50- \u1f57 \u1f59 \u1f5b \u1f5d \u1f5f- \u1f7d \u1f80- \u1fb4 \u1fb6- \u1fbc \u1fbe \u1fc2- \u1fc4 \u1fc6- \u1fcc \u1fd0- \u1fd3 \u1fd6- \u1fdb \u1fe0- \u1fec \u1ff2- \u1ff4 \u1ff6- \u1ffc \u2071 \u207f \u2090- \u2094 \u2102 \u2107 \u210a- \u2113 \u2115 \u2119- \u211d \u2124 \u2126 \u2128 \u212a- \u212d \u212f- \u2139 \u213c- \u213f \u2145- \u2149 \u214e \u2183 \u2184 \u2c00- \u2c2e \u2c30- \u2c5e \u2c60- \u2ce4 \u2ceb- \u2cee \u2d00- \u2d25 \u2d30- \u2d65 \u2d6f \u2d80- \u2d96 \u2da0- \u2da6 \u2da8- \u2dae \u2db0- \u2db6 \u2db8- \u2dbe \u2dc0- \u2dc6 \u2dc8- \u2dce \u2dd0- \u2dd6 \u2dd8- \u2dde \u2e2f \u3005 \u3006 \u3031- \u3035 \u303b \u303c \u3041- \u3096 \u309d- \u309f \u30a1- \u30fa \u30fc- \u30ff \u3105- \u312d \u3131- \u318e \u31a0- \u31b7 \u31f0- \u31ff \u3400- \u4db5 \u4e00- \u9fcb \ua000- \ua48c \ua4d0- \ua4fd \ua500- \ua60c \ua610- \ua61f \ua62a \ua62b \ua640- \ua65f \ua662- \ua66e \ua67f- \ua697 \ua6a0- \ua6e5 \ua717- \ua71f \ua722- \ua788 \ua78b \ua78c \ua7fb- \ua801 \ua803- \ua805 \ua807- \ua80a \ua80c- \ua822 \ua840- \ua873 \ua882- \ua8b3 \ua8f2- \ua8f7 \ua8fb \ua90a- \ua925 \ua930- \ua946 \ua960- \ua97c \ua984- \ua9b2 \ua9cf \uaa00- \uaa28 \uaa40- \uaa42 \uaa44- \uaa4b \uaa60- \uaa76 \uaa7a \uaa80- \uaaaf \uaab1 \uaab5 \uaab6 \uaab9- \uaabd \uaac0 \uaac2 \uaadb- \uaadd \uabc0- \uabe2 \uac00- \ud7a3 \ud7b0- \ud7c6 \ud7cb- \ud7fb \uf900- \ufa2d \ufa30- \ufa6d \ufa70- \ufad9 \ufb00- \ufb06 \ufb13- \ufb17 \ufb1d \ufb1f- \ufb28 \ufb2a- \ufb36 \ufb38- \ufb3c \ufb3e \ufb40 \ufb41 \ufb43 \ufb44 \ufb46- \ufbb1 \ufbd3- \ufd3d \ufd50- \ufd8f \ufd92- \ufdc7 \ufdf0- \ufdfb \ufe70- \ufe74 \ufe76- \ufefc \uff21- \uff3a \uff41- \uff5a \uff66- \uffbe \uffc2- \uffc7 \uffca- \uffcf \uffd2- \uffd7 \uffda- \uffdc".split(" "),
qa=new RegExp("["+oa.join("")+"]+"),ra=oa.join(""),sa=pa.join(""),ta=/[\x00-\x1f\x7f-\x9f]/,ua=new RegExp("^["+ra+"]+|["+ra+"]+$");function va(a){return""===a||null==a}
var l={splice:function(a,b,c,d){return a.substring(0,b)+(d||"")+a.substring(b+c)},ge:function(a){for(var b=a.split(qa),c=h.Y(arguments).slice(1),d=[],e=0;e<b.length;e++)b[e]&&d.push(b[e]);for(e=0;e<c.length;e++)c[e]&&d.push(c[e]);return d.join(" ")},Ve:function(a){var b=a.split(qa),c=h.Y(arguments).slice(1);return h.tb(b,c).join(" ")},Vd:function(a){return h.unique(a.split(qa)).join(" ")},jf:function(a){a=a.trim().replace(ua,"");return va(a)?[]:a.split(/\s+/g)},cf:function(a,b){for(var c=[],d=0,e;null!=
(e=b.exec(a));)d<e.index&&(c.push(a.substring(d,e.index)),d=e.index),d+=e[0].length,c.push(e[0]);d<a.length&&c.push(a.substring(d,a.length));return c},ec:function(){function a(a,b){return b.toUpperCase()}var b=/[\-]([a-z])/gi;return function(c){return c.replace(b,a)}}(),Gf:function(){function a(a){return"-"+a.toLowerCase()}var b=/[A-Z]/g;return function(c){return c.replace(b,a)}}(),Ma:va,we:function(a){return ta.test(a)},kf:ta,rf:new RegExp("["+ra+ma.join("")+na.join("")+"]"),Pc:new RegExp("[^"+ra+
ma.join("")+na.join("")+"]"),Rc:new RegExp("["+oa.join("")+"]"),ce:qa,yf:new RegExp("["+ma.join("")+"]"),Yb:new RegExp("["+na.join("")+"]"),bc:new RegExp("[^"+sa+"]"),de:new RegExp("[^"+sa+"]["+sa+"]*$"),vf:new RegExp("["+sa+"]"),sf:ua,cc:ma,ac:oa,wf:pa,Zb:na};var wa=/^(#|rgba?|hsl)\(?([^\(\)]+)/i,xa=/\s*,\s*/;function ya(a){var b,c;4===a.length?(b=a.substr(1,1),c=a.substr(2,1),a=a.substr(3,1),b+=b,c+=c,a+=a):(b=a.substr(1,2),c=a.substr(3,2),a=a.substr(5,2));return[b,c,a]}function za(a){return a.reduce(function(a,c){var d=parseInt(c,10).toString(16);return a.concat(1===d.length?d+d:d)},[])}function Ba(a){return ya(a).reduce(function(a,c){return a.concat(parseInt(c,16))},[])}
function Da(a){a=a.trim().match(wa);switch(a&&a[1]){case "#":return"#"+ya(a[0]).join("");case "rgb":case "rgba":return"#"+za(a[2].split(xa)).join("")}}
var Ea={bg:Da,Jg:function(a){a=a.trim().match(wa);switch(a&&a[1]){case "#":return Ba(a[0]);case "rgb":case "rgba":return a[2].split(xa).reduce(function(a,c){return a.concat(parseInt(c,10))},[])}},Qf:function(a,b,c){return[a[0]+Math.round((b[0]-a[0])*c),a[1]+Math.round((b[1]-a[1])*c),a[2]+Math.round((b[2]-a[2])*c)]},j:function(a,b){return Da(a)===Da(b)},Ld:function(a){return"string"===typeof a[0]?"#"+a.join(""):4===a.length?"rgba("+a.join(",")+")":"rgb("+a.join(",")+")"}};var Fa={AREA:!0,BASE:!0,BR:!0,COL:!0,COMMAND:!0,EMBED:!0,HR:!0,IMG:!0,INPUT:!0,KEYGEN:!0,LINK:!0,META:!0,PARAM:!0,SOURCE:!0,TRACK:!0,WBR:!0},Ga={ADDRESS:!0,ARTICLE:!0,ASIDE:!0,AUDIO:!0,BLOCKQUOTE:!0,CANVAS:!0,DD:!0,DIV:!0,DL:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,NOSCRIPT:!0,OL:!0,OUTPUT:!0,P:!0,PRE:!0,SECTION:!0,TABLE:!0,TFOOT:!0,UL:!0,VIDEO:!0},Ha={A:!0,ABBR:!0,B:!0,BDI:!0,BDO:!0,BR:!0,CITE:!0,CODE:!0,DATA:!0,DFN:!0,
EM:!0,I:!0,KBD:!0,MARK:!0,Q:!0,RP:!0,RT:!0,RUBY:!0,S:!0,SAMP:!0,SMALL:!0,SPAN:!0,STRONG:!0,SUB:!0,SUP:!0,TIME:!0,U:!0,VAR:!0,WBR:!0},Ia={OL:!0,UL:!0,DL:!0,MENU:!0},Ja={LI:!0,DT:!0,DD:!0},Ka={FIELDSET:!0,OBJECT:!0,FIGURE:!0,AUDIO:!0,SELECT:!0,COLGROUP:!0,HGROUP:!0,TABLE:!0,TBODY:!0,TR:!0,OL:!0,UL:!0,DL:!0,MENU:!0},La={LI:["OL","UL","DL"],DT:["DL"],DD:["DL"],TBODY:["TABLE"],TR:["TABLE","TBODY"],TH:["TABLE","TBODY"],TD:["TR","TH"]};function Ma(a){return!!Ga[a.nodeName]}
var Na={H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0},q={Ca:Ma,la:function(a){return Ka[a.nodeName]},Na:function(a){return!!La[a.nodeName]},Mb:function(a){return!!Na[a.nodeName]},Oa:function(a){return!Ma(a)},Da:function(a){return!!Ia[a.nodeName]},f:function(a){return!!Ja[a.nodeName]},kd:function(a){return"TABLE"===a.nodeName},Nb:function(a){return!!Ha[a.nodeName]},Ea:function(a){return!!Fa[a.nodeName]}};function Oa(a){throw Error(a?"\u2718 Error ("+a+"). See http://www.alohaeditor.org/docs/errors/"+a:"assertion failed");}function Pa(a,b){a||Oa(b)}var r={assert:Pa,error:Oa,Dc:function(){Oa(0)},dc:function(a){Pa(null==a,2)},ie:function(a){Pa(null!=a,1)},lh:0,nh:1,mh:2,eh:15,qf:3,pf:4,tf:5,Qc:16,$b:8,mf:9,jh:10,lf:11,of:12,nf:13,be:14};function Qa(a,b){var c=a.length,d=b.length;r.assert(1<=c,r.nf);r.assert(2<=d,r.be);r.assert(c===d-1,r.be);return c}function Ra(a,b,c){return function(){return 0<arguments.length-c?b.apply(null,arguments):a.apply(null,arguments)}}function u(a,b){var c=Qa(a,b),c=1===c?function(c,e){return 1<arguments.length?b(c,e):a(c)}:2===c?function(c,e,g){return 2<arguments.length?b(c,e,g):a(c,e)}:Ra(a,b,c);c.get=a;c.set=b;return c}
function Sa(a){return u(function(b){return b[a]},function(b,c){b[a]=c;return b})}u.Ah=Sa;u.Bh=function(a){for(var b in a)if(a.hasOwnProperty(b))return Sa(b);r.error(r.of)};u.F=function(a){var b=a.get,c=a.set;a=Qa(b,c);a=1===a?function(a){return arguments.length?c(this,a):b(this)}:2===a?function(a,e){return 1<arguments.length?c(this,a,e):b(this,a)}:f.F(Ra(b,c,a));a.get=b;a.set=c;return a};function Ta(a,b){for(var c in a)a.hasOwnProperty(c)&&b(a[c],c,a)}function Ua(a,b,c){return b.map(function(b){return a.hasOwnProperty(b)?a[b]:c})}function Va(a){var b=[];Ta(a,function(a,d){b.push(d)});return b}function Wa(a){var b;for(b=1;b<arguments.length;b++){var c=arguments[b];c&&Ta(c,function(b,c){a[c]=b})}return a}function Xa(a){r.ie(a);return Wa({},a)}
var v={Ma:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},Wc:function(a,b,c){for(var d=b.length;d--;)a[b[d]]=c;return a},keys:Va,kb:function(a){return Ua(a,Va(a))},Lg:Ua,filter:function(a,b){var c={};Ta(a,function(d,e){b(d,e,a)&&(c[e]=d)});return c},forEach:Ta,extend:Wa,g:function(){return Wa.apply(null,[{}].concat(h.Y(arguments)))},isMap:function(a){return!(!a||!a.constructor||"[object Object]"!==Object.prototype.toString.call(a))},clone:Xa,Sc:function(a,b,c){a=Xa(a);a[b]=c;
return a},ne:function(a,b){a=Xa(a);delete a[b];return a},create:function(){return Object.create(null)},md:function(a){var b={};a.forEach(function(a){b[a[0]]=a[1]});return b}};var Za={},$a={},ab={};function bb(a,b,c){if(c!==ab)return new bb(a,b,ab);this._map_data=null;this._map_source=b;this._map_opts=a;this._map_realized=0}function cb(a){var b=a._map_realized;if(b&2)return a._map_data;var c=a._map_opts.realize(a._map_source);a._map_data=c;a._map_realized=b|3;a._map_source=null;return c}function db(a,b,c){var d=a._map_data=a._map_data||{};return d.hasOwnProperty(b)?d[b]:a._map_realized&1?$a:d[b]=c(a,b)}
function eb(a,b){var c=a._map_opts,d=!1;return(d=c.has?c.has(a._map_source,b):$a!==db(a,b,fb))?Za:$a}function fb(a,b){return a._map_opts.get(a._map_source,b,$a)}var gb={realize:f.cd,get:r.error},hb={realize:function(a){return v.g(a.map.realize(),a.obj)},get:function(a,b,c){var d=a.obj;return d.hasOwnProperty(b)?d[b]:a.map.get(b,c)}};
f.Vc(bb,{keys:function(a){var b=a._map_data=a._map_data||{},c=a._map_realized;if(c&1)return v.keys(b).filter(function(a){return b[a]!==$a});var d=a._map_opts;d.keys?(d=d.keys(a._map_source),d.forEach(function(a){b.hasOwnProperty(a)||(b[a]=Za)}),a._map_realized=c|1):d=v.keys(cb(a));return d},realize:cb,isRealized:function(a){return!!(a._map_realized&2)},get:function(a,b,c){var d=db(a,b,fb);$a===d?d=c:Za===d&&(d=(a._map_data=a._map_data||{})[b]=fb(a,b),r.rh(d!==$a));return d},has:function(a,b){return $a!==
db(a,b,eb)},mergeObject:function(a,b,c){!c||a._map_opts!==hb||a._map_realized&2||(b=v.g(a._map_source.obj,b),a=a._map_source.map);return bb(hb,{map:a,obj:b})}});bb.Se=function(a){a=bb(gb,a);a.realize();return a};bb.De=function(a){var b=f.ea;return function(c,d,e){c=a(c,d);return b(c)?e:c}};var ib={};function jb(a,b){var c=a.Db,d=c.length;d<b.length&&(c=c.concat(b.slice(d)),a.Db=c);return c}function kb(a,b){r.assert(!b||a.constructor===b,r.Qc);var c=a.lb;r.assert(0===c||2===c,r.qf)}function lb(a,b){r.assert(!b||a.constructor===b,r.Qc);r.assert(2===a.lb,r.tf)}function mb(a){lb(a);a.lb=1;return new a.constructor(a.Db,ib)}function nb(a){kb(a);a=new a.constructor(a.Db.slice(0),ib);a.lb=2;return a}
function ob(a,b){function c(b,c){r.assert(!a||b.constructor===a,r.Qc);r.assert(0===b.lb,r.pf);var m=e,n=d,p=new b.constructor(b.Db.slice(0),ib);jb(p,n)[m]=c;return p}var d=a.ee,e=a.ee.length;d.push(b);c.setT=function(b,c){lb(b,a);var m=e,n=d,p=mb(b);p.lb=2;jb(p,n)[m]=c;return p};return u(function(b){kb(b,a);var c;c=e;var m=c=jb(b,d)[c];Array.isArray(m)&&m[0]===ib&&(3<c.length?m=c[3]:(m=c[1](c[2]),c[3]=m),c=m,jb(b,d)[e]=c);return c},c)}function pb(a,b,c){return b.set(a,c)}
function qb(a,b){return b.get(a)}function rb(a,b,c){return b.set.setT(a,c)}function sb(a,b,c,d){return pb(a,b,[ib,c,d])}function tb(a,b,c,d){return rb(a,b,[ib,c,d])}function ub(a,b){v.forEach(b,function(b,d){var e=ob(a,b);a.prototype[d]=u.F(e)})}function vb(a,b,c){var d=a.set,e=d.setT;c=c||function(a){return b(a.asPersistent()).asTransient()};a=u(a.get,function(a,c){a=d(a,c);return a=b(a)});a.set.setT=function(a,b){a=e(a,b);return a=c(a)};return a}
var wb={define:function(a,b){function c(a,g){if(g!==ib)return b(new c(d,ib),a);this.Db=a;this.lb=0}f.w(a)&&(b=a,a=null);b=b||f.cd;var d=[];f.Vc(c,{asTransient:nb,asPersistent:mb,get:qb,set:pb,setT:rb,delay:sb,delayT:tb});c.Sa=f.c(ob,c);c.extend=f.c(ub,c);c.ee=d;a&&ub(c,a);return c},hookSetter:vb,hookSetterRecompute:function(a,b,c,d){return vb(a,function(a){return b.set(a,c(a))},d?function(a){return b.set.setT(a,d(a))}:null)}};function xb(a){var b={};a=a.attributes;for(var c=0,d=a.length;c<d;c++){var e=a[c];if("undefined"===typeof e.specified||e.specified)b[e.name]=e.value}return b}function yb(a,b){a.removeAttribute(b)}function zb(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}
var Bb={attrs:xb,get:function(a,b){return a.getAttribute(b)},ag:function(a,b,c){return a.getAttributeNS(b,c)},has:function(a){return!v.kb(xb(a)).every(l.Ma)},remove:yb,Cg:function(a){v.keys(xb(a)).forEach(f.c(yb,a))},Gg:function(a,b,c){null!=b?a.removeAttributeNS(b,c):a.removeAttribute(c)},set:zb,Og:function(a,b,c,d){null!=b?a.setAttributeNS(b,c,d):zb(a,c,d)}};var Cb={A:"_PHRASING_",ABBR:"_PHRASING_",ADDRESS:"_FLOW_",AREA:"_EMPTY_",ARTICLE:"_FLOW_",ASIDE:"_FLOW_",AUDIO:"SOURCE",B:"_PHRASING_",BASE:"_EMPTY_",BDO:"_PHRASING_",BLOCKQUOTE:"_PHRASING_",BODY:"_FLOW_",BR:"_EMPTY_",BUTTON:"_PHRASING_",CANVAS:"_PHRASING_",CAPTION:"_FLOW_",CITE:"_PHRASING_",CODE:"_PHRASING_",COL:"_EMPTY_",COLGROUP:"COL",COMMAND:"_EMPTY_",DATALIST:{_PHRASING_:!0,OPTION:!0},DD:"_FLOW_",DEL:"_PHRASING_",DIV:"_FLOW_",DETAILS:{SUMMARY:!0,_FLOW_:!0},DFN:"_FLOW_",DL:{DT:!0,DD:!0},DT:"_PHRASING_",
EM:"_PHRASING_",EMBED:"_EMPTY_",FIELDSET:{LEGEND:!0,_FLOW_:!0},FIGCAPTION:"_FLOW_",FIGURE:{FIGCAPTION:!0,_FLOW_:!0},FONT:"_PHRASING_",FOOTER:"_FLOW_",FORM:"_FLOW_",H1:"_PHRASING_",H2:"_PHRASING_",H3:"_PHRASING_",H4:"_PHRASING_",H5:"_PHRASING_",H6:"_PHRASING_",HEAD:"_META_DATA_",HEADER:"_FLOW_",HGROUP:{H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0},HR:"_EMPTY_",I:"_PHRASING_",IFRAME:"#TEXT",IMG:"_EMPTY_",INPUT:"_EMPTY_",INS:"_PHRASING_",KBD:"_PHRASING_",KEYGEN:"_EMPTY_",LABEL:"_PHRASING_",LEGEND:"_PHRASING_",
LI:"_FLOW_",LINK:"_EMPTY_",MAP:"AREA",MARK:"_PHRASING_",MENU:{LI:!0,_FLOW_:!0},META:"_EMPTY_",METER:"_PHRASING_",NAV:"_FLOW_",NOSCRIPT:"_PHRASING_",OBJECT:"PARAM",OL:"LI",OPTGROUP:"OPTION",OPTION:"#TEXT",OUTPUT:"_PHRASING_",P:"_PHRASING_",PARAM:"_EMPTY_",PRE:"_PHRASING_",PROGRESS:"_PHRASING_",Q:"_PHRASING_",RP:"_PHRASING_",RT:"_PHRASING_",RUBY:{_PHRASING_:!0,RT:!0,RP:!0},S:"_PHRASING_",SAMP:"pharsing",SCRIPT:"#script",SECTION:"_FLOW_",SELECT:{OPTION:!0,OPTGROUP:!0},SMALL:"_PHRASING_",SOURCE:"_EMPTY_",
SPAN:"_PHRASING_",STRONG:"_PHRASING_",STYLE:"_PHRASING_",SUB:"_PHRASING_",SUMMARY:"_PHRASING_",SUP:"_PHRASING_",TABLE:{CAPTION:!0,COLGROUP:!0,THEAD:!0,TBODY:!0,TFOOT:!0,TR:!0},TBODY:"TR",TD:"_FLOW_",TEXTAREA:"#TEXT",TFOOT:"TR",TH:"_PHRASING_",THEAD:"TR",TIME:"_PHRASING_",TITLE:"#TEXT",TR:{TH:!0,TD:!0},TRACK:"_EMPTY_",U:"_PHRASING_",UL:"LI",VAR:"_PHRASING_",VIDEO:"SOURCE",WBR:"_EMPTY_","#DOCUMENT-FRAGMENT":"_FLOW_"},w={_FLOW_:!0,_PHRASING_:!0},Db={_FLOW_:!0,_PHRASING_:!0},Eb={_FLOW_:!0,_HEADER_:!0},
Fb={_FLOW_:!0},Gb={A:{_FLOW_:!0,_INTERACTIVE_:!0,_PHRASING_:!0},ABBR:w,ADDRESS:Fb,AREA:w,ARTICLE:Db,ASIDE:Db,AUDIO:{_EMBEDDED_:!0,_FLOW_:!0,_INTERACTIVE_:!0,_PHRASING_:!0},B:w,BASE:{_META_DATA_:!0},BDI:w,BDO:w,BLOCKQUOTE:{_FLOW_:!0,_SECTIONING_ROOT_:!0},BODY:{_SECTIONING_ROOT_:!0},BR:w,BUTTON:{_EMBEDDED_:!0,_FLOW_:!0,_INTERACTIVE_:!0,_PHRASING_:!0,_LISTED_:!0,_LABELABLE_:!0,_SUBMITTABLE_:!0,_REASSOCIATABLE_:!0,_FORM_ASSOCIATED_:!0},CANVAS:{_EMBEDDED_:!0,_FLOW_:!0,_PHRASING_:!0},CAPTION:{},CITE:w,
CODE:w,COL:{},COLGROUP:{},COMMAND:{},DATALIST:w,DD:{},DEL:w,DETAILS:{_FLOW_:!0,_SECTIONING_ROOT_:!0,_INTERACTIVE_:!0},DFN:w,DIV:Fb,DL:Fb,DT:{},EM:w,EMBED:{_EMBEDDED_:!0,_FLOW_:!0,_INTERACTIVE_:!0,_PHRASING_:!0},FIELDSET:{_FLOW_:!0,_FORM_ASSOCIATED_:!0,_LISTED_:!0,_REASSOCIATABLE_:!0,_SECTIONING_ROOT_:!0},FIGCAPTION:{},FIGURE:{_FLOW_:!0,_SECTIONING_ROOT_:!0},FONT:w,FOOTER:Fb,FORM:Fb,H1:Eb,H2:Eb,H3:Eb,H4:Eb,H5:Eb,H6:Eb,HEADER:Fb,HGROUP:Eb,HR:Fb,I:w,IFRAME:{_EMBEDDED_:!0,_FLOW_:!0,_INTERACTIVE_:!0,_PHRASING_:!0},
IMG:{_EMBEDDED_:!0,_FLOW_:!0,_FORM_ASSOCIATED_:!0,_INTERACTIVE_:!0,_PHRASING_:!0},INPUT:{_FLOW_:!0,_FORM_ASSOCIATED_:!0,_INTERACTIVE_:!0,_LABELABLE_:!0,_LISTED_:!0,_PHRASING_:!0,_REASSOCIATABLE_:!0,_RESETTABLE_:!0,_SUBMITTABLE_:!0},INS:w,KBD:w,KEYGEN:{_FLOW_:!0,_FORM_ASSOCIATED_:!0,_INTERACTIVE_:!0,_LABELABLE_:!0,_LISTED_:!0,_PHRASING_:!0,_REASSOCIATABLE_:!0,_RESETTABLE_:!0,_SUBMITTABLE_:!0},LABEL:{_FLOW_:!0,_FORM_ASSOCIATED_:!0,_INTERACTIVE_:!0,_PHRASING_:!0,_REASSOCIATABLE_:!0},LEGEND:{},LI:{},
LINK:{_FLOW_:!0,_METADATA_:!0,_PHRASING_:!0},MAIN:Fb,MAP:w,MARK:w,MENU:Fb,MENUITEM:Fb,META:{_FLOW_:!0,_METADATA_:!0,_PHRASING_:!0},METER:{_FLOW_:!0,_LABELABLE_:!0,_PHRASING_:!0},NAV:{_FLOW_:!0,_SECTIONING_:!0},NOSCRIPT:{_FLOW_:!0,_METADATA_:!0,_PHRASING_:!0},OBJECT:{_FLOW_:!0,_EMBEDDABLE_:!0,_FORM_ASSOCIATED_:!0,_INTERACTIVE_:!0,_LISTED_:!0,_PHRASING_:!0,_REASSOCIATABLE_:!0,_SUBMITTABLE_:!0},OL:Fb,OPTGROUP:{},OPTION:{},OUTPUT:{_FLOW_:!0,_PHRASING_:!0,_LISTED_:!0,_LABELABLE_:!0,_RESETTALBE_:!0,_REASSOCIATABLE_:!0,
_FORM_ASSOCIATED_:!0},P:Fb,PARAM:{},PRE:Fb,PROGRESS:{_FLOW_:!0,_PHRASING_:!0,_LABELABLE_:!0},Q:w,RP:{},RT:{},RUBY:w,S:w,SAMP:w,SCRIPT:{_FLOW_:!0,_PHRASING_:!0,_METADATA_:!0,_SCRIPT_SUPPORTING_:!0},SECTION:{_FLOW_:!0,_SECTIONING_:!0},SELECT:{_FLOW_:!0,_PHRASING_:!0,_INTERACTIVE_:!0,_LISTED_:!0,_LABELABLE_:!0,_SUBMITTALBE_:!0,_RESETTALBE_:!0,_REASSOCIATABLE_:!0,_FORM_ASSOCIATED_:!0},SMALL:w,SOURCE:{},SPAN:w,STRONG:w,STYLE:{_FLOW_:!0,_METADATA_:!0},SUB:w,SUMMARY:{},SUP:w,TABLE:Fb,TBODY:{},TD:{_SECTIONING_ROOT_:!0},
TEMPLATE:{_FLOW_:!0,_METADATA_:!0,_PHRASING_:!0,_SCRIPT_SUPPORTING_:!0},TEXTAREA:{_FLOW_:!0,_PHRASING_:!0,_INTERACTIVE_:!0,_LISTED_:!0,_LABELABLE_:!0,_SUBMITTALBE_:!0,_RESETTALBE_:!0,_REASSOCIATABLE_:!0,_FORM_ASSOCIATED_:!0},TFOOT:{},TH:{},THEAD:{},TIME:w,TITLE:{_METADATA_:!0},TR:{},TRACK:{},U:w,UL:Fb,VAR:w,VIDEO:{_FLOW_:!0,_PHRASING_:!0,_EMBEDDED_:!0,_INTERACTIVE_:!0},WBR:w,"#TEXT":w},Hb={IMG:["alt","src"],A:["href","name","_target"],TD:["colspan","rowspan"],TH:["colspan","rowspan"],OL:["start",
"type"],"*":["xstyle"]},Ib={TABLE:["width"],IMG:["width","height"],"*":"color font-family font-size font-weight font-stlye font-decoration background background-image background-color".split(" ")},Jb={AUDIO:!0,COMMAND:!0,COLGROUP:!0,IFRAME:!0,INPUT:!0,INS:!0,KBD:!0,KEYGEN:!0,LINK:!0,META:!0,NOSCRIPT:!0,OUTPUT:!0,Q:!0,RUBY:!0,SAMP:!0,SCRIPT:!0,SELECT:!0,STYLE:!0,TEMPLATE:!0,TEXTAREA:!0,TITLE:!0,WBR:!0},Kb={FONT:"SPAN"},x={ta:function(a,b){var c;a=a.toUpperCase();b=b.toUpperCase();var d=Cb[a];if(!d)return!1;
if("string"===typeof d){if(d===b||(c=Gb[b])&&c[d])return!0}else{if(d[b])return!0;c=Gb[b];for(var e in c)if(c.hasOwnProperty(e)&&d[e])return!0}return!1},nb:function(a){return v.g({},Ib,a)},mb:function(a){return v.g({},Hb,a)},Wa:function(a){return v.g({},Jb,a)},Qb:function(a){return v.g({},Kb,a)}};var Lb={ph:function(a,b){var c,d;c=0;for(d=a.length;c<d;c++)if(a[c].test(b))return!0;return!1},Gb:function(a){return"undefined"!==typeof a},Aa:function(a){if(!a)return a;var b,c={};for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c}};function A(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent?a.attachEvent("on"+b,c):r.error()}function Mb(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function Nb(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}
var B={w:function(a){return a&&a.hasOwnProperty&&a.hasOwnProperty("type")&&!f.ea(a.stopPropagation)&&!f.ea(a.preventDefault)},add:A,remove:function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent?a.detachEvent("on"+b,c):r.error()},$e:function(a,b){A(a,"resize",b);A(a,"keyup",b);A(a,"keydown",b);A(a,"keypress",b);A(a,"click",b);A(a,"mouseup",b);A(a,"mousedown",b);A(a,"mousemove",b);A(a,"dblclick",b);A(a,"dragstart",b);A(a,"drag",b);A(a,"dragenter",b);A(a,"dragexit",b);A(a,
"dragleave",b);A(a,"dragover",b);A(a,"drop",b);A(a,"dragend",b);A(a,"paste",b)},wa:function(a,b){return-1<a.meta.indexOf(b)},Uf:function(a,b,c){b.dispatchEvent?(a=a.createEvent("Event"),a.initEvent(c,!0,!0),b.dispatchEvent(a)):b.fireEvent?(a=a.createEventObject(),a.type=c,b.fireEvent("on"+c,a)):r.error()},Le:function(a){setTimeout(a,4)},preventDefault:Mb,stopPropagation:Nb,ff:function(a){Nb(a);Mb(a)}};var Ob={ELEMENT:1,ATTR:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENTTYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};function Pb(a){return Ob.TEXT===a.nodeType}function Qb(a){return Ob.ELEMENT===a.nodeType}function Rb(a){return Ob.DOCUMENT_FRAGMENT===a.nodeType}function Sb(a){return a.childNodes.length}function Tb(a){for(var b=0;a=a.previousSibling;)b++;return b}function Ub(a){return Qb(a)||Rb(a)?Sb(a):Pb(a)?a.length:0}
function Vb(a,b){return a.childNodes[b]}function Wb(a){return Pb(a)&&0===Ub(a)}function Xb(a,b,c){var d=0,e=0;for(a=a.firstChild;;){if(e>=b)return d;if(d>=c)return e;if(!a)break;if(Pb(a)){for(var g=-1;a&&Pb(a);)Wb(a)||(g=d),a=a.nextSibling,d+=1;if(-1!==g){if(g>=c)return e;e+=1}}else a=a.nextSibling,d+=1,e+=1}throw Error();}function Yb(a,b){return Xb(a,b,Number.POSITIVE_INFINITY)}
var C={aa:Ob,offset:function(a){if(!Lb.Gb(a.getBoundingClientRect))return{top:0,left:0};var b=a.getBoundingClientRect();return{top:b.top+window.pageYOffset-a.ownerDocument.body.clientTop,left:b.left+window.pageXOffset-a.ownerDocument.body.clientLeft}},children:function(a){return h.Y(a.childNodes)},pa:function(a,b){Qb(a)&&b<Ub(a)?a=a.childNodes[b]:Pb(a)&&b===a.length&&(a=a.nextSibling||a.parentNode);return a},ga:Vb,Ec:Sb,u:Tb,q:Ub,$c:function(a){return 0<Sb(a)},Bc:function(a,b){return Vb(a,Yb(a,b))},
Ac:function(a){return Xb(a.parentNode,Number.POSITIVE_INFINITY,Tb(a))},Ic:Yb,Cc:function(a){return Xb(a,Number.POSITIVE_INFINITY,Sb(a))},b:Pb,t:Qb,qc:Rb,Lb:Wb,isSameNode:function(a,b){return a===b},text:function(a){return a.textContent},ad:function(a){return 0<a.textContent.trim().length},j:function(a,b){return a.isEqualNode(b)},contains:function(a,b){return Qb(a)?a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):a!==b&&(Qb(b)?a.contains(b):b.parentNode&&(a===b.parentNode||a.contains(b.parentNode))):
!1},ua:function(a,b){return!!(a.compareDocumentPosition(b)&4)},clone:function(a,b){return a.cloneNode("boolean"===typeof b?b:!0)},X:function(a){return a.cloneNode(!1)},Gc:function(a){var b=a.ownerDocument.createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML}};function Zb(a){if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a&&a.nextSibling}function $b(a){for(var b=a.previousSibling;b&&b.lastChild;)b=b.lastChild;return b||a.parentNode}function ac(a,b,c,d){c=c||f.D;if(c(a))return null;do{a=d(a);if(!a||c(a))break;if(b(a))return a}while(a);return null}function bc(a){return a.nextSibling}function cc(a){return a.previousSibling}function dc(a){return a.parentNode}function ec(a,b,c,d){for(;a&&c(a,d);)a=b(a,d);return a}
function fc(a,b,c,d,e){ec(a,function(a){var d=c(a);b(a,e);return d},d,e)}function gc(a,b,c,d){fc(a,b,bc,f.ia(c),d)}function hc(a,b,c,d){fc(a,b,cc,f.ia(c),d)}function ic(a,b,c){gc(a,b,f.D,c)}function jc(a,b,c){C.t(a)&&ic(a.firstChild,function(a){jc(a,b,c)});b(a,c)}function kc(a,b){for(var c=[],d=a.parentNode;d&&!b(d);)c.push(d),d=d.parentNode;return c}function lc(a,b){var c=kc(a,b),d=c.length?c[c.length-1]:a;d.parentNode&&c.push(d.parentNode);return c}
function mc(a,b){if(b(a))return[];var c=kc(a,b);c.unshift(a);return c}function nc(a,b){if(b(a))return[a];var c=lc(a,b);c.unshift(a);return c}function oc(a,b){if(!a.previousSibling)return[];var c=[];hc(a.previousSibling,function(a){c.push(a)},b||f.D);return c.reverse()}function pc(a,b){if(!a.nextSibling)return[];var c=[];gc(a.nextSibling,function(a){c.push(a)},b||f.D);return c}
var D={Hc:function(a,b){return h.Y(b.querySelectorAll(a))},Qa:function(a,b,c,d){c=c||f.Jc;d=d||f.D;for(var e=a;e;)if(a=b?e.previousSibling:e.nextSibling){if(d(a))return null;if(c(a))return a;e=a}else{if(!e.parentNode||d(e.parentNode))return null;e=e.parentNode}},sd:gc,v:function(a,b,c){return ec(a,bc,b,c)},nextSibling:bc,yb:pc,Cd:hc,K:function(a,b,c){return ec(a,cc,b,c)},C:cc,Rb:oc,wc:function(a,b){return b&&b(a)?[]:oc(a,b).concat(a)},oa:function(a,b){return b&&b(a)?[]:[a].concat(pc(a,b))},zc:function(a,
b){return a===b?[a]:[a].concat(pc(a,function(a){return a===b}),b)},Ra:ic,Cb:jc,Xb:function(a,b,c,d){gc(a,b,function(a){return a===c},d)},forward:Zb,za:$b,Yc:function(a,b,c){return ac(a,b,c,Zb)},Xc:function(a,b,c){return ac(a,b,c,$b)},r:function(a,b){return ec(a,dc,b)},Ka:function(a,b,c,d){fc(a,b,dc,f.ia(c),d)},Ja:mc,Ua:nc,qb:function(a,b){return mc(a,function(a){return a===b})},pb:function(a,b){return nc(a,function(a){return a===b})},xd:kc,yd:lc,Ib:function(a,b){var c=!1;do!c&&a.firstChild?a=a.firstChild:
a.nextSibling?(a=a.nextSibling,c=!1):(a=a.parentNode,c=!0);while(!b(a,c));return a},Eb:function(a,b){var c=!0;do!c&&a.lastChild?a=a.lastChild:a.previousSibling?(a=a.previousSibling,c=!1):(a=a.parentNode,c=!0);while(!b(a,c));return a}};function qc(a,b,c){c?b.appendChild(a):b.parentNode.insertBefore(a,b)}function rc(a,b){qc(a,b.nextSibling||b.parentNode,!b.nextSibling)}function sc(a,b,c){for(var d;b;)d=b.nextSibling,a.insertBefore(b,c),b=d}function tc(a,b){qc(a,b,!0)}function uc(a,b,c){a=h.split(a,c||f.D);a[0].forEach(b);return a[1]}function vc(a,b,c){return uc(a,function(a){tc(a,b)},c)}function wc(a,b,c){return uc(a,function(a){qc(a,b,!1)},c)}function xc(a,b){return a.parentNode.replaceChild(b,a)}
function yc(a){a.parentNode.removeChild(a)}function zc(a,b){tc(xc(a,b),b)}
var Ac={append:tc,g:function(a,b){for(var c;a&&b&&a.nodeName===b.nodeName&&!C.b(a);){c=b.firstChild;sc(a,c,null);yc(b);if(!c)break;b=c;a=b.previousSibling}},nd:sc,gb:function(a,b,c){return uc(a,function(a){rc(a,b);b=a},c)},Pb:wc,move:vc,Aa:function(a,b,c){return uc(a,function(a){tc(C.clone(a),b)},c)},Fa:zc,Xd:function(a,b){var c=a.ownerDocument.createElement(b);zc(a,c);return c},h:qc,wb:rc,replace:xc,zb:function(a,b){vc(C.children(a),b);return xc(a,b)},remove:yc,xa:function(a){wc(C.children(a),a);
yc(a)},Hd:function(a){C.children(a).forEach(yc)}};function Bc(a){var b=h.Y(arguments).slice(1);a.className=l.Vd(l.ge.apply(null,[a.className].concat(b)))}function Cc(a){var b=h.Y(arguments).slice(1);a.className=l.Vd(l.Ve.apply(null,[a.className].concat(b)))}function Dc(a,b){return C.t(a)&&0<=a.className.trim().split(l.ce).indexOf(b)}function Ec(a,b,c){!0===c?Bc(a,b):!1===c?Cc(a,b):Ec(a,b,Dc(a,b))}var Fc={has:Dc,add:Bc,remove:Cc,toggle:Ec};for(var Gc={},Hc=Gc,Ic="",Jc=["","-webkit-","-moz-","-ms-","-o-"],Kc=document.createElement("div").style,Lc=0;Lc<Jc.length;Lc++)Kc.hasOwnProperty(Jc[Lc]+"transform")&&(Ic=Jc[Lc]);var Mc=navigator.userAgent.toLowerCase(),Nc=/(chrome)[ \/]([\w.]+)/.exec(Mc)||/(webkit)[ \/]([\w.]+)/.exec(Mc)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(Mc)||/(msie) ([\w.]+)/.exec(Mc)||0>Mc.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(Mc),Oc,Pc,Qc,Rc,Sc,Tc;Qc=Rc=Sc=Tc=!1;
Nc&&(Oc=Nc[1],Pc=Nc[2],Qc="msie"===Pc&&8>parseInt(Pc,10),"chrome"===Oc?Tc=!0:"webkit"===Oc&&(Sc=!0));Hc={Fh:Qc,chrome:Rc,Wd:Tc,Kg:Sc,vendor:Oc,version:Pc,Ha:Ic};Nc&&(Hc[Oc]=!0);Gc=Hc;var Uc={set:function(a,b,c){b=l.ec(b);a=a.style;b in a&&(a[b]=c)},get:function(a,b){b=l.ec(b);return a.style[b]},remove:function(a,b){a.style.removeProperty(b);l.Ma(a.getAttribute("style"))&&a.removeAttribute("style")},getComputedStyle:function(a,b){var c=a.ownerDocument;return c&&c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b):a.currentStyle?(b=l.ec(b),a.currentStyle[b]):null},Zc:function(a,b){var c={},d=a.ownerDocument;if(d&&
d.defaultView&&d.defaultView.getComputedStyle){var e=d.defaultView.getComputedStyle(a,null);e&&b.forEach(function(a){c[a]=e[a]||e.getPropertyValue(a)})}else a.currentStyle&&b.forEach(function(b){c[b]=a.currentStyle[b]});return c}},Vc=Gc;function Wc(a){if(!C.t(a))return!1;if("true"===a.getAttribute("contentEditable")||Fc.has(a,"aloha-editable"))return!0;a=a.Ph;if(!a)return!1;if(a.nodeType===C.aa.DOCUMENT&&"on"===a.designMode)return!0}
function Xc(a){if(!C.t(a))return!1;var b=a.getAttribute("contentEditable");return"true"===b||""===b?!0:"false"===b?!1:Fc.has(a,"aloha-editable")?!0:(a=a.parentNode)?a.nodeType===C.aa.DOCUMENT&&"on"===a.designMode?!0:Xc(a):!1}function Yc(a){return Xc(C.b(a)?a.parentNode:a)}var Zc=window.xf&&new window.xf,$c=0;function ad(a){return a.defaultView||a.parentWindow}function bd(a,b){for(var c=a[b],d=a.offsetParent;d;)c+=d[b],d=d.offsetParent;return c}
var E={aa:C.aa,offset:C.offset,X:C.X,clone:C.clone,text:C.text,children:C.children,ga:C.ga,Ec:C.Ec,u:C.u,q:C.q,$c:C.$c,pa:C.pa,Bc:C.Bc,Ac:C.Ac,Ic:C.Ic,Cc:C.Cc,ye:function(a){return/^\[object (Text|Comment|HTML\w*Element)\]$/.test(Object.prototype.toString.call(a))},b:C.b,t:C.t,qc:C.qc,Lb:C.Lb,isSameNode:C.isSameNode,j:C.j,contains:C.contains,ua:C.ua,ad:C.ad,Gc:C.Gc,append:Ac.append,g:Ac.g,nd:Ac.nd,Pb:Ac.Pb,gb:Ac.gb,move:Ac.move,Aa:Ac.Aa,Fa:Ac.Fa,Xd:Ac.Xd,h:Ac.h,wb:Ac.wb,replace:Ac.replace,zb:Ac.zb,
remove:Ac.remove,xa:Ac.xa,Hd:Ac.Hd,addClass:Fc.add,removeClass:Fc.remove,Wg:Fc.toggle,hasClass:Fc.has,attrs:Bb.attrs,da:Bb.get,re:Bb.ag,mc:Bb.has,Fd:Bb.remove,Dg:Bb.Gg,Eg:Bb.Cg,ra:Bb.set,Md:Bb.Og,We:Uc.remove,i:Uc.set,L:Uc.get,getComputedStyle:Uc.getComputedStyle,Zc:Uc.Zc,Hc:D.Hc,Qa:D.Qa,v:D.v,sd:D.sd,nextSibling:D.nextSibling,yb:D.yb,K:D.K,Cd:D.Cd,C:D.C,Rb:D.Rb,oa:D.oa,wc:D.wc,zc:D.zc,Ra:D.Ra,Cb:D.Cb,Xb:D.Xb,forward:D.forward,za:D.za,Yc:D.Yc,Xc:D.Xc,r:D.r,Ka:D.Ka,Ja:D.Ja,Ua:D.Ua,qb:D.qb,pb:D.pb,
xd:D.xd,yd:D.yd,Ib:D.Ib,Eb:D.Eb,Ld:function(a){return Zc.serializeToString(a)},ja:function(a){return a["!aloha-expando-node-id"]=a["!aloha-expando-node-id"]||++$c},Yf:function(a){a.removeAttribute("unselectable","on");Uc.set(a,Vc.Ha+"user-select","all");a.onselectstart=null},Tf:function(a){a.removeAttribute("unselectable","on");Uc.set(a,Vc.Ha+"user-select","none");a.onselectstart=f.D},gd:Xc,eb:Yc,e:Wc,isContentEditable:function(a){return C.t(a)&&"true"===a.contentEditable},fc:ad,Hb:function(a){if(Wc(a))return a;
if(!Yc(a))return null;for(a=a.parentNode;a&&!Wc(a);)a=a.parentNode;return a},Xf:function(a){for(a=a.parentNode;a&&!Xc(a);)a=a.parentNode;return a},scrollTop:function(a){var b=ad(a);if(!f.ea(b.pageYOffset))return b.pageYOffset;b=a.documentElement;return(b.clientHeight?b:a.body).scrollTop},scrollLeft:function(a){var b=ad(a);if(!f.ea(b.pageXOffset))return b.pageXOffset;b=a.documentElement;return(b.clientWidth?b:a.body).scrollLeft},Ia:function(a){return bd(a,"offsetTop")},zf:function(a){return bd(a,"offsetLeft")}};var cd=".\u272a{outline:5px solid #fce05e;}.\u272a *{border:1px solid rgba(0,0,0,0.1)}"+function(a,b,c){b=b||"";c=c||"";return a.map(function(a){return b+a+c}).join(",")}(["p","div","table","ol","ul"].concat("h1 h2 h3 h4 h5 h6".split(" ")),".\u272a ")+'{border-style:dotted;border-width:2px}.\u272a b    {border-color:#f47d43}.\u272a i    {border-color:#82b5e0}.\u272a u    {border-color:#bb94b7}.\u272a s    {border-color:#3b94b7}.\u272a span {border-color:#bb94b7}.\u272a code {border-color:#999999}.\u272a pre  {border-color:#999999}.\u272a ul   {border-color:#91c9cf}.\u272a ol   {border-color:#91c9cf}.\u272a p    {border-color:#bdd74b}.\u272a h1,.\u272a h2,.\u272a h3,.\u272a h4,.\u272a h5,.\u272a h6 {border-color:#f47d43}.\u272a br,.\u272a br:before{content:"\u21b5" !important;white-space:initial !important;line-height:inherit !important;font-size:inherit !important;font-style:normal !important;font-weight:700 !important;left:0 !important;top:0 !important;border:0;opacity:.5;}.\u272a br:after {content:"\\A" !important;white-space:pre-line}.\u272a\u272a *{position:relative}.\u272a\u272a *::before{position:absolute;top:-2px;left:-2px;line-height:8px;font-size:8px;font-weight:bold;font-style:normal;letter-spacing:0.5px;background:#fff;color:#111;opacity:0.5}.\u272a\u272a td::before{content:"TD"}.\u272a\u272a th::before{content:"TH"}.\u272a\u272a a::before{content:"A"}.\u272a\u272a b::before{content:"B"}.\u272a\u272a i::before{content:"I"}.\u272a\u272a u::before{content:"U"}.\u272a\u272a s::before{content:"S"}.\u272a\u272a p::before{content:"P"}.\u272a\u272a ul::before{content:"UL"}.\u272a\u272a ol::before{content:"OL"}.\u272a\u272a li::before{content:"LI"}.\u272a\u272a h1::before{content:"H1"}.\u272a\u272a h2::before{content:"H2"}.\u272a\u272a h3::before{content:"H3"}.\u272a\u272a h4::before{content:"H4"}.\u272a\u272a h5::before{content:"H5"}.\u272a\u272a h6::before{content:"H6"}.\u272a\u272a div::before{content:"DIV"}.\u272a\u272a sup::before{content:"SUP"}.\u272a\u272a sub::before{content:"SUB"}.\u272a\u272a pre::before{content:"PRE"}.\u272a\u272a span::before{content:"SPAN"}.\u272a\u272a code::before{content:"CODE"}.\u272a\u272a\u272a{padding:10px}.\u272a\u272a\u272a *{padding:2px 4px;margin:2px}',
dd={toggle:function(a,b){if(!a.ownerDocument.querySelector("style#aloha-metaview")){var c=a.ownerDocument,d=c.createElement("style");E.ra(d,"id","aloha-metaview");E.append(d,c.head);E.append(c.createTextNode(cd),d)}b=b||{};b.outline?E.addClass(a,"\u272a"):E.removeClass(a,"\u272a");b.tagname?E.addClass(a,"\u272a\u272a"):E.removeClass(a,"\u272a\u272a");b.padding?E.addClass(a,"\u272a\u272a\u272a"):E.removeClass(a,"\u272a\u272a\u272a")}};var ed=0;function fd(a){return a.nodeType}function gd(a){a=a.childNodes;for(var b=[],c=0,d=a.length;c<d;c++)b.push(F(a[c]));return b}function hd(a){return a.nodeName}function id(a){return a.data}
var jd={realize:E.attrs,get:bb.De(E.da)},kd={realize:r.Dc,get:bb.De(E.L)},F=wb.define({domNode:null,type:null,name:null,text:null,classes:{},children:null,affinity:3},function(a,b){var c=a.asTransient();if(b)if(b.nodeType)var d=bb(jd,b),e=bb(kd,b),c=c.setT(c.domNode,b),c=c.delayT(c.type,fd,b),c=c.delayT(c.name,hd,b),c=c.delayT(c.text,id,b),c=c.delayT(c.children,gd,b),c=c.setT(ld,d),c=c.setT(md,e),c=c.asPersistent(),c=c.asTransient().delayT(nd,od,c);else if(f.ea(b.text))if(f.ea(b.name))r.error(r.kh);
else{r.dc(b.text);r.dc(b.nodeType);var d=b.name,e=b.attrs||{},g=b.Th||{},k=b.children||[],m=b.affinity||3;r.assert(f.ea(e.style),r.$b);c=c.setT(c.domNode,b.domNode);c=c.setT(c.type,1);c=c.setT(c.name,d);c=c.setT(c.children,k);c=c.setT(c.affinity,m);c=c.setT(ld,bb.Se(e));c=c.setT(md,bb.Se(g))}else r.dc(b.name),r.dc(b.nodeType),d=b.affinity||3,c=c.setT(c.domNode,b.domNode),c=c.setT(c.type,3),c=c.setT(c.text,b.text),c=c.setT(c.affinity,d);c=c.setT(pd,++ed);c=c.setT(qd,1);a=c.asPersistent();return a=
rd.set(a,a)}),nd=F.prototype.classes,rd=F.Sa(),pd=F.Sa(),ld=F.Sa(),md=F.Sa(),sd=F.Sa(),td=F.Sa(),qd=F.Sa();function ud(a,b,c){var d=qd.get(a);d&1&&b!==(d&b)&&(a=c(a,d|b));return a}function vd(a,b){return wb.hookSetter(a,function(a){return ud(a,b,qd.set)},function(a){return ud(a,b,qd.set.setT)})}function wd(a){r.assert(1===a.type.get(a),r.mf)}function xd(a,b,c,d){return(a=a.get(c))&&a.hasOwnProperty(d)?a[d]:b.get(c).get(d)}
function yd(a,b,c,d,e){var g=a.get(c),g=v.Sc(g||{},d,e);c=c.asTransient();c=c.setT(a,g);c=ud(c,b,qd.set.setT);return c.asPersistent()}function zd(a,b){wd(a);r.assert("style"!==b,r.$b);return xd(sd,ld,a,b)}function Ad(a,b,c,d){var e=rd.get(a),e=b.set(e,c);return d(a,e)}function Bd(a,b){var c=rd.get(a);return b.get(c)}function Cd(a,b,c){v.forEach(b,function(b,e){c(a,e,b)})}
function Dd(a,b,c,d){var e=a.get(d);if(!e)return d;var g=d.domNode.get(d);Cd(g,e,c);c=b.get(d).mergeObject(e,!0);d=d.asTransient();d=d.setT(a,null);d=d.setT(b,c);return d.asPersistent()}var Ed=f.c(Dd,sd,ld,E.ra),Fd=f.c(Dd,td,md,E.i);function Gd(a,b){var c=a.name.get(a),d=a.attrs.get(a),c=b.createElement(c);Cd(c,d,E.ra);d=ld.get(a);E.ra(c,"style",d.get("style"));d=td.get(a);Cd(c,d,E.i);return c}
function Hd(a,b,c,d,e,g){b=d<b.length?b[d]:null;d=c;var k=d.type.get(d);1===k?d=Gd(d,e):3===k?d=e.createTextNode(d.text.get(d)):(r.Dc(),d=void 0);a.insertBefore(d,b);c=c.asTransient();c=c.setT(c.domNode,d);c=c.setT(pd,++ed);c=Ad(c,c.children,[],rd.set.setT);c=c.setT(qd,qd.get(c)|32);c=c.asPersistent();return c=Id(c,e,g)}function Jd(a){var b={};a.forEach(function(a){b[pd.get(a)]=!0});return b}
function Kd(a,b){if(b===a)return null;for(var c,d,e=null,g=0,k=0,m=a.length,n=b.length,p=[],s=!1;g<m&&k<n;){c=a[g];d=b[k];var t=pd.get(c),y=pd.get(d);t===y?(c===d?c=0:(s=!0,c=4),g+=1,k+=1):(e=e||Jd(b),e[t]?(s=!0,c=1,k+=1):(s=!0,c=2,g+=1));p.push(c)}for(;g<m;g++)s=!0,p.push(2);for(;k<n;k++)s=!0,p.push(1);return s?p:null}
function Ld(a,b,c){var d=a.children.get(a),e=Bd(a,a.children),g=Kd(e,d);if(!g)return a;var k=a.domNode.get(a),m=k.childNodes,n=[],p=0,s=0,t=0;g.forEach(function(g){var z;g&1?(z=d[s],s+=1):(g&2?z=e[p]:(z=d[s],s+=1),p+=1);var aa=z.affinity.get(z),X=Bd(a,a.affinity);(aa&1)!==(X&1)?aa&1&&!(g&2)?(z=Hd(k,m,z,t,b,c),t+=1):g&1||k.removeChild(m[t]):aa&1&&(g&1?(z=Hd(k,m,z,t,b,c),t+=1):g&2?k.removeChild(m[t]):(g&4&&(z=Id(z,b,c)),t+=1));g&2||n.push(z)});a=a.set(a.children,n);return a=Ad(a,a.children,n,rd.set)}
function Id(a,b,c){var d=a.type.get(a),e=qd.get(a);1===d?(e&2&&(r.Dc(),a=void 0),e&8&&(a=Ed(a)),e&16&&(a=Fd(a)),e&32&&(a=Ld(a,b,c))):3===d&&e&4&&(b=a.text.get(a),a.domNode.get(a).data=b,a=Ad(a,a.text,b,rd.set));return a}function Md(a,b){var c;1===a.type()?(c=Gd(a,b),a.children().forEach(function(a){c.appendChild(Md(a,b))})):3===a.type()?c=b.createTextNode(a.text.get(a)):r.Dc();return c}function od(a){a=zd(a,"class");return f.ea(a)?{}:v.Wc({},l.jf(a),!0)}
function Nd(a){var b=v.keys(a.get(a.classes)).join(" ");return yd(sd,8,a,"class",b)}var Od=vd(F.prototype.name,2),Pd=vd(F.prototype.text,4),Qd=vd(F.prototype.children,32),Rd=vd(F.prototype.affinity,64);
v.extend(F.prototype,{name:u.F(Od),text:u.F(Pd),children:u.F(Qd),affinity:u.F(Rd),attrs:u.F(u(function(a){wd(a);var b=ld.get(a);a=sd.get(a);b=b.realize();b=v.extend({},b,a);b=v.filter(b,f.ia(f.ea));delete b.style;return b},function(a,b){wd(a);r.assert(f.ea(b.style),r.$b);var c=ld.get(a),c=v.Wc({},c.keys(),null),c=v.extend(c,b);delete c.style;a=a.asTransient();a=ud(a,8,qd.set.setT);a=a.setT(sd,c);return a.asPersistent()})),attr:u.F(u(zd,function(a,b,c){wd(a);r.assert("style"!==b,r.$b);a=yd(sd,8,a,
b,c);"class"===b&&(a=a.set(nd,od(a)));return a})),style:u.F(u(function(a,b){wd(a);return xd(td,md,a,b)},function(a,b,c){wd(a);return yd(td,16,a,b,c)})),updateDom:f.F(function(a){var b=a.domNode.get(a).ownerDocument;r.assert(b,r.lf);return Id(a,b,{})}),asDom:f.F(Md),create:F,hasClass:f.F(function(a,b){return a.get(a.classes)[b]}),addClass:f.F(function(a,b){var c=a.get(a.classes);if(c[b])return a;c=v.Sc(c,b,!0);return a=a.set(a.classes,c)}),removeClass:f.F(function(a,b){var c=a.get(a.classes);if(!c[b])return a;
c=v.ne(c,b);return a=a.set(a.classes,c)})});F.prototype.attrs=u.F(wb.hookSetterRecompute(F.prototype.attrs,nd,od,od));F.prototype.classes=u.F(wb.hookSetter(nd,Nd,Nd));F.fh=1;F.ih=2;F.hh=4;F.gh=0;F.bh=1;F.dh=2;F.ah=3;F.uh=Kd;F.ELEMENT=1;F.TEXT=3;var Sd=F;function Td(a,b,c,d){var e=a.ownerDocument.createRange();e.setStart(a,b||0);c?e.setEnd(c,d||0):e.setEnd(a,b||0);return e}function Ud(a,b,c,d,e,g){b.setStart(a,c);b.setEnd(a,c);var k=h.m(b.getClientRects());return(g=k?{left:g||k.left,right:k.right,bottom:k.bottom}:null)&&e<g.bottom&&d>=g.left&&d<=g.right?(g.right-d>d-g.left&&c--,{node:a,index:c}):c<a.length?Ud(a,b,++c,d,e,g?g.left:null):null}
function Vd(a,b,c,d){if(E.b(a)){var e=Ud(a,b,0,c,d);if(e)return e}else if(b.setEndAfter(a),(e=h.m(b.getClientRects()))&&d<e.bottom&&c>=e.left&&c<=e.right)return{node:a.parentNode,index:E.u(a)};return a.nextSibling?Vd(a.nextSibling,b,c,d):{node:a.parentNode,index:E.u(a)}}function Wd(a){a=E.gd(a)?E.Hb(a):a;a=E.r(a,function(a){return a.parentNode&&!E.gd(a.parentNode)});return E.aa.DOCUMENT===a.nodeType?null:a}
var Xd={w:function(a){return a&&a.hasOwnProperty&&a.hasOwnProperty("commonAncestorContainer")&&a.hasOwnProperty("collapsed")&&a.hasOwnProperty("startContainer")&&a.hasOwnProperty("startOffset")},j:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset},create:Td,ca:function(a,b,c){a-=E.scrollLeft(c);b-=E.scrollTop(c);var d;d=a;if(0>d||0>b)d=null;else if(c.caretRangeFromPoint)d=c.caretRangeFromPoint(d,b);else if(c.caretPositionFromPoint)d=
c.caretPositionFromPoint(d,b),d=Td(d.offsetNode,d.offset);else if(c.elementFromPoint){var e=c.elementFromPoint(d,b),g=c.createRange(),k={node:e.firstChild,index:-1};g.selectNodeContents(e);g.collapse(!0);k=k.node?Vd(k.node,g,d,b):{node:e.parentNode,index:E.u(e)};d=Td(k.node,k.index)}else throw"fromPoint() unimplemented for this browser";if(!d)return null;if(E.eb(d.commonAncestorContainer))return d;d=Wd(d.commonAncestorContainer);if(!d||!d.parentNode)return null;c=c.body;b=E.offset(d);e=E.u(d);a+c.scrollLeft>
b.left+c.scrollLeft+d.offsetWidth&&(e+=1);return Td(d.parentNode,e)}};function Yd(a){var b=[];a.forEach(function(a){if("TD"===a.nodeName){var d=E.children(a);a=a.ownerDocument.createElement("th");E.Aa(d,a)}return b.push(a)});return b}var Zd=/mso-yfti-irow:\-1;/;function $d(a){var b=E.children(a),c=[],d,e,g;for(g=0;g<b.length;g++)d=$d(b[g]),"TR"===d.nodeName&&Zd.test(E.da(d,"style"))&&(d=E.clone(d),e=E.children(d),e.forEach(E.remove),E.move(Yd(e),d)),c.push(d);a=E.clone(a,!1);E.move(c,a);return a}var ae={transform:$d};var be=/^\s*((?:[0-9]{1,3}|[a-zA-Z]{1,5})+[\.\)])+\s*$/,ce=/mso-list:\s*Ignore/i,de=/mso-list:.*?level(\d+)/i;function ee(a){if(!a.firstChild)return null;a=be.exec(E.text(a.firstChild));return a?(a=/(\w+)/i.exec(a[0]))?a[1]:null:null}function fe(a){return"SPAN"===a.nodeName&&ce.test(E.da(a,"style"))?!0:!E.b(a)&&fe(a.firstChild)}function ge(a){return"P"===a.nodeName&&E.hasClass(a,"MsoListParagraphCxSpLast")}
function he(a){var b,c;a.firstChild?(c=E.L(a.firstChild,"fontFamily"),c="Wingdings"===c||"Symbol"===c?!1:null!==ee(a)):c=!1;var d=c?"ol":"ul";c=a.ownerDocument.createElement(d);if("ul"===d)return c;(a=ee(a))?/\d+/.test(a)?(b=a,a="1"):a=/i/i.test(a)?/I/.test(a)?"I":"i":/[A-Z]/.test(a)?"A":"a":a=b=void 0;Lb.Gb(b)&&E.ra(c,"start",b);Lb.Gb(a)&&E.ra(c,"type",a);return c}
function je(a,b){var c=he(a.node),d=a.items.reduce(function(c,d){var k=d.reduce(function(a,c){return a.concat(c[b]?je(c,b):c)},[]),m=a.node.ownerDocument.createElement("li");E.Aa(k,m);return c.concat(m)},[]);E.move(d,c);return c}
function le(a){var b=me,c,d,e,g,k,m,n,p="_aloha"+(new Date).getTime();for(c=0;c<a.length;c++){g=b(a[c]);n=(d=de.exec(E.da(g,"style")))&&d[1]?parseInt(d[1],10):1;k||(m=k={parent:null,na:1,node:g,items:[]},k[p]=!0);if(n>k.na)for(d=k.na;d<n;d++)k={parent:k,na:d+1,node:g,items:[]},k[p]=!0,e=h.m(k.parent.items),e||(e=[],k.parent.items.push(e)),e.push(k);if(n<k.na)for(d=n,e=k.na;d<e&&k.parent;d++)k=k.parent;d=g;("P"!==d.nodeName?0:E.hasClass(d,"MsoListParagraph")||E.hasClass(d,"MsoListParagraphCxSpFirst")||
E.hasClass(d,"MsoListParagraphCxSpMiddle")||E.hasClass(d,"MsoListParagraphCxSpLast"))&&g.firstChild&&fe(g.firstChild)?k.items.push(E.children(g).filter(f.ia(fe))):(e=h.m(k.items),e||(e=[],k.items.push(e)),e.push(g))}return m&&je(m,p)}
function me(a){var b=E.children(a),c=[],d,e=b.length,g,k;for(d=0;d<e;d++)if(k=b[d],"P"===k.nodeName&&E.hasClass(k,"MsoListParagraph"))c.push(le([k]));else if("P"===k.nodeName&&E.hasClass(k,"MsoListParagraphCxSpFirst")){if(k=E.oa(k,ge),(g=h.m(k).nextSibling)&&k.push(g),g=le(k))c.push(g),d+=k.length-1}else c.push(me(k));a=E.clone(a,!1);E.move(c,a);return a}var ne={transform:me};function oe(a){if(!(this instanceof oe))return new oe(a);a=a||{};this.startContainer=a.startContainer;this.startOffset=a.startOffset;this.endContainer=a.endContainer;this.endOffset=a.endOffset;this.commonAncestorContainer=a.commonAncestorContainer;this.collapsed=a.collapsed}
oe.prototype.update=function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset;if(a&&b){this.collapsed=a===b&&c===d;c=a;for(d=0;4>d;d++)c=c.parentNode||c;var d=E.pb(a,c),e=E.pb(b,c);c!==h.m(e)&&(d=E.Ja(a,f.D),e=E.Ja(b,f.D));this.commonAncestorContainer=h.fd(d,e)[0]}};oe.prototype.setStart=function(a,b){this.startContainer=a;this.startOffset=b;this.update()};oe.prototype.setEnd=function(a,b){this.endContainer=a;this.endOffset=b;this.update()};function pe(a,b){return[a,b]}function qe(a){return pe(a.parentNode,E.u(a))}function re(a){return pe(a.parentNode,E.u(a)+1)}function se(a){return[a,0]}function te(a){return pe(a,E.q(a))}function ue(a){var b=a[0];if(E.b(b)){r.ie(b.parentNode);var c=a[1];if(0===c)return qe(b);if(c>=E.q(b))return re(b)}return a}function ve(a,b){r.assert(-1<b,"Boundaries.create(): Offset must be 0 or greater");return ue([a,b])}function we(a,b){b=ue(b);a.setStart(b[0],b[1])}
function xe(a,b){b=ue(b);a.setEnd(b[0],b[1])}function ye(a,b,c){we(a,b);xe(a,c)}function ze(a){return ve(a.startContainer,a.startOffset)}function Ae(a){return ve(a.endContainer,a.endOffset)}function Be(a){return[ze(a),Ae(a)]}function Ce(a){return 0===ue(a)[1]}function De(a){a=ue(a);return a[1]===E.q(a[0])}function Ee(a){return 0===a[1]}function Fe(a){return a[1]===E.q(a[0])}function Ge(a){return E.b(a[0])}function He(a){a=ue(a);return De(a)?null:E.ga(a[0],a[1])}
function Ie(a){a=ue(a);return Ce(a)?null:E.ga(a[0],a[1]-1)}function Je(a){a=ue(a);return He(a)||a[0]}function Ke(a){return re(Je(a))}function Le(a){a=ue(a);var b=a[0];if(E.b(b)||Ce(a))return qe(b);b=E.ga(b,a[1]-1);return E.b(b)?qe(b):te(b)}function Me(a){a=ue(a);var b=a[0],c=a[1];if(E.b(b)||De(a))return Ke(a);a=E.ga(b,c);return E.b(a)?re(a):[a,0]}function Ne(a,b,c){for(;b(a);)a=c(a);return a}function Oe(a,b){return Xd.create(a[0],a[1],b[0],b[1])}
var G={w:function(a){return h.w(a)&&E.ye(a[0])&&"number"===typeof a[1]},get:function(a){a=a.getSelection();return 0<a.rangeCount?Be(a.getRangeAt(0)):null},select:function(a,b){b||(b=a);var c=Oe(a,b),d=c.commonAncestorContainer.ownerDocument.getSelection();d.removeAllRanges();d.addRange(c)},R:pe,create:ve,normalize:ue,j:function(a,b){return a[0]===b[0]&&a[1]===b[1]},a:function(a){return a[0]},offset:function(a){return a[1]},document:function(a){return a[0].ownerDocument},O:Oe,ub:Be,vb:function(a){a=
a||[];return h.Ee(a,Be)},va:ze,ab:Ae,ba:qe,jc:re,Jb:se,La:te,ca:function(a,b,c){return(a=Xd.ca(a,b,c))&&Be(a)[0]},Lc:ye,Ab:function(a,b){h.zd(b,2).forEach(function(b,d){ye(a[d],b[0],b[1])})},Od:we,Nd:xe,J:Ce,k:De,Lh:Ee,Kh:Fe,fa:Ge,Z:function(a){return!Ge(a)},next:Me,l:Le,pd:function(a){var b=a[0];return Fe(a)?re(b):Ge(a)?te(b):se(E.ga(b,a[1]))},Ad:function(a){var b=a[0];if(Ee(a))return qe(b);if(Ge(a))return[b,0];b=E.ga(b,a[1]-1);return te(b)},vc:Ke,v:function(a,b){return Ne(a,b,Me)},K:function(a,
b){return Ne(a,b,Le)},Td:Ne,$g:function(a,b,c,d){for(;a&&b(a);)d(a),a=c(a)},nextNode:Je,o:function(a){a=ue(a);return Ie(a)||a[0]},$:He,qa:Ie,ha:function(a,b){return Oe(a,b).commonAncestorContainer}};function H(a,b){this.node=a;this.atEnd=b}function Pe(a,b){return new H(a,b)}function Qe(a,b){return Pe(E.pa(a,b),G.k(G.R(a,b)))}ca=H.prototype;ca.next=function(){var a=this.node,b;if(this.atEnd||!E.t(a)){if(b=a.nextSibling)this.atEnd=!1;else{b=a.parentNode;if(!b)return!1;this.atEnd=!0}this.node=b}else(b=a.firstChild)?this.node=b:this.atEnd=!0;return!0};
ca.l=function(){var a=this.node,b;if(this.atEnd)(b=a.lastChild)?(this.node=b,E.t(b)||(this.atEnd=!1)):this.atEnd=!1;else{if(b=a.previousSibling)E.t(b)&&(this.atEnd=!0);else if(b=a.parentNode,!b)return!1;this.node=b}return!0};ca.af=function(){var a=this.C();return a?(this.node=a,this.atEnd=!1,!0):this.l()};ca.Qd=function(){if(this.atEnd)return this.next();this.atEnd=!0;return this.next()};ca.v=function(a){for(;a(this);)if(!this.next())return!1;return!0};
ca.K=function(a){for(;a(this);)if(!this.l())return!1;return!0};ca.parent=function(){return this.atEnd?this.node:this.node.parentNode};ca.C=function(){return this.atEnd?this.node.lastChild:this.node.previousSibling};ca.nextSibling=function(){return this.atEnd?null:this.node.nextSibling};ca.j=function(a){return a.node===this.node&&a.atEnd===this.atEnd};ca.ib=function(a){this.node=a.node;this.atEnd=a.atEnd};ca.clone=function(){return Pe(this.node,this.atEnd)};
ca.h=function(a){return E.h(a,this.node,this.atEnd)};H.prototype.next=H.prototype.next;H.prototype.prev=H.prototype.l;H.prototype.skipPrev=H.prototype.af;H.prototype.skipNext=H.prototype.Qd;H.prototype.nextWhile=H.prototype.v;H.prototype.prevWhile=H.prototype.K;H.prototype.parent=H.prototype.parent;H.prototype.prevSibling=H.prototype.C;H.prototype.nextSibling=H.prototype.nextSibling;H.prototype.equals=H.prototype.j;H.prototype.setFrom=H.prototype.ib;H.prototype.clone=H.prototype.clone;
H.prototype.insert=H.prototype.h;function Re(a,b){b.atEnd?a.setStart(b.node,E.q(b.node)):a.setStart(b.node.parentNode,E.u(b.node));return a}function Se(a,b){b.atEnd?a.setEnd(b.node,E.q(b.node)):a.setEnd(b.node.parentNode,E.u(b.node));return a}var Te={cursor:Pe,rb:Qe,create:Pe,Nf:Qe,Ye:function(a,b,c){b&&Re(a,b);c&&Se(a,c);return a},Od:Re,Nd:Se,jb:function(a){return a.atEnd?G.create(a.node,E.q(a.node)):G.create(a.node.parentNode,E.u(a.node))}};function Ue(a){return a.reduce(function(a,c){return a.concat(c.data)},[]).join("")}function Ve(a,b){for(var c=0,d,e=0;e<a.length;e++){d=a[e];if(c+E.q(d)>=b)return G.create(d,b-c);c+=d.length}return null}function We(a,b){return b(a,function(a){return!E.b(a)||E.e(a)})}
function Xe(a,b){var c,d=G.qa(a);d?c=E.q(d):(d=G.a(a),c=G.offset(a));var e=d;do{if(E.b(e)){var g=We(e,E.wc).reverse(),k=Ue(g),m=k.search(b);if(-1<m){if(d!==e||m<c)return Ve(g,m);m=k.substr(0,c).search(b);if(-1<m)return Ve(g,m)}}e=E.za(e)}while(e&&!E.e(e));return null}function Ye(a,b){var c,d=G.$(a);d?c=0:(d=G.a(a),c=G.offset(a));var e=d;do{if(E.b(e)){var g=We(e,E.oa),k=Ue(g);e===d&&(k=k.substr(c));k=k.search(b);if(-1<k)return Ve(g,c+k)}e=E.forward(e)}while(e&&!E.e(e));return null}
var Ze={search:function(a,b,c){return"backward"===c?Xe(a,b):Ye(a,b)},forward:function(a,b){return Ye(a,new RegExp(b))},za:function(a,b){return Xe(a,new RegExp(b+"(?!.*"+b+")"))}};var $e={n:function(a){"mousedown"===a.type&&(a.selection.formatting=[],a.selection.overrides=[]);return a},ae:{mouseup:!0,mousedown:!0,mousemove:!0,dblclick:!0,dragstart:!0,dragover:!0,dragend:!0}};var af={8:"backspace",9:"tab",12:"f1",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",23:"end",24:"home",27:"escape",32:"space",33:"pageUp",34:"pageDown",37:"left",38:"up",39:"right",40:"down",46:"delete",65:"selectAll",66:"bold",73:"italic",85:"underline",90:"undo",91:"meta"},bf={};v.forEach(af,function(a,b){bf[a]=parseInt(b,10)});
function cf(a){var b=[];a.altKey&&bf.alt!==a.which&&b.push("alt");a.ctrlKey&&bf.ctrl!==a.which&&b.push("ctrl");a.metaKey&&b.push("meta");a.shiftKey&&bf.shift!==a.which&&b.push("shift");return{meta:b.join("+"),keycode:a.which,key:af[a.which],chr:String.fromCharCode(a.which).toLowerCase()}}
var df={Ga:bf,ae:{keyup:!0,keydown:!0,keypress:!0},Zd:{37:"left",38:"up",39:"right",40:"down"},n:function(a){var b=cf(a.nativeEvent);a.meta=b.meta;a.keycode=a.keycode||b.keycode;return a},Pd:function(a,b,c){b=46>=b||91<=b?af[b]||b:String.fromCharCode(b).toLowerCase();return c[a?a+"+"+b:b]||c["*+"+b]||null},wg:cf};var ef={BR:!0,HR:!0,IMG:!0},ff={LI:!0,DT:!0,DD:!0},gf={inline:!0,"inline-block":!0,"inline-table":!0,none:!0};function hf(a){if(!a)return!1;switch(a.nodeType){case E.aa.DOCUMENT:case E.aa.DOCUMENT_FRAGMENT:return!0;case E.aa.ELEMENT:var b=E.getComputedStyle(a,"display");return b?!gf[b]:q.Ca(a);default:return!1}}
var jf={"background-color":!0,underline:!0},I={jd:function(a){return!jf[a]},uc:function(a){return"pre"===a||"pre-wrap"===a||"-moz-pre-wrap"===a},Kb:hf,bb:function(a){return!hf(a)},d:function(a){return ef[a.nodeName]||ff[a.nodeName]||hf(a)}};function kf(a){if(!E.b(a))return!1;if(!a.length)return!0;if(l.Pc.test(a.nodeValue)||l.Yb.test(a.nodeValue))return!1;var b;return a.parentNode&&(b=E.getComputedStyle(a.parentNode,"white-space"),I.uc(b))?!1:"pre-line"===b&&/[\r\n]/.test(a.data)?!1:!0}var lf={BR:!0,HR:!0,IMG:!0};function mf(a){return kf(a.node)||E.t(a.node)&&I.bb(a.node)&&!lf[a.node]}function nf(a){var b=a.clone();b.v(mf);if(!I.d(b.node))return!1;a.ib(b);return!0}
function of(a){var b=a.clone();b.l();b.K(mf);if(!I.d(b.node))return!1;var c="BR"===b.node.nodeName;b.next();if(c&&(c=a.clone(),nf(c)&&c.atEnd)){b.af();b.K(mf);if(!I.d(b.node))return!1;b.next()}a.ib(b);return!0}function pf(a){var b=a.parentNode;return b&&(a===b.firstChild||a===b.lastChild)}function qf(a){return a.previousSibling&&q.Ca(a.previousSibling)||a.nextSibling&&q.Ca(a.nextSibling)}
function rf(a){return!q.Ea(a)&&!q.f(a)&&0===E.q(a)||a.firstChild&&!E.v(a.firstChild,rf)?!0:kf(a)?pf(a)?E.b(a)?!E.Qa(a,!1,function(a){return q.Oa(a)&&!rf(a)},function(a){return I.d(a)||E.e(a)}):!1:qf(a)||nf(Te.create(a,!1))||of(Te.create(a,!1)):"BR"===a.nodeName&&pf(a)&&I.d(a.parentNode)&&(a.nextSibling&&"BR"===a.nextSibling.nodeName||a.previousSibling&&"BR"===a.previousSibling.nodeName||a.nextSibling&&E.v(a.nextSibling,rf)||a.previousSibling&&E.K(a.previousSibling,rf))?!0:!1}
function sf(a){return!rf(a)}var J={parse:function(a,b){var c=(b.implementation&&b.implementation.Of?b.implementation.Of():b).createElement("DIV");c.innerHTML=a;c=h.Y(c.childNodes);c.forEach(E.remove);return c},N:function(a){return q.Ea(a)||!E.eb(a)},s:sf,M:rf,fb:function(a){return kf(a)?nf(Te.cursor(a,!1))||of(Te.cursor(a,!1)):!1},Nh:kf,mg:function(a){var b=a.parentNode;if("BR"!==a.nodeName||!b||!I.d(b))return!1;b=E.children(b).filter(sf);return 1===b.length&&a===b[0]},bf:nf,Qg:of};var K={j:function(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(b[c]!==a[c])return!1;return!0},jb:function(a,b){var c=b.slice(0,-1).reduce(function(a,b){return a.childNodes[b]||a},a);return G.R(c,h.m(b)||0)},H:function(a,b){var c=G.offset(b),d=G.a(b);if(d===a)return[c];c=E.qb(d,a).reduce(function(a,b){return a.concat(E.u(b))},[c]);c.reverse();return c}};var tf={A:!0,ABBR:!0,B:!0,CITE:!0,CODE:!0,DEL:!0,EM:!0,I:!0,INS:!0,S:!0,SMALL:!0,SPAN:!0,STRONG:!0,SUB:!0,SUP:!0,U:!0,"#text":!0},uf=l.cc.join(""),vf=h.tb(l.ac,l.Zb).join(""),wf=new RegExp("["+vf+"]+["+uf+"]*$"),yf=new RegExp("[^"+vf+"]["+vf+uf+"]*$"),zf=new RegExp("[^"+vf+uf+"]"),Af=new RegExp("[^"+uf+"]");function Bf(a,b,c){return E.Qa(a,!0,b,c||E.e)}function Cf(a,b,c){return E.Qa(a,!1,b,c||E.e)}
function Df(a){var b=G.a(a);a=G.offset(a);var c=E.b(b);return c&&-1<b.data.substr(0,a).search(wf)?!1:0===a?!!Bf(b,function(a){return q.Oa(a)&&J.s(a)},function(a){return I.d(a)||E.e(a)}):c&&0!==b.data.substr(a).search(wf)?!0:!!Cf(b,function(a){return q.Oa(a)&&J.s(a)},function(a){return I.d(a)||E.e(a)})}
function Ef(a){var b=G.a(a);a=G.offset(a);var c=b.data.substr(0,a);if(!zf.test(c))return Df(G.R(b,0))?1:-1;var d=c.match(yf)[0].length-1;a=2>d?a:a-d+1;if(0===a)return 0;b=G.R(b,a-1);return zf.test(c.charAt(a-1))||Df(b)?a:Ef(b)}function Ff(a){var b=G.a(a),c=G.offset(a);a=b.data.substr(c).search(Df(a)?Af:zf);return-1===a?-1:c+a}function Gf(a){if(G.Z(a))return null;var b=Ff(a);return-1===b?null:G.create(G.a(a),b+1)}
function Hf(a){if(G.Z(a))return null;var b=Ef(a);return-1===b?null:G.create(G.a(a),b-1)}function If(a,b,c,d,e){return G.normalize(b(a,function(a){var b=c(a);return J.M(b)?!0:e(a)?E.e(b)||q.f(b)&&d(a)?!1:!0:!E.b(b)&&!J.N(b)}))}function Jf(a,b){return G.Td(a,b,Kf)}function Lf(a,b){return G.Td(a,b,Mf)}function Nf(a){return If(a,Lf,G.o,G.k,G.J)}function Of(a){return If(a,Jf,G.nextNode,G.J,G.k)}
function Pf(a,b){if(G.fa(a)){var c=b.Ie(a);if(c)return c}c=b.td(a);if(E.e(c))return a;if(E.b(c)||J.M(c))return Pf(b.Mc(a),b);if(I.d(c))return b.expand(b.Mc(a));for(;!J.s(c)||!(E.b(c)||I.d(c)||E.e(c));)a=b.Mc(a),c=b.td(a);return Pf(a,b)}function Kf(a){if(G.Z(a)){var b=G.$(a);if(b&&J.N(b))return G.vc(a)}return G.pd(a)}function Mf(a){if(G.Z(a)){var b=G.qa(a);if(b&&J.N(b))return G.ba(b)}return G.Ad(a)}
var Qf={Ie:Gf,Mc:Kf,expand:Of,Cf:G.$,td:G.nextNode,Zf:function(a){return a.nextSibling},Vg:function(a){a=G.R(a,0);return Pf(a,Qf)}},Rf={Ie:Hf,Mc:Mf,expand:Nf,Cf:G.qa,td:G.o,Zf:function(a){return a.previousSibling},Vg:function(a){a=G.R(a,E.q(a));return Pf(a,Rf)}};
function Sf(a){var b;if(G.fa(a)){b=Ff(a);if(-1===b)return(b=G.$(a))&&J.M(b)?Sf(G.vc(a)):b&&J.N(b)?a:Sf(G.next(a));if(G.offset(a)===b)return a;a=G.create(G.a(a),b);return Sf(a)}b=G.nextNode(a);if(E.b(b))return Sf(G.pd(a));for(;!E.e(b)&&J.M(b);)a=G.next(a),b=G.nextNode(a);return a}function Tf(a,b){var c,d;a=Sf(G.normalize(a));for(b=Sf(G.normalize(b));a&&!G.j(a,b);){c=G.nextNode(a);if(E.e(c)||(d=E.b(c)||J.N(c)||I.d(c))&&J.s(c))return!1;a=Sf(G.next(a))}return!0}
function Uf(a){var b;if(G.fa(a)){b=Ef(a);if(-1===b){for(b=G.l(a);Tf(b,a)&&!I.d(G.o(b));)b=G.l(b);return Uf(b)}if(G.offset(a)===b)return a;a=G.create(G.a(a),b);return Uf(a)}b=G.o(a);if(E.b(b))return Uf(G.Ad(a));for(;!E.e(b)&&J.M(b);)a=G.l(a),b=G.o(a);return a}
function Vf(a){var b,c;if(G.Z(a))return b=G.nextNode(a),c=G.pd(a),tf[b.nodeName]?Vf(c):a;c=G.a(a);b=G.offset(a);c=c.data.substr(b).search(l.bc);b=-1===c?-1:b+c;return-1===b?(c=G.next(a),b=G.nextNode(c),tf[b.nodeName]?Vf(c):c):b===G.offset(a)?a:G.R(G.a(a),b)}
function Wf(a){var b,c;if(G.Z(a))return b=G.o(a),c=G.Ad(a),tf[b.nodeName]?Wf(c):a;b=G.a(a);c=G.offset(a);b=b.data.substr(0,c).search(l.de);b=-1===b?-1:b+1;return-1===b?(c=G.l(a),b=G.o(c),tf[b.nodeName]?Wf(c):c):b===G.offset(a)?a:G.R(G.a(a),b)}function Xf(a){if(G.k(a))return!0;if(G.fa(a))return!zf.test(G.a(a).data.substr(G.offset(a)));a=G.$(a);return!E.v(a,J.M)}
var L={l:function(a,b){if("node"===b)return G.l(a);a=Uf(G.normalize(a));var c;switch(b){case "char":c=Hf(a);break;case "word":c=Wf(a);Tf(c,a)&&(c=Pf(a,Rf));break;case "boundary":c=Mf(a);break;default:c=Pf(a,Rf)}return c&&Uf(c)},next:function(a,b){if("node"===b)return G.next(a);a=Sf(G.normalize(a));var c;switch(b){case "char":c=Gf(a);break;case "word":c=Vf(a);Tf(a,c)&&(c=Pf(a,Qf));break;case "boundary":c=Kf(a);break;default:c=Pf(a,Qf)}return c},o:function(a){return Xf(a)?G.a(a):G.qa(a)},nextNode:function(a){return Xf(a)?
G.a(a):G.$(a)},Re:Ef,rd:Ff,Qe:Uf,Ke:Sf,Nc:Kf,Sd:Mf,J:function(a){if(G.J(a))return!0;if(G.fa(a))return!zf.test(G.a(a).data.substr(0,G.offset(a)));a=G.qa(a);return!E.K(a,J.M)},k:Xf,cb:Tf,Za:Nf,$a:Of,Oc:function(a,b,c){var d=G.ha(a,b),e=K.H(d,a).reverse(),g=K.H(d,b),k=G.a(a),m=E.children(k);c(m.slice(e[0],k===d?g[0]:m.length));e.slice(1,-1).reduce(function(a,b){var d=E.children(a);c(d.slice(b+1,d.length));return a.parentNode},k.parentNode);1<e.length&&c(E.children(d).slice(h.m(e)+1,g[0]));g.slice(1).reduce(function(a,
b){var d=E.children(a);c(d.slice(0,b));return d[b]},E.children(d)[g[0]]);return[a,b]}};function Yf(a,b){if(!(0<b&&b<a.nodeValue.length))return a;var c=a.parentNode,d=a.nodeValue,e=c.ownerDocument,g=e.createTextNode(d.substring(0,b)),d=e.createTextNode(d.substring(b,d.length));c.insertBefore(g,a);c.insertBefore(d,a);c.removeChild(a);return g}function Zf(a,b,c,d){var e=a[0];a=a[1];e===b?a<=c||!c?e=d:(e=d.nextSibling,a-=c):e===d.parentNode&&(b=E.u(d),a>b&&(a+=1));return[e,a]}
function $f(a,b,c,d,e,g,k,m){var n=a[0];a=a[1];n===b?(n=d,a+=m?e:0):n===d?a+=m?0:c:n===g&&(a===k?(n=d,a=m?e:0):m||a!==k+1?a>k&&(a-=1):(n=d,a=c));return[n,a]}function ag(a,b,c,d){var e=a[0];a=a[1];e===b||E.contains(b,e)?(e=c,a=d):e===c&&a>d&&(a-=1);return[e,a]}function bg(a,b,c,d,e){var g=a[0],k=a[1];b===g&&(e?k>=c:k>c)&&(a=[g,k+d]);return a}
function cg(a,b,c,d,e){a=G.normalize(a);var g=a[0],k=a[1];if(!E.b(g)){var m=k<E.Ec(g)?E.ga(g,k):null,g=0<k?E.ga(g,k-1):null;m===b?a=[m,0]:g===b&&(a=[g,E.q(g)])}return G.normalize(bg(a,b,c,d,e))}function dg(a,b,c){a=G.normalize(a);return bg(a,b.parentNode,E.u(b),1,c)}function eg(a,b){var c=Array.prototype.slice.call(arguments,2);return b.map(function(b){return a.apply(null,[b].concat(c))})}
function fg(a,b){var c=a[0],d=a[1];if(E.b(c)&&0<d&&d<c.nodeValue.length){var e=G.vb(b);e.push(a);var g=Yf(c,d),c=eg(Zf,e,c,d,g);a=c.pop();G.Ab(b,c)}return a}var gg={BODY:!0,HTML:!0,STYLE:!0,SCRIPT:!0,AREA:!0,BASE:!0,BR:!0,COL:!0,COMMAND:!0,EMBED:!0,HR:!0,IMG:!0,INPUT:!0,KEYGEN:!0,LINK:!0,META:!0,PARAM:!0,SOURCE:!0,TRACK:!0,WBR:!0};
function hg(a,b){a=G.normalize(a);if(b&&b(a))return a;if(G.fa(a))return hg(fg(a),b);var c=G.a(a);if(gg[c.nodeName])return a;var d=E.X(c),e=G.$(a);e&&E.move(E.oa(e),d);E.wb(d,c);return hg(L.Nc(a),b)}function ig(a,b,c,d){if(!b||!E.b(b))return a;var e=G.vb(c),g=a.parentNode,k=E.u(a),m=a.length,n=b.length;b.insertData(d?n:0,a.data);g.removeChild(a);e=eg($f,e,a,m,b,n,g,k,d);G.Ab(c,e);return b}function jg(a,b){E.b(a)&&(a=ig(a,a.previousSibling,b,!0),ig(a,a.nextSibling,b,!1))}
function kg(a,b,c,d,e,g){e.push([a,b]);e=eg(cg,e,a,b,c,d);a=e.pop();G.Ab(g,e);return a}function lg(a,b,c,d){c.push([a.parentNode,E.u(a)]);c=eg(dg,c,a,b);a=c.pop();G.Ab(d,c);return a}function mg(a,b){var c=G.vb(b),d=a.parentNode,e=E.u(a);d.removeChild(a);c=eg(ag,c,a,d,e);G.Ab(b,c)}function ng(a){var b=G.a(a),c=b.ownerDocument.createRange();a=G.offset(a);c.setStart(b,a);c.setEnd(b,a);return c}function og(a){return G.ub(a)[0]}
var M={removeNode:function(a,b){var c=b.map(ng);mg(a,c);return c.map(og)},Hg:function(a,b){mg(a,[b])},Jd:mg,Kd:function(a,b){b.forEach(function(b){b.node===a&&(b.node.firstChild?b.next():b.Qd())});E.xa(a)},Ig:function(a,b,c){var d=E.zb(a,b);return c.reduce(function(a,c){return a.concat(d===G.a(c)?[G.create(b,G.offset(c))]:[c])},[])},ve:function(a,b,c,d){var e=G.vb(d);if(!a.length)return b;var g=b[0],k=b[1];if(E.b(g)&&k<E.q(g))return g.insertData(k,a),kg(g,k,a.length,c,e,d);b=E.pa(g,k);g=G.k(G.R(g,
k));if(E.b(b))return b.insertData(0,a),kg(b,0,a.length,c,e,d);if((k=g?b.lastChild:b.previousSibling)&&E.b(k))return b=E.q(k),k.insertData(b,a),kg(k,b,a.length,c,e,d);a=b.ownerDocument.createTextNode(a);E.h(a,b,g);return lg(a,c,e,d)},ka:function(a,b,c,d){var e=G.vb(d);b=fg(b,d);var g=G.nextNode(b);b=G.k(b);E.h(a,g,b);return lg(a,c,e,d)},Sg:Yf,Rg:function(a){fg(G.va(a),[a]);fg(G.ab(a),[a])},ld:function(a,b){jg(a,[b])},og:jg,Ub:fg,Bb:hg};var pg={TEXT_LEFT:"\u2593[",TEXT_RIGHT:"]\u2593",ELEMENT_LEFT:"\u2593{",ELEMENT_RIGHT:"}\u2593",TEXT_SINGLE:"\u2593",ELEMENT_SINGLE:"\u2588"},qg={TEXT_LEFT:"[",TEXT_RIGHT:"]",ELEMENT_LEFT:"{",ELEMENT_RIGHT:"}",TEXT_SINGLE:"\u00a6",ELEMENT_SINGLE:"|"};
function rg(a,b,c){var d=c?pg:qg,e=G.a(a);c=G.a(b);var g=e.ownerDocument;c=g.createTextNode(E.b(c)?d.TEXT_RIGHT:d.ELEMENT_RIGHT);d=g.createTextNode(E.b(e)?d.TEXT_LEFT:d.ELEMENT_LEFT);b=G.O(a,b);a=M.Ub(G.va(b),[b]);b=M.Ub(G.ab(b));E.h(c,G.nextNode(b),G.k(b));E.h(d,G.nextNode(a),G.k(a));return[a,b]}
function sg(a,b,c){var d=!b;b=b||a;var e=G.ha(a,b),g=E.aa.DOCUMENT===e.nodeType?e:e.ownerDocument;a=K.H(e,a);b=K.H(e,b);var k;if(e.parentNode)k=K.H(e.parentNode,G.ba(e)),e=G.a(K.jb(e.parentNode.cloneNode(!0),k));else{e=e.cloneNode(!0);k=g.createDocumentFragment();var m=g.createDocumentFragment();E.append(e,m);E.append(m,k);k=[]}a=k.concat(a);b=k.concat(b);d?(d=K.jb(e,a),c=c?pg:qg,c=G.a(d).ownerDocument.createTextNode(G.fa(d)?c.TEXT_SINGLE:c.ELEMENT_SINGLE),d=M.Ub(d),E.h(c,G.nextNode(d),G.k(d))):rg(K.jb(e,
a),K.jb(e,b),c);if(E.aa.DOCUMENT_FRAGMENT!==e.nodeType)return e.outerHTML;g=g.createElement("div");E.append(e,g);return g.innerHTML}
var tg={hint:function(a,b){if(Lb.Gb(a.length))return"string"===typeof a[0].nodeName?sg(a,a,b):sg(a[0],a[1],b);var c;c=[G.R(a.startContainer,a.startOffset),G.R(a.endContainer,a.endOffset)];return sg(c[0],c[1],b)},h:rg,hc:function(a){var b=["[","{","}","]"],c=0,d=[];E.Cb(a,function(a){if(E.b(a)){var g=l.cf(a.nodeValue,/[\[\{\}\]]/g);if(h.contains(b,g[0])||!(2>g.length)){var k=!1;g.forEach(function(g,n){k=k||0===n;if(h.contains(b,g)){var p;if(0===c){if(p=0,"["!==g&&"{"!==g)throw"end marker before start marker";
}else if(1===c){if(p=1,"]"!==g&&"}"!==g)throw"start marker before end marker";}else throw"Too many markers";c+=1;if("["===g||"]"===g){var s=a.previousSibling;s&&E.b(s)||(s=a.ownerDocument.createTextNode(""),a.parentNode.insertBefore(s,a));d[p]=[s,s.length];k=!1}else d[p]=[a.parentNode,E.u(a)],k=!0}else!k&&a.previousSibling&&E.b(a.previousSibling)?a.previousSibling.insertData(a.previousSibling.length,g):a.parentNode.insertBefore(a.ownerDocument.createTextNode(g),a)});a.parentNode.removeChild(a)}}});
if(2!==c)throw"Missing one or both markers";return d}};var ug=Gc;function vg(a){!q.Ca(a)||ug.Ge&&E.r(a,f.ia(E.isContentEditable))||a.firstChild&&E.v(a.firstChild,J.fb)||E.h(a.ownerDocument.createElement("br"),a,!0)}function wg(a,b){return G.v(a,function(a){return G.j(a,b)||I.d(G.nextNode(a))?!1:G.k(a)?!E.e(G.a(a)):!0})}function xg(a,b){var c=!1;G.K(b,function(b){return G.j(a,b)?(c=!0,!1):0<G.offset(b)&&(b=E.pa(G.a(b),G.offset(b)-1),(E.b(b)||q.Ea(b))&&J.s(b))?c=!1:!0});return c}
function yg(a){return E.b(a)?J.s(a):0<E.children(a).filter(function(a){return q.f(a)||J.s(a)}).length}
function zg(a){function b(a){return"BR"!==a.nodeName&&J.M(a)}if("BR"!==a.nodeName)return!1;var c=a.previousSibling&&E.K(a.previousSibling,b),d=a.nextSibling&&E.v(a.nextSibling,b);if(c&&d&&q.Oa(a.parentNode)||!(!c||"BR"!==c.nodeName&&I.d(c)||!d||"BR"!==d.nodeName&&I.d(d))||c&&"BR"===c.nodeName||d&&"BR"===d.nodeName)return!0;for(c=G.ba(a);L.J(c);){if(I.d(G.a(c)))return!0;c=G.l(c)}for(c=G.vc(G.ba(a));L.k(c);){if(I.d(G.a(c)))return!1;c=G.next(c)}return!I.d(L.nextNode(c))}
function Ag(a){var b=G.a(a).ownerDocument,c=b.createElement("br");a=M.ka(c,a,!0);return zg(c)?a:M.ka(b.createElement("br"),a)}function Bg(a,b){var c=G.a(a);if(!x.ta(c.nodeName,b))return Ag(a);c=c.ownerDocument.createElement(b);M.ka(c,a);return G.create(c,0)}function Cg(a){return!J.N(a)&&(I.d(a)||E.e(a))}function Dg(a){return M.Bb(a,function(a){return Cg(G.a(a))})}function Eg(a,b){E.Ka(G.a(a),function(a){b=M.removeNode(a,b)},function(a){return I.d(a)||E.e(a)||J.s(a)});return b}
function Fg(a){var b=G.qa(a);a=G.$(a);return b&&zg(b)?b:a&&zg(a)?a:null}function Gg(a){var b=E.Rb(a).filter(q.f),c=E.yb(a).filter(q.f);a=a.parentNode;if(0<b.length){var d=E.X(a);E.Pb([d],a);E.move(b,d)}0<c.length&&(b=E.X(a),E.gb([b],a),E.move(c,b))}
function Hg(a,b){Gg(a);var c=a.ownerDocument,d=a.parentNode;if(!q.f(d.parentNode))return c=c.createElement(b),E.xa(d),E.zb(a,c),vg(c),G.create(c,0);var e=M.Bb(G.ba(d),function(a){return q.Da(G.a(a))});E.remove(d);d=G.nextNode(e);return E.children(d).filter(J.s).length?(a=c.createElement("li"),vg(a),M.ka(a,e,!0),G.create(a,0)):G.create(d,0)};var Ig={Sb:vg,Gd:function(a,b){function c(a){return e===a?!0:J.mg(a)?!1:q.f(a)?yg(a):J.s(a)}if(!xg(a,b))return[a,b];var d=G.nextNode(b),e=G.a(a),g=wg(a,b);if(G.j(g,b))return E.Ka(d,E.remove,c),[a,a];var k=d.parentNode,m=E.oa(d,I.d);0===m.length&&(k=d);m.reduce(function(a,b){return M.ka(b,a,!0)},g);k&&E.Ka(k,E.remove,c);return[a,a]},dd:function(a,b){var c=Fg(a);c&&(a=M.ka(c.ownerDocument.createElement("br"),a,!0));var d=G.a(a);if(q.f(d)&&!d.firstChild)return Hg(d,b);var c=Dg(a),e=G.$(c),g=e?E.oa(e):
[],d=G.a(c);e&&Cg(e)?c=Bg(c,b):E.e(d)?(c=Bg(c,b),e=G.a(c),g=E.move(g,e,Cg),E.gb(g,e)):c=M.Bb(c,function(a){return G.a(a)===d.parentNode});g=G.K(c,function(a){var b=G.o(a);return!(G.J(a)||J.N(b)||E.b(b))});c=G.v(c,function(a){var b=G.nextNode(a);return!(G.k(a)||J.N(b)||E.b(b))});c=[g,c];c=Eg(c[0],c);c=Eg(c[1],c);d=G.a(c[1]);!d.firstChild&&q.Mb(d)&&(c=M.Ig(d,d.ownerDocument.createElement(b),c));g=c[0];c=c[1];vg(G.a(g));vg(G.a(c));return(g=(g=G.$(c))&&E.v(g,function(a){return!zg(a)&&J.M(a)}))&&Cg(g)?
M.ka(g.ownerDocument.createElement("br"),c):c},ed:Ag,Je:wg,ze:zg,Ae:xg,Zg:function(a){Gg(a);E.xa(a.parentNode);for(var b=a.ownerDocument,c=E.children(a).filter(J.s),d,e=[];0<c.length;)I.d(c[0])?e.push(c.shift()):(c=h.split(c,I.d),d=b.createElement("p"),E.move(c[0],d),e.push(d),c=c[1]);E.gb(e,a);E.remove(a);return e},Rh:Gg},N={s:J.s,M:J.M,fb:J.fb,parse:J.parse,N:J.N,jd:I.jd,uc:I.uc,Kb:I.Kb,bb:I.bb,d:I.d,Sb:Ig.Sb,dd:Ig.dd,Gd:Ig.Gd,ed:Ig.ed,ze:Ig.ze,Je:Ig.Je,Ae:Ig.Ae,l:L.l,next:L.next,o:L.o,nextNode:L.nextNode,
Re:L.Re,rd:L.rd,Qe:L.Qe,Ke:L.Ke,J:L.J,k:L.k,cb:L.cb,Za:L.Za,$a:L.$a,Nc:L.Nc,Sd:L.Sd,Oc:L.Oc,Ca:q.Ca,la:q.la,Na:q.Na,Mb:q.Mb,Oa:q.Oa,Da:q.Da,f:q.f,kd:q.kd,Nb:q.Nb,Ea:q.Ea};function Jg(a){var b=N.next(a,"char");return b&&G.fa(b)?(a=G.a(b),b=G.offset(b),a.data.substr(b-1,1)):""}function Kg(a,b){var c=N.l(a,b);return"word"===b&&l.bc.test(Jg(c))?Kg(c,b):c}function Lg(a,b){return"word"===b&&l.bc.test(Jg(a))?Lg(N.next(a,"char"),b):N.next(a,b)}function Mg(a,b){var c=G.ha(a,b),c=E.Ua(c,function(a){return N.d(a)||E.e(a)}),c=h.m(c),d=E.q(c);return[G.create(c,0),Lg(G.create(c,d))]}
var O={expand:function(a,b,c){switch(c){case "word":return[Kg(a,"word")||a,Lg(b,"word")||b];case "block":return Mg(a,b);default:throw'"'+c+"\"? what's that?";}},next:Lg,l:Kg,za:N.Sd,forward:N.Nc,J:N.J,k:N.k,ig:N.ig,Uc:function(a){if(G.Z(a))return a;var b=N.rd(a);a=G.a(a);return-1===b?G.La(a):G.create(a,b)}};function Ng(a,b){for(var c=0,d=a.length;c<d;c++)if(b[c]!==a[c])return[];return b.slice(c)}function Og(a,b){var c=a.ownerDocument.body,d=K.H(c,G.ba(a));return b.reduce(function(a,b){var k=K.H(c,b);return a.concat([Ng(d,k)])},[])}function Pg(a){if(a[0]&&a[0].wd)return a;var b=(new Date).getTime();return a.reduce(function(a,d){var e=d[0].concat(),g=d[1].concat();e.wd=g.wd=++b;return a.concat([e,g])},[])}function Qg(a,b){return a-b}function Rg(a){return a.parentNode?N.N(a):N.Ea(a)}
function Sg(a,b,c,d){function e(a,b){s[a]||(s[a]=[]);r.assert(2>=s[a].length,"Pairing must only be between 2 boundaries");s[a].push(b)}function g(a,b){e(b.wd,a)}c=c||0;d=d||[];var k=Pg(b||[]),m=!1,n=[],p=[],s={};b=E.children(a);b.forEach(function(a,b){var s,t=0,ba=d.concat(b);E.b(a)?(s=k.filter(function(a){return 1===Ng(ba,a).length}),s.forEach(function(a){g(c+(h.m(a)||0),a)}),m&&n.push([c,c,"split"]),p.push(a.data),t=a.data.length,m=!0):Rg(a)?(n.push([c,c+1,a]),p.push("\uf8ff"),t=1,m=!1):(s=Sg(a,
k,c,ba),n=n.concat([[c,c+s.content.length,a]],s.formatting),p.push(s.content),t+=s.content.length,m=!1,v.forEach(s.vg,function(a,b){a.forEach(f.c(e,b))}));s=k.filter(f.c(K.j,ba));s.forEach(f.c(g,c));c+=t});k.filter(f.c(K.j,d.concat(b.length))).forEach(f.c(g,c));var t=[];v.forEach(s,function(a){t.push(a.sort(Qg))});return{boundaries:t,formatting:n,vg:s,element:a,content:p.join("")}}
function Tg(a){return{sb:a.sb||[],formatting:a.formatting||[],boundaries:a.boundaries||[],sa:a.sa||[],content:a.content||"",element:a.element}}function Ug(a,b){return v.g(Tg(a),b)}
function Vg(a,b,c){function d(a,d){var e=d[0],n=d[1];if(e>b&&n<c)return a.concat([[-1,-1]]);b<e&&(e-=Math.min(e,c)-b);b<n&&(n-=Math.min(n,c)-b);return a.concat([[e,n].concat(d.slice(2))])}r.assert(b<=c,"Start offset must be smaller than, or equal, to the end offset");var e=a.content;return Ug(a,{content:e.substring(0,b)+e.substring(c),sa:a.sa.reduce(function(a,d){var e=d[0];if(e>b&&e<c)return a.concat([[-1]]);b<e&&(e-=Math.min(e,c)-b);return a.concat([[e].concat(d.slice(1))])},[]),boundaries:a.boundaries.reduce(d,
[]),formatting:a.formatting.reduce(d,[]),sb:a.sb.reduce(d,[])})}
function Wg(a,b,c,d){function e(a,c){var e=c[0],k=c[1],t=c[2],y;t&&Rg(t)?(t=function(a,b){return b<=a},y=function(a,b){return b<a}):t=y=d;return a.concat([[t(e,b)?e+g:e,y(k,b)?k+g:k].concat(c.slice(2))])}var g=c.length,k=a.content;return Ug(a,{content:k.substring(0,b)+c+k.substring(b),sa:a.sa.reduce(function(a,c){var e=c[0];return a.concat([[d(e,b)?e+g:e].concat(c.slice(1))])},[]),boundaries:a.boundaries.reduce(e,[]),formatting:a.formatting.reduce(e,[]),sb:a.sb.reduce(e,[])})}
function Xg(a,b,c){return Wg(a,b,c,function(a,b){return b<=a})}var Yg=l.cc.join(""),Zg=h.tb(l.ac,l.Zb).join(""),$g=new RegExp("[^"+Zg+Yg+"]"),ah=new RegExp("["+Zg+"]");function bh(a){return E.r(a,function(a){return!N.d(a)&&!E.e(a)})}function ch(a,b){var c=b.length?Og(a,b):[],c=h.zd(c,2);return Sg(a,c)}function dh(a,b){return a.filter(function(a){return b!==a&&b[0]<=a[0]&&a[1]<=b[1]})}function eh(a,b){return a[0]===b[0]&&a[1]===b[1]?0:a[0]>b[0]||a[0]===b[0]&&a[1]<b[1]?1:-1}
function fh(a,b,c){b=b.sort(eh);c=c||[0,a.length];var d=c[0],e=d,g=b.reduce(function(a,b){b[0]>=e&&(a=a.concat([b]),e=b[1]);return a},[]),k=[];g.forEach(function(c){c[0]>d&&k.push({text:a.substring(d,c[0])});var e,g=c[2];e=dh(b,c);e=0<e.length?fh(a,e,c):Rg(g)?[]:[{text:a.substring(c[0],c[1])}];k.push({hb:g,name:g.nodeName,pg:e});d=c[1]});e=h.m(g);e[1]<c[1]&&k.push({text:a.substring(e[1],c[1])});return k}
function gh(a,b){var c=b.ownerDocument,d=a.reduce(function(a,b){var d;f.ea(b.text)?(d=c.createElement(b.name),d.hb=b.hb,gh(b.pg,d)):d=c.createTextNode(b.text);return a.concat(d)},[]);E.move(d,b);return b}function hh(a,b){if(h.contains(a,b)||h.contains(a,b.hb))return!0;var c=a.map(function(a){return a.hb});return h.contains(c,b)}
function ih(a,b,c,d){var e=E.children(a);b=E.children(b);for(var g,k,m=0,n=0,p=e.length,s=b.length,t=[];m<p&&n<s;)g=e[m],k=b[n],g===k||g.hb===k||k.hb===g||"#text"===g.nodeName&&g.data===k.data?(t.push(0),m++,n++):hh(b,g)?(hh(e,k)?t.push(-2):t.push(1),n++):(t.push(-1),m++);for(;m<p;)hh(b,e[m])||t.push(-1),m++;for(;n<s;)t.push(hh(e,b[n])?-2:1),n++;k=g=0;m=t.length;for(n=0;n<m;n++)p=t[n],0===p?(p=b[k],E.t(p)&&ih(p.hb,p,c,d),g++,k++):1===p?(c(a,g,b[k]),g++,k++):-1===p?d(a,g):(c(a,g,e[g]),g++,k++)}
function jh(a,b,c){var d=E.children(a);0===d.length?E.append(c,a):b===d.length?E.gb([c],h.m(d)):E.Pb([c],d[b])}function kh(a,b){E.remove(E.children(a)[b])}function lh(a,b,c){if(a[0]>=b[1])return!1;var d=a[0]<=b[1]&&b[1]<=a[1];return a[0]<=b[0]&&b[0]<=a[1]&&d?!1:c||lh(b,a,!0)}
function mh(a,b,c){c=a.element.ownerDocument.createElement(c);var d=b.concat(c);return a.formatting.sort(eh).reduce(function(a,b){if(!lh(b,d))return a.concat([b]);var c=b.slice(2);return b[0]<d[0]?a.concat([[b[0],d[0]].concat(c),[d[0],b[1]].concat(c)]):a.concat([[b[0],d[1]].concat(c),[d[1],b[1]].concat(c)])},[]).concat([d]).sort(eh)}
var nh="sup sub s u b i".split(" "),oh={w:function(a){return a.hasOwnProperty("custom")&&a.hasOwnProperty("formatting")&&a.hasOwnProperty("boundaries")&&a.hasOwnProperty("spaces")&&a.hasOwnProperty("content")&&a.hasOwnProperty("element")},hint:function(a,b){var c;"number"===typeof b?(c=a.content,c=c.substring(0,b)+"\u2593"+c.substring(b)):h.w(b)?(c=a.content,r.assert(b[0]<=b[1],"Start offset must be smaller, or equal, to end offset"),c=c.substring(0,b[0])+"\u2593["+c.substring(b[0],b[1])+"]\u2593"+
c.substring(b[1])):c=a.content;return c},create:function(a){a=h.w(a)?ch(bh(G.a(a[0])),a):ch(a,[]);a=Tg(a);for(var b=a.content,c=[],d="",e=0,g;;){g=b.search($g);if(-1===g){c.push([e,b.substring(0,b.length)]);a=Vg(a,e,e+b.length);break}if(0===g){g=b.search(ah);if(-1===g)break;d=b.charAt(g-1);b=b.substring(g);e+=g}else 0===e||g===b.length?(c.push([e,b.substring(0,g)]),a=Vg(a,e,e+g),b=a.content):1===g?("\uf8ff"===d?(d=b.charAt(0),c.push([e,b.substring(0,g)]),a=Vg(a,e,e+g),b=a.content):(d=b.charAt(0),
b=b.substring(1)),e++):"\uf8ff"===d?(d=b.charAt(0),c.push([e,b.substring(0,g)]),a=Vg(a,e,e+g),b=a.content,e++):(e++,c.push([e,b.substring(1,g)]),a=Vg(a,e,e+g-1),d=b.charAt(g-1),b=b.substring(g))}a=Ug(a,{sa:c});return{custom:a.sb,formatting:a.formatting,boundaries:a.boundaries,spaces:a.sa,content:a.content,element:a.element}},remove:Vg,update:function(a){a.formatting=mh(a,a.boundaries[0],nh.pop());for(var b,c,d=a.sa.length,e=0;e<d;e++)b=a.sa[e][0],c=a.sa[e][1],a=Xg(a,b,c);a=Ug(a,{sa:[]});b=a.element;
c=b.ownerDocument.createElement(b.nodeName);E.ra(c,"contentEditable","true");c=gh(fh(a.content,a.formatting),c);ih(b,c,jh,kh);return a},format:mh,wb:function(a,b,c){return Wg(a,b,c,function(a,b){return b<a})},insertBefore:Xg,uf:"\uf8ff"};function ph(a){return"#text"===a.name()}function qh(a,b){a=arguments[0];return 1===arguments.length?ph(a)?a.text():a.children():ph(a)?a.text(b.join("")):a.children(b)}function rh(a,b,c){return{V:a,T:b,frames:c}}function sh(a){return h.m(a.frames)}function P(a){return a.T[0]}function th(a,b){b="number"===typeof b?b:1;return 0===b?a:rh(a.V.concat(a.T.slice(0,b)),a.T.slice(b),a.frames.concat())}function uh(a){return rh([],qh(P(a)),a.frames.concat(a))}
function vh(a){var b=a.V.concat(a.T),c=h.m(a.frames),b=qh(P(c),b);return rh(c.V.concat(),[b].concat(c.T.slice(1)),a.frames.slice(0,-1))}function xh(a){return a.frames.reduce(vh,a)}function yh(a){return a.reduce(function(a,c){return a+c.text().length},0)}
function zh(a,b){a=xh(a);for(var c,d=[];;)if(Ah(a)){a=vh(a);if(Bh(a))break;d=d.slice(0,-1);c=b(P(a),d);a=th(Ch(a,c),c.length)}else Dh(a)?(c=!0===P(vh(a)).hd?yh(a.V.filter(ph)):a.V.length,c=b(P(a),d.concat(c)),a=th(Ch(a,c),c.length)):(Bh(a)||d.push(a.V.length),a=uh(a));return a}function Eh(a,b){b=b||f.Jc;for(a=xh(a);b(a);)if(Ah(a)){do{if(Bh(a))return a;a=vh(a)}while(Ah(a));a=th(a)}else a=Dh(a)?th(a):uh(a);return a}
function Fh(a){var b=a.children().filter(ph).reduce(function(a,b){return a.concat(b.text())},[]).join("");return a.vd&&a.vd.text()===b?a.vd:Gh([b])}function Hh(a){return P(a).domNode()}function Ih(a){return"string"===typeof a?"\u201c"+a+"\u201d":ph(a)?a.text():a.domNode().outerHTML}function Jh(a,b){return[a.substr(0,b),a.substr(b)]}function Kh(a,b,c){c=c?c.constructor===Sd||c.constructor===wb?[c]:c:[];return rh(a.V.concat(),c.concat(a.T.slice(b)),a.frames.concat())}
function Lh(a,b){return Kh(a,0,b)}function Ch(a,b){return Kh(a,1,b)}var Mh=0;function Nh(a){var b=document.createElement("code");b.innerHTML=++Mh;b=Sd(b);b.sc=!0;b.Fe=a;return b}function Oh(a){return!0===a.sc}
function Ph(a,b){var c={};v.forEach(b,function(b,e){var g,k;g=a;g=xh(g);k=Hh(g);var m=k.ownerDocument.body;k=K.H(m,G.ba(k));var m=K.H(m,b),n;b:{for(n=0;n<k.length;n++)if(m[n]!==k[n]){n=[];break b}n=m.slice(n)}if(0===n.length)k=null;else{k=Nh(e);b:{m=g;for(g=n.concat().reverse();g.length;){for(;Oh(P(m));)m=th(m);n=g.pop();if(ph(P(m))){g=m;m=n;m=Jh(qh(P(g)),m);g=rh([m[0]],[m[1]],g.frames.concat(g));break b}if(!0===P(m).hd){d:{var p=n;if(0===p)n=[0];else{n=P(m).children();for(var s=n.length,t=0,y=void 0,
y=void 0;t<s;)if(y=n[t],Oh(y))t++;else{y=p-y.text().length;if(0===y){n=[t+1];break d}if(0>y){n=[t,p];break d}t++;p=y}throw"Text offset out of bounds";}}m=th(uh(m),n[0]);1!==n.length&&(n=Jh(qh(P(m)),n[1]),m=th(Kh(m,1,[qh(Gh(),[n[0]]),qh(Gh(),[n[1]])])))}else s=n,n=uh(m),m=s+P(m).children().slice(0,s).filter(Oh).length,m=th(n,m)}g=m}"string"===typeof P(g)&&(m=vh(g),n=Sd(document.createElement("q")),n.hd=!0,n.vd=P(m),g=rh([qh(Gh(),g.V)],[qh(Gh(),g.T)],uh(Ch(m,n)).frames.concat()));g=Lh(g,k)}c[e]=k;a=
g});return{xb:a,Ob:c}}function Gh(a){var b=document.createTextNode("");return"undefined"===typeof a?Sd(b):qh(Sd(b),a)}function Bh(a){return 0===a.frames.length}function Dh(a){a=P(a);return"#text"===a.name()||Oh(a)||N.Ea(a.domNode())}function Ah(a){return 0===a.T.length}
function Qh(a,b){b=b||f.D;if(Bh(sh(a))||b(a))return a;var c,d,e=vh(a);"string"===typeof P(a)?(c=Gh(),d=Gh()):(c=Sd(E.X(P(e).domNode())),d=Sd(E.X(P(e).domNode())));c=qh(c,a.V);d=qh(d,a.T);a=rh(e.V.concat(c),[d].concat(e.T.slice(1)),e.frames.concat());return Qh(a,b)}function Rh(a,b){a=Eh(xh(a),function(a){a=P(a);return!(a&&Oh(a)&&a===b)});return Bh(a)?null:a}
var Q={go:Rh,Xa:Hh,hint:function(a){return a.V.map(Ih).concat("\u2593",a.T.map(Ih)).join("")},update:function(a){var b=[];a=zh(a,function(a,c){return Oh(a)?(a.Fe&&b.push({name:a.Fe,path:c}),[]):[!0===a.hd?Fh(a):a]});var c=P(a).updateDom().domNode();return b.reduce(function(a,b){a[b.name]=K.jb(c,b.path);return a},{})},Fb:function(a){return h.m(a.V)},Ta:P,l:function(a,b){b="number"===typeof b?b:1;return 0===b?a:rh(a.V.slice(0,-b),a.V.slice(-b).concat(a.T),a.frames.concat())},next:th,Wb:vh,Ya:uh,root:xh,
yg:sh,split:Qh,splice:Kh,h:Lh,replace:Ch,remove:function(a){return Kh(a,1)},Yd:function(a,b){return Ph(rh([],[Sd(a)],[]),b)},J:function(a){return 0===a.V.length},k:Ah,Rd:function(a,b,c){return Qh(Rh(a,b),c)},gg:function(a,b,c){return Lh(Rh(a,b),c)},sc:Oh,Pf:Nh};function Sh(a,b){if(a!==b)throw Error("assertion error "+a+" !== "+b);}function Th(){throw Error();}function Uh(a){a=G.normalize(a);return G.Z(a)?G.J(a)?null:E.ga(a[0],a[1]-1):a[0]}function Vh(a){a=G.normalize(a);return G.Z(a)?G.k(a)?null:E.ga(a[0],a[1]):a[0].nextSibling}function Wh(a){a=G.normalize(a);var b=Uh(a),c=0;G.Z(a)||(c+=a[1],b=b.previousSibling);for(;b&&E.b(b);)c+=E.q(b),b=b.previousSibling;return c}function Xh(a,b,c){return{changes:b,meta:a,selection:c}}
function Yh(a,b){for(var c=[];b&&a!==b;){var d=b.parentNode;if(!d)return[];var e=E.Ac(b);c.push([e,d.nodeName]);b=d}c.reverse();return c}function Zh(a,b){for(var c=0;c<b.length-1;c++){var d=b[c];Sh(d[1],a.nodeName);a=E.Bc(a,d[0])}d=h.m(b);c=d[0];a=E.v(a,E.Lb);Sh(d[1],a.nodeName);if(E.b(a)){if(0===c)throw Error("assertion error "+c+" === 0");for(;c>E.q(a);)d=E.b(a),Sh(d,!0),c-=E.q(a),a=a.nextSibling;E.b(a)||(Sh(c,0),a=a.parentNode,c=E.u(a))}else c=E.Ic(a,c);return G.normalize([a,c])}
function $h(a,b){var c=Yh(a,b),d=E.Cc(b);c.push([d,b.nodeName]);return c}function ai(a,b){b=G.normalize(b);var c,d=Wh(b);d?(c=Uh(b),c=E.K(c,E.Lb),c=Yh(a,c),c.push([d,"#text"])):c=G.k(b)?$h(a,b[0]):Yh(a,Vh(b));return c}function bi(a,b){if(!b)return null;var c=ai(a,G.va(b)),d=ai(a,G.ab(b));return c&&d?{start:c,end:d}:null}function ci(a,b){if(b.opts.noObserve)a.observer.discardChanges();else{var c=a.observer.takeChanges();c.length&&b.records.push({changes:c})}}
function di(a,b,c,d){(d.opts.partitionRecords&&!d.opts.noObserve||!!c.opts.noObserve!==!!d.opts.noObserve)&&ci(a,b)}function ei(a){a.frame&&(a.observer.disconnect(),a.frame=null)}function fi(a,b){b=b||{};var c=a.frame,d=a.observer,e=a.elem,g={opts:v.g(b,{noObserve:b.noObserve||c&&c.opts.noObserve}),records:[],oldRange:bi(e,b.oldRange),newRange:null};c?(di(a,c,g,c),a.stack.push(c)):d.observeAll(e);a.frame=g}
function gi(a,b){var c=a.frame,d=a.stack.pop();d?di(a,c,c,d):(ci(a,c),ei(a));var e=c.opts.noObserve;Sh(!(e||!b||!b.changes),!1);e&&b&&b.changes&&b.changes.length&&c.records.push({changes:b.changes});c.newRange=bi(a.elem,b&&b.newRange);d&&(d.records.push({frame:c}),a.frame=d);return c}function hi(a,b,c){fi(a,b);b=c();return gi(a,b)}function ii(a,b,c){hi(a,v.g(b,{noObserve:!0}),c);(a=a.frame)&&a.records.pop()}function ji(a,b){return{type:"insert",path:a,content:b}}
function ki(a,b){return{type:"delete",path:a,content:b}}function mi(a,b,c){var d=[];v.forEach(c,function(a){var c=a.name,k=a.ns;d.push({name:c,ns:k,oldValue:a.oldValue,newValue:E.re(b,k,c)})});return{type:"update-attr",path:a,attrs:d}}
function ni(a,b,c,d){a.forEach(function(a){var g=E.ja(a.node),k=a.type;if(4===k){var k=a.C,m=a.target,n=k?c:d,p=E.ja(k?k:m),s=n[p]=n[p]||[];b[g]?delete b[g]:s.push(a);if(a=c[g])delete c[g],!s.length&&a.length&&(g=a[0],g.C=k,g.target=m),n[p]=s.concat(a)}else 0===k?(Sh(!!b[g],!1),b[g]=a):Th()})}function oi(a,b){var c=b.C,d=b.target,e=a.node;return c?c===e||E.contains(c,e)?!0:!E.ua(c,e)&&!E.contains(e,c):d===e||E.contains(d,e)?!1:!E.ua(d,e)&&!E.contains(e,d)}
function pi(a,b){var c=b.C,d=b.target;return c?E.contains(c,a)?!0:E.contains(a,c)?!1:E.ua(a,c):a===d||E.contains(d,a)||E.contains(a,d)?!1:E.ua(a,d)}function qi(a,b){var c=4&a.type,d=4&b.type,e;if(c&&d){c=a.C;d=b.C;e=a.target;var g=b.target;e=c?pi(c,b):d?!pi(d,a):E.ua(e,g)}else c||d?!c&&d?e=oi(a,b):c&&!d&&(e=!oi(b,a)):e=E.ua(a.node,b.node);return e?-1:1}function ri(a){a.sort(qi);a.forEach(function(a){(5===a.type?a.records:[a]).forEach(function(a){a.Va&&4&a.type&&ri(a.Va)})})}
function si(a,b){var c={};b.forEach(function(a){(5===a.type?a.records:[a]).forEach(function(a){var b=a.type;if(b&4||0===b){var b=E.ja(a.node),d=c[b]||[];d.push(a);c[b]=d}})});var d=E.ja(a);Sh(!!c[d],!1);var e={type:0,node:a,Va:[]};c[d]=[e];b.forEach(function(a){var b=E.r(4&a.type?a.target:a.node.parentNode,function(a){return!c[E.ja(a)]});b&&c[E.ja(b)].forEach(function(b){b.Va.push(a)})});return e.Va}
function ti(a,b,c,d){function e(a){var b=E.ja(a.node);4===a.type&&(a.gf=c[b],a.hf=d[b]);delete c[b];delete d[b]}var g={},k={},m={};ni(b,m,g,k);b=v.kb(g).concat(v.kb(k));b=b.filter(function(a){return a.length});b=b.map(function(a){var b=a[0];a.forEach(e);return{type:5,records:a,target:b.target,C:b.C}});m=v.kb(m);m.forEach(e);a=si(a,b.concat(m).concat(v.kb(c)).concat(v.kb(d)));ri(a);return a}
function ui(a,b,c){var d=b.C;d?(b=E.u(d)+1,d=[d.parentNode,b]):d=[b.target,0];c?(c=G.normalize(d),d=Vh(c),Wh(c)&&(d=E.v(d,E.b)),a=d?Yh(a,d):$h(a,c[0])):a=ai(a,d);return a}function vi(a){var b=a.node,c;E.b(b)?c=(a=a.hf)?b.ownerDocument.createTextNode(a.oldValue):E.clone(b):(c=E.clone(b),(b=a.gf)&&v.forEach(b.attrs,function(a){E.Md(c,a.ns,a.name,a.oldValue)}));return c}
function wi(a,b,c,d){var e=null,g=null;d.forEach(function(d){var m=d.type,n;if(5===m){g=null;n=a.concat(ui(b,d));var p=a.concat(ui(b,d,!0)),s=null;d.records.forEach(function(a){var b=a.Va;b.length&&(wi(p,a.node,c,b),s=null);a=vi(a);s?s.push(a):(s=[a],c.push(ki(n,s)))})}else 0===m?(m=d.node,n=a.concat(ai(b,[m.parentNode,E.u(m)])),g&&g===m.previousSibling?e.push(E.clone(m)):(e=[E.clone(m)],c.push(ji(n,e))),g=m):1===m?(g=null,m=d.node,n=a.concat(ai(b,[m.parentNode,E.u(m)])),c.push(mi(n,m,d.attrs))):
2===m?(g=null,m=d.node,n=a.concat(ai(b,[m.parentNode,E.u(m)])),c.push(ki(n,[m.ownerDocument.createTextNode(d.oldValue)])),c.push(ji(n,[E.clone(m)]))):Th()})}
function xi(a,b){var c={},d={},e=[];b.forEach(function(a){var b=a.target,g=a.oldValue,k=a.type,t;if("attributes"===k)k=a.attributeName,a=a.attributeNamespace,t=E.ja(b),t=(c[t]=c[t]||{type:1,node:b,attrs:{}}).attrs,g={oldValue:g,name:k,ns:a},k=k+" "+a,t[k]=t[k]||g;else if("characterData"===k)t=E.ja(b),d[t]=d[t]||{type:2,node:b,oldValue:g};else if("childList"===k){var y=a.previousSibling;h.Y(a.removedNodes).forEach(function(a){e.push({type:4,node:a,target:b,C:y,Va:[],gf:null,hf:null})});h.Y(a.addedNodes).forEach(function(a){e.push({type:0,
node:a,Va:[]})})}else Th()});var g=ti(a,e,c,d),k=[];wi([],a,k,g);return k}function yi(){function a(){var a=c.concat(d.takeRecords());c.length=0;return xi(b,a)}var b=null,c=[],d=new MutationObserver(function(a){c=c.concat(a)});return{observeAll:function(a){d.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0});b=a},takeChanges:a,discardChanges:a,disconnect:function(){b=null;c.length=0;d.disconnect();d=null}}}
function zi(){var a=null,b=null;return{observeAll:function(c){a=c;b=E.clone(c)},takeChanges:function(){if(E.isEqualNode(b,a))return[];var c=b,d=E.clone(a);b=d;var e=[];e.push([0,d.nodeName]);var g=[];g.push(ki(e,E.children(c)));g.push(ji(e,E.children(d)));return g},discardChanges:function(){b=E.clone(a)},disconnect:function(){b=a=null}}}
function Ai(a,b,c,d,e){var g=b.type,k,m;"update-attr"===g?(k=Zh(a,b.path),m=Vh(k),b.attrs.forEach(function(a){E.Md(m,a.ns,a.name,a.newValue)})):"update-range"===g?(g=b.newRange,c&&g&&(b=Zh(a,g.start),a=Zh(a,g.end),G.Lc(c,b,a))):"insert"===g?(k=Zh(a,b.path),b.content.forEach(function(a){a=E.clone(a);E.b(a)&&e.push(a);k=M.ka(a,k,!0,d)})):"delete"===g?(k=Zh(a,b.path),k=M.Ub(k,d),m=E.pa(k[0],k[1]),b.content.forEach(function(a){var b;if(E.b(a))for(var c=E.q(a);c;){Sh(m.nodeName,a.nodeName);var g=E.q(m);
c>=g?(b=m.nextSibling,M.Jd(m,d),c-=g):(k=M.Ub([m,c],d),c=Uh(k),b=Vh(k),M.Jd(c,d),c=0,e.push(b));m=b}else b=m.nextSibling,Sh(m.nodeName,a.nodeName),M.Jd(m,d),m=b})):Th()}function Bi(a,b,c){var d=[];b.forEach(function(b){Ai(a,b,null,c,d)});d.forEach(function(a){M.og(a,c)})}function Ci(a,b,c,d){Bi(a,b.changes,d);c&&b.selection&&Ai(a,b.selection,c,d,[])}
function Di(a){var b=a.type,c;"update-attr"===b?c=v.g(a,{attrs:a.attrs.map(function(a){return v.g(a,{oldValue:a.newValue,newValue:a.oldValue})})}):"update-range"===b?c=v.g(a,{oldRange:a.newRange,newRange:a.oldRange}):"insert"===b?c=v.g(a,{type:"delete"}):"delete"===b?c=v.g(a,{type:"insert"}):Th();return c}function Ei(a){var b=a.changes.slice(0).reverse().map(Di);return Xh(a.meta,b,Di(a.selection))}
function Fi(a,b){var c=[];b.records.forEach(function(b){var e=b.frame;b=e?Fi(a,e):b.changes;c=c.concat(b)});return c}function Gi(a,b){return Xh(a.opts.meta,b,{type:"update-range",oldRange:a.oldRange,newRange:a.newRange})}function Hi(a,b){var c=[];b.records.forEach(function(d){var e;(e=d.frame)?(d=Fi(a,e),e=Gi(e,d)):e=Gi(b,d.changes);c.push(e)});return c}
function Ii(a){Sh(!!a.stack.length,!1);var b=a.history,c=a.historyIndex,d=a.frame;ci(a,d);var e=Hi(a,d);if(e.length){b.length=c;c=h.m(b);if(1===e.length&&c&&!a.hg){var g=e[0],k=a.opts,m=c.changes,n=g.changes;if(m.length&&n.length){var p=c.meta&&c.meta.type,s=g.meta&&g.meta.type;if("typing"!==p&&"enter"!==p||"typing"!==s)c=null;else{var m=m[0],n=n[0],p=m.path,s=n.path,t=h.m(p),y=h.m(s);t&&"#text"!==t[1]&&(t=["#text",0],p=p.concat([t]));"insert"!==m.type||m.type!==n.type||"#text"!==t[1]||t[1]!==y[1]||
1!==m.content.length||1!==n.content.length||!E.b(m.content[0])||!E.b(n.content[0])||k.sg<=E.q(m.content[0])||t[0]+E.q(m.content[0])!==y[0]||!h.gc(p.slice(0,p.length-1),s.slice(0,s.length-1),h.gc)?c=null:(k=E.clone(m.content[0]),k.insertData(E.q(k),n.content[0].data),c=Xh(c.meta,[ji(p,[k])],{type:"update-range",oldRange:c.selection.oldRange,newRange:g.selection.newRange}))}}else c=null;c&&(b.pop(),e=[c])}a.hg=!1;b=b.concat(e);e=a.opts.tg;b.length>e&&(b=b.slice(b.length-e,b.length));d.records=[];a.history=
b;a.historyIndex=b.length}}
var Ji={ya:function(a,b){b=v.g({sg:20,tg:1E3},b);var c={elem:a,observer:null,stack:[],frame:null,opts:b,history:[],historyIndex:0};c.observer=!b.noMutationObserver&&window.MutationObserver?yi():zi();return c},qe:fi,close:ei,qg:gi,ob:hi,xg:ai,th:function(a,b){var c=Fi(a,b);return Gi(b,c)},Ih:Ei,qh:Ci,oh:Ii,rg:ji,undo:function(a,b,c){Ii(a);var d=a.history,e=a.historyIndex;if(e){var e=e-1,g=Ei(d[e]);ii(a,{meta:{type:"undo"}},function(){Ci(a.elem,g,b,c)});a.historyIndex=e}},Te:function(a,b,c){Ii(a);var d=
a.history,e=a.historyIndex;if(e!==d.length){var g=d[e],e=e+1;ii(a,{meta:{type:"redo"}},function(){Ci(a.elem,g,b,c)});a.historyIndex=e}}};function Ki(a,b){return a[b.nodeName]}function Li(a){return N.s(a)?!E.t(a)||"none"!==E.L(a,"display"):!1}function Mi(a,b,c){var d=Ni;return b.filter(f.c(f.ia(Ki),a.Wa)).filter(Li).reduce(function(b,g){c(a,g).forEach(function(g){b=b.concat(d(a,g,c))});return b},[])}function Oi(a){return a.reduce(function(a,c){var d=E.children(c);1===d.length&&N.d(d[0])&&(N.Na(c)?N.la(d[0])||E.xa(d[0]):!N.la(c)&&N.d(c)&&(c=d[0]));d=E.X(c);E.move(Oi(E.children(c)),d);return a.concat(d)},[])}
function Ni(a,b,c){return c(a,b).reduce(function(b,e){if(a.Wa[e.nodeName]||!Li(e))return b;var g=Mi(a,E.children(e),c);if("DIV"===e.nodeName){var k=a.defaultBlock,m=N.Oa,n=[],p,s=g.length,t;for(t=0;t<s;t++){for(p=[];t<s&&m(g[t]);)p.push(g[t]),t++;0<p.length&&(n.push(p[0].ownerDocument.createElement(k)),E.move(p,h.m(n)));t<s&&n.push(g[t])}g=n}k=E.X(e);E.move(Oi(g),k);return b.concat(k)},[])}
var Pi={$d:{defaultBlock:"p",nb:x.nb(),mb:x.mb(),Wa:x.Wa(),Qb:x.Qb()},normalize:function(a,b,c){var d=b.ownerDocument.createDocumentFragment();E.move(Ni(a,b,c),d);return d},hc:function(a){a=a.replace(/\n/g," ");a=a.replace(/<iframe.*?<\/iframe>/g,"");var b=/<body.*?>/i.exec(a),c=/<\/body.*?>/i.exec(a);return b&&c?(b=a.indexOf(b[0])+b[0].length,c=a.indexOf(c[0]),a.slice(b,c)):a},Kc:function(a,b){var c=a.ownerDocument.createElement(b);E.move(E.children(E.clone(a)),c);return c}};var Qi=/MsoToc(\d+)/;function Ri(a){return E.t(a)?(a=Qi.exec(E.da(a,"class")))?0<a.length:!1:!1}function Si(a,b){var c=a.node.ownerDocument.createElement("ul"),d=a.items.reduce(function(c,d){var k=d.reduce(function(a,c){return a.concat(c[b]?Si(c,b):c)},[]),m=a.node.ownerDocument.createElement("li");E.Aa(k,m);return c.concat(m)},[]);E.move(d,c);return c}
function Ti(a){var b=f.ia(Ri),c=E.children(a),d=[],e=c.length,g,k,m;for(g=0;g<e;g++)if(m=c[g],"P"===m.nodeName&&E.hasClass(m,"MsoTocHeading"))d.push(Pi.Kc(m,"h1"));else if(Ri(m)){k=m=h.split(E.oa(m),b)[0];for(var n=Ti,p=void 0,s=void 0,t=void 0,y=void 0,z=void 0,aa=void 0,X=t=void 0,ba="_aloha"+(new Date).getTime(),p=0;p<k.length;p++){y=n(k[p]);X=(s=Qi.exec(E.da(y,"class")))&&s[1]?parseInt(s[1],10):null;if(!z)aa=z={parent:null,na:1,node:y,items:[]},z[ba]=!0;else if(X>z.na)for(s=z.na;s<X;s++)z={parent:z,
na:s+1,node:y,items:[]},z[ba]=!0,t=h.m(z.parent.items),t||(t=[],z.parent.items.push(t)),t.push(z);else if(X<z.na)for(s=X,t=z.na;s<t&&z.parent;s++)z=z.parent;z.items.push(E.children(y))}if(k=aa&&Si(aa,ba))d.push(k),g+=m.length-1}else d.push(Ti(m));a=E.clone(a,!1);E.move(d,a);return a};var Ui={transform:Ti},Vi=/xml|v\:\w+/i,Wi=/o\:(\w+)/i;function Xi(a,b){if(b.nodeType===E.aa.COMMENT||Vi.test(b.nodeName))return[];if(E.b(b))return[E.clone(b)];if(E.hasClass(b,"MsoTitle"))return[Pi.Kc(b,"h1")];if(E.hasClass(b,"MsoSubtitle"))return[Pi.Kc(b,"h2")];var c;return(c=(c=b.nodeName.match(Wi))?c[1]:null)?[Pi.Kc(b,c)]:[E.clone(b)]}
var Yi={transform:function(a,b,c){c||(c=Pi.$d);a=N.parse(Pi.hc(a),b);b=b.createElement("div");E.move(a,b);c=Pi.normalize(c,b,Xi)||b;c=ne.transform(c);c=Ui.transform(c);c=ae.transform(c);c=E.children(c);return 0===c.length?"":c[0].innerHTML},lg:function(a,b){var c=b.createElement("div");E.move(N.parse(a,b),c);return null!==c.querySelector('[style*="mso-"],[class^="Mso"]')}};var Zi={1:"0.63em",2:"0.82em",3:"1em",4:"1.13em",5:"1.5em",6:"2em",7:"3em"};function $i(a,b){var c=(a["*"]||[]).concat(a[b.nodeName]||[]);h.contains(c,"*")||(c=c.reduce(function(a,c){a[c]=E.L(b,c);return a},{}),E.Fd(b,"style"),v.forEach(c,function(a,c){a&&E.i(b,c,a)}))}
function aj(a,b){b=E.clone(b);if(E.b(b))return[b];var c;switch(b.nodeName){case "IMG":c=b;var d=E.da(c,"width"),e=E.da(c,"height");d&&E.i(c,"width",d);e&&E.i(c,"height",e);break;case "FONT":c=b;do{var d=E.children(c),e=E.L(c,"color")||E.da(c,"color"),g=E.L(c,"font-size")||Zi[E.da(c,"size")],k=E.L(c,"font-family")||E.da(c,"face"),m=void 0;1===d.length&&E.t(d[0])?m=d[0]:(m=c.ownerDocument.createElement("span"),E.move(d,m));e&&E.i(m,"color",e);g&&E.i(m,"font-size",g);k&&E.i(m,"font-family",k);c=m}while("FONT"===
c.nodeName);break;case "CENTER":c=b;break;default:c=b}if(E.qc(c))return[c];d=c;e=a.mb;g=(e["*"]||[]).concat(e[d.nodeName]||[]);e=v.keys(E.attrs(d));g=h.fd(g,e);h.tb(e,g).forEach(f.c(E.Fd,d));$i(a.nb,c);"SPAN"===c.nodeName&&(E.mc(c)||(d=c.ownerDocument.createDocumentFragment(),E.move(E.children(c),d),c=d));d=E.children(c);for(e=0;e<d.length;e++)if(!x.ta(c.nodeName,d[e].nodeName))return d;return[c]};var bj={bd:function(a,b,c){c||(c=Pi.$d);var d=b.createDocumentFragment();E.move(N.parse(Pi.hc(a),b),d);return E.Gc(Pi.normalize(c,d,aj))},Ne:function(a){return a.split(/\n/).reduce(function(a,c){return a.concat("<p>",c.trim()||"<br>","</p>")},[]).join("")},He:Yi.transform};function cj(a,b){return a.editables[E.ja(b)]}function dj(a,b){delete a.editables[b.id]}function ej(a,b){a.editables[b.id]=b;b.editor=a}function fj(a){Ji.close(a.undoContext)}
var gj={defaultBlock:"p",nb:x.nb(),mb:x.mb(),Wa:x.Wa(),Qb:x.Qb()},hj={$f:cj,H:function(a,b){var c=G.a(b);return(c=E.r(c,function(b){return!a.editables[E.ja(b)]}))&&cj(a,c)},sh:ej,xh:dj,w:function(a){return a&&a.elem&&a.elem.hasOwnProperty&&a.elem.hasOwnProperty("!aloha-expando-node-id")},close:fj,create:function(a,b,c){E.L(b,"min-height")||E.i(b,"min-height","1em");E.i(b,"cursor","text");E.addClass(b,"aloha-editable");var d=Ji.ya(b);b={id:E.ja(b),elem:b,Vb:d};b.Ze=v.g({},gj,c);ej(a,b);Ji.qe(b.Vb,
{meta:{type:"external"},partitionRecords:!0});return b},pe:function(a,b){var c=cj(a,b);if(!c)return null;fj(c);dj(a,c);"1em"===E.L(b,"min-height")&&E.i(b,"min-height","");E.i(b,"cursor","");E.removeClass(b,"aloha-editable");return c}};var ij={A:"link",U:"underline",B:"bold",STRONG:"bold",I:"italic",EM:"italic",STRIKE:"strikethrough",SUB:"subscript",SUP:"superscript"},jj={link:"A",underline:"U",bold:"B",italic:"I",strikethrough:"STRIKE",subscript:"SUB",superscript:"SUP"},kj={bold:["fontWeight","bold",null],italic:["fontStyle","italic",null],underline:["textDecoration","underline","none"],strikethrough:["textDecoration","line-through","none"]},lj="textTransform backgroundColor color fontSize fontFamily border borderColor borderStyle borderWidth borderTop borderTopColor borderTopStyle borderTopWidth borderBottom borderBottomColor borderBottomStyle borderBottomWidth borderLeft borderLeftColor borderLeftStyle borderLeftWidth borderRight borderRightColor borderRightStyle borderRightWidth".split(" ");
function mj(a){var b=[];v.forEach(kj,function(c,d){var e=E.L(a,c[0]);e&&(c[2]?e===c[2]?b.push([d,!1]):e===c[1]&&b.push([d,!0]):b.push([d,e===c[1]]))});return b}function nj(a){if(E.b(a))return[];var b=ij[a.nodeName];return(b?[[b,!0]]:[]).concat(mj(a))}function oj(a){return E.b(a)?[]:lj.reduce(function(b,c){var d=E.L(a,c);return d?b.concat([[c,d]]):b},[])}
function pj(a,b){for(var c=E.Ja(a,b||E.e),d=[],e={},g=c.length,k,m,n,p,s;g--;){n=nj(c[g]);k=0;for(m=n.length;k<m;k++)p=n[k],s=e[p[0]],Lb.Gb(s)&&d.splice(s-1,1,null),e[p[0]]=d.push(p);d=d.concat(oj(c[g]))}return d.reduce(function(a,b){return b?a.concat([b]):a},[])}
function qj(a,b){for(var c=G.a(b),d=E.Ja(c,E.e),e=jj[a],g=kj[a],k=g[0],g=g[1],m=d.length,n,p;m--;)if(p=d[m],E.t(p)&&(e===p.nodeName||E.L(p,k)===g)){n=p.parentNode;break}if(!n)return b;c=pj(c,function(a){return a==n}).reduce(function(b,c){return a===c[0]?b:b.concat([c])},[]);b=M.Bb(b,function(a){return G.a(a)===n});d=[b];e=G.o(d[0]);N.M(e)&&(d=M.removeNode(e,d));e=G.nextNode(d[0]);N.M(e)&&(d=M.removeNode(e,d));return rj(d[0],c)}
function rj(a,b){var c=G.document(a),d;v.forEach(v.md(b),function(b,g){if(jj[g])if(b){var k=c.createElement(jj[g]);d?E.Fa(d,k):(M.ka(k,a),a=G.create(k,0));d=k}else a=qj(g,a);else d||(d=c.createElement("span"),M.ka(d,a),a=G.create(d,0)),E.i(d,g,b)});return a}function sj(a,b){for(var c=0;c<a.length;c++)if(b===a[c][0])return c;return-1}function tj(a){for(var b,c=[],d=v.create(),e=a.length;e--;)b=a[e],d[b[0]]||(d[b[0]]=!0,c.push(b));return c.reverse()}
var R={map:function(a){var b=v.create();a.forEach(function(a){b[a[0]]=a[1]});return b},indexOf:sj,unique:tj,toggle:function(a,b,c){var d=sj(a,b);if(-1===d)return a.concat([[b,c]]);a=a.concat();a[d][1]="boolean"===typeof a[d][1]?!a[d][1]:c;return a},oe:rj,Ba:pj,Pa:function(){return tj(Array.prototype.concat.apply([],h.Y(arguments)))},xc:ij,Tg:jj};function uj(a){return!N.d(a)&&!(a.parentNode&&E.e(a.parentNode))}function vj(a,b){a=a.concat();var c=b.filter(N.s);if(0<c.length){var d=c[0].ownerDocument.createElement("li");E.move(c,d);a.push(d)}return a}function wj(a){var b=[];E.Ka(a,function(a){b=M.removeNode(a,b)},function(a){return N.f(a)&&0===E.children(a).length?!1:!a.parentNode||E.e(a)||N.s(a)})}function xj(a){return!N.f(a)&&N.d(a)}
function yj(a,b){var c=E.Rb(a,xj).concat(a);a!==b&&(c=c.concat(E.yb(a,function(a){return a===b}),b));return c.concat(E.yb(b,xj))}
function zj(a,b){if(0!==b.length){var c=E.r(b[0],uj);N.f(c)&&!E.C(c)&&(c=c.parentNode);r.assert(x.ta(c.parentNode.nodeName,a),"Lists.format#Cannot create "+a+" inside of a "+c.parentNode.nodeName);for(var d=c.ownerDocument.createElement(a),e=[],g=[],k=b.concat(),m,n;0<k.length;)n=k.shift(),m=!N.la(n)&&!N.N(n)&&!N.Mb(n),N.d(n)&&m?(m=E.children(n),g.push(n)):(m=[n],g.push(n.parentNode)),k=h.split(k,N.d),m=m.concat(k[0]),k=k[1],0<m.length&&e.push(m);E.h(d,c);E.move(e.reduce(vj,[]),d);g.forEach(wj)}}
function Aj(a,b,c){r.assert(N.Da({nodeName:a.toUpperCase()}),"Lists.format#"+a+" is not a valid list container");var d;if(N.cb(b,c))return d=E.r(G.nextNode(b),function(a){return!N.d(a)&&!E.e(a.parentNode)}),zj(a,yj(d,d)),[b,c];d=G.ha(b,c);if(!N.d(d))return d=E.r(d,function(a){return a.parentNode&&!xj(a.parentNode)&&!E.e(a.parentNode)}),zj(a,yj(d,d)),[b,c];d=E.r(G.nextNode(b),function(a){return!xj(a)&&!E.e(a.parentNode)});var e=E.r(G.o(c),function(a){return!xj(a)&&!E.e(a.parentNode)});zj(a,yj(d,e));
return[b,c]}function Bj(a){return a.filter(N.f).reduce(function(a,c){return a.concat(N.Zg(c))},[])}function Cj(a,b){function c(a){return!N.f(a)&&!E.e(a.parentNode)}var d=G.a(a),e=G.offset(a),g=G.a(b),k=G.offset(b),m=E.r(d,c),n=E.r(g,c);N.f(m)&&(m=Bj(E.oa(m)),N.f(d)&&(d=m[0],e=0));if(d===g)return[G.create(d,e),b];N.f(n)&&(m=Bj(E.oa(n)),N.f(g)&&(g=m[0],k=0));return[G.create(d,e),G.create(g,k)]}function Dj(a){var b=N.f;return E.r(a,function(a){return!b(a)&&!(a.parentNode&&E.e(a.parentNode))})}
function Ej(a){var b=G.o(a);if(E.b(b)){var c=b.data,d=G.offset(a),c=c.substr(0,d);if(l.Pc.test(c)||l.Yb.test(c))return!1;b=b.previousSibling||b.parentNode}b=Dj(b);if(!N.f(b))return!1;var b=G.ba(b),e=0;N.Oc(b,a,function(a){e+=a.filter(N.s).length});return 0===e}function Fj(a,b){for(var c=[];b--;)c.push(Q.Ta(a)),a=Q.remove(a);return{xb:a,records:c}}function Gj(a){return N.s(a.domNode())}function Hj(a){var b=h.Tb(a.V.concat().reverse(),Gj);return-1===b?null:Q.l(a,b+1)}
function Ij(a){var b=h.Tb(a.T,Gj);return-1===b?null:Q.next(a,b)}function Jj(a){a=Ij(a);return a&&N.f(Q.Xa(a))?(a=Ij(Q.Ya(a)))&&N.Da(Q.Xa(a))?a:null:null}function Kj(a){a=Hj(a);if(!a||!N.f(Q.Xa(a)))return null;var b=Q.next(Q.Ya(a),a.T.length);a=Hj(b);if(!a||!N.Da(Q.Xa(a)))return b;a=Q.Ya(a);return Q.next(a,a.T.length)}function Lj(a,b){N.Da(Q.Xa(Q.Wb(a)))||(a=Q.Ya(Q.h(a,Sd(document.createElement("UL")))));return Q.h(a,b)}
var Mj={eg:function(a,b){function c(a){return Q.Xa(Q.Wb(a))===g}var d=Dj(G.o(a)),e=Dj(G.nextNode(b));if(!N.f(d)||!N.f(e))return[a,b];a=G.ba(d);b=G.jc(e);var g=G.ha(a,b),d=Q.Yd(E.Hb(d),{start:a,end:b}),k=d.xb,k=Q.Rd(k,d.Ob.start,c),k=Q.Rd(k,d.Ob.end,c),m=Jj(Q.next(Q.go(k,d.Ob.end))),e=[];m&&(k=Q.Ya(m),k=Fj(k,k.T.length),e=e.concat(k.records),k=Q.remove(Q.Wb(Q.Wb(k.xb))));k=Q.go(k,d.Ob.start);k=Fj(k,h.Tb(k.T.slice(1),Q.sc)+2);e=k.records.concat(e);k=Kj(k.xb)||Q.Ya(Q.h(k.xb,Sd(document.createElement("LI"))));
d=Q.update(Q.root(Lj(k,e)));return[G.next(d.start),G.l(d.end)]},format:Aj,Ud:Cj,toggle:function(a,b,c){var d=G.a(b),e=G.a(c),d=E.r(d,N.f),e=E.r(e,N.f);return N.f(d)&&N.f(e)&&d.parentNode===e.parentNode&&d.parentNode.nodeName.toLowerCase()===a?Cj(b,c):Aj(a,b,c)},kg:function(a,b){var c=Dj(G.o(a));if(!N.f(c))return!1;var d=Dj(G.nextNode(b));return N.f(d)?c!==d||Ej(a):!1}};function Nj(a){return!N.la(a)&&!N.Na(a)}function Oj(a){a=E.r(a,function(a){return"A"!==a.nodeName&&Nj(a)&&!E.e(a)});return"A"===a.nodeName?a:null}function Pj(a){return E.v(a,N.M)}var S={ma:Nj,Ce:function(a){var b=G.a(a),c=G.offset(a);G.Z(a)&&(b=b.childNodes[c],c=0);a=Pj(b);return G.create(Oj(a)||a,c)},qd:Pj,Bd:function(a){return E.K(a,N.M)}};function Qj(a,b){var c=E.X(a);a.insertBefore(c,b);c.appendChild(b);return c}
function Rj(a,b,c){if(E.b(a)&&a.length===b)return{Ta:a.nextSibling,Fb:a};if(E.b(a)&&0===b)return{Ta:a,Fb:a.previousSibling};b=M.Sg(a,b);var d=b.nextSibling;if(d&&!d.nextSibling&&S.ma(d.parentNode)&&!E.isSameNode(a,c)){a=b.parentNode;do d=Qj(a,d),b=Qj(a,b),E.xa(a),a=b.parentNode;while(a&&!E.isSameNode(a,c)&&S.ma(a))}else if(!d){for(d=b;d.parentNode&&!d.nextSibling&&!E.isSameNode(d.parentNode,c);)d=d.parentNode;d=d.nextSibling}return{Ta:d,Fb:b}}
function Sj(a,b,c){var d=E.X(a);a.parentNode.insertBefore(d,c);d.appendChild(b);return d}function Tj(a){for(;!S.ma(a);)a=a.lastChild;return a}var Uj="LI TD TR TBODY DD DT".split(" ");
function Vj(a){var b;if(b=N.s(a))b=!(!E.b(a)||0<a.textContent.trim().length?0:a.previousElementSibling&&0<=Uj.indexOf(a.previousElementSibling.nodeName)&&a.nextElementSibling&&0<=Uj.indexOf(a.nextElementSibling.nodeName)||a.previousElementSibling&&0<=Uj.indexOf(a.previousElementSibling.nodeName)&&!a.nextElementSibling||!a.previousElementSibling&&a.nextElementSibling&&0<=Uj.indexOf(a.nextElementSibling.nodeName));return b}
function Wj(a,b){if(!Vj(a))return a;if("A"===a.nodeName){var c=a.firstChild;E.children(a).forEach(function(a){b.push(a)});E.xa(a);a=c}else b.push(a);return a}function Xj(a,b){0<a.length&&b.push(a);return[]}function Yj(a,b){var c=G.a(a),d=G.a(b);return E.b(c)&&E.isSameNode(c,d)}window.wh=function(a,b){var c=M.Bb(a,G.Z),d=M.Bb(b,G.Z);G.nextNode(c);G.o(d);console.log(void 0);return[c,d]};var Zj={If:function(a,b){var c,d,e,g=S.Ce(a),k=S.Ce(b);c=G.a(g);e=G.offset(g);d=G.offset(k);if(Yj(g,k)&&0===e&&c.length===d)return[[G.a(g)]];d=k;e=G.ha(a,b);c=G.a(g);var m=G.a(d),n=G.offset(g),p=G.offset(d),m=E.b(c)&&E.isSameNode(c,m);c=e;var s=G.a(g),t=G.offset(g);if(E.b(s))c=Rj(s,t,c).Ta;else if(E.isSameNode(s.parentNode,c)||!S.ma(s.parentNode))c=s;else if(N.Kb(s.parentNode))c=s;else{for(var t=s=s.parentNode,y=s.parentNode;y&&!E.isSameNode(y,c)&&S.ma(y);)t=Sj(y,s,y.nextSibling),s=y,y=y.parentNode;
c=t}m&&(d=G.R(c,p-n),e=c);n=G.a(d);d=G.offset(d);if(E.b(n)&&0<d)e=Rj(n,d,e).Fb;else if(E.b(n)&&0===d&&n.previousSibling)e=Tj(n.previousSibling);else if(S.ma(n.parentNode)){d=n=n.parentNode;for(p=n.parentNode;p&&!E.isSameNode(p,e)&&S.ma(p);)d=Sj(p,n,p),n=p,p=p.parentNode;Vj(d)||(e=S.Bd(d),E.remove(d),d=Tj(e));e=d}else e=n;if(Yj(g,k))g=[[e]];else{g=[];for(k=[];c&&!E.isSameNode(c,e);)if(S.ma(c)){c=Wj(c,k);for(d=!1;c&&!c.nextSibling&&c.parentNode;)c=c.parentNode,S.ma(c)||(d=!0);c=c.nextSibling;d&&(k=
Xj(k,g))}else k=Xj(k,g),c=c.firstChild;S.ma(e)&&Wj(e,k);0<k.length&&g.push(k)}return g}};function ak(a,b){var c=G.document(a);return Zj.If(a,b).reduce(function(a,b){var g=c.createElement("a");E.h(g,b[0]);E.move(b,g);return a.concat(g)},[])}function bk(a,b){var c;if(c=!E.b(a))c=E.X(a).isEqualNode(E.X(b));return c}function ck(a,b){for(var c;a&&b&&bk(a,b);)c=S.qd(a.firstChild),b.appendChild(c),E.remove(a),a=c,b=b.firstChild}
function dk(a){if(S.Jh(a)){var b=S.qd(a.firstChild),c=S.Bd(a.previousSibling);ck(b,c);b=S.Bd(a.lastChild);c=S.qd(a.nextSibling);ck(c,b);E.xa(a)}}function ek(a){E.t(a)&&h.Y(a.querySelectorAll("a")).forEach(dk)}function fk(a){return"A"!==a.nodeName}
var gk={n:function(a){if("click"!==a.type)return a;var b=G.ha(a.selection.boundaries[0],a.selection.boundaries[1]);E.r(b,fk)&&B.preventDefault(a.nativeEvent);return a},create:function(a,b,c,d){N.cb(b,c)?(c=G.document(b).createElement("a"),c.innerHTML=a,M.ka(c,b,!0),b=[c]):b=ak(b,c);b.forEach(function(b){E.ra(b,"href",a)});d&&b.reduce(function(a,b){a.push(b);return a},d);return[G.ba(b[0]),G.jc(h.m(b))]},remove:function(a,b){var c=S.Ff(G.a(a),G.offset(a)),d=S.Ff(G.a(b),G.offset(b)),c=G.a(c),d=G.a(d);
ek(c);for(ek(d);c&&!E.isSameNode(c,d);){for(var e=void 0;!c.nextSibling&&c.parentNode;)e=c.parentNode,dk(c),c=e;e=c.nextSibling;dk(c);(c=e)&&ek(c)}for(;d&&d.parentNode&&S.ma(d);)dk(d),d=d.parentNode}};function hk(a,b,c,d,e,g){var k=c;E.Ra(a.firstChild,function(a){a!==b?k(a,g):(k=e,d(a,g))})}function ik(a,b,c,d,e,g,k){var m,n=[];for(m=a.length;m--;){var p=c(a[m],k);null!=p&&(k=p);n.push(k)}n.reverse();a.length&&b&&E.Ra(a[0].firstChild,d,n[0]);for(m=0;m<a.length-1;m++)hk(a[m+1],a[m],d,e,g,n[m+1])}function jk(a,b,c,d){return function(e,g){e!==a||b?d(e,g):c(e,g)}}
function kk(a,b,c,d,e,g,k,m,n){var p=a.commonAncestorContainer;E.b(p)&&(p=p.parentNode);var s=a.startContainer,t=a.endContainer,y=a.startOffset,z=a.endOffset;a=a.collapsed;var aa=E.pa(s,y),X=E.pa(t,z),s=G.k(G.R(s,y)),y=G.k(G.R(t,z)),ba=E.qb(aa,p),z=E.qb(X,p),t=jk(aa,s,d,k),X=jk(X,y,g,k);ik(ba,s,b,c,t,d,n);ik(z,y,b,e,X,g,n);b=h.m(ba);d=h.m(z);t=jk(aa,s,m,k);E.Xb(p.firstChild,c,b,n);b&&(c=b.nextSibling,b===d?a||k(b,n):(t(b,n),E.Xb(c,m,d,n),d&&(c=d.nextSibling,X(d,n))),d&&E.Ra(c,g,n))}
function lk(a,b,c,d,e,g){kk(a,b,c,e,e,c,d,e,g)}function mk(a,b,c,d,e,g,k){var m=a.commonAncestorContainer;lk(a,d,k,e,g,c);a=E.pb(m,b);ik(a,!1,d,k,e,k,null);e(b)}function nk(a,b,c,d,e){function g(a){k=k||!N.fb(a)&&!b(a)}var k=null;lk(a,f.W,g,f.W,f.W);if(k)return null;var m=a.commonAncestorContainer;E.b(m)&&(m=m.parentNode);a=E.Ua(m,function(a){return m!==a&&d(a)||c(a)||e(a)});var n=h.m(a);if(!d(n))return d(m)?m:null;ik(a,!1,f.W,g,f.W,g);return k?d(m)?m:null:n}
function ok(a,b){var c=a.commonAncestorContainer,d=b.tc,e=b.lc,g=b.kc,k=b.Ag,m=b.nc,n=b.oc,p=b.Ng,s=b.Hf,t=b.isObstruction,y=b.isReusable,z=b.pc,aa=b.jg,X=b.vh||function(a){E.Cb(a,s)},ba=null,Aa=null,Ya=!1,Ca=!1,Ab=E.Ua(c,function(a){return!a.parentNode||E.aa.DOCUMENT===a.parentNode.nodeType||n(a)});Ab.forEach(function(a){Ca=Ca||d(a);var b=g(a);null==b||z(b)||(ba=a,Ya=Ya||Ca||!aa(a),null==Aa&&(Aa=b))});null==Aa&&(Aa=g(c));n(h.m(Ab))&&!Ya?ba?mk(a,ba,Aa,e,s,X,k):lk(a,e,k,s,X):(c=function(a,b){p(a,b,
Ya)},(m=nk(a,m,d,y,t))?c(m):lk(a,e,k,s,c))}function pk(a,b,c,d){if(!x.ta(b.nodeName,a.nodeName))return!1;b.parentNode&&M.Kd(b,[c,d]);c.node!==a||c.atEnd||(c.node=b);d.node!==a||d.atEnd||(d.node=b);E.Fa(a,b);return!0}
function qk(a,b,c){var d=oe(a);M.Rg(d);var e=Te.rb(d.startContainer,d.startOffset),g=Te.rb(d.endContainer,d.endOffset);!1!==c&&rk(d,N.fb,N.fb);c=Te.rb(d.startContainer,d.startOffset);var k=Te.rb(d.endContainer,d.endOffset);(b=b(d,c,k))&&b.Oe();Te.Ye(d,c,k);M.ld(e.node,d);M.ld(g.node,d);b&&b.Pe(d);d=G.ub(d);G.Lc(a,d[0],d[1]);return d}function sk(a,b,c,d){if(!E.t(a)||!d(a))return null;a=E.v(a.firstChild,c);return!a||E.v(a.nextSibling,c)?null:b(a)?a:sk(a,b,c,d)}
function tk(a,b,c,d){var e=N.fb,g=N.bb;return b(a)?a:(g=sk(a,b,function(a){return!b(a)&&e(a)},g))&&pk(a,g,c,d)?g:null}function uk(a,b,c,d,e,g,k,m){var n=a.previousSibling;n&&d(n)&&d(a)?(E.h(a,n,!0),e(a)):c(a)?g(a):(n=b(a.ownerDocument),pk(a,n,k,m)?e(a):E.Ra(a.firstChild,function(a){uk(a,b,c,d,e,g,k,m)}))}
function vk(a,b,c,d){function e(a){aa(a)&&(Aa(a),Ab(a)&&(a.previousSibling&&ke.push(a.previousSibling),a.nextSibling&&ke.push(a.nextSibling),M.Kd(a,[b,c])))}function g(a,b){var c=Ya(a,b),d=":"+a;(ie[d]=ie[d]||[]).push(c);li.push([c,a]);return c}function k(a){a=a.cloneNode(!1);Aa(a);return Ab(a)}function m(a,b){return Ca(b)?h.contains(ie[":"+a]||[],b)?!0:aa(b)&&!X(b,a)?!1:k(b):!1}function n(a,d){uk(a,f.c(g,d),Ca,f.c(m,d),e,f.c(ba,d),b,c)}function p(a){e(a)}function s(a){E.Cb(a,p)}function t(a,d,k){function n(a){return X(a,
d)}var p=k?a.nextSibling:a.previousSibling;if(p&&(p=tk(p,n,b,c))){var s=f.c(m,d),t=f.c(g,d),y=f.c(ba,d);uk(k?p:a,t,Ca,s,e,y,b,c)}}var y=d.nc,z=d.pc,aa=d.te,X=d.se,ba=d.fe,Aa=d.Ue,Ya=d.createWrapper,Ca=d.isReusable,Ab=d.isPrunable,ie={},li=[],ke=[];return{nc:y,isReusable:Ca,Hf:function(a){y(a)||e(a)},jg:k,Ag:function(a,b){null==b||aa(a)||z(b)||n(a,b)},Ng:function(b,c){z(c)||(E.Ra(b.firstChild,s),n(b,a))},pc:z,Oe:function(){li.forEach(function(a){var b=a[0];a=a[1];t(b,a,!0);t(b,a,!1)})},Pe:function(a){ke.forEach(function(b){M.ld(b,
a)})},oc:d.oc,isObstruction:d.isObstruction,lc:d.lc,kc:d.kc,tc:d.tc}}function wk(a){return"BODY"===a.nodeName||N.Kb(a)||E.e(a)}function xk(a,b){return a===b}var yk={Xg:{name:"U",yc:["U"],style:"text-decoration",value:"underline",ud:"none",normalize:{}},bold:{name:"B",yc:["B","STRONG"],style:"font-weight",value:"bold",ud:"normal",normalize:{700:"bold",400:"normal"}},Be:{name:"I",yc:["I","EM"],style:"font-style",value:"italic",ud:"normal",normalize:{}}};yk.emphasis=v.g(yk.Be,{name:"EM"});
yk.strong=v.g(yk.bold,{name:"STRONG"});yk.bold=yk.bold;yk.italic=yk.Be;yk.underline=yk.Xg;function zk(a,b){return E.t(a)?E.L(a,b):null}
function Ak(a,b,c,d,e){function g(a){t&&t.normalize[a]&&(a=t.normalize[a]);return a}function k(a){return n(g(a),b)}function m(a){return h.contains(p,a.nodeName)?!0:"SPAN"===a.nodeName}var n=e.isStyleEqual||xk,p=[],s=!1,t=yk[a];t&&(p=t.yc,a=t.style,b=(s=!b)?t.ud:t.value);e=v.g({lc:function(b){if(h.contains(p,b.nodeName))return t.value;b=zk(b,a);return l.Ma(b)?null:b},kc:function(b){if(h.contains(p,b.nodeName))return t.value;b=E.getComputedStyle(b,a);return l.Ma(b)?null:b},nc:function(b){return!s&&
h.contains(p,b.nodeName)?!0:k(zk(b,a))},oc:function(b){return!s&&h.contains(p,b.nodeName)||s&&"BODY"===b.nodeName?!0:s&&N.jd(a)?k(zk(b,a)):k(E.getComputedStyle(b,a))},pc:function(a){return k(a)},te:function(b){return h.contains(p,b.nodeName)?!0:!l.Ma(zk(b,a))},se:function(b,c){c=g(c);return h.contains(p,b.nodeName)&&n(t.value,c)?!0:n(zk(b,a),c)},fe:function(b,c){b=g(b);h.contains(p,c.nodeName)&&n(t.value,b)||n(g(E.getComputedStyle(c,a)),b)||E.i(c,a,b)},Ue:function(b){E.We(b,a)},isPrunable:function(a){return m(a)&&
!E.mc(a)},isStyleEqual:n,createWrapper:function(b,c){b=g(b);if(t&&n(t.value,b))return c.createElement(t.name);var d=c.createElement("SPAN");E.i(d,a,b);return d},isReusable:m,isObstruction:f.ia(N.bb),tc:wk},e);return vk(b,c,d,e)}
function Bk(a,b,c,d,e){function g(b){return a===b.nodeName||null}function k(c){return b?!1:a===c.nodeName}function m(b){return b.nodeName===a&&!E.mc(b)}function n(b){return b.nodeName===a}a=a.toUpperCase();e=v.g({lc:g,kc:g,nc:k,oc:function(a){return b&&"BODY"===a.nodeName?!0:k(a)},pc:function(a){return b?!1:null!=a},te:n,se:n,fe:f.W,Ue:f.W,createWrapper:function(b,c){return c.createElement(a)},isReusable:m,isPrunable:function(a){return m(a)},isObstruction:f.ia(N.bb),tc:wk},e);return vk(a,c,d,e)}
function Ck(a,b,c,d,e){var g=G.O(a,b);return g.collapsed?[a,b]:qk(g,function(a,b,g){b=Ak(c,d,b,g,e||{});ok(a,b);return b})}function Dk(a,b,c,d){a:{for(var e in yk)if(-1!==yk[e].yc.indexOf(a)){a=e;break a}a=!1}c=!1===a?[b,c]:Ck(b,c,a,d);if(G.j(c[0],c[1]))return c;b=G.$(c[0]);d=G.qa(c[1]);b=b?G.normalize(G.Jb(b)):c[0];c=d?G.normalize(G.La(d)):c[1];return[b,c]}
function Ek(a,b,c){var d=void 0;c=c||f.D;d=d||f.D;a.K(function(a){var b=a.C();return b?d(b):!c(a.parent())});b.v(function(a){return a.atEnd?!c(a.parent()):d(a.node)})}function Fk(a,b){var c=null,d=void 0,c=c||f.D,d=d||f.D;a.v(function(a){return!a.j(b)&&(a.atEnd?!c(a.parent()):d(a.node))});b.K(function(b){var g=b.C();return!a.j(b)&&(g?d(g):!c(b.parent()))})}function Gk(a,b,c){var d=a.j(b);Fk(a,b);Ek(a,b,c);d&&b.ib(a)}
function Hk(a,b,c,d,e,g,k,m){var n=Te.rb(b,c);if(m&&E.b(b)&&0<c&&c<b.length&&n.next()){if(!k(n))return;n.l()}b=Te.rb(d,e);for(c=!1;!n.j(b)&&k(n)&&(m?n.l():n.next());)c=!0;c&&g(a,n)}function Ik(a,b,c){b=b||f.D;c=c||f.D;if(!a.collapsed){var d=a.startContainer,e=a.startOffset,g=a.endContainer,k=a.endOffset;Hk(a,d,e,g,k,Te.Od,b,!1);d=a.startContainer;e=a.startOffset;Hk(a,g,k,d,e,Te.Nd,c,!0)}}
function rk(a,b,c){b=b||f.D;c=c||f.D;Ik(a,function(a){return a.atEnd||b(a.node)},function(a){return!a.C()||c(a.C())});return a}function Jk(a,b,c,d,e,g){function k(a,b){return b||g.until(a)}function m(a,b){if(!b){var k=a.parentNode;n&&k.previousSibling===n||(n=g.clone(k),e.push(k),E.h(n,k,!1),c.node!==k||c.atEnd||(c.node=n),d.node===k&&(d.node=n));E.h(a,n,!0)}}var n=null;a=E.Ua(a,g.below);var p=a.pop();p&&g.below(p)&&ik(a,b,k,m,f.W,f.W);return p}
function Kk(a){if(!J.Qg(a)&&J.bf(a)&&"BR"===a.node.nodeName){a.Qd();var b=a.clone();J.bf(b)&&b.atEnd&&a.ib(b)}}
function Lk(a,b,c,d){var e=d.normalizeRange?b:b.clone(),g=d.normalizeRange?c:c.clone();Kk(e);Kk(g);Te.Ye(a,e,g);var e=[],g=E.pa(a.startContainer,a.startOffset),k=E.pa(a.endContainer,a.endOffset),m=G.k(G.R(a.startContainer,a.startOffset));a=G.k(G.R(a.endContainer,a.endOffset));var n=Jk(g,m,b,c,e,d),p=Jk(k,a,b,c,e,d);e.forEach(function(a){!a.firstChild&&a.parentNode&&M.Kd(a,[b,c])});d.normalizeRange&&Gk(b,c,function(a){return a===n||a===p})}
function Mk(a,b){b=b||{};b=v.g({clone:E.X,until:f.D,below:E.e,normalizeRange:!0},b);return qk(a,function(a,d,e){Lk(a,d,e,b);return null})}function Nk(a,b){return E.r(a,function(a){return!b(a)&&!(a.parentNode&&E.e(a.parentNode))})}
function Ok(a,b){var c=null;b.forEach(function(b){if(!N.M(b)||c){if(x.ta(a,b.nodeName))return c||(c=b.ownerDocument.createElement(a),E.h(c,b)),E.move([b],c);c=null;if(!N.N(b)){var e=E.children(b),g=e.map(function(a){return a.nodeName}),g=g.length===g.filter(f.c(x.ta,a)).length,k=x.ta(b.parentNode.nodeName,a);if(g&&k&&!N.la(b)&&!N.Na(b))return E.zb(b,b.ownerDocument.createElement(a));b=h.Tb(e,N.s);-1<b&&Ok(a,e.slice(b))}}})}
function Pk(a,b,c){var d,e={nodeName:c};if("a"===c.toLowerCase())d=gk.create("",a,b);else if(N.Nb(e))d=Dk(c,a,b,!0);else if(N.Da(e))d=Mj.toggle(c,a,b);else if(N.Ca(e)){a:{d=N.d;if(N.cb(a,b)){e=G.nextNode(b);E.e(e)&&(e=G.o(a));if(E.e(e)){b=[a,b];break a}a=b=d(e)?e:Nk(e,d)}else a=Nk(G.nextNode(a),d),b=Nk(G.o(b),d);b=[G.ba(a),G.jc(b)]}b=N.Oc(b[0],b[1],f.c(Ok,c));c=G.Jb(G.nextNode(b[0]));b=G.La(G.o(b[1]));d=[N.$a(c),N.Za(b)]}return d}function Qk(a,b,c){return Dk(c,a,b,!1)}
var T={format:Pk,Ud:Qk,toggle:function(a,b,c){if(N.Nb({nodeName:c})){var d=R.xc[c];if(d){var e=G.nextNode(N.$a(a)),g=G.o(N.Za(b)),e=R.Ba(e).concat(R.Ba(g));a=(-1<R.indexOf(e,d)?Qk:Pk)(a,b,c)}else a=[a,b]}else a=[a,b];return a},style:Ck,className:function(){throw"Not implemented";},Ef:function(){throw"Not implemented";},Rf:function(){throw"Not implemented";},Aa:function(){throw"Not implemented";},le:function(a,b){a=("BR"===b?N.ed:N.dd)(a,b);return[a,a]},h:function(a,b,c){a=G.O(a,b);Mk(a,{below:function(a){return x.ta(a.nodeName,
c.nodeName)}});b=M.ka(c,G.va(a));G.Lc(a,b,G.create(G.a(b),G.offset(b)+1));return G.va(a)},Fa:function(a,b,c,d,e){e=e||{};var g=G.O(b,c);return g.collapsed?[b,c]:qk(g,function(b,c,g){c=Bk(a,d,c,g,e);ok(b,c);return c})},split:Mk,remove:function(a,b){var c=G.O(a,b);return qk(c,function(a,b,c){function k(b){M.Hg(b,a)}kk(a,f.W,f.W,k,k,f.W,f.W,k,null);return{Pe:f.W,Oe:function(){var k=N.Gd(G.va(a),G.ab(a))[0],k=Te.Nf(G.a(k),G.offset(k));b.ib(k);c.ib(k)}}},!1)},Uh:rk};function Rk(a,b,c){c=O.Uc(c);b=T.remove(b,c)[0];return M.ve(a,b,!0)}
var Sk={"```":function(a,b){if(!Ze.za(a,"```"))return b;var c=T.remove(a,b)[1],d=Ze.za(c,"```");if(!d)return c;var e=Ze.search(d,/[^`]|$/);if(!e)return c;d=T.remove(d,e)[0];return T.Fa("code",d,c)[1]},"(:":f.c(Rk,"\u263a"),":)":f.c(Rk,"\u263a"),":(":f.c(Rk,"\u2639"),"):":f.c(Rk,"\u2639"),"<3":f.c(Rk,"\u2665"),"--":f.c(Rk,"\u2014"),"--\x3e":f.c(Rk,"\u2192"),"<--":f.c(Rk,"\u2190"),"==>":f.c(Rk,"\u21d2"),"<==":f.c(Rk,"\u21d0"),"|>":f.c(Rk,"\u25ba"),"<|":f.c(Rk,"\u25c4")},Tk={};
v.forEach(Sk,function(a,b){var c=Tk,d=b.split("").reverse(),e=d.length-1;d.forEach(function(b,d){d===e?c[b]=a:c=c[b]?c[b]:c[b]={}})});function Uk(a){var b;if(G.fa(a))return b=G.a(a),b.data.substr(G.offset(a),1);b=G.nextNode(a);return E.b(b)?b.data.substr(0,1):""}
var Vk={n:function(a){if("keydown"!==a.type||df.Ga.tab!==a.keycode&&df.Ga.space!==a.keycode&&df.Ga.enter!==a.keycode)return a;for(var b=a.selection.boundaries[0],c=O.l(b,"visual"),d=c&&Uk(c),e=Tk,g,k;d&&e[d];)e=e[d],"function"===typeof e&&(g=e,k=c),d=(c=O.l(c,"visual"))&&Uk(c);g&&(b=g(k,b),a.selection.boundaries=[b,b]);return a}};function Wk(a,b,c){var d=G.document(a);a=T.remove(a,b);c=N.parse(c,d);if(0===c.length)return a;d=d.createElement("div");E.ra(d,"contentEditable",!0);E.move(c,d);d=c[0];E.b(d)||N.N(d)||N.la(d)||(c=E.children(d).concat(c.slice(1)));if(0===c.length)return a;d=E.Hb(G.a(a[0]));a=Q.Yd(d,{start:a[0],end:a[1]});var e=Q.go(a.xb,a.Ob.start);c.forEach(function(a){e=Q.split(e,function(b){return x.ta(Q.Ta(b).name(),a.nodeName)});e=Q.h(e,Sd(a))});a=Q.update(e);return[a.start,a.end]}
function Xk(a,b,c){return h.contains(a.clipboardData.types,"text/html")?(a=a.clipboardData.getData("text/html"),Yi.lg(a,b)?bj.bd(bj.He(a,b),b,c):bj.bd(a,b,c)):h.contains(a.clipboardData.types,"text/plain")?bj.Ne(a.clipboardData.getData("text/plain"),b):""}
var Yk={n:function(a){if("paste"!==a.type||"undefined"===typeof a.nativeEvent.clipboardData)return a;B.ff(a.nativeEvent);var b=Xk(a.nativeEvent,a.nativeEvent.target.ownerDocument,a.editable.Ze);if(!b)return a;Ji.ob(a.editable.Vb,{meta:{type:"paste"}},function(){a.selection.boundaries=Wk(a.selection.boundaries[0],a.selection.boundaries[1],b)});return a}};var Zk={dg:function(a){var b=[],c=G.nextNode(a[0]),d=G.o(a[1]);for(a=a[0];c&&c!==d;)"IMG"===c.nodeName&&b.push(c),a=G.next(a),c=G.a(a);"IMG"===d.nodeName&&b.push(d);return b}};function $k(a,b){Object.keys(b).forEach(function(c){E.ra(a,c,b[c])})}function al(a,b){var c=a.commonAncestorContainer.ownerDocument,d=c.createElement("img");$k(d,b);var e=c.createElement("p");e.appendChild(d);d=c.createDocumentFragment();d.appendChild(e);Yk.Hh(a,d,{},c)}
function bl(a,b){var c=G.ub(a);Zk.dg(c).forEach(function(a){$k(a,b)})}var cl={h:function(a,b){var c=G.get(b);c&&al(G.O(c[0],c[1]),a)},Gh:al,Sh:bl,Mg:function(a,b){var c=G.get(b);c&&bl(G.O(c[0],c[1]),a)}};var dl=Gc;function el(a){var b=O.l(a,"char");return b?b:N.d(G.o(a))?a:el(O.l(a,"boundary"))}function fl(a){var b=O.next(a,"char");return b?b:N.d(G.nextNode(a))?a:fl(O.next(a,"boundary"))}function gl(a){a=a.getClientRects()[0]||a.getBoundingClientRect();return{top:a.top,left:a.left,width:a.width,height:a.height}}
var U={G:function(a,b){b||(b=a);var c=G.O(a,b),d;a:{d=G.va(c);var e=G.ab(c);if(d=G.k(e)||N.d(G.nextNode(e))||N.k(d)?null:G.O(d,fl(e))){d=gl(d);if(e=d.width){e=d;if(dl.chrome&&c.collapsed)var g=E.r(c.startContainer,E.b),g=parseInt(E.getComputedStyle(g,"font-size"),10),e=e.width>g;else e=!1;e=!e}if(e)break a}d=c.cloneRange();g=G.va(d);G.fa(g)||G.J(g)||N.s(G.qa(g))?e=g:(e=E.clone(G.a(g),!0),g=G.offset(g)-1,E.remove(e.childNodes[g]),e=G.create(e,g));d=G.ab(d);(d=G.J(e)||N.d(G.o(e))?null:G.O(el(e),d))?
(d=gl(d),d.left+=d.width):d=gl(c)}c=c.commonAncestorContainer.ownerDocument;c["!aloha-br-style-fix"]||(e=c.createElement("style"),E.append(c.createTextNode('.aloha-editable br,.aloha-editable br:after{content:"\\A";white-space:pre-line;}'),e),E.append(e,c.head),c["!aloha-br-style-fix"]=!0);if(0<d.width||(d=G.$(a)||G.qa(a))&&!E.b(d)&&(d=gl(d)))return{top:d.top+E.scrollTop(c),left:d.left+E.scrollLeft(c),width:d.width,height:d.height};d=G.a(a);return{top:d.offsetTop+E.scrollTop(c),left:d.offsetLeft+
E.scrollLeft(c),width:d.offsetWidth,height:parseInt(E.getComputedStyle(d,"line-height"),10)}},Pg:function(a,b){var c=b.querySelector(".aloha-caret-box-hint");c||(c=b.createElement("div"),E.addClass(c,"aloha-caret-box-hint","aloha-ephemera"));v.extend(c.style,{top:a.top+"px",left:a.left+"px",height:a.height+"px",width:a.width+"px",position:"absolute",background:"red",opacity:.2});E.append(c,b.body);return c},cg:function(a){(a=a.querySelector(".aloha-caret-box-hint"))&&E.remove(a);return a||null}};var hl=Gc;function il(a,b){var c=U.G(b);v.extend(a.style,{top:c.top+"px",left:c.left+"px",height:c.height+"px",width:"2px",display:"block"})}function jl(a){var b={};b.padding=a.bold?"1.5px":"0px";b[hl.Ha+"transform"]=a.italic?"rotate(16deg)":"";b.background=a.color||"black";return b}function kl(a,b){var c=G.a(a),d=G.a(b),e=G.offset(a),g=G.offset(b);return c===d&&e>g||E.ua(d,c)}function ll(a,b,c){return(a=G.ca(a.left,a.top-b,c))&&G.O(a,a)}
function ml(a,b,c){return(a=G.ca(a.left,a.top+a.height+b,c))&&G.O(a,a)}function nl(a,b,c){var d;"start"===c?(d=a[0],a=b[1]):(d=b[0],a=a[1]);return kl(d,a)?{boundaries:[a,d],focus:"start"===c?"end":"start"}:{boundaries:[d,a],focus:c}}function ol(a,b,c,d){"up"===a?(a=G.create(b.editable.elem,0),a=N.$a(a)):(a=G.La(b.editable.elem),a=N.Za(a));a=[a,a];return B.wa(b,"shift")?nl(a,c,d):{boundaries:a,focus:d}}
function pl(a,b){var c=G.O(a,a),d=G.document(a),e=U.G(a),g=e.height/4,k=0,m;do k+=g,m=b(e,k,d);while(m&&Xd.j(m,c));return m&&G.va(m)}
function ql(a,b){for(var c=G.document(a),d=U.G(b),e=d.top,d=d.left,g,k,m,n,p,s,t=[],y=a;y;){g=U.G(y);k=g.top;m=G.a(y);n=E.r(m,f.ia(N.d));if(!n)break;(s=e<k+g.height)?(m=0===t.length?g.left:E.offset(n).left,p=d-m):0===t.length?(m=g.left,p=(n.clientWidth||n.offsetWidth)-(m-E.offset(n).left)):(m=E.offset(n).left,p=n.clientWidth||n.offsetWidth);n=G.ca(m,k,c);p=G.ca(m+p,k,c);if(!n||!p)break;m=U.G(n).left;n=U.G(p).left;t.push({top:k,left:m,width:n-m,height:g.height});if(s)break;y=rl(y)}return t}
function sl(a){return!N.N(a)&&N.s(a)&&N.d(a)}function tl(a){return!N.N(a)&&N.s(a)}function ul(a,b,c){a=b(a);var d=sl(a)?a:c(a,sl);if(!d)return null;c=!!E.r(a,function(a){return a!==d});return{ke:d,rc:c}}function rl(a){var b,c=U.G(a),d=vl(a);if(d){b=N.$a(G.Jb(d));d=G.$(b);b=U.G(b);var e=E.b(d)?b.top:E.Ia(d),e=e+b.height/2;b=G.ca(c.left,e,d.ownerDocument)}return(b=b||pl(a,ml))&&c.top!==U.G(b).top?b:a}
function wl(a){var b=ul(a,G.o,E.Eb);if(!b)return null;var c=U.G(a);a=b.ke;var c=c.top-c.height,d=E.Ia(a);b.rc||(d+=a.clientHeight||a.offsetHeight);return c>=d?null:(b=b.rc?E.Qa(a,!0,tl,E.e):a)?N.la(b)?E.Eb(b.nextSibling,N.Na):b:null}function vl(a){var b=ul(a,G.nextNode,E.Ib);if(!b)return null;var c=b.ke;a=U.G(a);a=a.top+a.height+a.height;var d=E.Ia(c);b.rc&&(d+=c.clientHeight||c.offsetHeight);return a<=d?null:(b=b.rc?E.Qa(c,!1,tl,E.e):c)?N.la(b)?E.Ib(b.previousSibling,N.Na):b:null}
function xl(a,b,c,d){var e=c["start"===d?0:1],g=G.document(e),k=E.fc(g),m=E.scrollTop(g),n=k.innerHeight,p=U.G(e),s=wl(e),t=vl(e),t=t&&!E.b(t)?E.Ia(t)+p.height:p.top+p.height+p.height,s=s&&!E.b(s)?E.Ia(s)+(s.clientHeight||s.offsetHeight)-p.height:p.top-p.height,p=p.height,y=0;s<=m?"up"===a&&(y=s-p):t>=m+n&&"down"===a&&(y=t-n+p+p);y&&k.scrollTo(E.scrollLeft(g),y);if("up"===a){var z;a=U.G(e);if(g=wl(e))z=N.Za(G.La(g)),g=G.o(z),z=U.G(z),z=E.b(g)?z.top+z.height/2:E.Ia(g)+(g.clientHeight||g.offsetHeight)-
z.height/2,z=G.ca(a.left,z,g.ownerDocument);e=(z=z||pl(e,ll))&&a.top!==U.G(z).top?z:e}else e=rl(e);return e?B.wa(b,"shift")?nl([e,e],c,d):{boundaries:[e,e],focus:d}:{boundaries:c,focus:d}}
function yl(a,b,c,d){var e=B.wa(b,"shift"),g=c[0];c=c[1];var k=G.j(g,c);if(k||!e)d="left"===a?"start":"end";var m="start"===d?g:O.Uc(c);if(k||e)b=B.wa(b,"ctrl")||B.wa(b,"alt")?"word":"visual",a="left"===a?O.l(m,b):O.next(m,b),E.e(G.a(a))&&(G.J(m)?a=N.$a(m):G.k(m)&&(a=N.Za(m))),a&&(m=a);return e?{boundaries:"start"===d?[m,c]:[g,m],focus:d}:{boundaries:[m,m],focus:d}}
function zl(a,b){var c=U.G(a),d=G.a(a);E.b(d)&&(d=d.parentNode);var e=parseInt(E.getComputedStyle(d,"font-size")),c=c?c.top:E.Ia(d),c=c+(e?e/2:0),e=E.offset(b).left;return{top:c,left:e,right:e+(b.clientWidth||b.offsetWidth)}}var V={};V.left=V["*+left"]=f.c(yl,"left");V.right=V["*+right"]=f.c(yl,"right");V.up=V["*+up"]=f.c(xl,"up");V.down=V["*+down"]=f.c(xl,"down");V.pageUp=V["meta+up"]=f.c(ol,"up");V.pageDown=V["meta+down"]=f.c(ol,"down");
V.home=V["meta+left"]=V["meta+shift+left"]=function(a,b,c){var d=zl(b[0],a.editable.elem);if(d=G.ca(d.left,d.top,G.document(b[0])))b=b["end"===c?0:1],b=B.wa(a,"shift")?[d,b]:[d,d],c="start";return{boundaries:b,focus:c}};V.end=V["meta+right"]=V["meta+shift+right"]=function(a,b,c){var d=zl(b[1],a.editable.elem);if(d=G.ca(d.right-1,d.top,G.document(b[0])))b=b["start"===c?1:0],b=B.wa(a,"shift")?[b,d]:[d,d],c="end";return{boundaries:b,focus:c}};function Al(a,b,c,d){return nl(b,d,c)}
function Bl(a,b){return{boundaries:b,focus:"end"}}
var Cl={keydown:function(a,b,c){var d=df.Pd(a.meta,a.keycode,V);return d?(B.preventDefault(a.nativeEvent),d(a,b,c)):{boundaries:b,focus:c}},"aloha.dblclick":function(a,b){return{boundaries:O.expand(b[0],b[1],"word"),focus:"end"}},"aloha.tplclick":function(a,b){return{boundaries:O.expand(b[0],b[1],"block"),focus:"end"}},"aloha.mouseup":Al,mouseup:Al,mousedown:function(a,b,c,d,e){if(!e)return{boundaries:b,focus:c};a=b[0];c=d["start"===c?1:0];return kl(a,c)?{boundaries:[c,a],focus:"end"}:{boundaries:[a,
c],focus:"start"}},dragover:Bl,drop:Bl,resize:function(a,b,c){return{boundaries:b,focus:c}},paste:function(a,b){return{boundaries:b,focus:"end"}}};
function Dl(a){function b(c,d){la.Df(c,d,la.Vf,100,function(c,d){if(!g)return!0;E.i(a,"opacity",c);1>d||(0===c?e.push(setTimeout(function(){b(0,1)},300)):1===c&&e.push(setTimeout(function(){b(1,0)},500)))})}function c(){g=!1;E.i(a,"opacity",1);e.forEach(clearTimeout);e=[]}function d(){c();g=!0;e.push(setTimeout(function(){b(1,0)},500))}var e=[],g=!0;return{start:function(){c();e.push(setTimeout(d,50))},stop:c}}
function El(a){var b=a.createElement("textarea");v.extend(b.style,{overflow:"hidden",width:"1px",height:"1px",outline:"0",opacity:"0.01"});var c=a.createElement("div");v.extend(c.style,{overflow:"hidden",cursor:"text",color:"#000",zIndex:"9999",display:"none",position:"absolute"});E.addClass(c,"aloha-caret","aloha-ephemera");E.append(b,c);E.append(c,a.body);return{je:Dl(c),focus:"end",boundaries:null,event:null,dragging:null,od:null,me:0,lastMouseEvent:"",caret:c,formatting:[],overrides:[]}}
function Fl(a){var b=U.G(a),c=G.document(a);a=E.fc(c);var d=E.scrollTop(c),c=E.scrollLeft(c),e=a.innerHeight,g=a.innerWidth,k=b.height,m=b.top,b=b.left,n=0,p=0;m<d?n=m-k:m>d+e&&(n=m-e+k+k);b<c?p=b-k:b>c+g&&(p=b-g+k+k);(n||p)&&a.scrollTo(p||c,n||d)}function Gl(a,b){var c=R.Pa(b.formatting,R.Ba(a),b.overrides),c=v.g(v.md(c));c.color||(c.color=E.getComputedStyle(E.b(a)?a.parentNode:a,"color"));return c}var Hl=/^mobile\./;
function Il(a,b,c,d){var e="start"===d?b:c,g=G.a(e);if(!E.eb(g))return E.i(a.caret,"display","none"),a;il(a.caret,e);v.extend(a.caret.style,jl(Gl(g,a)));G.select(b,c);a.je.start();return v.g(a,{boundaries:[b,c],focus:d})}
var Jl={mousemove:!0,mousedown:!0,mouseup:!0,click:!0,dblclick:!0,"aloha.dblclick":!0,"aloha.tplclick":!0},Kl={mousedown:!0,mouseup:!0,click:!0,dblclick:!0,"aloha.dblclick":!0,"aloha.tplclick":!0},Ll={dblclick:!0,"aloha.dblclick":!0,"aloha.tplclick":!0},W={w:function(a){return a&&a.Dh&&a.hasOwnProperty("focus")&&a.hasOwnProperty("caret")&&a.hasOwnProperty("boundaries")?!0:!1},ng:function(a){return a&&a.hasOwnProperty&&a.hasOwnProperty("dnd")&&a.hasOwnProperty("editable")&&a.hasOwnProperty("selection")&&
a.hasOwnProperty("nativeEvent")},show:il,select:Il,focus:Fl,update:function(a){var b=a.selection;if(!(Hl.test(a.type)||a.Dd||b.dragging&&"dragover"!==a.type))if("leave"===a.type)E.i(b.caret,"display","none");else{var c=a.type;if("mouseup"===c||"click"===c||"dblclick"===c)E.i(b.caret,"display","block");else return b=Il(b,b.boundaries[0],b.boundaries[1],b.focus),c="start"===b.focus?b.boundaries[0]:b.boundaries[1],("keypress"===a.type||"paste"===a.type||df.Zd[a.keycode]||df.Ga.pageDown===a.keycode||
df.Ga.pageUp===a.keycode||df.Ga.undo===a.keycode&&("meta"===a.meta||"ctrl"===a.meta||"shift"===a.meta)||df.Ga.enter===a.keycode)&&Fl(c),b}},n:function(a){if(!Cl[a.type])return a;var b=a.selection,c=Cl[a.type](a,b.boundaries,b.focus,b.zg,B.wa(a,"shift"));b.focus=c.focus;b.boundaries=c.boundaries;return a},ya:El,ue:function(a){a=a.querySelectorAll("div.aloha-caret");var b=[];[].forEach.call(a,function(a){"block"===E.L(a,"display")&&(b.push(a),E.i(a,"display","none"))});return b},Yg:function(a){a.forEach(function(a){E.i(a,
"display","block")})},Eh:function(a,b){var c=G.document(a);E.Hc(".aloha-selection-box",c).forEach(E.remove);return ql(a,b).map(function(a){var b=c.createElement("div");v.extend(b.style,{top:a.top+"px",left:a.left+"px",height:a.height+"px",width:a.width+"px",position:"absolute",background:"red",opacity:.4});E.addClass(b,"aloha-selection-box","aloha-ephemera");E.append(b,c.body);return b})},Qh:ql,Xe:function(a,b){var c=b.type,d=b.target.document||b.target.ownerDocument,e=a.selection||El(d),g=Kl[c]||
!1,k;if(e.dragging)k=e.dragging;else if("mousemove"!==b.type)k=null;else{var m=e.lastMouseEvent;k="mousedown"===m||"aloha.dblclick"===m||"aloha.tplclick"===m?m:null}var n=k&&k!==e.dragging,m=E.L(e.caret,"display");(g||n)&&E.i(e.caret,"display","none");n&&(e.dragging=k);if("mousemove"===c)return null;"mouseup"===c&&e.dragging&&(c="aloha.mouseup",e.dragging=null);if(g){if("mousedown"!==b.type&&"dbclick"!==b.type&&"aloha.dblclick"!==b.type)k=null;else{k=new Date;var n=k-e.me,p=e.od;e.od=null;e.me=k;
k=500<n||!e.event||e.event.clientX!==b.clientX||e.event.clientY!==b.clientY?null:Ll[p]?"aloha.tplclick":"aloha.dblclick"}c=k||c}Ll[c]&&(e.od=c,B.preventDefault(b));Jl[c]&&(e.lastMouseEvent=c);d=g?(d=G.ca(b.clientX+E.scrollLeft(d),b.clientY+E.scrollTop(d),d))&&[d,d]:G.get(d);E.i(e.caret,"display",m);if(!d)return"click"!==c&&e.boundaries?(m=hj.H(a,e.boundaries[0]),{Dd:!1,type:"leave",nativeEvent:b,editable:m,selection:e,dnd:a.dnd}):null;m=G.ha(d[0],d[1]);g=G.a(d[0]);k=G.a(d[1]);m=!E.eb(m)&&(E.eb(g)||
E.eb(k));if("keydown"===c&&m)return B.preventDefault(b),null;m=hj.H(a,d[0]);if(!m)if(g=G.a(d[0]),g===e.caret?g=!0:(g=g.parentNode,g=g.parentNode===e.caret&&"true"===E.da(g,"contentEditable")),g)c="mobile."+c;else return null;e.overrides=a.selection?a.selection.overrides:[];e.zg=e.boundaries||d;e.boundaries=d;e.event=b;return{Dd:!1,type:c,nativeEvent:b,editable:m,selection:e,dnd:a.dnd}}};function Ml(a,b){if(b.state)return b.state(a,b);if(!(b.node||b.style||b.classes)||b.node&&a.nodeName!==b.node.toUpperCase())return!1;var c;return b.style&&(c=1,v.forEach(b.style,function(b,e){c&=b===E.L(a,e)}),!c)||b.classes&&(c=1,v.forEach(b.classes,function(b,e){c&=E.hasClass(a,e)}),!c)?!1:!0}
function Nl(a,b,c){var d=c.style,e=c.node.toUpperCase();a=T.format(a[0],a[1],e);if(!d)return a;E.zc(G.a(a[0]),G.a(a[1])).forEach(function(a){e===a.nodeName&&v.forEach(d,function(b,c){E.i(a,c,b)})});return a}function Ol(a,b,c){c=c.node.toUpperCase();if(!G.j(a[0],a[1]))return T.format(a[0],a[1],c);c=R.xc[c];if(!c)return a;var d=R.Pa(b.formatting,R.Ba(G.a(a[0])),b.overrides);b.overrides=R.toggle(d,c,!0);return a}
function Pl(a,b,c,d){b=a.action?a.action(b,c.selection,a,d)||b:(N.Ca({nodeName:a.node.toUpperCase()})?Nl:Ol)(b,c.selection,a);c.selection=W.select(c.selection,b[0],b[1]);(a=hj.H(c,b[0]))&&f.Tc.apply(c.stack,c.stack)({Dd:!1,type:"nodechange",nativeEvent:d,editable:a,selection:c.selection,dnd:c.dnd})}
function Ql(a,b){var c=0===a.length?f.Jc:f.c(h.contains,a),d=(a[0]||window.aloha).editor;return function(a){var g=d.selection;g&&g.boundaries&&(g=G.get(G.document(g.boundaries[0])))&&c(hj.H(d,g[0]))&&b(g,d,a)}}
var Rl={bind:Ql,Ug:function(a,b){var c={},d=b.selection,e=G.a(d.boundaries["start"===d.focus?0:1]),g=R.map(R.Pa(d.formatting,R.Ba(e),d.overrides)),k=E.Ja(e,E.e).filter(E.t);v.forEach(a,function(a,b){if(a.Me&&a.Me in g)c[b]=!!g[a.Me];else{var d=0;k.forEach(function(b){d|=Ml(b,a)});c[b]=!!d}});return c},Jf:function(a,b){hj.w(a)&&(a=[a]);h.w(a)||(b=a,a=[]);return Ql(a,f.c(Pl,b))},Kf:{p:{node:"p"},h1:{node:"h1"},h2:{node:"h2"},h3:{node:"h3"},h4:{node:"h4"},ol:{node:"ol"},ul:{node:"ul"},pre:{node:"pre"},
bold:{node:"b",override:"bold"},italic:{node:"i",override:"italic"},underline:{node:"u",override:"underline"},unformat:{state:f.D,action:function(a,b,c){c.nodes.map(function(a){return a.toUpperCase()}).forEach(function(b){a=T.Fa(b,a[0],a[1],!0)});return a},nodes:"b i u em strong sub sup del small code".split(" ")}}};function Sl(a,b,c){var d=G.O(b.selection.boundaries[0],b.selection.boundaries[1]);Ji.ob(b.editable.Vb,{meta:{type:a},oldRange:d},function(){d=c();return{newRange:d}})}function Tl(a){function b(b){a=M.removeNode(b,a)}function c(a){return N.s(a)||E.e(a)}for(var d=0;d<a.length;d++)E.Ka(G.a(a[d]),b,c);return a}
function Ul(a,b){var c=b.selection,d=c.boundaries[0],e=c.boundaries[1];G.j(d,e)&&(a?e=O.next(e):d=O.l(d));d=T.remove(d,O.Uc(e));c.formatting=R.Pa(c.formatting,R.Ba(G.a(d[0])));d=Tl(d);N.Sb(G.ha(d[0],d[1]));return d}function Vl(a,b){var c=b.selection,d=c.boundaries;if(!N.cb(d[0],d[1]))return T.toggle(d[0],d[1],a);var e=R.xc[a];if(!e)return d;d=R.Pa(c.formatting,R.Ba(G.a(d[0])),c.overrides);c.overrides=R.toggle(d,e,!0);return c.boundaries}
function Wl(a,b){a||(b.selection.formatting=R.Pa(b.selection.formatting,R.Ba(G.a(b.selection.boundaries[0]))));var c=-1<b.meta.indexOf("shift")?"BR":b.editable.Ze.defaultBlock;return T.le(b.selection.boundaries[1],c)}function Xl(a){var b=G.a(a).data;a=G.offset(a);return l.Rc.test(b.substr(a-1,1))}function Yl(a){var b=G.a(a).data;a=G.offset(a);return l.Rc.test(b.substr(a,1))}
function Zl(a){if(G.fa(a))return Xl(a)||Yl(a)?"\u00a0":" ";a=G.a(a);var b=E.Eb(a,function(a){return E.b(a)||E.e(a)||N.d(a)});if(E.t(b)||Xl(G.La(b)))return"\u00a0";b=E.Ib(a,function(a){return E.b(a)||E.e(a)||N.d(a)});return E.t(b)||Yl(G.Jb(b))?"\u00a0":" "}function $l(a){var b,c;G.fa(a)?(b=G.a(a),c=G.offset(a)):(b=G.qa(a))&&E.b(b)&&(c=b.data.length);b&&(a=b.data)&&l.Yb.test(a.substr(c-1,1))&&(b.data=a.substr(0,c-1)+" "+a.substr(c))}
function am(a){var b=a.editable,c=a.selection,d=String.fromCharCode(a.keycode),e=c.boundaries[0];"\t"===d?d="\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0":" "===d?(a=E.getComputedStyle(E.r(G.a(e),E.b),"white-space"),N.uc(a)||(d=Zl(e))):$l(e);e=R.oe(e,R.Pa(c.formatting,c.overrides));c.overrides=[];c.formatting=[];var g=G.O(e,e),c=Ji.xg(b.elem,e),k=Ji.rg(c,[b.elem.ownerDocument.createTextNode(d)]);Ji.ob(b.Vb,{noObserve:!0},function(){M.ve(d,e,!0,[g]);return{changes:[k]}});return G.ub(g)}
function bm(a,b){var c=G.O(b.selection.boundaries[0],b.selection.boundaries[1]);a(b.editable.Vb,c,[c]);return G.ub(c)}
var cm={clearOverrides:!0,preventDefault:!0,undo:"delete",mutate:f.c(Ul,!1)},dm={clearOverrides:!0,preventDefault:!0,undo:"delete",mutate:f.c(Ul,!0)},em={Id:!0,preventDefault:!0,undo:"enter",mutate:f.c(Wl,!1)},fm={Id:!0,preventDefault:!0,undo:"enter",mutate:f.c(Wl,!0)},gm={preventDefault:!0,undo:"bold",mutate:f.c(Vl,"B")},hm={preventDefault:!0,undo:"italic",mutate:f.c(Vl,"I")},im={preventDefault:!0,undo:"underline",mutate:f.c(Vl,"U")},jm={Id:!0,preventDefault:!0,undo:"typing",mutate:am},km={clearOverrides:!0,
preventDefault:!0,mutate:f.c(bm,Ji.undo)},lm={preventDefault:!0,clearOverrides:!0,mutate:f.c(bm,Ji.Te)},mm={breakBlock:em,breakLine:fm,deleteBackward:cm,deleteForward:dm,formatBold:gm,formatItalic:hm,inputText:jm,redo:lm,undo:km},Y={keydown:{},keypress:{},keyup:{}};Y.keydown.up=Y.keydown.down=Y.keydown.left=Y.keydown.right={clearOverrides:!0};Y.keydown["delete"]=dm;Y.keydown.backspace=cm;Y.keydown.enter=em;Y.keydown["shift+enter"]=fm;Y.keydown["ctrl+b"]=Y.keydown["meta+b"]=gm;
Y.keydown["ctrl+i"]=Y.keydown["meta+i"]=hm;Y.keydown["ctrl+u"]=Y.keydown["meta+u"]=im;Y.keydown["ctrl+a"]=Y.keydown["meta+a"]={preventDefault:!0,clearOverrides:!0,mutate:function(a){var b=E.Hb(G.ha(a.selection.boundaries[0],a.selection.boundaries[1]));return b?[G.create(b,0),G.La(b)]:a.selection.boundaries}};Y.keydown["ctrl+z"]=Y.keydown["meta+z"]=km;Y.keydown["ctrl+shift+z"]=Y.keydown["meta+shift+z"]=lm;
Y.keydown.tab={preventDefault:!0,undo:"indent",mutate:function(a){var b=a.selection.boundaries,c=b[0],b=b[1];if(Mj.kg(c,b))return Mj.eg(c,b);G.j(c,b)||(a.selection.boundaries=Ul(!1,a));return am(a)}};Y.keypress.input=jm;Y.keydown["ctrl+0"]={mutate:function(a){a.editable&&dd.toggle(a.editable.elem);return a.selection.boundaries}};Y.keydown["ctrl+1"]={mutate:function(a){a.editable&&dd.toggle(a.editable.elem,{outline:!0,tagname:!0});return a.selection.boundaries}};
Y.keydown["ctrl+2"]={mutate:function(a){a.editable&&dd.toggle(a.editable.elem,{outline:!0,tagname:!0,padding:!0});return a.selection.boundaries}};function nm(a){return df.Pd(a.meta,a.keycode,Y[a.type]||[])||"keypress"===a.type&&"alt"!==a.meta&&"ctrl"!==a.meta&&!l.we(String.fromCharCode(a.keycode))&&Y.keypress.input}
var om={n:function(a){var b=a.selection,c=b.boundaries[0],d=b.boundaries[1],e=nm(a);if(!e)return a;e.preventDefault&&B.preventDefault(a.nativeEvent);e.clearOverrides&&(b.overrides=[],b.formatting=[]);e.mutate&&(e.undo?Sl(e.undo,a,function(){e.Id&&!G.j(c,d)&&(b.boundaries=Ul(!1,a));b.boundaries=e.mutate(a);N.Sb(G.ha(b.boundaries[0],b.boundaries[1]))}):b.boundaries=e.mutate(a));return a},Af:mm};var pm={dropEffect:"none",element:null,target:null,data:["text/plain",""]};function qm(a,b,c){var d=W.ue(c);a=G.ca(E.scrollLeft(c)+a,E.scrollTop(c)+b,c);W.Yg(d);return[a,a]}
var rm={dragstart:function(a){a.nativeEvent.dataTransfer.setData(a.dnd.data[0],a.dnd.data[1]);a.dnd.element=a.nativeEvent.target;a.dnd.target=a.nativeEvent.target},dragover:function(a){var b=a.nativeEvent;a.selection.boundaries=qm(b.clientX+-10,b.clientY+-10,b.target.ownerDocument);B.preventDefault(b)},drop:function(a){var b=a.nativeEvent;a.selection.boundaries=qm(b.clientX+-10+8,b.clientY+-10,b.target.ownerDocument);if(a.selection.boundaries){var c=a.selection,d=a.dnd.element,e=d.previousSibling;
a=T.h(a.selection.boundaries[0],a.selection.boundaries[1],d);e&&e.nextSibling&&E.g(e,e.nextSibling);c.boundaries=[a,a]}B.stopPropagation(b);B.preventDefault(b)}},sm={n:function(a){if(a.dnd&&rm[a.type])rm[a.type](a);return a},ya:function(a){return v.g({},pm,a)},xe:function(a){if(!E.t(a))return!1;var b=a.getAttribute("draggable");return"false"===b?!1:"true"===b||"IMG"===a.nodeName?!0:"A"===a.nodeName&&a.getAttribute("href")}};function tm(a){return E.b(a)?3:N.Ea(a)?5:8}function um(a,b){for(var c=0;c<a.length;c++)if(b[c]!==a[c])return[];return b.slice(c)}function vm(a,b){var c=[],d=a.ownerDocument.body,e=K.H(d,G.ba(a));b.forEach(function(a){c.push(um(e,K.H(d,a)))});return c}
function wm(a,b,c){b=b||0;var d=[],e=[],g=[],k=!1;E.children(a).forEach(function(a,n){var p=tm(a),s=0,t=c.filter(function(a){return a[0]===n}).map(function(a){return a.slice(1)});p&2?(k&&d.push([b,b,"split"]),k=!0,g.push(a.data),s=a.data.length,e=e.concat(t.map(function(a){return b+(a[0]||0)}))):p&4?(k=!1,g.push("\u265e"),s=1,e=e.concat(t.map(function(a){return b+(a[0]||0)}))):(k=!1,p=wm(a,b,t),d=d.concat([[b,b+p.content.length,a]],p.Ed),g.push(p.content),s+=p.content.length,e=e.concat(p.Fc));b+=
s});return{content:g.join(""),Fc:e,Ed:d,collapsed:[]}}function xm(a,b,c){var d=a.content;return{content:d.substring(0,b)+d.substring(c),Fc:a.Fc.reduce(function(a,d){if(d>=b&&d<=c)return a;b<d&&(d-=Math.min(d,c)-b);return a.concat(d)},[]),Ed:a.Ed.reduce(function(a,d){var k=d[0],m=d[1];if(!k||!m||k>=b&&m<=c)return a.concat([[]]);b<k&&(k-=Math.min(k,c)-b);b<m&&(m-=Math.min(m,c)-b);return a.concat([[k,m].concat(d.slice(2))])},[])}}
var ym=l.cc.join(""),zm=h.tb(l.ac,l.Zb).join(""),Am=new RegExp("[^"+zm+ym+"]"),Bm=new RegExp("["+zm+"]");function Cm(a){for(var b=a.content,c=[],d=0,e=99,g;--e;){g=b.search(Am);if(-1===g){c.push([d,b.substring(0,b)]);break}if(0===g){g=b.search(Bm);if(-1===g)break;d+=g;b=b.substring(g)}else 0===d||g===b.length?(c.push([d,b.substring(0,g)]),a=xm(a,d,d+g),b=a.content):1===g?(d++,b=b.substring(1)):(d++,c.push([d,b.substring(1,g)]),a=xm(a,d,d+g-1),b=b.substring(g))}a.collapsed=c;return a}
function Dm(a){var b=E.r(G.a(a[0]),function(a){return!N.d(a)&&!E.e(a)});return Cm(wm(b,0,vm(b,a)))};var Em=Gc,Fm=[[Em.Ha+"transition",Em.Ha+"transform 0.2s ease-out"],[Em.Ha+"transform","scale(0.9)"],["opacity","0.5"]];function Gm(a){return"IMG"===a.nativeEvent.target.nodeName||E.hasClass(a.nativeEvent.target,"aloha-block")}
var Hm={mousedown:function(a){var b=a.nativeEvent.target;Gm(a)&&sm.xe(b)&&(b=B.wa(a,"ctrl")?sm.ya({dropEffect:"copy",element:b.cloneNode(!0),target:b,data:["text/html",b.outerHTML]}):sm.ya({dropEffect:"move",element:b,target:b,data:["text/html",b.outerHTML]}),a.dnd=b)},dragstart:function(a){a.dnd&&Gm(a)&&Fm.forEach(function(b){a.dnd.target&&E.i(a.dnd.target,b[0],b[1]);E.i(a.dnd.element,b[0],b[1])})},dragend:function(a){a.dnd&&Gm(a)&&Fm.forEach(function(b){a.dnd.target&&E.i(a.dnd.target,b[0],"");E.i(a.dnd.element,
b[0],"")})},dragover:function(){}},Im={n:function(a){if(Hm[a.type])Hm[a.type](a);return a},fg:function(a){a=h.Y(a.querySelectorAll(".aloha-block, img"));a.forEach(function(a){a.setAttribute("draggable","true");a.setAttribute("contentEditable","false");E.i(a,"cursor",Em.Ha+"grab")});return a}};var Jm=Gc;var Km={},Z=Km,Lm=Gc,Mm={shift:function(a,b){return b},ob:function(a,b){var c=Dm(a.selection.boundaries),d=c.Fc[0]||0;b.ic.focus();b.ic.value=c.content;b.ic.selectionEnd=d;b.ic.selectionStart=d;return{offset:d,field:b.ic,editable:a.editable,boundaries:a.selection.boundaries}},Mf:Dm},Nm={Ch:function(a,b,c){return function e(g){var k=a();k&&!h.gc(b,k,G.j)?(b=k,c(k,g)):(k=g.type,Jm.Oh&&"mouseup"===k&&B.Le(f.c(e,g)))}},Bf:function(a,b,c){B.add(a,"selectionchange",b,!0);B.add(a,"keyup",b,!0);B.add(a,"mouseup",
b,!0);B.add(a,"touchend",b,!0);B.add(a,"keypress",b,!0);Jm.Wd||Jm.Ge||!c||B.add(a,"mousemove",b,!0)},Fg:function(a,b,c){B.remove(a,"selectionchange",b,!0);B.remove(a,"keyup",b,!0);B.remove(a,"mouseup",b,!0);B.remove(a,"touchend",b,!0);B.remove(a,"keypress",b,!0);Jm.Wd||Jm.Ge||!c||B.remove(a,"mousemove",b,!0)}},Z={sequences:{}};Z.sequences.is=oh.w;Z.sequences.hint=oh.hint;Z.sequences.create=oh.create;Z.sequences.remove=oh.remove;Z.sequences.update=oh.update;Z.sequences.insertAfter=oh.wb;
Z.sequences.insertBefore=oh.insertBefore;Z.sequences.VOID_CHARACTER=oh.uf;Z.Boromir=Sd;Z.Record=wb;Z.arrays={};Z.arrays.is=h.w;Z.arrays.contains=h.contains;Z.arrays.difference=h.tb;Z.arrays.equal=h.gc;Z.arrays.intersect=h.fd;Z.arrays.is=h.w;Z.arrays.last=h.m;Z.arrays.coerce=h.Y;Z.arrays.mapcat=h.Ee;Z.arrays.partition=h.zd;Z.arrays.some=h.some;Z.arrays.someIndex=h.Tb;Z.arrays.split=h.split;Z.arrays.unique=h.unique;Z.arrays.refill=h.Bg;Z.autoformat={};Z.autoformat.middleware=Vk.n;Z.blocks={};
Z.blocks.middleware=Im.n;Z.boundaries={};Z.boundaries.is=G.w;Z.boundaries.get=G.get;Z.boundaries.select=G.select;Z.boundaries.raw=G.R;Z.boundaries.create=G.create;Z.boundaries.normalize=G.normalize;Z.boundaries.equals=G.j;Z.boundaries.container=G.a;Z.boundaries.offset=G.offset;Z.boundaries.document=G.document;Z.boundaries.fromRange=G.ub;Z.boundaries.fromRanges=G.vb;Z.boundaries.fromRangeStart=G.va;Z.boundaries.fromRangeEnd=G.ab;Z.boundaries.fromFrontOfNode=G.ba;Z.boundaries.fromBehindOfNode=G.jc;
Z.boundaries.fromStartOfNode=G.Jb;Z.boundaries.fromEndOfNode=G.La;Z.boundaries.fromPosition=G.ca;Z.boundaries.setRange=G.Lc;Z.boundaries.setRanges=G.Ab;Z.boundaries.setRangeStart=G.Od;Z.boundaries.setRangeEnd=G.Nd;Z.boundaries.isAtStart=G.J;Z.boundaries.isAtEnd=G.k;Z.boundaries.isTextBoundary=G.fa;Z.boundaries.isNodeBoundary=G.Z;Z.boundaries.next=G.next;Z.boundaries.prev=G.l;Z.boundaries.jumpOver=G.vc;Z.boundaries.nextWhile=G.v;Z.boundaries.prevWhile=G.K;Z.boundaries.stepWhile=G.Td;
Z.boundaries.walkWhile=G.$g;Z.boundaries.nextNode=G.nextNode;Z.boundaries.prevNode=G.o;Z.boundaries.nodeAfter=G.$;Z.boundaries.nodeBefore=G.qa;Z.boundaries.commonContainer=G.ha;Z.boundaries.range=G.O;Z.markers={};Z.markers.hint=tg.hint;Z.markers.insert=tg.h;Z.markers.extract=tg.hc;Z.browsers={};Z.browsers.chrome=Lm.chrome;Z.browsers.webkit=Lm.Wd;Z.browsers.safari=Lm.Kg;Z.browsers.vendor=Lm.vendor;Z.browsers.version=Lm.version;Z.browsers.VENDOR_PREFIX=Lm.Ha;Z.colors={};Z.colors.hex=Ea.bg;
Z.colors.rgb=Ea.Jg;Z.colors.cross=Ea.Qf;Z.colors.equals=Ea.j;Z.colors.serialize=Ea.Ld;Z.content={};Z.content.allowsNesting=x.ta;Z.content.allowedStyles=x.nb;Z.content.allowedAttributes=x.mb;Z.content.disallowedNodes=x.Wa;Z.content.nodeTranslations=x.Qb;Z.dom={};Z.dom.Nodes=E.aa;Z.dom.offset=E.offset;Z.dom.cloneShallow=E.X;Z.dom.clone=E.clone;Z.dom.text=E.text;Z.dom.children=E.children;Z.dom.nthChild=E.ga;Z.dom.numChildren=E.Ec;Z.dom.nodeIndex=E.u;Z.dom.nodeLength=E.q;Z.dom.hasChildren=E.$c;
Z.dom.nodeAtOffset=E.pa;Z.dom.normalizedNthChild=E.Bc;Z.dom.normalizedNodeIndex=E.Ac;Z.dom.realFromNormalizedIndex=E.Ic;Z.dom.normalizedNumChildren=E.Cc;Z.dom.isNode=E.ye;Z.dom.isTextNode=E.b;Z.dom.isElementNode=E.t;Z.dom.isFragmentNode=E.qc;Z.dom.isEmptyTextNode=E.Lb;Z.dom.isSameNode=E.isSameNode;Z.dom.equals=E.j;Z.dom.contains=E.contains;Z.dom.followedBy=E.ua;Z.dom.hasText=E.ad;Z.dom.outerHtml=E.Gc;Z.dom.append=E.append;Z.dom.merge=E.g;Z.dom.moveNextAll=E.nd;Z.dom.moveBefore=E.Pb;
Z.dom.moveAfter=E.gb;Z.dom.move=E.move;Z.dom.copy=E.Aa;Z.dom.wrap=E.Fa;Z.dom.wrapWith=E.Xd;Z.dom.insert=E.h;Z.dom.insertAfter=E.wb;Z.dom.replace=E.replace;Z.dom.replaceShallow=E.zb;Z.dom.remove=E.remove;Z.dom.removeShallow=E.xa;Z.dom.removeChildren=E.Hd;Z.dom.addClass=E.addClass;Z.dom.removeClass=E.removeClass;Z.dom.toggleClass=E.Wg;Z.dom.hasClass=E.hasClass;Z.dom.hasAttrs=E.mc;Z.dom.attrs=E.attrs;Z.dom.setAttr=E.ra;Z.dom.setAttrNS=E.Md;Z.dom.getAttr=E.da;Z.dom.getAttrNS=E.re;Z.dom.removeAttr=E.Fd;
Z.dom.removeAttrNS=E.Dg;Z.dom.removeAttrs=E.Eg;Z.dom.removeStyle=E.We;Z.dom.setStyle=E.i;Z.dom.getStyle=E.L;Z.dom.getComputedStyle=E.getComputedStyle;Z.dom.getComputedStyles=E.Zc;Z.dom.query=E.Hc;Z.dom.nextNonAncestor=E.Qa;Z.dom.nextWhile=E.v;Z.dom.nextUntil=E.sd;Z.dom.nextSibling=E.nextSibling;Z.dom.nextSiblings=E.yb;Z.dom.prevWhile=E.K;Z.dom.prevUntil=E.Cd;Z.dom.prevSibling=E.C;Z.dom.prevSiblings=E.Rb;Z.dom.nodeAndNextSiblings=E.oa;Z.dom.nodeAndPrevSiblings=E.wc;Z.dom.nodesAndSiblingsBetween=E.zc;
Z.dom.walk=E.Ra;Z.dom.walkRec=E.Cb;Z.dom.walkUntilNode=E.Xb;Z.dom.forward=E.forward;Z.dom.backward=E.za;Z.dom.findForward=E.Yc;Z.dom.findBackward=E.Xc;Z.dom.upWhile=E.r;Z.dom.climbUntil=E.Ka;Z.dom.childAndParentsUntil=E.Ja;Z.dom.childAndParentsUntilIncl=E.Ua;Z.dom.childAndParentsUntilNode=E.qb;Z.dom.childAndParentsUntilInclNode=E.pb;Z.dom.parentsUntil=E.xd;Z.dom.parentsUntilIncl=E.yd;Z.dom.serialize=E.Ld;Z.dom.enableSelection=E.Yf;Z.dom.disableSelection=E.Tf;Z.dom.isEditable=E.gd;
Z.dom.isEditableNode=E.eb;Z.dom.isEditingHost=E.e;Z.dom.isContentEditable=E.isContentEditable;Z.dom.documentWindow=E.fc;Z.dom.editingHost=E.Hb;Z.dom.editableParent=E.Xf;Z.dom.scrollTop=E.scrollTop;Z.dom.scrollLeft=E.scrollLeft;Z.dom.absoluteTop=E.Ia;Z.dom.absoluteLeft=E.zf;Z.dragdrop={};Z.dragdrop.middleware=sm.n;Z.dragdrop.Context=sm.ya;Z.dragdrop.isDraggable=sm.xe;Z.editables={};Z.editables.is=hj.w;Z.editables.fromElem=hj.$f;Z.editables.fromBoundary=hj.H;Z.editables.create=hj.create;
Z.editables.destroy=hj.pe;Z.editing={};Z.editing.format=T.format;Z.editing.unformat=T.Ud;Z.editing.style=T.style;Z.editing.remove=T.remove;Z.editing.breakline=T.le;Z.editing.insert=T.h;Z.editing.className=T.className;Z.editing.attribute=T.Ef;Z.editing.cut=T.Rf;Z.editing.copy=T.Aa;Z.editing.wrap=T.Fa;Z.events={};Z.events.is=B.w;Z.events.add=B.add;Z.events.remove=B.remove;Z.events.setup=B.$e;Z.events.hasKeyModifier=B.wa;Z.events.dispatch=B.Uf;Z.events.nextTick=B.Le;Z.events.preventDefault=B.preventDefault;
Z.events.stopPropagation=B.stopPropagation;Z.events.suppress=B.ff;Z.fn={};Z.fn.identity=f.cd;Z.fn.noop=f.W;Z.fn.returnTrue=f.Jc;Z.fn.returnFalse=f.D;Z.fn.complement=f.ia;Z.fn.partial=f.c;Z.fn.strictEquals=f.ef;Z.fn.comp=f.Tc;Z.fn.and=f.he;Z.fn.constantly=f.Lf;Z.fn.is=f.w;Z.fn.isNou=f.ea;Z.fn.or=f.ug;Z.fn.and=f.he;Z.fn.asMethod=f.F;Z.fn.extendType=f.Vc;Z.html={};Z.html.parse=N.parse;Z.html.hasBlockStyle=N.Kb;Z.html.hasInlineStyle=N.bb;Z.html.hasLinebreakingStyle=N.d;Z.html.prop=N.Sb;
Z.html.isVoidType=N.N;Z.html.isRendered=N.s;Z.html.isUnrendered=N.M;Z.html.isBlockNode=N.Ca;Z.html.isInlineNode=N.Oa;Z.html.isListContainer=N.Da;Z.html.isTableContainer=N.kd;Z.html.isGroupContainer=N.la;Z.html.isGroupedElement=N.Na;Z.html.isListItem=N.f;Z.html.isHeading=N.Mb;Z.html.isTextLevelSemanticNode=N.Nb;Z.html.isVoidNode=N.Ea;Z.images={};Z.images.insert=cl.h;Z.images.setAttributes=cl.Mg;Z.keys={};Z.keys.middleware=df.n;Z.keys.parseKeys=df.wg;Z.keys.ARROWS=df.Zd;Z.keys.CODES=df.Ga;
Z.keys.shortcutHandler=df.Pd;Z.links={};Z.links.create=gk.create;Z.links.remove=gk.remove;Z.links.middleware=gk.n;Z.lists={};Z.lists.toggle=Mj.toggle;Z.lists.format=Mj.format;Z.lists.unformat=Mj.Ud;Z.maps={};Z.maps.isEmpty=v.Ma;Z.maps.fillKeys=v.Wc;Z.maps.keys=v.keys;Z.maps.vals=v.kb;Z.maps.selectVals=v.Lg;Z.maps.filter=v.filter;Z.maps.forEach=v.forEach;Z.maps.extend=v.extend;Z.maps.merge=v.g;Z.maps.isMap=v.isMap;Z.maps.clone=v.clone;Z.maps.cloneSet=v.Sc;Z.maps.cloneDelete=v.ne;Z.maps.create=v.create;
Z.maps.mapTuples=v.md;Z.metaview={};Z.metaview.toggle=dd.toggle;Z.mobile={};Z.mobile.shift=Mm.shift;Z.mobile.capture=Mm.ob;Z.mobile.context=Mm.Mf;Z.mouse={};Z.mouse.middleware=$e.n;Z.mouse.EVENTS=$e.ae;Z.overrides={};Z.overrides.map=R.map;Z.overrides.indexOf=R.indexOf;Z.overrides.unique=R.unique;Z.overrides.toggle=R.toggle;Z.overrides.harvest=R.Ba;Z.overrides.consume=R.oe;Z.overrides.nodeToState=R.xc;Z.overrides.stateToNode=R.Tg;Z.overrides.joinToSet=R.Pa;Z.paste={};Z.paste.middleware=Yk.n;
Z.paths={};Z.paths.equals=K.j;Z.paths.toBoundary=K.jb;Z.paths.fromBoundary=K.H;Z.carets={};Z.carets.box=U.G;Z.carets.showHint=U.Pg;Z.carets.hideHint=U.cg;Z.selectionchange={};Z.selectionchange.middleware=Nm.n;Z.selectionchange.addHandler=Nm.Bf;Z.selectionchange.removeHandler=Nm.Fg;Z.selections={};Z.selections.is=W.w;Z.selections.isSelectionEvent=W.ng;Z.selections.isRange=W.Mh;Z.selections.show=W.show;Z.selections.focus=W.focus;Z.selections.select=W.select;Z.selections.update=W.update;
Z.selections.middleware=W.n;Z.selections.Context=W.ya;Z.selections.selectionEvent=W.Xe;Z.searching={};Z.searching.search=Ze.search;Z.searching.forward=Ze.forward;Z.searching.backward=Ze.za;Z.strings={};Z.strings.splice=l.splice;Z.strings.addToList=l.ge;Z.strings.removeFromList=l.Ve;Z.strings.uniqueList=l.Vd;Z.strings.words=l.jf;Z.strings.splitIncl=l.cf;Z.strings.dashesToCamelCase=l.ec;Z.strings.camelCaseToDashes=l.Gf;Z.strings.isEmpty=l.Ma;Z.strings.isControlCharacter=l.we;
Z.strings.CONTROL_CHARACTER=l.kf;Z.strings.SPACE=l.rf;Z.strings.NOT_SPACE=l.Pc;Z.strings.WHITE_SPACE=l.Rc;Z.strings.WHITE_SPACES=l.ce;Z.strings.ZERO_WIDTH_SPACE=l.yf;Z.strings.NON_BREAKING_SPACE=l.Yb;Z.strings.WORD_BOUNDARY=l.bc;Z.strings.WORD_BOUNDARY_FROM_END=l.de;Z.strings.WORD_BREAKING_CHARACTER=l.vf;Z.strings.TERMINAL_WHITE_SPACES=l.sf;Z.strings.ZERO_WIDTH_CHARACTERS=l.cc;Z.strings.WHITE_SPACE_CHARACTERS=l.ac;Z.strings.WORD_BREAKING_CHARACTERS=l.wf;Z.strings.NON_BREAKING_SPACE_CHARACTERS=l.Zb;
Z.transform={};Z.transform.html=bj.bd;Z.transform.plain=bj.Ne;Z.transform.msword=bj.He;Z.traversing={};Z.traversing.next=O.next;Z.traversing.prev=O.l;Z.traversing.expand=O.expand;Z.traversing.isAtStart=O.J;Z.traversing.isAtEnd=O.k;Z.traversing.isBoundariesEqual=O.cb;Z.typing={};Z.typing.middleware=om.n;Z.typing.actions=om.Af;Z.ui={};Z.ui.bind=Rl.bind;Z.ui.states=Rl.Ug;Z.ui.command=Rl.Jf;Z.ui.commands=Rl.Kf;Z.undo={};Z.undo.Context=Ji.ya;Z.undo.enter=Ji.qe;Z.undo.close=Ji.close;Z.undo.leave=Ji.qg;
Z.undo.capture=Ji.ob;Z.undo.undo=Ji.undo;Z.undo.redo=Ji.Te;Z.zippers={};Z.zippers.go=Q.go;Z.zippers.dom=Q.Xa;Z.zippers.hint=Q.hint;Z.zippers.update=Q.update;Z.zippers.before=Q.Fb;Z.zippers.after=Q.Ta;Z.zippers.prev=Q.l;Z.zippers.next=Q.next;Z.zippers.up=Q.Wb;Z.zippers.down=Q.Ya;Z.zippers.root=Q.root;Z.zippers.peek=Q.yg;Z.zippers.split=Q.split;Z.zippers.splice=Q.splice;Z.zippers.insert=Q.h;Z.zippers.replace=Q.replace;Z.zippers.remove=Q.remove;Z.zippers.zipper=Q.Yd;Z.zippers.isAtStart=Q.J;
Z.zippers.isAtEnd=Q.k;Z.zippers.splitAt=Q.Rd;Z.zippers.insertAt=Q.gg;Z.zippers.isMarker=Q.sc;Z.zippers.createMarker=Q.Pf;var Om={},Pm;for(Pm in Z)Om[Pm]={},Om[Pm]=Z[Pm];Km=Om;/*

*/
var Qm=Km;function $(a,b){if(b=b||W.Xe($,a)){b=f.Tc.apply($.stack,$.stack)(b);var c=W.update(b);c&&($.selection=v.g(c));b.dnd&&($.dnd=v.g(b.dnd))}}$.dnd=null;$.selection=null;$.editables={};$.stack=[W.n,gk.n,om.n,Vk.n,Im.n,sm.n,Yk.n,df.n,$e.n];function Rm(){var a=[],b;for(b in $.editables)a.push($.editables[b].elem.ownerDocument);return a}function Sm(a,b){var c=a.ownerDocument;h.contains(Rm(),c)||(B.$e(c,$),B.add(E.fc(c),"resize",$),$.selection=W.ya(c));c=hj.create($,a,b);Im.fg(c.elem);return c}
Qm.aloha=Sm;Qm.mahalo=function(a){$.selection.je.stop();W.ue(a.ownerDocument);return hj.pe($,a)};Qm.editor=$;Qm.buildcommit="https://github.com/alohaeditor/Aloha-Editor/commit/5ffb103169678e4750cfa566e6b99fbc9dcec182";window.aloha=v.extend(Sm,Qm);console.log('%c \u2714%c Invoke Aloha by calling: %caloha(document.querySelector(".editable")) ',"color: #7ad; background: #f8f6f5; padding: 5px 0;","color: #aaa; background: #f8f6f5; padding: 5px 0;","color: #7ad; background: #f8f6f5; padding: 5px 0;");}())

!function($) {
    "use strict";

    var FOUNDATION_VERSION = '6.1.2';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
    var Foundation = {
        version: FOUNDATION_VERSION,

        /**
         * Stores initialized plugins.
         */
        _plugins: {},

        /**
         * Stores generated unique ids for plugin instances
         */
        _uuids: [],

        /**
         * Returns a boolean for RTL support
         */
        rtl: function(){
            return $('html').attr('dir') === 'rtl';
        },
        /**
         * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
         * @param {Object} plugin - The constructor of the plugin.
         */
        plugin: function(plugin, name) {
            // Object key to use when adding to global Foundation object
            // Examples: Foundation.Reveal, Foundation.OffCanvas
            var className = (name || functionName(plugin));
            // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
            // Examples: data-reveal, data-off-canvas
            var attrName  = hyphenate(className);

            // Add to the Foundation object and the plugins list (for reflowing)
            this._plugins[attrName] = this[className] = plugin;
        },
        /**
         * @function
         * Populates the _uuids array with pointers to each individual plugin instance.
         * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
         * Also fires the initialization event for each plugin, consolidating repeditive code.
         * @param {Object} plugin - an instance of a plugin, usually `this` in context.
         * @param {String} name - the name of the plugin, passed as a camelCased string.
         * @fires Plugin#init
         */
        registerPlugin: function(plugin, name){
            var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
            plugin.uuid = this.GetYoDigits(6, pluginName);

            if(!plugin.$element.attr('data-' + pluginName)){ plugin.$element.attr('data-' + pluginName, plugin.uuid); }
            if(!plugin.$element.data('zfPlugin')){ plugin.$element.data('zfPlugin', plugin); }
            /**
             * Fires when the plugin has initialized.
             * @event Plugin#init
             */
            plugin.$element.trigger('init.zf.' + pluginName);

            this._uuids.push(plugin.uuid);

            return;
        },
        /**
         * @function
         * Removes the plugins uuid from the _uuids array.
         * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
         * Also fires the destroyed event for the plugin, consolidating repeditive code.
         * @param {Object} plugin - an instance of a plugin, usually `this` in context.
         * @fires Plugin#destroyed
         */
        unregisterPlugin: function(plugin){
            var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

            this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
            plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
            /**
             * Fires when the plugin has been destroyed.
             * @event Plugin#destroyed
             */
                .trigger('destroyed.zf.' + pluginName);
            for(var prop in plugin){
                plugin[prop] = null;//clean up script to prep for garbage collection.
            }
            return;
        },

        /**
         * @function
         * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
         * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
         * @default If no argument is passed, reflow all currently active plugins.
         */
        reInit: function(plugins){
            var isJQ = plugins instanceof $;
            try{
                if(isJQ){
                    plugins.each(function(){
                        $(this).data('zfPlugin')._init();
                    });
                }else{
                    var type = typeof plugins,
                        _this = this,
                        fns = {
                            'object': function(plgs){
                                plgs.forEach(function(p){
                                    $('[data-'+ p +']').foundation('_init');
                                });
                            },
                            'string': function(){
                                $('[data-'+ plugins +']').foundation('_init');
                            },
                            'undefined': function(){
                                this['object'](Object.keys(_this._plugins));
                            }
                        };
                    fns[type](plugins);
                }
            }catch(err){
                console.error(err);
            }finally{
                return plugins;
            }
        },

        /**
         * returns a random base-36 uid with namespacing
         * @function
         * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
         * @param {String} namespace - name of plugin to be incorporated in uid, optional.
         * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
         * @returns {String} - unique id
         */
        GetYoDigits: function(length, namespace){
            length = length || 6;
            return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? '-' + namespace : '');
        },
        /**
         * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
         * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
         * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
         */
        reflow: function(elem, plugins) {

            // If plugins is undefined, just grab everything
            if (typeof plugins === 'undefined') {
                plugins = Object.keys(this._plugins);
            }
            // If plugins is a string, convert it to an array with one item
            else if (typeof plugins === 'string') {
                plugins = [plugins];
            }

            var _this = this;

            // Iterate through each plugin
            $.each(plugins, function(i, name) {
                // Get the current plugin
                var plugin = _this._plugins[name];

                // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
                var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');

                // For each plugin found, initialize it
                $elem.each(function() {
                    var $el = $(this),
                        opts = {};
                    // Don't double-dip on plugins
                    if ($el.data('zfPlugin')) {
                        console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
                        return;
                    }

                    if($el.attr('data-options')){
                        var thing = $el.attr('data-options').split(';').forEach(function(e, i){
                            var opt = e.split(':').map(function(el){ return el.trim(); });
                            if(opt[0]) opts[opt[0]] = parseValue(opt[1]);
                        });
                    }
                    try{
                        $el.data('zfPlugin', new plugin($(this), opts));
                    }catch(er){
                        console.error(er);
                    }finally{
                        return;
                    }
                });
            });
        },
        getFnName: functionName,
        transitionend: function($elem){
            var transitions = {
                'transition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'otransitionend'
            };
            var elem = document.createElement('div'),
                end;

            for (var t in transitions){
                if (typeof elem.style[t] !== 'undefined'){
                    end = transitions[t];
                }
            }
            if(end){
                return end;
            }else{
                end = setTimeout(function(){
                    $elem.triggerHandler('transitionend', [$elem]);
                }, 1);
                return 'transitionend';
            }
        }
    };


    Foundation.util = {
        /**
         * Function for applying a debounce effect to a function call.
         * @function
         * @param {Function} func - Function to be called at end of timeout.
         * @param {Number} delay - Time in ms to delay the call of `func`.
         * @returns function
         */
        throttle: function (func, delay) {
            var timer = null;

            return function () {
                var context = this, args = arguments;

                if (timer === null) {
                    timer = setTimeout(function () {
                        func.apply(context, args);
                        timer = null;
                    }, delay);
                }
            };
        }
    };

// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function(method) {
        var type = typeof method,
            $meta = $('meta.foundation-mq'),
            $noJS = $('.no-js');

        if(!$meta.length){
            $('<meta class="foundation-mq">').appendTo(document.head);
        }
        if($noJS.length){
            $noJS.removeClass('no-js');
        }

        if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
            Foundation.MediaQuery._init();
            Foundation.reflow(this);
        }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
            var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
            var plugClass = this.data('zfPlugin');//determine the class of plugin

            if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
                if(this.length === 1){//if there's only one, call it directly.
                    plugClass[method].apply(plugClass, args);
                }else{
                    this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
                        plugClass[method].apply($(el).data('zfPlugin'), args);
                    });
                }
            }else{//error for no class or no method
                throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
            }
        }else{//error for invalid argument type
            throw new TypeError("We're sorry, '" + type + "' is not a valid parameter. You must use a string representing the method you wish to invoke.");
        }
        return this;
    };

    window.Foundation = Foundation;
    $.fn.foundation = foundation;

// Polyfill for requestAnimationFrame
    (function() {
        if (!Date.now || !window.Date.now)
            window.Date.now = Date.now = function() { return new Date().getTime(); };

        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
            || window[vp+'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() { callback(lastTime = nextTime); },
                    nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
        /**
         * Polyfill for performance.now, required by rAF
         */
        if(!window.performance || !window.performance.now){
            window.performance = {
                start: Date.now(),
                now: function(){ return Date.now() - this.start; }
            };
        }
    })();
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== 'function') {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }

            var aArgs   = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP    = function() {},
                fBound  = function() {
                    return fToBind.apply(this instanceof fNOP
                            ? this
                            : oThis,
                        aArgs.concat(Array.prototype.slice.call(arguments)));
                };

            if (this.prototype) {
                // native functions don't have a prototype
                fNOP.prototype = this.prototype;
            }
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
// Polyfill to get the name of a function in IE9
    function functionName(fn) {
        if (Function.prototype.name === undefined) {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = (funcNameRegex).exec((fn).toString());
            return (results && results.length > 1) ? results[1].trim() : "";
        }
        else if (fn.prototype === undefined) {
            return fn.constructor.name;
        }
        else {
            return fn.prototype.constructor.name;
        }
    }
    function parseValue(str){
        if(/true/.test(str)) return true;
        else if(/false/.test(str)) return false;
        else if(!isNaN(str * 1)) return parseFloat(str);
        return str;
    }
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
    function hyphenate(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

}(jQuery);

!function(Foundation, window){
    /**
     * Compares the dimensions of an element to a container and determines collision events with container.
     * @function
     * @param {jQuery} element - jQuery object to test for collisions.
     * @param {jQuery} parent - jQuery object to use as bounding container.
     * @param {Boolean} lrOnly - set to true to check left and right values only.
     * @param {Boolean} tbOnly - set to true to check top and bottom values only.
     * @default if no parent object passed, detects collisions with `window`.
     * @returns {Boolean} - true if collision free, false if a collision in any direction.
     */
    var ImNotTouchingYou = function(element, parent, lrOnly, tbOnly){
        var eleDims = GetDimensions(element),
            top, bottom, left, right;

        if(parent){
            var parDims = GetDimensions(parent);

            bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
            top    = (eleDims.offset.top >= parDims.offset.top);
            left   = (eleDims.offset.left >= parDims.offset.left);
            right  = (eleDims.offset.left + eleDims.width <= parDims.width);
        }else{
            bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
            top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
            left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
            right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
        }
        var allDirs = [bottom, top, left, right];

        if(lrOnly){ return left === right === true; }
        if(tbOnly){ return top === bottom === true; }

        return allDirs.indexOf(false) === -1;
    };

    /**
     * Uses native methods to return an object of dimension values.
     * @function
     * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
     * @returns {Object} - nested object of integer pixel values
     * TODO - if element is window, return only those values.
     */
    var GetDimensions = function(elem, test){
        elem = elem.length ? elem[0] : elem;

        if(elem === window || elem === document){ throw new Error("I'm sorry, Dave. I'm afraid I can't do that."); }

        var rect = elem.getBoundingClientRect(),
            parRect = elem.parentNode.getBoundingClientRect(),
            winRect = document.body.getBoundingClientRect(),
            winY = window.pageYOffset,
            winX = window.pageXOffset;

        return {
            width: rect.width,
            height: rect.height,
            offset: {
                top: rect.top + winY,
                left: rect.left + winX
            },
            parentDims: {
                width: parRect.width,
                height: parRect.height,
                offset: {
                    top: parRect.top + winY,
                    left: parRect.left + winX
                }
            },
            windowDims: {
                width: winRect.width,
                height: winRect.height,
                offset: {
                    top: winY,
                    left: winX
                }
            }
        };
    };
    /**
     * Returns an object of top and left integer pixel values for dynamically rendered elements,
     * such as: Tooltip, Reveal, and Dropdown
     * @function
     * @param {jQuery} element - jQuery object for the element being positioned.
     * @param {jQuery} anchor - jQuery object for the element's anchor point.
     * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
     * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
     * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
     * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
     * TODO alter/rewrite to work with `em` values as well/instead of pixels
     */
    var GetOffsets = function(element, anchor, position, vOffset, hOffset, isOverflow){
        var $eleDims = GetDimensions(element),
        // var $eleDims = GetDimensions(element),
            $anchorDims = anchor ? GetDimensions(anchor) : null;
        // $anchorDims = anchor ? GetDimensions(anchor) : null;
        switch(position){
            case 'top':
                return {
                    left: $anchorDims.offset.left,
                    top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
                break;
            case 'left':
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                    top: $anchorDims.offset.top
                };
                break;
            case 'right':
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset,
                    top: $anchorDims.offset.top
                };
                break;
            case 'center top':
                return {
                    left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
                    top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
                break;
            case 'center bottom':
                return {
                    left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
                break;
            case 'center left':
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                    top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
                };
                break;
            case 'center right':
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
                    top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
                };
                break;
            case 'center':
                return {
                    left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
                    top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
                };
                break;
            case 'reveal':
                return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2,
                    top: $eleDims.windowDims.offset.top + vOffset
                };
            case 'reveal full':
                return {
                    left: $eleDims.windowDims.offset.left,
                    top: $eleDims.windowDims.offset.top
                };
                break;
            default:
                return {
                    left: $anchorDims.offset.left,
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
        }
    };
    Foundation.Box = {
        ImNotTouchingYou: ImNotTouchingYou,
        GetDimensions: GetDimensions,
        GetOffsets: GetOffsets
    };
}(window.Foundation, window);

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/
!function($, Foundation){
    'use strict';
    Foundation.Keyboard = {};

    var keyCodes = {
        9: 'TAB',
        13: 'ENTER',
        27: 'ESCAPE',
        32: 'SPACE',
        37: 'ARROW_LEFT',
        38: 'ARROW_UP',
        39: 'ARROW_RIGHT',
        40: 'ARROW_DOWN'
    };

    /*
     * Constants for easier comparing.
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     */
    var keys = (function(kcs) {
        var k = {};
        for (var kc in kcs) k[kcs[kc]] = kcs[kc];
        return k;
    })(keyCodes);

    Foundation.Keyboard.keys = keys;

    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    var parseKey = function(event) {
        var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
        if (event.shiftKey) key = 'SHIFT_' + key;
        if (event.ctrlKey) key = 'CTRL_' + key;
        if (event.altKey) key = 'ALT_' + key;
        return key;
    };
    Foundation.Keyboard.parseKey = parseKey;


    // plain commands per component go here, ltr and rtl are merged based on orientation
    var commands = {};

    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    var handleKey = function(event, component, functions) {
        var commandList = commands[component],
            keyCode = parseKey(event),
            cmds,
            command,
            fn;
        if (!commandList) return console.warn('Component not defined!');

        if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
            cmds = commandList; // use plain list
        } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
            if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);

            else cmds = $.extend({}, commandList.rtl, commandList.ltr);
        }
        command = cmds[keyCode];


        fn = functions[command];
        if (fn && typeof fn === 'function') { // execute function  if exists
            fn.apply();
            if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
                functions.handled.apply();
            }
        } else {
            if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
                functions.unhandled.apply();
            }
        }
    };
    Foundation.Keyboard.handleKey = handleKey;

    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
    var findFocusable = function($element) {
        return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
            if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
            return true;
        });
    };
    Foundation.Keyboard.findFocusable = findFocusable;

    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */

    var register = function(componentName, cmds) {
        commands[componentName] = cmds;
    };
    Foundation.Keyboard.register = register;
}(jQuery, window.Foundation);

!function($, Foundation) {

// Default set of media queries
    var defaultQueries = {
        'default' : 'only screen',
        landscape : 'only screen and (orientation: landscape)',
        portrait : 'only screen and (orientation: portrait)',
        retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
        'only screen and (min--moz-device-pixel-ratio: 2),' +
        'only screen and (-o-min-device-pixel-ratio: 2/1),' +
        'only screen and (min-device-pixel-ratio: 2),' +
        'only screen and (min-resolution: 192dpi),' +
        'only screen and (min-resolution: 2dppx)'
    };

    var MediaQuery = {
        queries: [],
        current: '',

        /**
         * Checks if the screen is at least as wide as a breakpoint.
         * @function
         * @param {String} size - Name of the breakpoint to check.
         * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
         */
        atLeast: function(size) {
            var query = this.get(size);

            if (query) {
                return window.matchMedia(query).matches;
            }

            return false;
        },

        /**
         * Gets the media query of a breakpoint.
         * @function
         * @param {String} size - Name of the breakpoint to get.
         * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
         */
        get: function(size) {
            for (var i in this.queries) {
                var query = this.queries[i];
                if (size === query.name) return query.value;
            }

            return null;
        },

        /**
         * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
         * @function
         * @private
         */
        _init: function() {
            var self = this;
            var extractedStyles = $('.foundation-mq').css('font-family');
            var namedQueries;

            namedQueries = parseStyleToObject(extractedStyles);

            for (var key in namedQueries) {
                self.queries.push({
                    name: key,
                    value: 'only screen and (min-width: ' + namedQueries[key] + ')'
                });
            }

            this.current = this._getCurrentSize();

            this._watcher();

            // Extend default queries
            // namedQueries = $.extend(defaultQueries, namedQueries);
        },

        /**
         * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
         * @function
         * @private
         * @returns {String} Name of the current breakpoint.
         */
        _getCurrentSize: function() {
            var matched;

            for (var i in this.queries) {
                var query = this.queries[i];

                if (window.matchMedia(query.value).matches) {
                    matched = query;
                }
            }

            if(typeof matched === 'object') {
                return matched.name;
            } else {
                return matched;
            }
        },

        /**
         * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
         * @function
         * @private
         */
        _watcher: function() {
            var _this = this;

            $(window).on('resize.zf.mediaquery', function() {
                var newSize = _this._getCurrentSize();

                if (newSize !== _this.current) {
                    // Broadcast the media query change on the window
                    $(window).trigger('changed.zf.mediaquery', [newSize, _this.current]);

                    // Change the current media query
                    _this.current = newSize;
                }
            });
        }
    };

    Foundation.MediaQuery = MediaQuery;

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
    window.matchMedia || (window.matchMedia = function() {
        'use strict';

        // For browsers that support matchMedium api such as IE 9 and webkit
        var styleMedia = (window.styleMedia || window.media);

        // For those that don't support matchMedium
        if (!styleMedia) {
            var style   = document.createElement('style'),
                script      = document.getElementsByTagName('script')[0],
                info        = null;

            style.type  = 'text/css';
            style.id    = 'matchmediajs-test';

            script.parentNode.insertBefore(style, script);

            // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
            info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

            styleMedia = {
                matchMedium: function(media) {
                    var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                    // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                    if (style.styleSheet) {
                        style.styleSheet.cssText = text;
                    } else {
                        style.textContent = text;
                    }

                    // Test if media query is true or false
                    return info.width === '1px';
                }
            };
        }

        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || 'all'),
                media: media || 'all'
            };
        };
    }());

// Thank you: https://github.com/sindresorhus/query-string
    function parseStyleToObject(str) {
        var styleObject = {};

        if (typeof str !== 'string') {
            return styleObject;
        }

        str = str.trim().slice(1, -1); // browsers re-quote string style values

        if (!str) {
            return styleObject;
        }

        styleObject = str.split('&').reduce(function(ret, param) {
            var parts = param.replace(/\+/g, ' ').split('=');
            var key = parts[0];
            var val = parts[1];
            key = decodeURIComponent(key);

            // missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
            val = val === undefined ? null : decodeURIComponent(val);

            if (!ret.hasOwnProperty(key)) {
                ret[key] = val;
            } else if (Array.isArray(ret[key])) {
                ret[key].push(val);
            } else {
                ret[key] = [ret[key], val];
            }
            return ret;
        }, {});

        return styleObject;
    }

}(jQuery, Foundation);

/**
 * Motion module.
 * @module foundation.motion
 */
!function($, Foundation) {

    var initClasses   = ['mui-enter', 'mui-leave'];
    var activeClasses = ['mui-enter-active', 'mui-leave-active'];

    function animate(isIn, element, animation, cb) {
        element = $(element).eq(0);

        if (!element.length) return;

        var initClass = isIn ? initClasses[0] : initClasses[1];
        var activeClass = isIn ? activeClasses[0] : activeClasses[1];

        // Set up the animation
        reset();
        element.addClass(animation)
            .css('transition', 'none');
        //  .addClass(initClass);
        // if(isIn) element.show();
        requestAnimationFrame(function() {
            element.addClass(initClass);
            if (isIn) element.show();
        });
        // Start the animation
        requestAnimationFrame(function() {
            element[0].offsetWidth;
            element.css('transition', '');
            element.addClass(activeClass);
        });
        // Move(500, element, function(){
        //   // element[0].offsetWidth;
        //   element.css('transition', '');
        //   element.addClass(activeClass);
        // });

        // Clean up the animation when it finishes
        element.one(Foundation.transitionend(element), finish);//.one('finished.zf.animate', finish);

        // Hides the element (for out animations), resets the element, and runs a callback
        function finish() {
            if (!isIn) element.hide();
            reset();
            if (cb) cb.apply(element);
        }

        // Resets transitions and removes motion-specific classes
        function reset() {
            element[0].style.transitionDuration = 0;
            element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
        }
    }

    var Motion = {
        animateIn: function(element, animation, /*duration,*/ cb) {
            animate(true, element, animation, cb);
        },

        animateOut: function(element, animation, /*duration,*/ cb) {
            animate(false, element, animation, cb);
        }
    };

    var Move = function(duration, elem, fn){
        var anim, prog, start = null;
        // console.log('called');

        function move(ts){
            if(!start) start = window.performance.now();
            // console.log(start, ts);
            prog = ts - start;
            fn.apply(elem);

            if(prog < duration){ anim = window.requestAnimationFrame(move, elem); }
            else{
                window.cancelAnimationFrame(anim);
                elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
            }
        }
        anim = window.requestAnimationFrame(move);
    };

    Foundation.Move = Move;
    Foundation.Motion = Motion;

}(jQuery, Foundation);

!function($, Foundation){
    'use strict';
    Foundation.Nest = {
        Feather: function(menu, type){
            menu.attr('role', 'menubar');
            type = type || 'zf';
            var items = menu.find('li').attr({'role': 'menuitem'}),
                subMenuClass = 'is-' + type + '-submenu',
                subItemClass = subMenuClass + '-item',
                hasSubClass = 'is-' + type + '-submenu-parent';
            menu.find('a:first').attr('tabindex', 0);
            items.each(function(){
                var $item = $(this),
                    $sub = $item.children('ul');
                if($sub.length){
                    $item.addClass(hasSubClass)
                        .attr({
                            'aria-haspopup': true,
                            'aria-expanded': false,
                            'aria-label': $item.children('a:first').text()
                        });
                    $sub.addClass('submenu ' + subMenuClass)
                        .attr({
                            'data-submenu': '',
                            'aria-hidden': true,
                            'role': 'menu'
                        });
                }
                if($item.parent('[data-submenu]').length){
                    $item.addClass('is-submenu-item ' + subItemClass);
                }
            });
            return;
        },
        Burn: function(menu, type){
            var items = menu.find('li').removeAttr('tabindex'),
                subMenuClass = 'is-' + type + '-submenu',
                subItemClass = subMenuClass + '-item',
                hasSubClass = 'is-' + type + '-submenu-parent';

            // menu.find('.is-active').removeClass('is-active');
            menu.find('*')
                // menu.find('.' + subMenuClass + ', .' + subItemClass + ', .is-active, .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
                .removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' is-submenu-item submenu is-active')
                .removeAttr('data-submenu').css('display', '');

            // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
            //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
            //           .removeAttr('data-submenu'));
            // items.each(function(){
            //   var $item = $(this),
            //       $sub = $item.children('ul');
            //   if($item.parent('[data-submenu]').length){
            //     $item.removeClass('is-submenu-item ' + subItemClass);
            //   }
            //   if($sub.length){
            //     $item.removeClass('has-submenu');
            //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
            //   }
            // });
        }
    };
}(jQuery, window.Foundation);

!function($, Foundation){
    'use strict';
    var Timer = function(elem, options, cb){
        var _this = this,
            duration = options.duration,//options is an object for easily adding features later.
            nameSpace = Object.keys(elem.data())[0] || 'timer',
            remain = -1,
            start,
            timer;

        this.isPaused = false;

        this.restart = function(){
            remain = -1;
            clearTimeout(timer);
            this.start();
        };

        this.start = function(){
            this.isPaused = false
            // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
            clearTimeout(timer);
            remain = remain <= 0 ? duration : remain;
            elem.data('paused', false);
            start = Date.now();
            timer = setTimeout(function(){
                if(options.infinite){
                    _this.restart();//rerun the timer.
                }
                cb();
            }, remain);
            elem.trigger('timerstart.zf.' + nameSpace);
        };

        this.pause = function(){
            this.isPaused = true;
            //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
            clearTimeout(timer);
            elem.data('paused', true);
            var end = Date.now();
            remain = remain - (end - start);
            elem.trigger('timerpaused.zf.' + nameSpace);
        };
    };
    /**
     * Runs a callback function when images are fully loaded.
     * @param {Object} images - Image(s) to check if loaded.
     * @param {Func} callback - Function to execute when image is fully loaded.
     */
    var onImagesLoaded = function(images, callback){
        var self = this,
            unloaded = images.length;

        if (unloaded === 0) {
            callback();
        }

        var singleImageLoaded = function() {
            unloaded--;
            if (unloaded === 0) {
                callback();
            }
        };

        images.each(function() {
            if (this.complete) {
                singleImageLoaded();
            }
            else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
                singleImageLoaded();
            }
            else {
                $(this).one('load', function() {
                    singleImageLoaded();
                });
            }
        });
    };

    Foundation.Timer = Timer;
    Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery, window.Foundation);

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function($) {

    $.spotSwipe = {
        version: '1.0.0',
        enabled: 'ontouchstart' in document.documentElement,
        preventDefault: false,
        moveThreshold: 75,
        timeThreshold: 200
    };

    var   startPosX,
        startPosY,
        startTime,
        elapsedTime,
        isMoving = false;

    function onTouchEnd() {
        //  alert(this);
        this.removeEventListener('touchmove', onTouchMove);
        this.removeEventListener('touchend', onTouchEnd);
        isMoving = false;
    }

    function onTouchMove(e) {
        if ($.spotSwipe.preventDefault) { e.preventDefault(); }
        if(isMoving) {
            var x = e.touches[0].pageX;
            var y = e.touches[0].pageY;
            var dx = startPosX - x;
            var dy = startPosY - y;
            var dir;
            elapsedTime = new Date().getTime() - startTime;
            if(Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
                dir = dx > 0 ? 'left' : 'right';
            }
            // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
            //   dir = dy > 0 ? 'down' : 'up';
            // }
            if(dir) {
                e.preventDefault();
                onTouchEnd.call(this);
                $(this).trigger('swipe', dir).trigger('swipe' + dir);
            }
        }
    }

    function onTouchStart(e) {
        if (e.touches.length == 1) {
            startPosX = e.touches[0].pageX;
            startPosY = e.touches[0].pageY;
            isMoving = true;
            startTime = new Date().getTime();
            this.addEventListener('touchmove', onTouchMove, false);
            this.addEventListener('touchend', onTouchEnd, false);
        }
    }

    function init() {
        this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
    }

    function teardown() {
        this.removeEventListener('touchstart', onTouchStart);
    }

    $.event.special.swipe = { setup: init };

    $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special['swipe' + this] = { setup: function(){
            $(this).on('swipe', $.noop);
        } };
    });
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function($){
    $.fn.addTouch = function(){
        this.each(function(i,el){
            $(el).bind('touchstart touchmove touchend touchcancel',function(){
                //we pass the original event object because the jQuery event
                //object is normalized to w3c specs and does not provide the TouchList
                handleTouch(event);
            });
        });

        var handleTouch = function(event){
            var touches = event.changedTouches,
                first = touches[0],
                eventTypes = {
                    touchstart: 'mousedown',
                    touchmove: 'mousemove',
                    touchend: 'mouseup'
                },
                type = eventTypes[event.type],
                simulatedEvent
                ;

            if('MouseEvent' in window && typeof window.MouseEvent === 'function') {
                simulatedEvent = window.MouseEvent(type, {
                    'bubbles': true,
                    'cancelable': true,
                    'screenX': first.screenX,
                    'screenY': first.screenY,
                    'clientX': first.clientX,
                    'clientY': first.clientY
                });
            } else {
                simulatedEvent = document.createEvent('MouseEvent');
                simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
            }
            first.target.dispatchEvent(simulatedEvent);
        };
    };
}(jQuery);


//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
 ************************************

 (function( $, window, undefined ) {

 var $document = $( document ),
 // supportTouch = $.mobile.support.touch,
 touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
 touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
 touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

 // setup new event shortcuts
 $.each( ( "touchstart touchmove touchend " +
 "swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

 $.fn[ name ] = function( fn ) {
 return fn ? this.bind( name, fn ) : this.trigger( name );
 };

 // jQuery < 1.8
 if ( $.attrFn ) {
 $.attrFn[ name ] = true;
 }
 });

 function triggerCustomEvent( obj, eventType, event, bubble ) {
 var originalType = event.type;
 event.type = eventType;
 if ( bubble ) {
 $.event.trigger( event, undefined, obj );
 } else {
 $.event.dispatch.call( obj, event );
 }
 event.type = originalType;
 }

 // also handles taphold

 // Also handles swipeleft, swiperight
 $.event.special.swipe = {

 // More than this horizontal displacement, and we will suppress scrolling.
 scrollSupressionThreshold: 30,

 // More time than this, and it isn't a swipe.
 durationThreshold: 1000,

 // Swipe horizontal displacement must be more than this.
 horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

 // Swipe vertical displacement must be less than this.
 verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

 getLocation: function ( event ) {
 var winPageX = window.pageXOffset,
 winPageY = window.pageYOffset,
 x = event.clientX,
 y = event.clientY;

 if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
 event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

 // iOS4 clientX/clientY have the value that should have been
 // in pageX/pageY. While pageX/page/ have the value 0
 x = x - winPageX;
 y = y - winPageY;
 } else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

 // Some Android browsers have totally bogus values for clientX/Y
 // when scrolling/zooming a page. Detectable since clientX/clientY
 // should never be smaller than pageX/pageY minus page scroll
 x = event.pageX - winPageX;
 y = event.pageY - winPageY;
 }

 return {
 x: x,
 y: y
 };
 },

 start: function( event ) {
 var data = event.originalEvent.touches ?
 event.originalEvent.touches[ 0 ] : event,
 location = $.event.special.swipe.getLocation( data );
 return {
 time: ( new Date() ).getTime(),
 coords: [ location.x, location.y ],
 origin: $( event.target )
 };
 },

 stop: function( event ) {
 var data = event.originalEvent.touches ?
 event.originalEvent.touches[ 0 ] : event,
 location = $.event.special.swipe.getLocation( data );
 return {
 time: ( new Date() ).getTime(),
 coords: [ location.x, location.y ]
 };
 },

 handleSwipe: function( start, stop, thisObject, origTarget ) {
 if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
 Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
 Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
 var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

 triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
 triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
 return true;
 }
 return false;

 },

 // This serves as a flag to ensure that at most one swipe event event is
 // in work at any given time
 eventInProgress: false,

 setup: function() {
 var events,
 thisObject = this,
 $this = $( thisObject ),
 context = {};

 // Retrieve the events data for this element and add the swipe context
 events = $.data( this, "mobile-events" );
 if ( !events ) {
 events = { length: 0 };
 $.data( this, "mobile-events", events );
 }
 events.length++;
 events.swipe = context;

 context.start = function( event ) {

 // Bail if we're already working on a swipe event
 if ( $.event.special.swipe.eventInProgress ) {
 return;
 }
 $.event.special.swipe.eventInProgress = true;

 var stop,
 start = $.event.special.swipe.start( event ),
 origTarget = event.target,
 emitted = false;

 context.move = function( event ) {
 if ( !start || event.isDefaultPrevented() ) {
 return;
 }

 stop = $.event.special.swipe.stop( event );
 if ( !emitted ) {
 emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
 if ( emitted ) {

 // Reset the context to make way for the next swipe event
 $.event.special.swipe.eventInProgress = false;
 }
 }
 // prevent scrolling
 if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
 event.preventDefault();
 }
 };

 context.stop = function() {
 emitted = true;

 // Reset the context to make way for the next swipe event
 $.event.special.swipe.eventInProgress = false;
 $document.off( touchMoveEvent, context.move );
 context.move = null;
 };

 $document.on( touchMoveEvent, context.move )
 .one( touchStopEvent, context.stop );
 };
 $this.on( touchStartEvent, context.start );
 },

 teardown: function() {
 var events, context;

 events = $.data( this, "mobile-events" );
 if ( events ) {
 context = events.swipe;
 delete events.swipe;
 events.length--;
 if ( events.length === 0 ) {
 $.removeData( this, "mobile-events" );
 }
 }

 if ( context ) {
 if ( context.start ) {
 $( this ).off( touchStartEvent, context.start );
 }
 if ( context.move ) {
 $document.off( touchMoveEvent, context.move );
 }
 if ( context.stop ) {
 $document.off( touchStopEvent, context.stop );
 }
 }
 }
 };
 $.each({
 swipeleft: "swipe.left",
 swiperight: "swipe.right"
 }, function( event, sourceEvent ) {

 $.event.special[ event ] = {
 setup: function() {
 $( this ).bind( sourceEvent, $.noop );
 },
 teardown: function() {
 $( this ).unbind( sourceEvent );
 }
 };
 });
 })( jQuery, this );
 */

!function(Foundation, $) {
    'use strict';
    // Elements with [data-open] will reveal a plugin that supports it when clicked.
    $(document).on('click.zf.trigger', '[data-open]', function() {
        var id = $(this).data('open');
        $('#' + id).triggerHandler('open.zf.trigger', [$(this)]);
    });

    // Elements with [data-close] will close a plugin that supports it when clicked.
    // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
    $(document).on('click.zf.trigger', '[data-close]', function() {
        var id = $(this).data('close');
        if (id) {
            $('#' + id).triggerHandler('close.zf.trigger', [$(this)]);
        }
        else {
            $(this).trigger('close.zf.trigger');
        }
    });

    // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
    $(document).on('click.zf.trigger', '[data-toggle]', function() {
        var id = $(this).data('toggle');
        $('#' + id).triggerHandler('toggle.zf.trigger', [$(this)]);
    });

    // Elements with [data-closable] will respond to close.zf.trigger events.
    $(document).on('close.zf.trigger', '[data-closable]', function(e){
        e.stopPropagation();
        var animation = $(this).data('closable');

        if(animation !== ''){
            Foundation.Motion.animateOut($(this), animation, function() {
                $(this).trigger('closed.zf');
            });
        }else{
            $(this).fadeOut().trigger('closed.zf');
        }
    });

    var MutationObserver = (function () {
        var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
        for (var i=0; i < prefixes.length; i++) {
            if (prefixes[i] + 'MutationObserver' in window) {
                return window[prefixes[i] + 'MutationObserver'];
            }
        }
        return false;
    }());


    var checkListeners = function(){
        eventsListener();
        resizeListener();
        scrollListener();
        closemeListener();
    };
    /**
     * Fires once after all other scripts have loaded
     * @function
     * @private
     */
    $(window).load(function(){
        checkListeners();
    });

    //******** only fires this function once on load, if there's something to watch ********
    var closemeListener = function(pluginName){
        var yetiBoxes = $('[data-yeti-box]'),
            plugNames = ['dropdown', 'tooltip', 'reveal'];

        if(pluginName){
            if(typeof pluginName === 'string'){
                plugNames.push(pluginName);
            }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
                plugNames.concat(pluginName);
            }else{
                console.error('Plugin names must be strings');
            }
        }
        if(yetiBoxes.length){
            var listeners = plugNames.map(function(name){
                return 'closeme.zf.' + name;
            }).join(' ');

            $(window).off(listeners).on(listeners, function(e, pluginId){
                var plugin = e.namespace.split('.')[0];
                var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

                plugins.each(function(){
                    var _this = $(this);

                    _this.triggerHandler('close.zf.trigger', [_this]);
                });
            });
        }
    };
    var resizeListener = function(debounce){
        var timer,
            $nodes = $('[data-resize]');
        if($nodes.length){
            $(window).off('resize.zf.trigger')
                .on('resize.zf.trigger', function(e) {
                    if (timer) { clearTimeout(timer); }

                    timer = setTimeout(function(){

                        if(!MutationObserver){//fallback for IE 9
                            $nodes.each(function(){
                                $(this).triggerHandler('resizeme.zf.trigger');
                            });
                        }
                        //trigger all listening elements and signal a resize event
                        $nodes.attr('data-events', "resize");
                    }, debounce || 10);//default time to emit resize event
                });
        }
    };
    var scrollListener = function(debounce){
        var timer,
            $nodes = $('[data-scroll]');
        if($nodes.length){
            $(window).off('scroll.zf.trigger')
                .on('scroll.zf.trigger', function(e){
                    if(timer){ clearTimeout(timer); }

                    timer = setTimeout(function(){

                        if(!MutationObserver){//fallback for IE 9
                            $nodes.each(function(){
                                $(this).triggerHandler('scrollme.zf.trigger');
                            });
                        }
                        //trigger all listening elements and signal a scroll event
                        $nodes.attr('data-events', "scroll");
                    }, debounce || 10);//default time to emit scroll event
                });
        }
    };
    // function domMutationObserver(debounce) {
    //   // !!! This is coming soon and needs more work; not active  !!! //
    //   var timer,
    //   nodes = document.querySelectorAll('[data-mutate]');
    //   //
    //   if (nodes.length) {
    //     // var MutationObserver = (function () {
    //     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    //     //   for (var i=0; i < prefixes.length; i++) {
    //     //     if (prefixes[i] + 'MutationObserver' in window) {
    //     //       return window[prefixes[i] + 'MutationObserver'];
    //     //     }
    //     //   }
    //     //   return false;
    //     // }());
    //
    //
    //     //for the body, we need to listen for all changes effecting the style and class attributes
    //     var bodyObserver = new MutationObserver(bodyMutation);
    //     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
    //
    //
    //     //body callback
    //     function bodyMutation(mutate) {
    //       //trigger all listening elements and signal a mutation event
    //       if (timer) { clearTimeout(timer); }
    //
    //       timer = setTimeout(function() {
    //         bodyObserver.disconnect();
    //         $('[data-mutate]').attr('data-events',"mutate");
    //       }, debounce || 150);
    //     }
    //   }
    // }
    var eventsListener = function() {
        if(!MutationObserver){ return false; }
        var nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

        //element callback
        var listeningElementsMutation = function(mutationRecordsList) {
            var $target = $(mutationRecordsList[0].target);
            //trigger the event handler for the element depending on type
            switch ($target.attr("data-events")) {

                case "resize" :
                    $target.triggerHandler('resizeme.zf.trigger', [$target]);
                    break;

                case "scroll" :
                    $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
                    break;

                // case "mutate" :
                // console.log('mutate', $target);
                // $target.triggerHandler('mutate.zf.trigger');
                //
                // //make sure we don't get stuck in an infinite loop from sloppy codeing
                // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
                //   domMutationObserver();
                // }
                // break;

                default :
                    return false;
                //nothing
            }
        }

        if(nodes.length){
            //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
            for (var i = 0; i <= nodes.length-1; i++) {
                var elementObserver = new MutationObserver(listeningElementsMutation);
                elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree:false, attributeFilter:["data-events"]});
            }
        }
    };
    // ------------------------------------

    // [PH]
    // Foundation.CheckWatchers = checkWatchers;
    Foundation.IHearYou = checkListeners;
    // Foundation.ISeeYou = scrollListener;
    // Foundation.IFeelYou = closemeListener;

}(window.Foundation, window.jQuery);

!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Abide.
     * @class
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Abide(element, options) {
        this.$element = element;
        this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Abide');
    }

    /**
     * Default settings for plugin
     */
    Abide.defaults = {
        /**
         * The default event to validate inputs. Checkboxes and radios validate immediately.
         * Remove or change this value for manual validation.
         * @option
         * @example 'fieldChange'
         */
        validateOn: 'fieldChange',
        /**
         * Class to be applied to input labels on failed validation.
         * @option
         * @example 'is-invalid-label'
         */
        labelErrorClass: 'is-invalid-label',
        /**
         * Class to be applied to inputs on failed validation.
         * @option
         * @example 'is-invalid-input'
         */
        inputErrorClass: 'is-invalid-input',
        /**
         * Class selector to use to target Form Errors for show/hide.
         * @option
         * @example '.form-error'
         */
        formErrorSelector: '.form-error',
        /**
         * Class added to Form Errors on failed validation.
         * @option
         * @example 'is-visible'
         */
        formErrorClass: 'is-visible',
        /**
         * Set to true to validate text inputs on any value change.
         * @option
         * @example false
         */
        liveValidate: false,

        patterns: {
            alpha : /^[a-zA-Z]+$/,
            alpha_numeric : /^[a-zA-Z0-9]+$/,
            integer : /^[-+]?\d+$/,
            number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

            // amex, visa, diners
            card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv : /^([0-9]){3,4}$/,

            // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
            email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

            url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            // abc.de
            domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

            datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            // YYYY-MM-DD
            date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            // HH:MM:SS
            time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            // MM/DD/YYYY
            month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            // DD/MM/YYYY
            day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

            // #FFF or #FFFFFF
            color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        /**
         * Optional validation functions to be used. `equalTo` being the only default included function.
         * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
         * el : The jQuery element to validate.
         * required : Boolean value of the required attribute be present or not.
         * parent : The direct parent of the input.
         * @option
         */
        validators: {
            equalTo: function (el, required, parent) {
                return $('#' + el.attr('data-equalto')).val() === el.val();
            }
        }
    };


    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */
    Abide.prototype._init = function(){
        this.$inputs = this.$element.find('input, textarea, select').not('[data-abide-ignore]');

        this._events();
    };

    /**
     * Initializes events for Abide.
     * @private
     */
    Abide.prototype._events = function() {
        var _this = this;

        this.$element.off('.abide')
            .on('reset.zf.abide', function(e){
                _this.resetForm();
            })
            .on('submit.zf.abide', function(e){
                return _this.validateForm();
            });

        if(this.options.validateOn === 'fieldChange'){
            this.$inputs.off('change.zf.abide')
                .on('change.zf.abide', function(e){
                    _this.validateInput($(this));
                });
        }

        if(this.options.liveValidate){
            this.$inputs.off('input.zf.abide')
                .on('input.zf.abide', function(e){
                    _this.validateInput($(this));
                });
        }
    },
    /**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */
        Abide.prototype._reflow = function() {
            this._init();
        };
    /**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
    Abide.prototype.requiredCheck = function($el) {
        if(!$el.attr('required')) return true;
        var isGood = true;
        switch ($el[0].type) {

            case 'checkbox':
            case 'radio':
                isGood = $el[0].checked;
                break;

            case 'select':
            case 'select-one':
            case 'select-multiple':
                var opt = $el.find('option:selected');
                if(!opt.length || !opt.val()) isGood = false;
                break;

            default:
                if(!$el.val() || !$el.val().length) isGood = false;
        }
        return isGood;
    };
    /**
     * Based on $el, get the first element with selector in this order:
     * 1. The element's direct sibling('s).
     * 3. The element's parent's children.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */
    Abide.prototype.findFormError = function($el){
        var $error = $el.siblings(this.options.formErrorSelector);
        if(!$error.length){
            $error = $el.parent().find(this.options.formErrorSelector);
        }
        return $error;
    };
    /**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */
    Abide.prototype.findLabel = function($el) {
        var $label = this.$element.find('label[for="' + $el[0].id + '"]');
        if(!$label.length){
            return $el.closest('label');
        }
        return $label;
    };
    /**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */
    Abide.prototype.addErrorClasses = function($el){
        var $label = this.findLabel($el),
            $formError = this.findFormError($el);

        if($label.length){
            $label.addClass(this.options.labelErrorClass);
        }
        if($formError.length){
            $formError.addClass(this.options.formErrorClass);
        }
        $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
    };
    /**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */
    Abide.prototype.removeErrorClasses = function($el){
        var $label = this.findLabel($el),
            $formError = this.findFormError($el);

        if($label.length){
            $label.removeClass(this.options.labelErrorClass);
        }
        if($formError.length){
            $formError.removeClass(this.options.formErrorClass);
        }
        $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
    };
    /**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */
    Abide.prototype.validateInput = function($el){
        var clearRequire = this.requiredCheck($el),
            validated = false,
            customValidator = true,
            validator = $el.attr('data-validator'),
            equalTo = true;

        switch ($el[0].type) {

            case 'radio':
                validated = this.validateRadio($el.attr('name'));
                break;

            case 'checkbox':
                validated = clearRequire;
                break;

            case 'select':
            case 'select-one':
            case 'select-multiple':
                validated = clearRequire;
                break;

            default:
                validated = this.validateText($el);
        }

        if(validator){ customValidator = this.matchValidation($el, validator, $el.attr('required')); }
        if($el.attr('data-equalto')){ equalTo = this.options.validators.equalTo($el); }

        var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1,
            message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

        this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);

        /**
         * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
         * Trigger includes the DOM element of the input.
         * @event Abide#valid
         * @event Abide#invalid
         */
        $el.trigger(message, [$el]);

        return goodToGo;
    };
    /**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */
    Abide.prototype.validateForm = function(){
        var acc = [],
            _this = this;

        this.$inputs.each(function(){
            acc.push(_this.validateInput($(this)));
        });

        var noError = acc.indexOf(false) === -1;

        this.$element.find('[data-abide-error]').css('display', (noError ? 'none' : 'block'));
        /**
         * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
         * Trigger includes the element of the form.
         * @event Abide#formvalid
         * @event Abide#forminvalid
         */
        this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);

        return noError;
    };
    /**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */
    Abide.prototype.validateText = function($el, pattern){
        // pattern = pattern ? pattern : $el.attr('pattern') ? $el.attr('pattern') : $el.attr('type');
        pattern = (pattern || $el.attr('pattern') || $el.attr('type'));
        var inputText = $el.val();

        return inputText.length ?//if text, check if the pattern exists, if so, test it, if no text or no pattern, return true.
            this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) :
                pattern && pattern !== $el.attr('type') ? new RegExp(pattern).test(inputText) : true : true;
    };  /**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */
    Abide.prototype.validateRadio = function(groupName){
        var $group = this.$element.find(':radio[name="' + groupName + '"]'),
            counter = [],
            _this = this;

        $group.each(function(){
            var rdio = $(this),
                clear = _this.requiredCheck(rdio);
            counter.push(clear);
            if(clear) _this.removeErrorClasses(rdio);
        });

        return counter.indexOf(false) === -1;
    };
    /**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */
    Abide.prototype.matchValidation = function($el, validators, required){
        var _this = this;
        required = required ? true : false;
        var clear = validators.split(' ').map(function(v){
            return _this.options.validators[v]($el, required, $el.parent());
        });
        return clear.indexOf(false) === -1;
    };
    /**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */
    Abide.prototype.resetForm = function() {
        var $form = this.$element,
            opts = this.options;

        $('.' + opts.labelErrorClass, $form).not('small').removeClass(opts.labelErrorClass);
        $('.' + opts.inputErrorClass, $form).not('small').removeClass(opts.inputErrorClass);
        $(opts.formErrorSelector + '.' + opts.formErrorClass).removeClass(opts.formErrorClass);
        $form.find('[data-abide-error]').css('display', 'none');
        $(':input', $form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr('data-invalid');
        /**
         * Fires when the form has been reset.
         * @event Abide#formreset
         */
        $form.trigger('formreset.zf.abide', [$form]);
    };
    /**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */
    Abide.prototype.destroy = function(){
        var _this = this;
        this.$element.off('.abide')
            .find('[data-abide-error]').css('display', 'none');
        this.$inputs.off('.abide')
            .each(function(){
                _this.removeErrorClasses($(this));
            });

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Abide, 'Abide');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Abide;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Abide;
        });

}(Foundation, jQuery);

/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 */
!function($, Foundation) {
    'use strict';

    /**
     * Creates a new instance of an accordion.
     * @class
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    function Accordion(element, options){
        this.$element = element;
        this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Accordion');
        Foundation.Keyboard.register('Accordion', {
            'ENTER': 'toggle',
            'SPACE': 'toggle',
            'ARROW_DOWN': 'next',
            'ARROW_UP': 'previous'
        });
    }

    Accordion.defaults = {
        /**
         * Amount of time to animate the opening of an accordion pane.
         * @option
         * @example 250
         */
        slideSpeed: 250,
        /**
         * Allow the accordion to have multiple open panes.
         * @option
         * @example false
         */
        multiExpand: false,
        /**
         * Allow the accordion to close all panes.
         * @option
         * @example false
         */
        allowAllClosed: false
    };

    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */
    Accordion.prototype._init = function() {
        this.$element.attr('role', 'tablist');
        this.$tabs = this.$element.children('li');
        if (this.$tabs.length === 0) {
            this.$tabs = this.$element.children('[data-accordion-item]');
        }
        this.$tabs.each(function(idx, el){

            var $el = $(el),
                $content = $el.find('[data-tab-content]'),
                id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
                linkId = el.id || id + '-label';

            $el.find('a:first').attr({
                'aria-controls': id,
                'role': 'tab',
                'id': linkId,
                'aria-expanded': false,
                'aria-selected': false
            });
            $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
        });
        var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
        if($initActive.length){
            this.down($initActive, true);
        }
        this._events();
    };

    /**
     * Adds event handlers for items within the accordion.
     * @private
     */
    Accordion.prototype._events = function() {
        var _this = this;

        this.$tabs.each(function(){
            var $elem = $(this);
            var $tabContent = $elem.children('[data-tab-content]');
            if ($tabContent.length) {
                $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
                    .on('click.zf.accordion', function(e){
                        // $(this).children('a').on('click.zf.accordion', function(e) {
                        e.preventDefault();
                        if ($elem.hasClass('is-active')) {
                            if(_this.options.allowAllClosed || $elem.siblings().hasClass('is-active')){
                                _this.up($tabContent);
                            }
                        }
                        else {
                            _this.down($tabContent);
                        }
                    }).on('keydown.zf.accordion', function(e){
                        Foundation.Keyboard.handleKey(e, 'Accordion', {
                            toggle: function() {
                                _this.toggle($tabContent);
                            },
                            next: function() {
                                $elem.next().find('a').focus().trigger('click.zf.accordion');
                            },
                            previous: function() {
                                $elem.prev().find('a').focus().trigger('click.zf.accordion');
                            },
                            handled: function() {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        });
                    });
            }
        });
    };
    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle.
     * @function
     */
    Accordion.prototype.toggle = function($target){
        if($target.parent().hasClass('is-active')){
            if(this.options.allowAllClosed || $target.parent().siblings().hasClass('is-active')){
                this.up($target);
            }else{ return; }
        }else{
            this.down($target);
        }
    };
    /**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open.
     * @param {Boolean} firstTime - flag to determine if reflow should happen.
     * @fires Accordion#down
     * @function
     */
    Accordion.prototype.down = function($target, firstTime) {
        var _this = this;
        if(!this.options.multiExpand && !firstTime){
            var $currentActive = this.$element.find('.is-active').children('[data-tab-content]');
            if($currentActive.length){
                this.up($currentActive);
            }
        }

        $target
            .attr('aria-hidden', false)
            .parent('[data-tab-content]')
            .addBack()
            .parent().addClass('is-active');

        // Foundation.Move(_this.options.slideSpeed, $target, function(){
        $target.slideDown(_this.options.slideSpeed, function () {
            /**
             * Fires when the tab is done opening.
             * @event Accordion#down
             */
            _this.$element.trigger('down.zf.accordion', [$target]);
        });
        // });

        // if(!firstTime){
        //   Foundation._reflow(this.$element.attr('data-accordion'));
        // }
        $('#' + $target.attr('aria-labelledby')).attr({
            'aria-expanded': true,
            'aria-selected': true
        });
    };

    /**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close.
     * @fires Accordion#up
     * @function
     */
    Accordion.prototype.up = function($target) {
        var $aunts = $target.parent().siblings(),
            _this = this;
        var canClose = this.options.multiExpand ? $aunts.hasClass('is-active') : $target.parent().hasClass('is-active');

        if(!this.options.allowAllClosed && !canClose){
            return;
        }

        // Foundation.Move(this.options.slideSpeed, $target, function(){
        $target.slideUp(_this.options.slideSpeed, function () {
            /**
             * Fires when the tab is done collapsing up.
             * @event Accordion#up
             */
            _this.$element.trigger('up.zf.accordion', [$target]);
        });
        // });

        $target.attr('aria-hidden', true)
            .parent().removeClass('is-active');

        $('#' + $target.attr('aria-labelledby')).attr({
            'aria-expanded': false,
            'aria-selected': false
        });
    };

    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */
    Accordion.prototype.destroy = function() {
        this.$element.find('[data-tab-content]').slideUp(0).css('display', '');
        this.$element.find('a').off('.zf.accordion');

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Accordion, 'Accordion');
}(jQuery, window.Foundation);

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */
!function($) {
    'use strict';

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function AccordionMenu(element, options) {
        this.$element = element;
        this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);

        Foundation.Nest.Feather(this.$element, 'accordion');

        this._init();

        Foundation.registerPlugin(this, 'AccordionMenu');
        Foundation.Keyboard.register('AccordionMenu', {
            'ENTER': 'toggle',
            'SPACE': 'toggle',
            'ARROW_RIGHT': 'open',
            'ARROW_UP': 'up',
            'ARROW_DOWN': 'down',
            'ARROW_LEFT': 'close',
            'ESCAPE': 'closeAll',
            'TAB': 'down',
            'SHIFT_TAB': 'up'
        });
    }

    AccordionMenu.defaults = {
        /**
         * Amount of time to animate the opening of a submenu in ms.
         * @option
         * @example 250
         */
        slideSpeed: 250,
        /**
         * Allow the menu to have multiple open panes.
         * @option
         * @example true
         */
        multiOpen: true
    };

    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */
    AccordionMenu.prototype._init = function() {
        this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
        this.$element.attr({
            'role': 'tablist',
            'aria-multiselectable': this.options.multiOpen
        });

        this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
        this.$menuLinks.each(function(){
            var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
                $elem = $(this),
                $sub = $elem.children('[data-submenu]'),
                subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
                isActive = $sub.hasClass('is-active');
            $elem.attr({
                'aria-controls': subId,
                'aria-expanded': isActive,
                'role': 'tab',
                'id': linkId
            });
            $sub.attr({
                'aria-labelledby': linkId,
                'aria-hidden': !isActive,
                'role': 'tabpanel',
                'id': subId
            });
        });
        var initPanes = this.$element.find('.is-active');
        if(initPanes.length){
            var _this = this;
            initPanes.each(function(){
                _this.down($(this));
            });
        }
        this._events();
    };

    /**
     * Adds event handlers for items within the menu.
     * @private
     */
    AccordionMenu.prototype._events = function() {
        var _this = this;

        this.$element.find('li').each(function() {
            var $submenu = $(this).children('[data-submenu]');

            if ($submenu.length) {
                $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
                    e.preventDefault();

                    _this.toggle($submenu);
                });
            }
        }).on('keydown.zf.accordionmenu', function(e){
            var $element = $(this),
                $elements = $element.parent('ul').children('li'),
                $prevElement,
                $nextElement,
                $target = $element.children('[data-submenu]');

            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i-1));
                    $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));

                    if ($(this).children('[data-submenu]:visible').length) { // has open sub menu
                        $nextElement = $element.find('li:first-child');
                    }
                    if ($(this).is(':first-child')) { // is first element of sub menu
                        $prevElement = $element.parents('li').first();
                    } else if ($prevElement.children('[data-submenu]:visible').length) { // if previous element has open sub menu
                        $prevElement = $prevElement.find('li:last-child');
                    }
                    if ($(this).is(':last-child')) { // is last element of sub menu
                        $nextElement = $element.parents('li').first().next('li');
                    }

                    return;
                }
            });
            Foundation.Keyboard.handleKey(e, 'AccordionMenu', {
                open: function() {
                    if ($target.is(':hidden')) {
                        _this.down($target);
                        $target.find('li').first().focus();
                    }
                },
                close: function() {
                    if ($target.length && !$target.is(':hidden')) { // close active sub of this item
                        _this.up($target);
                    } else if ($element.parent('[data-submenu]').length) { // close currently open sub
                        _this.up($element.parent('[data-submenu]'));
                        $element.parents('li').first().focus();
                    }
                },
                up: function() {
                    $prevElement.focus();
                },
                down: function() {
                    $nextElement.focus();
                },
                toggle: function() {
                    if ($element.children('[data-submenu]').length) {
                        _this.toggle($element.children('[data-submenu]'));
                    }
                },
                closeAll: function() {
                    _this.hideAll();
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
        });//.attr('tabindex', 0);
    };
    /**
     * Closes all panes of the menu.
     * @function
     */
    AccordionMenu.prototype.hideAll = function(){
        this.$element.find('[data-submenu]').slideUp(this.options.slideSpeed);
    };
    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */
    AccordionMenu.prototype.toggle = function($target){
        if(!$target.is(':animated')) {
            if (!$target.is(':hidden')) {
                this.up($target);
            }
            else {
                this.down($target);
            }
        }
    };
    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */
    AccordionMenu.prototype.down = function($target) {
        var _this = this;

        if(!this.options.multiOpen){
            this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
        }

        $target.addClass('is-active').attr({'aria-hidden': false})
            .parent('.is-accordion-submenu-parent').attr({'aria-expanded': true});

        Foundation.Move(this.options.slideSpeed, $target, function(){
            $target.slideDown(_this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done opening.
                 * @event AccordionMenu#down
                 */
                _this.$element.trigger('down.zf.accordionMenu', [$target]);
            });
        });
    };

    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */
    AccordionMenu.prototype.up = function($target) {
        var _this = this;
        Foundation.Move(this.options.slideSpeed, $target, function(){
            $target.slideUp(_this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done collapsing up.
                 * @event AccordionMenu#up
                 */
                _this.$element.trigger('up.zf.accordionMenu', [$target]);
            });
        });

        var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

        $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
    };

    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */
    AccordionMenu.prototype.destroy = function(){
        this.$element.find('[data-submenu]').slideDown(0).css('display', '');
        this.$element.find('a').off('click.zf.accordionMenu');

        Foundation.Nest.Burn(this.$element, 'accordion');
        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(AccordionMenu, 'AccordionMenu');
}(jQuery, window.Foundation);

/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */
!function($, Foundation){
    'use strict';

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Drilldown(element, options){
        this.$element = element;
        this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);

        Foundation.Nest.Feather(this.$element, 'drilldown');

        this._init();

        Foundation.registerPlugin(this, 'Drilldown');
        Foundation.Keyboard.register('Drilldown', {
            'ENTER': 'open',
            'SPACE': 'open',
            'ARROW_RIGHT': 'next',
            'ARROW_UP': 'up',
            'ARROW_DOWN': 'down',
            'ARROW_LEFT': 'previous',
            'ESCAPE': 'close',
            'TAB': 'down',
            'SHIFT_TAB': 'up'
        });
    }
    Drilldown.defaults = {
        /**
         * Markup used for JS generated back button. Prepended to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
         * @option
         * @example '<\li><\a>Back<\/a><\/li>'
         */
        backButton: '<li class="js-drilldown-back"><a>Back</a></li>',
        /**
         * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
         * @option
         * @example '<\div class="is-drilldown"><\/div>'
         */
        wrapper: '<div></div>',
        /**
         * Allow the menu to return to root list on body click.
         * @option
         * @example false
         */
        closeOnClick: false
        // holdOpen: false
    };
    /**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */
    Drilldown.prototype._init = function(){
        this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent');
        this.$submenus = this.$submenuAnchors.children('[data-submenu]');
        this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'menuitem');

        this._prepareMenu();

        this._keyboardEvents();
    };
    /**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */
    Drilldown.prototype._prepareMenu = function(){
        var _this = this;
        // if(!this.options.holdOpen){
        //   this._menuLinkEvents();
        // }
        this.$submenuAnchors.each(function(){
            var $sub = $(this);
            var $link = $sub.find('a:first');
            $link.data('savedHref', $link.attr('href')).removeAttr('href');
            $sub.children('[data-submenu]')
                .attr({
                    'aria-hidden': true,
                    'tabindex': 0,
                    'role': 'menu'
                });
            _this._events($sub);
        });
        this.$submenus.each(function(){
            var $menu = $(this),
                $back = $menu.find('.js-drilldown-back');
            if(!$back.length){
                $menu.prepend(_this.options.backButton);
            }
            _this._back($menu);
        });
        if(!this.$element.parent().hasClass('is-drilldown')){
            this.$wrapper = $(this.options.wrapper).addClass('is-drilldown').css(this._getMaxDims());
            this.$element.wrap(this.$wrapper);
        }

    };
    /**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */
    Drilldown.prototype._events = function($elem){
        var _this = this;

        $elem.off('click.zf.drilldown')
            .on('click.zf.drilldown', function(e){
                if($(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')){
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }

                // if(e.target !== e.currentTarget.firstElementChild){
                //   return false;
                // }
                _this._show($elem);

                if(_this.options.closeOnClick){
                    var $body = $('body').not(_this.$wrapper);
                    $body.off('.zf.drilldown').on('click.zf.drilldown', function(e){
                        e.preventDefault();
                        _this._hideAll();
                        $body.off('.zf.drilldown');
                    });
                }
            });
    };
    /**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */
    Drilldown.prototype._keyboardEvents = function() {
        var _this = this;
        this.$menuItems.add(this.$element.find('.js-drilldown-back')).on('keydown.zf.drilldown', function(e){
            var $element = $(this),
                $elements = $element.parent('ul').children('li'),
                $prevElement,
                $nextElement;

            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i-1));
                    $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
                    return;
                }
            });
            Foundation.Keyboard.handleKey(e, 'Drilldown', {
                next: function() {
                    if ($element.is(_this.$submenuAnchors)) {
                        _this._show($element);
                        $element.on(Foundation.transitionend($element), function(){
                            $element.find('ul li').filter(_this.$menuItems).first().focus();
                        });
                    }
                },
                previous: function() {
                    _this._hide($element.parent('ul'));
                    $element.parent('ul').on(Foundation.transitionend($element), function(){
                        setTimeout(function() {
                            $element.parent('ul').parent('li').focus();
                        }, 1);
                    });
                },
                up: function() {
                    $prevElement.focus();
                },
                down: function() {
                    $nextElement.focus();
                },
                close: function() {
                    _this._back();
                    //_this.$menuItems.first().focus(); // focus to first element
                },
                open: function() {
                    if (!$element.is(_this.$menuItems)) { // not menu item means back button
                        _this._hide($element.parent('ul'));
                        setTimeout(function(){$element.parent('ul').parent('li').focus();}, 1);
                    } else if ($element.is(_this.$submenuAnchors)) {
                        _this._show($element);
                        setTimeout(function(){$element.find('ul li').filter(_this.$menuItems).first().focus();}, 1);
                    }
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
        }); // end keyboardAccess
    };

    /**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */
    Drilldown.prototype._hideAll = function(){
        var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
        $elem.one(Foundation.transitionend($elem), function(e){
            $elem.removeClass('is-active is-closing');
        });
        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */
        this.$element.trigger('closed.zf.drilldown');
    };
    /**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */
    Drilldown.prototype._back = function($elem){
        var _this = this;
        $elem.off('click.zf.drilldown');
        $elem.children('.js-drilldown-back')
            .on('click.zf.drilldown', function(e){
                e.stopImmediatePropagation();
                // console.log('mouseup on back');
                _this._hide($elem);
            });
    };
    /**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */
    Drilldown.prototype._menuLinkEvents = function(){
        var _this = this;
        this.$menuItems.not('.is-drilldown-submenu-parent')
            .off('click.zf.drilldown')
            .on('click.zf.drilldown', function(e){
                // e.stopImmediatePropagation();
                setTimeout(function(){
                    _this._hideAll();
                }, 0);
            });
    };
    /**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open.
     */
    Drilldown.prototype._show = function($elem){
        $elem.children('[data-submenu]').addClass('is-active');

        this.$element.trigger('open.zf.drilldown', [$elem]);
    };
    /**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide.
     */
    Drilldown.prototype._hide = function($elem){
        var _this = this;
        $elem.addClass('is-closing')
            .one(Foundation.transitionend($elem), function(){
                $elem.removeClass('is-active is-closing');
            });
        /**
         * Fires when the submenu is has closed.
         * @event Drilldown#hide
         */
        $elem.trigger('hide.zf.drilldown', [$elem]);

    };
    /**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */
    Drilldown.prototype._getMaxDims = function(){
        var max = 0, result = {};
        this.$submenus.add(this.$element).each(function(){
            var numOfElems = $(this).children('li').length;
            max = numOfElems > max ? numOfElems : max;
        });

        result.height = max * this.$menuItems[0].getBoundingClientRect().height + 'px';
        result.width = this.$element[0].getBoundingClientRect().width + 'px';

        return result;
    };
    /**
     * Destroys the Drilldown Menu
     * @function
     */
    Drilldown.prototype.destroy = function(){
        this._hideAll();
        Foundation.Nest.Burn(this.$element, 'drilldown');
        this.$element.unwrap()
            .find('.js-drilldown-back').remove()
            .end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu')
            .end().find('[data-submenu]').removeAttr('aria-hidden tabindex role')
            .off('.zf.drilldown').end().off('zf.drilldown');
        this.$element.find('a').each(function(){
            var $link = $(this);
            if($link.data('savedHref')){
                $link.attr('href', $link.data('savedHref')).removeData('savedHref');
            }else{ return; }
        });
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Drilldown, 'Drilldown');
}(jQuery, window.Foundation);

/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */
!function($, Foundation){
    'use strict';
    /**
     * Creates a new instance of a dropdown.
     * @class
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Dropdown(element, options){
        this.$element = element;
        this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
        this._init();

        Foundation.registerPlugin(this, 'Dropdown');
        Foundation.Keyboard.register('Dropdown', {
            'ENTER': 'open',
            'SPACE': 'open',
            'ESCAPE': 'close',
            'TAB': 'tab_forward',
            'SHIFT_TAB': 'tab_backward'
        });
    }

    Dropdown.defaults = {
        /**
         * Amount of time to delay opening a submenu on hover event.
         * @option
         * @example 250
         */
        hoverDelay: 250,
        /**
         * Allow submenus to open on hover events
         * @option
         * @example false
         */
        hover: false,
        /**
         * Don't close dropdown when hovering over dropdown pane
         * @option
         * @example true
         */
        hoverPane: false,
        /**
         * Number of pixels between the dropdown pane and the triggering element on open.
         * @option
         * @example 1
         */
        vOffset: 1,
        /**
         * Number of pixels between the dropdown pane and the triggering element on open.
         * @option
         * @example 1
         */
        hOffset: 1,
        /**
         * Class applied to adjust open position. JS will test and fill this in.
         * @option
         * @example 'top'
         */
        positionClass: '',
        /**
         * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
         * @option
         * @example false
         */
        trapFocus: false,
        /**
         * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
         * @option
         * @example true
         */
        autoFocus: false,
        /**
         * Allows a click on the body to close the dropdown.
         * @option
         * @example false
         */
        closeOnClick: false
    };
    /**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */
    Dropdown.prototype._init = function(){
        var $id = this.$element.attr('id');

        this.$anchor = $('[data-toggle="' + $id + '"]') || $('[data-open="' + $id + '"]');
        this.$anchor.attr({
            'aria-controls': $id,
            'data-is-focus': false,
            'data-yeti-box': $id,
            'aria-haspopup': true,
            'aria-expanded': false
            // 'data-resize': $id
        });

        this.options.positionClass = this.getPositionClass();
        this.counter = 4;
        this.usedPositions = [];
        this.$element.attr({
            'aria-hidden': 'true',
            'data-yeti-box': $id,
            'data-resize': $id,
            'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
        });
        this._events();
    };
    /**
     * Helper function to determine current orientation of dropdown pane.
     * @function
     * @returns {String} position - string value of a position class.
     */
    Dropdown.prototype.getPositionClass = function(){
        var position = this.$element[0].className.match(/\b(top|left|right)\b/g);
        position = position ? position[0] : '';
        return position;
    };
    /**
     * Adjusts the dropdown panes orientation by adding/removing positioning classes.
     * @function
     * @private
     * @param {String} position - position class to remove.
     */
    Dropdown.prototype._reposition = function(position){
        this.usedPositions.push(position ? position : 'bottom');
        //default, try switching to opposite side
        if(!position && (this.usedPositions.indexOf('top') < 0)){
            this.$element.addClass('top');
        }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
            this.$element.removeClass(position);
        }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
            this.$element.removeClass(position)
                .addClass('right');
        }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
            this.$element.removeClass(position)
                .addClass('left');
        }

        //if default change didn't work, try bottom or left first
        else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
            this.$element.addClass('left');
        }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
            this.$element.removeClass(position)
                .addClass('left');
        }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
            this.$element.removeClass(position);
        }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
            this.$element.removeClass(position);
        }
        //if nothing cleared, set to bottom
        else{
            this.$element.removeClass(position);
        }
        this.classChanged = true;
        this.counter--;
    };
    /**
     * Sets the position and orientation of the dropdown pane, checks for collisions.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */
    Dropdown.prototype._setPosition = function(){
        if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
        var position = this.getPositionClass(),
            $eleDims = Foundation.Box.GetDimensions(this.$element),
            $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
            _this = this,
            direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
            param = (direction === 'top') ? 'height' : 'width',
            offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;

        if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))){
            this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
                'width': $eleDims.windowDims.width - (this.options.hOffset * 2),
                'height': 'auto'
            });
            this.classChanged = true;
            return false;
        }

        this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));

        while(!Foundation.Box.ImNotTouchingYou(this.$element) && this.counter){
            this._reposition(position);
            this._setPosition();
        }
    };
    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */
    Dropdown.prototype._events = function(){
        var _this = this;
        this.$element.on({
            'open.zf.trigger': this.open.bind(this),
            'close.zf.trigger': this.close.bind(this),
            'toggle.zf.trigger': this.toggle.bind(this),
            'resizeme.zf.trigger': this._setPosition.bind(this)
        });

        if(this.options.hover){
            this.$anchor.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
                .on('mouseenter.zf.dropdown', function(){
                    clearTimeout(_this.timeout);
                    _this.timeout = setTimeout(function(){
                        _this.open();
                        _this.$anchor.data('hover', true);
                    }, _this.options.hoverDelay);
                }).on('mouseleave.zf.dropdown', function(){
                    clearTimeout(_this.timeout);
                    _this.timeout = setTimeout(function(){
                        _this.close();
                        _this.$anchor.data('hover', false);
                    }, _this.options.hoverDelay);
                });
            if(this.options.hoverPane){
                this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
                    .on('mouseenter.zf.dropdown', function(){
                        clearTimeout(_this.timeout);
                    }).on('mouseleave.zf.dropdown', function(){
                        clearTimeout(_this.timeout);
                        _this.timeout = setTimeout(function(){
                            _this.close();
                            _this.$anchor.data('hover', false);
                        }, _this.options.hoverDelay);
                    });
            }
        }
        this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {

            var $target = $(this),
                visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);

            Foundation.Keyboard.handleKey(e, 'Dropdown', {
                tab_forward: function() {
                    if (_this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
                        if (_this.options.trapFocus) { // if focus shall be trapped
                            visibleFocusableElements.eq(0).focus();
                            e.preventDefault();
                        } else { // if focus is not trapped, close dropdown on focus out
                            _this.close();
                        }
                    }
                },
                tab_backward: function() {
                    if (_this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
                        if (_this.options.trapFocus) { // if focus shall be trapped
                            visibleFocusableElements.eq(-1).focus();
                            e.preventDefault();
                        } else { // if focus is not trapped, close dropdown on focus out
                            _this.close();
                        }
                    }
                },
                open: function() {
                    if ($target.is(_this.$anchor)) {
                        _this.open();
                        _this.$element.attr('tabindex', -1).focus();
                        e.preventDefault();
                    }
                },
                close: function() {
                    _this.close();
                    _this.$anchor.focus();
                }
            });
        });
    };
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */
    Dropdown.prototype._addBodyHandler = function(){
        var $body = $(document.body).not(this.$element),
            _this = this;
        $body.off('click.zf.dropdown')
            .on('click.zf.dropdown', function(e){
                if(_this.$anchor.is(e.target) || _this.$anchor.find(e.target).length) {
                    return;
                }
                if(_this.$element.find(e.target).length) {
                    return;
                }
                _this.close();
                $body.off('click.zf.dropdown');
            });
    };
    /**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */
    Dropdown.prototype.open = function(){
        // var _this = this;
        /**
         * Fires to close other open dropdowns
         * @event Dropdown#closeme
         */
        this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
        this.$anchor.addClass('hover')
            .attr({'aria-expanded': true});
        // this.$element/*.show()*/;
        this._setPosition();
        this.$element.addClass('is-open')
            .attr({'aria-hidden': false});

        if(this.options.autoFocus){
            var $focusable = Foundation.Keyboard.findFocusable(this.$element);
            if($focusable.length){
                $focusable.eq(0).focus();
            }
        }

        if(this.options.closeOnClick){ this._addBodyHandler(); }

        /**
         * Fires once the dropdown is visible.
         * @event Dropdown#show
         */
        this.$element.trigger('show.zf.dropdown', [this.$element]);
        //why does this not work correctly for this plugin?
        // Foundation.reflow(this.$element, 'dropdown');
        // Foundation._reflow(this.$element.attr('data-dropdown'));
    };

    /**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */
    Dropdown.prototype.close = function(){
        if(!this.$element.hasClass('is-open')){
            return false;
        }
        this.$element.removeClass('is-open')
            .attr({'aria-hidden': true});

        this.$anchor.removeClass('hover')
            .attr('aria-expanded', false);

        if(this.classChanged){
            var curPositionClass = this.getPositionClass();
            if(curPositionClass){
                this.$element.removeClass(curPositionClass);
            }
            this.$element.addClass(this.options.positionClass)
                /*.hide()*/.css({height: '', width: ''});
            this.classChanged = false;
            this.counter = 4;
            this.usedPositions.length = 0;
        }
        this.$element.trigger('hide.zf.dropdown', [this.$element]);
        // Foundation.reflow(this.$element, 'dropdown');
    };
    /**
     * Toggles the dropdown pane's visibility.
     * @function
     */
    Dropdown.prototype.toggle = function(){
        if(this.$element.hasClass('is-open')){
            if(this.$anchor.data('hover')) return;
            this.close();
        }else{
            this.open();
        }
    };
    /**
     * Destroys the dropdown.
     * @function
     */
    Dropdown.prototype.destroy = function(){
        this.$element.off('.zf.trigger').hide();
        this.$anchor.off('.zf.dropdown');

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Dropdown, 'Dropdown');
}(jQuery, window.Foundation);

/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */
!function($, Foundation){
    'use strict';

    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function DropdownMenu(element, options){
        this.$element = element;
        this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);

        Foundation.Nest.Feather(this.$element, 'dropdown');
        this._init();

        Foundation.registerPlugin(this, 'DropdownMenu');
        Foundation.Keyboard.register('DropdownMenu', {
            'ENTER': 'open',
            'SPACE': 'open',
            'ARROW_RIGHT': 'next',
            'ARROW_UP': 'up',
            'ARROW_DOWN': 'down',
            'ARROW_LEFT': 'previous',
            'ESCAPE': 'close'
        });
    }

    /**
     * Default settings for plugin
     */
    DropdownMenu.defaults = {
        /**
         * Disallows hover events from opening submenus
         * @option
         * @example false
         */
        disableHover: false,
        /**
         * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
         * @option
         * @example true
         */
        autoclose: true,
        /**
         * Amount of time to delay opening a submenu on hover event.
         * @option
         * @example 50
         */
        hoverDelay: 50,
        /**
         * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
         * @option
         * @example true
         */
        clickOpen: false,
        /**
         * Amount of time to delay closing a submenu on a mouseleave event.
         * @option
         * @example 500
         */

        closingTime: 500,
        /**
         * Position of the menu relative to what direction the submenus should open. Handled by JS.
         * @option
         * @example 'left'
         */
        alignment: 'left',
        /**
         * Allow clicks on the body to close any open submenus.
         * @option
         * @example true
         */
        closeOnClick: true,
        /**
         * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
         * @option
         * @example 'vertical'
         */
        verticalClass: 'vertical',
        /**
         * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
         * @option
         * @example 'align-right'
         */
        rightClass: 'align-right',
        /**
         * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
         * @option
         * @example false
         */
        forceFollow: true
    };
    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */
    DropdownMenu.prototype._init = function(){
        var subs = this.$element.find('li.is-dropdown-submenu-parent');
        this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');

        this.$menuItems = this.$element.find('[role="menuitem"]');
        this.$tabs = this.$element.children('[role="menuitem"]');
        this.isVert = this.$element.hasClass(this.options.verticalClass);
        this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

        if(this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right' || Foundation.rtl()){
            this.options.alignment = 'right';
            subs.addClass('is-left-arrow opens-left');
        }else{
            subs.addClass('is-right-arrow opens-right');
        }
        if(!this.isVert){
            this.$tabs.filter('.is-dropdown-submenu-parent').removeClass('is-right-arrow is-left-arrow opens-right opens-left')
                .addClass('is-down-arrow');
        }
        this.changed = false;
        this._events();
    };
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */
    DropdownMenu.prototype._events = function(){
        var _this = this,
            hasTouch = 'ontouchstart' in window || (typeof window.ontouchstart !== 'undefined'),
            parClass = 'is-dropdown-submenu-parent';

        if(this.options.clickOpen || hasTouch){
            this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', function(e){
                var $elem = $(e.target).parentsUntil('ul', '.' + parClass),
                    hasSub = $elem.hasClass(parClass),
                    hasClicked = $elem.attr('data-is-click') === 'true',
                    $sub = $elem.children('.is-dropdown-submenu');

                if(hasSub){
                    if(hasClicked){
                        if(!_this.options.closeOnClick || (!_this.options.clickOpen && !hasTouch) || (_this.options.forceFollow && hasTouch)){ return; }
                        else{
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            _this._hide($elem);
                        }
                    }else{
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        _this._show($elem.children('.is-dropdown-submenu'));
                        $elem.add($elem.parentsUntil(_this.$element, '.' + parClass)).attr('data-is-click', true);
                    }
                }else{ return; }
            });
        }

        if(!this.options.disableHover){
            this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e){
                e.stopImmediatePropagation();
                var $elem = $(this),
                    hasSub = $elem.hasClass(parClass);

                if(hasSub){
                    clearTimeout(_this.delay);
                    _this.delay = setTimeout(function(){
                        _this._show($elem.children('.is-dropdown-submenu'));
                    }, _this.options.hoverDelay);
                }
            }).on('mouseleave.zf.dropdownmenu', function(e){
                var $elem = $(this),
                    hasSub = $elem.hasClass(parClass);
                if(hasSub && _this.options.autoclose){
                    if($elem.attr('data-is-click') === 'true' && _this.options.clickOpen){ return false; }

                    clearTimeout(_this.delay);
                    _this.delay = setTimeout(function(){
                        _this._hide($elem);
                    }, _this.options.closingTime);
                }
            });
        }
        this.$menuItems.on('keydown.zf.dropdownmenu', function(e){
            var $element = $(e.target).parentsUntil('ul', '[role="menuitem"]'),
                isTab = _this.$tabs.index($element) > -1,
                $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
                $prevElement,
                $nextElement;

            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(i-1);
                    $nextElement = $elements.eq(i+1);
                    return;
                }
            });

            var nextSibling = function() {
                if (!$element.is(':last-child')) $nextElement.children('a:first').focus();
            }, prevSibling = function() {
                $prevElement.children('a:first').focus();
            }, openSub = function() {
                var $sub = $element.children('ul.is-dropdown-submenu');
                if($sub.length){
                    _this._show($sub);
                    $element.find('li > a:first').focus();
                }else{ return; }
            }, closeSub = function() {
                //if ($element.is(':first-child')) {
                var close = $element.parent('ul').parent('li');
                close.children('a:first').focus();
                _this._hide(close);
                //}
            };
            var functions = {
                open: openSub,
                close: function() {
                    _this._hide(_this.$element);
                    _this.$menuItems.find('a:first').focus(); // focus to first element
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            };

            if (isTab) {
                if (_this.vertical) { // vertical menu
                    if (_this.options.alignment === 'left') { // left aligned
                        $.extend(functions, {
                            down: nextSibling,
                            up: prevSibling,
                            next: openSub,
                            previous: closeSub
                        });
                    } else { // right aligned
                        $.extend(functions, {
                            down: nextSibling,
                            up: prevSibling,
                            next: closeSub,
                            previous: openSub
                        });
                    }
                } else { // horizontal menu
                    $.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                    });
                }
            } else { // not tabs -> one sub
                if (_this.options.alignment === 'left') { // left aligned
                    $.extend(functions, {
                        next: openSub,
                        previous: closeSub,
                        down: nextSibling,
                        up: prevSibling
                    });
                } else { // right aligned
                    $.extend(functions, {
                        next: closeSub,
                        previous: openSub,
                        down: nextSibling,
                        up: prevSibling
                    });
                }
            }
            Foundation.Keyboard.handleKey(e, 'DropdownMenu', functions);

        });
    };
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */
    DropdownMenu.prototype._addBodyHandler = function(){
        var $body = $(document.body),
            _this = this;
        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu')
            .on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function(e){
                var $link = _this.$element.find(e.target);
                if($link.length){ return; }

                _this._hide();
                $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
            });
    };
    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */
    DropdownMenu.prototype._show = function($sub){
        var idx = this.$tabs.index(this.$tabs.filter(function(i, el){
            return $(el).find($sub).length > 0;
        }));
        var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
        this._hide($sibs, idx);
        $sub.css('visibility', 'hidden').addClass('js-dropdown-active').attr({'aria-hidden': false})
            .parent('li.is-dropdown-submenu-parent').addClass('is-active')
            .attr({'aria-expanded': true});
        var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
        if(!clear){
            var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
                $parentLi = $sub.parent('.is-dropdown-submenu-parent');
            $parentLi.removeClass('opens' + oldClass).addClass('opens-' + this.options.alignment);
            clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
            if(!clear){
                $parentLi.removeClass('opens-' + this.options.alignment).addClass('opens-inner');
            }
            this.changed = true;
        }
        $sub.css('visibility', '');
        if(this.options.closeOnClick){ this._addBodyHandler(); }
        /**
         * Fires when the new dropdown pane is visible.
         * @event DropdownMenu#show
         */
        this.$element.trigger('show.zf.dropdownmenu', [$sub]);
    };
    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */
    DropdownMenu.prototype._hide = function($elem, idx){
        var $toClose;
        if($elem && $elem.length){
            $toClose = $elem;
        }else if(idx !== undefined){
            $toClose = this.$tabs.not(function(i, el){
                return i === idx;
            });
        }
        else{
            $toClose = this.$element;
        }
        var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

        if(somethingToClose){
            $toClose.find('li.is-active').add($toClose).attr({
                'aria-expanded': false,
                'data-is-click': false
            }).removeClass('is-active');

            $toClose.find('ul.js-dropdown-active').attr({
                'aria-hidden': true
            }).removeClass('js-dropdown-active');

            if(this.changed || $toClose.find('opens-inner').length){
                var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
                $toClose.find('li.is-dropdown-submenu-parent').add($toClose)
                    .removeClass('opens-inner opens-' + this.options.alignment)
                    .addClass('opens-' + oldClass);
                this.changed = false;
            }
            /**
             * Fires when the open menus are closed.
             * @event DropdownMenu#hide
             */
            this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
        }
    };
    /**
     * Destroys the plugin.
     * @function
     */
    DropdownMenu.prototype.destroy = function(){
        this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click')
            .removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
        $(document.body).off('.zf.dropdownmenu');
        Foundation.Nest.Burn(this.$element, 'dropdown');
        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(DropdownMenu, 'DropdownMenu');
}(jQuery, window.Foundation);

!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Equalizer.
     * @class
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Equalizer(element, options){
        this.$element = element;
        this.options  = $.extend({}, Equalizer.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Equalizer');
    }

    /**
     * Default settings for plugin
     */
    Equalizer.defaults = {
        /**
         * Enable height equalization when stacked on smaller screens.
         * @option
         * @example true
         */
        equalizeOnStack: true,
        /**
         * Enable height equalization row by row.
         * @option
         * @example false
         */
        equalizeByRow: false,
        /**
         * String representing the minimum breakpoint size the plugin should equalize heights on.
         * @option
         * @example 'medium'
         */
        equalizeOn: ''
    };

    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */
    Equalizer.prototype._init = function(){
        var eqId = this.$element.attr('data-equalizer') || '';
        var $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');

        this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
        this.$element.attr('data-resize', (eqId || Foundation.GetYoDigits(6, 'eq')));

        this.hasNested = this.$element.find('[data-equalizer]').length > 0;
        this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
        this.isOn = false;

        var imgs = this.$element.find('img');
        var tooSmall;
        if(this.options.equalizeOn){
            tooSmall = this._checkMQ();
            $(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
        }else{
            this._events();
        }
        if((tooSmall !== undefined && tooSmall === false) || tooSmall === undefined){
            if(imgs.length){
                Foundation.onImagesLoaded(imgs, this._reflow.bind(this));
            }else{
                this._reflow();
            }
        }

    };
    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */
    Equalizer.prototype._pauseEvents = function(){
        this.isOn = false;
        this.$element.off('.zf.equalizer resizeme.zf.trigger');
    };
    /**
     * Initializes events for Equalizer.
     * @private
     */
    Equalizer.prototype._events = function(){
        var _this = this;
        this._pauseEvents();
        if(this.hasNested){
            this.$element.on('postequalized.zf.equalizer', function(e){
                if(e.target !== _this.$element[0]){ _this._reflow(); }
            });
        }else{
            this.$element.on('resizeme.zf.trigger', this._reflow.bind(this));
        }
        this.isOn = true;
    };
    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */
    Equalizer.prototype._checkMQ = function(){
        var tooSmall = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
        if(tooSmall){
            if(this.isOn){
                this._pauseEvents();
                this.$watched.css('height', 'auto');
            }
        }else{
            if(!this.isOn){
                this._events();
            }
        }
        return tooSmall;
    };
    /**
     * A noop version for the plugin
     * @private
     */
    Equalizer.prototype._killswitch = function(){
        return;
    };
    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */
    Equalizer.prototype._reflow = function(){
        if(!this.options.equalizeOnStack){
            if(this._isStacked()){
                this.$watched.css('height', 'auto');
                return false;
            }
        }
        if (this.options.equalizeByRow) {
            this.getHeightsByRow(this.applyHeightByRow.bind(this));
        }else{
            this.getHeights(this.applyHeight.bind(this));
        }
    };
    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */
    Equalizer.prototype._isStacked = function(){
        return this.$watched[0].offsetTop !== this.$watched[1].offsetTop;
    };
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */
    Equalizer.prototype.getHeights = function(cb){
        var heights = [];
        for(var i = 0, len = this.$watched.length; i < len; i++){
            this.$watched[i].style.height = 'auto';
            heights.push(this.$watched[i].offsetHeight);
        }
        cb(heights);
    };
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */
    Equalizer.prototype.getHeightsByRow = function(cb) {
        var lastElTopOffset = this.$watched.first().offset().top,
            groups = [],
            group = 0;
        //group by Row
        groups[group] = [];
        for(var i = 0, len = this.$watched.length; i < len; i++){
            this.$watched[i].style.height = 'auto';
            //maybe could use this.$watched[i].offsetTop
            var elOffsetTop = $(this.$watched[i]).offset().top;
            if (elOffsetTop!=lastElTopOffset) {
                group++;
                groups[group] = [];
                lastElTopOffset=elOffsetTop;
            }
            groups[group].push([this.$watched[i],this.$watched[i].offsetHeight]);
        }

        for (var j = 0, ln = groups.length; j < ln; j++) {
            var heights = $(groups[j]).map(function(){ return this[1]; }).get();
            var max         = Math.max.apply(null, heights);
            groups[j].push(max);
        }
        cb(groups);
    };
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */
    Equalizer.prototype.applyHeight = function(heights){
        var max = Math.max.apply(null, heights);
        /**
         * Fires before the heights are applied
         * @event Equalizer#preequalized
         */
        this.$element.trigger('preequalized.zf.equalizer');

        this.$watched.css('height', max);

        /**
         * Fires when the heights have been applied
         * @event Equalizer#postequalized
         */
        this.$element.trigger('postequalized.zf.equalizer');
    };
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedRow
     * @fires Equalizer#postequalizedRow
     * @fires Equalizer#postequalized
     */
    Equalizer.prototype.applyHeightByRow = function(groups){
        /**
         * Fires before the heights are applied
         */
        this.$element.trigger('preequalized.zf.equalizer');
        for (var i = 0, len = groups.length; i < len ; i++) {
            var groupsILength = groups[i].length,
                max = groups[i][groupsILength - 1];
            if (groupsILength<=2) {
                $(groups[i][0][0]).css({'height':'auto'});
                continue;
            }
            /**
             * Fires before the heights per row are applied
             * @event Equalizer#preequalizedRow
             */
            this.$element.trigger('preequalizedrow.zf.equalizer');
            for (var j = 0, lenJ = (groupsILength-1); j < lenJ ; j++) {
                $(groups[i][j][0]).css({'height':max});
            }
            /**
             * Fires when the heights per row have been applied
             * @event Equalizer#postequalizedRow
             */
            this.$element.trigger('postequalizedrow.zf.equalizer');
        }
        /**
         * Fires when the heights have been applied
         */
        this.$element.trigger('postequalized.zf.equalizer');
    };
    /**
     * Destroys an instance of Equalizer.
     * @function
     */
    Equalizer.prototype.destroy = function(){
        this._pauseEvents();
        this.$watched.css('height', 'auto');

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Equalizer, 'Equalizer');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Equalizer;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Equalizer;
        });

}(Foundation, jQuery);

/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.timerAndImageLoader
 */
!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Interchange.
     * @class
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Interchange(element, options) {
        this.$element = element;
        this.options = $.extend({}, Interchange.defaults, options);
        this.rules = [];
        this.currentPath = '';

        this._init();
        this._events();

        Foundation.registerPlugin(this, 'Interchange');
    }

    /**
     * Default settings for plugin
     */
    Interchange.defaults = {
        /**
         * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
         * @option
         */
        rules: null
    };

    Interchange.SPECIAL_QUERIES = {
        'landscape': 'screen and (orientation: landscape)',
        'portrait': 'screen and (orientation: portrait)',
        'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
    };

    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */
    Interchange.prototype._init = function() {
        this._addBreakpoints();
        this._generateRules();
        this._reflow();
    };

    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */
    Interchange.prototype._events = function() {
        $(window).on('resize.zf.interchange', Foundation.util.throttle(this._reflow.bind(this), 50));
    };

    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */
    Interchange.prototype._reflow = function() {
        var match;

        // Iterate through each rule, but only save the last match
        for (var i in this.rules) {
            var rule = this.rules[i];

            if (window.matchMedia(rule.query).matches) {
                match = rule;
            }
        }

        if (match) {
            this.replace(match.path);
        }
    };

    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */
    Interchange.prototype._addBreakpoints = function() {
        for (var i in Foundation.MediaQuery.queries) {
            var query = Foundation.MediaQuery.queries[i];
            Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
    };

    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */
    Interchange.prototype._generateRules = function() {
        var rulesList = [];
        var rules;

        if (this.options.rules) {
            rules = this.options.rules;
        }
        else {
            rules = this.$element.data('interchange').match(/\[.*?\]/g);
        }

        for (var i in rules) {
            var rule = rules[i].slice(1, -1).split(', ');
            var path = rule.slice(0, -1).join('');
            var query = rule[rule.length - 1];

            if (Interchange.SPECIAL_QUERIES[query]) {
                query = Interchange.SPECIAL_QUERIES[query];
            }

            rulesList.push({
                path: path,
                query: query
            });
        }

        this.rules = rulesList;
    };

    /**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */
    Interchange.prototype.replace = function(path) {
        if (this.currentPath === path) return;

        var _this = this,
            trigger = 'replaced.zf.interchange';

        // Replacing images
        if (this.$element[0].nodeName === 'IMG') {
            this.$element.attr('src', path).load(function() {
                _this.currentPath = path;
            })
                .trigger(trigger);
        }
        // Replacing background images
        else if (path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)) {
            this.$element.css({ 'background-image': 'url('+path+')' })
                .trigger(trigger);
        }
        // Replacing HTML
        else {
            $.get(path, function(response) {
                _this.$element.html(response)
                    .trigger(trigger);
                $(response).foundation();
                _this.currentPath = path;
            });
        }

        /**
         * Fires when content in an Interchange element is done being loaded.
         * @event Interchange#replaced
         */
        // this.$element.trigger('replaced.zf.interchange');
    };
    /**
     * Destroys an instance of interchange.
     * @function
     */
    Interchange.prototype.destroy = function(){
        //TODO this.
    };
    Foundation.plugin(Interchange, 'Interchange');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Interchange;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Interchange;
        });

}(Foundation, jQuery);

/**
 * Magellan module.
 * @module foundation.magellan
 */
!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Magellan.
     * @class
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Magellan(element, options) {
        this.$element = element;
        this.options  = $.extend({}, Magellan.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Magellan');
    }

    /**
     * Default settings for plugin
     */
    Magellan.defaults = {
        /**
         * Amount of time, in ms, the animated scrolling should take between locations.
         * @option
         * @example 500
         */
        animationDuration: 500,
        /**
         * Animation style to use when scrolling between locations.
         * @option
         * @example 'ease-in-out'
         */
        animationEasing: 'linear',
        /**
         * Number of pixels to use as a marker for location changes.
         * @option
         * @example 50
         */
        threshold: 50,
        /**
         * Class applied to the active locations link on the magellan container.
         * @option
         * @example 'active'
         */
        activeClass: 'active',
        /**
         * Allows the script to manipulate the url of the current page, and if supported, alter the history.
         * @option
         * @example true
         */
        deepLinking: false,
        /**
         * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
         * @option
         * @example 25
         */
        barOffset: 0
    };

    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */
    Magellan.prototype._init = function() {
        var id = this.$element[0].id || Foundation.GetYoDigits(6, 'magellan'),
            _this = this;
        this.$targets = $('[data-magellan-target]');
        this.$links = this.$element.find('a');
        this.$element.attr({
            'data-resize': id,
            'data-scroll': id,
            'id': id
        });
        this.$active = $();
        this.scrollPos = parseInt(window.pageYOffset, 10);

        this._events();
    };
    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */
    Magellan.prototype.calcPoints = function(){
        var _this = this,
            body = document.body,
            html = document.documentElement;

        this.points = [];
        this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
        this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));

        this.$targets.each(function(){
            var $tar = $(this),
                pt = Math.round($tar.offset().top - _this.options.threshold);
            $tar.targetPoint = pt;
            _this.points.push(pt);
        });
    };
    /**
     * Initializes events for Magellan.
     * @private
     */
    Magellan.prototype._events = function() {
        var _this = this,
            $body = $('html, body'),
            opts = {
                duration: _this.options.animationDuration,
                easing:   _this.options.animationEasing
            };
        $(window).one('load', function(){
            if(_this.options.deepLinking){
                if(location.hash){
                    _this.scrollToLoc(location.hash);
                }
            }
            _this.calcPoints();
            _this._updateActive();
        });

        this.$element.on({
            'resizeme.zf.trigger': this.reflow.bind(this),
            'scrollme.zf.trigger': this._updateActive.bind(this)
        }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
            e.preventDefault();
            var arrival   = this.getAttribute('href');
            _this.scrollToLoc(arrival);
        });
    };
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector.
     * @example '#foo'
     * @function
     */
    Magellan.prototype.scrollToLoc = function(loc){
        var scrollPos = $(loc).offset().top - this.options.threshold / 2 - this.options.barOffset;

        $(document.body).stop(true).animate({
                scrollTop: scrollPos
            },
            {
                duration: this.options.animationDuration,
                easiing: this.options.animationEasing
            });
    };
    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */
    Magellan.prototype.reflow = function(){
        this.calcPoints();
        this._updateActive();
    };
    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */
    Magellan.prototype._updateActive = function(/*evt, elem, scrollPos*/){
        var winPos = /*scrollPos ||*/ parseInt(window.pageYOffset, 10),
            curIdx;

        if(winPos + this.winHeight === this.docHeight){ curIdx = this.points.length - 1; }
        else if(winPos < this.points[0]){ curIdx = 0; }
        else{
            var isDown = this.scrollPos < winPos,
                _this = this,
                curVisible = this.points.filter(function(p, i){
                    return isDown ? p <= winPos : p - _this.options.threshold <= winPos;//&& winPos >= _this.points[i -1] - _this.options.threshold;
                });
            curIdx = curVisible.length ? curVisible.length - 1 : 0;
        }

        this.$active.removeClass(this.options.activeClass);
        this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass);

        if(this.options.deepLinking){
            var hash = this.$active[0].getAttribute('href');
            if(window.history.pushState){
                window.history.pushState(null, null, hash);
            }else{
                window.location.hash = hash;
            }
        }

        this.scrollPos = winPos;
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
    };
    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */
    Magellan.prototype.destroy = function(){
        this.$element.off('.zf.trigger .zf.magellan')
            .find('.' + this.options.activeClass).removeClass(this.options.activeClass);

        if(this.options.deepLinking){
            var hash = this.$active[0].getAttribute('href');
            window.location.hash.replace(hash, '');
        }

        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Magellan, 'Magellan');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Magellan;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Magellan;
        });

}(Foundation, jQuery);

/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 * @requires foundation.util.motion
 */
!function($, Foundation) {

    'use strict';

    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function OffCanvas(element, options) {
        this.$element = element;
        this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
        this.$lastTrigger = $();

        this._init();
        this._events();

        Foundation.registerPlugin(this, 'OffCanvas');
    }

    OffCanvas.defaults = {
        /**
         * Allow the user to click outside of the menu to close it.
         * @option
         * @example true
         */
        closeOnClick: true,
        /**
         * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
         * @option
         * @example 500
         */
        transitionTime: 0,
        /**
         * Direction the offcanvas opens from. Determines class applied to body.
         * @option
         * @example left
         */
        position: 'left',
        /**
         * Force the page to scroll to top on open.
         */
        forceTop: true,
        /**
         * Allow the offcanvas to be sticky while open. Does nothing if Sass option `$maincontent-prevent-scroll === true`.
         * Performance in Safari OSX/iOS is not great.
         */
        // isSticky: false,
        /**
         * Allow the offcanvas to remain open for certain breakpoints.
         * @option
         * @example false
         */
        isRevealed: false,
        /**
         * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class @`revealClass`.
         * @option
         * @example reveal-for-large
         */
        revealOn: null,
        /**
         * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
         * @option
         * @example true
         */
        autoFocus: true,
        /**
         * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
         * @option
         * TODO improve the regex testing for this.
         * @example reveal-for-large
         */
        revealClass: 'reveal-for-',
        /**
         * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
         * @option
         * @example true
         */
        trapFocus: false
    };

    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */
    OffCanvas.prototype._init = function() {
        var id = this.$element.attr('id');

        this.$element.attr('aria-hidden', 'true');

        // Find triggers that affect this element and add aria-expanded to them
        $(document)
            .find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
            .attr('aria-expanded', 'false')
            .attr('aria-controls', id);

        // Add a close trigger over the body if necessary
        if (this.options.closeOnClick){
            if($('.js-off-canvas-exit').length){
                this.$exiter = $('.js-off-canvas-exit');
            }else{
                var exiter = document.createElement('div');
                exiter.setAttribute('class', 'js-off-canvas-exit');
                $('[data-off-canvas-content]').append(exiter);

                this.$exiter = $(exiter);
            }
        }

        this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

        if(this.options.isRevealed){
            this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
            this._setMQChecker();
        }
        if(!this.options.transitionTime){
            this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas-wrapper]')[0]).transitionDuration) * 1000;
        }
    };

    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */
    OffCanvas.prototype._events = function() {
        this.$element.off('.zf.trigger .zf.offcanvas').on({
            'open.zf.trigger': this.open.bind(this),
            'close.zf.trigger': this.close.bind(this),
            'toggle.zf.trigger': this.toggle.bind(this),
            'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
        });

        if (this.options.closeOnClick && this.$exiter.length) {
            this.$exiter.on({'click.zf.offcanvas': this.close.bind(this)});
        }
    };
    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */
    OffCanvas.prototype._setMQChecker = function(){
        var _this = this;

        $(window).on('changed.zf.mediaquery', function(){
            if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
                _this.reveal(true);
            }else{
                _this.reveal(false);
            }
        }).one('load.zf.offcanvas', function(){
            if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
                _this.reveal(true);
            }
        });
    };
    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */
    OffCanvas.prototype.reveal = function(isRevealed){
        var $closer = this.$element.find('[data-close]');
        if(isRevealed){
            this.close();
            this.isRevealed = true;
            // if(!this.options.forceTop){
            //   var scrollPos = parseInt(window.pageYOffset);
            //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
            // }
            // if(this.options.isSticky){ this._stick(); }
            this.$element.off('open.zf.trigger toggle.zf.trigger');
            if($closer.length){ $closer.hide(); }
        }else{
            this.isRevealed = false;
            // if(this.options.isSticky || !this.options.forceTop){
            //   this.$element[0].style.transform = '';
            //   $(window).off('scroll.zf.offcanvas');
            // }
            this.$element.on({
                'open.zf.trigger': this.open.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this)
            });
            if($closer.length){
                $closer.show();
            }
        }
    };

    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     */
    OffCanvas.prototype.open = function(event, trigger) {
        if (this.$element.hasClass('is-open') || this.isRevealed){ return; }
        var _this = this,
            $body = $(document.body);
        $('body').scrollTop(0);
        // window.pageYOffset = 0;

        // if(!this.options.forceTop){
        //   var scrollPos = parseInt(window.pageYOffset);
        //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
        //   if(this.$exiter.length){
        //     this.$exiter[0].style.transform = 'translate(0,' + scrollPos + 'px)';
        //   }
        // }
        /**
         * Fires when the off-canvas menu opens.
         * @event OffCanvas#opened
         */
        Foundation.Move(this.options.transitionTime, this.$element, function(){
            $('[data-off-canvas-wrapper]').addClass('is-off-canvas-open is-open-'+ _this.options.position);

            _this.$element
                .addClass('is-open')

            // if(_this.options.isSticky){
            //   _this._stick();
            // }
        });
        this.$element.attr('aria-hidden', 'false')
            .trigger('opened.zf.offcanvas');

        if(this.options.closeOnClick){
            this.$exiter.addClass('is-visible');
        }
        if(trigger){
            this.$lastTrigger = trigger.attr('aria-expanded', 'true');
        }
        if(this.options.autoFocus){
            this.$element.one('finished.zf.animate', function(){
                _this.$element.find('a, button').eq(0).focus();
            });
        }
        if(this.options.trapFocus){
            $('[data-off-canvas-content]').attr('tabindex', '-1');
            this._trapFocus();
        }
    };
    /**
     * Traps focus within the offcanvas on open.
     * @private
     */
    OffCanvas.prototype._trapFocus = function(){
        var focusable = Foundation.Keyboard.findFocusable(this.$element),
            first = focusable.eq(0),
            last = focusable.eq(-1);

        focusable.off('.zf.offcanvas').on('keydown.zf.offcanvas', function(e){
            if(e.which === 9 || e.keycode === 9){
                if(e.target === last[0] && !e.shiftKey){
                    e.preventDefault();
                    first.focus();
                }
                if(e.target === first[0] && e.shiftKey){
                    e.preventDefault();
                    last.focus();
                }
            }
        });
    };
    /**
     * Allows the offcanvas to appear sticky utilizing translate properties.
     * @private
     */
// OffCanvas.prototype._stick = function(){
//   var elStyle = this.$element[0].style;
//
//   if(this.options.closeOnClick){
//     var exitStyle = this.$exiter[0].style;
//   }
//
//   $(window).on('scroll.zf.offcanvas', function(e){
//     console.log(e);
//     var pageY = window.pageYOffset;
//     elStyle.transform = 'translate(0,' + pageY + 'px)';
//     if(exitStyle !== undefined){ exitStyle.transform = 'translate(0,' + pageY + 'px)'; }
//   });
//   // this.$element.trigger('stuck.zf.offcanvas');
// };
    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#closed
     */
    OffCanvas.prototype.close = function(cb) {
        if(!this.$element.hasClass('is-open') || this.isRevealed){ return; }

        var _this = this;

        //  Foundation.Move(this.options.transitionTime, this.$element, function(){
        $('[data-off-canvas-wrapper]').removeClass('is-off-canvas-open is-open-' + _this.options.position);
        _this.$element.removeClass('is-open');
        // Foundation._reflow();
        // });
        this.$element.attr('aria-hidden', 'true')
        /**
         * Fires when the off-canvas menu opens.
         * @event OffCanvas#closed
         */
            .trigger('closed.zf.offcanvas');
        // if(_this.options.isSticky || !_this.options.forceTop){
        //   setTimeout(function(){
        //     _this.$element[0].style.transform = '';
        //     $(window).off('scroll.zf.offcanvas');
        //   }, this.options.transitionTime);
        // }
        if(this.options.closeOnClick){
            this.$exiter.removeClass('is-visible');
        }

        this.$lastTrigger.attr('aria-expanded', 'false');
        if(this.options.trapFocus){
            $('[data-off-canvas-content]').removeAttr('tabindex');
        }

    };

    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */
    OffCanvas.prototype.toggle = function(event, trigger) {
        if (this.$element.hasClass('is-open')) {
            this.close(event, trigger);
        }
        else {
            this.open(event, trigger);
        }
    };

    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */
    OffCanvas.prototype._handleKeyboard = function(event) {
        if (event.which !== 27) return;

        event.stopPropagation();
        event.preventDefault();
        this.close();
        this.$lastTrigger.focus();
    };
    /**
     * Destroys the offcanvas plugin.
     * @function
     */
    OffCanvas.prototype.destroy = function(){
        this.close();
        this.$element.off('.zf.trigger .zf.offcanvas');
        this.$exiter.off('.zf.offcanvas');

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(OffCanvas, 'OffCanvas');

}(jQuery, Foundation);

/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timerAndImageLoader
 * @requires foundation.util.touch
 */
!function($, Foundation){
    'use strict';
    /**
     * Creates a new instance of an orbit carousel.
     * @class
     * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Orbit(element, options){
        this.$element = element;
        this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Orbit');
        Foundation.Keyboard.register('Orbit', {
            'ltr': {
                'ARROW_RIGHT': 'next',
                'ARROW_LEFT': 'previous'
            },
            'rtl': {
                'ARROW_LEFT': 'next',
                'ARROW_RIGHT': 'previous'
            }
        });
    }
    Orbit.defaults = {
        /**
         * Tells the JS to loadBullets.
         * @option
         * @example true
         */
        bullets: true,
        /**
         * Tells the JS to apply event listeners to nav buttons
         * @option
         * @example true
         */
        navButtons: true,
        /**
         * motion-ui animation class to apply
         * @option
         * @example 'slide-in-right'
         */
        animInFromRight: 'slide-in-right',
        /**
         * motion-ui animation class to apply
         * @option
         * @example 'slide-out-right'
         */
        animOutToRight: 'slide-out-right',
        /**
         * motion-ui animation class to apply
         * @option
         * @example 'slide-in-left'
         *
         */
        animInFromLeft: 'slide-in-left',
        /**
         * motion-ui animation class to apply
         * @option
         * @example 'slide-out-left'
         */
        animOutToLeft: 'slide-out-left',
        /**
         * Allows Orbit to automatically animate on page load.
         * @option
         * @example true
         */
        autoPlay: true,
        /**
         * Amount of time, in ms, between slide transitions
         * @option
         * @example 5000
         */
        timerDelay: 5000,
        /**
         * Allows Orbit to infinitely loop through the slides
         * @option
         * @example true
         */
        infiniteWrap: true,
        /**
         * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
         * @option
         * @example true
         */
        swipe: true,
        /**
         * Allows the timing function to pause animation on hover.
         * @option
         * @example true
         */
        pauseOnHover: true,
        /**
         * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
         * @option
         * @example true
         */
        accessible: true,
        /**
         * Class applied to the container of Orbit
         * @option
         * @example 'orbit-container'
         */
        containerClass: 'orbit-container',
        /**
         * Class applied to individual slides.
         * @option
         * @example 'orbit-slide'
         */
        slideClass: 'orbit-slide',
        /**
         * Class applied to the bullet container. You're welcome.
         * @option
         * @example 'orbit-bullets'
         */
        boxOfBullets: 'orbit-bullets',
        /**
         * Class applied to the `next` navigation button.
         * @option
         * @example 'orbit-next'
         */
        nextClass: 'orbit-next',
        /**
         * Class applied to the `previous` navigation button.
         * @option
         * @example 'orbit-previous'
         */
        prevClass: 'orbit-previous',
        /**
         * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
         * @option
         * @example true
         */
        useMUI: true
    };
    /**
     * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
     * @function
     * @private
     */
    Orbit.prototype._init = function(){
        this.$wrapper = this.$element.find('.' + this.options.containerClass);
        this.$slides = this.$element.find('.' + this.options.slideClass);
        var $images = this.$element.find('img'),
            initActive = this.$slides.filter('.is-active');

        if(!initActive.length){
            this.$slides.eq(0).addClass('is-active');
        }
        if(!this.options.useMUI){
            this.$slides.addClass('no-motionui');
        }
        if($images.length){
            Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
        }else{
            this._prepareForOrbit();//hehe
        }

        if(this.options.bullets){
            this._loadBullets();
        }

        this._events();

        if(this.options.autoPlay && this.$slides.length > 1){
            this.geoSync();
        }
        if(this.options.accessible){ // allow wrapper to be focusable to enable arrow navigation
            this.$wrapper.attr('tabindex', 0);
        }
    };
    /**
     * Creates a jQuery collection of bullets, if they are being used.
     * @function
     * @private
     */
    Orbit.prototype._loadBullets = function(){
        this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
    };
    /**
     * Sets a `timer` object on the orbit, and starts the counter for the next slide.
     * @function
     */
    Orbit.prototype.geoSync = function(){
        var _this = this;
        this.timer = new Foundation.Timer(
            this.$element,
            {duration: this.options.timerDelay,
                infinite: false},
            function(){
                _this.changeSlide(true);
            });
        this.timer.start();
    };
    /**
     * Sets wrapper and slide heights for the orbit.
     * @function
     * @private
     */
    Orbit.prototype._prepareForOrbit = function(){
        var _this = this;
        this._setWrapperHeight(function(max){
            _this._setSlideHeight(max);
        });
    };
    /**
     * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
     * @function
     * @private
     * @param {Function} cb - a callback function to fire when complete.
     */
    Orbit.prototype._setWrapperHeight = function(cb){//rewrite this to `for` loop
        var max = 0, temp, counter = 0;

        this.$slides.each(function(){
            temp = this.getBoundingClientRect().height;
            $(this).attr('data-slide', counter);

            if(counter){//if not the first slide, set css position and display property
                $(this).css({'position': 'relative', 'display': 'none'});
            }
            max = temp > max ? temp : max;
            counter++;
        });

        if(counter === this.$slides.length){
            this.$wrapper.css({'height': max});//only change the wrapper height property once.
            cb(max);//fire callback with max height dimension.
        }
    };
    /**
     * Sets the max-height of each slide.
     * @function
     * @private
     */
    Orbit.prototype._setSlideHeight = function(height){
        this.$slides.each(function(){
            $(this).css('max-height', height);
        });
    };
    /**
     * Adds event listeners to basically everything within the element.
     * @function
     * @private
     */
    Orbit.prototype._events = function(){
        var _this = this;

        //***************************************
        //**Now using custom event - thanks to:**
        //**      Yohai Ararat of Toronto      **
        //***************************************
        if(this.$slides.length > 1){

            if(this.options.swipe){
                this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit')
                    .on('swipeleft.zf.orbit', function(e){
                        e.preventDefault();
                        _this.changeSlide(true);
                    }).on('swiperight.zf.orbit', function(e){
                        e.preventDefault();
                        _this.changeSlide(false);
                    });
            }
            //***************************************

            if(this.options.autoPlay){
                this.$slides.on('click.zf.orbit', function(){
                    _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
                    _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
                });
                if(this.options.pauseOnHover){
                    this.$element.on('mouseenter.zf.orbit', function(){
                        _this.timer.pause();
                    }).on('mouseleave.zf.orbit', function(){
                        if(!_this.$element.data('clickedOn')){
                            _this.timer.start();
                        }
                    });
                }
            }

            if(this.options.navButtons){
                var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
                $controls.attr('tabindex', 0)
                    //also need to handle enter/return and spacebar key presses
                    .on('click.zf.orbit touchend.zf.orbit', function(){
                        _this.changeSlide($(this).hasClass(_this.options.nextClass));
                    });
            }

            if(this.options.bullets){
                this.$bullets.on('click.zf.orbit touchend.zf.orbit', function(){
                    if(/is-active/g.test(this.className)){ return false; }//if this is active, kick out of function.
                    var idx = $(this).data('slide'),
                        ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                        $slide = _this.$slides.eq(idx);

                    _this.changeSlide(ltr, $slide, idx);
                });
            }

            this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e){
                // handle keyboard event with keyboard util
                Foundation.Keyboard.handleKey(e, 'Orbit', {
                    next: function() {
                        _this.changeSlide(true);
                    },
                    previous: function() {
                        _this.changeSlide(false);
                    },
                    handled: function() { // if bullet is focused, make sure focus moves
                        if ($(e.target).is(_this.$bullets)) {
                            _this.$bullets.filter('.is-active').focus();
                        }
                    }
                });
            });
        }
    };
    /**
     * Changes the current slide to a new one.
     * @function
     * @param {Boolean} isLTR - flag if the slide should move left to right.
     * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
     * @param {Number} idx - the index of the new slide in its collection, if one chosen.
     * @fires Orbit#slidechange
     */
    Orbit.prototype.changeSlide = function(isLTR, chosenSlide, idx){
        var $curSlide = this.$slides.filter('.is-active').eq(0);

        if(/mui/g.test($curSlide[0].className)){ return false; }//if the slide is currently animating, kick out of the function

        var $firstSlide = this.$slides.first(),
            $lastSlide = this.$slides.last(),
            dirIn = isLTR ? 'Right' : 'Left',
            dirOut = isLTR ? 'Left' : 'Right',
            _this = this,
            $newSlide;

        if(!chosenSlide){//most of the time, this will be auto played or clicked from the navButtons.
            $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
                (this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass))//pick next slide if moving left to right
                :
                (this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass));//pick prev slide if moving right to left
        }else{
            $newSlide = chosenSlide;
        }
        if($newSlide.length){
            if(this.options.bullets){
                idx = idx || this.$slides.index($newSlide);//grab index to update bullets
                this._updateBullets(idx);
            }
            if(this.options.useMUI){

                Foundation.Motion.animateIn(
                    $newSlide.addClass('is-active').css({'position': 'absolute', 'top': 0}),
                    this.options['animInFrom' + dirIn],
                    function(){
                        $newSlide.css({'position': 'relative', 'display': 'block'})
                            .attr('aria-live', 'polite');
                    });

                Foundation.Motion.animateOut(
                    $curSlide.removeClass('is-active'),
                    this.options['animOutTo' + dirOut],
                    function(){
                        $curSlide.removeAttr('aria-live');
                        if(_this.options.autoPlay && !_this.timer.isPaused){
                            _this.timer.restart();
                        }
                        //do stuff?
                    });
            }else{
                $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
                $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
                if(this.options.autoPlay && !this.timer.isPaused){
                    this.timer.restart();
                }
            }
            /**
             * Triggers when the slide has finished animating in.
             * @event Orbit#slidechange
             */
            this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
        }
    };
    /**
     * Updates the active state of the bullets, if displayed.
     * @function
     * @private
     * @param {Number} idx - the index of the current slide.
     */
    Orbit.prototype._updateBullets = function(idx){
        var $oldBullet = this.$element.find('.' + this.options.boxOfBullets)
                .find('.is-active').removeClass('is-active').blur(),
            span = $oldBullet.find('span:last').detach(),
            $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
    };
    /**
     * Destroys the carousel and hides the element.
     * @function
     */
    Orbit.prototype.destroy = function(){
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Orbit, 'Orbit');

}(jQuery, window.Foundation);

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.accordionMenu
 * @requires foundation.util.drilldown
 * @requires foundation.util.dropdown-menu
 */
!function(Foundation, $) {
    'use strict';

    // The plugin matches the plugin classes with these plugin instances.
    var MenuPlugins = {
        dropdown: {
            cssClass: 'dropdown',
            plugin: Foundation._plugins['dropdown-menu'] || null
        },
        drilldown: {
            cssClass: 'drilldown',
            plugin: Foundation._plugins['drilldown'] || null
        },
        accordion: {
            cssClass: 'accordion-menu',
            plugin: Foundation._plugins['accordion-menu'] || null
        }
    };

    /**
     * Creates a new instance of a responsive menu.
     * @class
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function ResponsiveMenu(element) {
        this.$element = $(element);
        this.rules = this.$element.data('responsive-menu');
        this.currentMq = null;
        this.currentPlugin = null;

        this._init();
        this._events();

        Foundation.registerPlugin(this, 'ResponsiveMenu');
    }

    ResponsiveMenu.defaults = {};

    /**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */
    ResponsiveMenu.prototype._init = function() {
        var rulesTree = {};

        // Parse rules from "classes" in data attribute
        var rules = this.rules.split(' ');

        // Iterate through every rule found
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split('-');
            var ruleSize = rule.length > 1 ? rule[0] : 'small';
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

            if (MenuPlugins[rulePlugin] !== null) {
                rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
        }

        this.rules = rulesTree;

        if (!$.isEmptyObject(rulesTree)) {
            this._checkMediaQueries();
        }
    };

    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */
    ResponsiveMenu.prototype._events = function() {
        var _this = this;

        $(window).on('changed.zf.mediaquery', function() {
            _this._checkMediaQueries();
        });
        // $(window).on('resize.zf.ResponsiveMenu', function() {
        //   _this._checkMediaQueries();
        // });
    };

    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */
    ResponsiveMenu.prototype._checkMediaQueries = function() {
        var matchedMq, _this = this;
        // Iterate through each rule and find the last matching rule
        $.each(this.rules, function(key) {
            if (Foundation.MediaQuery.atLeast(key)) {
                matchedMq = key;
            }
        });

        // No match? No dice
        if (!matchedMq) return;

        // Plugin already initialized? We good
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

        // Remove existing plugin-specific CSS classes
        $.each(MenuPlugins, function(key, value) {
            _this.$element.removeClass(value.cssClass);
        });

        // Add the CSS class for the new plugin
        this.$element.addClass(this.rules[matchedMq].cssClass);

        // Create an instance of the new plugin
        if (this.currentPlugin) this.currentPlugin.destroy();
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    };

    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */
    ResponsiveMenu.prototype.destroy = function() {
        this.currentPlugin.destroy();
        $(window).off('.zf.ResponsiveMenu');
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');

}(Foundation, jQuery);

/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 */
!function($, Foundation) {

    'use strict';

    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function ResponsiveToggle(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);

        this._init();
        this._events();

        Foundation.registerPlugin(this, 'ResponsiveToggle');
    }

    ResponsiveToggle.defaults = {
        /**
         * The breakpoint after which the menu is always shown, and the tab bar is hidden.
         * @option
         * @example 'medium'
         */
        hideFor: 'medium'
    };

    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */
    ResponsiveToggle.prototype._init = function() {
        var targetID = this.$element.data('responsive-toggle');
        if (!targetID) {
            console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
        }

        this.$targetMenu = $('#'+targetID);
        this.$toggler = this.$element.find('[data-toggle]');

        this._update();
    };

    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */
    ResponsiveToggle.prototype._events = function() {
        var _this = this;

        $(window).on('changed.zf.mediaquery', this._update.bind(this));

        this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    };

    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */
    ResponsiveToggle.prototype._update = function() {
        // Mobile
        if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
            this.$element.show();
            this.$targetMenu.hide();
        }

        // Desktop
        else {
            this.$element.hide();
            this.$targetMenu.show();
        }
    };

    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */
    ResponsiveToggle.prototype.toggleMenu = function() {
        if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
            this.$targetMenu.toggle(0);

            /**
             * Fires when the element attached to the tab bar toggles.
             * @event ResponsiveToggle#toggled
             */
            this.$element.trigger('toggled.zf.responsiveToggle');
        }
    };
    ResponsiveToggle.prototype.destroy = function(){
        //TODO this...
    };
    Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

}(jQuery, Foundation);

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */
!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Reveal.
     * @class
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */

    function Reveal(element, options) {
        this.$element = element;
        this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
        this._init();

        Foundation.registerPlugin(this, 'Reveal');
        Foundation.Keyboard.register('Reveal', {
            'ENTER': 'open',
            'SPACE': 'open',
            'ESCAPE': 'close',
            'TAB': 'tab_forward',
            'SHIFT_TAB': 'tab_backward'
        });
    }

    Reveal.defaults = {
        /**
         * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
         * @option
         * @example 'slide-in-left'
         */
        animationIn: '',
        /**
         * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
         * @option
         * @example 'slide-out-right'
         */
        animationOut: '',
        /**
         * Time, in ms, to delay the opening of a modal after a click if no animation used.
         * @option
         * @example 10
         */
        showDelay: 0,
        /**
         * Time, in ms, to delay the closing of a modal after a click if no animation used.
         * @option
         * @example 10
         */
        hideDelay: 0,
        /**
         * Allows a click on the body/overlay to close the modal.
         * @option
         * @example true
         */
        closeOnClick: true,
        /**
         * Allows the modal to close if the user presses the `ESCAPE` key.
         * @option
         * @example true
         */
        closeOnEsc: true,
        /**
         * If true, allows multiple modals to be displayed at once.
         * @option
         * @example false
         */
        multipleOpened: false,
        /**
         * Distance, in pixels, the modal should push down from the top of the screen.
         * @option
         * @example 100
         */
        vOffset: 100,
        /**
         * Distance, in pixels, the modal should push in from the side of the screen.
         * @option
         * @example 0
         */
        hOffset: 0,
        /**
         * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
         * @option
         * @example false
         */
        fullScreen: false,
        /**
         * Percentage of screen height the modal should push up from the bottom of the view.
         * @option
         * @example 10
         */
        btmOffsetPct: 10,
        /**
         * Allows the modal to generate an overlay div, which will cover the view when modal opens.
         * @option
         * @example true
         */
        overlay: true,
        /**
         * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
         * @option
         * @example false
         */
        resetOnClose: false,
        /**
         * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
         * @option
         * @example false
         */
        deepLink: false
    };

    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */
    Reveal.prototype._init = function(){
        this.id = this.$element.attr('id');
        this.isActive = false;

        this.$anchor = $('[data-open="' + this.id + '"]').length ? $('[data-open="' + this.id + '"]') : $('[data-toggle="' + this.id + '"]');

        if(this.$anchor.length){
            var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, 'reveal');

            this.$anchor.attr({
                'aria-controls': this.id,
                'id': anchorId,
                'aria-haspopup': true,
                'tabindex': 0
            });
            this.$element.attr({'aria-labelledby': anchorId});
        }

        // this.options.fullScreen = this.$element.hasClass('full');
        if(this.options.fullScreen || this.$element.hasClass('full')){
            this.options.fullScreen = true;
            this.options.overlay = false;
        }
        if(this.options.overlay && !this.$overlay){
            this.$overlay = this._makeOverlay(this.id);
        }

        this.$element.attr({
            'role': 'dialog',
            'aria-hidden': true,
            'data-yeti-box': this.id,
            'data-resize': this.id
        });

        this._events();
        if(this.options.deepLink && window.location.hash === ( '#' + this.id)){
            $(window).one('load.zf.reveal', this.open.bind(this));
        }
    };

    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */
    Reveal.prototype._makeOverlay = function(id){
        var $overlay = $('<div></div>')
            .addClass('reveal-overlay')
            .attr({'tabindex': -1, 'aria-hidden': true})
            .appendTo('body');
        if(this.options.closeOnClick){
            $overlay.attr({
                'data-close': id
            });
        }
        return $overlay;
    };

    /**
     * Adds event handlers for the modal.
     * @private
     */
    Reveal.prototype._events = function(){
        var _this = this;

        this.$element.on({
            'open.zf.trigger': this.open.bind(this),
            'close.zf.trigger': this.close.bind(this),
            'toggle.zf.trigger': this.toggle.bind(this),
            'resizeme.zf.trigger': function(){
                if(_this.$element.is(':visible')){
                    _this._setPosition(function(){});
                }
            }
        });

        if(this.$anchor.length){
            this.$anchor.on('keydown.zf.reveal', function(e){
                if(e.which === 13 || e.which === 32){
                    e.stopPropagation();
                    e.preventDefault();
                    _this.open();
                }
            });
        }


        if(this.options.closeOnClick && this.options.overlay){
            this.$overlay.off('.zf.reveal').on('click.zf.reveal', this.close.bind(this));
        }
        if(this.options.deepLink){
            $(window).on('popstate.zf.reveal:' + this.id, this._handleState.bind(this));
        }
    };
    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
     * @private
     */
    Reveal.prototype._handleState = function(e){
        if(window.location.hash === ( '#' + this.id) && !this.isActive){ this.open(); }
        else{ this.close(); }
    };
    /**
     * Sets the position of the modal before opening
     * @param {Function} cb - a callback function to execute when positioning is complete.
     * @private
     */
    Reveal.prototype._setPosition = function(cb){
        var eleDims = Foundation.Box.GetDimensions(this.$element);
        var elePos = this.options.fullScreen ? 'reveal full' : (eleDims.height >= (0.5 * eleDims.windowDims.height)) ? 'reveal' : 'center';

        if(elePos === 'reveal full'){
            //set to full height/width
            this.$element
                .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset))
                .css({
                    'height': eleDims.windowDims.height,
                    'width': eleDims.windowDims.width
                });
        }else if(!Foundation.MediaQuery.atLeast('medium') || !Foundation.Box.ImNotTouchingYou(this.$element, null, true, false)){
            //if smaller than medium, resize to 100% width minus any custom L/R margin
            this.$element
                .css({
                    'width': eleDims.windowDims.width - (this.options.hOffset * 2)
                })
                .offset(Foundation.Box.GetOffsets(this.$element, null, 'center', this.options.vOffset, this.options.hOffset));
            //flag a boolean so we can reset the size after the element is closed.
            this.changedSize = true;
        }else{
            this.$element
                .css({
                    'max-height': eleDims.windowDims.height - (this.options.vOffset * (this.options.btmOffsetPct / 100 + 1)),
                    'width': ''
                })
                .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset));
            //the max height based on a percentage of vertical offset plus vertical offset
        }

        cb();
    };

    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */
    Reveal.prototype.open = function(){
        if(this.options.deepLink){
            var hash = '#' + this.id;

            if(window.history.pushState){
                window.history.pushState(null, null, hash);
            }else{
                window.location.hash = hash;
            }
        }

        var _this = this;
        this.isActive = true;
        //make element invisible, but remove display: none so we can get size and positioning
        this.$element
            .css({'visibility': 'hidden'})
            .show()
            .scrollTop(0);

        this._setPosition(function(){
            _this.$element.hide()
                .css({'visibility': ''});
            if(!_this.options.multipleOpened){
                /**
                 * Fires immediately before the modal opens.
                 * Closes any other modals that are currently open
                 * @event Reveal#closeme
                 */
                _this.$element.trigger('closeme.zf.reveal', _this.id);
            }
            if(_this.options.animationIn){
                if(_this.options.overlay){
                    Foundation.Motion.animateIn(_this.$overlay, 'fade-in', function(){
                        Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
                            _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
                        });
                    });
                }else{
                    Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
                        _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
                    });
                }
            }else{
                if(_this.options.overlay){
                    _this.$overlay.show(0, function(){
                        _this.$element.show(_this.options.showDelay, function(){
                        });
                    });
                }else{
                    _this.$element.show(_this.options.showDelay, function(){
                    });
                }
            }
        });


        // handle accessibility
        this.$element.attr({'aria-hidden': false}).attr('tabindex', -1).focus()
        /**
         * Fires when the modal has successfully opened.
         * @event Reveal#open
         */
            .trigger('open.zf.reveal');

        $('body').addClass('is-reveal-open')
            .attr({'aria-hidden': (this.options.overlay || this.options.fullScreen) ? true : false});
        setTimeout(function(){
            _this._extraHandlers();
        }, 0);
    };

    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */
    Reveal.prototype._extraHandlers = function(){
        var _this = this;
        this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);

        if(!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen){
            $('body').on('click.zf.reveal', function(e){
                if(e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)){ return; }
                _this.close();
            });
        }
        if(this.options.closeOnEsc){
            $(window).on('keydown.zf.reveal', function(e){
                Foundation.Keyboard.handleKey(e, 'Reveal', {
                    close: function() {
                        if (_this.options.closeOnEsc) {
                            _this.close();
                            _this.$anchor.focus();
                        }
                    }
                });
                if (_this.focusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
                    e.preventDefault();
                }
            });
        }

        // lock focus within modal while tabbing
        this.$element.on('keydown.zf.reveal', function(e) {
            var $target = $(this);
            // handle keyboard event with keyboard util
            Foundation.Keyboard.handleKey(e, 'Reveal', {
                tab_forward: function() {
                    if (_this.$element.find(':focus').is(_this.focusableElements.eq(-1))) { // left modal downwards, setting focus to first element
                        _this.focusableElements.eq(0).focus();
                        e.preventDefault();
                    }
                },
                tab_backward: function() {
                    if (_this.$element.find(':focus').is(_this.focusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
                        _this.focusableElements.eq(-1).focus();
                        e.preventDefault();
                    }
                },
                open: function() {
                    if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
                        setTimeout(function() { // set focus back to anchor if close button has been activated
                            _this.$anchor.focus();
                        }, 1);
                    } else if ($target.is(_this.focusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
                        _this.open();
                    }
                },
                close: function() {
                    if (_this.options.closeOnEsc) {
                        _this.close();
                        _this.$anchor.focus();
                    }
                }
            });
        });

    };

    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */
    Reveal.prototype.close = function(){
        if(!this.isActive || !this.$element.is(':visible')){
            return false;
        }
        var _this = this;

        if(this.options.animationOut){
            Foundation.Motion.animateOut(this.$element, this.options.animationOut, function(){
                if(_this.options.overlay){
                    Foundation.Motion.animateOut(_this.$overlay, 'fade-out', finishUp);
                }else{ finishUp(); }
            });
        }else{
            this.$element.hide(_this.options.hideDelay, function(){
                if(_this.options.overlay){
                    _this.$overlay.hide(0, finishUp);
                }else{ finishUp(); }
            });
        }
        //conditionals to remove extra event listeners added on open
        if(this.options.closeOnEsc){
            $(window).off('keydown.zf.reveal');
        }
        if(!this.options.overlay && this.options.closeOnClick){
            $('body').off('click.zf.reveal');
        }
        this.$element.off('keydown.zf.reveal');
        function finishUp(){
            //if the modal changed size, reset it
            if(_this.changedSize){
                _this.$element.css({
                    'height': '',
                    'width': ''
                });
            }
            $('body').removeClass('is-reveal-open').attr({'aria-hidden': false, 'tabindex': ''});
            _this.$element.attr({'aria-hidden': true})
            /**
             * Fires when the modal is done closing.
             * @event Reveal#closed
             */
                .trigger('closed.zf.reveal');
        }


        /**
         * Resets the modal content
         * This prevents a running video to keep going in the background
         */
        if(this.options.resetOnClose) {
            this.$element.html(this.$element.html());
        }

        this.isActive = false;
        if(_this.options.deepLink){
            if(window.history.replaceState){
                window.history.replaceState("", document.title, window.location.pathname);
            }else{
                window.location.hash = '';
            }
        }
    };
    /**
     * Toggles the open/closed state of a modal.
     * @function
     */
    Reveal.prototype.toggle = function(){
        if(this.isActive){
            this.close();
        }else{
            this.open();
        }
    };

    /**
     * Destroys an instance of a modal.
     * @function
     */
    Reveal.prototype.destroy = function() {
        if(this.options.overlay){
            this.$overlay.hide().off().remove();
        }
        this.$element.hide().off();
        this.$anchor.off('.zf');
        $(window).off('.zf.reveal:' + this.id);

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Reveal, 'Reveal');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Reveal;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Reveal;
        });

}(Foundation, jQuery);

/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */
!function($, Foundation){
    'use strict';

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Slider(element, options){
        this.$element = element;
        this.options = $.extend({}, Slider.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Slider');
        Foundation.Keyboard.register('Slider', {
            'ltr': {
                'ARROW_RIGHT': 'increase',
                'ARROW_UP': 'increase',
                'ARROW_DOWN': 'decrease',
                'ARROW_LEFT': 'decrease',
                'SHIFT_ARROW_RIGHT': 'increase_fast',
                'SHIFT_ARROW_UP': 'increase_fast',
                'SHIFT_ARROW_DOWN': 'decrease_fast',
                'SHIFT_ARROW_LEFT': 'decrease_fast'
            },
            'rtl': {
                'ARROW_LEFT': 'increase',
                'ARROW_RIGHT': 'decrease',
                'SHIFT_ARROW_LEFT': 'increase_fast',
                'SHIFT_ARROW_RIGHT': 'decrease_fast'
            }
        });
    }

    Slider.defaults = {
        /**
         * Minimum value for the slider scale.
         * @option
         * @example 0
         */
        start: 0,
        /**
         * Maximum value for the slider scale.
         * @option
         * @example 100
         */
        end: 100,
        /**
         * Minimum value change per change event. Not Currently Implemented!

         */
        step: 1,
        /**
         * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
         * @option
         * @example 0
         */
        initialStart: 0,
        /**
         * Value at which the right handle/second input should be set to on initialization.
         * @option
         * @example 100
         */
        initialEnd: 100,
        /**
         * Allows the input to be located outside the container and visible. Set to by the JS
         * @option
         * @example false
         */
        binding: false,
        /**
         * Allows the user to click/tap on the slider bar to select a value.
         * @option
         * @example true
         */
        clickSelect: true,
        /**
         * Set to true and use the `vertical` class to change alignment to vertical.
         * @option
         * @example false
         */
        vertical: false,
        /**
         * Allows the user to drag the slider handle(s) to select a value.
         * @option
         * @example true
         */
        draggable: true,
        /**
         * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
         * @option
         * @example false
         */
        disabled: false,
        /**
         * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
         * @option
         * @example false
         */
        doubleSided: false,
        /**
         * Potential future feature.
         */
        // steps: 100,
        /**
         * Number of decimal places the plugin should go to for floating point precision.
         * @option
         * @example 2
         */
        decimal: 2,
        /**
         * Time delay for dragged elements.
         */
        // dragDelay: 0,
        /**
         * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
         * @option
         * @example 200
         */
        moveTime: 200,//update this if changing the transition time in the sass
        /**
         * Class applied to disabled sliders.
         * @option
         * @example 'disabled'
         */
        disabledClass: 'disabled',
        invertVertical: false
    };
    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */
    Slider.prototype._init = function(){
        this.inputs = this.$element.find('input');
        this.handles = this.$element.find('[data-slider-handle]');

        this.$handle = this.handles.eq(0);
        this.$input = this.inputs.length ? this.inputs.eq(0) : $('#' + this.$handle.attr('aria-controls'));
        this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

        var isDbl = false,
            _this = this;
        if(this.options.disabled || this.$element.hasClass(this.options.disabledClass)){
            this.options.disabled = true;
            this.$element.addClass(this.options.disabledClass);
        }
        if(!this.inputs.length){
            this.inputs = $().add(this.$input);
            this.options.binding = true;
        }
        this._setInitAttr(0);
        this._events(this.$handle);

        if(this.handles[1]){
            this.options.doubleSided = true;
            this.$handle2 = this.handles.eq(1);
            this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : $('#' + this.$handle2.attr('aria-controls'));

            if(!this.inputs[1]){
                this.inputs = this.inputs.add(this.$input2);
            }
            isDbl = true;

            this._setHandlePos(this.$handle, this.options.initialStart, true, function(){

                _this._setHandlePos(_this.$handle2, _this.options.initialEnd, true);
            });
            // this.$handle.triggerHandler('click.zf.slider');
            this._setInitAttr(1);
            this._events(this.$handle2);
        }

        if(!isDbl){
            this._setHandlePos(this.$handle, this.options.initialStart, true);
        }
    };
    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     */
    Slider.prototype._setHandlePos = function($hndl, location, noInvert, cb){
        //might need to alter that slightly for bars that will have odd number selections.
        location = parseFloat(location);//on input change events, convert string to number...grumble.

        // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
        if(location < this.options.start){ location = this.options.start; }
        else if(location > this.options.end){ location = this.options.end; }

        var isDbl = this.options.doubleSided;

        if(isDbl){ //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
            if(this.handles.index($hndl) === 0){
                var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
                location = location >= h2Val ? h2Val - this.options.step : location;
            }else{
                var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
                location = location <= h1Val ? h1Val + this.options.step : location;
            }
        }

        //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
        //for click and drag events, it's weird due to the scale(-1, 1) css property
        if(this.options.vertical && !noInvert){
            location = this.options.end - location;
        }

        var _this = this,
            vert = this.options.vertical,
            hOrW = vert ? 'height' : 'width',
            lOrT = vert ? 'top' : 'left',
            handleDim = $hndl[0].getBoundingClientRect()[hOrW],
            elemDim = this.$element[0].getBoundingClientRect()[hOrW],
        //percentage of bar min/max value based on click or drag point
            pctOfBar = percent(location, this.options.end).toFixed(2),
        //number of actual pixels to shift the handle, based on the percentage obtained above
            pxToMove = (elemDim - handleDim) * pctOfBar,
        //percentage of bar to shift the handle
            movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal),
        //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
            location = parseFloat(location.toFixed(this.options.decimal)),
        // declare empty object for css adjustments, only used with 2 handled-sliders
            css = {};

        this._setValues($hndl, location);

        // TODO update to calculate based on values set to respective inputs??
        if(isDbl){
            var isLeftHndl = this.handles.index($hndl) === 0,
            //empty variable, will be used for min-height/width for fill bar
                dim,
            //percentage w/h of the handle compared to the slider bar
                handlePct =  ~~(percent(handleDim, elemDim) * 100);
            //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
            if(isLeftHndl){
                //left or top percentage value to apply to the fill bar.
                css[lOrT] = movement + '%';
                //calculate the new min-height/width for the fill bar.
                dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
                //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
                //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
                if(cb && typeof cb === 'function'){ cb(); }//this is only needed for the initialization of 2 handled sliders
            }else{
                //just caching the value of the left/bottom handle's left/top property
                var handlePos = parseFloat(this.$handle[0].style[lOrT]);
                //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
                //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
                dim = movement - (isNaN(handlePos) ? this.options.initialStart : handlePos) + handlePct;
            }
            // assign the min-height/width to our css object
            css['min-' + hOrW] = dim + '%';
        }

        this.$element.one('finished.zf.animate', function(){
            /**
             * Fires when the handle is done moving.
             * @event Slider#moved
             */
            _this.$element.trigger('moved.zf.slider', [$hndl]);
        });

        //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
        var moveTime = this.$element.data('dragging') ? 1000/60 : this.options.moveTime;

        Foundation.Move(moveTime, $hndl, function(){
            //adjusting the left/top property of the handle, based on the percentage calculated above
            $hndl.css(lOrT, movement + '%');

            if(!_this.options.doubleSided){
                //if single-handled, a simple method to expand the fill bar
                _this.$fill.css(hOrW, pctOfBar * 100 + '%');
            }else{
                //otherwise, use the css object we created above
                _this.$fill.css(css);
            }
        });

    };
    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */
    Slider.prototype._setInitAttr = function(idx){
        var id = this.inputs.eq(idx).attr('id') || Foundation.GetYoDigits(6, 'slider');
        this.inputs.eq(idx).attr({
            'id': id,
            'max': this.options.end,
            'min': this.options.start

        });
        this.handles.eq(idx).attr({
            'role': 'slider',
            'aria-controls': id,
            'aria-valuemax': this.options.end,
            'aria-valuemin': this.options.start,
            'aria-valuenow': idx === 0 ? this.options.initialStart : this.options.initialEnd,
            'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
            'tabindex': 0
        });
    };
    /**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */
    Slider.prototype._setValues = function($handle, val){
        var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
        this.inputs.eq(idx).val(val);
        $handle.attr('aria-valuenow', val);
    };
    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */
    Slider.prototype._handleEvent = function(e, $handle, val){
        var value, hasVal;
        if(!val){//click or drag events
            e.preventDefault();
            var _this = this,
                vertical = this.options.vertical,
                param = vertical ? 'height' : 'width',
                direction = vertical ? 'top' : 'left',
                pageXY = vertical ? e.pageY : e.pageX,
                halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
                barDim = this.$element[0].getBoundingClientRect()[param],
                barOffset = (this.$element.offset()[direction] -  pageXY),
            //if the cursor position is less than or greater than the elements bounding coordinates, set coordinates within those bounds
                barXY = barOffset > 0 ? -halfOfHandle : (barOffset - halfOfHandle) < -barDim ? barDim : Math.abs(barOffset),
                offsetPct = percent(barXY, barDim);
            value = (this.options.end - this.options.start) * offsetPct;
            // turn everything around for RTL, yay math!
            if (Foundation.rtl() && !this.options.vertical) {value = this.options.end - value;}
            //boolean flag for the setHandlePos fn, specifically for vertical sliders
            hasVal = false;

            if(!$handle){//figure out which handle it is, pass it to the next function.
                var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
                    secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
                $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
            }

        }else{//change event on input
            value = val;
            hasVal = true;
        }

        this._setHandlePos($handle, value, hasVal);
    };
    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */
    Slider.prototype._events = function($handle){
        if(this.options.disabled){ return false; }

        var _this = this,
            curHandle,
            timer;

        this.inputs.off('change.zf.slider').on('change.zf.slider', function(e){
            var idx = _this.inputs.index($(this));
            _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
        });

        if(this.options.clickSelect){
            this.$element.off('click.zf.slider').on('click.zf.slider', function(e){
                if(_this.$element.data('dragging')){ return false; }

                if(_this.options.doubleSided){
                    _this._handleEvent(e);
                }else{
                    _this._handleEvent(e, _this.$handle);
                }
            });
        }

        if(this.options.draggable){
            this.handles.addTouch();

            var $body = $('body');
            $handle
                .off('mousedown.zf.slider')
                .on('mousedown.zf.slider', function(e){
                    $handle.addClass('is-dragging');
                    _this.$fill.addClass('is-dragging');//
                    _this.$element.data('dragging', true);

                    curHandle = $(e.currentTarget);

                    $body.on('mousemove.zf.slider', function(e){
                        e.preventDefault();

                        _this._handleEvent(e, curHandle);

                    }).on('mouseup.zf.slider', function(e){
                        _this._handleEvent(e, curHandle);

                        $handle.removeClass('is-dragging');
                        _this.$fill.removeClass('is-dragging');
                        _this.$element.data('dragging', false);

                        $body.off('mousemove.zf.slider mouseup.zf.slider');
                    });
                });
        }
        $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e){
            var _$handle = $(this),
                idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
                oldValue = parseFloat(_this.inputs.eq(idx).val()),
                newValue;


            // handle keyboard event with keyboard util
            Foundation.Keyboard.handleKey(e, 'Slider', {
                decrease: function() {
                    newValue = oldValue - _this.options.step;
                },
                increase: function() {
                    newValue = oldValue + _this.options.step;
                },
                decrease_fast: function() {
                    newValue = oldValue - _this.options.step * 10;
                },
                increase_fast: function() {
                    newValue = oldValue + _this.options.step * 10;
                },
                handled: function() { // only set handle pos when event was handled specially
                    e.preventDefault();
                    _this._setHandlePos(_$handle, newValue, true);
                }
            });
            /*if (newValue) { // if pressed key has special function, update value
             e.preventDefault();
             _this._setHandlePos(_$handle, newValue);
             }*/
        });
    };
    /**
     * Destroys the slider plugin.
     */
    Slider.prototype.destroy = function(){
        this.handles.off('.zf.slider');
        this.inputs.off('.zf.slider');
        this.$element.off('.zf.slider');

        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Slider, 'Slider');

    function percent(frac, num){
        return (frac / num);
    }
    function absPosition($handle, dir, clickPos, param){
        return Math.abs(($handle.position()[dir] + ($handle[param]() / 2)) - clickPos);
    }
}(jQuery, window.Foundation);

//*********this is in case we go to static, absolute positions instead of dynamic positioning********
// this.setSteps(function(){
//   _this._events();
//   var initStart = _this.options.positions[_this.options.initialStart - 1] || null;
//   var initEnd = _this.options.initialEnd ? _this.options.position[_this.options.initialEnd - 1] : null;
//   if(initStart || initEnd){
//     _this._handleEvent(initStart, initEnd);
//   }
// });

//***********the other part of absolute positions*************
// Slider.prototype.setSteps = function(cb){
//   var posChange = this.$element.outerWidth() / this.options.steps;
//   var counter = 0
//   while(counter < this.options.steps){
//     if(counter){
//       this.options.positions.push(this.options.positions[counter - 1] + posChange);
//     }else{
//       this.options.positions.push(posChange);
//     }
//     counter++;
//   }
//   cb();
// };

/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
!function($, Foundation){
    'use strict';

    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    function Sticky(element, options){
        this.$element = element;
        this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);

        this._init();

        Foundation.registerPlugin(this, 'Sticky');
    }
    Sticky.defaults = {
        /**
         * Customizable container template. Add your own classes for styling and sizing.
         * @option
         * @example '&lt;div data-sticky-container class="small-6 columns"&gt;&lt;/div&gt;'
         */
        container: '<div data-sticky-container></div>',
        /**
         * Location in the view the element sticks to.
         * @option
         * @example 'top'
         */
        stickTo: 'top',
        /**
         * If anchored to a single element, the id of that element.
         * @option
         * @example 'exampleId'
         */
        anchor: '',
        /**
         * If using more than one element as anchor points, the id of the top anchor.
         * @option
         * @example 'exampleId:top'
         */
        topAnchor: '',
        /**
         * If using more than one element as anchor points, the id of the bottom anchor.
         * @option
         * @example 'exampleId:bottom'
         */
        btmAnchor: '',
        /**
         * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
         * @option
         * @example 1
         */
        marginTop: 1,
        /**
         * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
         * @option
         * @example 1
         */
        marginBottom: 1,
        /**
         * Breakpoint string that is the minimum screen size an element should become sticky.
         * @option
         * @example 'medium'
         */
        stickyOn: 'medium',
        /**
         * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
         * @option
         * @example 'sticky'
         */
        stickyClass: 'sticky',
        /**
         * Class applied to sticky container. Foundation defaults to `sticky-container`.
         * @option
         * @example 'sticky-container'
         */
        containerClass: 'sticky-container',
        /**
         * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
         * @option
         * @example 50
         */
        checkEvery: -1
    };

    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */
    Sticky.prototype._init = function(){
        var $parent = this.$element.parent('[data-sticky-container]'),
            id = this.$element[0].id || Foundation.GetYoDigits(6, 'sticky'),
            _this = this;

        if(!$parent.length){
            this.wasWrapped = true;
        }
        this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
        this.$container.addClass(this.options.containerClass);


        this.$element.addClass(this.options.stickyClass)
            .attr({'data-resize': id});

        this.scrollCount = this.options.checkEvery;
        this.isStuck = false;

        if(this.options.anchor !== ''){
            this.$anchor = $('#' + this.options.anchor);
        }else{
            this._parsePoints();
        }

        this._setSizes(function(){
            _this._calc(false);
        });
        this._events(id.split('-').reverse().join('-'));
    };
    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */
    Sticky.prototype._parsePoints = function(){
        var top = this.options.topAnchor,
            btm = this.options.btmAnchor,
            pts = [top, btm],
            breaks = {};
        if(top && btm){

            for(var i = 0, len = pts.length; i < len && pts[i]; i++){
                var pt;
                if(typeof pts[i] === 'number'){
                    pt = pts[i];
                }else{
                    var place = pts[i].split(':'),
                        anchor = $('#' + place[0]);

                    pt = anchor.offset().top;
                    if(place[1] && place[1].toLowerCase() === 'bottom'){
                        pt += anchor[0].getBoundingClientRect().height;
                    }
                }
                breaks[i] = pt;
            }
        }else{
            breaks = {0: 1, 1: document.documentElement.scrollHeight};
        }

        this.points = breaks;
        return;
    };

    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - psuedo-random id for unique scroll event listener.
     */
    Sticky.prototype._events = function(id){
        var _this = this,
            scrollListener = this.scrollListener = 'scroll.zf.' + id;
        if(this.isOn){ return; }
        if(this.canStick){
            this.isOn = true;
            $(window).off(scrollListener)
                .on(scrollListener, function(e){
                    if(_this.scrollCount === 0){
                        _this.scrollCount = _this.options.checkEvery;
                        _this._setSizes(function(){
                            _this._calc(false, window.pageYOffset);
                        });
                    }else{
                        _this.scrollCount--;
                        _this._calc(false, window.pageYOffset);
                    }
                });
        }

        this.$element.off('resizeme.zf.trigger')
            .on('resizeme.zf.trigger', function(e, el){
                _this._setSizes(function(){
                    _this._calc(false);
                    if(_this.canStick){
                        if(!_this.isOn){
                            _this._events(id);
                        }
                    }else if(_this.isOn){
                        _this._pauseListeners(scrollListener);
                    }
                });
            });
    };

    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */
    Sticky.prototype._pauseListeners = function(scrollListener){
        this.isOn = false;
        $(window).off(scrollListener);

        /**
         * Fires when the plugin is paused due to resize event shrinking the view.
         * @event Sticky#pause
         * @private
         */
        this.$element.trigger('pause.zf.sticky');
    };

    /**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */
    Sticky.prototype._calc = function(checkSizes, scroll){
        if(checkSizes){ this._setSizes(); }

        if(!this.canStick){
            if(this.isStuck){
                this._removeSticky(true);
            }
            return false;
        }

        if(!scroll){ scroll = window.pageYOffset; }

        if(scroll >= this.topPoint){
            if(scroll <= this.bottomPoint){
                if(!this.isStuck){
                    this._setSticky();
                }
            }else{
                if(this.isStuck){
                    this._removeSticky(false);
                }
            }
        }else{
            if(this.isStuck){
                this._removeSticky(true);
            }
        }
    };
    /**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */
    Sticky.prototype._setSticky = function(){
        var stickTo = this.options.stickTo,
            mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
            notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
            css = {};

        css[mrgn] = this.options[mrgn] + 'em';
        css[stickTo] = 0;
        css[notStuckTo] = 'auto';
        css['left'] = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
        this.isStuck = true;
        this.$element.removeClass('is-anchored is-at-' + notStuckTo)
            .addClass('is-stuck is-at-' + stickTo)
            .css(css)
        /**
         * Fires when the $element has become `position: fixed;`
         * Namespaced to `top` or `bottom`.
         * @event Sticky#stuckto
         */
            .trigger('sticky.zf.stuckto:' + stickTo);
    };

    /**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */
    Sticky.prototype._removeSticky = function(isTop){
        var stickTo = this.options.stickTo,
            stickToTop = stickTo === 'top',
            css = {},
            anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
            mrgn = stickToTop ? 'marginTop' : 'marginBottom',
            notStuckTo = stickToTop ? 'bottom' : 'top',
            topOrBottom = isTop ? 'top' : 'bottom';

        css[mrgn] = 0;

        if((isTop && !stickToTop) || (stickToTop && !isTop)){
            css[stickTo] = anchorPt;
            css[notStuckTo] = 0;
        }else{
            css[stickTo] = 0;
            css[notStuckTo] = anchorPt;
        }

        css['left'] = '';
        this.isStuck = false;
        this.$element.removeClass('is-stuck is-at-' + stickTo)
            .addClass('is-anchored is-at-' + topOrBottom)
            .css(css)
        /**
         * Fires when the $element has become anchored.
         * Namespaced to `top` or `bottom`.
         * @event Sticky#unstuckfrom
         */
            .trigger('sticky.zf.unstuckfrom:' + topOrBottom);
    };

    /**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */
    Sticky.prototype._setSizes = function(cb){
        this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn);
        if(!this.canStick){ cb(); }
        var _this = this,
            newElemWidth = this.$container[0].getBoundingClientRect().width,
            comp = window.getComputedStyle(this.$container[0]),
            pdng = parseInt(comp['padding-right'], 10);

        if(this.$anchor && this.$anchor.length){
            this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
        }else{
            this._parsePoints();
        }

        this.$element.css({
            'max-width': newElemWidth - pdng + 'px'
        });

        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
        this.containerHeight = newContainerHeight;
        this.$container.css({
            height: newContainerHeight
        });
        this.elemHeight = newContainerHeight;

        if (this.isStuck) {
            this.$element.css({"left":this.$container.offset().left + parseInt(comp['padding-left'], 10)});
        }

        this._setBreakPoints(newContainerHeight, function(){
            if(cb){ cb(); }
        });

    };
    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */
    Sticky.prototype._setBreakPoints = function(elemHeight, cb){
        if(!this.canStick){
            if(cb){ cb(); }
            else{ return false; }
        }
        var mTop = emCalc(this.options.marginTop),
            mBtm = emCalc(this.options.marginBottom),
            topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
            bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
        // topPoint = this.$anchor.offset().top || this.points[0],
        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
            winHeight = window.innerHeight;

        if(this.options.stickTo === 'top'){
            topPoint -= mTop;
            bottomPoint -= (elemHeight + mTop);
        }else if(this.options.stickTo === 'bottom'){
            topPoint -= (winHeight - (elemHeight + mBtm));
            bottomPoint -= (winHeight - mBtm);
        }else{
            //this would be the stickTo: both option... tricky
        }

        this.topPoint = topPoint;
        this.bottomPoint = bottomPoint;

        if(cb){ cb(); }
    };

    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */
    Sticky.prototype.destroy = function(){
        this._removeSticky(true);

        this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top')
            .css({
                height: '',
                top: '',
                bottom: '',
                'max-width': ''
            })
            .off('resizeme.zf.trigger');

        this.$anchor.off('change.zf.sticky');
        $(window).off(this.scrollListener);

        if(this.wasWrapped){
            this.$element.unwrap();
        }else{
            this.$container.removeClass(this.options.containerClass)
                .css({
                    height: ''
                });
        }
        Foundation.unregisterPlugin(this);
    };
    /**
     * Helper function to calculate em values
     * @param Number {em} - number of em's to calculate into pixels
     */
    function emCalc(em){
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
    }
    Foundation.plugin(Sticky, 'Sticky');
}(jQuery, window.Foundation);

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.timerAndImageLoader if tabs contain images
 */
!function($, Foundation) {
    'use strict';

    /**
     * Creates a new instance of tabs.
     * @class
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Tabs(element, options){
        this.$element = element;
        this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);

        this._init();
        Foundation.registerPlugin(this, 'Tabs');
        Foundation.Keyboard.register('Tabs', {
            'ENTER': 'open',
            'SPACE': 'open',
            'ARROW_RIGHT': 'next',
            'ARROW_UP': 'previous',
            'ARROW_DOWN': 'next',
            'ARROW_LEFT': 'previous'
            // 'TAB': 'next',
            // 'SHIFT_TAB': 'previous'
        });
    }

    Tabs.defaults = {
        // /**
        //  * Allows the JS to alter the url of the window. Not yet implemented.
        //  */
        // deepLinking: false,
        // /**
        //  * If deepLinking is enabled, allows the window to scroll to content if window is loaded with a hash including a tab-pane id
        //  */
        // scrollToContent: false,
        /**
         * Allows the window to scroll to content of active pane on load if set to true.
         * @option
         * @example false
         */
        autoFocus: false,
        /**
         * Allows keyboard input to 'wrap' around the tab links.
         * @option
         * @example true
         */
        wrapOnKeys: true,
        /**
         * Allows the tab content panes to match heights if set to true.
         * @option
         * @example false
         */
        matchHeight: false,
        /**
         * Class applied to `li`'s in tab link list.
         * @option
         * @example 'tabs-title'
         */
        linkClass: 'tabs-title',
        // contentClass: 'tabs-content',
        /**
         * Class applied to the content containers.
         * @option
         * @example 'tabs-panel'
         */
        panelClass: 'tabs-panel'
    };

    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */
    Tabs.prototype._init = function(){
        var _this = this;

        this.$tabTitles = this.$element.find('.' + this.options.linkClass);
        this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]');

        this.$tabTitles.each(function(){
            var $elem = $(this),
                $link = $elem.find('a'),
                isActive = $elem.hasClass('is-active'),
                hash = $link[0].hash.slice(1),
                linkId = $link[0].id ? $link[0].id : hash + '-label',
                $tabContent = $('#' + hash);

            $elem.attr({'role': 'presentation'});

            $link.attr({
                'role': 'tab',
                'aria-controls': hash,
                'aria-selected': isActive,
                'id': linkId
            });

            $tabContent.attr({
                'role': 'tabpanel',
                'aria-hidden': !isActive,
                'aria-labelledby': linkId
            });

            if(isActive && _this.options.autoFocus){
                $link.focus();
            }
        });
        if(this.options.matchHeight){
            var $images = this.$tabContent.find('img');
            if($images.length){
                Foundation.onImagesLoaded($images, this._setHeight.bind(this));
            }else{
                this._setHeight();
            }
        }
        this._events();
    };
    /**
     * Adds event handlers for items within the tabs.
     * @private
     */
    Tabs.prototype._events = function(){
        this._addKeyHandler();
        this._addClickHandler();
        if(this.options.matchHeight){
            $(window).on('changed.zf.mediaquery', this._setHeight.bind(this));
        }
    };

    /**
     * Adds click handlers for items within the tabs.
     * @private
     */
    Tabs.prototype._addClickHandler = function(){
        var _this = this;
        this.$element.off('click.zf.tabs')
            .on('click.zf.tabs', '.' + this.options.linkClass, function(e){
                e.preventDefault();
                e.stopPropagation();
                if($(this).hasClass('is-active')){
                    return;
                }
                _this._handleTabChange($(this));
            });
    };

    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */
    Tabs.prototype._addKeyHandler = function(){
        var _this = this;
        var $firstTab = _this.$element.find('li:first-of-type');
        var $lastTab = _this.$element.find('li:last-of-type');

        this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e){
            if(e.which === 9) return;
            e.stopPropagation();
            e.preventDefault();

            var $element = $(this),
                $elements = $element.parent('ul').children('li'),
                $prevElement,
                $nextElement;

            $elements.each(function(i) {
                if ($(this).is($element)) {
                    if (_this.options.wrapOnKeys) {
                        $prevElement = i === 0 ? $elements.last() : $elements.eq(i-1);
                        $nextElement = i === $elements.length -1 ? $elements.first() : $elements.eq(i+1);
                    } else {
                        $prevElement = $elements.eq(Math.max(0, i-1));
                        $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
                    }
                    return;
                }
            });

            // handle keyboard event with keyboard util
            Foundation.Keyboard.handleKey(e, 'Tabs', {
                open: function() {
                    $element.find('[role="tab"]').focus();
                    _this._handleTabChange($element);
                },
                previous: function() {
                    $prevElement.find('[role="tab"]').focus();
                    _this._handleTabChange($prevElement);
                },
                next: function() {
                    $nextElement.find('[role="tab"]').focus();
                    _this._handleTabChange($nextElement);
                }
            });
        });
    };


    /**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @fires Tabs#change
     * @function
     */
    Tabs.prototype._handleTabChange = function($target){
        var $tabLink = $target.find('[role="tab"]'),
            hash = $tabLink[0].hash,
            $targetContent = $(hash),
            $oldTab = this.$element.find('.' + this.options.linkClass + '.is-active')
                .removeClass('is-active').find('[role="tab"]')
                .attr({'aria-selected': 'false'}).attr('aria-controls');

        $('#'+$oldTab).removeClass('is-active').attr({'aria-hidden': 'true'});

        $target.addClass('is-active');

        $tabLink.attr({'aria-selected': 'true'});

        $targetContent
            .addClass('is-active')
            .attr({'aria-hidden': 'false'});

        /**
         * Fires when the plugin has successfully changed tabs.
         * @event Tabs#change
         */
        this.$element.trigger('change.zf.tabs', [$target]);
        // Foundation.reflow(this.$element, 'tabs');
    };

    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @function
     */
    Tabs.prototype.selectTab = function(elem){
        var idStr;
        if(typeof elem === 'object'){
            idStr = elem[0].id;
        }else{
            idStr = elem;
        }

        if(idStr.indexOf('#') < 0){
            idStr = '#' + idStr;
        }
        var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent('.' + this.options.linkClass);

        this._handleTabChange($target);
    };
    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * @function
     * @private
     */
    Tabs.prototype._setHeight = function(){
        var max = 0;
        this.$tabContent.find('.' + this.options.panelClass)
            .css('height', '')
            .each(function(){
                var panel = $(this),
                    isActive = panel.hasClass('is-active');

                if(!isActive){
                    panel.css({'visibility': 'hidden', 'display': 'block'});
                }
                var temp = this.getBoundingClientRect().height;

                if(!isActive){
                    panel.css({'visibility': '', 'display': ''});
                }

                max = temp > max ? temp : max;
            })
            .css('height', max + 'px');
    };

    /**
     * Destroys an instance of an tabs.
     * @fires Tabs#destroyed
     */
    Tabs.prototype.destroy = function() {
        this.$element.find('.' + this.options.linkClass)
            .off('.zf.tabs').hide().end()
            .find('.' + this.options.panelClass)
            .hide();
        if(this.options.matchHeight){
            $(window).off('changed.zf.mediaquery');
        }
        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Tabs, 'Tabs');

    function checkClass($elem){
        return $elem.hasClass('is-active');
    }
}(jQuery, window.Foundation);

/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

!function(Foundation, $) {
    'use strict';

    /**
     * Creates a new instance of Toggler.
     * @class
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Toggler(element, options) {
        this.$element = element;
        this.options = $.extend({}, Toggler.defaults, element.data(), options);
        this.className = '';

        this._init();
        this._events();

        Foundation.registerPlugin(this, 'Toggler');
    }

    Toggler.defaults = {
        /**
         * Tells the plugin if the element should animated when toggled.
         * @option
         * @example false
         */
        animate: false
    };

    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */
    Toggler.prototype._init = function() {
        var input;
        // Parse animation classes if they were set
        if (this.options.animate) {
            input = this.options.animate.split(' ');

            this.animationIn = input[0];
            this.animationOut = input[1] || null;
        }
        // Otherwise, parse toggle class
        else {
            input = this.$element.data('toggler');
            // Allow for a . at the beginning of the string
            this.className = input[0] === '.' ? input.slice(1) : input;
        }

        // Add ARIA attributes to triggers
        var id = this.$element[0].id;
        $('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
            .attr('aria-controls', id);
        // If the target is hidden, add aria-hidden
        this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
    };

    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */
    Toggler.prototype._events = function() {
        this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    };

    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */
    Toggler.prototype.toggle = function() {
        this[ this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    };

    Toggler.prototype._toggleClass = function() {
        this.$element.toggleClass(this.className);

        var isOn = this.$element.hasClass(this.className);
        if (isOn) {
            /**
             * Fires if the target element has the class after a toggle.
             * @event Toggler#on
             */
            this.$element.trigger('on.zf.toggler');
        }
        else {
            /**
             * Fires if the target element does not have the class after a toggle.
             * @event Toggler#off
             */
            this.$element.trigger('off.zf.toggler');
        }

        this._updateARIA(isOn);
    };

    Toggler.prototype._toggleAnimate = function() {
        var _this = this;

        if (this.$element.is(':hidden')) {
            Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                this.trigger('on.zf.toggler');
                _this._updateARIA(true);
            });
        }
        else {
            Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                this.trigger('off.zf.toggler');
                _this._updateARIA(false);
            });
        }
    };

    Toggler.prototype._updateARIA = function(isOn) {
        this.$element.attr('aria-expanded', isOn ? true : false);
    };

    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */
    Toggler.prototype.destroy= function() {
        this.$element.off('.zf.toggler');
        Foundation.unregisterPlugin(this);
    };

    Foundation.plugin(Toggler, 'Toggler');

    // Exports for AMD/Browserify
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Toggler;
    if (typeof define === 'function')
        define(['foundation'], function() {
            return Toggler;
        });

}(Foundation, jQuery);

/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */
!function($, document, Foundation){
    'use strict';

    /**
     * Creates a new instance of a Tooltip.
     * @class
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
    function Tooltip(element, options){
        this.$element = element;
        this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

        this.isActive = false;
        this.isClick = false;
        this._init();

        Foundation.registerPlugin(this, 'Tooltip');
    }

    Tooltip.defaults = {
        disableForTouch: false,
        /**
         * Time, in ms, before a tooltip should open on hover.
         * @option
         * @example 200
         */
        hoverDelay: 200,
        /**
         * Time, in ms, a tooltip should take to fade into view.
         * @option
         * @example 150
         */
        fadeInDuration: 150,
        /**
         * Time, in ms, a tooltip should take to fade out of view.
         * @option
         * @example 150
         */
        fadeOutDuration: 150,
        /**
         * Disables hover events from opening the tooltip if set to true
         * @option
         * @example false
         */
        disableHover: false,
        /**
         * Optional addtional classes to apply to the tooltip template on init.
         * @option
         * @example 'my-cool-tip-class'
         */
        templateClasses: '',
        /**
         * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
         * @option
         * @example 'tooltip'
         */
        tooltipClass: 'tooltip',
        /**
         * Class applied to the tooltip anchor element.
         * @option
         * @example 'has-tip'
         */
        triggerClass: 'has-tip',
        /**
         * Minimum breakpoint size at which to open the tooltip.
         * @option
         * @example 'small'
         */
        showOn: 'small',
        /**
         * Custom template to be used to generate markup for tooltip.
         * @option
         * @example '&lt;div class="tooltip"&gt;&lt;/div&gt;'
         */
        template: '',
        /**
         * Text displayed in the tooltip template on open.
         * @option
         * @example 'Some cool space fact here.'
         */
        tipText: '',
        touchCloseText: 'Tap to close.',
        /**
         * Allows the tooltip to remain open if triggered with a click or touch event.
         * @option
         * @example true
         */
        clickOpen: true,
        /**
         * Additional positioning classes, set by the JS
         * @option
         * @example 'top'
         */
        positionClass: '',
        /**
         * Distance, in pixels, the template should push away from the anchor on the Y axis.
         * @option
         * @example 10
         */
        vOffset: 10,
        /**
         * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
         * @option
         * @example 12
         */
        hOffset: 12
    };

    /**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */
    Tooltip.prototype._init = function(){
        var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

        this.options.positionClass = this._getPositionClass(this.$element);
        this.options.tipText = this.options.tipText || this.$element.attr('title');
        this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

        this.template.appendTo(document.body)
            .text(this.options.tipText)
            .hide();

        this.$element.attr({
            'title': '',
            'aria-describedby': elemId,
            'data-yeti-box': elemId,
            'data-toggle': elemId,
            'data-resize': elemId
        }).addClass(this.triggerClass);

        //helper variables to track movement on collisions
        this.usedPositions = [];
        this.counter = 4;
        this.classChanged = false;

        this._events();
    };

    /**
     * Grabs the current positioning class, if present, and returns the value or an empty string.
     * @private
     */
    Tooltip.prototype._getPositionClass = function(element){
        if(!element){ return ''; }
        // var position = element.attr('class').match(/top|left|right/g);
        var position = element[0].className.match(/\b(top|left|right)\b/g);
        position = position ? position[0] : '';
        return position;
    };
    /**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */
    Tooltip.prototype._buildTemplate = function(id){
        var templateClasses = (this.options.tooltipClass + ' ' + this.options.positionClass + ' ' + this.options.templateClasses).trim();
        var $template =  $('<div></div>').addClass(templateClasses).attr({
            'role': 'tooltip',
            'aria-hidden': true,
            'data-is-active': false,
            'data-is-focus': false,
            'id': id
        });
        return $template;
    };

    /**
     * Function that gets called if a collision event is detected.
     * @param {String} position - positioning class to try
     * @private
     */
    Tooltip.prototype._reposition = function(position){
        this.usedPositions.push(position ? position : 'bottom');

        //default, try switching to opposite side
        if(!position && (this.usedPositions.indexOf('top') < 0)){
            this.template.addClass('top');
        }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
            this.template.removeClass(position);
        }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
            this.template.removeClass(position)
                .addClass('right');
        }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
            this.template.removeClass(position)
                .addClass('left');
        }

        //if default change didn't work, try bottom or left first
        else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
            this.template.addClass('left');
        }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
            this.template.removeClass(position)
                .addClass('left');
        }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
            this.template.removeClass(position);
        }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
            this.template.removeClass(position);
        }
        //if nothing cleared, set to bottom
        else{
            this.template.removeClass(position);
        }
        this.classChanged = true;
        this.counter--;

    };

    /**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */
    Tooltip.prototype._setPosition = function(){
        var position = this._getPositionClass(this.template),
            $tipDims = Foundation.Box.GetDimensions(this.template),
            $anchorDims = Foundation.Box.GetDimensions(this.$element),
            direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
            param = (direction === 'top') ? 'height' : 'width',
            offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
            _this = this;

        if(($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))){
            this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
                // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
                'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
                'height': 'auto'
            });
            return false;
        }

        this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

        while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter){
            this._reposition(position);
            this._setPosition();
        }
    };

    /**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */
    Tooltip.prototype.show = function(){
        if(this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)){
            // console.error('The screen is too small to display this tooltip');
            return false;
        }

        var _this = this;
        this.template.css('visibility', 'hidden').show();
        this._setPosition();

        /**
         * Fires to close all other open tooltips on the page
         * @event Closeme#tooltip
         */
        this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));


        this.template.attr({
            'data-is-active': true,
            'aria-hidden': false
        });
        _this.isActive = true;
        // console.log(this.template);
        this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function(){
            //maybe do stuff?
        });
        /**
         * Fires when the tooltip is shown
         * @event Tooltip#show
         */
        this.$element.trigger('show.zf.tooltip');
    };

    /**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */
    Tooltip.prototype.hide = function(){
        // console.log('hiding', this.$element.data('yeti-box'));
        var _this = this;
        this.template.stop().attr({
            'aria-hidden': true,
            'data-is-active': false
        }).fadeOut(this.options.fadeOutDuration, function(){
            _this.isActive = false;
            _this.isClick = false;
            if(_this.classChanged){
                _this.template
                    .removeClass(_this._getPositionClass(_this.template))
                    .addClass(_this.options.positionClass);

                _this.usedPositions = [];
                _this.counter = 4;
                _this.classChanged = false;
            }
        });
        /**
         * fires when the tooltip is hidden
         * @event Tooltip#hide
         */
        this.$element.trigger('hide.zf.tooltip');
    };

    /**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */
    Tooltip.prototype._events = function(){
        var _this = this;
        var $template = this.template;
        var isFocus = false;

        if(!this.options.disableHover){

            this.$element
                .on('mouseenter.zf.tooltip', function(e){
                    if(!_this.isActive){
                        _this.timeout = setTimeout(function(){
                            _this.show();
                        }, _this.options.hoverDelay);
                    }
                })
                .on('mouseleave.zf.tooltip', function(e){
                    clearTimeout(_this.timeout);
                    if(!isFocus || (!_this.isClick && _this.options.clickOpen)){
                        _this.hide();
                    }
                });
        }
        if(this.options.clickOpen){
            this.$element.on('mousedown.zf.tooltip', function(e){
                e.stopImmediatePropagation();
                if(_this.isClick){
                    _this.hide();
                    // _this.isClick = false;
                }else{
                    _this.isClick = true;
                    if((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive){
                        _this.show();
                    }
                }
            });
        }

        if(!this.options.disableForTouch){
            this.$element
                .on('tap.zf.tooltip touchend.zf.tooltip', function(e){
                    _this.isActive ? _this.hide() : _this.show();
                });
        }

        this.$element.on({
            // 'toggle.zf.trigger': this.toggle.bind(this),
            // 'close.zf.trigger': this.hide.bind(this)
            'close.zf.trigger': this.hide.bind(this)
        });

        this.$element
            .on('focus.zf.tooltip', function(e){
                isFocus = true;
                // console.log(_this.isClick);
                if(_this.isClick){
                    return false;
                }else{
                    // $(window)
                    _this.show();
                }
            })

            .on('focusout.zf.tooltip', function(e){
                isFocus = false;
                _this.isClick = false;
                _this.hide();
            })

            .on('resizeme.zf.trigger', function(){
                if(_this.isActive){
                    _this._setPosition();
                }
            });
    };
    /**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */
    Tooltip.prototype.toggle = function(){
        if(this.isActive){
            this.hide();
        }else{
            this.show();
        }
    };
    /**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */
    Tooltip.prototype.destroy = function(){
        this.$element.attr('title', this.template.text())
            .off('.zf.trigger .zf.tootip')
            //  .removeClass('has-tip')
            .removeAttr('aria-describedby')
            .removeAttr('data-yeti-box')
            .removeAttr('data-toggle')
            .removeAttr('data-resize');

        this.template.remove();

        Foundation.unregisterPlugin(this);
    };
    /**
     * TODO utilize resize event trigger
     */

    Foundation.plugin(Tooltip, 'Tooltip');
}(jQuery, window.document, window.Foundation);
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
//# sourceMappingURL=all.js.map
