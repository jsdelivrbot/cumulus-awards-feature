/* jshint browser: true, devel: true */
// @codekit-prepend "../../../js/base.js";

// Handle iframe templated builds

;(function($, window, undefined){

	window._CMLS = window._CMLS || {};

	// Safe wrapper for console.log
	function log(){
		if (typeof console === 'object' && console.log) {
			var ts = (new Date());
			ts = ts.toISOString() ? ts.toISOString() : ts.toUTCString();
			console.log('[CMLS Iframed Feature]', ts, [].slice.call(arguments));
		}
	}

	$(function(){

		var tag = $('#CMLS_TEMPLATE');
		if (!tag.length) {
			log('No #CMLS_TEMPLATE found!');
			return;
		}

		tag.parentsUntil('.wrapper-content', '.column,.row,.block-type-content')
			.addClass('CMLS_CCC');
			
		if (tag.is('iframe')) {
			//var newframe = $('<iframe></iframe>'),
			var frame_id = 'CMLS_CCC_IFRAME-' + Date.now();

			tag.attr({
				id: frame_id,
				name: frame_id,
				width: '100%',
				frameBorder: 0,
				className: 'CMLS_CCC_IFRAME',
				scrolling: false,
				allowTransparency: true,
				style: ""
			});

			window._CMLS.CCC_IFRAME_ACTIVATE_DFP = function setupDFP() {
				var iwin = tag[0].contentWindow,
					idoc = tag[0].contentDocument;

				idoc.title = window.document.title;

				if (window.self.googletag) {
					var pa = window.self.googletag.pubads(),
						slots = pa.getSlots(),
						adPath;
					if (slots.length) {
						slots.some(function(slot) {
							var p = slot.getAdUnitPath();
							if (p.indexOf('/6717/') > -1) {
								adPath = p;
								return true;
							}
						});
					}
					var targetingKeys = window.self.googletag.pubads().getTargetingKeys(),
						targets = [];
					if (targetingKeys && targetingKeys.length) {
						targetingKeys.forEach(function(key){
							targets.push(
								'googletag.pubads().setTargeting(' +
								'\'' + key + '\', ' +
								'\'' + window.self.googletag.pubads().getTargeting(key) + '\'' +
								');'
							);
						});
					}

					if (adPath) {
						var dfpScript =
							"googletag.cmd.unshift(function() {" +
							"	" + targets.join("\n") +
							"});" +

							"googletag.cmd.unshift(function() {" +
							"	googletag.defineSlot('" + adPath + "', [[300, 250], [300, 600]], 'div-gpt-ad-1418849849333-0')" +
							"		.addService(googletag.pubads())" +
							"		.setCollapseEmptyDiv(true)" +
							"		.setTargeting('pos','mid');" +
							"	googletag.pubads().enableSingleRequest();" +
							"	googletag.enableServices();" +
							"});" +

							"var googletag = googletag || {};" +
							"googletag.cmd = googletag.cmd || [];" +
							"(function() {" +
							"var gads = document.createElement('script');" +
							"gads.async = true;" +
							"gads.type = 'text/javascript';" +
							"var useSSL = 'https:' == document.location.protocol;" +
							"gads.src = (useSSL ? 'https:' : 'http:') + " +
							"'//www.googletagservices.com/tag/js/gpt.js';" +
							"var node = document.getElementsByTagName('script')[0];" +
							"node.parentNode.insertBefore(gads, node);" +
							"})();";

						log('Activating parent DFP in iframe template for cube', dfpScript);
						iwin.eval(dfpScript);
					}
				}
			};

			window._CMLS.CCC_IFRAME_SETUP = function setupIframe() {
				log('Inner frame called parent iframe setup');
				tag[0].contentDocument.title = window.document.title;
			};

			//tag.after(newframe);
			tag[0].contentDocument.open();
			tag[0].contentDocument.write(tag.text());
			tag[0].contentDocument.close();

			// Set up iframe resizer
			var ifscr = window.document.createElement('script'),
				w = window;
			ifscr.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.min.js';
			ifscr.type = 'text/javascript';
			ifscr.onload = function(){
				var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
				w.iFrameResize({
					log: window.IFR_DEBUG || false,
					checkOrigin: false,
					heightCalculationMethod: isOldIE ? 'max' : 'lowestElement'
				}, '#' + frame_id);
			};
			window.document.head.appendChild(ifscr);

		} else {
			log('#CMLS_TEMPLATE is not an iframe!');
		}
	});
}(jQuery, window.self));