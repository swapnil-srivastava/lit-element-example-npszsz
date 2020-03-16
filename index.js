import {LitElement, html, css} from 'lit-element';
import './container/myContainer.js';

class MyElement extends LitElement {

  static get properties() {
    return { 
      mood: {type: String}
    }
  }

  static get styles() {
    return [css`
    .mood { color: green; }
    `];
  }

  render() {
    return html`
     Hello <span class="mood">${this.mood}</span>!
     <m>`;
  }
}

customElements.define('my-element', MyElement);
  