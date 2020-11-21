import {ValueType} from "../../components/ReactSelect";

export interface WeatherState {
    list: Array<{}>;
    countries: Array<ValueType>;
    geo: any;
    history: any
}

export const GET_WEATHER = 'weather/GET_WEATHER';
export const SET_WEATHER = 'weather/SET_WEATHER';
export const GET_COUNTRIES = 'countries/GET_COUNTRIES';
export const SET_COUNTRIES = 'countries/SET_COUNTRIES';
export const GET_GEO_INFO = 'user/GET_GEO_INFO';
export const SET_GEO_INFO = 'user/SET_GEO_INFO';
export const SET_HISTORY_LIST = 'user/SET_HISTORY_LIST';
