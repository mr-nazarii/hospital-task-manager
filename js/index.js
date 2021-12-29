import VisitForm from "./VisitForm.js";
import {
  Visit,
  VisitDentist,
  VisitCardiologist,
  VisitTherapist,
} from "./Visit.js";

const modalBody = document.getElementById("visit-form");
const selectDoctor = document.getElementById("selectDoctor");
const login = document.getElementById("login");

// const modal = new Modal("Visit", visitForm.render());
login.addEventListener("click", () => {
  const innerForm = new Visit();
  const visitForm = new VisitForm(innerForm.render());
  visitForm.render();

  const visitDentist = new VisitDentist();
  const visitCardiologist = new VisitCardiologist();
  const visitTherapist = new VisitTherapist();

  setTimeout(() => {
    const selectDoctor = document.getElementById("selectDoctor");

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
  }, 200);
});
