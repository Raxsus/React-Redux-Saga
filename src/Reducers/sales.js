import {GET_SALES_SUCCEEDED, GET_SALES_FAILED} from '../Actions'

export function salesReducer(state = {}, action) {
    switch (action.type) {
        case GET_SALES_SUCCEEDED:
            console.log(action);
            return action.data;
        default:
            return state
    }
}