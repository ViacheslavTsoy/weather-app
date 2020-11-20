import { AnyAction } from "redux";

const initialState: any = {

};

export const weatherReducer = (state: any= initialState, action: AnyAction) => {
    switch (action.type) {
        case 'SOME_CASE':
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};
