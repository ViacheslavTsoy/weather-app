import {
    GET_WEATHER,
    SET_WEATHER,
    GET_COUNTRIES,
    SET_COUNTRIES,
    GET_GEO_INFO,
    SET_GEO_INFO,
    SET_STATUS, DayProps, GeoProps,
} from './types';
import { AsyncStatus } from '../../types/enums';
import { ValueType } from '../../components/ReactSelect';

export function getWeather(params: { [key: string]: string }) {
    return { type: GET_WEATHER, params };
}

export function setWeather(data: DayProps[]) {
    return { type: SET_WEATHER, data };
}

export function getCountries() {
    return { type: GET_COUNTRIES };
}

export function setCountries(data: ValueType[]) {
    return { type: SET_COUNTRIES, data };
}

export function getGeoInfo() {
    return { type: GET_GEO_INFO };
}

export function setGeoInfo(info: GeoProps) {
    return { type: SET_GEO_INFO, info };
}

export function setStatus(status: AsyncStatus) {
    return { type: SET_STATUS, status };
}
