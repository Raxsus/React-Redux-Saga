import {GET_SALES} from '../Actions'
import {fetchSalesData} from './sales'

import { takeEvery, takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'

export function* rootSaga() {
    // yield fork(takeLatest, GET_SALES, fetchSalesData);
    yield takeEvery(GET_SALES, fetchSalesData);
}