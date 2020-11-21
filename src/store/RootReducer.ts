import { combineReducers } from 'redux';
import {weatherReducer} from "./home/reducer";
import {historyReducer} from "./history/reducer";

export default combineReducers({
    weather: weatherReducer,
    history: historyReducer,
});
