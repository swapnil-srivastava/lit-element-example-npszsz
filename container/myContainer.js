import {LitElement, html, css} from 'lit-element';

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
     Hello Container`;
  }
}

customElements.define('my-container', MyContainer);