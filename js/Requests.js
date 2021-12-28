export default class Request {
  constructor(url) {
    this.url = url;
  }

  async get(endpoints, id = "") {
    const response = await this.fetchMethod("get", endpoints, id);
    const response_1 = await response.json();
    return response_1;
  }

  post(data, endpoints) {
    return this.fetchMethod("post", endpoints, "", data);
  }

  put(endpoints, id) {
    return this.fetchMethod("put", endpoints, id);
  }

  delete(endpoints, id) {
    return this.fetchMethod("delete", endpoints, id);
  }

  fetchMethod(method, endpoints, id, data = null) {
    return fetch(this.url + endpoints + "/" + id, {
      method: method,
      body: data,
      headers: { "Content-Type": "application/json" },
    });
  }
}
