import alertMessage from './Alert.js';
import LoginForm from './LoginForm.js';



document.getElementById('login').addEventListener('click', () => {
  const login = new LoginForm();
});




// console.log(login.render());

// class App {

//   constructor() {
//     this.token = localStorage.getItem('token');
//     this.cardsData = localStorage.getItem('data');
//   }

//   checkData() {
//     if(this.token || this.cardsData){
//       this.buildPage();
//     } else {

//     }
//   }
//   buildPage() {

//   }

// }

// class App{
//   constructor(){
//     this.token = localStorage.getItem('token');
//     this.cardsData = localStorage.getItem('cards');
//     this.loadPage();
//   }

//   loadPage() {
//     // header button update
//     const actionBtn = document.getElementById('login');
//     actionBtn.id = 'createVisit';
//     actionBtn.textContent = "Create Visit";
//   }

//   loadHeader() {

//   }

//   loadBody(authorization) {
//     // fetch('https://ajax.test-danit.com/api/v2/cards', {
//     //   method: 'GET',
//     //   headers: {
//     //     'Authorization': `Bearer beba4fa4-410b-4768-82b3-2397d3ba8070`
//     //   },
//     // })
//     // .then(resp => resp.json())
//     // .then(data => console.log(data))
//     // .catch(e => console.log(e))

//   }

//   // _authorization() {

//   //   const code = localStorage.getItem('myCat');

//   //   console.log(code);

//   //   if(code === null){

//   //     return code;

//   //   } else {

//   //     alert('load data');

//   //     // fetch  получить данные с сервера используя код

//   //     //  ----   if yes (load data)  пустой/полный  и изменить кнопку на добавить данные

//   //     //  ----   if no вывести ошибку и загрузить страницу логина

//   //     return code;
//   //   }
//   // }

//   renderCards() {
//     // -----   if пустые

//     // сообщение "карточек ещё нет"

//     // if есть карточки
//       // карточки грузятся из local storage

//   }

// }

// const runApp = new App();
// console.log(runApp.authorization);
// console.log(runApp.cards);

// console.log(runApp.authorization)

// нужно:

// Добавить класс с ошибкой в верхней части экрана
// добавить класс с
