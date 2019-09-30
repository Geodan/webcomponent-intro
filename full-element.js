import {LitElement, html, css} from 'lit-element';
/*
* full-element, template element that implements all lifecyle methods as described on
* https://lit-element.polymer-project.org/guide/lifecycle
*/


/**
* @polymer
* @extends HTMLElement
*/
class FullElement extends LitElement {
    static get properties() {
        console.log('get properties');
        return {
            bool: {type: Boolean},
            string: {type: String},
            number: {type: Number},
            array: {type: Array},
            object: {type: Object}
        }
    }
    static get styles() {
        console.log('get styles');
        return css`
            :host {
                display: inline-block;
                font-size: 14px;
                border: 1px solid gray;
            }
            .bool {
                color: blue;
            }
            .string {
                color: red;
            }
            .number {
                color: green;
            }
            .array {
                color: orange;
            }
            .object {
                color: darkgray;
            }
        `
    }
    constructor() {
        console.log('constructor');
        super();
        this.bool = false;
        this.string = "";
        this.number = 0;
        this.array = [];
        this.object = {};
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        console.log(`attributeChangedCallback ${this.tagName}`)
    }
    connectedCallback() {
        super.connectedCallback()      
        console.log(`connectedCallback ${this.tagName} to DOM`)
    }
    shouldUpdate(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          console.log(`shouldUpdate: ${propName} changed. oldValue: ${oldValue}, newValue: ${this[propName]}`);
        });
        return true;
    }
    render () {
        console.log('render');
        return html`full element 
            <div class="bool">bool: ${this.bool}</div>
            <div class="string">string: ${this.string}</div>
            <div class="number">number: ${this.number}</div>
            <div class="array">array: ${this.array.map(element=>html`${element} `)}</div>
            <div class="array">array (alternate): ${this.array.join(',')}</div>
            <div class="object">object: <b>${Object.keys(this.object)[0]}</b> ${Object.values(this.object)[0]}</div>
            `;
    }
    firstUpdated() {
        this.onclick = ()=>{this.number++;this.string="clicked!"}
        console.log('firstUpdated');
    }
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`updated: ${propName} changed. oldValue: ${oldValue}, newValue: ${this[propName]}`);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback()      
        console.log(`disconnectedCallback ${this.tagName} from DOM`)
    }
    adoptedCallback() {
        super.adoptedCallback();
        console.log(`adoptedCallback ${this.tagName}`)
    }
}

window.customElements.define('full-element', FullElement);