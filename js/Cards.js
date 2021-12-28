import {ROOT, STATUS_OK} from "./Constants.js";
import request from './Requests.js';
import alertMessage from './Alert.js';

class Cards {

    constructor(visit) {
        this.visit = visit;
    }

    createCard() {
        const card = document.createElement('div')
        card.setAttribute('id', this.visit.id);
        card.className = "card border-info text-black bg-light mb-3";
        this.createHeader(card);
        this.createBody(card);
        this.createButtons(card);
        root.append(card);
        this.cardElement = card;
    }

    createHeader(card) {
        const cardHeader = document.createElement('div');
        cardHeader.className = "card-header";
        card.append(cardHeader);
        this.createTitle(cardHeader);
        this.createCloseIcon(cardHeader)
    }

    createTitle(cardHeader) {
        const cardHeaderTitle = document.createElement('span');
        cardHeaderTitle.className = "card-header__title";
        cardHeaderTitle.textContent = "Лікар: Кардіолог";
        cardHeader.append(cardHeaderTitle);
    }

    createCloseIcon(cardHeader) {
        const cardHeaderCloseCard = document.createElement('span');
        cardHeaderCloseCard.className = 'card-header__close-card';
        const cardHeaderCloseCardIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cardHeaderCloseCardIcon.setAttribute('height', '24px');
        cardHeaderCloseCardIcon.setAttribute('viewBox', '0 0 24 24');
        cardHeaderCloseCardIcon.setAttribute('width', '24px');
        cardHeaderCloseCard.append(cardHeaderCloseCardIcon);
        const cardHeaderCloseCardIconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );
        cardHeaderCloseCardIconPath.setAttribute('d', 'M0 0h24v24H0z');
        cardHeaderCloseCardIconPath.setAttribute('fill', 'none');
        cardHeaderCloseCardIcon.append(cardHeaderCloseCardIconPath);
        const cardHeaderCloseCardIconPathSecond = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );
        cardHeaderCloseCardIconPathSecond.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');
        cardHeaderCloseCardIcon.append(cardHeaderCloseCardIconPathSecond);
        cardHeader.append(cardHeaderCloseCard);
        cardHeaderCloseCardIcon.addEventListener("click", this.deleteCardExecuted.bind(event, this));

    }

    createBody(card) {
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const cardBodyTitle = document.createElement('h5');
        cardBodyTitle.className = 'card-body__title';
        cardBodyTitle.textContent = 'Пацієнт: Іванов Петро';
        cardBody.append(cardBodyTitle);
        this.createAdditionalInfo(cardBody)
        card.append(cardBody);
    }

    createButtons(card) {
        this.createOneBtn('btn btn-info', 'Показати більше', this.showAdditionalInfo, card);
        this.createOneBtn('btn btn-warning', 'Редагувати', this.editCard, card);
    }

    createOneBtn(className, textContent, functionForListener, card) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.type = 'button';
        showMoreBtn.className = className;
        showMoreBtn.textContent = textContent;
        showMoreBtn.addEventListener("click", functionForListener.bind(event, this))
        card.append(showMoreBtn);
    }

    showAdditionalInfo(element) {
        element.additionalInfo.classList.replace('hide-element', 'show-element');
    }

    editCard() {
        console.log('edit card');
    }

    deleteCardExecuted(element) {
        console.log(element);
        request.delete(element.visit.id).then(response => {
            if (response.status === STATUS_OK) {
                element.cardElement.remove();
                deleteCardFromStorage(element.visit.id);
                if (checkStorage()) {
                    renderNoDataExist();
                }
                alertMessage(`Card was deleted successful`, 'alert-info');
            }
        }).catch((error) => {
            alertMessage(`Technical error`, 'alert-danger');
        });
    };

    createAdditionalInfo(cardBody) {
        const additionalInfo = document.createElement('span');
        additionalInfo.className = "additional-info hide-element"
        additionalInfo.textContent = 'інформація 1,інформація 2,інформація 3,інформація 4'
        cardBody.append(additionalInfo)
        this.additionalInfo = additionalInfo;
        const allKeys = Object.keys(this.visit);
        console.log(allKeys);
    }

}


function getAllCards() {
    request.get().then(response => response.json()).then(answ => {
        if (answ.length > 0) {
            alertMessage(`Received ${answ.length} card(s)`, 'alert-info');
            addCardForStorage(answ);
            answ.forEach(el => {
                const noData = document.getElementById('no-data');
                if (noData) {
                    noData.remove();
                }
                let cars = new Cards(el);
                cars.createCard();
            })
        } else {
            alertMessage(`There are no cards`, 'alert-info');
            renderNoDataExist();
        }
    }).catch((error) => {
        alertMessage(`Technical error`, 'alert-danger');
    });
}

function deleteCardFromStorage(elId) {
    const listOfCards = JSON.parse(localStorage.getItem('cards'));
    console.log(listOfCards);
    const newArray = listOfCards.filter(el => el.id !== elId);
    addCardForStorage(newArray);
}

function addCardForStorage(data) {
    localStorage.setItem('cards', JSON.stringify(data));
}

function checkStorage() {
    const listOfCards = JSON.parse(localStorage.getItem('cards'));
    console.log(listOfCards);
    console.log(listOfCards.length);
    return listOfCards && listOfCards.length === 0;
}

function renderNoDataExist() {
    const nodataInfo = document.createElement('p');
    nodataInfo.setAttribute('id', 'no-data');
    nodataInfo.textContent = 'No items have been added';
    ROOT.append(nodataInfo);
}

export {
    Cards, getAllCards, renderNoDataExist
};
