class Visit {
  constructor() {
    this.purpose = "Purpose of the Visit";
    this.shortDesc = "Short description of the Visit";
    this.urgency = "How urgent is the visit";
    this.personalInfo = "Full Name";
    this.date = "When to schedule the appointment";
  }

  render() {
    const select = document.createElement("select");
    select.id = "select-doctor";
    select.classList.add("form-select");

    const docs = ["Dentist", "Cardiologist", "Therapist"];

    docs.forEach((e) => {
      const option = document.createElement("option");
      option.value = e.toLowerCase();
      option.innerText = e;
      select.append(option);
    });

    return select;
  }

  standardQuestions(div) {
    this.repeat(div, this.purpose, "text", "purpose");
    this.repeatTextArea(
      div,
      this.shortDesc,
      "shortDesc",
      "form-control",
      "textarea"
    );

    //

    // Select

    this.label(div, "urgency", "form-label", this.urgency);

    const select = document.createElement("select");
    select.id = "urgency";
    const low = document.createElement("option");
    const medium = document.createElement("option");
    const high = document.createElement("option");

    low.innerHTML = "Low";
    medium.innerHTML = "Medium";
    high.innerHTML = "High";

    select.append(low);
    select.append(medium);
    select.append(high);

    select.required = true;
    select.classList.add("form-select");
    div.append(select);
    this.br(div);
    // Date

    this.label(div, "appointmentDate", "form-label", this.date);

    const input = document.createElement("input");
    input.type = "date";
    input.id = "appointmentDate";

    let date = new Date();
    let nowDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    input.setAttribute("min", nowDate);
    input.required = true;
    input.classList.add("form-control");
    div.append(input);
    this.br(div);
  }

  label(div, key, form, element) {
    const label = document.createElement("label");
    const br = document.createElement("br");
    label.innerHTML = element;
    label.classList.add(form);
    label.setAttribute("for", key);

    div.append(label);
  }

  br(div) {
    const br = document.createElement("br");
    div.append(br);
  }

  repeat(
    div,
    phrase,
    typeInp,
    elementsValue,
    classParm = "form-control",
    item = "input",
    requiredElem = true
  ) {
    const label = document.createElement("label");
    const br = document.createElement("br");
    label.innerHTML = phrase;
    label.classList.add("form-label");
    label.setAttribute("for", elementsValue);

    div.append(label);

    const input = document.createElement(item);
    input.type = typeInp;
    input.id = elementsValue;

    input.required = requiredElem;
    input.classList.add(classParm);
    label.classList.add("me-3");

    div.append(input);
    div.append(br);
  }

  repeatTextArea(
    div,
    phrase,
    elementsValue,
    classParm = "form-control",
    item = "input"
  ) {
    const label = document.createElement("label");
    const br = document.createElement("br");
    label.innerHTML = phrase;
    label.classList.add("form-label");
    label.setAttribute("for", elementsValue);

    div.append(label);

    const input = document.createElement(item);
    input.id = elementsValue;

    input.required = true;
    input.classList.add(classParm);
    label.classList.add("me-3");

    div.append(input);
    div.append(br);
  }
}

class VisitDentist extends Visit {
  constructor(purpose, shortDesc, urgency, personalInfo, date) {
    super(purpose, shortDesc, urgency, personalInfo, date);
    this.dateLastVisit = "Last Visit to the Doctor";
  }

  render() {
    const div = document.createElement("div");
    div.id = "doctor-form";

    this.standardQuestions(div);

    this.repeat(
      div,
      this.dateLastVisit,
      "date",
      "date",
      "form-control",
      "input"
    );

    return div;
  }
}

class VisitCardiologist extends Visit {
  constructor(purpose, shortDesc, urgency, personalInfo, date) {
    super(purpose, shortDesc, urgency, personalInfo, date);
    this.bloodPresure = "Your regular blood pressure";
    this.index = "Body mass index";
    this.pastDes = "Past diseases of the cardiovascular system";
    this.age = "Your age";
  }

  render() {
    const div = document.createElement("div");
    div.id = "doctor-form";

    this.standardQuestions(div);

    const label = document.createElement("label");

    this.repeat(div, this.bloodPresure, "number", "bloodPresure");
    this.repeat(div, this.index, "number", "fatIndex");
    this.repeat(
      div,
      this.pastDes,
      "checkbox",
      "pastDesease",
      "form-check-input",
      "input",
      false
    );
    this.repeat(div, this.age, "number", "age");

    return div;
  }
}

class VisitTherapist extends Visit {
  constructor(purpose, shortDesc, urgency, personalInfo, date) {
    super(purpose, shortDesc, urgency, personalInfo, date);
    this.age = "Your age";
  }

  render() {
    const div = document.createElement("div");
    div.id = "doctor-form";

    this.standardQuestions(div);

    this.repeat(div, this.age, "number", "age", "form-control", "input");

    return div;
  }
}

export { Visit, VisitDentist, VisitCardiologist, VisitTherapist };
