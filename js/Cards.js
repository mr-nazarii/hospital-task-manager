export default class Cards {
    constructor(arrCards, root) {
        this.arrCards = arrCards;
        this.root = root;
        this.list = this.createList()
    }

    createList() {
        let ol = document.createElement('ol');
        this.root.append(ol);
        return ol;
    }

    createCards() {


        this.arrCards.forEach(({ id, title, description, status, urgency }) => {
            const liCard = document.createElement('li');
            console.log(id);
            liCard.id = id;

            let idH3 = document.createElement('h3');
            idH3.textContent = `id: ${id}`;

            let titleH3 = document.createElement('h3');
            titleH3.textContent = title;

            let descriptionP = document.createElement('p');
            descriptionP.textContent = `description: ${description}`;

            let statusP = document.createElement('p');
            statusP.textContent = `status: ${status}`;

            let urgencyP = document.createElement('p');
            urgencyP.textContent = `urgency: ${urgency}`;

            liCard.append(idH3, titleH3, descriptionP, statusP, urgencyP)
            this.list.append(liCard);
        });

    }
}