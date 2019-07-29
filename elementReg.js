import {html, render} from 'lit-html';

class NiceCounter extends HTMLElement {
    constructor() {
        super();
        this.counterValue = 0;
        this.root = this.attachShadow({mode: "open"});
        setInterval( _ => this.increaseCounter(),1000);
    }
    increaseCounter() {
        ++this.counter;
    }
    get counter() {
        return this.counterValue;
    }
    set counter(val) {
        this.counterValue = val;
        render(
    html`
            <div>${this.message}:${this.counter}</div>
        `
            
            ,this.root);
    }
    template () {
    return html`
            <div>${this.message}:${this.counter}</div>
        `

    }
        
    get message() {
        return this.getAttribute('message');
    }
}

customElements.define('nice-counter',NiceCounter);