import {GET_WEATHER, SET_WEATHER, GET_COUNTRIES, SET_COUNTRIES, GET_GEO_INFO, SET_GEO_INFO, SET_HISTORY_LIST} from "./types";

export function getWeather(params: {[key: string]: string}) {
    return {type: GET_WEATHER, params}
}

export function setWeather(data: any) {
    return {type: SET_WEATHER, data}
}

export function setHistoryList(data: any) {
    return {type: SET_HISTORY_LIST, data}
}

export function getCountries() {
    return {type: GET_COUNTRIES}
}

export function setCountries(data: any) {
    return {type: SET_COUNTRIES, data}
}

export function getGeoInfo() {
    return {type: GET_GEO_INFO}
}

export function setGeoInfo(info: any) {
    return {type: SET_GEO_INFO, info}
}
