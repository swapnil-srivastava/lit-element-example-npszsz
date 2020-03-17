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
    this.inputList = '';
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
    test(4)
    .then(response => {
      return response.data;
      // return response.json();
    })
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
    .then(response => response.data)
    .then(resp => {
      this.loading = false;
      this.user = resp
      })
    .catch(err => {
      this.loading = false;
      console.log('error block ===>', err);  
    })
  }

  handleAdd() {
    if (!this.inputList) return; 
    this.testingArr = [...this.testingArr, { name: this.inputList}];
  }

  handleRemove(indexClicked) {
    this.testingArr = this.testingArr.filter((item, index) => {
      return index !== indexClicked;
    })
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
                
     <input type="text" .value="${this.inputList}" 
     @change="${event => this.inputList = event.target.value}"/>  <br> 
     <button @click="${this.handleAdd}"> Insert value </button> <br> <br>
      
      Click on the list item to remove
      ${this.testingArr.map((item, index) => {
        return html`<li @click="${event => this.handleRemove(index)}">${item.name}</li>`
       })
     }
     `;
  }
}

customElements.define('my-component', MyComponent); 