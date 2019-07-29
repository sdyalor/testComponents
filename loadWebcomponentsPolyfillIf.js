var webComponentsSupported = ('registerElement' in document
 && 'import' in document.createElement('link')
 && 'content' in document.createElement('template'));
 if (!webComponentsSupported) {
     var script = document.createElement('script');
     script.async = true;
     
     script.src = 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js';
//     script.onload = finishLazyLoading;
     document.head.appendChild(script);
     console.log('webcomponents-loader loaded');
 } else {
     //finishLazyLoading;
     console.log('no need to load webcomponents-loader');
 }

 var supportsCustomElementsv0 = ('customElements' in window);
 var supportsCustomElementsv1 = ('registerElement' in document);
 (supportsCustomElementsv0==true?console.log('API_V0 customElemets are supported',supportsCustomElementsv0):console.log('API_V0 customElements are not supported',supportsCustomElementsv0));
 (supportsCustomElementsv1==true?console.log('API_V1 registerElement is supported',supportsCustomElementsv1):console.log('API_V1 registerElement is not supported',supportsCustomElementsv1));
