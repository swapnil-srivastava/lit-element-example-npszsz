import {LitElement, html, css} from 'lit-element';
import './container/myContainer.js';
import './services/interceptor.js';
import LogRocket from 'logrocket';

LogRocket.init('f5gsam/test');

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
     Hello <span class="mood">${this.mood}</span>! <br>
     <my-container></my-container>`;
  }
}

customElements.define('my-element', MyElement);
  