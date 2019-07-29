
var supportsCustomElementsv1 = ('customElements' in window);
var supportsCustomElementsv0 = ('registerElement' in document);
window.supportsShadowDom = Boolean(HTMLElement.prototype.attachShadow);
(supportsCustomElementsv0==true?console.log('API_V0 customElemets are supported',supportsCustomElementsv0):console.log('API_V0 customElements are not supported',supportsCustomElementsv0));
(supportsCustomElementsv1==true?console.log('API_V1 registerElement is supported',supportsCustomElementsv1):console.log('API_V1 registerElement is not supported',supportsCustomElementsv1));
(window.supportsShadowDom==true?console.log('Shadow DOM is supported',window.supportsShadowDom):console.log('Shadow DOM is not supported',window.supportsShadowDom));

console.log('--------------------------');



var webComponentsSupported = (
    'customElements' in window
//  && 'import' in document.createElement('link')
//  && 'content' in document.createElement('template')
 );
 if (!webComponentsSupported) {
     var script = document.createElement('script');
     script.async = true;
     
     script.src = 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js';
//     script.onload = finishLazyLoading;
     document.head.appendChild(script);
     console.log('webcomponents-loader loaded');

//      var script2 = document.createElement('script');
//      script2.async = true;
     
//      script2.src = 'node_modules/@webcomponents/custom-elements/custom-elements.min.js';
// //     script.onload = finishLazyLoading;
//      document.head.appendChild(script);
//      document.head.appendChild(script2);
//      console.log('webcomponents-loader loaded');
 } else {
     //finishLazyLoading;
     console.log('no need to load webcomponents-loader');
 }
