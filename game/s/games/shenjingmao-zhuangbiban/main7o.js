/*! ver:1403069240 Copyright 2014 Baidu Inc. All Rights Reserved. */;(function(){var j=!1;
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("nova1.6/util1403069240",["api"],function(k){function m(i,a){var d=a||null,c=g.createElement("script");c.charset="utf-8";c.async=!0;c.src=i;if(d){var b=j;c.onload=c.onreadystatechange=function(){if(!b&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState))b=!0,d()}}for(var e=g.getElementsByTagName("script"),l=10>e.length?e.length:10,f=j,h=0;h<l;h++){var k=e[h];if(k.parentNode){k.parentNode.insertBefore(c,k);f=!0;break}}f||(e=g.getElementsByTagName("head")[0]||g.body,
e.insertBefore(c,e.firstChild))}var i=window,g=i.document;return{a:function(){var g=k.defineOnce("BAIDU_CLB_taskQueues",{});return function(a,d,c){if(i[a])i[a].apply(i,c);else{var b=a+"@"+d,e=g[b];e||(e=g[b]=[],m(d,function(){for(;e.length;){var c=e.shift();i[a].apply(i,c)}delete g[b]}));e.push(c)}}}()}});
window.BAIDU_DUP_define&&window.BAIDU_DUP_define("nova1.6/main7o",["api","nova1.6/util1403069240"],function(k,m){function i(a){if(!a)return j;for(var a=a.split("|"),d=0,c=a.length;d<c;d++){var b=a[d].split("=");if("cpro_template"===b[0])return-1!==b[1].indexOf("mobile")}return j}function g(a){if(!a)return j;for(var a=a.split("|"),d=a.length,c=0;c<d;c++){var b=a[c].split("=");if("cpro_template"===b[0])return a=b[1].split("_"),!!(a[1]&&0===a[1].indexOf("xuanfu"))}return j}function n(a){var d={},c=a._html_old||
a._html;return c?(a=a._rs,a=300===a?400:301===a?401:a,d._html=c+(a?"|cpro_rs="+a:""),d):j}return{render:function(a,d){var c=a.id;a.id=c.split("_")[0];var b=a.id,e=a._html_old||a._html,l=a._fxp,f=a.sw||a._w,h=a.sh||a._h,o=a._location;if(!e&&!o){if(l){if(!d)return null;b=document.getElementById(d);b.style.width=f+"px";b.style.height=h+"px"}}else if(f=window[g(e)?"BAIDU_CLB_CPROFSLOT":"BAIDU_CLB_CPROCSLOT"],h=n(a),!i(e)&&f&&h&&"sync"===k.getFillType(c))f(b,h);else{a:{b=a.id;f=a._html_old||a._html;e=
i(f);h=g(f);f=m.a;if(l=n(a)){if(!h&&!d){b=j;break a}h?f("BAIDU_CLB_CPROFSLOT","http://cpro.baidustatic.com/cpro/ui/cf.js",[b,l]):f(e?"BAIDU_CLB_CPROMSLOT":"BAIDU_CLB_CPROASYNCSLOT",e?"http://cpro.baidustatic.com/cpro/ui/ccm.js":"http://cpro.baidustatic.com/cpro/ui/cc.js",[{id:b,data:l._html,domid:d}])}else{if(!d){b=j;break a}b={};b[a.id]=a;f("BAIDU_CPRO_SETJSONADSLOT","http://cpro.baidustatic.com/cpro/ui/cc.js",[b,d])}b=!0}if(!b)return k.sendLog({data:{type:"novaRenderFail",id:c,error:"wrapperNotFound",
host:window.location.hostname,from:"DUP"}}),null}k.setStatus(c,"finish")},validate:function(a){a=a._isMlt;return 2!==a&&3!==a&&4!==a?j:!0}}});})();
