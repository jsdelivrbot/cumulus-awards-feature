!function(e,t){function n(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Iframed Feature INNER]",e,[].slice.call(arguments))}}var a=e.document.createElement("iiframe");n("Injecting jQuery");var r=e.document.createElement("script");r.src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",r.type="text/javascript",r.onload=function(){n("jQuery injected.");var $=e.jQuery;$(function(){$("iiframe").each(function(){n("Resolving inner iframe",this);var t=$(this),a=e.document.createElement("iframe"),r=this.attributes;$.each(r,function(){a[this.name]=this.value}),t.after(a),t.remove()}),$("img").load(function(){e.self.parentIFrame&&e.self.parentIFrame.reset()})})},e.document.head.appendChild(r),n("Injecting iframe-resizer contentWindow library");var i=e.document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.16/iframeResizer.contentWindow.min.js",i.onload=function(){n("iframe-resizer contentWindow loaded.")},e.document.head.appendChild(i),e.parent._CMLS&&e.parent._CMLS.CCC_IFRAME_SETUP&&(n("Calling parent iframe setup"),e.parent._CMLS.CCC_IFRAME_SETUP(e.self))}(window.self);
//# sourceMappingURL=./base-min.js.map