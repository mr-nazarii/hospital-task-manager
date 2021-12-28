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
    return form;
  }
}
