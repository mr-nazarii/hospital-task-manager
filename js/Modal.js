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

// var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
//   backdrop: true,
// })

// document.getElementById('login').addEventListener(() => {
//   myModal.show();
//   console.log(myModal);
// })

// renderModal() {

//   const modalWrap = document.createElement('div');
//   // modal.classList.add('modal');
//   // modal.setAttribute('tabindex','-1');

//   // const modalDialog = document.createElement('div');
//   // modalDialog.classList.add('modal-dialog');

//   // const moda
//   // modal.classList.add('modal', 'fade');

//   modalWrap.innerHTML = `
//     <div class="modal fade" tabindex="-1">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title">Modal title</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//             ${this.element.outerHTML}
//           </div>
//         </div>
//       </div>
//     </div>
//   `

//   document.body.append(modalWrap);

//   const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));

//   modal.show();

// }
