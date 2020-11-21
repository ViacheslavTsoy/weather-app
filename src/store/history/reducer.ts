import { AnyAction } from "redux";
import {HistoryState, SET_HISTORY_LIST,} from "./types";

const initialState: HistoryState = {
    list: [],
};

export const historyReducer = (state: HistoryState = initialState, action: AnyAction) => {
    switch (action.type) {
            case SET_HISTORY_LIST:
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
};
