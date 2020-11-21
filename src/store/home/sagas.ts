import {takeEvery, call, put, select} from "redux-saga/effects";
import {GET_COUNTRIES, GET_GEO_INFO, GET_WEATHER} from "./types";
import {weatherApi} from "../../api/weather";
import {setCountries, setGeoInfo, setHistoryList, setWeather} from "./actions";
import {countriesApi} from "../../api/countries";
import moment from 'moment'


function* weatherSaga(action: { type: string, params: {[key: string]: string} }) {
    try {
        const {data} = yield call(weatherApi.get, action.params);
        const dailyData = data.list.filter((reading: any) => reading.dt_txt.includes("12:00:00"));
        const selectedCountry = dailyData.filter((item: any) => item.dt_txt.includes(moment().format('YYYY-MM-DD') ));
        const pushToHistory = [{city: data.city.name, weather: selectedCountry}];
        yield put(setHistoryList(pushToHistory));
        yield put(setWeather(dailyData))
    } catch (e) {
        console.log(e)
    }
}

function* countriesSaga() {
    try {
        const {data} = yield call(countriesApi.get);
        if(data && data.length) {
            const countriesOptions = data.map((item: any) => {
                return {
                    value: item.name,
                    label: item.name
                }
            })
            yield put(setCountries(countriesOptions))
        }
    } catch (e) {
        console.log(e)
    }
}

function* geoInfoSaga() {
    try {
        const {data} = yield call(countriesApi.getGeoInfo);
        yield put(setGeoInfo(data))
    } catch (e) {
        console.log(e)
    }
}

export function* watchWeather() {
    yield takeEvery(GET_WEATHER, weatherSaga);
    yield takeEvery(GET_COUNTRIES, countriesSaga);
    yield takeEvery(GET_GEO_INFO, geoInfoSaga);
}
