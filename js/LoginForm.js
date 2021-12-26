import Modal from './Modal.js';
import Requests from './Requests.js';
import alertMessage from './Alert.js';


export default class LoginForm {
  constructor(){
    this.render();
  }

  
  // creates input
  inputCreate(element, type, text, id) {
    const inputWrap = document.createElement('div');
    inputWrap.classList.add('mb-3');

    const label = document.createElement('label');
    label.classList.add('form-label');
    label.setAttribute('for', id);
    label.textContent = text;

    const input = document.createElement(element);
    input.classList.add('form-control');
    input.type = type;
    input.id = id;

    inputWrap.append(label, input);

    return inputWrap;
  }



  render() {
    const form = document.createElement('form')
    // fields
    const email = this.inputCreate(
      'input',
      'email',
      'Email address',
      'input_email'
    );
    const password = this.inputCreate(
      'input',
      'password',
      'Password',
      'input_password'
    );

    const submit = document.createElement('button');
    submit.classList.add('btn', 'btn-primary');
    submit.textContent = 'Войти';

    form.append(email, password, submit);

   

    this.loginModal = new Modal(form);

    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitHandler(email, password);
    });


  }

  submitHandler(email, password) {
    

    // придумать лучший способ вытягивать данные
    const emailVal = email.childNodes[1].value;
    const passwordVal = password.childNodes[1].value;

    const request = new Requests();
    request.login({ email: emailVal, password: passwordVal })

    .then(resp =>  {
      if (resp.status !== 200) {
        resp.text().then(data => {
          alertMessage(data, 'alert-danger');
        });
        throw { code: resp };
        return
      }
      console.log(resp);
      resp.text()
        .then(data => {
          // сохраняем данные
          localStorage.setItem('token', data);
          
          // загрузка страницы залогиненого пользователя
          // fetch за всеми карточками
          // request.posts()

          request.get()
          .then(resp => resp.json())
          .then(data => console.log(data))
          .catch(e => console.log(e))


          // скрываем модальное
          this.loginModal.remove();
      
        })
    })
    .catch( e => console.log(e));


  }
}
