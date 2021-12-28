"use strict";
import {Cards as Cards, getAllCards} from "./Cards.js";
import Requests from "./Requests.js";
import {BASE_URL, CARDS_URL, ROOT} from "./Constants.js";
//
//
// const constAllDataResponse = fetch(BASE_URL + CARDS_URL,
//     {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             'Accept': 'application/json',
//             'Authorization': 'Bearer ced8be37-1946-4c27-bef1-c539280ffb2c'
//         },
//     }).then(response => response.json()).then(answ => {
//     console.log(answ);
// })

getAllCards();

// const cards = new Cards({visitId: '3325'})
// cards.createCard();
// const cards2 = new Cards({visitId: '3326'})
// cards2.createCard();
// const cards3 = new Cards({visitId: '3327'})
// cards3.createCard();
// const cards4 = new Cards({visitId: '3328'})
// cards4.createCard();