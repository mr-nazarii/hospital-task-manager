import alertMessage from './Alert.js';
import LoginForm from './LoginForm.js';

import request from './Requests.js';
import template from './Template.js';



class App {
  constructor(loginBtn, root) {
    this.loginBtn = loginBtn;
    this.root = root;
    this.token = localStorage.token;
    this.loadPage();
  }

  loadPage() {
    if(this.token) {
      // const request = new Requests();
      request
        .get()
        .then((resp) => resp.text())
        .then((data) => {
          template.loadHeader(this.loginBtn);
          template.loadBody(data);
        })
        .catch((e) => console.log(e));
    } else {
      document.getElementById('login').addEventListener('click', () => {
        const login = new LoginForm();
      });
    }
  }
}



const appBtn =  document.getElementById('login');

const app = new App(appBtn, root);