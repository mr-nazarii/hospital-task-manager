class Templates {
  constructor() {
    this.root = document.getElementById('root')
  }
  loadHeader(newBtn) {
    const btnCreate = document.createElement('button')
    btnCreate.classList.add('btn', 'btn-primary');
    btnCreate.id = 'createVisit';
    btnCreate.textContent = "Create Visit";

    btnCreate.addEventListener('click', () => {
      // ТУТ вызывается модальное для вызова карточки
    })

    newBtn.after(btnCreate);
    newBtn.remove();

  }

  loadBody(data) {
    this.root.append(data)
  }
  
}


export default new Templates;
