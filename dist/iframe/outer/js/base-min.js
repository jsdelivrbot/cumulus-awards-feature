!function($,e,t){function n(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Feature]",e,[].slice.call(arguments))}}var o=$("#CMLS_FEATURE");if(!o.length)return n('You must add id="CMLS_FEATURE" to the script tag which loads this library!'),!1;o.parentsUntil(".wrapper-content",".column,.row,.block-type-content").addClass("CMLS_CCC"),n("Added CMLS_CCC class to parent containers."),e._CMLS=e._CMLS||{};var a=o.attr("data-google-analytics-id");a&&(n("Installing Google Analytics",a),e._CMLS.installGoogleAnalytics=function t(n){n&&(!function(e,t,n,o,a,i,r){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,i=t.createElement(n),r=t.getElementsByTagName(n)[0],i.async=1,i.src=o,r.parentNode.insertBefore(i,r)}(e,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",n,"auto",{name:"contestTracker"}),ga("contestTracker.send","pageview"))},e._CMLS.installGoogleAnalytics(a))}(jQuery,window.self),function($,e,t){function n(){if("object"==typeof console&&console.log){var e=new Date;e=e.toISOString()?e.toISOString():e.toUTCString(),console.log("[CMLS Iframed Feature]",e,[].slice.call(arguments))}}e._CMLS=e._CMLS||{},$(function(){var t=$("#CMLS_TEMPLATE");if(!t.length)return void n("No #CMLS_TEMPLATE found!");if(t.is("iframe")){var o=$("<iframe></iframe>"),a="CMLS_CCC_IFRAME-"+Date.now();o.attr({id:a,name:a,width:"100%",frameBorder:0,className:"CMLS_CCC_IFRAME",scrolling:!1,allowTransparency:!0}),e._CMLS.CCC_IFRAME_SETUP=function t(){var a=o[0].contentWindow;o[0].contentDocument.title=e.document.title,$("script").each(function(){(!this.src||this.src.length<1)&&(this.innerText.indexOf("var googletag")>-1||this.innerText.indexOf("googletag.defineSlot")>-1||this.innerText.indexOf("googletag.pubads().setTargeting")>-1)&&(n("Activating parent DFP in iframe template"),a.eval(this.innerText))})},t.after(o),o[0].contentDocument.open(),o[0].contentDocument.write(t.text()),o[0].contentDocument.close();var i=e.document.createElement("script"),r=e;i.src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.15/iframeResizer.min.js",i.type="text/javascript",i.onload=function(){var t=-1!==navigator.userAgent.indexOf("MSIE");r.iFrameResize({log:e.IFR_DEBUG||!1,checkOrigin:!1,heightCalculationMethod:t?"max":"lowestElement"},"#"+a)},e.document.head.appendChild(i)}else n("#CMLS_TEMPLATE is not an iframe!")})}(jQuery,window.self);
//# sourceMappingURL=./base-min.js.map