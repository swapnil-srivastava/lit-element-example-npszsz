import {LitElement, html, css} from 'lit-element';
import {test} from '../services/api.js';

class MyComponent extends LitElement {

  static get properties() {
    return { 
      user : { type: Object },
      inputUserId : { type : Number },
      loading: { type: Boolean}
    }
  }

  static get styles() {
    return [css`
      .resp { color: red; }
    `];
  }

  constructor() {
    super();
    this.inputUserId = '';
    this.loading = false;
  }

  connectedCallback() {
    super.connectedCallback()
    test()
    .then(response => response.json())
    .then(resp => this.user = resp);
    console.log('connected callback')
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconnected callback');
  }

  handleClick(value) {
     this.loading = true;
     test(+this.inputUserId)
    .then(response => response.json())
    .then(resp => {
      this.loading = false;
      this.user = resp
      })
    .catch(err => {
      this.loading = false
      console.log('error block', err);  
    })
  }
  
  render() {
    return html`
     Hello component <br> <br> 
     <input type="text" .value="${this.inputUserId}" @change="${event => this.inputUserId = event.target.value}"/>  <br> 
     <button @click="${this.handleClick}"> Change value </button> <br> <br>
      ${this.loading ?
      html`<p>Loading</p>`:
      html`<p> user id <span class="resp">${this.user.userId}</span> <br>
                title :  <span class="resp">${this.user.title}</span> <br>
                completed :  <span class="resp">${this.user.completed}</span> <br>
                id :  <span class="resp">${this.user.id}</span> <br></p>`}
     `;
  }
}

customElements.define('my-component', MyComponent); 