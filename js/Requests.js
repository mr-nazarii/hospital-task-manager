const CARDS_URL = 'https://ajax.test-danit.com/api/v2/cards';
const LOGIN_URL = 'https://ajax.test-danit.com/api/v2/cards/login';

export default class Requests {
  constructor(url){
    this.url = CARDS_URL;
    this.token = localStorage.token;
  }


  // добавляет authorization когда нужно
  setHeaders(headers) {
    if(this.token){
      return {
        ...headers,
        'Authorization': `Bearer ${this.token}`
      }
    } else {
      return headers
    }
  }


  // убираем и добавляем bodt в завимимости от dataa
  setOptions(method, data) {
    const options = {
      method: method,
      headers: this.setHeaders({ 'Content-Type': 'application/json'}),
    }
    if(data !== null){
      options.body = JSON.stringify(data);
      return options
    } 
    return options
  }


  login(data) {
    this.url = LOGIN_URL;
    return this.fetchMethod('POST', '', data)
  }

  
  delete(id) {
    return this.fetchMethod();
  }
  put(id) {
    return this.fetchMethod();
  }

  post(obj) {
    return this.fetchMethod("post", '', obj);
  }

  get(id = "") {
    this.url = CARDS_URL;
    return this.fetchMethod("get", id);
  }

  fetchMethod(method, id, data = null){
    return fetch(this.url + "/" + id, this.setOptions(method, data))
  }
}



// нужно сделать  url для login динамическим