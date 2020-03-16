import {LitElement, html, css} from 'lit-element';

class MyAnotherComponent extends LitElement {

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
     Hello Another component`;
  }
}

customElements.define('my-another-component', MyAnotherComponent);
  