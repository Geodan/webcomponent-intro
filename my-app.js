import "./simple-element.js";
import "./full-element.js";
import { LitElement, html } from "lit-element";

class MyApp extends LitElement {
    static get properties() {
        return {
            addToDom: {type: Boolean}
        }
    }
    constructor() {
        super();
        this.addToDom = true;
    }
    _renderFullElement() {
        if (this.addToDom){
            return html`
            <full-element bool="true" string="click me!" number="0" .array="${['one', 'two', 'three']}" .object="${{'name':'value'}}"></full-element>
            `
        }
    }
    render() {
        return html`
        <p>App HTML (shell):</p>
        <simple-element></simple-element>
        ${this._renderFullElement()}
        <p><button @click="${(e)=>this._toggleInDom()}">${this.addToDom?'remove from':'add to'} DOM</button></p>
        <p><a href="index.html">plain HTML</a><br>
        shell example<br>
        <a href="native.html">native compontent example</a><br>
        <a href="lithtml.html">lit-html</a>
        </p>
        `
    }
    _toggleInDom() {
        this.addToDom = !this.addToDom;
    }
}

window.customElements.define('my-app', MyApp);