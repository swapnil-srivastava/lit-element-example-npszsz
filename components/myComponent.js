import {LitElement, html, css} from 'lit-element';
import {test} from '../services/api.js';

class MyComponent extends LitElement {

  static get properties() {
    return { 
      user : { type: Object },
      inputUserId : { type : Number }
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
     test(+this.inputUserId)
    .then(response => response.json())
    .then(resp => this.user = resp);
  }
  
  updateChange(value) {
    this.inputUserId = value.target.value;
  }


  render() {
    return html`
     Hello component <br> <br> 
     <input type="text" .value="${this.inputUserId}" @change="${this.updateChange}"/>  <br> 
     <button @click="${this.handleClick}"> Change value </button> <br> <br>
     user id <span class="resp">${this.user.userId}</span> <br>
     title :  <span class="resp">${this.user.title}</span> <br>
     completed :  <span class="resp">${this.user.completed}</span> <br>
     id :  <span class="resp">${this.user.id}</span> <br>
     `;
  }
}

customElements.define('my-component', MyComponent);

[{"token_identifier":"string","jwt_id":"433cf5c9-3f7d-406d-a224-57b5ecbc0150","access_token":"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoidHN0LTRjOGI1Mzk3LTFhYjgtNDFhOC1hNTViLWE3MTk5MTJiODNkMiIsImN0eSI6IkpXVCJ9..ubwUbOZosMdSzdGaSNGPlQ.0tu7RK3sXriy3uTh6aAzSSkBHowWhuOEQZsFD-N7atd6bjCaDZ264wNGACg8MUuXJLQG0L6jgQg5CLptYrjjHiI124SqVx-2bwEXkJ9N5C5--EcMo7YGHCO5Y49WYUB1n773iSI6gJ6OdRb30gZsuOijCm5RANltfa89SrQcUTfUixTGKVPpq-mTC7ILQBBRlnDpMlj3p4G9znyol0XiFEZoWEcYE48o6YppSKOx7VR0Cx2bYHnSEazDm3M_yP9nzYZGuo4bP0TeeRVg-LtkZen_fHWFSD9zR1UIC9hz3G6fYh43aWa9q4QeZiZWhQUPRkQILGiYLYNdyZxsI6vrNYvONZvc1DImpovg0d_w74uqI1AK2oIaaszysoMm5U_EP207L0XFG36oIZu4dWZZGU0Bo09ZRNZ9TaENQjql07mWxKmQNIUk-wEVLOc4om3KvSWtno-afPpaYU9jlaZw1BhR1pg8rjjXs-c8mweOb2hP23Unub5SX47Zm8OQleeu4FWgFgL7JNUb15_bz181hO5gjD5SFCbuqdKlUo3GE7B7bB_4JVZ4HBLcLlpnI_MCpSOGzFcUqwNiV5SzfXHmh5zPeI55ZfEDre2lOWs--UqPlLH_nxrg9GjBZRXmHyNc0pBAzgR3IZ66jMaZKEZUanD4IdoAKN1Nn066cumQfHm-uvyGeKJb1dhI1Eaj9yFGB16wQvNi4vaQDYYedpFlDHEFT32fwECyhBAD7O_9J00zyTh1DcyUcKVh6yXp8Xg5Sbe77SA3So4TIkZGKtg6YhcT0X689WNiC437LZXDmKyw2_Ekh5qbDzygvEKA5fZbekFUScncLzI6lMV46V8F4ttg61MQjmTRptn6jsixSbHNqc0jGZiYuObGnsXz4G3M1T3WKxVLb2hRPCcvyZL8IKnAB2WFa88kPkEQ_mn3gy29SRRUXG9C461Fkg2ulWrz9WyVy7EdprwxLRjGBi0aTWtPR5cCYEYExp6M62fbOCVd6Kd52NtIA1xK1p1DBnyiDTXUdzlVu_eEJnNbCZ_k8RZJgwGedxxrrS0msgfuxYC9az82JsANo4xdB7zuWzQKMObsP7GFFM8yz9V_Pd871Oqlun3zWVeL5BZglq4stfq58zsV_uERrfBsO9-CnYzdkifcwBseL9j9X0anxtMGQ2NdQzDW-HiEDdCGUNXpX494aOCysylUvIGj5zhQAdgJWD-tclY2heA3aBm5gwskNLKkZ2Bmb_Mtzqi8rIFVcghHKQ5uQ8mdYtX4_E43sJOQ_Y-cvtIRlOggEEGQVT_vo4nZKet5LSNplapubLaXBCq3UmQudqNs-4CUazxut4qDnjgZYJ-OBHDmdWhhaL4IsHAbA7iYYX8N5y3JtFlD6XUsRxjBmF1khmnGpoQ5FEm-BRYmtDzcos7OKCjQ6upSGwJoZS2A0HgGgZ-pZ-cdtoQ.SnkVVdcBKywthNJdDVniO8VZvCNR165g24jfX1WF-fE","unencrypted_access_token":"eyJhbGciOiJSUzI1NiIsIng1dCI6IjNCODYwQTU4QzNGODFFMkQ2OTk5QTVDQTExNjI5MTE0QjRBMjkzMDUifQ.eyJjaWQiOiJjbGllbnRJZCIsInNreSI6IjgxNmFjNTQzZjZkNjQ4ZTM4ZDVmMzljNTk4NTM2NGIyZTQxOGQwN2NhMDczMzAzNWE4NjgwZDZiM2U1MjRmNGQiLCJ0cmMiOnRydWUsInNjb3BlIjoicGVyc29uYWxfZGF0YSIsImV4ZSI6eyJwZXJzb24iOiJwZXJzb25JZCIsInByb2ZpbGUiOiJwcm9maWxlSWQiLCJtZWFucyI6W3sidHlwIjoibWVhbnNUeXBlIiwiaWQiOiJtZWFuc0lkIn1dLCJncmFudCI6ImdyYW50SWQiLCJsb2EiOjIsInR5cCI6ImN1c3RvbWVyIn0sInB0eSI6ImNvb2tpZSIsInB2ZSI6InNlY3VyZV9yYW5kb21fdmFsdWUiLCJzaWQiOiI4ZjVmZDZiNS1kOGIyLTQ1MTItYmUxNC1mNWU5MDBhZDc0MDEiLCJ2ZXIiOiIxLjMiLCJqdGkiOiI0MzNjZjVjOS0zZjdkLTQwNmQtYTIyNC01N2I1ZWNiYzAxNTAiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE1ODQ1MDI5OTksIm5iZiI6MTU4NDQ0Mjk5OSwiaWF0IjoxNTg0NDQzMDAwLCJpc3MiOiJUb2tlbkFQSSJ9.k1gyoCwUFy6D3FwPTsZOSXGe08Kp0PZjQpxjQpcLFz5qhyzmLXp07WWfQsTODMItjkue1JxUfQoMkeI-cWEdJ_DKPJG9PDJviSRvqt8jpdTt2z1Ru3o_9UCeayTfliL8oVMrgNwcEdtiEsSRsrLvmNQpxa2v_B3EJp67whYUWwBF4pMqfuzkKBSAoK7p0VGYo1j---0QjkUvnEfw8ztsUYQo-bdhwR8kXHrxvXb_ItffEMR2rE0GZJluxt27-YmI1Ovv_3R_3rsdLNEQyb86o9zztKdsbfaNnl827iwpSzrwP0pfcbt5n-EwMyOJ15E7iRYedRRd2og22Z3_45y-LA","refresh_token":"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoidHN0LWVjOGY3YjQyLTkzNDYtNDQ1Yi04ZjNkLTc2ODBlZmJmZDA1OSJ9..f0q4wgn40sixjFbbjDmEew.I7nG25Gbpr47wkhkdJWqSqvi-SheS9bG2n5sq8Z0Uu8Fs_0DOwvlZigk-EC_7DaodBDDWWDC0g0Ue4gCOFG9L-ImmQ0hWXOegl1do-HoVikmJNU_UBQAnIDziLNmh28Mb8JjvE_IYsTOfec0aFR7aB5DRVA4ZDLdenUDBrTNkyjkzpZgAkgJSuLwhZRdBUQveb7-BG0ofLIeQRt-5u_oIvanrQuHY97rq4LaNnoFIZ4yqDBmNmfxAA_VESkNun3FA2jrGGixkCT901YurC5Xbtta7TDfp7c4ci6MMsBhp54B7W67Xi2sXXY4FpHl8J3ChCiF_QGjTVonrh8vHVyMHWfqjF1IpbdNpvZQoXXd-HKnvP1UztxGpurGMdY_QORE8SZMTvviJwZZkNZbxkobgdSml3ledd0Ika5Zctx70VZ-DfhLRMBCNjWhPAVOTpeaozlypfrjVW58InA2-brOWTV4ItMtZanPRlJj8HOzNqx1PBRDJXaTKX0k-6Z6dNV7ybrGJhK2H7VjZ6wOByFHJh6sC2Nt6n34dbgH6nNQ71Tt15rxm-2VK6ADnehDA_wDyo2au8LrgnXFBVo3YCGI05TmRvrUJaxUqQndpOkC8eHqa0oiIyjkrLYbjwmtQq2jn2zYqEXuiyR1xtru65QZkaiQa_irnr0O7KDSgT_uMyPAAb-ERwTyyt8KJewWVC6fz9sMWp6-7-Gt5PfHN2ik2avmyjbEVUgX1VWZV4EdOekeoeM6uy7zeo6SfeK6pA4o.Ds5QZ_tYAKs8mBLx8WoDd6UNCcWN6NDZedpwOTYEdvw"}] 
 