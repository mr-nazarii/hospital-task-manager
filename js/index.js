'use strict';

import { ROOT, BASE_URL as URL } from "./Constants.js";
import Filter from './Filter.js'

import Requests from './Requests.js';
import Cards from './Cards.js';
import Token from './Token.js';
import { loginData } from './Token.js';

let filter = new Filter(ROOT);
filter.createSearchForm();


const root = document.getElementById('root');

// localStorage.removeItem('token')

console.log(loginData);
if (!localStorage.getItem('token')) {
    let token = new Token(URL);
    token.getToken(loginData);
}


const visit =
{
    title: 'Визит к кардиологу',
    description: 'Плановый визит',
    doctor: 'Cardiologist',
    status: 'open',
    urgency: 'high',
    bp: '24',
    age: 23,
    weight: 70
}
// {
//     title: 'Визит к стоматологу',
//     description: 'Плановый визит',
//     doctor: 'Dentist',
//     status: 'open',
//     urgency: 'high',
//     bp: '28',
//     age: 38,
//     weight: 77
// }
/* {
    title: 'Визит к терапевту',
    description: 'медицинский осмотр',
    doctor: 'Therapist',
    status: 'open',
    urgency: 'low',
    bp: '22',
    age: 30,
    weight: 75
} */;


// let requestPost = new Requests(URL);
// requestPost.post(JSON.stringify(visit)).then(request => request.json()).then(data => console.log(data));


// let delRequest = new Requests(URL);
// delRequest.delete(37799).then(request => console.log(request));

// let requestPut = new Requests(URL);
// requestPut.put(JSON.stringify(visit), '37727').then(request => request.json()).then(data => console.log(data));



let getRequest = new Requests(URL);
getRequest.get()
    .then(request => request.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('myTestCards', JSON.stringify(data));
        let storageCards = JSON.parse(localStorage.getItem('myTestCards'));
        console.log(storageCards);
        let cards = new Cards(data, root);
        cards.createCards();
    });

