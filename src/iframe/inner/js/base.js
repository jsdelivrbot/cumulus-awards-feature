;(function (window, undefined) {
	
	// Run parent processor
	if (
		window.parent._CMLS &&
		window.parent._CMLS.CCC_IFRAME_SETUP
	) {
		window.parent._CMLS.CCC_IFRAME_SETUP(window.self);
	}

	// Handle our fake iframes
	window.document.createElement('iiframe');
	$(function(){
		$('iiframe').each(function() {
			var container = $(this),
				newframe = window.document.createElement('iframe'),
				attrs = this.attributes;
			$.each(attrs, function(){
				if (this.specified) {
					newframe[this.name] = this.value;
				}
			});
			container.append(newframe);
		});
	});

	// Start up iframe-resizer
	var ifscr = window.document.createElement('script');
	ifscr.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.15/iframeResizer.contentWindow.min.js';
	ifscr.crossorigin = 'anonymous';
	window.document.head.appendChild(ifscr);

}(window.self));