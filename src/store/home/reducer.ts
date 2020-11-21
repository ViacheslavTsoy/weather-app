import { AnyAction } from 'redux';
import { SET_COUNTRIES, SET_GEO_INFO, SET_STATUS, SET_WEATHER, WeatherState } from './types';
import { AsyncStatus } from '../../types/enums';

const initialState: WeatherState = {
    weatherList: [],
    countries: [],
    geo: { country_name: '' },
    status: AsyncStatus.Idle,
};

export const weatherReducer = (state: WeatherState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weatherList: action.data,
            };
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.data,
            };
        case SET_GEO_INFO:
            return {
                ...state,
                geo: action.info,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};
