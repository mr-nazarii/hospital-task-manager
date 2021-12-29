import request from "./Requests.js";
import Modal from "./Modal.js";

export default class VisitForm {
  constructor(innerForm) {
    this.innerForm = innerForm;
  }

  render() {
    const form = document.createElement("form");
    form.id = "visit-form";
    form.append(this.innerForm);
    const div = document.createElement("div");
    div.id = "doctor-form";
    form.append(div);

    this.VisitFormModal = new Modal("Visit", form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // this.checkIfFilled(form);

      let obj = {};
      if (form.reportValidity()) {
        for (const i of e.path[0].elements) {
          if (i.id === "pastDesease") {
            obj[i.id] = i.checked;
          } else {
            obj[i.id] = i.value.toLowerCase();
          }
        }
        delete obj.submit;
        console.log(obj);

        this.VisitFormModal.remove();

        localStorage.token = "d544d67d-2341-45b4-85e6-b7a7bad957fe";

        request.post(obj);
        request
          .get()
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            localStorage.cards = JSON.stringify(response);
          });
      }
    });
  }
}
