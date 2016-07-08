import { call } from 'redux-saga/effects'

const serverUrl = 'http://localhost:10005';

export const SagaGET = (method, data) => {
    let url =  new URL(`${serverUrl}/handler.ashx/${method}`);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {method: 'GET'});
};

export const SagaPOST = (method, data) => {
    let url =  new URL(`${serverUrl}/CocosaService.asmx/${method}`);
    return fetch(url, {method: 'POST', body: data || {}});
};