function getKudos(){var e=$("article").first().attr("id"),t=parseInt($("span.page.current").text());if($("article").length==1)var n="/"+e+"/kudos";else var n="/page/"+t+"/kudos";return!e||$.get(n,function(e){$.each(e,function(e,t){var n=$("#"+t.external_id).find("span.num"),r=n.text().replace(/,/g,""),i=t.kudos;isNaN(r)&&(r=0),isNaN(i)&&(i=9e6),i-r>=0&&(i=i.toString(),i=i.replace(/\B(?=(\d{3})+(?!\d))/g,","),n.html(i))})}),!0}function setViewport(){if(wwidth>631&&wwidth<899)return $("html,body").animate({scrollLeft:rwidth},700),!1}function checkMessages(){var e=window.location.search;e.indexOf("not_found")>=0&&(history.pushState(null,null,"index.html"),$('<div id ="notice"><span>:(</span><br/><br/>Not found.</div>').insertBefore("header#begin")),e.indexOf("udate")>=0&&($("article").css({opacity:.1}),setTimeout(function(){history.pushState(null,null,window.location.pathname),window.location.reload(!0)},700))}(function(e,t){var n=function(){var t=e._data(document,"events");return t&&t.click&&e.grep(t.click,function(e){return e.namespace==="rails"}).length};n()&&e.error("jquery-ujs has already been loaded!");var r;e.rails=r={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},fire:function(t,n,r){var i=e.Event(n);return t.trigger(i,r),i.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(n){var i,s,o,u,a,f,l,c;if(r.fire(n,"ajax:before")){u=n.data("cross-domain"),a=u===t?null:u,f=n.data("with-credentials")||null,l=n.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType;if(n.is("form")){i=n.attr("method"),s=n.attr("action"),o=n.serializeArray();var h=n.data("ujs:submit-button");h&&(o.push(h),n.data("ujs:submit-button",null))}else n.is(r.inputChangeSelector)?(i=n.data("method"),s=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):(i=n.data("method"),s=r.href(n),o=n.data("params")||null);c={type:i||"GET",data:o,dataType:l,beforeSend:function(e,i){return i.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),r.fire(n,"ajax:beforeSend",[e,i])},success:function(e,t,r){n.trigger("ajax:success",[e,t,r])},complete:function(e,t){n.trigger("ajax:complete",[e,t])},error:function(e,t,r){n.trigger("ajax:error",[e,t,r])},xhrFields:{withCredentials:f},crossDomain:a},s&&(c.url=s);var p=r.ajax(c);return n.trigger("ajax:send",p),p}return!1},handleMethod:function(n){var i=r.href(n),s=n.data("method"),o=n.attr("target"),u=e("meta[name=csrf-token]").attr("content"),a=e("meta[name=csrf-param]").attr("content"),f=e('<form method="post" action="'+i+'"></form>'),l='<input name="_method" value="'+s+'" type="hidden" />';a!==t&&u!==t&&(l+='<input name="'+a+'" value="'+u+'" type="hidden" />'),o&&f.attr("target",o),f.hide().append(l).appendTo("body"),f.submit()},disableFormElements:function(t){t.find(r.disableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with",t[n]()),t[n](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(r.enableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[n](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t=e.data("confirm"),n=!1,i;return t?(r.fire(e,"confirm")&&(n=r.confirm(t),i=r.fire(e,"confirm:complete",[n])),n&&i):!0},blankInputs:function(t,n,r){var i=e(),s,o,u=n||"input,textarea",a=t.find(u);return a.each(function(){s=e(this),o=s.is(":checkbox,:radio")?s.is(":checked"):s.val();if(!o==!r){if(s.is(":radio")&&a.filter('input:radio:checked[name="'+s.attr("name")+'"]').length)return!0;i=i.add(s)}}),i.length?i:!1},nonBlankInputs:function(e,t){return r.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},callFormSubmitBindings:function(n,r){var i=n.data("events"),s=!0;return i!==t&&i.submit!==t&&e.each(i.submit,function(e,t){if(typeof t.handler=="function")return s=t.handler(r)}),s},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return r.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},r.fire(e(document),"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,n){e.crossDomain||r.CSRFProtection(n)}),e(document).delegate(r.linkDisableSelector,"ajax:complete",function(){r.enableElement(e(this))}),e(document).delegate(r.linkClickSelector,"click.rails",function(n){var i=e(this),s=i.data("method"),o=i.data("params");if(!r.allowAction(i))return r.stopEverything(n);i.is(r.linkDisableSelector)&&r.disableElement(i);if(i.data("remote")!==t){if((n.metaKey||n.ctrlKey)&&(!s||s==="GET")&&!o)return!0;var u=r.handleRemote(i);return u===!1?r.enableElement(i):u.error(function(){r.enableElement(i)}),!1}if(i.data("method"))return r.handleMethod(i),!1}),e(document).delegate(r.inputChangeSelector,"change.rails",function(t){var n=e(this);return r.allowAction(n)?(r.handleRemote(n),!1):r.stopEverything(t)}),e(document).delegate(r.formSubmitSelector,"submit.rails",function(n){var i=e(this),s=i.data("remote")!==t,o=r.blankInputs(i,r.requiredInputSelector),u=r.nonBlankInputs(i,r.fileInputSelector);if(!r.allowAction(i))return r.stopEverything(n);if(o&&i.attr("novalidate")==t&&r.fire(i,"ajax:aborted:required",[o]))return r.stopEverything(n);if(s){if(u){setTimeout(function(){r.disableFormElements(i)},13);var a=r.fire(i,"ajax:aborted:file",[u]);return a||setTimeout(function(){r.enableFormElements(i)},13),a}return!e.support.submitBubbles&&e().jquery<"1.7"&&r.callFormSubmitBindings(i,n)===!1?r.stopEverything(n):(r.handleRemote(i),!1)}setTimeout(function(){r.disableFormElements(i)},13)}),e(document).delegate(r.formInputClickSelector,"click.rails",function(t){var n=e(this);if(!r.allowAction(n))return r.stopEverything(t);var i=n.attr("name"),s=i?{name:i,value:n.val()}:null;n.closest("form").data("ujs:submit-button",s)}),e(document).delegate(r.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&r.disableFormElements(e(this))}),e(document).delegate(r.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&r.enableFormElements(e(this))}),e(function(){csrf_token=e("meta[name=csrf-token]").attr("content"),csrf_param=e("meta[name=csrf-param]").attr("content"),e('form input[name="'+csrf_param+'"]').val(csrf_token)}))})(jQuery),function(e){function t(){if(o.jStorage)try{s=l(""+o.jStorage)}catch(e){o.jStorage="{}"}else o.jStorage="{}";a=o.jStorage?(""+o.jStorage).length:0}function n(){try{o.jStorage=f(s),u&&(u.setAttribute("jStorage",o.jStorage),u.save("jStorage")),a=o.jStorage?(""+o.jStorage).length:0}catch(e){}}function r(e){if(!e||"string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==e)throw new TypeError("Reserved key name");return!0}function i(){var e,t,r,o=Infinity,u=!1;clearTimeout(h);if(s.__jstorage_meta&&"object"==typeof s.__jstorage_meta.TTL){e=+(new Date),r=s.__jstorage_meta.TTL;for(t in r)r.hasOwnProperty(t)&&(r[t]<=e?(delete r[t],delete s[t],u=!0):r[t]<o&&(o=r[t]));Infinity!=o&&(h=setTimeout(i,o-e)),u&&n()}}if(!e||!e.toJSON&&!Object.toJSON&&!window.JSON)throw Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");var s={},o={jStorage:"{}"},u=null,a=0,f=e.toJSON||Object.toJSON||window.JSON&&(JSON.encode||JSON.stringify),l=e.evalJSON||window.JSON&&(JSON.decode||JSON.parse)||function(e){return(""+e).evalJSON()},c=!1,h,p={isXML:function(e){return(e=(e?e.ownerDocument||e:0).documentElement)?"HTML"!==e.nodeName:!1},encode:function(e){if(!this.isXML(e))return!1;try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(n){}}return!1},decode:function(e){var t="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t};return t?(e=t.call("DOMParser"in window&&new DOMParser||window,e,"text/xml"),this.isXML(e)?e:!1):!1}};e.jStorage={version:"0.1.7.0",set:function(e,t,i){return r(e),i=i||{},p.isXML(t)?t={_is_xml:!0,xml:p.encode(t)}:"function"==typeof t?t=null:t&&"object"==typeof t&&(t=l(f(t))),s[e]=t,isNaN(i.TTL)?n():this.setTTL(e,i.TTL),t},get:function(e,t){return r(e),e in s?s[e]&&"object"==typeof s[e]&&s[e]._is_xml&&s[e]._is_xml?p.decode(s[e].xml):s[e]:"undefined"==typeof t?null:t},deleteKey:function(e){return r(e),e in s?(delete s[e],s.__jstorage_meta&&"object"==typeof s.__jstorage_meta.TTL&&e in s.__jstorage_meta.TTL&&delete s.__jstorage_meta.TTL[e],n(),!0):!1},setTTL:function(e,t){var o=+(new Date);return r(e),t=Number(t)||0,e in s?(s.__jstorage_meta||(s.__jstorage_meta={}),s.__jstorage_meta.TTL||(s.__jstorage_meta.TTL={}),0<t?s.__jstorage_meta.TTL[e]=o+t:delete s.__jstorage_meta.TTL[e],n(),i(),!0):!1},flush:function(){return s={},n(),!0},storageObj:function(){function e(){}return e.prototype=s,new e},index:function(){var e=[],t;for(t in s)s.hasOwnProperty(t)&&"__jstorage_meta"!=t&&e.push(t);return e},storageSize:function(){return a},currentBackend:function(){return c},storageAvailable:function(){return!!c},reInit:function(){var e;if(u&&u.addBehavior){e=document.createElement("link"),u.parentNode.replaceChild(e,u),u=e,u.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(u),u.load("jStorage"),e="{}";try{e=u.getAttribute("jStorage")}catch(n){}o.jStorage=e,c="userDataBehavior"}t()}},function(){var e=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),e=!0,window.localStorage.removeItem("_tmptest")}catch(n){}if(e)try{window.localStorage&&(o=window.localStorage,c="localStorage")}catch(r){}else if("globalStorage"in window)try{window.globalStorage&&(o=window.globalStorage[window.location.hostname],c="globalStorage")}catch(s){}else{if(u=document.createElement("link"),!u.addBehavior){u=null;return}u.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(u),u.load("jStorage"),e="{}";try{e=u.getAttribute("jStorage")}catch(a){}o.jStorage=e,c="userDataBehavior"}t(),i()}()}(window.$||window.jQuery),$(function(){function r(){$("code").addClass("prettyprint"),$.getScript("javascripts/prettify.js").done(function(e,t){var n="stylesheets/prettify.css";$.get(n,function(e){$('<style type="text/css"></style>').html(e).appendTo("head")}),prettyPrint()})}function i(t){t.addClass("active"),t.children(".counter").children("indexbe00.html").html("Don&rsquo;t move"),t.children(".counter").children("span.num").hide(),e=setTimeout(function(){clearTimeout(e),u(t)},1e3)}function s(t){clearTimeout(e),t.children(".counter").children("indexbe00.html").html("Kudos"),t.children(".counter").children("span.num").show(),t.removeClass("active")}function o(e){var t=e.closest("article"),r=t.attr("id"),i=t.find("a.title").text();e.removeClass("complete deletable"),e.addClass("kudoable");var s=parseInt(e.find("span.num").text().replace(/,/g,""))-1;e.find("span.num").text(s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),e.children(".counter").children("indexbe00.html").html("Kudos"),e.children(".counter").children("span.num").show(),$.post("/kudos/delete",{article:r,title:i},function(){$.jStorage.set(r,!1),clearInterval(n)})}function u(e){var t=e.closest("article"),n=t.attr("id"),r=t.find("a.title").text();$.post("/kudos",{article:n,title:r},function(){$.jStorage.set(n,!0)});var i=parseInt(e.find("span.num").text().replace(/,/g,""))+1;e.find("span.num").text(i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),e.children(".counter").children("indexbe00.html").html("Kudos"),e.children(".counter").children("span.num").show(),e.addClass("complete"),e.removeClass("kudoable active")}var e,t;checkMessages(),getKudos();var n=setInterval(function(){},5e3);$("code, pre").length>0&&r(),$("a.counter").live({click:function(e){return e.preventDefault(),!1}}),$("a.kudobject").live({click:function(e){return e.preventDefault(),!1},mouseenter:function(){kudo=$(this).parent(),kudo.is(".kudoable")&&i(kudo)},mouseleave:function(){clearTimeout(e),kudo=$(this).parent(),s(kudo),kudo.is(".complete")&&kudo.addClass("deletable")}}),$("a.kudobject").live("touchstart",function(e){kudo=$(this).parent(),kudo.is(".kudoable")&&i(kudo),e.preventDefault()}),$("a.kudobject").live("touchend",function(t){clearTimeout(e),kudo=$(this).parent(),s(kudo),kudo.is(".complete")&&kudo.addClass("deletable"),t.preventDefault()}),$("aside.deletable a.kudobject").live("click",function(e){return kudo=$(this).parent(),o(kudo),e.preventDefault(),!1}),$("aside.deletable a.kudobject").live("touchend",function(e){return kudo=$(this).parent(),o(kudo),e.preventDefault(),!1}),$("aside.kudo").each(function(e){var t=$(this).closest("article").attr("id"),n=$.jStorage.get(t);n&&$(this).removeClass("kudoable").addClass("complete deletable")})}),$(window).load(function(){setViewport()});var rwidth=$("#river").width(),wwidth=$(window).width();$.ajaxSetup({beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content"))}});if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelector('meta[name="viewport"]');viewportmeta&&(viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0",document.body.addEventListener("touchstart",function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},!1))};