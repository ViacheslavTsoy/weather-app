import { all } from 'redux-saga/effects';
import { watchWeather } from './home/sagas';

export function* rootSagas() {
    yield all([
        watchWeather(),

    ]);
}
