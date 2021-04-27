import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

function httpGet(model, params = {}) {
  if (!model) {
    return new Error('model name does not given');
  }

  return axios.request({
    baseURL: baseUrl,
    method: 'get',
    url: model,
    params,
  });
}

function httpPost(model, data = {}) {
  if (!model) {
    return new Error('model name does not given');
  }

  return axios.request({
    baseURL: baseUrl,
    method: 'post',
    url: model,
    data,
  });
}

function remove(model, id) {
  if (!model || !id) {
    return new Error('model or id does not given');
  }

  return axios.request({
    baseURL: baseUrl,
    method: 'delete',
    url: `${model}/${id}`,
  });
}

function put(model, id, data) {
  if (!model || !id) {
    return new Error('model or id does not given');
  }

  return axios.request({
    baseURL: baseUrl,
    method: 'put',
    url: `${model}/${id}`,
    data,
  });
}

export { httpGet, httpPost, put, remove };