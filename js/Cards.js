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


        this.arrCards.forEach(({ id, purpose, shortDesc, appointmentDate, urgency }) => {
            const liCard = document.createElement('li');
            // console.log(id);
            liCard.id = id;

            let idH3 = document.createElement('h3');
            idH3.textContent = `id: ${id}`;

            let purposeH3 = document.createElement('h3');
            purposeH3.textContent = purpose;

            let shortDescP = document.createElement('p');
            shortDescP.textContent = `shortDesc: ${shortDesc}`;

            let appointmentDateP = document.createElement('p');
            appointmentDateP.textContent = `appointmentDate: ${appointmentDate}`;

            let urgencyP = document.createElement('p');
            urgencyP.textContent = `urgency: ${urgency}`;

            liCard.append(idH3, purposeH3, shortDescP, appointmentDateP, urgencyP)
            this.list.append(liCard);
        });

    }
}