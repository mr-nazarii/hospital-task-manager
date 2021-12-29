'use strict';

import { ROOT, BASE_URL as URL } from "./Constants.js";
import Filter from './Filter.js'
import { getFilter } from './Filter.js';


import Requests from './Requests.js';
import Cards from './Cards.js';
import Token from './Token.js';
import { loginData } from './Token.js';


getFilter();

const root = document.getElementById('root');

// localStorage.removeItem('token')

if (!localStorage.getItem('token')) {
    let token = new Token(URL);
    token.getToken(loginData);
}


const visit =
// {
//     purpose: 'К кардиологу',
//     shortDesc: 'Консультация',
//     appointmentDate: '2021-12-30',
//     doctor: 'Cardiologist',
//     // status: 'open',
//     urgency: 'Medium',
//     bp: '34',
//     age: 35,
//     weight: 80
// }
// {
//     purpose: 'Визит к стоматологу',
//     shortDesc: 'Плановый визит',
//     doctor: 'Dentist',
//     appointmentDate: '2022-01-11',
//     urgency: 'High',
//     bp: '28',
//     age: 38,
//     weight: 77
// }
// {
//     purpose: 'Визит к терапевту',
//     shortDesc: 'медицинский осмотр',
//     doctor: 'Therapist',
//     appointmentDate: '2021-11-11',
//     urgency: 'Low',
//     bp: '22',
//     age: 30,
//     weight: 75
// }
// {
//     purpose: 'Визит к стоматологу',
//     shortDesc: 'Плановый визит',
//     doctor: 'Dentist',
//     appointmentDate: '2021-10-10',
//     urgency: 'Medium',
//     bp: '27',
//     age: 34,
//     weight: 80
// }
{
    purpose: 'Визит к кардиологу',
    shortDesc: 'Плановый визит',
    doctor: 'Cardiologist',
    appointmentDate: '2022-01-10',
    urgency: 'High',
    bp: '24',
    age: 23,
    weight: 70
};


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
        // console.log(data);
        localStorage.setItem('myTestCards', JSON.stringify(data));
        let storageCards = JSON.parse(localStorage.getItem('myTestCards'));
        // console.log(storageCards);
        let cards = new Cards(data, root);
        cards.createCards();
    });

