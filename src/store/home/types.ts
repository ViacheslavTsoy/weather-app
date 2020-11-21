import { ValueType } from '../../components/ReactSelect';
import { AsyncStatus } from '../../types/enums';

export interface WeatherState {
    weatherList: DayProps[];
    countries: ValueType[];
    geo: GeoProps;
    status: AsyncStatus
}

export interface GeoProps {
    country_name: string
}

export interface WeatherProps {
    icon: string
    id: string
    description: string
}

export interface DayProps {
    dt_txt: string;
    main: { temp: number; }
    weather: WeatherProps[]
}

export const SET_STATUS = 'home/SET_STATUS';

export const GET_WEATHER = 'weather/GET_WEATHER';
export const SET_WEATHER = 'weather/SET_WEATHER';

export const GET_COUNTRIES = 'countries/GET_COUNTRIES';
export const SET_COUNTRIES = 'countries/SET_COUNTRIES';

export const GET_GEO_INFO = 'user/GET_GEO_INFO';
export const SET_GEO_INFO = 'user/SET_GEO_INFO';
