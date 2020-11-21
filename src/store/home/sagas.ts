import { call, put, select, takeEvery } from 'redux-saga/effects';
import { DayProps, GET_COUNTRIES, GET_GEO_INFO, GET_WEATHER } from './types';
import { weatherApi } from '../../api/weather';
import { setCountries, setGeoInfo, setStatus, setWeather } from './actions';
import { countriesApi } from '../../api/countries';
import moment from 'moment';
import { AsyncStatus } from '../../types/enums';
import { setHistoryList } from '../history/actions';
import { HistoryListProps } from '../history/types';


function* weatherSaga(action: { type: string, params: { [key: string]: string } }) {
    try {
        yield put(setStatus(AsyncStatus.Loading));
        const { data } = yield call(weatherApi.get, action.params);
        const dailyData = data.list.filter((reading: DayProps) => moment(reading.dt_txt).utc().format().includes('12:00:00'));
        const selectedCountry = dailyData.filter((item: DayProps) => {
            return item.dt_txt.includes(moment().format('YYYY-MM-DD'));
        });
        const historyItem = selectedCountry.map((item: DayProps) => {
            return {
                city: data.city.name,
                date: moment().format('LLL'),
                temp: item.main.temp,
                description: item.weather[0].description,
            };
        });
        const state = yield select();
        const historyList = state.history.list.concat(historyItem);
        const uniqProducts = historyList.filter((item: HistoryListProps, index: number, self: any) => {
                return index === self.findIndex((t: HistoryListProps) => (
                    t.city === item.city
                ));
            },
        );
        yield put(setHistoryList(uniqProducts));
        yield put(setWeather(dailyData));
    } catch (e) {
        console.log(e);
    } finally {
        yield put(setStatus(AsyncStatus.Idle));
    }
}

function* countriesSaga() {
    try {
        const { data } = yield call(countriesApi.get);
        if (data && data.length) {
            const countriesOptions = data.map((item: { name: string }) => {
                return {
                    value: item.name,
                    label: item.name,
                };
            });
            yield put(setCountries(countriesOptions));
        }
    } catch (e) {
        console.log(e);
    }
}

function* geoInfoSaga() {
    try {
        const { data } = yield call(countriesApi.getGeoInfo);
        yield put(setGeoInfo(data));
    } catch (e) {
        console.log(e);
    }
}

export function* watchWeather() {
    yield takeEvery(GET_WEATHER, weatherSaga);
    yield takeEvery(GET_COUNTRIES, countriesSaga);
    yield takeEvery(GET_GEO_INFO, geoInfoSaga);
}
