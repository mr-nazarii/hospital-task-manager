import request from "./Requests.js";
import Modal from "./Modal.js";
import { Cards as Cards, getAllCards, renderNoDataExist, addOneCard } from "./Cards.js";

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

    setTimeout(() => {
      const submit = document.querySelector("#submit");
      submit.disabled = true;
    }, 200);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let obj = {};
      if (form.reportValidity()) {
        for (const i of e.target.elements) {
          if (i.id === "pastDesease") {
            obj[i.id] = i.checked;
          } else {
            obj[i.id] = i.value.toLowerCase();
          }
        }
        delete obj.submit;

        this.VisitFormModal.remove();

        request.post(obj)
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              addOneCard(response)
            });
      }
    });
  }
}
