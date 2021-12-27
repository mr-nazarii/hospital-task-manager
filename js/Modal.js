export default class Modal {
  constructor(element) {
    this.element = element;
    this.render(element);
  }

  render() {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('tabindex', '-1');

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const closeModal = document.createElement('button');
    closeModal.classList.add('btn-close');
    closeModal.setAttribute('data-bs-dismiss', 'modal');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    // modalTitle.textContent = title;

    // тут добавлю в модальное переданный параметр
    modalBody.append(this.element);

    // console.log(newModal)
    modal.append(modalDialog);
    modalDialog.append(modalContent);
    modalContent.append(modalHeader, modalBody);
    modalHeader.append(closeModal);

    // document.body.append(modal);

    this.newModal = new bootstrap.Modal(modal);

    this.newModal.show();

    modal.addEventListener('hidden.bs.modal', (e) => {
      modal.remove();
    });


  }

  remove() {
    this.newModal.hide();
  }
  
}


