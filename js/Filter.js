
class Filter {
    constructor(root, cards) {
        this.cards = cards;
        this.root = root;
    }

    createSearchForm() {
        let container = document.createElement('div');
        container.className = 'container border rounded py-2 my-3 bg-light mx-auto justify-content-md-center';

        let searchForm = document.createElement('form');
        searchForm.id = 'form-search';
        searchForm.className = 'row justify-content-md-center';

        this.createInputSearchForm(searchForm);
        // this.createStatusSearchForm(searchForm);
        // this.createUrgencySearchForm(searchForm);
        this.createSelectSearchForm(searchForm, 'status', ['all', 'open', 'done']);
        this.createSelectSearchForm(searchForm, 'urgency', ['all', 'high', 'normal', 'low']);
        this.createButtonSearchForm(searchForm);

        container.prepend(searchForm);
        this.root.prepend(container);

    }

    createInputSearchForm(searchForm) {
        let wrapTitleSearch = document.createElement('div');
        wrapTitleSearch.className = 'mb-3 col-md-4';

        let labelTitleSearch = document.createElement('label');
        labelTitleSearch.setAttribute('for', 'input-title-search-id');
        labelTitleSearch.className = 'form-label';
        labelTitleSearch.textContent = 'Search by title';

        let inputTitleSearch = document.createElement('input');
        inputTitleSearch.id = 'input-title-search-id';
        inputTitleSearch.className = 'form-control';
        inputTitleSearch.setAttribute('type', 'text');

        wrapTitleSearch.append(labelTitleSearch, inputTitleSearch);
        searchForm.append(wrapTitleSearch);
    }

    // createStatusSearchForm(searchForm) {
    //     let wrapStatusSearch = document.createElement('div');
    //     wrapStatusSearch.className = 'mb-3 col-md-3';

    //     let labelStatusSearch = document.createElement('label');
    //     labelStatusSearch.setAttribute('for', 'status-search-id');
    //     labelStatusSearch.className = 'form-label';
    //     labelStatusSearch.textContent = 'Select status';

    //     let selectStatusSearch = document.createElement('select');
    //     selectStatusSearch.id = 'status-search-id';
    //     selectStatusSearch.className = 'form-select';
    //     selectStatusSearch.setAttribute('aria-label', 'select-status');

    //     this.createSelectOptions(['all', 'open', 'done'], selectStatusSearch);

    //     selectStatusSearch[0].selected = true;
    //     wrapStatusSearch.append(labelStatusSearch, selectStatusSearch);
    //     searchForm.append(wrapStatusSearch);
    // }

    // createUrgencySearchForm(searchForm) {
    //     let wrapUrgencySearch = document.createElement('div');
    //     wrapUrgencySearch.className = 'mb-3 col-md-3';

    //     let labelUrgencySearch = document.createElement('label');
    //     labelUrgencySearch.setAttribute('for', 'urgency-search-id');
    //     labelUrgencySearch.className = 'form-label';
    //     labelUrgencySearch.textContent = 'Select urgency';

    //     let selectUrgencySearch = document.createElement('select');
    //     selectUrgencySearch.id = 'urgency-search-id';
    //     selectUrgencySearch.className = 'form-select';
    //     selectUrgencySearch.setAttribute('aria-label', 'select-urgency');

    //     this.createSelectOptions(['all', 'high', 'normal', 'low'], selectUrgencySearch);

    //     selectUrgencySearch[0].selected = true;
    //     wrapUrgencySearch.append(labelUrgencySearch, selectUrgencySearch);
    //     searchForm.append(wrapUrgencySearch);
    // }

    createSelectSearchForm(searchForm, selectName, options) {
        let selectWrap = document.createElement('div');
        selectWrap.className = 'mb-3 col-md-3';

        let label = document.createElement('label');
        label.setAttribute('for', `${selectName}-search-id`);
        label.className = 'form-label';
        label.textContent = `Select ${selectName}`;

        let select = document.createElement('select');
        select.id = `${selectName}-search-id`;
        select.className = 'form-select';
        select.setAttribute('aria-label', `select-${selectName}`);

        this.createSelectOptions(options, select);

        select[0].selected = true;
        selectWrap.append(label, select);
        searchForm.append(selectWrap);
    }

    createSelectOptions(options, select) {
        options.forEach((elValue) => {
            let option = document.createElement('option');
            option.value = elValue;
            option.textContent = elValue;
            select.append(option);
        });
    }

    createButtonSearchForm(searchForm) {
        let btnWrap = document.createElement('div');
        btnWrap.className = 'mb-3 col-md-2 d-flex align-items-end';

        let buttonSearch = document.createElement('input');
        buttonSearch.id = 'button-search-form-id';
        buttonSearch.className = 'btn btn-primary px-4';
        buttonSearch.type = 'submit';
        buttonSearch.value = 'Search';

        btnWrap.append(buttonSearch);
        searchForm.append(btnWrap);

    }

}

export default Filter
