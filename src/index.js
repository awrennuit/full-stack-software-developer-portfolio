import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* watcherSaga() {
  yield takeEvery(`GET_THING`, getSaga);
  yield takeEvery(`POST_THING`, postSaga);
}

// GET thing
function* getSaga(action){
  try{
      // const getResponse = yield axios.get(`/portfolio`, action.payload);
      // yield put({type: `SET_THING`, payload: getResponse.data});
  }
  catch(error){
      console.log('error in GET', error);
  }
}

// POST thing
function* postSaga(action){
  try{
      // yield axios.post(`/portfolio`, action.payload);
      yield put({type: `GET_THING`});
  }
  catch(error){
      console.log('error in POST', error);
  }
}

// Does a thing
const reducer = (state=[], action) => {
  if(action.type === `SET_THING`){
    return action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    reducer
}),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();