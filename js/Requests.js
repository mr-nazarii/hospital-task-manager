class Requests {
    constructor(url) {
        this.url = url;
    }

    delete(id, endpoint) {
        return this.fetchMethod('delete', null, id);
    }

    put(data, id) {
        return this.fetchMethod('put', data, id);
    }

    get(endpoint, id = "") {
        return this.fetchMethod('get');
    }

    post(data, endpoint) {
        // console.log(data);
        // console.log(endpoint);
        return this.fetchMethod("post", data);
    }

    fetchMethod(method, data = null, id = '') {
        return fetch(this.url + '/' + id, {
            method: method,
            body: data,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        });
    }
}

export default Requests;