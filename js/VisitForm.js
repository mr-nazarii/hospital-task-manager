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

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.checkIfFilled(form);
      let obj = {};
      for (const i of e.path[0].elements) {
        if (i.id === "pastDesease") {
          obj[i.id] = i.checked;
        } else {
          obj[i.id] = i.value;
        }
      }
      delete obj.submit;
      console.log(obj);
    });
    return form;
  }

  checkIfFilled(form) {
    let allAreFilled = true;
    form.querySelectorAll("[required]").forEach(function (i) {
      if (!allAreFilled) return;
      if (!i.value) allAreFilled = false;
    });
    if (!allAreFilled) {
      alert("Fill all the fields");
    }
  }
}
