export const GET_SALES = 'GET_SALES';
export const GET_SALES_SUCCEEDED = 'GET_SALES_SUCCEEDED';
export const GET_SALES_FAILED = 'GET_SALES_FAILED';

export function getSales(groupNo) {
    return { type: GET_SALES, groupNo }
}

export function getSalesSucceeded() {
    return { type: GET_SALES_SUCCEEDED }
}

export function getSalesFailed() {
    return { type: GET_SALES_FAILED }
}