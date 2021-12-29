import alertMessage from './Alert.js';
import LoginForm from './LoginForm.js';

import request from './Requests.js';
import template from './Template.js';
import {Cards as Cards, getAllCards, renderNoDataExist} from "./Cards.js";
import VisitForm from "./VisitForm.js";
import {
  Visit,
  VisitDentist,
  VisitCardiologist,
  VisitTherapist,
} from "./Visit.js";

"use strict";
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
          template.loadHeader(this.loginBtn);
          getAllCards();
//       request
//         .get()
//         .then((resp) => resp.text())
//         .then((data) => {
//           template.loadHeader(this.loginBtn);
//           getAllCards();
//         })
//         .catch((e) => console.log(e));
    } else {
      renderNoDataExist();
      document.getElementById('login').addEventListener('click', () => {
        const login = new LoginForm();
      });
    }
  }
}

// const modalBody = document.getElementById("visit-form");
// const selectDoctor = document.getElementById("selectDoctor");
// const login = document.getElementById("login");

// // const modal = new Modal("Visit", visitForm.render());
// login.addEventListener("click", () => {
//   const innerForm = new Visit();
//   const visitForm = new VisitForm(innerForm.render());
//   visitForm.render();

//   const visitDentist = new VisitDentist();
//   const visitCardiologist = new VisitCardiologist();
//   const visitTherapist = new VisitTherapist();

//   setTimeout(() => {
//     const selectDoctor = document.getElementById("selectDoctor");

//     selectDoctor.addEventListener("change", (e) => {
//       if (selectDoctor.value === "dentist") {
//         const div = document.querySelector("#doctor-form");

//         div.replaceWith(visitDentist.render());
//       } else if (selectDoctor.value === "cardiologist") {
//         const div = document.querySelector("#doctor-form");

//         div.replaceWith(visitCardiologist.render());
//       } else if (selectDoctor.value === "therapist") {
//         const div = document.querySelector("#doctor-form");

//         div.replaceWith(visitTherapist.render());
//       }
//     });
//   }, 200);
// });



import Requests from "./Requests.js";
import {BASE_URL, CARDS_URL, ROOT} from "./Constants.js";
//
//
// const constAllDataResponse = fetch(BASE_URL + CARDS_URL,
//     {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             'Accept': 'application/json',
//             'Authorization': 'Bearer ced8be37-1946-4c27-bef1-c539280ffb2c'
//         },
//     }).then(response => response.json()).then(answ => {
//     console.log(answ);
// })

const appBtn =  document.getElementById('login');

const app = new App(appBtn, root);
