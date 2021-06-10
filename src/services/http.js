import axios from 'axios';

class Http {
  #baseUrl = 'http://localhost:3000/';

  get(model, params = {}) {
    if (!model) {
      return new Error('model name does not given');
    }

    return axios.request({
      baseURL: this.#baseUrl,
      method: 'get',
      url: model,
      params,
    });
  }

  post(model, data = {}) {
    if (!model) {
      return new Error('model name does not given');
    }

    return axios.request({
      baseURL: this.#baseUrl,
      method: 'post',
      url: model,
      data,
    });
  }

  remove(model, id) {
    if (!model || !id) {
      return new Error('model or id does not given');
    }

    return axios.request({
      baseURL: this.#baseUrl,
      method: 'delete',
      url: `${model}/${id}`,
    });
  }

  put(model, id, data) {
    if (!model || !id) {
      return new Error('model or id does not given');
    }

    return axios.request({
      baseURL: this.#baseUrl,
      method: 'put',
      url: `${model}/${id}`,
      data,
    });
  }
}

export default new Http;