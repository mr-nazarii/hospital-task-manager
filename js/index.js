import Modal from "./Modal.js";
import VisitForm from "./VisitForm.js";
import {
  Visit,
  VisitDentist,
  VisitCardiologist,
  VisitTherapist,
} from "./Visit.js";

const innerForm = new Visit();
const visitForm = new VisitForm(innerForm.render());
const modal = new Modal("Visit", visitForm.render());

const visitDentist = new VisitDentist();
const visitCardiologist = new VisitCardiologist();
const visitTherapist = new VisitTherapist();

document.body.append(modal.render());

const modalBody = document.getElementById("visit-form");
const selectDoctor = document.getElementById("select-doctor");

selectDoctor.addEventListener("change", (e) => {
  if (selectDoctor.value === "dentist") {
    const div = document.querySelector("#doctor-form");

    div.replaceWith(visitDentist.render());
  } else if (selectDoctor.value === "cardiologist") {
    const div = document.querySelector("#doctor-form");

    div.replaceWith(visitCardiologist.render());
  } else if (selectDoctor.value === "therapist") {
    const div = document.querySelector("#doctor-form");

    div.replaceWith(visitTherapist.render());
  }
});
