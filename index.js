import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {

  static get properties() {
    return { 
      mood: {type: String}
    }
  }

  static get styles() {
    return [css`
    .mood { color: green; }
    .hidden { color: red; }
    `];
  }

  render() {
    return html`
     Hello <span class="mood">${this.mood}</span>!
     <slot class='hidden'></slot>`;
  }
}

customElements.define('my-element', MyElement);
  