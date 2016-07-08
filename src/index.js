import "babel-polyfill";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas'
import reducer from './reducers'
import {getSales} from './Actions'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch(getSales(-1));
// store.dispatch(getSales(0));
// store.dispatch(getSales(1));
// store.dispatch(getSales(2));
// store.dispatch(getSales(3));

