import { AnyAction } from "redux";
import {SET_COUNTRIES, SET_GEO_INFO, SET_HISTORY_LIST, SET_WEATHER, WeatherState} from "./types";

const initialState: WeatherState = {
    list: [],
    countries: [],
    geo: {},
    history: []
};

export const weatherReducer = (state: any= initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                list: action.data
            };
            case SET_COUNTRIES:
            return {
                ...state,
                countries: action.data
            };
            case SET_GEO_INFO:
            return {
                ...state,
                geo: action.info
            };
            case SET_HISTORY_LIST:
            return {
                ...state,
                history: state.history.concat(action.data)
            };
        default:
            return state;
    }
};
