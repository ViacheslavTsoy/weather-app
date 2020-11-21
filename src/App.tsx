import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux";
import {rootSagas} from "./store/RootSaga";
import rootReducer from "./store/RootReducer";
import {Routes} from "./Routes";
import './i18n';
import {GlobalStyle} from "./styles/global";

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSagas);
  return (
      <Provider store={store}>
          <GlobalStyle/>
          <Routes/>
      </Provider>
  );
}
