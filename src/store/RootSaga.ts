import { all } from 'redux-saga/effects';
import {watchHome} from "./home/sagas";

export function* rootSagas() {
    yield all([
        watchHome()

    ]);
}
