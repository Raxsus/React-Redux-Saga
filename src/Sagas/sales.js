import {SagaGET, SagaPOST} from '../ApiHelpers'

import {
    GET_SALES_SUCCEEDED,
    GET_SALES_FAILED
} from '../Actions'

import { call, put } from 'redux-saga/effects'

export function* fetchSalesData(action) {
    try {

        const response = yield call(SagaGET, 'GetPublicSalesBanners', {
            saleCategoryID:'40f80218-a9e1-43c4-96ff-4c046d192a21',
            topSalesCount:100,
            useOzsaleSize:false,
            getPromotion:true,
            groupNo:action.groupNo || null,
            languageID:'en',
            countryID:'AS',
            userGroup:null
        });

        const data = (yield response.json()).d;


        yield put({type: GET_SALES_SUCCEEDED, data});
    } catch (error) {
        yield put({type: GET_SALES_FAILED, error});
    }
}