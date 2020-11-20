import {takeEvery, call, put, all, select} from "redux-saga/effects";


function* saga(action: { type: string, data: any }) {
   yield console.log('saga')
}

export function* watchHome() {
    yield takeEvery("SOME_ACTION", saga);
}
