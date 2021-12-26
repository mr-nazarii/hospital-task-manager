import {BASE_URL, CARDS_URL, ROOT} from "./Constants.js";


class Cards {

    constructor(visit) {
        this.visit = visit;
    }

    render() {

    }

    createCard() {
        const card = document.createElement('div')
        card.setAttribute('id', this.visit.visitId);
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
        const additionalInfo = document.createElement('span');
        additionalInfo.className = "additional-info hide-element"
        additionalInfo.textContent = 'інформація 1,інформація 2,інформація 3,інформація 4'
        cardBody.append(additionalInfo)
        this.additionalInfo = additionalInfo;
        card.append(cardBody);
    }

    createButtons(card) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.type = 'button';
        showMoreBtn.className = 'btn btn-info';
        showMoreBtn.textContent = 'Показати більше';
        card.append(showMoreBtn);
        showMoreBtn.addEventListener("click", this.showAdditionalInfo.bind(event, this))
        const showEdit = document.createElement('button');
        showEdit.type = 'button';
        showEdit.className = 'btn btn-warning';
        showEdit.textContent = 'Редагувати';
        card.append(showMoreBtn);
        card.append(showEdit);
    }

    showAdditionalInfo(element) {
        element.additionalInfo.classList.replace('hide-element', 'show-element');
    }

    deleteCardExecuted(element) {
        element.cardElement.remove();
    };

}

export {
    Cards
};
