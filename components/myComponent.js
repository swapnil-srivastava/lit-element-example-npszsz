import {LitElement, html, css} from 'lit-element';
import {test} from '../services/api.js';

class MyComponent extends LitElement {

  static get properties() {
    return { 
    }
  }

  static get styles() {
    return [css`
    `];
  }

  constructor() {
    super();
    console.log('my component ===>')
    test()
    .then(response => console.log('response ======>', response))
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('connected callback')
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconnected callback');
  }

  render() {
    return html`
     Hello component`;
  }
}

customElements.define('my-component', MyComponent);
  