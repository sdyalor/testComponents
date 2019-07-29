var supportsCustomElementsv1 = ('customElements' in window);
var supportsCustomElementsv0 = ('registerElement' in document);
window.supportsShadowDom = Boolean(HTMLElement.prototype.attachShadow);
(supportsCustomElementsv0==true?console.log('API_V0 registerElement are supported',supportsCustomElementsv0):console.log('API_V0 registerElements are not supported',supportsCustomElementsv0));
(supportsCustomElementsv1==true?console.log('API_V1 customElement is supported',supportsCustomElementsv1):console.log('API_V1 customElement is not supported',supportsCustomElementsv1));
(window.supportsShadowDom==true?console.log('Shadow DOM is supported',window.supportsShadowDom):console.log('Shadow DOM is not supported',window.supportsShadowDom));