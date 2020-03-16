import {LitElement, html, css} from 'lit-element';
import '../components/myAnotherComponent.js';
import '../components/myComponent.js';

class MyContainer extends LitElement {

  static get properties() {
    return { 
    }
  }

  static get styles() {
    return [css`
    `];
  }

  render() {
    return html`
     Hello Container <br>
     <my-another-component></my-another-component> <br>
     <my-component></my-component>`;
  }
}

customElements.define('my-container', MyContainer);