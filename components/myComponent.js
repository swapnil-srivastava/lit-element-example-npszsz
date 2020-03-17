import {LitElement, html, css} from 'lit-element';
import {test} from '../services/api.js';

class MyComponent extends LitElement {

  static get properties() {
    return { 
      user : { type: Object },
      inputUserId : { type : Number },
      loading: { type: Boolean}, 
      testingArr: { type : Array},
      inputList: {value: String}
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
    this.testingArr = [
      { name : 'Swapnil'},
      { name : 'Suhani'},
      { name : 'Mudrika'},
      { name : 'Avni'},
    ]
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

  handleApiClick(value) {
     this.loading = true;
     test(+this.inputUserId)
    .then(response => response.json())
    .then(resp => {
      this.loading = false;
      this.user = resp
      })
    .catch(err => {
      this.loading = false
      console.log('error block ===>', err);  
    })
  }

  handleClick(value) {
    console.log(value);
  }
  
  render() {
    return html`
     <br>
     <input type="text" .value="${this.inputUserId}" @change="${event => this.inputUserId = event.target.value}"/>  <br> 
     <button @click="${this.handleApiClick}"> Change value </button> <br> <br>

      ${this.loading ?
      html`<p>Loading</p>`:
      html`<p> user id <span class="resp">${this.user.userId}</span> <br>
                title :  <span class="resp">${this.user.title}</span> <br>
                completed :  <span class="resp">${this.user.completed}</span> <br>
                id :  <span class="resp">${this.user.id}</span> <br></p>`}
                

     <button @click="${this.handleClick}"> Insert value </button> <br> 
       ${this.testingArr.map(i => html`<li>${i.name}</li>`)}
     `;
  }
}

customElements.define('my-component', MyComponent); 