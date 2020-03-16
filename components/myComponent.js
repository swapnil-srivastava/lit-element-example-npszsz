import {LitElement, html, css} from 'lit-element';

class MyComponent extends LitElement {

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
     Hello component`;
  }
}

customElements.define('my-component', MyComponent);
  