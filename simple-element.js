import {LitElement, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
class SimpleElement extends LitElement {
    render () {
        return html`simple element`;
    }
}

window.customElements.define('simple-element', SimpleElement);